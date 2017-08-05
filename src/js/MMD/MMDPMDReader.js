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
  SCNMorpher,
  SCNMorpherCalculationMode,
  SCNNode,
  SCNPhysicsBody,
  SCNPhysicsBodyType,
  SCNPhysicsField,
  SCNPhysicsShape,
  SCNSkinner,
  SCNSphere,
  SCNVector3,
  SCNWrapMode,
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
export default class MMDPMDReader extends MMDReader {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  constructor(data, directoryPath) {
    const isBinary = true
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    /** @type {MMDNode} */
    this._workingNode = null

    // header
    this._pmdMagic = ''
    this._version = 0.0
    this._modelName = ''
    this._comment = ''

    // vertex data
    this._vertexCount = 0
    this._vertexArray = []
    this._normalArray = []
    this._texcoordArray = []
    this._boneIndicesArray = []
    this._boneWeightsArray = []

    // index data
    this._indexCount = 0
    this._indexArray = []

    // material data
    this._materialCount = 0
    this._materialIndexCountArray = []
    this._materialArray = []

    // bone data
    this._rootBone = new MMDNode()
    this._boneCount = 0
    this._boneArray = []
    this._boneHash = new Map()
    this._boneInverseMatrixArray = []

    // ik data
    this._ikCount = 0

    // face data
    this._faceCount = 0
    this._faceNameArray = []
    this._faceVertexArray = []
    this._faceIndexArray = []

    // display info
    this._faceDisplayCount = 0
    this._boneDisplayNameCount = 0
    //this._boneDisplayCount

    // toon texture info
    //this._textureFileNames

    // physics
    this._physicsBodyCount = 0
    this._physicsBodyArray = []

    // geometry
    this._vertexSource = null
    this._normalSource = null
    this._texcoordSource = null
    this._boneIndicesSource = null
    this._boneWeightsSource = null
    this._elementArray = []
  }

  static getNode(data, directoryPath) {
    const reader = new MMDPMDReader(data, directoryPath)
    return reader._loadPMDFile()
  }
 
  /**
   * @access private
   * @returns {MMDNode} -
   */
  _loadPMDFile() {
    this._workingNode = new MMDNode()

    this._readPMDHeader()
    if(this._pmdMagic !== 'Pmd'){
      throw new Error('incorrect PMD format')
    }

    // read basic data
    this._readVertex()
    this._readIndex()
    this._readMaterial()
    this._readBone()
    this._readIK()
    this._readFace()
    this._readDisplayInfo()

    // create geometry for shader
    this._createGeometry()
    this._createFaceMorph()

    // read additional data
    if(this.pos >= this.length){
      return this._workingNode
    }

    this._readEnglishInfo()
    if(this.pos >= this.length){
      return this._workingNode
    }

    this._readToonTexture()

    if(this.pos >= this.length){
      return this._workingNode
    }

    this._readPhysicsBody()
    this._readConstraint()

    return this._workingNode
  }

  _readPMDHeader() {
    this._pmdMagic = this.readString(3)
    this._version = this.readFloat()
    this._modelName = this.readString(20)
    this._comment = this.readString(256)
  }

  _readVertex() {
    const vertexCount = this.readUnsignedInt()
    this._vertexCount = vertexCount

    const edgeArray = []

    for(let i=0; i<vertexCount; i++){
      this._vertexArray.push(this.readFloat())
      this._vertexArray.push(this.readFloat())
      this._vertexArray.push(-this.readFloat())

      this._normalArray.push(this.readFloat())
      this._normalArray.push(this.readFloat())
      this._normalArray.push(-this.readFloat())

      this._texcoordArray.push(this.readFloat())
      this._texcoordArray.push(this.readFloat())

      const boneNo1 = this.readUnsignedShort()
      const boneNo2 = this.readUnsignedShort()

      const weightByte = this.readUnsignedByte()
      const weight1 = weightByte / 100.0
      const weight2 = 1.0 - weight1

      if(weight1 === 0.0){
        this._boneIndicesArray.push(boneNo2)
        this._boneIndicesArray.push(boneNo1)

        this._boneWeightsArray.push(weight2)
        this._boneWeightsArray.push(weight1)
      }else{
        this._boneIndicesArray.push(boneNo1)
        this._boneIndicesArray.push(boneNo2)

        this._boneWeightsArray.push(weight1)
        this._boneWeightsArray.push(weight2)
      }

      // FIXME: use edge data for rendering
      edgeArray.push(this.readUnsignedByte())
    }
  }

