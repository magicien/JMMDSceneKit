'use strict'

import MMDNode from './MMDNode'
import MMDReader from './MMDReader'
import {
  SCNGeometry,
  SCNGeometryElement,
  SCNGeometryPrimitiveType,
  SCNGeometrySource,
  SCNMaterial,
  SCNNode,
  SCNWrapMode,
  SCNVector3,
  SCNVector4,
  SKColor
} from 'jscenekit'

const _headerPattern = new RegExp(/^xof (\d\d\d\d)([ \w][ \w][ \w][ \w])(\d\d\d\d)/)
const _commaOrSemicolonPattern = new RegExp(/^,|;/)
const _uuidPattern = new RegExp(/^<[\w-]+>/)
const _leftBracePattern = new RegExp(/^{/)
const _rightBracePattern = new RegExp(/^}/)
const _memberPattern = new RegExp(/^((array\s+\w+\s+\w+\[(\d+|\w+)\]|\w+\s+\w+)\s*;|\[[\w.]+\])/)
const _filenamePattern = new RegExp(/^"(.*)";?/)

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDXReader extends MMDReader {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  constructor(data, directoryPath) {
    // TODO: implement binary x file reader
    const isBinary = false
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    this._workingNode = null
    this._workingGeometry = null
    this._workingGeometryNode = null


    // header info
    this._version = ''
    this._format = ''
    this._floatSize = ''

    // vertex
    this._vertexCount = 0
    this._rawVertexArray = []
    this._vertexArray = []

    // face
    this._indexCount = 0
    this._rawVertexIndexArray = []
    this._indexArray = []

    // material
    this._rawMaterialIndexArray = []
    this._materialArray = []

    // normal
    this._rawNormalArray = []
    this._rawNormalIndexArray = []
    this._vertexNormalMap = []
    this._normalMap = []
    this._rawSortedNormalArray = []
    this._normalArray = []

    // texcoord
    this._rawTexcoordArray = []
    this._texcoordArray = []

    this._elementArray = []
  }

  static getNode(data, directoryPath) {
    const reader = new MMDXReader(data, directoryPath)
    return reader._loadXFile()
  }

  /**
   * @access private
   * @returns {MMDNode} -
   */
  _loadXFile() {
    this._workingNode = new MMDNode()

    if(!this._XFileHeader()){
      throw new Error('MMDXReader: header format error')
    }

    let end = false
    while(!end){
      const result = this._XObjectLong()

      if(result === null){
        end = true
      }else{
        end = !result
      }
    }

    this._splitFaceNormals()

    this._workingNode.name = 'rootNode'

    this._workingGeometry = this._createGeometry()
    this._workingGeometryNode = new SCNNode(this._workingGeometry)
    this._workingGeometryNode.name = 'Geometry'
    this._workingGeometryNode.castsShadow = true

    this._workingNode.addChildNode(this._workingGeometryNode)
    this._workingNode.castsShadow = true

    return this._workingNode
  }

  _commaOrSemicolon() {
    // FIXME: don't access private property and method
    //return this._reader.readPattern(_commaOrSemicolonPattern)
    const code = this._reader._partialText.charCodeAt(0)
    if(code === 44 || code === 59){
      this._reader._moveIndex(1)
    }
  }

  _UUID() {
    return this._reader.readPattern(_uuidPattern)
  }

  _leftBrace() {
    return this._reader.readPattern(_leftBracePattern)
  }

  _rightBrace() {
    return this._reader.readPattern(_rightBracePattern)
  }

  _member() {
    return this._reader.readPattern(_memberPattern)
  }

  _filename() {
    const str = this._reader.readPattern(_filenamePattern)
    return str[1]
  }

  _integerArray() {
    const n = this._reader.readInteger()
    const arr = []
    for(let i=0; i<n; i++){
      arr.push(this._reader.readInteger())
      this._commaOrSemicolon()
    }
    return arr
  }

  _floatArray() {
    const n = this._reader.readInteger()
    const arr = []
    for(let i=0; i<n; i++){
      arr.push(this._reader.readFloat())
      this._commaOrSemicolon()
    }
    return arr
  }

  _vector3(invertZSign = false) {
    const v = new SCNVector3()
    v.x = this._reader.readFloat()
    v.y = this._reader.readFloat()
    v.z = this._reader.readFloat()

    if(invertZSign){
      v.z = -v.z
    }

    this._commaOrSemicolon()

    return v
  }

  _vector4() {
    const v = new SCNVector4()
    v.x = this._reader.readFloat()
    v.y = this._reader.readFloat()
    v.z = this._reader.readFloat()
    v.w = this._reader.readFloat()
    this._commaOrSemicolon()

    return v
  }

  _splitFaceNormals() {
    const numFaces = this._rawVertexIndexArray.length

    // set texcoord
    if(this._rawTexcoordArray.length === 0){
      for(let i=0; i<numFaces; i++){
        this._rawTexcoordArray.push([0, 0])
      }
    }

    // create normal
    if(this._rawNormalArray.length === 0){
      for(let i=0; i<numFaces; i++){
        const vertexIndex = this._rawVertexIndexArray[i]
        const angles = vertexIndex.length
        const normal = this._calcNormal(
          this._rawVertexArray[vertexIndex[0]],
          this._rawVertexArray[vertexIndex[1]],
          this._rawVertexArray[vertexIndex[angles-1]]
        )
        this._rawNormalArray.splice(i, 0, normal)

        const normalIndex = []
        this._rawNormalIndexArray.splice(i, 0, normalIndex)
      }
    }

    // flatten arrays
    const flatVertexIndexArray = []
    const flatNormalIndexArray = []
    const flatMaterialIndexArray = []

    this._vertexCount = 0
    this._indexCount = 0

    for(let i=0; i<numFaces; i++){
      const vertexIndex = this._rawVertexIndexArray[i]
      const normalIndex = this._rawNormalIndexArray[i]
      const materialIndex = this._rawMaterialIndexArray[i]

      const angles = vertexIndex.length

      for(let j=2; j<angles; j++){
        flatVertexIndexArray.push(vertexIndex[0])
        flatVertexIndexArray.push(vertexIndex[j])
        flatVertexIndexArray.push(vertexIndex[j-1])

        flatNormalIndexArray.push(normalIndex[0])
        flatNormalIndexArray.push(normalIndex[j])
        flatNormalIndexArray.push(normalIndex[j-1])

        flatMaterialIndexArray.push(materialIndex)
        flatMaterialIndexArray.push(materialIndex)
        flatMaterialIndexArray.push(materialIndex)

        this._indexCount += 1
      }
    }

    // make map of vertex to normal
    let vertexCount = this._rawVertexArray.length

    const flatArrayCount = flatVertexIndexArray.length
    for(let i=0; i<flatArrayCount; i++){
      const vertexIndex = flatVertexIndexArray[i]
      const normalIndex = flatNormalIndexArray[i]
      const materialIndex = flatMaterialIndexArray[i]

      const vertexToNormal = this._vertexNormalMap[vertexIndex]
      const newVertexIndex = (typeof vertexToNormal === 'undefined') ? null : vertexToNormal[normalIndex]

      if(typeof vertexToNormal === 'undefined'){
        // new
        this._vertexNormalMap[vertexIndex] = []
        this._vertexNormalMap[vertexIndex][normalIndex] = vertexIndex
        this._normalMap[vertexIndex] = normalIndex
      }else if(typeof newVertexIndex === 'undefined' || newVertexIndex === null){
        // conflict: add vertex data at index(vertexCount)
        this._rawVertexArray.push(this._rawVertexArray[vertexIndex])
        this._rawTexcoordArray.push(this._rawTexcoordArray[vertexIndex])
        this._vertexNormalMap[vertexIndex][normalIndex] = vertexCount
        this._normalMap[vertexCount] = normalIndex
        flatVertexIndexArray[i] = vertexCount
        vertexCount += 1
      }else{
        // reuse
        flatVertexIndexArray[i] = newVertexIndex
      }
    }

    // create normal data
    for(let i=0; i<vertexCount; i++){
      let normalIndex = this._normalMap[i]
      if(typeof normalIndex === 'undefined'){
        normalIndex = 0
      }

      this._rawSortedNormalArray.push(this._rawNormalArray[normalIndex])
    }

    // create vertex data
    this._vertexCount = this._rawVertexArray.length
    this._vertexArray = []
    for(let i=0; i<this._vertexCount; i++){
      this._vertexArray.push(this._rawVertexArray[i].x)
      this._vertexArray.push(this._rawVertexArray[i].y)
      this._vertexArray.push(this._rawVertexArray[i].z)
    }

    this._normalArray = []
    for(let i=0; i<this._vertexCount; i++){
      this._normalArray.push(this._rawSortedNormalArray[i].x)
      this._normalArray.push(this._rawSortedNormalArray[i].y)
      this._normalArray.push(this._rawSortedNormalArray[i].z)
    }

    this._texcoordArray = []
    const texCount = this._rawTexcoordArray.length
    for(let i=0; i<texCount; i++){
      this._texcoordArray.push(this._rawTexcoordArray[i][0])
      this._texcoordArray.push(this._rawTexcoordArray[i][1])
    }

    // create index data
    this._indexArray = []
    const materialCount = this._materialArray.length
    for(let i=0; i<materialCount; i++){
      this._indexArray.push([])
    }
    const materialIndexCount = flatMaterialIndexArray.length
    for(let i=0; i<materialIndexCount; i++){
      const materialIndex = flatMaterialIndexArray[i]
      const vertexIndex = flatVertexIndexArray[i]

      this._indexArray[materialIndex].push(vertexIndex)
    }
  }

  _createGeometry() {
    const vertexSource = new SCNGeometrySource(
      this._vertexArray, // data
      SCNGeometrySource.Semantic.vertex, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
    )

    const normalSource = new SCNGeometrySource(
      this._normalArray, // data
      SCNGeometrySource.Semantic.normal, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
    )

    const texcoordSource = new SCNGeometrySource(
      this._texcoordArray, // data
      SCNGeometrySource.Semantic.texcoord, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
    )

    this._elementArray = []
    let newMaterialArray = []
    const materialCount = this._materialArray.length
    console.log(`materialCount: ${materialCount}`)
    for(let i=0; i<materialCount; i++){
      const indexArray = this._indexArray[i]
      const indexCount = indexArray.length / 3
      console.log(`indexCount: ${indexCount}`)

      if(indexCount > 0){
        const indices = []
        const element = new SCNGeometryElement(
          indexArray, // data
          SCNGeometryPrimitiveType.triangles, // primitiveType
          indexCount, // primitiveCount
          4 // bytesPerIndex
        )
        this._elementArray.push(element)
        newMaterialArray.push(this._materialArray[i])
      }
    }

    const geometry = new SCNGeometry([vertexSource, normalSource, texcoordSource], this._elementArray)
    geometry.materials = newMaterialArray
    geometry.name = 'Geometry'

    return geometry
  }

  _calcNormal(v1, v2, v3) {
    const a = v3.sub(v1)
    const b = v2.sub(v1)
    const n = a.cross(b).normalize()
    return n
  }


  /**
   * @access private
   * @returns {boolean} - returns true if it's a valid header.
   */
  _XFileHeader() {
    const str = this._reader.readPattern(_headerPattern)
    this._version = str[1]
    this._format = str[2]
    this._floatSize = str[3]
    //console.log(`version ${this.version} format ${this.format} floatSize ${this.floatSize}`)
    return true
  }

  /**
   * @access private
   * @returns {?Object} -
   */
  _XObjectLong() {
    const id = this._reader.readWord()
    
    if(id === null){
      return null
    }
    console.log(`********** id: ${id} **********`)

    switch(id){
      case 'template':
        return this._Template()
      case 'Header':
        return this._Header()
      case 'Mesh':
        return this._Mesh()
      case 'MeshMaterialList':
        return this._MeshMaterialList()
      case 'MeshNormals':
        return this._MeshNormals()
      case 'MeshTextureCoords':
        return this._MeshTextureCoords()
      case 'MeshVertexColors':
        return this._MeshVertexColors()
      default:
        throw new Error(`MMDXReader: unknown type: ${id}`)
    }
  }

  _ColorRGB() {
    const color = new SKColor()
    color.red = this._reader.readFloat()
    color.green = this._reader.readFloat()
    color.blue = this._reader.readFloat()
    color.alpha = 1.0
    this._commaOrSemicolon()

    return color
  }

  _ColorRGBA() {
    const color = new SKColor()
    color.red = this._reader.readFloat()
    color.green = this._reader.readFloat()
    color.blue = this._reader.readFloat()
    color.alpha = this._reader.readFloat()
    this._commaOrSemicolon()

    return color
  }

  _IndexedColor() {
    const index = this._reader.readInteger()
    const color = this._ColorRGBA()
    // TODO: retain index info
    // color.index = index
    return color
  }

  _Coords2d() {
    const v = []
    v.push(this._reader.readFloat())
    v.push(this._reader.readFloat())
    this._commaOrSemicolon()

    return v
  }

  _Template() {
    this._reader.readWord()
    this._leftBrace()
    this._UUID()
    let member = null
    do{
      member = this._member()
      //console.log(`member: ${member}`)
    }while(member !== null)
    this._rightBrace()

    return true
  }

  _Header() {
    this._leftBrace()
    this._reader.readInteger() // major
    this._reader.readInteger() // minor
    this._reader.readInteger() // flags
    this._rightBrace()
    return true
  }

  _Material() {
    const material = new SCNMaterial()

    this._leftBrace()

    material.diffuse.contents = this._ColorRGBA()
    material.ambient.contents = material.diffuse.contents
    material.shininess = this._reader.readFloat()
    material.specular.contents = this._ColorRGB()
    material.emission.contents = this._ColorRGB()

    const name = this._reader.readWord()
    if(name === 'TextureFilename'){
      const textureFilePath = this._TextureFilename()
      if(textureFilePath !== null){
        this.loadTexture(textureFilePath)
          .then((texture) => {
            material.emission.contents = texture
            material.emission.wrapS = SCNWrapMode.repeat
            material.emission.wrapT = SCNWrapMode.repeat
            material.diffuse.contents = texture
            material.diffuse.wrapS = SCNWrapMode.repeat
            material.diffuse.wrapT = SCNWrapMode.repeat
          })
      }
    }

    this._rightBrace()

    return material
  }

  _Mesh() {
    this._leftBrace()

    // vertices
    const rawVertexCount = this._reader.readInteger()
    console.log(`vertexCount: ${rawVertexCount}`)

    for(let i=0; i<rawVertexCount; i++){
      const pos = this._vector3(true)
      this._rawVertexArray.push(pos)
      this._commaOrSemicolon()
    }

    // faces
    this._indexCount = 0
    const nFaces = this._reader.readInteger()
    console.log(`num faces: ${nFaces}`)

    for(let i=0; i<nFaces; i++){
      const face = this._integerArray()
      this._rawVertexIndexArray.push(face)
    }

    this._rightBrace()

    return true
  }

  _MeshMaterialList() {
    this._leftBrace()

    // materials
    const nMaterials = this._reader.readInteger()
    console.log(`materials: ${nMaterials}`)

    // face materials
    const nFaceIndices = this._reader.readInteger()
    console.log(`face indices: ${nFaceIndices}`)

    for(let i=0; i<nFaceIndices; i++){
      const materialNo = this._reader.readInteger()
      this._commaOrSemicolon()
      this._rawMaterialIndexArray.push(materialNo)
    }

    // materials
    let name = this._reader.readWord()
    while(name === 'Material'){
      const material = this._Material()
      this._materialArray.push(material)
      name = this._reader.readWord()
    }

    this._rightBrace()

    return true
  }

  _MeshNormals() {
    this._leftBrace()

    const nNormals = this._reader.readInteger()
    console.log(`mesh normals: ${nNormals}`)

    for(let i=0; i<nNormals; i++){
      const normal = this._vector3(true)
      this._rawNormalArray.push(normal)
    }

    const nFaceNormals = this._reader.readInteger()
    console.log(`normal indices: ${nFaceNormals}`)

    for(let i=0; i<nFaceNormals; i++){
      const faceNormals = this._integerArray()
      this._rawNormalIndexArray.push(faceNormals)
    }

    this._rightBrace()

    return true
  }

  _MeshTextureCoords() {
    this._leftBrace()

    // suppose to be the same number as vertexCount
    const nTextureCoords = this._reader.readInteger()
    console.log(`textureCoords: ${nTextureCoords}`)

    for(let i=0; i<nTextureCoords; i++){
      const texcoord = this._Coords2d()
      this._rawTexcoordArray.push(texcoord)
    }

    this._rightBrace()

    return true
  }

  _MeshVertexColors() {
    this._leftBrace()

    const nVertexColors = this._reader.readInteger()
    for(let i=0; i<nVertexColors; i++){
      const v = this._IndexedColor()
      // TODO: implement
    }

    this._rightBrace()

    return true
  }

  _TextureFilename() {
    this._leftBrace()

    const name = this._filename()
    let filePath = name.replace('\\\\', '/')
    console.log(`filePath: ${filePath}`)

    this._rightBrace()

    return filePath
  }
}

