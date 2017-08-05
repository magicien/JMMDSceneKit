'use strict'

import MMDNode from './MMDNode'
import MMDReader from './MMDReader'
import MMDSceneSource from './MMDSceneSource'
import {
  SCNVector3
} from 'jscenekit'

/**
 *
 * @access public
 * @extends {MMDReader}
 */
export default class MMDVACReader extends MMDReader {
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
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @returns {?MMDNode} -
   */
  static getNode(data, directoryPath) {
    const reader = new MMDVACReader(data, directoryPath)
    const node = reader.loadVACFile()

    return node
  }

  /**
   * @access private
   * @returns {?MMDNode} -
   */
  loadVACFile() {
    const lines = this.binaryData.split('\r\n')
    if(lines.length < 6){
      return null
    }
    const name = lines[0]
    const fileName = lines[1]
    const scaleStr = lines[2]
    const positions = lines[3].split(',')
    const rotations = lines[4].split(',')
    const boneName = lines[5]

    const xFilePath = this.directoryPath + '/' + fileName
    const xNode = new MMDNode()
    xNode._loadedPromise = new Promise((resolve, reject) => {
      this._resolveFunction = resolve
      this._rejectFunction = reject
    })

    const source = MMDSceneSource.sceneSourceWithURLOptions(xFilePath)
    source.didLoad.then(() => {
    //if(!scene){
    //  console.error(`cannot read file: ${xFilePath}`)
    //  return null
    //}

      this._model = source.getModel()
      if(!this._model){
        throw new Error('model load error')
      }
      return this._model.didLoad
    }).then(() => {
      this._model.name = name
      const scale = parseFloat(scaleStr)
      if(!isNaN(scale)){
        const s = scale * 10.0
        this._model.scale = new SCNVector3(s, s, s)
      }else{
        this._model.scale = new SCNVector3(10.0, 10.0, 10.0)
      }

      if(positions.length >= 3){
        const posX = parseFloat(positions[0])
        const posY = parseFloat(positions[1])
        const posZ = parseFloat(positions[2])
        if(!isNaN(posX) && !isNaN(posY) && !isNaN(posZ)){
          this._model.position = new SCNVector3(posX, posY, posZ)
        }
      }

      if(rotations.length >= 3){
        const rotX = parseFloat(rotations[0])
        const rotY = parseFloat(rotations[1])
        const rotZ = parseFloat(rotations[2])
        if(!isNaN(rotX) && !isNaN(rotY) && !isNaN(rotZ)){
          // TODO: implement
        }
      }

      xNode.copySCNNodeValues(this._model)
      xNode.copyValues(this._model)

      this._resolveFunction()
    }).catch((error) => {
      throw new Error('model load error: ' + error)
    })
    return xNode
  }
}