  _readIndex() {
    this._indexCount = this.readUnsignedInt()
    const triangles = this._indexCount / 3

    for(let i=0; i<triangles; i++){
      const index1 = this.readUnsignedShort()
      const index2 = this.readUnsignedShort()
      const index3 = this.readUnsignedShort()

      // change the index order because of the coordination difference
      this._indexArray.push(index1)
      this._indexArray.push(index3)
      this._indexArray.push(index2)
    }
  }

  _readMaterial() {
    this._materialCount = this.readUnsignedInt()
    
    for(let i=0; i<this._materialCount; i++){
      const material = new SCNMaterial()
      material.diffuse.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
      material.shininess = this.readFloat()
      material.specular.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      material.emission.contents = new SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      material.ambient.contents = new SKColor(0.0, 0.0, 0.0, 0.0)

      const toonIndex = this.readUnsignedByte()
      const edge = this.readUnsignedByte()
      const indexCount = this.readUnsignedInt()
      let textureFile = this.readString(20)
      let sphereFile = ''
      if(textureFile.indexOf('*') >= 0){
        const files = textureFile.split('*')
        textureFile = files[0]
        sphereFile = files[1]
      }
      if(textureFile.endsWith('spa') || textureFile.endsWith('sph')){
        sphereFile = textureFile
        textureFile = ''
      }

      if(textureFile !== ''){
        this.loadTexture(textureFile)
          .then((texture) => {
            material.multiply.contents = texture
            material.multiply.wrapS = SCNWrapMode.repeat
            material.multiply.wrapT = SCNWrapMode.repeat
          })
      }
      if(sphereFile !== ''){
        this.loadTexture(sphereFile)
          .then((texture) => {
            material.reflective.contents = texture
          })
      }
      material.isDoubleSided = true

      this._materialIndexCountArray.push(indexCount)
      this._materialArray.push(material)
    }
  }

  _readBone() {
    const boneCount = this.readUnsignedShort()
    this._boneCount = boneCount

    const parentNoArray = []
    const bonePositionArray = []

    this._rootBone.position = new SCNVector3(0, 0, 0)
    this._rootBone.name = 'rootBone'

    for(let i=0; i<boneCount; i++){
      const boneNode = new MMDNode()
      boneNode.name = this.readString(20)

      if(boneNode.name !== null){
        const kneeName = boneNode.name.substring(0, 3)
        if(kneeName === '右ひざ' || kneeName === '左ひざ'){
          boneNode.isKnee = true
        }
      }

      const parentNo = this.readUnsignedShort()
      parentNoArray.push(parentNo)

      const childNo = this.readUnsignedShort()
      const type = this.readUnsignedByte()
      const ikTarget = this.readUnsignedShort()

      boneNode.type = _BoneNodeTypes[type] || MMDNode.Type.unknown
      
      const position = new SCNVector3(this.readFloat(), this.readFloat(), this.readFloat())
      bonePositionArray.push(position)
      this._boneArray.push(boneNode)
      this._boneHash.set(boneNode.name, boneNode)

      //console.log(`${i} ${boneNode.name}: ${position.x}, ${position.y}, ${position.z}`)
    }

    // set parent node
    for(let i=0; i<boneCount; i++){
      const bone = this._boneArray[i]
      const parentNo = parentNoArray[i]
      const bonePos = bonePositionArray[i]

      if(parentNo !== 0xFFFF){
        this._boneArray[parentNo].addChildNode(bone)
        const parentPos = bonePositionArray[parentNo]
        bone.position = bonePos.sub(parentPos)

        //console.log(`parent ${this._boneArray[parentNo].name} ${parentPos.y}, bone ${bone.name} ${bonePos.y}: pos: ${bone.position.y}`)
      }else{
        this._rootBone.addChildNode(bone)
        bone.position = bonePos
      }
    }

    // calc initial matrix
    for(let i=0; i<boneCount; i++){
      const bonePos = bonePositionArray[i]
      //const boneName = this._boneArray[i].name
      //console.log(`inverseMatrix ${i} ${boneName}: ${-bonePos.x}, ${-bonePos.y}, ${-bonePos.z}`)
      const matrix = SCNMatrix4.matrixWithTranslation(-bonePos.x, -bonePos.y, -bonePos.z)
      this._boneInverseMatrixArray.push(matrix)
    }

    this._boneArray.push(this._rootBone)
    this._boneInverseMatrixArray.push(new SCNMatrix4())

    this._workingNode.addChildNode(this._rootBone)
  }

