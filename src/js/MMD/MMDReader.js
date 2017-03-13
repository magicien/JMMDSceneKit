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

  readString(length) {
    return this._reader.readString(length)
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

  readFloat() {
    return this._reader.readFloat()
  }

  get pos() {
    return this._reader._pos
  }
} 
