'use strict'

import {
  SCNNode,
  SCNScene,
  SCNSceneSource,
  _BinaryRequest,
  _File,
  _FileReader
} from 'jscenekit'
import MMDNode from './MMDNode'
import MMDPMDReader from './MMDPMDReader'
import MMDPMXReader from './MMDPMXReader'
import MMDVMDReader from './MMDVMDReader'
import MMDXReader from './MMDXReader'

const _MMDFileType = {
  pmm: 'pmm',
  pmd: 'pmd',
  vmd: 'vmd',
  vpd: 'vpd',
  x: 'x',
  vac: 'vac',
  pmx: 'pmx',
  obj: 'obj',
  dae: 'dae',
  abc: 'abc',
  scn: 'scn',
  unknown: 'unknown'
}

const _LoadingOption = {
  animationImportPolicy: 'kSceneSourceAnimationLoadingMode',
  assetDirectoryURLs: 'kSceneSourceAssetDirectoryURLs',
  checkConsistency: 'kSceneSourceCheckConsistency',
  convertToYUp: 'kSceneSourceConvertToYUpIfNeeded',
  convertUnitsToMeters: 'kSceneSourceConvertToUnit',
  createNormalsIfAbsent: 'kSceneSourceCreateNormalsIfAbsent',
  flattenScene: 'kSceneSourceFlattenScene',
  overrideAssetURLs: 'kSceneSourceOverrideAssetURLs',
  preserveOriginalTopology: 'kSceneSourcePreserveOriginalTopology',
  strictConformance: 'kSceneSourceStrictConformanceKey',
  useSafeMode: 'kSceneSourceUseSafeMode' 
}


// for node
//import fs from 'fs'

/**
 *
 * @access public
 * @extends {SCNSceneSource}
 */
export default class MMDSceneSource extends SCNSceneSource {
  // Creating a Scene Source

  /**
   * Initializes a scene source for reading the scene graph from a specified file.
   * @access public
   * @constructor
   * @param {string|Buffer|ArrayBuffer} data -
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary containing options that affect scene loading. See Scene Loading Options for available keys and values. Pass nil to use default options.
   * @param {string} directoryPath -
   * @param {MMDNode[]} models -
   * @param {CAAnimation[]} motions -
   * @desc If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the init(data:options:) method instead.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1522629-init
   */
  constructor(data, options, directoryPath, models, motions) {
    super(data, options)

    this._fileType = _MMDFileType.unknown
    this._directoryPath = directoryPath
    this._workingScene = null
    this._workingNode = null
    this._workingAnimationGroup = null

    //if(typeof data === 'undefined'){
    //  return
    //}
    //this._loadData(data, options)
  }

  static sceneSourceWithDataOptions(data, options, directoryPath, models = null, motions = null) {
    return new MMDSceneSource(data, options, directoryPath, models, motions)
  }

  static sceneSourceWithURLOpions(url, options, models = null, motions = null) {
    let _options = options
    if(_options === null){
      _options = new Map()
    }
    if(typeof _options.get(_LoadingOption.assetDirectoryURLs) === 'undefined'){
      const paths = url.split('/')
      const name = paths.pop()
      const directory = paths.join('/')

      _options.set(_LoadingOption.assetDirectoryURLs, directory)
    }

    const promise = _BinaryRequest.get(url)
      .then((data) => {
        return new MMDSceneSource(data, _options)
      })
    return promise
  }

  static sceneSourceWithPathOptions(path, options, models = null, motions = null) {
    const paths = path.split('/')
    const fileName = paths.pop()
    const directoryPath = paths.join('/') + '/'

    // for node
    /*
    const promise = new Promise((resolve, reject) => {
      fs.readFile(path, null, (err, data) => {
        if(err){
          reject(err)
          return
        }

        const source = new MMDSceneSource(data, options, directoryPath, models, motions)
        resolve(source)
      })
    })
    */

    // for browser
    /*
    const promise = BinaryRequest.get(path)
      .then((data) => {
        const source = new MMDSceneSource(data, options, models, motions)
        Promise.reject(error)
        Promise.resolve(source)
      })
    */

    const promise = new Promise((resolve, reject) => {
      const file = new _File([], path)
      const reader = new _FileReader()
      reader.onloadend = () => {
        const data = reader.result
        const source = new MMDSceneSource(data, options, directoryPath, models, motions)
        resolve(source)
      }
      reader.onerror = () => {
        reject(reader.error)
      }
      reader.readAsBinaryString(file)
    })

    return promise
  }

