'use strict'

import MMDNode from './MMDNode'
import MMDReader from './MMDReader'
import MMDSceneSource from './MMDSceneSource'
import MMDCameraNode, {
  MMD_CAMERA_NODE_NAME,
  MMD_CAMERA_ROTX_NODE_NAME,
  MMD_CAMERA_ROTZ_NODE_NAME
} from './MMDCameraNode'
import {
  CAAnimationGroup,
  CAKeyframeAnimation,
  CAMediaTimingFunction,
  SCNAnimationEvent,
  SCNBlendMode,
  SCNLight,
  SCNNode,
  SCNScene,
  SCNVector3,
  SCNVector3Make,
  SCNVector4,
  SKColor,

  kCAAnimationDiscrete,
  kCAFillModeForwards,
  kCAMediaTimingFunctionLinear
} from 'jscenekit'

/**
 * @access private
 */
class MMDVMDInfo {
  /**
   * @access public
   * @constructor
   * @param {MMDPMMReader} reader -
   */
  constructor(reader) {
    this.frameNo = reader.readUnsignedInt()
    this.prev = reader.readUnsignedInt()
    this.next = reader.readUnsignedInt()

    let interpolation = []
    for(let i=0; i<16; i++){
      interpolation.push(reader.readUnsignedByte() / 127.0)
    }

    this.posX = reader.readFloat()
    this.posY = reader.readFloat()
    this.posZ = -reader.readFloat()
    const quat = new SCNVector4(-reader.readFloat(), -reader.readFloat(), reader.readFloat(), reader.readFloat())
    this.rotate = quat.normalize()

    this.timingX = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[0], interpolation[1], interpolation[2], interpolation[3])
    this.timingY = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[4], interpolation[5], interpolation[6], interpolation[7])
    this.timingZ = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[8], interpolation[9], interpolation[10], interpolation[11])
    this.timingRot = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[12], interpolation[13], interpolation[14], interpolation[15])

    if(reader.version > 1){
      reader.skip(1) // unknown
    }

    const isSelected = reader.readUnsignedByte()
  }
}

/**
 * @access private
 */
class MMDVMDFaceInfo {
  /**
   * @access public
   * @constructor
   * @param {MMDPMMReader} reader -
   */
  constructor(reader) {
    this.frameNo = reader.readUnsignedInt()
    this.prev = reader.readUnsignedInt()
    this.next = reader.readUnsignedInt()

    this.weight = reader.readFloat()

    const selected = reader.readUnsignedByte()
  }
}

/**
 * @access private
 */
class MMDVMDCameraInfo {
  /**
   * @access public
   * @constructor
   * @param {MMDPMMReader} reader -
   */
  constructor(reader) {
    this.frameNo = reader.readUnsignedInt()
    this.prev = reader.readUnsignedInt()
    this.next = reader.readUnsignedInt()

    this.distance = -reader.readFloat()
    this.posX = reader.readFloat()
    this.posY = reader.readFloat()
    this.posZ = reader.readFloat()
    this.rotX = reader.readFloat()
    this.rotY = reader.readFloat()
    this.rotZ = reader.readFloat()

    let followModelIndex = -1
    let followBoneIndex = 0

    if(reader.version > 1){
      followModelIndex = reader.readInt()
      followBoneIndex = reader.readUnsignedInt()
    }

    if(followModelIndex >= 0){
      //const model = reader.models[followModelIndex]
    }

    const interpolation = []
    for(let i=0; i<24; i++){
      interpolation.push(reader.readUnsignedByte() / 127.0)
    }

    this.timingX = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[0], interpolation[1], interpolation[2], interpolation[3])
    this.timingY = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[4], interpolation[5], interpolation[6], interpolation[7])
    this.timingZ = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[8], interpolation[9], interpolation[10], interpolation[11])
    this.timingRot = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[12], interpolation[13], interpolation[14], interpolation[15])
    this.timingDistance = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[16], interpolation[17], interpolation[18], interpolation[19])
    this.timingAngle = CAMediaTimingFunction.functionWithControlPoints(
      interpolation[20], interpolation[21], interpolation[22], interpolation[23])

    const perspective = reader.readUnsignedByte()
    this.useOrtho = (perspective !== 0)
    this.angle = reader.readInt()

    const isSelected = reader.readUnsignedByte()
  }
}

/**
 * @access private
 */
class MMDVMDLightInfo {
  /**
   * @access public
   * @constructor
   * @param {MMDPMMReader} reader -
   */
  constructor(reader) {
    this.frameNo = reader.readUnsignedInt()
    this.prev = reader.readUnsignedInt()
    this.next = reader.readUnsignedInt()

    const color = new SKColor(reader.readFloat(), reader.readFloat(), reader.readFloat(), 1.0)
    this.color = color

    const rotX = -reader.readFloat()
    const rotY = -reader.readFloat()
    const rotZ = reader.readFloat()

    const cosX = Math.cos(rotX / 2)
    const cosY = Math.cos(rotY / 2)
    const cosZ = Math.cos(rotZ / 2)
    const sinX = Math.sin(rotX / 2)
    const sinY = Math.sin(rotY / 2)
    const sinZ = Math.sin(rotZ / 2)

    const quat = new SCNVector4()
    quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ
    quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ
    quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ
    quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ

    this.direction = quat.normalize()

    const isSelected = reader.readUnsignedByte()
  }
}

/**
 * @access private
 */
