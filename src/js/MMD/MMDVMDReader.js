'use strict'

import MMDNode from './MMDNode'
import MMDReader from './MMDReader'
import {
  MMD_CAMERA_NODE_NAME,
  MMD_CAMERA_ROTX_NODE_NAME,
  MMD_CAMERA_ROTY_NODE_NAME,
  MMD_CAMERA_ROTZ_NODE_NAME
} from '../constants'
import {
  CAAnimationGroup,
  CAKeyframeAnimation,
  CAMediaTimingFunction,
  SCNQuaternion,
  SKColor,

  // constants
  kCAMediaTimingFunctionLinear,
  kCAFillModeForwards,
} from 'jscenekit'

const _VMDMotionType = {
  model: Symbol(),
  cameraOrLight: Symbol(),
  camera: Symbol(),
  light: Symbol(),
  unknown: Symbol()
}

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDVMDReader extends MMDReader {
  /**
   *
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @constructor
   */
  constructor(data, directoryPath) {
    const isBinary = true
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    this._workingAnimationGroup = null
    this._animationHash = null
    this._faceAnimationHash = null

    this.fps = 30.0

    // header
    this._vmdMagic = ''
    this._motionName = ''
    this._motionType = _VMDMotionType.unknown

    // frame
    this._frameCount = 0
    this._frameLength = 0
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @returns {CAAnimationGroup} -
   */
  static getMotion(data, directoryPath) {
    const reader = new MMDVMDReader(data, directoryPath)
    return reader._loadVMDFile()
  }
 
  /**
   * @access private
   * @returns {CAAnimationGroup} -
   */
  _loadVMDFile() {
    this._workingAnimationGroup = new CAAnimationGroup()
    this._workingAnimationGroup.animations = []

    this._animationHash = new Map()
    this._faceAnimationHash = new Map()

    this._readVMDHeader()
    this._readFrame()
    this._readFaceMotion()
    this._createAnimations()

    if(this.pos >= this.length){
      return this._workingAnimationGroup
    }

    this._readCameraMotion()
    this._readLightMotion()

    console.log(`pos: ${this.pos}, length: ${this.length}`)
    if(this.pos >= this.length){
      return this._workingAnimationGroup
    }

    this._readShadow()

    if(this.pos >= this.length){
      return this._workingAnimationGroup
    }

    this._readVisbilityAndIK()

    return this._workingAnimationGroup
  }

  _readVMDHeader() {
    this._vmdMagic = this.readString(30)
    this._motionName = this.readString(20)

    if(this._motionName === 'カメラ・照明'){
      this._motionType = _VMDMotionType.cameraOrLight
    }else{
      this._motionType = _VMDMotionType.model
    }
  }

  _readFrame() {
    const frameCount = this.readUnsignedInt()
    this._frameCount = frameCount
    this._frameLength = 0
    const bytesPerFrame = 111

    console.log(`readFrame: frameCount: ${frameCount}`)

    if(this._motionType === _VMDMotionType.cameraOrLight && frameCount > 0){
      console.warn('MMDVMDReader: not model motion data has bone motion data')
      this.skip(bytesPerFrame * frameCount, true)
      return
    }

    for(let i=0; i<frameCount; i++){
      const boneName = this.readString(15)
      console.log(`boneName: ${boneName}`)
      if(boneName === null){
        console.warn(`motion(${i}): skip because of broken bone name`)
        this.skip(96)
        continue
      }
      let posXMotion = this._animationHash.get(`posX:${boneName}`)
      let posYMotion = this._animationHash.get(`posY:${boneName}`)
      let posZMotion = this._animationHash.get(`posZ:${boneName}`)
      let rotMotion = this._animationHash.get(`rot:${boneName}`)

      if(typeof posXMotion === 'undefined'){
        posXMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.x`)
        posYMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.y`)
        posZMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation.z`)
        rotMotion = new CAKeyframeAnimation(`/${boneName}.transform.quaternion`)

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

        this._animationHash.set(`posX:${boneName}`, posXMotion)
        this._animationHash.set(`posY:${boneName}`, posYMotion)
        this._animationHash.set(`posZ:${boneName}`, posZMotion)
        this._animationHash.set(`rot:${boneName}`, rotMotion)
      }

      let frameIndex = posXMotion.keyTimes.length - 1
      const frameNo = this.readUnsignedInt()
      console.log(`frameNo: ${frameNo}`)

      while(frameIndex >= 0){
        const k = posXMotion.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      // insert frameNo at frameIndex
      posXMotion.keyTimes.splice(frameIndex, 0, frameNo)
      posYMotion.keyTimes.splice(frameIndex, 0, frameNo)
      posZMotion.keyTimes.splice(frameIndex, 0, frameNo)
      rotMotion.keyTimes.splice(frameIndex, 0, frameNo)

      if(frameNo > this._frameLength){
        this._frameLength = frameNo
      }

      const posX = this.readFloat()
      const posY = this.readFloat()
      const posZ = this.readFloat()
      const rotate = (new SCNQuaternion(-this.readFloat(), -this.readFloat(), this.readFloat(), this.readFloat())).normalize()
      console.log(`pos: ${posX}, ${posY}, ${posZ}`)

      const interpolation = []
      for(let j=0; j<64; j++){
        interpolation.push(this.readUnsignedByte() / 127.0)
      }


      const timingX = new CAMediaTimingFunction(
        interpolation[0],
        interpolation[4],
        interpolation[8],
        interpolation[12]
      )
      posXMotion.timingFunctions.splice(frameIndex, 0, timingX)

      const timingY = new CAMediaTimingFunction(
        interpolation[1],
        interpolation[5],
        interpolation[9],
        interpolation[13]
      )
      posYMotion.timingFunctions.splice(frameIndex, 0, timingY)

      const timingZ = new CAMediaTimingFunction(
        interpolation[2],
        interpolation[6],
        interpolation[10],
        interpolation[14]
      )
      posZMotion.timingFunctions.splice(frameIndex, 0, timingZ)

      const timingRot = new CAMediaTimingFunction(
        interpolation[3],
        interpolation[7],
        interpolation[11],
        interpolation[15]
      )
      rotMotion.timingFunctions.splice(frameIndex, 0, timingRot)

      posXMotion.values.splice(frameIndex, 0, posX)
      posYMotion.values.splice(frameIndex, 0, posY)
      posZMotion.values.splice(frameIndex, 0, posZ)
      rotMotion.values.splice(frameIndex, 0, rotate)
    }
  }

  _readFaceMotion() {
    const faceFrameCount = this.readUnsignedInt()
    const timingFunc = CAMediaTimingFunction.functionWithName(kCAMediaTimingFunctionLinear)
    const bytesPerFrame = 23

    console.log(`readFaceMotion: faceFrameCount: ${faceFrameCount}`)

    if(this._motionType === _VMDMotionType.cameraOrLight && faceFrameCount > 0){
      console.warn('not model motion data has face motion data')
      this.skip(bytesPerFrame * faceFrameCount, true)
      return
    }

    for(let i=0; i<faceFrameCount; i++){
      const name = this.readString(15)
      const frameNo = this.readUnsignedInt()
      const factor = this.readFloat()

      console.log(`faceName: ${name}`)

      const keyPath = `morpher.weights.${name}`
      let animation = this._faceAnimationHash.get(name)

      if(typeof animation === 'undefined'){
        animation = new CAKeyframeAnimation(keyPath)
        animation.values = []
        animation.keyTimes = []
        animation.timingFunctions = []
        this._faceAnimationHash.set(name, animation)
      }

      let frameIndex = animation.keyTimes.length - 1
      while(frameIndex >= 0){
        const k = animation.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      // insert frameNo at frameIndex
      animation.keyTimes.splice(frameIndex, 0, frameNo)
      animation.values.splice(frameIndex, 0, factor)
      animation.timingFunctions.splice(frameIndex, 0, timingFunc)
    }
  }

  _createAnimations() {
    const duration = this._frameLength / this.fps

    this._animationHash.forEach((motion, key) => {
      // normalize keyTimes
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
    })

    this._workingAnimationGroup.duration = duration
    this._workingAnimationGroup.usesSceneTimeBase = false
    this._workingAnimationGroup.isRemovedOnCompletion = false
    this._workingAnimationGroup.fillMode = kCAFillModeForwards
  }

  _readCameraMotion() {
    const cameraFrameCount = this.readUnsignedInt()
    const bytesPerFrame = 61

    console.log(`readCameraMotion: cameraFrameCount: ${cameraFrameCount}`)

    if(cameraFrameCount === 0){
      return
    }

    if(this._motionType !== _VMDMotionType.cameraOrLight){
      console.warn('not camera motion has motion data')
      this.skip(bytesPerFrame * cameraFrameCount, true)
      return
    }
    this._motionType = _VMDMotionType.camera

    // init values
    this._frameCount = cameraFrameCount
    this._frameLength = 0

    const distanceMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_NODE_NAME}.translation.z`)
    const posXMotion = new CAKeyframeAnimation('transform.translation.x')
    const posYMotion = new CAKeyframeAnimation('transform.translation.y')
    const posZMotion = new CAKeyframeAnimation('transform.translation.z')
    const rotZMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_ROTZ_NODE_NAME}.eulerAngles.z`)
    const rotXMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_ROTX_NODE_NAME}.eulerAngles.x`)
    const rotYMotion = new CAKeyframeAnimation(`/${MMD_CAMERA_ROTY_NODE_NAME}.eulerAngles.y`)
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

    distanceMotion.timingFunctions = []
    posXMotion.timingFunctions = []
    posYMotion.timingFunctions = []
    posZMotion.timingFunctions = []
    rotXMotion.timingFunctions = []
    rotYMotion.timingFunctions = []
    rotZMotion.timingFunctions = []
    angleMotion.timingFunctions = []
    persMotion.timingFunctions = []

    for(let i=0; i<cameraFrameCount; i++){
      let frameIndex = distanceMotion.keyTimes.length - 1
      const frameNo = this.readUnsignedInt()

      while(frameIndex >= 0){
        const k = distanceMotion.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      distanceMotion.keyTimes.splice(frameIndex, 0, frameNo)
      posXMotion.keyTimes.splice(frameIndex, 0, frameNo)
      posYMotion.keyTimes.splice(frameIndex, 0, frameNo)
      posZMotion.keyTimes.splice(frameIndex, 0, frameNo)
      rotXMotion.keyTimes.splice(frameIndex, 0, frameNo)
      rotYMotion.keyTimes.splice(frameIndex, 0, frameNo)
      rotZMotion.keyTimes.splice(frameIndex, 0, frameNo)
      angleMotion.keyTimes.splice(frameIndex, 0, frameNo)
      persMotion.keyTimes.splice(frameIndex, 0, frameNo)

      if(frameNo > this._frameLength){
        this._frameLength = frameNo
      }

      const distance = -this.readFloat()
      const posX = this.readFloat()
      const posY = this.readFloat()
      const posZ = -this.readFloat()

      const rotX = this.readFloat()
      const rotY = this.readFloat()
      const rotZ = -this.readFloat()

      const interpolation = []
      for(let j=0; j<24; i++){
        interpolation.push(this.readUnsignedByte() / 127.0)
      }

      const angle = this.readInt()
      const perspective = this.readUnsignedByte()
      const useOrtho = (perspective !== 0)

      const timingX = new CAMediaTimingFunction(
        interpolation[0],
        interpolation[2],
        interpolation[1],
        interpolation[3]
      )
      posXMotion.timingFunctions.splice(frameIndex, 0, timingX)

      const timingY = new CAMediaTimingFunction(
        interpolation[4],
        interpolation[6],
        interpolation[5],
        interpolation[7]
      )
      posYMotion.timingFunctions.splice(frameIndex, 0, timingY)

      const timingZ = new CAMediaTimingFunction(
        interpolation[8],
        interpolation[10],
        interpolation[9],
        interpolation[11]
      )
      posZMotion.timingFunctions.splice(frameIndex, 0, timingZ)

      const timingRot = new CAMediaTimingFunction(
        interpolation[12],
        interpolation[14],
        interpolation[13],
        interpolation[15]
      )
      rotXMotion.timingFunctions.splice(frameIndex, 0, timingRot)
      rotYMotion.timingFunctions.splice(frameIndex, 0, timingRot)
      rotZMotion.timingFunctions.splice(frameIndex, 0, timingRot)

      const timingDistance = new CAMediaTimingFunction(
        interpolation[16],
        interpolation[18],
        interpolation[17],
        interpolation[19]
      )
      distanceMotion.timingFunctions.splice(frameIndex, 0, timingDistance)

      const timingAngle = new CAMediaTimingFunction(
        interpolation[20],
        interpolation[22],
        interpolation[21],
        interpolation[23]
      )
      angleMotion.timingFunctions.splice(frameIndex, 0, timingAngle)

      distanceMotion.values.splice(frameIndex, 0, distance)
      posXMotion.values.splice(frameIndex, 0, posX)
      posYMotion.values.splice(frameIndex, 0, posY)
      posZMotion.values.splice(frameIndex, 0, posZ)
      rotXMotion.values.splice(frameIndex, 0, rotX)
      rotYMotion.values.splice(frameIndex, 0, rotY)
      rotZMotion.values.splice(frameIndex, 0, rotZ)
      angleMotion.values.splice(frameIndex, 0, angle)
      persMotion.values.splice(frameIndex, 0, useOrtho)
    }

    const duration = this._frameLength / this.fps

    const motions = [
      distanceMotion,
      posXMotion,
      posYMotion,
      posZMotion,
      rotXMotion,
      rotYMotion,
      rotZMotion,
      angleMotion,
      persMotion
    ]
    motions.forEach((motion) => {
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]
      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      const len = motion.keyTimes.length
      for(let num=0; num<len; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }
      this._workingAnimationGroup.animations.push(motion)
    })

    this._workingAnimationGroup.duration = duration
    this._workingAnimationGroup.usesSceneTimeBase = false
    this._workingAnimationGroup.isRemovedOnCompletion = false
    this._workingAnimationGroup.fillMode = kCAFillModeForwards
  }

  _readLightMotion() {
    const lightFrameCount = this.readUnsignedInt()
    const bytesPerFrame = 28

    console.log(`readLightMotion: lightFrameCount: ${lightFrameCount}`)

    if(lightFrameCount === 0){
      return
    }

    if(this._motionType !== _VMDMotionType.cameraOrLight){
      console.warn('not light motion has light motion data')
      this.skip(bytesPerFrame * lightFrameCount, true)
      return
    }
    this._motionType = _VMDMotionType.light

    this._frameCount = lightFrameCount
    this._frameLength = 0

    const colorMotion = new CAKeyframeAnimation('light.color')
    const directionMotion = new CAKeyframeAnimation('transform.quaternion')

    colorMotion.values = []
    directionMotion.values = []

    colorMotion.keyTimes = []
    directionMotion.keyTimes = []

    for(let i=0; i<lightFrameCount; i++){
      let frameIndex = colorMotion.keyTimes.length - 1
      const frameNo = this.readUnsignedInt()

      while(frameIndex >= 0){
        const k = colorMotion.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      colorMotion.keyTimes.splice(frameIndex, 0, frameNo)
      directionMotion.keyTimes.splice(frameIndex, 0, frameNo)

      if(frameNo > this._frameLength){
        this._frameLength = frameNo
      }

      const color = SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0)
      colorMotion.values.splice(frameIndex, 0, color)

      const rotX = this.readFloat()
      const rotY = this.readFloat()
      const rotZ = this.readFloat()

      const cosX = Math.cos(rotX * 0.5)
      const cosY = Math.cos(rotY * 0.5)
      const cosZ = Math.cos(rotZ * 0.5)
      const sinX = Math.sin(rotX * 0.5)
      const sinY = Math.sin(rotY * 0.5)
      const sinZ = Math.sin(rotZ * 0.5)

      const quat = new SCNQuaternion()
      quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ
      quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ
      quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ
      quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ

      const direction = quat.normalize()
      directionMotion.values.splice(frameIndex, 0, direction)
    }

    const duration = this._frameLength / this.fps
    const motions = [colorMotion, directionMotion]

    motions.forEach((motion) => {
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]
      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      const len = motion.keyTImes.length
      for(let num=0; num<len; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }

      this._workingAnimationGroup.animations.push(motion)
    })

    this._workingAnimationGroup.duration = duration
    this._workingAnimationGroup.usesSceneTimeBase = false
    this._workingAnimationGroup.isRemovedOnCompletion = false
    this._workingAnimationGroup.fillMode = kCAFillModeForwards
  }

  _readShadow() {
    const shadowFrameCount = this.readUnsignedInt()
    const shadowArray = []
    const bytesPerFrame = 9

    console.log(`readShadow: shadowFrameCount: ${shadowFrameCount}`)
    if(shadowFrameCount === 0){
      return
    }

    const dataLength = bytesPerFrame * shadowFrameCount
    if(this._motionType !== _VMDMotionType.model){
      console.warn('not model motion has shadow motion data')
      this.skip(dataLength, true)
      return
    }

    if(this.getAvailableDataLength() < dataLength){
      console.warn('this file doesn\'t have shadow data')
      this.skip(dataLength, true)
      return
    }

    let shadowFrameLength = 0
    const shadowMotion = new CAKeyframeAnimation('????') // FIXME: set appropriate keyPath

    shadowMotion.values = []
    shadowMotion.keyTimes = []

    for(let i=0; i<shadowFrameCount; i++){
      let frameIndex = shadowMotion.keyTimes.length - 1
      const frameNo = this.readUnsignedInt()

      while(frameIndex >= 0){
        const k = shadowMotion.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      shadowMotion.keyTimes.splice(frameIndex, 0, frameNo)

      if(frameNo > this._frameLength){
        this._frameLength = frameNo
      }

      const mode = this.readUnsignedByte()
      const distance = this.readFloat()

    }

    //const duration = shadowFrameLength / this.fps

    const motionLength = shadowMotion.keyTimes[shadowMotion.keyTimes.length - 1]
    shadowMotion.duration = motionLength / this.fps
    shadowMotion.usesSceneTimeBase = false
    shadowMotion.isRemovedOnCompletion = false
    shadowMotion.fillMode = kCAFillModeForwards

    const len = shadowMotion.keyTimes.length
    for(let num=0; num<len; num++){
      const keyTime = shadowMotion.keyTimes[num] / motionLength
      shadowMotion.keyTimes[num] = keyTime
    }

    this._workingAnimationGroup.animations.push(shadowMotion)
  }

  _readVisibilityAndIK() {
    const ikFrameCount = this.readUnsignedInt()
    const ikArray = []
    const bytesPerFrame = 9

    console.log(`readVisibilityAndIK: ikFrameCount: ${ikFrameCount}`)

    if(ikFrameCount === 0){
      return
    }

    const dataLength = bytesPerFrame * ikFrameCount
    if(this._motionType !== _VMDMotionType.model){
      console.warn('not model motion has IK motion data')
      this.skip(dataLength, true)
      return
    }

    if(this.getAvailableDataLength() < dataLength){
      console.warn('this file doesn\'t have IK data')
      this.skip(dataLength, true)
      return
    }

    let ikFrameLength = 0
    const ikMotion = new CAKeyframeAnimation('????') // FIXME: set appropriate keyPath
    const hiddenMotion = new CAKeyframeAnimation('hidden')

    ikMotion.values = []
    hiddenMotion.values = []

    ikMotion.keyTimes = []
    hiddenMotion.keyTimes = []

    for(let i=0; i<ikFrameCount; i++){
      let frameIndex = ikMotion.keyTimes.length - 1
      const frameNo = this.readUnsignedInt()

      while(frameIndex >= 0){
        const k = ikMotion.keyTimes[frameIndex]
        if(k < frameNo){
          break
        }
        frameIndex -= 1
      }
      frameIndex += 1

      ikMotion.keyTimes.splice(frameIndex, 0, frameNo)
      hiddenMotion.keyTimes.splice(frameIndex, 0, frameNo)

      if(frameNo > this._frameLength){
        this._frameLength = frameNo
      }

      const visible = this.readUnsignedByte()
      const hidden = (visible === 0)
      const ikNum = this.readUnsignedInt()

      for(let num=0; num<ikNum; num++){
        const boneName = this.readString(20)
        const ikOn = this.readUnsignedByte()
      }
    }
    const duration = ikFrameLength / this.fps

    const motions = [ikMotion, hiddenMotion]
    motions.forEach((motion) => {
      const motionLength = motion.keyTimes[motion.keyTimes.length - 1]
      motion.duration = motionLength / this.fps
      motion.usesSceneTimeBase = false
      motion.isRemovedOnCompletion = false
      motion.fillMode = kCAFillModeForwards

      const len = motion.keyTimes.length
      for(let num=0; num<len; num++){
        const keyTime = motion.keyTimes[num] / motionLength
        motion.keyTimes[num] = keyTime
      }
      this._workingAnimationGroup.animations.push(motion)
    })

    this._workingAnimationGroup.duration = duration
  }

  static get Type() {
    return _VMDMotionType
  }
}