  /**
   *
   * @access private
   * @param {Buffer} data -
   * @param {Map<SCNSceneSource.LoadingOption, object>} options -
   * @param {?MMDNode[]} [models = null] -
   * @param {?CAAnimation[]} [motions = null] -
   * @returns {void}
   */
  _loadData(data, options, models = null, motions = null) {
    console.warn('MMDSceneSource _loadData')
    //this._workingScene = new MMDScene()
    this._workingScene = new SCNScene()
    this._checkFileTypeFromData(data)

    if(this._fileType === _MMDFileType.pmd){
      const pmdNode = MMDPMDReader.getNode(data, this._directoryPath)
      if(pmdNode){
        this._workingNode = pmdNode
      }
    }else if(this._fileType === _MMDFileType.vmd){
      const vmdMotion = MMDVMDReader.getMotion(data)
      if(vmdMotion){
        this._workingAnimationGroup = vmdMotion
      }
    }else if(this._fileType === _MMDFileType.x){
      const xNode = MMDXReader.getNode(data, this._directoryPath)
      if(xNode){
        this._workingNode = xNode
      }
    }else if(this._fileType === _MMDFileType.pmx){
      const pmxNode = MMDPMXReader.getNode(data, this._directoryPath)
      if(pmxNode){
        this._workingNode = pmxNode
      }
    }
    /*
    }else if(this._fileType === _MMDFileType.vpd){
      const vpdAnimation = MMDVPDReader.getAnimation(data)
      if(vpdAnimation){
        this.workingAnimationGroup = vpdAnimation
      }
    }else if(this._fileType === _MMDFileType.pmm){
      const pmmScene = MMDPMMReader.getScene(data, this._directoryPath, models, motions)
      if(pmmScene){
        pmmScene.rootNode.childNodes.forEach((node) => {
          this._workingScene.rootNode.addChildNode(node)
        })
      }
    }else if(this._fileType === _MMDFileType.vac){
      const vacNode = MMDVACReader.getNode(data, this._directoryPath)
      if(vacNode){
        this._workingNode = vacNode
      }
    }else if(this._fileType === _MMDFileType.obj
            || this._fileType === _MMDFileType.dae
            || this._fileType === _MMDFileType.scn){
      const sceneSource = new SCNSceneSource(data, options)
      if(sceneSource){
        const scene = sceneSource.scene(options)
        const mmdNode = new MMDNode()
        scene.rootNode.childNodes.forEach((child) => {
          mmdNode.addChildNode(child)
        })
        this._workingNode = mmdNode
      }
    }else if(this._fileType === _MMDFileType.abc){
      // ?
    }else{
      // unknown file
    }
    */
    else{
      // try SCNSceneSource to load the data
      this._data = data
      this._workingScene = super.scene(options)
    }

    if(this._workingNode){
      this._workingScene.rootNode.addChildNode(this._workingNode)
    }
    if(this._workingAnimationGroup){
      this._workingScene.rootNode.addAnimationForKey(this._workingAnimationGroup, null)
    }
  }

  static sceneSource() {
    return new MMDSceneSource()
  }

  scene(options = null, statusHandler = null) {
    let _options = options
    if(!_options){
      if(this._options){
        _options = this._options
      }
    }

    let url = this._url
    const assetDirectoryURLs = _options.get(_LoadingOption.assetDirectoryURLs)
    if(assetDirectoryURLs){
      let dir = assetDirectoryURLs
      if(Array.isArray(dir)){
        dir = dir[0]
      }
      url = dir + '/'
      if(this._url){
        url += this._url.split('/').pop()
      }
    }
    if(!this._directoryPath){
      const paths = url.split('/')
      paths.pop()
      this._directoryPath = paths.join('/') + '/'
    }

    this._loadData(this._data, _options)

    return this.getScene()
  }

  modelNodes() {
    const nodeArray = []
    if(this._fileType === _MMDFileType.pmd
      || this._fileType === _MMDFileType.pmx
      || this._fileType === _MMDFileType.x
      || this._fileType === _MMDFileType.vac){
      nodeArray.push(this._workingNode)
    }else if(this._fileType === _MMDFileType.pmm){
      this._workingScene.rootNode.childNodes.forEach((node) => {
        if(node instanceof MMDNode){
          nodeArray.push(node) // FIXME: clone node
        }
      })
    }
    return nodeArray
  }

  get cameraNodes() {
    const cameraArray = []
    // TODO: implement
    return cameraArray
  }

  get lightNodes() {
    const lightArray = []
    // TODO: implement
    return lightArray
  }

  getScene() {
    return this._workingScene
  }

  getModel() {
    if(this._fileType === _MMDFileType.pmd
      || this._fileType === _MMDFileType.pmx
      || this._fileType === _MMDFileType.x
      || this._fileType === _MMDFileType.vac){
      return this._workingNode
    }else if(this._fileType === _MMDFileType.pmm){
      return this._workingScene.rootNode.childNodes.find((node) => node instanceof MMDNode)
    }
    throw new Error('getModel not implemented for the file type')
  }

  getMotion() {
    //console.log('getMotion: workingAnimationGroup.animations.length: ' + this._workingAnimationGroup.animations.length)
    return this._workingAnimationGroup
  }

  /**
   *
   * @access public
   * @returns {Map<string, CAAnimation>} -
   */
  animations() {
    const animationHash = new Map()
    animationHash.set('animation', this._workingAnimationGroup) // FIXME
    return animationHash
  }

  /**
   * 
   * @access private
   * @param {Buffer} data -
   * @returns {Symbol} -
   */
  _checkFileTypeFromData(data) {
    const str = data.toString('ascii', 0, 25)
    if(str.startsWith('Pmd')){
      this._fileType = _MMDFileType.pmd
    }else if(str.startsWith('xof ')){
      this._fileType = _MMDFileType.x
    }else if(str.startsWith('PMX ')){
      this._fileType = _MMDFileType.pmx
    }else if(str.startsWith('Vocaloid Pose Data File')){
      this._fileType = _MMDFileType.vpd
    }else if(str.startsWith('Polygon Movie maker 0001') || str.startsWith('Polygon Movie maker 0002')){
      this._fileType = _MMDFileType.pmm
    }else if(str.startsWith('Vocaloid Motion Data 0002')){
      this._fileType = _MMDFileType.vmd
    }

    return this._fileType
  }

  static get FileType() {
    return _MMDFileType
  }
} 