class MMDVMDAccessoryInfo {
  /**
   * @access public
   * @constructor
   * @param {MMDPMMReader} reader -
   */
  constructor(reader) {
    this.frameNo = reader.readUnsignedInt()
    this.prev = reader.readUnsignedInt()
    this.next = reader.readUnsignedInt()

    const visibility = reader.readUnsignedByte()
    const isVisible = visibility & 0x01
    const opacity = (100 - (visibility >> 1)) * 0.01

    this.isHidden = (isVisible === 0)
    this.opacity = opacity

    let modelIndex = reader.readUnsignedInt()
    if(modelIndex === 0xFFFFFFFF){
      modelIndex = -1
    }
    const boneIndex = reader.readUnsignedInt()

    let parentNode = null
    if(modelIndex >= 0 && modelIndex < reader.models.length){
      const parentModel = reader.models[modelIndex]

      if(boneIndex < parentModel.boneArray.length){
        const boneName = parentModel.boneArray[boneIndex].name
        if(boneName === null){
          throw new Error('bone.name === null')
        }
        parentNode = parentModel.childNodeWithNameRecursively(boneName, true)
        if(parentNode === null){
          throw new Error('parentNode === null')
        }
      }
    }
    this.parent = parentNode

    const pos = new SCNVector3(reader.readFloat(), reader.readFloat(), reader.readFloat())
    this.position = pos

    const rotX = -reader.readFloat()
    const rotY = -reader.readFloat()
    const rotZ = reader.readFloat()

    const cosX = Math.cos(rotX / 2)
    const cosY = Math.cos(rotY / 2)
    const cosZ = Math.cos(rotZ / 2)
    const sinX = Math.sin(rotX / 2)
    const sinY = Math.sin(rotY / 2)
    const sinZ = Math.sin(rotZ / 2)

    const quat = new SCNVector4()
    quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ
    quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ
    quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ
    quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ

    this.rotation = quat.normalize()
    const scale = reader.readFloat() * 10.0
    this.scale = new SCNVector3(scale, scale, scale)

    const flag = reader.readUnsignedByte()
    if((flag & 0x01) === 0){
      this.additive = SCNBlendMode.add
    }else{
      this.additive = SCNBlendMode.alpha
    }
    const isSelected = reader.readUnsignedByte()

    console.log('=====')
    console.log(`frameNo: ${this.frameNo}`)
    console.log(`prev: ${this.prev}`)
    console.log(`next: ${this.next}`)
    console.log(`visibility: ${visibility}`)
    console.log(`modelIndex: ${modelIndex}`)
    console.log(`boneIndex: ${boneIndex}`)
  }
}