  _readIK() {
    const ikCount = this.readUnsignedShort()
    this._ikCount = ikCount

    this._workingNode.ikArray = []

    for(let i=0; i<ikCount; i++){
      const ik = new MMDIKConstraint()

      const ikBoneNo = this.readUnsignedShort()
      const targetBoneNo = this.readUnsignedShort()
      const numLink = this.readUnsignedByte()
      const iteration = this.readUnsignedShort()
      const weight = this.readFloat()

      ik.ikBone = this._boneArray[ikBoneNo]
      ik.targetBone = this._boneArray[targetBoneNo]
      ik.iteration = iteration
      ik.weight = weight
      ik.boneArray = []

      //console.log(`targetBoneNo: ${targetBoneNo} ${ik.targetBone.name}, ikBoneNo: ${ikBoneNo} ${ik.ikBone.name}`)
      for(let j=0; j<numLink; j++){
        const linkNo = this.readUnsignedShort()
        const bone = this._boneArray[linkNo]
        
        //console.log(`linkNo: ${linkNo}, ${bone.name}`)
        ik.boneArray.push(bone)
      }
      this._workingNode.ikArray.push(ik)

      // FIXME: use SceneKit IK
      //const constraint = SCNIKConstraint.inverseKinematicsConstraint(ik.boneArray[ik.boneArray.length - 1])
    }
  }

  //_calcKneeConstraint(mat) {
  //}

  _readFace() {
    this._faceCount = this.readUnsignedShort()
    const zeroArray = []
    zeroArray.length = this._vertexArray.length
    zeroArray.fill(0)

    // read base face
    if(this._faceCount > 0){
      const baseName = this.readString(20) // must be 'base'
      const baseFaceVertex = zeroArray.slice()

      const baseNumVertices = this.readUnsignedInt()
      const baseType = this.readUnsignedByte()

      for(let i=0; i<baseNumVertices; i++){
        const index = this.readUnsignedInt()
        this._faceIndexArray.push(index)

        const vertexIndex = index * 3
        const x = this.readFloat()
        const y = this.readFloat()
        const z = -this.readFloat()

        baseFaceVertex[vertexIndex + 0] = x
        baseFaceVertex[vertexIndex + 1] = y
        baseFaceVertex[vertexIndex + 2] = z
      }
      this._faceNameArray.push(baseName)
      this._faceVertexArray.push(baseFaceVertex)

      for(let i=1; i<this._faceCount; i++){
        const name = this.readString(20)
        const faceVertex = zeroArray.slice()
        //console.log(`faceName: ${name}`)

        const numVertices = this.readUnsignedInt()

        // 0: base, 1: eyebrows, 2: eyes, 3: lips, 4: etc
        const type = this.readUnsignedByte()

        for(let j=0; j<numVertices; j++){
          const index = this._faceIndexArray[this.readUnsignedInt()]
          const vertexIndex = index * 3
          const x = this.readFloat()
          const y = this.readFloat()
          const z = -this.readFloat()

          faceVertex[vertexIndex + 0] = x
          faceVertex[vertexIndex + 1] = y
          faceVertex[vertexIndex + 2] = z
        }

        this._faceNameArray.push(name)
        this._faceVertexArray.push(faceVertex)
      }
    }
  }

