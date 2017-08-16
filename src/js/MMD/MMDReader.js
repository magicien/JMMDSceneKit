'use strict'

import {
  _BinaryReader,
  SKColor
} from 'jscenekit'
import TGAImage from 'TGAImage'
import _TextReader from '../util/_TextReader'
import _ToonImages from './_ToonImages'

const _toonImages = _ToonImages
const _toonMaterials = []
const _c = document.createElement('canvas')
_c.width = 1
_c.height = 1
const _ctx = _c.getContext('2d')

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
    //this.length = data.byteLength
    this.length = data.length

    this._reader = null

    if(isBinary){
      this._reader = new _BinaryReader(data, isBigEndian, encoding)
    }else{
      this._reader = new _TextReader(data, encoding)
    }
  }

  static get toonTextures() {
    return _toonImages
  }

  static get toonMaterials() {
    return _toonMaterials
  }

  static getToonMaterial(image) {
    _ctx.drawImage(image, 0, image.height-1, 1, 1, 0, 0, 1, 1)
    const data = _ctx.getImageData(0, 0, 1, 1).data
    const r = data[0] / 255.0
    const g = data[1] / 255.0
    const b = data[2] / 255.0
    const a = data[3] / 255.0
    console.warn(r + ', ' + g + ', ' + b + ', ' + a)
    return new SKColor(r, g, b, a)
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
      if(fileName.endsWith('tga')){
        const tga = TGAImage.imageWithURL(fileName)
        tga.didLoad.then(() => {
          resolve(tga.image)
        })
      }else{
        const image = new Image()
        image.onload = () => {
          resolve(image)
        }
        image.onerror = () => {
          reject(new Error(`image ${fileName} load error`))
        }
        image.src = fileName
      }
    })
    return promise
  }
} 

for(let i=0; i<_toonImages.length; i++){
  const image = _toonImages[i]
  if(image.complete){
    _toonMaterials[i] = MMDReader.getToonMaterial(image)
  }else{
    image.onload = () => {
      _toonMaterials[i] = MMDReader.getToonMaterial(image)
    }
  }
}

