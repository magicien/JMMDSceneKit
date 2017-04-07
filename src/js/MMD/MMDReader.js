'use strict'

import BinaryReader from '../util/BinaryReader'
import TextReader from '../util/TextReader'
//import {
//  SCNNode
//} from 'jscenekit'

/**
 *
 * @access public
 */
export default class MMDReader {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @param {boolean} [isBinary = true] -
   * @param {boolean} [isBigEndian = false] -
   * @param {string} [encoding = ''] -
   */
  constructor(data, directoryPath, isBinary = true, isBigEndian = false, encoding = '') {
    /**
     *
     * @type {string}
     */
    this.directoryPath = directoryPath

    /**
     *
     * @type {}
     */
    this.binaryData = data

    /**
     *
     * @type {number}
     */
    this.length = data.byteLength

    this._reader = null

    if(isBinary){
      this._reader = new BinaryReader(data, isBigEndian, encoding)
    }else{
      this._reader = new TextReader(data, encoding)
    }
  }

  skip(length, noAssert = false) {
    this._reader.skip(length, noAssert)
  }

  readString(length, encoding) {
    return this._reader.readString(length, encoding)
  }

  readInteger(length, signed) {
    return this._reader.readInteger(length, signed)
  }

  readUnsignedByte() {
    return this._reader.readUnsignedByte()
  }

  readUnsignedShort() {
    return this._reader.readUnsignedShort()
  }

  readUnsignedInt() {
    return this._reader.readUnsignedInt()
  }

  readInt() {
    return this._reader.readInt()
  }

  readFloat() {
    return this._reader.readFloat()
  }

  readDouble() {
    return this._reader.readDouble()
  }

  get pos() {
    return this._reader._pos
  }

  getAvailableDataLength() {
    return this._reader.getAvailableDataLength()
  }

  loadTexture(filePath) {
    const promise = new Promise((resolve, reject) => {
      const fileName = this.directoryPath + filePath
      const image = new Image()
      image.onload = () => {
        resolve(image)
      }
      image.onerror = () => {
        reject(new Error(`image ${fileName} load error`))
      }
      image.src = fileName
    })
    return promise
  }
} 