  _createFaceMorph() {
    const morpher = new SCNMorpher()
    morpher.calculationMode = SCNMorpherCalculationMode.additive

    for(let i=0; i<this._faceCount; i++){
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

      const faceGeometry = new SCNGeometry([faceVertexSource], [])
      faceGeometry.name = this._faceNameArray[i]

      morpher.targets.push(faceGeometry)
      morpher._weights.push(0)
    }
    const geometryNode = this._workingNode.childNodeWithName('Geometry', true)

    if(this._faceCount > 0){
      geometryNode.morpher = morpher
    }

    this._workingNode.geometryMorpher = morpher
  }

  _readDisplayInfo() {
    // read face display info
    const faceDisplayCount = this.readUnsignedByte()
    this._faceDisplayCount = faceDisplayCount
    for(let i=0; i<faceDisplayCount; i++){
      const index = this.readUnsignedShort()
      // just ignore data
    }

    // read bone display name
    const boneDisplayNameCount = this.readUnsignedByte()
    this._boneDisplayNameCount = boneDisplayNameCount
    for(let i=0; i<boneDisplayNameCount; i++){
      const name = this.readString(50)
      // just ignore data
    }

    // read bone display info
    const boneDisplayCount = this.readUnsignedInt()
    //this._boneDisplayCount = boneDisplayCount
    for(let i=0; i<boneDisplayCount; i++){
      const index = this.readUnsignedShort()
      const frameIndex = this.readUnsignedByte()
    }
  }

  _readEnglishInfo() {
    // read english
    const englishCompatibility = this.readUnsignedByte()

    // read english header
    const englishHeaderName = this.readString(20)
    const englishComment = this.readString(256)

    // read english bone name
    for(let i=0; i<this._boneCount; i++){
      const englishBoneName = this.readString(20)
    }

    // read english face name
    for(let i=0; i<this._faceDisplayCount; i++){
      const englishFaceName = this.readString(20)
    }

    // read english bone name
    for(let i=0; i<this._boneDisplayNameCount; i++){
      const englishBoneDisplayName = this.readString(50)
    }
  }

  _readToonTexture() {
    for(let i=0; i<10; i++){
      const textureFileName = this.readString(100)
    }
  }

