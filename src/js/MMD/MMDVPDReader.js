'use strict'

import MMDReader from './MMDReader'
import {
  CAAnimationGroup,
  CAKeyframeAnimation,
  SCNVector3,
  SCNVector4,
  
  // constraints
  kCAFillModeForwards
} from 'jscenekit'

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDVPDReader extends MMDReader {
  /**
   * 
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  constructor(data, directoryPath) {
    const isBinary = false
    const isBigEndian = false
    const encoding = 'sjis'
    super(data, directoryPath, isBinary, isBigEndian, encoding)

    /**
     * @access private
     * @type {CAAnimationGroup}
     */
    this.workingAnimationGroup = null
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} [directoryPath = ''] -
   * @returns {?CAAnimationGroup} -
   */
  static getAnimation(data, directoryPath = '') {
    const reader = new MMDVPDReader(data, directoryPath)
    const animation = reader.loadVPDFile()

    return animation
  }

  /**
   * @access private
   * @returns {?CAAnimationGroup} -
   */
  loadVPDFile() {
    const lines = this.binaryData.split('\r\n')

    this.workingAnimationGroup = new CAAnimationGroup()
    this.workingAnimationGroup.animations = []

    const magic = lines[0]
    if(magic !== 'Vocaloid Pose Data file'){
      console.error(`Unknown file format: ${magic}`)
      return null
    }

    const modelName = lines[2].split(';')[0]
    const numBonesText = lines[3].split(';')[0]
    const numBones = parseInt(numBonesText)
    if(isNaN(numBones)){
      return null
    }

    let line = 5
    for(let boneNo=0; boneNo<numBones; boneNo++){
      const boneName = lines[line+0].split('{')[1]
      const posText = lines[line+1].split(';')[0].split(',')
      const rotText = lines[line+2].split(';')[0].split(',')

      const posX = this.getFloatFromText(posText[0])
      const posY = this.getFloatFromText(posText[1])
      const posZ = this.getFloatFromText(posText[2])
      const pos = new SCNVector3(posX, posY, posZ)

      const rotX = this.getFloatFromText(rotText[0])
      const rotY = this.getFloatFromText(rotText[1])
      const rotZ = this.getFloatFromText(rotText[2])
      const rotW = this.getFloatFromText(rotText[3])
      const rot = new SCNVector4(-rotX, -rotY, rotZ, rotW)

      const posMotion = new CAKeyframeAnimation(`/${boneName}.transform.translation`)
      const rotMotion = new CAKeyframeAnimation(`/${boneName}.transform.quaternion`)

      posMotion.values = [pos]
      rotMotion.values = [rot]

      posMotion.keyTimes = [0.0]
      rotMotion.keyTimes = [0.0]

      this.workingAnimationGroup.animations.push(posMotion)
      this.workingANimationGroup.animations.push(rotMotion)

      line += 5
    }

    this.workingAnimationGroup.duration = 0
    this.workingAnimationGroup.usesSceneTimeBase = false
    this.workingAnimationGroup.isRemovedOnCompletion = false
    this.workingAnimationGroup.fillMode = kCAFillModeForwards

    return this.workingAnimationGroup
  }

  /**
   * @access private
   * @param {string} text -
   * @returns {Float} -
   */
  getFloatFromText(text) {
    const value = parseFloat(text)
    if(!isNaN(value)){
      return value
    }
    return 0
  }
}

