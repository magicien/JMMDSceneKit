'use strict'

import MMDNode from './MMDNode'
import MMDProgram from './MMDProgram'
import MMDReader from './MMDReader'
import MMDIKConstraint from './MMDIKConstraint'
import {
  SCNBox,
  SCNCapsule,
  SCNGeometry,
  SCNGeometryElement,
  SCNGeometryPrimitiveType,
  SCNGeometrySource,
  SCNMaterial,
  SCNMatrix4,
  SCNMatrix4MakeTranslation,
  SCNMatrix4Rotate,
  SCNMorpher,
  SCNMorpherCalculationMode,
  SCNNode,
  SCNPhysicsBallSocketJoint,
  SCNPhysicsBody,
  SCNPhysicsBodyType,
  SCNPhysicsShape,
  SCNSkinner,
  SCNSphere,
  SCNVector3,
  SKColor
} from 'jscenekit'

const _BoneNodeTypes = [
  MMDNode.Type.rotate,
  MMDNode.Type.rotateTranslate,
  MMDNode.Type.ik,
  MMDNode.Type.unknown,
  MMDNode.Type.ikChild,
  MMDNode.Type.rotateChild,
  MMDNode.Type.hidden,
  MMDNode.Type.twist,
  MMDNode.Type.roll
]

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDPMXReader extends MMDReader {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  constructor(data, directoryPath) {
    console.log('MMDPMXReader constructor')
    const isBinary = true
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    // initialize working variables
    this._workingNode = null

    // header info
    this._pmxMagic = ''
    this._version = 0.0
    this._encoding = ''

    this._numUV = 0
    this._indexSize = 0
    this._textureIndexSize = 0
    this._materialIndexSize = 0
    this._boneIndexSize = 0
    this._morphIndexSize = 0
    this._physicsBodyIndexSize = 0

    this._modelName = ''
    this._englishModelName = ''
    this._comment = ''
    this._englishComment = ''

    // vertex data
    this._vertexCount = 0
    this._vertexArray = []
    this._normalArray = []
    this._texcoordArray = []

    this._boneIndicesArray = []
    this._boneWeightsArray = []
    this._edgeArray = []

    // index data
    this._indexCount = 0
    this._indexArray = []

    // texture data
    this._textureCount = 0
    this._texturePromiseArray = []
    this._textureArray = []

    // material data
    this._materialCount = 0
    this._materialArray = []
    this._materialShapeArray = []
    this._materialIndexCountArray = []
    this._separatedIndexArray = []

    // bone data
    this._boneCount = 0
    this._rootBone = new MMDNode()
    this._boneArray = []
    this._boneInverseMatrixArray = []

    // morphing data
    this._faceCount = 0
    this._faceNameArray = []
    this._faceVertexArray = []

    // data sources
    this._vertexSource = null
    this._normalSource = null
    this._texcoordSource = null
    this._elementArray = []

    // physics body
    this._physicsBoneArray = []
    this._physicsBodyArray = []
  }

  /**
   * @access public
   * @param {} data -
   * @param {string} directoryPath -
   * @returns {MMDNode} -
   */
  static getNode(data, directoryPath) {
    const reader = new MMDPMXReader(data, directoryPath)
    return reader._loadPMXFile()
  }
 
  /**
   * @access private
   * @returns {MMDNode} -
   */
  _loadPMXFile() {
    this._workingNode = new MMDNode()

    // read contents of file
    this._readPMXHeader()
    if(this._pmxMagic !== 'PMX '){
      throw new Error(`PMX file magic error: ${this._pmxMagic}`)
    }

    // read basic data
    this._readVertex()
    this._readIndex()
    this._readTexture()
    this._readMaterial()
    this._readBone()
    this._readFace()
    this._readDisplayInfo()

    // create geometry for shader
    this._createGeometry()
    this._createFaceMorph()

    this._readPhysicsBody()
    this._readConstraint()

    if(this._version > 2.0){
      this._readSoftBody()
    }

    return this._workingNode
  }

  /**
   * @access private
   * @returns {string} -
   */
  _readPascalString() {
    const strlen = this.readUnsignedInt()
    return this.readString(strlen, this._encoding)
  }

  /**
   * read PMX header data
   * @access private
   * @returns {void}
   */
  _readPMXHeader() {
    this._pmxMagic = this.readString(4)
    this._version = this.readFloat()

    const numData = this.readUnsignedByte()
    if(numData !== 8){
      throw new Error(`unknown header data size: ${numData}`)
    }

    const encodingNo = this.readUnsignedByte()
    switch(encodingNo){
      case 0:
        this._encoding = 'utf16le'
        break
      case 1:
        this._encoding = 'utf8'
        break
      default:
        throw new Error(`unknown encoding number: ${encodingNo}`)
    }
    
    this._numUV = this.readUnsignedByte()
    this._indexSize = this.readUnsignedByte()
    this._textureIndexSize = this.readUnsignedByte()
    this._materialIndexSize = this.readUnsignedByte()
    this._boneIndexSize = this.readUnsignedByte()
    this._morphIndexSize = this.readUnsignedByte()
    this._physicsBodyIndexSize = this.readUnsignedByte()

    this._modelName = this._readPascalString()
    this._englishModelName = this._readPascalString()
    this._comment = this._readPascalString()
    this._englishComment = this._readPascalString()

    console.log(`modelName: ${this._modelName}`)
  }

  /**
   * read PMX vertex data
   * @access private
   * @returns {void}
   */
  _readVertex() {
    const vertexCount = this.readInt()
    this._vertexCount = vertexCount

    let noBone = 0
    switch(this._boneIndexSize) {
      case 1:
        noBone = 0xFF
        break
      case 2:
        noBone = 0xFFFF
        break
      case 4:
        noBone = 0xFFFFFFFF
        break
      default:
        throw new Error(`unknown bone index size: ${this._boneIndexSize}`)
    }

    for(let i=0; i<vertexCount; i++){
      this._vertexArray.push(this.readFloat())
      this._vertexArray.push(this.readFloat())
      this._vertexArray.push(-this.readFloat())

      this._normalArray.push(this.readFloat())
      this._normalArray.push(this.readFloat())
      this._normalArray.push(-this.readFloat())

      this._texcoordArray.push(this.readFloat())
      this._texcoordArray.push(this.readFloat())

      for(let j=0; j<this._numUV; j++){
        // FIXME: use additional UV
        this.readFloat()
        this.readFloat()
        this.readFloat()
        this.readFloat()
      }

      const weightType = this.readUnsignedByte()
      let weight1 = 0.0
      let weight2 = 0.0
      let weight3 = 0.0
      let weight4 = 0.0
      let boneNo1 = 0
      let boneNo2 = 0
      let boneNo3 = 0
      let boneNo4 = 0

      switch(weightType){
        case 0: // BDEF1
          boneNo1 = this.readInteger(this._boneIndexSize)
          weight1 = 1.0
          break
        case 1: // BDEF2
          boneNo1 = this.readInteger(this._boneIndexSize)
          boneNo2 = this.readInteger(this._boneIndexSize)
          weight1 = this.readFloat()
          weight2 = 1.0 - weight1
          break
        case 2: // BDEF4
          boneNo1 = this.readInteger(this._boneIndexSize)
          boneNo2 = this.readInteger(this._boneIndexSize)
          boneNo3 = this.readInteger(this._boneIndexSize)
          boneNo4 = this.readInteger(this._boneIndexSize)
          weight1 = this.readFloat()
          weight2 = this.readFloat()
          weight3 = this.readFloat()
          weight4 = this.readFloat()
          break
        case 3: // SDEF
          boneNo1 = this.readInteger(this._boneIndexSize)
          boneNo2 = this.readInteger(this._boneIndexSize)
          weight1 = this.readFloat()
          weight2 = 1.0 - weight1

          // FIXME: use SDEF-C
          this.readFloat()
          this.readFloat()
          this.readFloat()

          // FIXME: use SDEF-R0
          this.readFloat()
          this.readFloat()
          this.readFloat()

          // FIXME: use SDEF-R1
          this.readFloat()
          this.readFloat()
          this.readFloat()
          break
        case 4: // QDEF
          boneNo1 = this.readInteger(this._boneIndexSize)
          boneNo2 = this.readInteger(this._boneIndexSize)
          boneNo3 = this.readInteger(this._boneIndexSize)
          boneNo4 = this.readInteger(this._boneIndexSize)
          weight1 = this.readFloat()
          weight2 = this.readFloat()
          weight3 = this.readFloat()
          weight4 = this.readFloat()
          break
        default:
          throw new Error(`unknown skin weight type: ${weightType}`)
      }

      if(boneNo1 === noBone){
        boneNo1 = 0
        weight1 = 0
      }
      if(boneNo2 === noBone){
        boneNo2 = 0
        weight2 = 0
      }
      if(boneNo3 === noBone){
        boneNo3 = 0
        weight3 = 0
      }
      if(boneNo4 === noBone){
        boneNo4 = 0
        weight4 = 0
      }

      //console.log(`boneIndex ${i} ${boneNo1}:${weight1} ${boneNo2}:${weight2} ${boneNo3}:${weight3} ${boneNo4}:${weight4}`)

      // the first weight must not be 0 in SceneKit...
      if(weight1 === 0.0){
        if(weight2 !== 0.0){
          this._boneIndicesArray.push(boneNo2)
          this._boneIndicesArray.push(boneNo1)
          this._boneIndicesArray.push(boneNo3)
          this._boneIndicesArray.push(boneNo4)

          this._boneWeightsArray.push(weight2)
          this._boneWeightsArray.push(weight1)
          this._boneWeightsArray.push(weight3)
          this._boneWeightsArray.push(weight4)
        }else if(weight3 !== 0.0){
          this._boneIndicesArray.push(boneNo3)
          this._boneIndicesArray.push(boneNo1)
          this._boneIndicesArray.push(boneNo2)
          this._boneIndicesArray.push(boneNo4)

          this._boneWeightsArray.push(weight3)
          this._boneWeightsArray.push(weight1)
          this._boneWeightsArray.push(weight2)
          this._boneWeightsArray.push(weight4)
        }else if(weight4 !== 0.0){
          this._boneIndicesArray.push(boneNo4)
          this._boneIndicesArray.push(boneNo1)
          this._boneIndicesArray.push(boneNo2)
          this._boneIndicesArray.push(boneNo3)

          this._boneWeightsArray.push(weight4)
          this._boneWeightsArray.push(weight1)
          this._boneWeightsArray.push(weight2)
          this._boneWeightsArray.push(weight3)
        }else{
          throw new Error('bad data definition: all bone weights are 0.')
        }
      }else{
        this._boneIndicesArray.push(boneNo1)
        this._boneIndicesArray.push(boneNo2)
        this._boneIndicesArray.push(boneNo3)
        this._boneIndicesArray.push(boneNo4)

        this._boneWeightsArray.push(weight1)
        this._boneWeightsArray.push(weight2)
        this._boneWeightsArray.push(weight3)
        this._boneWeightsArray.push(weight4)
      }

      this._edgeArray.push(this.readFloat())
    }
  }

  /**
   * read PMX index data
   * @access private
   * @returns {void}
   */
  _readIndex() {
    const indexCount = this.readUnsignedInt()
    this._indexCount = indexCount
    console.log(`indexCount: ${indexCount}`)

    for(let i=0; i<indexCount; i++){
      this._indexArray.push(this.readInteger(this._indexSize))
    }
  }

  /**
   * read PMX texture data
   * @access private
   * @returns {void}
   */
  _readTexture() {
    const textureCount = this.readUnsignedInt()
    this._textureCount = textureCount

    for(let i=0; i<textureCount; i++){
      const textureFile = this._readPascalString()
      const index = this._texturePromiseArray.length
      this._texturePromiseArray.push(
        this.loadTexture(textureFile)
          .then((texture) => {
            this._textureArray[index] = texture
          })
      )
    }
  }

  /**
   * read PMX material data
   * @access private
   * @returns {void}
   */
  _readMaterial() {
    const materialCount = this.readUnsignedInt()
    this._materialCount = materialCount

    let indexPos = 0

    for(let i=0; i<materialCount; i++){
      const material = new SCNMaterial()
      material.name = this._readPascalString()

      const englishName = this._readPascalString()

      material.diffuse.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      material.specular.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      material.shininess = this.readFloat()
      material.ambient.contents = new SKColor(0, 0, 0, 1)
      material.emission.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)

      const bitFlag = this.readUnsignedByte()
      const edgeColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())

      const noCulling = ((bitFlag & 0x01) !== 0)
      const floorShadow = ((bitFlag & 0x02) !== 0)
      const shadowMap = ((bitFlag & 0x04) !== 0)
      const selfShadow = ((bitFlag & 0x08) !== 0)
      const drawEdge = ((bitFlag & 0x10) !== 0)
      const vertexColor = ((bitFlag & 0x20) !== 0)
      const drawPoint = ((bitFlag & 0x40) !== 0)
      const drawLine = ((bitFlag & 0x80) !== 0)

      const edgeSize = this.readFloat()
      const textureNo = this.readInteger(this._textureIndexSize)
      const sphereTextureNo = this.readInteger(this._textureIndexSize)
      const sphereMode = this.readUnsignedByte()
      const toonFlag = this.readUnsignedByte()
      let toonTextureNo = 0

      if(textureNo < this._texturePromiseArray.length){
        material.diffuse._loadedPromise = this._texturePromiseArray[textureNo].then(() => {
          material.diffuse.contents = this._textureArray[textureNo]
          console.warn('material.diffuse promise resolve')
        })
      }

      if(toonFlag === 0){
        toonTextureNo = this.readInteger(this._textureIndexSize)
      }else if(toonFlag === 1){
        toonTextureNo = this.readUnsignedByte()
      }else{
        throw new Error(`unknown toon flag: ${toonFlag}`)
      }

      if(noCulling){
        material.isDoubleSided = true
      }else{
        material.isDoubleSided = false
      }

      // FIXME: use floorShadow, shadowMap property
      // FIXME: use drawEdge property
      // FIXME: use vertexColor

      let shape = SCNGeometryPrimitiveType.triangles
      if(drawPoint){
        shape = SCNGeometryPrimitiveType.point
      }else if(drawLine){
        shape = SCNGeometryPrimitiveType.line
      }

      this._materialShapeArray.push(shape)

      const text = this._readPascalString()
      const materialIndexCount = this.readUnsignedInt()

      // create index data
      const orgArray = this._indexArray.slice(indexPos, indexPos + materialIndexCount)
      let newArray = []
      indexPos += materialIndexCount
      console.log(`indexPos: ${text} ${indexPos}`)

      let arrayPos = 0
      let newIndexCount = 0
      if(shape === SCNGeometryPrimitiveType.point){
        while(arrayPos < materialIndexCount){
          const index1 = orgArray[arrayPos + 0]
          const index2 = orgArray[arrayPos + 1]
          const index3 = orgArray[arrayPos + 2]

          if(index1 === index2 && index2 === index3){
            newArray.push(index1)
            newIndexCount += 1
          }else{
            newArray.push(index1)
            newArray.push(index2)
            newArray.push(index3)
            newIndexCount += 3
          }
          arrayPos += 3
        }
      }else if(shape === SCNGeometryPrimitiveType.line){
        while(arrayPos < materialIndexCount){
          const index1 = orgArray[arrayPos + 0]
          const index2 = orgArray[arrayPos + 1]
          const index3 = orgArray[arrayPos + 2]

          if(index1 === index3){
            newArray.push(index1)
            newArray.push(index2)
            newIndexCount += 1
          }else{
            newArray.push(index1)
            newArray.push(index2)

            newArray.push(index2)
            newArray.push(index3)

            newArray.push(index3)
            newArray.push(index1)

            newIndexCount += 3
          }
          arrayPos += 3
        }
      }else if(shape === SCNGeometryPrimitiveType.triangles){
        while(arrayPos < materialIndexCount){
          const index1 = orgArray[arrayPos + 0]
          const index2 = orgArray[arrayPos + 1]
          const index3 = orgArray[arrayPos + 2]

          newArray.push(index1)
          newArray.push(index3)
          newArray.push(index2)

          newIndexCount += 1
          arrayPos += 3
        }
      }

      this._materialIndexCountArray.push(newIndexCount)
      this._materialArray.push(material)
      this._separatedIndexArray.push(newArray)
    }
  }

  /**
   * read PMX bone data
   * @access private
   * @returns {void}
   */
  _readBone() {
    const bonePositionArray = []
    const parentNoArray = []

    const boneCount = this.readUnsignedInt()
    this._boneCount = boneCount
    this._rootBone.position = new SCNVector3(0, 0, 0)
    this._rootBone.name = 'rootBone'

    this._workingNode.ikArray = []

    for(let i=0; i<boneCount; i++){
      const boneNode = new MMDNode()
      this._boneArray.push(boneNode)
    }

    for(let i=0; i<boneCount; i++){
      const boneNode = this._boneArray[i]
      boneNode.name = this._readPascalString()
      const englishName = this._readPascalString()

      if(boneNode.name.startsWith('右ひざ') || boneNode.name.startsWith('左ひざ')){
        boneNode.isKnee = true
      }

      const x = this.readFloat()
      const y = this.readFloat()
      const z = -this.readFloat()

      const position = new SCNVector3(x, y, z)
      bonePositionArray.push(position)

      parentNoArray.push(this.readInteger(this._boneIndexSize))
      const level = this.readInt()
      const flags = this.readUnsignedShort()

      const hasChildBoneIndex = ((flags & 0x0001) !== 0)
      const isRotatable = ((flags & 0x0002) !== 0)
      const isMovable = ((flags & 0x0004) !== 0)
      const isVisible = ((flags & 0x0008) !== 0)
      const isControllable = ((flags & 0x0010) !== 0)
      const isIKBone = ((flags & 0x0020) !== 0)
      // 0x0040: ?
      const isLocalValue = ((flags & 0x0080) !== 0)
      const hasRotationValue = ((flags & 0x0100) !== 0)
      const hasTranslationValue = ((flags & 0x0200) !== 0)
      const hasFixAxis = ((flags & 0x0400) !== 0)
      const hasLocalAxis = ((flags & 0x0800) !== 0)
      const isDeformable = ((flags & 0x1000) !== 0)
      const hasDeformableParent = ((flags & 0x2000) !== 0)

      if(hasChildBoneIndex){
        const childBoneNo = this.readInteger(this._boneIndexSize)
      }else{
        this.readFloat()
        this.readFloat()
        this.readFloat()
      }

      if(hasRotationValue || hasTranslationValue){
        const boneIndex = this.readInteger(this._boneIndexSize)
        const rate = this.readFloat()
        const bone = this._boneArray[boneIndex]
        console.log(`   rotation/translation: [${boneIndex}] ${bone.name} ${rate}`)

        if(hasRotationValue){
          boneNode.rotateEffector = bone
          boneNode.rotateEffectRate = rate
        }
        if(hasTranslationValue){
          boneNode.translateEffector = bone
          boneNode.translateEffectRate = rate
        }
      }

      if(hasFixAxis){
        const _x = this.readFloat()
        const _y = this.readFloat()
        const _z = this.readFloat()
      }

      if(hasLocalAxis){
        const xAxisX = this.readFloat()
        const xAxisY = this.readFloat()
        const xAxisZ = this.readFloat()

        const zAxisX = this.readFloat()
        const zAxisY = this.readFloat()
        const zAxisZ = this.readFloat()
      }

      if(hasDeformableParent){
        const parentBoneKey = this.readInt()
      }

      if(isIKBone){
        const ik = new MMDIKConstraint()

        const targetBoneNo = this.readInteger(this._boneIndexSize)
        const targetBone = this._boneArray[targetBoneNo]

        const iteration = this.readInt()
        const weight = this.readFloat()
        const numLink = this.readInt()

        ik.ikBone = boneNode
        ik.targetBone = targetBone
        ik.iteration = iteration
        ik.weight = weight * 0.25 * Math.PI
        ik.boneArray = []

        console.log(`targetBoneNo: ${targetBoneNo} ${targetBone.name} ikBone: ${ik.ikBone.name}`)

        const linkBoneNoArray = []
        for(let j=0; j<numLink; j++){
          const linkNo = this.readUnsignedShort()
          const bone = this._boneArray[linkNo]

          const limitFlag = this.readUnsignedByte()
          if(limitFlag === 1){
            // TODO: constraint
            const minX = this.readFloat()
            const minY = this.readFloat()
            const minZ = this.readFloat()
            const maxX = this.readFloat()
            const maxY = this.readFloat()
            const maxZ = this.readFloat()
          }

          ik.boneArray.push(bone)
        }

        this._workingNode.ikArray.push(ik)
      }
    }

    // set parent node
    let noParent = 0
    if(this._boneIndexSize === 1){
      noParent = 0xFF
    }else if(this._boneIndexSize === 2){
      noParent = 0xFFFF
    }else if(this._boneIndexSize === 4){
      noParent = 0xFFFFFFFF
    }

    for(let i=0; i<this._boneCount; i++){
      const bone = this._boneArray[i]
      const parentNo = parentNoArray[i]
      const bonePos = bonePositionArray[i]

      if(parentNo !== noParent){
        this._boneArray[parentNo].addChildNode(bone)

        const parentPos = bonePositionArray[parentNo]
        bone._position.x = bonePos.x - parentPos.x
        bone._position.y = bonePos.y - parentPos.y
        bone._position.z = bonePos.z - parentPos.z
      }else{
        this._rootBone.addChildNode(bone)
        bone._position = bonePos
      }
    }

    // calc initial matrix
    for(let i=0; i<this._boneCount; i++){
      const bonePos = bonePositionArray[i]
      const matrix = SCNMatrix4.matrixWithTranslation(-bonePos.x, -bonePos.y, -bonePos.z)
      this._boneInverseMatrixArray.push(matrix)
    }

    this._boneArray.push(this._rootBone)
    this._boneInverseMatrixArray.push(SCNMatrix4.matrixWithTranslation(0, 0, 0))

    this._workingNode.addChildNode(this._rootBone)
  }

  /**
   * read PMX face data
   * @access private
   * @returns {void}
   */
  _readFace() {
    const faceCount = this.readUnsignedInt()
    this._faceCount = faceCount

    for(let i=0; i<faceCount; i++){
      const name = this._readPascalString()
      const englishName = this._readPascalString()
      const panelNo = this.readUnsignedByte()
      const type = this.readUnsignedByte()
      const offsetCount = this.readInt()

      switch(type){
        case 0: // group morph
          this._readGroupMorph(offsetCount)
          break
        case 1: // vertex morph
          this._readVertexMorph(offsetCount)
          this._faceNameArray.push(name)
          break
        case 2: // bone morph
          this._readBoneMorph(offsetCount)
          break
        case 3: // UV morph
          this._readUVMorph(offsetCount, 0)
          break
        case 4: // additional UV - 1
          this._readUVMorph(offsetCount, 1)
          break
        case 5: // additional UV - 2
          this._readUVMorph(offsetCount, 2)
          break
        case 6: // additional UV - 3
          this._readUVMorph(offsetCount, 3)
          break
        case 7: // additional UV - 4
          this._readUVMorph(offsetCount, 4)
          break
        case 8: // material morph
          this._readMaterialMorph(offsetCount)
          break
        case 9: // flip morph
          this._readFlipMorph(offsetCount)
          break
        case 10: // impulse morph
          this._readImpulseMorph(offsetCount)
          break
        default: // unknown type
          throw new Error(`unknown face type: ${type}`)
      }
    }
  }

  /**
   * read PMX vertex morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readVertexMorph(count) {
    const faceVertex = []

    for(let i=0; i<count; i++){
      const index = this.readInteger(this._indexSize)
      const vertexIndex = index * 3

      const x = this.readFloat()
      const y = this.readFloat()
      const z = -this.readFloat()

      faceVertex[vertexIndex + 0] = x
      faceVertex[vertexIndex + 1] = y
      faceVertex[vertexIndex + 2] = z
    }

    this._faceVertexArray.push(faceVertex)
  }

  /**
   * read PMX uv morphing data
   * @access private
   * @param {number} count -
   * @param {number} textureNo -
   * @returns {void}
   */
  _readUVMorph(count, textureNo) {
    for(let i=0; i<count; i++){
      const index = this.readInteger(this._indexSize)
      const x = this.readFloat()
      const y = this.readFloat()
      const z = this.readFloat()
      const w = this.readFloat()
    }
  }

  /**
   * read PMX bone morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readBoneMorph(count) {
    for(let i=0; i<count; i++){
      const index = this.readInteger(this._boneIndexSize)
      const posX = this.readFloat()
      const posY = this.readFloat()
      const posZ = -this.readFloat()

      const quatX = this.readFloat()
      const quatY = this.readFloat()
      const quatZ = this.readFloat()
      const quatW = this.readFloat()
    }
  }

  /**
   * read PMX material morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readMaterialMorph(count) {
    for(let i=0; i<count; i++){
      const index = this.readInteger(this._materialIndexSize)
      const addColor = this.readUnsignedByte()
      const diffuseColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      const specularColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      const shininess = this.readFloat()
      const ambientColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      const edgeColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      const edgeSize = this.readFloat()
      const textureColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      const sphereColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      const toonColor = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
    }
  }

  /** 
   * read PMX group morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readGroupMorph(count) {
    for(let i=0; i<count; i++){
      const morphIndex = this.readInteger(this._morphIndexSize)
      const rate = this.readFloat()
    }
  }

  /**
   * read PMX flip morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readFlipMorph(count) {
    for(let i=0; i<count; i++){
      const morphIndex = this.readInteger(this._morphIndexSize)
      const rate = this.readFloat()
    }
  }

  /**
   * read PMX impulse morphing data
   * @access private
   * @param {number} count -
   * @returns {void}
   */
  _readImpulseMorph(count) {
    for(let i=0; i<count; i++){
      const morphIndex = this.readInteger(this._morphIndexSize)
      const isLocal = this.readUnsignedByte()

      const vx = this.readFloat()
      const vy = this.readFloat()
      const vz = -this.readFloat()

      const torqueX = this.readFloat()
      const torqueY = this.readFloat()
      const torqueZ = this.readFloat()
    }
  }

  /**
   * read PMX face morphing data
   * @access private
   * @returns {void}
   */
  _createFaceMorph() {
    const morpher = new SCNMorpher()
    morpher.calculationMode = SCNMorpherCalculationMode.additive

    const count = this._faceVertexArray.length
    for(let i=0; i<count; i++){
      const faceVertexData = this._faceVertexArray[i]
      const faceVertexSource = new SCNGeometrySource(
        faceVertexData, // data
        SCNGeometrySource.Semantic.vertex, // semantic
        this._vertexCount, // vectorCount
        true, // usesFloatComponents
        3, // componentsPerVector
        4, // bytesPerComponent
        0, // dataOffset
        12 // dataStride
      )
      const faceGeometry = new SCNGeometry([faceVertexSource, this._normalSource], [])
      faceGeometry.name = this._faceNameArray[i]

      morpher.targets.push(faceGeometry)
    }
    const geometryNode = this._workingNode.childNodeWithNameRecursively('Geometry', true)
    geometryNode.morpher = morpher
    this._workingNode.geometryMorpher = morpher
  }

  /**
   * read PMX display info
   * @access private
   * @returns {void}
   */
  _readDisplayInfo() {
    const displayCount = this.readUnsignedInt()

    for(let i=0; i<displayCount; i++){
      const infoName = this._readPascalString()
      const englishInfoName = this._readPascalString()
      const flag = this.readUnsignedByte()
      const infoCount = this.readInt()

      for(let j=0; j<infoCount; j++){
        const type = this.readUnsignedByte()

        if(type === 0){
          const boneIndex = this.readInteger(this._boneIndexSize)
        }else if(type === 1){
          const morphIndex = this.readInteger(this._morphIndexSize)
        }else{
          throw new Error(`unknown display info type: ${type}`)
        }
      }
    }
  }

  /**
   * create geometry objects
   * @access private
   * @returns {void}
   */
  _createGeometry() {
    const vertexData = this._vertexArray
    const normalData = this._normalArray
    const texcoordData = this._texcoordArray
    const boneWeightsData = this._boneWeightsArray
    let boneIndicesData = null
    switch(this._boneIndexSize){
      case 1: {
        //const array = []
        //this._boneIndicesArray.forEach((data) => {
        //  array.push(data)
        //})
        //boneIndicesData = array
        boneIndicesData = this._boneIndicesArray
        break
      }
      case 2: {
        //const array = []
        //this._boneIndicesArray.forEach((data) => {
        //  array.push(data)
        //})
        //boneIndicesData = array
        boneIndicesData = this._boneIndicesArray
        break
      }
      case 4: {
        //const array = []
        //this._boneIndicesArray.forEach((data) => {
        //  array.push(data)
        //})
        //boneIndicesData = array
        boneIndicesData = this._boneIndicesArray
        break
      }
      default: {
        throw new Error(`unknown bone indices size: ${this._boneIndexSize}`)
      }
    }

    this._vertexSource = new SCNGeometrySource(
      vertexData, // data
      SCNGeometrySource.Semantic.vertex, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
    )
    this._normalSource = new SCNGeometrySource(
      normalData, // data
      SCNGeometrySource.Semantic.normal, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
    )
    this._texcoordSource = new SCNGeometrySource(
      texcoordData, // data
      SCNGeometrySource.Semantic.texcoord, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
    )

    const boneIndicesSource = new SCNGeometrySource(
      boneIndicesData, // data
      SCNGeometrySource.Semantic.boneIndices, // semantic
      this._vertexCount, // vectorCount
      false, // usesFloatComponents
      4, // componentsPerVector
      this._boneIndexSize, // bytesPerComponent
      0, // dataOffset
      4 * this._boneIndexSize // dataStride
    )
    const boneWeightsSource = new SCNGeometrySource(
      boneWeightsData, // data
      SCNGeometrySource.Semantic.boneWeights, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      4, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      16 // dataStride
    )

    for(let i=0; i<this._materialCount; i++){
      const count = this._materialIndexCountArray[i]
      const indexArray = this._separatedIndexArray[i]
      let indexData = null
      switch(this._indexSize){
        case 1: {
          //const array = []
          //indexArray.forEach((data) => {
          //  array.push(data)
          //})
          //indexData = array
          indexData = indexArray
          break
        }
        case 2: {
          //const array = []
          //indexArray.forEach((data) => {
          //  array.push(data)
          //})
          //indexData = array
          indexData = indexArray
          break
        }
        case 4: {
          //const array = []
          //indexArray.forEach((data) => {
          //  array.push(data)
          //})
          //indexData = array
          indexData = indexArray
          break
        }
        default: {
          throw new Error(`unknown vertex indices size: ${this._boneIndexSize}`)
        }
      }

      // FIXME: use Point/Line in the A-A-A pattern or the A-B-A pattern

      const primitiveType = this._materialShapeArray[i]
      const element = new SCNGeometryElement(
        indexData, // data
        primitiveType, // primitiveType
        count, // primitiveCount
        this._indexSize // bytesPerIndex
      )

      this._elementArray.push(element)
    }

    //const program = new MMDProgram()
    //// TODO: implement MMD renderer
    //this._materialArray.forEach((material) => {
    //  material.program = program
    //})
    const geometry = new SCNGeometry([this._vertexSource, this._normalSource, this._texcoordSource], this._elementArray)
    geometry.materials = this._materialArray
    geometry.name = 'Geometry'

    const geometryNode = new SCNNode(geometry)
    geometryNode.name = 'Geometry'

    const skinner = new SCNSkinner(
      geometry, // baseGeometry
      this._boneArray, // bones
      this._boneInverseMatrixArray, // boneInverseBindTransforms
      boneWeightsSource, // boneWeights
      boneIndicesSource // boneIndices
    )

    geometryNode.skinner = skinner
    geometryNode.skinner.skeleton = this._rootBone
    geometryNode.castsShadow = true

    this._workingNode.name = this._modelName
    this._workingNode.castsShadow = true
    this._workingNode.addChildNode(geometryNode)

    this._workingNode.vertexArray = this._vertexArray

    this._workingNode.boneArray = this._boneArray
    this._workingNode.boneInverseMatrixArray = this._boneInverseMatrixArray

    this._workingNode.vertexCount = this._vertexCount
    this._workingNode.vertexArray = this._vertexArray
    this._workingNode.normalArary = this._normalArray
    this._workingNode.texcoordArray = this._texcoordArray

    this._workingNode.boneWeightsArray = this._boneWeight
    this._workingNode.indexCount = this._indexCount
    this._workingNode.materialCount = this._materialCount
    this._workingNode.materialArray = this._mateiralArray
    this._workingNode.materialIndexCountArray = this._materialIndexCountArray
    this._workingNode.rootBone = this._rootBone
  }

  /**
   * read PMX physics body data
   * @access private
   * @returns {void}
   */
  _readPhysicsBody() {
    const bodyCount = this.readUnsignedInt()

    console.log(`readPhysicsBody bodyCount: ${bodyCount}`)

    for(let i=0; i<bodyCount; i++){
      const name = this._readPascalString()
      console.log(`physics body name: ${name}`)
      const englishName = this._readPascalString()
      const boneIndex = this.readInteger(this._boneIndexSize)

      const groupIndex = this.readUnsignedByte()
      const groupTarget = this.readUnsignedShort()
      const shapeType = this.readUnsignedByte()
      const dx = this.readFloat()
      const dy = this.readFloat()
      const dz = this.readFloat()
      const posX = this.readFloat()
      const posY = this.readFloat()
      const posZ = -this.readFloat()
      const rotX = -this.readFloat()
      const rotY = -this.readFloat()
      const rotZ = this.readFloat()
      const weight = this.readFloat()
      const positionDim = this.readFloat()
      const rotateDim = this.readFloat()
      const recoil = this.readFloat()
      const friction = this.readFloat()
      const type = this.readUnsignedByte()

      let bodyType = null
      if(type === 0){
        bodyType = SCNPhysicsBodyType.kinematic
      }else if(type === 1){
        bodyType = SCNPhysicsBodyType.dynamic
      }else if(type === 2){
        bodyType = SCNPhysicsBodyType.dynamic
      }
      bodyType = SCNPhysicsBodyType.kinematic // for debug

      let shape = null
      if(shapeType === 0){
        shape = new SCNSphere(dx)
      }else if(shapeType === 1){
        shape = new SCNBox(dx, dy, dz, 0.0)
      }else if(shapeType === 2){
        shape = new SCNCapsule(dx, dy)
      }else{
        throw new Error(`unknown physics body shape: ${shapeType}`)
      }

      let bone = null
      if(boneIndex !== -1){
        bone = this._boneArray[boneIndex]
      }
      if(bone === null || typeof bone === 'undefined'){
        bone = this._boneArray[0]
      }

      let worldTransform = SCNMatrix4MakeTranslation(posX, posY, posZ)
      worldTransform = worldTransform.rotation(0, 1, 0, rotY)
      worldTransform = worldTransform.rotation(1, 0, 0, rotX)
      worldTransform = worldTransform.rotation(0, 0, 1, rotZ)

      const invBoneTransform = bone.worldTransform.invert()
      const physicsTransform = worldTransform.mult(invBoneTransform)
      const physicsShape = new SCNPhysicsShape(shape, null)
      let transformedShape = new SCNPhysicsShape([physicsShape], [physicsTransform])

      if(bone.physicsBody !== null){
        const identity = SCNMatrix4MakeTranslation(0, 0, 0)
        transformedShape = new SCNPhysicsShape([bone.physicsBody.physicsShape, transformedShape], [identity, identity])
      }
      const body = new SCNPhysicsBody(bodyType, transformedShape)

      body.isAffectedByGravity = true
      body.mass = weight
      body.friction = friction
      body.rollingFriction = friction
      body.dumping = positionDim
      body.angularDamping = rotateDim
      body.categoryBitMask = (1 << groupIndex)
      body.collisionBitMask = groupTarget
      body.restitution = recoil
      body.usesDefaultMomentOfInertia = true
      body.allowsResting = true
      body.charge = 0

      if(boneIndex !== -1){
        bone.physicsBody = body
      }

      this._physicsBoneArray.push(bone)
    }

    this._physicsBoneArray.forEach((bone) => {
      this._physicsBodyArray.push(bone.physicsBody)
    })
  }

  /**
   * read PMX constraint data
   * @access private
   * @returns {void}
   */
  _readConstraint() {
    const constraintCount = this.readUnsignedInt()
    this._workingNode.joints = []
    for(let i=0; i<constraintCount; i++){
      const name = this._readPascalString()
      console.log(`constraint name: ${name}`)
      const englishName = this._readPascalString()
      const type = this.readUnsignedByte()

      const bodyANo = this.readInteger(this._physicsBodyIndexSize)
      const bodyBNo = this.readInteger(this._physicsBodyIndexSize)

      const bodyA = this._physicsBodyArray[bodyANo]
      const bodyB = this._physicsBodyArray[bodyBNo]

      const pos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const rot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const minPos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const manPos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const minRot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const manRot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const springPos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const springRot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const boneA = this._physicsBoneArray[bodyANo]
      const boneB = this._physicsBoneArray[bodyBNo]

      const anchorA = new SCNVector3(
        pos.x - boneA.worldTransform.m41,
        pos.y - boneA.worldTransform.m42,
        pos.z - boneA.worldTransform.m43
      )
      const anchorB = new SCNVector3(
        pos.x - boneB.worldTransform.m41,
        pos.y - boneB.worldTransform.m42,
        pos.z - boneB.worldTransform.m43
      )

      if(boneA === boneB){
        continue
      }

      const constraint = new SCNPhysicsBallSocketJoint(bodyA, anchorA, bodyB, anchorB)
      this._workingNode.joints.push(constraint)
    }
  }

  /**
   * read PMX soft body data
   * @access private
   * @returns {void}
   */
  _readSoftBody() {
    const softBodyCount = this.readUnsignedInt()

    for(let i=0; i<softBodyCount; i++){
      const name = this._readPascalString()
      const englishName = this._readPascalString()

      const shape = this.readUnsignedByte()
      if(shape === 0){
        // TriMesh
      }else if(shape === 1){
        // Rope
      }else{
        throw new Error(`unknown softbody type: ${shape}`)
      }

      const index = this.readInteger(this._materialIndexSize)
      const groupIndex = this.readUnsignedByte()
      const groupTarget = this.readUnsignedShort()

      const flags = this.readUnsignedByte()
      if(flags & 0x01){
        // TODO: create B-Link
      }
      if(flags & 0x02){
        // TODO: create cluster
      }
      if(flags & 0x04){
        // TODO: mix links
      }

      /*
        4  : int	| B-Link 作成距離
        4  : int	| クラスタ数
        
        4  : float	| 総質量
        4  : float	| 衝突マージン
        
        4  : int	| AeroModel - 0:V_Point, 1:V_TwoSided, 2:V_OneSided, 3:F_TwoSided, 4:F_OneSided
        
        <config>
        4  : float	| VCF
        4  : float	| DP
        4  : float	| DG
        4  : float	| LF
        4  : float	| PR
        4  : float	| VC
        4  : float	| DF
        4  : float	| MT
        4  : float	| CHR
        4  : float	| KHR
        4  : float	| SHR
        4  : float	| AHR
        
        <cluster>
        4  : float	| SRHR_CL
        4  : float	| SKHR_CL
        4  : float	| SSHR_CL
        4  : float	| SR_SPLT_CL
        4  : float	| SK_SPLT_CL
        4  : float	| SS_SPLT_CL
        
        <iteration>
        4  : int	| V_IT
        4  : int	| P_IT
        4  : int	| D_IT
        4  : int	| C_IT
        
        <material>
        4  : float	| LST
        4  : float	| AST
        4  : float	| VST
        
        4  : int	| アンカー剛体数
        <アンカー剛体>
        n  : 剛体Indexサイズ  | 関連剛体Index
        n  : 頂点Indexサイズ  | 関連頂点Index
        1  : byte	| Near モード  0:OFF 1:ON
        </アンカー剛体>
        * アンカー剛体数
        
        4  : int	| Pin頂点数
        <Pin頂点>
        n  : 頂点Indexサイズ  | 関連頂点Index
        </Pin頂点>
        * Pin頂点数
      */
    }
  }
}