  _readPhysicsBody() {
    const physicsBodyCount = this.readUnsignedInt()
    this._physicsBodyCount = physicsBodyCount
    const gravity = new SCNPhysicsField()

    for(let i=0; i<physicsBodyCount; i++){
      const name = this.readString(20)
      const boneIndex = this.readUnsignedShort()
      const groupIndex = this.readUnsignedByte()
      const groupTarget = this.readUnsignedShort()
      const shapeType = this.readUnsignedByte()
      const dx = this.readFloat()
      const dy = this.readFloat()
      const dz = this.readFloat()
      const posX = this.readFloat()
      const posY = this.readFloat()
      const posZ = -this.readFloat()
      const rotX = this.readFloat()
      const rotY = this.readFloat()
      const rotZ = -this.readFloat()
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
        shape = new SCNBox(dx, dy, dz, 0)
      }else if(shapeType === 2){
        shape = new SCNCapsule(dx, dy)
      }else{
        throw new Error(`unknown physics body shape: ${shapeType}`)
      }

      const body = new SCNPhysicsBody(bodyType, new SCNPhysicsShape(shape, null))
      body.isAffectedByGravity = true
      body.mass = weight
      body.friction = friction
      body.rollingFriction = rotateDim
      body.collisionBitMask = groupTarget
      body.restitution = recoil
      body.usesDefaultMomentOfInertia = true

      if(boneIndex !== 0xFFFF){
        const bone = this._boneArray[boneIndex]
        bone.physicsBody = body
      }else{
        // do nothing
      }
      this._physicsBodyArray.push(body)
    }
  }

  _readConstraint() {
    const constraintCount = this.readUnsignedInt()

    for(let i=0; i<constraintCount; i++){
      const name = this.readString(20)
      const bodyANo = this.readUnsignedInt()
      const bodyBNo = this.readUnsignedInt()

      const bodyA = this._physicsBodyArray[bodyANo]
      const bodyB = this._physicsBodyArray[bodyBNo]

      const pos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const rot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const pos1 = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const pos2 = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const rot1 = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const rot2 = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      const spring_pos = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())
      const spring_rot = new SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat())

      // TODO: create 6dof constraint
      //constraint = ...

      //this._workingNode.physicsBehaviors.push(constraint)
    }
  }

  _createGeometry() {
    const vertexData = this._vertexArray
    const normalData = this._normalArray
    const texcoordData = this._texcoordArray
    const boneIndicesData = this._boneIndicesArray
    const boneWeightsData = this._boneWeightsArray
    const indexData = this._indexArray

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

    this._boneIndicesSource = new SCNGeometrySource(
      boneIndicesData, // data
      SCNGeometrySource.Semantic.boneIndices, // semantic
      this._vertexCount, // vectorCount
      false, // usesFloatComponents
      2, // componentsPerVector
      2, // bytesPerComponent
      0, // dataOffset
      4 // dataStride
    )

    this._boneWeightsSource = new SCNGeometrySource(
      boneWeightsData, // data
      SCNGeometrySource.Semantic.boneWeights, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
    )

    let indexPos = 0
    for(let i=0; i<this._materialCount; i++){
      const count = this._materialIndexCountArray[i]
      const triangles = count / 3
      //const length = count * 2
      const data = indexData.slice(indexPos, indexPos + count)
      const element = new SCNGeometryElement(
        data, // data
        SCNGeometryPrimitiveType.triangles, // primitiveType
        triangles, // primitiveCount
        2 // bytesPerIndex
      )
      this._elementArray.push(element)
      indexPos += count
    }

    //const program = new MMDProgram()
    const geometry = new SCNGeometry(
      [this._vertexSource, this._normalSource, this._texcoordSource],
      this._elementArray
    )
    geometry.materials = this._materialArray
    geometry.name = 'Geometry'

    const geometryNode = new SCNNode(geometry)
    geometryNode.name = 'Geometry'

    if(this._vertexCount > 0 && this._indexCount > 0){
      const skinner = new SCNSkinner(
        geometry, // baseGeometry
        this._boneArray, // bones
        this._boneInverseMatrixArray, // boneInverseBindTransforms
        this._boneWeightsSource, // boneWeights
        this._boneIndicesSource // boneIndices
      )
      geometryNode.skinner = skinner
      geometryNode.skinner.skeleton = this._rootBone
    }
    geometryNode.castsShadow = true

    this._workingNode.name = this._modelName
    this._workingNode.castsShadow = true
    this._workingNode.addChildNode(geometryNode)

    // FIXME: delete code below
    this._workingNode.boneArray = this._boneArray
    this._workingNode.boneInverseMatrixArray = this._boneInverseMatrixArray
    this._workingNode.vertexCount = this._vertexCount
    this._workingNode.vertexArray = this._vertexArray
    this._workingNode.normalArray = this._normalArray
    this._workingNode.texcoordArray = this._texcoordArray
    this._workingNode.boneIndicesArray = this._boneIndicesArray
    this._workingNode.boneWeightsArray = this._boneWeightsArray
    this._workingNode.indexCount = this._indexCount
    this._workingNode.indexArray = this._indexArray
    this._workingNode.materialCount = this._materialCount
    this._workingNode.materialArray = this._materialArray
    this._workingNode.materialIndexCountArray = this._materialIndexCountArray
    this._workingNode.rootBone = this._rootBone
  }
}