const _userFilePathPattern = new RegExp(/\\UserFile\\(.*)$/)

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDPMMReader extends MMDReader {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  constructor(data, directoryPath, options) {
    const isBinary = true
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    /** @type {MMDScene} */
    this._workingNode = null

    // header
    this._pmmMagic = ''
    this.version = 0.0

    this.fps = 30.0

    this._boneCount = 0
    this._boneNameArray = null

    this._faceCount = 0
    this._faceNameArray = null

    this._ikCount = 0
    this._ikIndexArray = null

    this._parentCount = 0

    this._accessoryCount = 0
    this._accessoryNameCount = null
    this._accessories = []

    this._modelCount = 0
    this.models = []
    this._workingModel = null
    this._motions = []

    this._substituteModels = null

    // for animation
    this._frameLength = 0
    this._workingAnimationGroup = null
    this._animationHash = null
    this._faceAnimationHash = null

    this._initialBoneFrame = null
    this._boneFrameHash = null
    this._initialFaceFrame = null
    this._faceFrameHash = null

    // for accessory animation
    this._initialAccessoryFrame = null
    this._accessoryFrameHash = null
    this._accessoryMotions = []

    // for camera animation
    this._workingCameraAnimationGroup = null
    this._initialCameraFrame = null
    this._cameraFrameHash = null

    // for light animation
    this._workingLightAnimationGroup = null
    this._initialLightFrame = null
    this._lightFrameHash = null
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @param {MMDNode[]} [models = null] -
   * @param {CAAnimation[]} [motions = null] -
   * @returns {SCNScene} -
   */
  static getScene(data, directoryPath, options = new Map(), models = null, motions = null) {
    const reader = new MMDPMMReader(data, directoryPath, options)
    const scene = reader.loadPMMFile(models, motions, options)

    return scene
  }

  /**
   * @access private
   * @param {MMDNode[]} [models = null] -
   * @param {CAAnimation[]} [motions = null] -
   * @returns {?SCNScene} -
   */
  loadPMMFile(models = null, motions = null, options = new Map()) {
    this._options = options
    // initialize working variables
    this._workingScene = new SCNScene()
    this._workingScene._dataLoadedPromise = new Promise((resolve, reject) => {
      this._resolveFunction = resolve
      this._rejectFunction = reject
    })

    this._pmmMagic = ''
    this.version = 0

    this._substituteModels = models
    if(this._substituteModels === null){
      this._substituteModels = []
    }

    // read contents of the file
    this._readPMMHeader()
    if(this.version !== 1 && this.version !== 2){
      // unknown file format
      console.error(`unknown file format: ${this._pmmMagic}`)
      return null
    }

    this._readModels().then(() => {
      this._readCameras()
      this._readLights()
      return this._readAccessories()

    }).then(() => {
      this._readSettings()

      this._setupScene()

      this._resolveFunction()
    })

    return this._workingScene
  }

  /**
   * read PMD header data
   * @access private
   */
  _readPMMHeader() {
    this._pmmMagic = this.readString(30)

    if(this._pmmMagic === 'Polygon Movie maker 0001'){
      this.version = 1
    }else if(this._pmmMagic === 'Polygon Movie maker 0002'){
      this.version = 2
    }

    const movieWidth = this.readInt()
    const movieHeight = this.readInt()
    const frameWindowWidth = this.readInt()
    const viewAngle = this.readFloat()
    const isCameraMode = this.readUnsignedByte()

    this.skip(6) // skip unknown bytes

    if(this.version === 2){
      this.skip(1) // unknown data
    }
  }

  /**
   * @access private
   */
  _readModels() {
    this._modelCount = this.readUnsignedByte()

    if(this.version === 1){
      for(let i=0; i<this._modelCount; i++){
        const modelName = this.readString(20)
        console.log(`modelName: ${modelName}`)
      }
    }

    if(this._modelCount > this._substituteModels.length){
      for(let i=0; i<this._modelCount - this._substituteModels.length; i++){
        this._substituteModels.push(null)
      }
    }

    let prevPromise = Promise.resolve()
    for(let modelNo=0; modelNo<this._modelCount; modelNo++){
      prevPromise = prevPromise.then(() => {
        if(this._substituteModels[modelNo]){
          const model = this._substituteModels[modelNo]

          // just skip data
          this.skip(1)
          if(this.version === 1){
            this.skip(20)
          }else{
            const a = this._readPascalString()
            const b = this._readPascalString()
          }
          this.skip(257)
          return model
        }

        const no = this.readUnsignedByte()
        if(this.version === 1){
          const modelName = this.readString(20)
        }else{
          const modelName = this._readPascalString()
          const englishName = this._readPascalString()
        }

        let filePath = this.readString(256)
        this.skip(1) // unknown flag

        const paths = filePath.match(_userFilePathPattern)
        if(paths){
          const replaced = paths[1].replace(/\\/g, '/')
          filePath = this.directoryPath + '/' + replaced
        }else{
          filePath = filePath.replace(/\\/g, '/')
        }

        const modelSceneSource = MMDSceneSource.sceneSourceWithURLOptions(filePath)
        return modelSceneSource.didLoad.then(() => {
          const newModel = modelSceneSource.getModel()
          return newModel.didLoad.then(() => {
            return newModel
          }).catch((error) => {
            console.error(`cannot get model data: ${filePath}: ${error}`)
            return Promise.reject(error)
          })
        }).catch((error) => {
          console.error(`cannot read file: ${filePath}: ${error}`)
          return Promise.reject(error)
        })
      }).then((model) => {
        this._workingModel = model

        if(this.version === 1){
          this._boneCount = model.boneArray.length - 1
          this._boneNameArray = []

          for(const bone of model.boneArray){
            this._boneNameArray.push(bone.name)
          }

          this._faceCount = model.geometryMorpher.targets.length
          this._faceNameArray = []
          for(const face of model.geometryMorpher.targets){
            this._faceNameArray.push(face.name)
          }

          this._ikCount = model.ikArray.length
          this._ikIndexArray = []
          // TODO: set ikIndexArray

          this._parentCount = 0
        }else{
          this._readBone()
          this._readFace()
          this._readIK()
          this._readParent()

          this.skip(1) // unknown flag
        }

        const visible = this.readUnsignedByte()
        const selectedBone = this.readUnsignedInt()
        const morph_eyebrows = this.readUnsignedInt()
        const morph_eyes = this.readUnsignedInt()
        const morph_lips = this.readUnsignedInt()
        const morph_etc = this.readUnsignedInt()

        const frameCount = this.readUnsignedByte()
        for(let i=0; i<frameCount; i++){
          this.readUnsignedByte()
        }

        this.skip(4) // unknown data

        // read motions
        const lastFrame = this.readUnsignedInt()

        this._workingAnimationGroup = new CAAnimationGroup()
        this._workingAnimationGroup.animations = []

        this._animationHash = {}
        this._faceAnimationHash = {}

        this._frameLength = 0

        this._readBoneFrames()
        this._readFaceFrames()
        this._readIKFrames()

        this._createAnimations()

        this._readBoneStatus()
        this._readFaceStatus()
        this._readIKStatus()
        this._readParentStatus()

        if(this.version > 1){
          this.skip(7) // unknown data
        }

        this.models.push(model)
      })
    }
    return prevPromise
  }

  _readBone() {
    this._boneCount = this.readUnsignedInt()

    this._boneNameArray = []
    for(let i=0; i<this._boneCount; i++){
      this._boneNameArray.push(this._readPascalString())
    }

    for(const boneName of this._boneNameArray){
      console.log(`    bone: ${boneName}`)
    }
  }

  _readFace() {
    this._faceCount = this.readUnsignedInt()
    this._faceNameArray = []
    for(let i=0; i<this._faceCount; i++){
      this._faceNameArray.push(this._readPascalString())
    }

    for(const faceName of this._faceNameArray){
      console.log(`    face: ${faceName}`)
    }
  }

  _readIK() {
    this._ikCount = this.readUnsignedInt()
    this._ikIndexArray = []
    for(let i=0; i<this._ikCount; i++){
      this._ikIndexArray.push(this.readUnsignedInt())
    }
  }

  _readParent() {
    this._parentCount = this.readUnsignedInt()
    for(let i=0; i<this._parentCount; i++){
      this.readUnsignedInt()
    }
  }

  // MARK: - Bone Frame

  _readBoneFrames() {
    this._initialBoneFrame = []
    this._boneFrameHash = {}

    for(let i=0; i<this._boneCount; i++){
      this._readOneBoneFrame(false)
    }

    const boneFrameCount = this.readUnsignedInt()
    for(let i=0; i<boneFrameCount; i++){
      this._readOneBoneFrame()
    }

    // create animation data
    for(let index=0; index<this._boneCount; index++){
      const boneName = this._boneNameArray[index]

      console.log(`===== bone animation: ${boneName} =====`)

      const posXMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.x`)
      const posYMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.y`)
      const posZMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.z`)
      const rotMotion = new CAKeyframeAnimation(`/${boneName}.transform.quaternion`)

      posXMotion.values = []
      posYMotion.values = []
      posZMotion.values = []
      rotMotion.values = []

      posXMotion.keyTimes = []
      posYMotion.keyTimes = []
      posZMotion.keyTimes = []
      rotMotion.keyTimes = []

      posXMotion.timingFunctions = []
      posYMotion.timingFunctions = []
      posZMotion.timingFunctions = []
      rotMotion.timingFunctions = []

      this._animationHash[`posX:${boneName}`] = posXMotion
      this._animationHash[`posY:${boneName}`] = posYMotion
      this._animationHash[`posZ:${boneName}`] = posZMotion
      this._animationHash[`rot:${boneName}`] = rotMotion

      this._addMotionRecursive(this._initialBoneFrame[index], posXMotion, posYMotion, posZMotion, rotMotion)
    }
  }

  /**
   * @access private
   * @param {MMDVMDInfo} info -
   * @param {CAKeyframeAnimation} posXMotion -
   * @param {CAKeyframeAnimation} posYMotion -
   * @param {CAKeyframeAnimation} posZMotion -
   * @param {CAKeyframeAnimation} rotMotion -
   * @returns {void}
   */
  _addMotionRecursive(info, posXMotion, posYMotion, posZMotion, rotMotion) {
    let motion = info
    while(motion){
      let frameIndex = posXMotion.keyTimes.length - 1

      // the frame number mihgt not be sorted
      while(frameIndex >= 0){
        const k = posXMotion.keyTimes[frameIndex]
        if(k < motion.frameNo){
          break
        }

        frameIndex -= 1
      }
      frameIndex += 1

      if(motion.frameNo > this._frameLength){
        this._frameLength = motion.frameNo
      }

      posXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      posYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      posZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      rotMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)

      posXMotion.timingFunctions.splice(frameIndex, 0, motion.timingX)
      posYMotion.timingFunctions.splice(frameIndex, 0, motion.timingY)
      posZMotion.timingFunctions.splice(frameIndex, 0, motion.timingZ)
      rotMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot)

      posXMotion.values.splice(frameIndex, 0, motion.posX)
      posYMotion.values.splice(frameIndex, 0, motion.posY)
      posZMotion.values.splice(frameIndex, 0, motion.posZ)
      rotMotion.values.splice(frameIndex, 0, motion.rotate)

      console.log(`frameNo: ${motion.frameNo}`)
      console.log(`pos: ${motion.posX}, ${motion.posY}, ${motion.posZ}`)
      console.log(`rot: ${motion.rotate}`)

      if(motion.next <= 0){
        break
      }

      const _motion = this._boneFrameHash[motion.next]
      if(!_motion){
        console.error(`error: the frame index(${motion.next}) does not exist`)
      }
      motion = _motion
    }
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneBoneFrame(hasIndex = true) {
    let index = 0
    if(hasIndex){
      index = this.readUnsignedInt()
    }

    const vmdInfo = new MMDVMDInfo(this)
    if(hasIndex){
      this._boneFrameHash[index] = vmdInfo
    }else{
      this._initialBoneFrame.push(vmdInfo)
    }
  }

  // MARK: - Face Frame

  _readFaceFrames() {
    this._initialFaceFrame = []
    this._faceFrameHash = {}

    console.log(`faceCount: ${this._faceCount}`)
    for(let i=0; i<this._faceCount; i++){
      this._readOneFaceFrame(false)
    }
    const faceFrameCount = this.readUnsignedInt()
    console.log(`faceFrameCount: ${faceFrameCount}`)
    for(let i=0; i<faceFrameCount; i++){
      this._readOneFaceFrame()
    }

    // create animation data
    for(let index=0; index<this._faceCount; index++){
      const faceName = this._faceNameArray[index]

      const faceMotion = new CAKeyframeAnimation(`morpher.weights.${faceName}`)
      faceMotion.values = []
      faceMotion.keyTimes = []
      faceMotion.timingFunctions = []

      this._faceAnimationHash[faceName] = faceMotion

      this._addFaceMotionRecursive(this._initialFaceFrame[index], faceMotion)
    }
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneFaceFrame(hasIndex = true) {
    let index = 0
    if(hasIndex){
      index = this.readUnsignedInt()
    }
    const faceInfo = new MMDVMDFaceInfo(this)
    if(hasIndex){
      this._faceFrameHash[index] = faceInfo
    }else{
      this._initialFaceFrame.push(faceInfo)
    }
  }

  /**
   * @access private
   * @param {MMDVMDFaceInfo} info -
   * @param {CAKeyframeAnimation} faceMotion -
   * @returns {void}
   */
  _addFaceMotionRecursive(info, faceMotion) {
    let motion = info
    while(motion){
      let frameIndex = faceMotion.keyTimes.length - 1

      // the frame number might not be sorted.
      while(frameIndex >= 0){
        const k = faceMotion.keyTimes[frameIndex]
        if(k < motion.frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      if(motion.frameNo > this._frameLength){
        this._frameLength = motion.frameNo
      }
      const timingFunc = CAMediaTimingFunction.functionWithName(kCAMediaTimingFunctionLinear)

      faceMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      faceMotion.timingFunctions.splice(frameIndex, 0, timingFunc)
      faceMotion.values.splice(frameIndex, 0, motion.weight)

      if(motion.next <= 0){
        break
      }

      const _motion = this._faceFrameHash[motion.next]
      if(!_motion){
        console.error(`error: the face frame index(${motion.next}) does not exist.`)
      }
      motion = _motion
    }
  }
  
  // MARK: - IK Frame

  _readIKFrames() {
    this._readOneIKFrame(false)

    const boneIKCount = this.readUnsignedInt()
    for(let i=0; i<boneIKCount; i++){
      this._readOneIKFrame()
    }
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneIKFrame(hasIndex = true) {
    let index = 0
    if(hasIndex){
      index = this.readUnsignedInt()
    }
    const frameNo = this.readUnsignedInt()
    const prev = this.readUnsignedInt()
    const next = this.readUnsignedInt()

    const isVisible = this.readUnsignedByte()
    for(let i=0; i<this._ikCount; i++){
      const isEnable = this.readUnsignedByte()
    }

    // If the version is 1.0, parentCount is 0.
    for(let i=0; i<this._parentCount; i++){
      const modelIndex = this.readUnsignedInt()
      const boneIndex = this.readUnsignedInt()
    }

    const isSelected = this.readUnsignedByte()
  }

  // MARK: - Create Animation

  _createAnimations() {
    const duration = this._frameLength / this.fps

    for(const name of Object.keys(this._animationHash)){
      const motion = this._animationHash[name]
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]

      for(let num=0; num<motion.keyTimes.length; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }

      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      if(motion.keyTimes.length === 1){
        motion.repeatCount = Infinity
      }

      this._workingAnimationGroup.animations.push(motion)
    }

    for(const name of Object.keys(this._faceAnimationHash)){
      const motion = this._faceAnimationHash[name]
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]

      for(let num=0; num<motion.keyTimes.length; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }

      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      this._workingAnimationGroup.animations.push(motion)
    }

    this._workingAnimationGroup.duration = duration
    this._workingAnimationGroup.usesSceneTimeBase = false
    this._workingAnimationGroup.isRemovedOnCompletion = false
    this._workingAnimationGroup.fillMode = kCAFillModeForwards

    this._motions.push(this._workingAnimationGroup)
  }


  _readBoneStatus() {
    // float3 translation
    // float4 rotation
    // bool isMoving?
    // bool enabledPhysics?
    // bool isSelected

    // just ignore data
    if(this.version === 1){
      this.skip(34 * this._boneCount)
    }else{
      this.skip(31 * this._boneCount)
    }
  }

  _readFaceStatus() {
    // float skinValue

    // just ignore data
    this.skip(4 * this._faceCount)
  }

  _readIKStatus() {
    // bool isIsEnable
    this.skip(this._ikCount)
  }

  _readParentStatus() {
    // int4 parentStatus
    this.skip(16 * this._parentCount)
  }

  // MARK: - Camera Frame
  _readCameras() {
    this._workingCameraAnimationGroup = new CAAnimationGroup()
    this._workingCameraAnimationGroup.animations = []
    this._cameraFrameHash = {}

    this._frameLength = 0

    this._readOneCameraFrame(false)

    const cameraFrameCount = this.readUnsignedInt()
    for(let i=0; i<cameraFrameCount; i++){
      this._readOneCameraFrame()
    }

    this._createCameraAnimation()

    this._readCameraStatus()
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneCameraFrame(hasIndex = true) {
    let index = -1
    if(hasIndex){
      index = this.readUnsignedInt()
    }
    const cameraInfo = new MMDVMDCameraInfo(this)
    if(hasIndex){
      this._cameraFrameHash[index] = cameraInfo
    }else{
      this._initialCameraFrame = cameraInfo
    }
  }

  /**
   * @access private
   * @param {MMDVMDCameraInfo} info -
   * @param {CAKeyframeAnimation} distanceMotion -
   * @param {CAKeyframeAnimation} posXMotion -
   * @param {CAKeyframeAnimation} posYMotion -
   * @param {CAKeyframeAnimation} posZMotion -
   * @param {CAKeyframeAnimation} rotXMotion -
   * @param {CAKeyframeAnimation} rotYMotion -
   * @param {CAKeyframeAnimation} rotZMotion -
   * @param {CAKeyframeAnimation} angleMotion -
   * @param {CAKeyframeAnimation} persMotion -
   * @returns {void}
   */
  _addCameraMotionRecursive(
    info, distanceMotion,
    posXMotion, posYMotion, posZMotion,
    rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion) {
    
    let motion = info
    while(motion){
      let frameIndex = distanceMotion.keyTimes.length - 1

      // the frame number might not be sorted.
      while(frameIndex >= 0){
        const k = distanceMotion.keyTimes[frameIndex]
        if(k < motion.frameNo){
          break
        }

        frameIndex -= 1
      }
      frameIndex += 1

      if(motion.frameNo > this.frameLength){
        this._frameLength = motion.frameNo
      }
      console.log(`camera frameNo: ${motion.frameNo}`)

      distanceMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      posXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      posYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      posZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      rotXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      rotYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      rotZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      angleMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      persMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)

      distanceMotion.timingFunctions.splice(frameIndex, 0, motion.timingDistance)
      posXMotion.timingFunctions.splice(frameIndex, 0, motion.timingX)
      posYMotion.timingFunctions.splice(frameIndex, 0, motion.timingY)
      posZMotion.timingFunctions.splice(frameIndex, 0, motion.timingZ)
      rotXMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot)
      rotYMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot)
      rotZMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot)
      angleMotion.timingFunctions.splice(frameIndex, 0, motion.timingAngle)
      
      distanceMotion.values.splice(frameIndex, 0, motion.distance)
      posXMotion.values.splice(frameIndex, 0, motion.posX)
      posYMotion.values.splice(frameIndex, 0, motion.posY)
      posZMotion.values.splice(frameIndex, 0, motion.posZ)
      rotXMotion.values.splice(frameIndex, 0, motion.rotX)
      rotYMotion.values.splice(frameIndex, 0, motion.rotY)
      rotZMotion.values.splice(frameIndex, 0, motion.rotZ)
      angleMotion.values.splice(frameIndex, 0, motion.angle)
      persMotion.values.splice(frameIndex, 0, motion.useOrtho)

      if(motion.next <= 0){
        break
      }

      const _motion = this._cameraFrameHash[motion.next]
      if(!_motion){
        console.error(`error: the camera frame index(${motion.next}) does not exist.`)
      }
      motion = _motion
    }
  }

  _createCameraAnimation() {
    const distanceMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_NODE_NAME}.translation.z`)
    const posXMotion = new CAKeyframeAnimation('transform.translation.x')
    const posYMotion = new CAKeyframeAnimation('transform.translation.y')
    const posZMotion = new CAKeyframeAnimation('transform.translation.z')
    const rotZMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_ROTZ_NODE_NAME}.eulerAngles.z`)
    const rotXMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_ROTX_NODE_NAME}.eulerAngles.x`)
    const rotYMotion = new CAKeyframeAnimation('eulerAngles.y')
    const angleMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_NODE_NAME}.camera.yFov`)
    const persMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_NODE_NAME}.camera.usesOrthographicProjection`)

    distanceMotion.values = []
    posXMotion.values = []
    posYMotion.values = []
    posZMotion.values = []
    rotXMotion.values = []
    rotYMotion.values = []
    rotZMotion.values = []
    angleMotion.values = []
    persMotion.values = []

    distanceMotion.keyTimes = []
    posXMotion.keyTimes = []
    posYMotion.keyTimes = []
    posZMotion.keyTimes = []
    rotXMotion.keyTimes = []
    rotYMotion.keyTimes = []
    rotZMotion.keyTimes = []
    angleMotion.keyTimes = []
    persMotion.keyTimes = []

    distanceMotion.timingFunctions = []
    posXMotion.timingFunctions = []
    posYMotion.timingFunctions = []
    posZMotion.timingFunctions = []
    rotXMotion.timingFunctions = []
    rotYMotion.timingFunctions = []
    rotZMotion.timingFunctions = []
    angleMotion.timingFunctions = []
    //persMotion.timingFunctions = []

    this._frameLength = 0
    this._addCameraMotionRecursive(this._initialCameraFrame, distanceMotion,
      posXMotion, posYMotion, posZMotion,
      rotXMotion, rotYMotion, rotZMotion,
      angleMotion, persMotion
    )

    const duration = this._frameLength / this.fps

    for(const motion of [distanceMotion, posXMotion, posYMotion, posZMotion, rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion]){
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]
      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      for(let num=0; num<motion.keyTimes.length; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }

      this._workingCameraAnimationGroup.animations.push(motion)
      this._workingCameraAnimationGroup.duration = duration
      this._workingCameraAnimationGroup.usesSceneTimeBase = false
      this._workingCameraAnimationGroup.isRemovedOnCompletion = false
      this._workingCameraAnimationGroup.fillMode = kCAFillModeForwards
    }
  }

  _readCameraStatus() {
    // float3 pos
    // float3 lookat?
    // float3 rot
    // usesParse

    // just ignore data
    this.skip(37)
  }

  // MARK: - Light Frame
  _readLights() {
    this._workingLightAnimationGroup = new CAAnimationGroup()
    this._workingLightAnimationGroup.animations = []
    this._lightFrameHash = {}

    this._readOneLightFrame(false)

    const lightFrameCount = this.readUnsignedInt()
    for(let i=0; i<lightFrameCount; i++){
      this._readOneLightFrame()
    }

    this._createLightAnimation()

    this._readLightStatus()
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneLightFrame(hasIndex = true) {
    let index = -1
    if(hasIndex){
      index = this.readUnsignedInt()
    }

    const info = new MMDVMDLightInfo(this)
    if(hasIndex){
      this._lightFrameHash[index] = info
    }else{
      this._initialLightFrame = info
    }
  }

  _createLightAnimation() {
    const colorMotion = new CAKeyframeAnimation('light.color')
    const directionMotion = new CAKeyframeAnimation('transform.quaternion')

    colorMotion.values = []
    directionMotion.values = []

    colorMotion.keyTimes = []
    directionMotion.keyTimes = []

    this._frameLength = 0
    this._addLightMotionRecursive(this._initialLightFrame, colorMotion, directionMotion)

    const duration = this._frameLength / this.fps

    for(const motion of [colorMotion, directionMotion]){
      motion.duration = duration
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      for(let num=0; num<motion.keyTimes.length; num++){
        const keyTime = motion.keyTimes[num] / this._frameLength
        motion.keyTimes[num] = keyTime
      }

      this._workingLightAnimationGroup.animations.push(motion)
    }

    this._workingLightAnimationGroup.duration = duration
    this._workingLightAnimationGroup.usesSceneTimeBase = false
    this._workingLightAnimationGroup.isRemovedOnCompletion = false
    this._workingLightAnimationGroup.fillMode = kCAFillModeForwards
  }

  /**
   * @access private
   * @param {MMDVMDLightInfo} info -
   * @param {CAKeyframeAnimation} colorMotion -
   * @param {CAKeyframeAnimation} directionMotion -
   * @returns {void}
   */
  _addLightMotionRecursive(info, colorMotion, directionMotion) {
    let motion = info
    while(motion){
      let frameIndex = colorMotion.keyTimes.length - 1

      // the frame number might not be sorted.
      while(frameIndex >= 0){
        const k = colorMotion.keyTimes[frameIndex]
        if(k < motion.frameNo){
          break
        }

        frameIndex -= 1
      }
      frameIndex += 1

      if(motion.frameNo > this._frameLength){
        this._frameLength = motion.frameNo
      }

      colorMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      directionMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)

      colorMotion.values.splice(frameIndex, 0, motion.color)
      directionMotion.values.splice(frameIndex, 0, motion.direction)

      if(motion.next <= 0){
        break
      }

      const _motion = this._lightFrameHash[motion.next]
      if(!_motion){
        console.error(`error: the light frame index(${motion.next}) does not exist.`)
      }
      motion = _motion
    } 
  }

  _readLightStatus() {
    // float3 rgb
    // float3 pos
    // byte5 unknown

    // just ignore data
    this.skip(29)
  }

  // MARK: - Accessory Frame
  _readAccessories() {
    this._accessoryCount = this.readUnsignedByte()
    this._accessoryNameArray = []

    for(let i=0; i<this._accessoryCount; i++){
      this._accessoryNameArray.push(this.readString(100))
    }
    for(let index=0; index<this._accessoryCount; index++){
      console.log(`[${index}]: ${this._accessoryNameArray[index]}`)
    }

    if(this._modelCount + this._accessoryCount > this._substituteModels.length){
      const len = this._modelCount + this._accessoryCount - this._substituteModels.length
      for(let i=0; i<len; i++){
        this._substituteModels.push(null)
      }
    }

    this._accessoryFrameHash = {}

    let prevPromise = Promise.resolve()
    for(let index=0; index<this._accessoryCount; index++){
      prevPromise = prevPromise.then(() => {
        //let accessory = new MMDNode()
        const m = this._substituteModels[this._modelCount + index]
        if(m){
          // just skip accessory data
          this.skip(358)

          return m
        }

        const no = this.readUnsignedByte()
        const name = this.readString(100)
        let filePath = this.readString(256)

        //accessory.name = name

        const paths = filePath.match(_userFilePathPattern)
        if(paths){
          const replaced = paths[1].replace(/\\/g, '/')
          filePath = this.directoryPath + '/' + replaced
        }else{
          filePath = filePath.replace(/\\/g, '/')
        }

        if(!filePath){
          const accessory = new MMDNode()
          accessory.name = name
          return accessory
        }

        const accessorySceneSource = MMDSceneSource.sceneSourceWithURLOptions(filePath)
        return accessorySceneSource.didLoad.then(() => {
          const newAccessory = accessorySceneSource.getModel()
          return newAccessory.didLoad.then(() => {
            return newAccessory
          }).catch((error) => {
            console.error(`cannot get accessory data: ${filePath}`)
            return Promise.reject(error)
          })
        }).catch((error) => {
          console.error(`cannot read file: ${filePath}`)
          return Promise.reject(error)
        })
      }).then((accessory) => {

        // set the default scale for accessory (x10)
        accessory.scale = new SCNVector3Make(10.0, 10.0, 10.0)

        const accessoryIndex = this.readUnsignedByte()
        console.log(`accessoryIndex: ${accessoryIndex}`)

        this._readOneAccessoryFrame(false)

        const accessoryFrameCount = this.readUnsignedInt()
        console.log(`accessoryFrameCount: ${accessoryFrameCount}`)
        for(let i=0; i<accessoryFrameCount; i++){
          this._readOneAccessoryFrame()
        }

        this._createAccessoryAnimation()

        this._readAccessoryStatus()

        this._accessories.push(accessory)
      })
    }
    return prevPromise
  }

  /**
   * @access private
   * @param {boolean} [hasIndex = true] -
   * @returns {void}
   */
  _readOneAccessoryFrame(hasIndex = true) {
    let index = 0
    if(hasIndex){
      index = this.readUnsignedInt()
    }

    const info = new MMDVMDAccessoryInfo(this)
    if(hasIndex){
      this._accessoryFrameHash[index] = info
    }else{
      this._initialAccessoryFrame = info
    }
  }

  _createAccessoryAnimation() {
    const animation = new CAAnimationGroup()
    animation.animations = []

    const posMotion = new CAKeyframeAnimation('position')
    const rotMotion = new CAKeyframeAnimation('transform.quaternion')
    const scaleMotion = new CAKeyframeAnimation('scale')
    const hiddenMotion = new CAKeyframeAnimation('hidden')
    const opacityMotion = new CAKeyframeAnimation('opacity')
    const additiveMotion = new CAKeyframeAnimation('/Geometry.materials.blendMode')
    const parentMotion = new CAKeyframeAnimation('parent.motionParentNode')

    posMotion.values = []
    rotMotion.values = []
    scaleMotion.values = []
    hiddenMotion.values = []
    opacityMotion.values = []
    additiveMotion.values = []
    parentMotion.values = []

    posMotion.keyTimes = []
    rotMotion.keyTimes = []
    scaleMotion.keyTimes = []
    hiddenMotion.keyTimes = []
    opacityMotion.keyTimes = []
    additiveMotion.keyTimes = []
    parentMotion.keyTimes = []

    this._frameLength = 0
    this._addAccessoryMotionRecursive(this._initialAccessoryFrame,
      posMotion, rotMotion, scaleMotion, hiddenMotion, opacityMotion,
      additiveMotion, parentMotion)

    const duration = this._frameLength / this.fps

    for(const motion of [posMotion, rotMotion, scaleMotion, hiddenMotion, opacityMotion, additiveMotion, parentMotion]){
      motion.duration = duration
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      for(let num=0; num<motion.keyTimes.length; num++){
        let keyTime = motion.keyTimes[num] / this._frameLength
        if(this._frameLength <= 0){
          keyTime = 0.0
        }
        motion.keyTimes[num] = keyTime
      }
    }
    hiddenMotion.calculationMode = kCAAnimationDiscrete
    additiveMotion.calculationMode = kCAAnimationDiscrete
    parentMotion.calculationMode = kCAAnimationDiscrete

    for(let num=0; num<hiddenMotion.keyTimes.length; num++){
      const keyTime = hiddenMotion.keyTimes[num]
      const value = hiddenMotion.values[num]
      console.log(`isHidden @${keyTime}: ${value}`)
    }

    animation.animations.push(posMotion)
    animation.animations.push(rotMotion)
    animation.animations.push(scaleMotion)
    animation.animations.push(hiddenMotion)
    animation.animations.push(opacityMotion)
    animation.duration = duration
    animation.usesScaleTimeBase = false
    animation.isRemovedOnCompletion = false
    animation.fillMode = kCAFillModeForwards

    const parentEvents = []
    let prevParent = null

    for(let index=0; index<parentMotion.keyTimes.length; index++){
      const keyTime = parentMotion.keyTimes[index]
      const value = parentMotion.values[index]

      if(value){
        const mmdParentNode = value
        // TODO: implement for playingBackward
        let parentEvent = new SCNAnimationEvent(keyTime, (_animation, animatedObject, playingBackward) => {
          const node = animatedObject
          if(animatedObject){
            if(playingBackward){
              if(parent === prevParent){
                parent.addChildNode(node)
              }
            }else{
              value.addChildNode(node)
            }
          }
        })

        parentEvents.push(parentEvent)
        prevParent = mmdParentNode
      }
    }

    let prevBlendMode = SCNBlendMode.alpha
    for(let index=0; index<additiveMotion.keyTimes.length; index++){
      const keyTime = additiveMotion.keyTimes[index]
      const value = additiveMotion.values[index]

      let additiveEvent = new SCNAnimationEvent(keyTime, (_animation, animatedObject, playingBackward) => {
        const geometry = animatedObject.childNodeWithNameRecursively('Geometry', true).geometry
        if(geometry){
          let blendMode = value
          if(playingBackward){
            blendMode = prevBlendMode
          }
          //if(blendMode === SCNBlendMode.add){
          //  console.log('.add')
          //}else if(blendMode === SCNBlendMode.alpha){
          //  console.log('.alpha')
          //}
          for(const material of geometry.materials){
            material.blendMode = blendMode
          }
        }
      })
      parentEvents.push(additiveEvent)
      prevBlendMode = value
    }

    animation.animationEvents = parentEvents

    this._accessoryMotions.push(animation)
  }

  /**
   * @access private
   * @param {MMDVMDAccessoryInfo} info -
   * @param {CAKeyframeAnimation} posMotion -
   * @param {CAKeyframeAnimation} rotMotion -
   * @param {CAKeyframeAnimation} scaleMotion -
   * @param {CAKeyframeAnimation} hiddenMotion -
   * @param {CAKeyframeAnimation} opacityMotion -
   * @param {CAKeyframeAnimation} additiveMotion -
   * @param {CAKeyframeAnimation} parentMotion -
   * @returns {void}
   */
  _addAccessoryMotionRecursive(info, posMotion, rotMotion, scaleMotion,
    hiddenMotion, opacityMotion, additiveMotion, parentMotion) {

    let motion = info
    while(motion){
      let frameIndex = posMotion.keyTimes.length - 1

      // the frame number might not be sorted
      while(frameIndex >= 0){
        const k = posMotion.keyTimes[frameIndex]
        if(k < motion.frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      if(motion.frameNo > this._frameLength){
        this._frameLength = motion.frameNo
      }

      posMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      rotMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      scaleMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      hiddenMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      opacityMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      additiveMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)
      parentMotion.keyTimes.splice(frameIndex, 0, motion.frameNo)

      posMotion.values.splice(frameIndex, 0, motion.position)
      rotMotion.values.splice(frameIndex, 0, motion.rotation)
      scaleMotion.values.splice(frameIndex, 0, motion.scale)
      hiddenMotion.values.splice(frameIndex, 0, motion.isHidden)
      opacityMotion.values.splice(frameIndex, 0, motion.opacity)
      additiveMotion.values.splice(frameIndex, 0, motion.additive)
      parentMotion.values.splice(frameIndex, 0, motion.parent)

      if(motion.next <= 0){
        break
      }

      const _motion = this._accessoryFrameHash[motion.next]
      if(!_motion){
        console.error(`error: the accessory frame index(${motion.next}) does not exist.`)
      }
      motion = _motion
    }
  }

  _readAccessoryStatus() {
    // byte opacity?
    // int modelIndex
    // int boneIndex
    // float3 pos
    // float scale
    // float3 rot
    // byte flag1?
    // byte flat2?

    this.skip(38)
    if(this.version >= 2){
      this.skip(1)
    }
  }

  // MARK: - other settings

  _readSettings() {
    const numObjects = this._modelCount + this._accessoryCount

    const viewFlag = this.readUnsignedByte()

    // wav file
    const usesWav = this.readUnsignedByte()
    const wavPath = this.readString(256)

    // background movie
    const bgMoviePath = this.readString(256)
    const usesMovie = this.readUnsignedByte()

    // background image
    const bgImagePath = this.readString(256)
    const usesImage = this.readUnsignedByte()

    // misc.
    const showInfo = this.readUnsignedByte()
    const showGrid = this.readUnsignedByte()
    const shadow = this.readUnsignedByte()
    this.skip(3) // ?

    const screenCapture = this.readUnsignedByte()
    this.skip(7) // ?

    const shadowColor = this.readFloat() // ?

    this.skip(numObjects)

    this.skip(4 * this._modelCount)

    this.skip(62) // ?

    const usesPhysics = this.readUnsignedByte()
    const gravity = this.readFloat()
    let noise = 0.0
    if(this.version === 1){
      noise = this.readFloat()
    }
    const gravityX = this.readFloat()
    const gravityY = this.readFloat()
    const gravityZ = this.readFloat()

    this.skip(24) // ?

    this.skip(this._modelCount)

    this.skip(5)
  }

  _setupScene() {
    // camera
    const cameraNode = new MMDCameraNode()
    cameraNode.prepareAnimationForKey(this._workingCameraAnimationGroup, 'motion')
    cameraNode.playPreparedAnimationForKey('motion')
    cameraNode.getCamera().automaticallyAdjustsZRange = true

    this._workingScene.rootNode.addChildNode(cameraNode)

    // light
    const lightNode = new SCNNode()
    lightNode.light = new SCNLight()
    lightNode.light.type = SCNLight.LightType.directional
    lightNode.light.castsShadow = true
    lightNode.addAnimationForKey(this._workingLightAnimationGroup, 'motion')
    lightNode.name = 'MMDLight'

    this._workingScene.rootNode.addChildNode(lightNode)

    // model and motion
    for(let index=0; index<this.models.count; index++){
      const model = this.models[index]
      const motion = this._motions[index]

      model.prepareAnimationForKey(motion, 'motion')
      model.playPreparedAnimationForKey('motion')
      this._workingScene.rootNode.addChildNode(model)
    }

    // accessory
    for(let index=0; index<this._accessories.length; index++){
      const accessory = this._accessories[index]
      const motion = this._accessoryMotions[index]

      accessory.prepareAnimationForKey(motion, 'motion')
      accessory.playPreparedAnimationForKey('motion')

      this._workingScene.rootNode.addChildNode(accessory)
    }
  }

  /**
   * @access private
   * @returns {string} -
   */
  _getPascalString() {
    const strlen = this.readUnsignedByte()
    const str = this.readString(strlen)
    if(str){
      return str
    }
    return ''
  }
}

