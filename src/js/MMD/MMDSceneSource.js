'use strict'

import {
  SCNNode,
  SCNScene,
  SCNSceneSource
} from 'jscenekit'
import MMDNode from './MMDNode'
import MMDPMDReader from './MMDPMDReader'

const _MMDFileType = {
  pmm: Symbol(),
  pmd: Symbol(),
  vmd: Symbol(),
  vpd: Symbol(),
  x: Symbol(),
  vac: Symbol(),
  pmx: Symbol(),
  obj: Symbol(),
  dae: Symbol(),
  abc: Symbol(),
  scn: Symbol(),
  unknown: Symbol()
}

// for node
import fs from 'fs'

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
   * @param {string|Buffer|ArrayBuffer} data -
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary containing options that affect scene loading. See Scene Loading Options for available keys and values. Pass nil to use default options.
   * @param {MMDNode[]} models -
   * @param {CAAnimation[]} motions -
   * @returns {void}
   * @desc If you have the contents of a scene file but not the file itself (for example, if your app downloads scene files from the network), use the init(data:options:) method instead.
   * @see https://developer.apple.com/reference/scenekit/scnscenesource/1522629-init
   */
  constructor(data, options, models, motions) {
    super()

    this._fileType = _MMDFileType.unknown
    this._directoryPath = null
    this._workingScene = null
    this._workingNode = null
    this._workingAnimationGroup = null

    if(data === undefined){
      return
    }
    this._loadData(data, options)
  }

  static sceneSourceWithDataOptions(data, options, models = null, motions = null) {
    return new MMDSceneSource(data, options, models, motions)
  }

  static sceneSourceWithURLOpions(url, options, models = null, motions = null) {
    
  }

  static sceneSourceWithPathOptions(path, options, models = null, motions = null) {
    const paths = path.split('/')
    paths.pop()
    const directoryPath = paths.join('/') + '/'

    // for node
    const promise = new Promise((resolve, reject) => {
      fs.readFile(path, null, (err, data) => {
        if(err){
          reject(err)
          return
        }

        const source = new MMDSceneSource(data, options, models, motions)
        source._directoryPath = directoryPath
        resolve(source)
      })
    })

    // for browser
    /*
    const promise = BinaryRequest.get(path)
      .then((data) => {
        const source = new MMDSceneSource(data, options, models, motions)
        Promise.reject(error)
        Promise.resolve(source)
      })
    */

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
    this._workingScene = new SCNScene()
    this._checkFileTypeFromData(data)

    if(this._fileType === _MMDFileType.pmd){
      const pmdNode = MMDPMDReader.getNode(data, this._directoryPath)
      if(pmdNode){
        this.workingNode = pmdNode
      }
    }
    /*
    if(this._fileType === _MMDFileType.pmd){
      const pmdNode = MMDPMDReader.getNode(data, this._directoryPath)
      if(pmdNode){
        this.workingNode = pmdNode
      }
    }else if(this._fileType === _MMDFileType.vmd){
      const vmdAnimation = MMDVMDReader.getAnimation(data)
      if(vmdAnimation){
        this.workingAnimationGroup = vmdAnimation
      }
    }else if(this._fileType === _MMDFileType.vpd){
      const vpdAnimation = MMDVPDReader.getAnimation(data)
      if(vpdAnimation){
        this.workingAnimationGroup = vpdAnimation
      }
    }else if(this._fileType === _MMDFileType.pmm){
      const pmmScene = MMDPMMReader.getScene(data, this._directoryPath, models, motions)
      if(pmmScene){
        pmmScene.rootNode.childNodes.forEach((node) => {
          this.workingScene.rootNode.addChildNode(node)
        })
      }
    }else if(this._fileType === _MMDFileType.x){
      const xNode = MMDXReader.getNode(data, this._directoryPath)
      if(xNode){
        this.workingNode = xNode
      }
    }else if(this._fileType === _MMDFileType.vac){
      const vacNode = MMDVACReader.getNode(data, this._directoryPath)
      if(vacNode){
        this.workingNode = vacNode
      }
    }else if(this._fileType === _MMDFileType.pmx){
      const pmxNode = MMDPMXReader.getNode(data, this._directoryPath)
      if(pmxNode){
        this.workingNode = pmxNode
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
        this.workingNode = mmdNode
      }
    }else if(this._fileType === _MMDFileType.abc){
      // ?
    }else{
      // unknown file
    }
    */
  }

  static sceneSource() {
  }

  modelNodes() {
    const nodeArray = []
    if(this._fileType === _MMDFileType.pmd
      || this._fileType === _MMDFileType.pmx
      || this._fileType === _MMDFileType.x
      || this._fileType === _MMDFileType.vac){
      nodeArray.push(this.workingNode)
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
    return this.workingScene
  }

  getModel() {
    if(this._fileType === _MMDFileType.pmd
      || this._fileType === _MMDFileType.pmx
      || this._fileType === _MMDFileType.x
      || this._fileType === _MMDFileType.vac){
      return this.workingNode
    }else if(this._fileType === _MMDFileType.pmm){
      return this._workingScene.rootNode.childNodes.find((node) => node instanceof MMDNode)
    }
    throw new Error('getModel not implemented for the file type')
  }

  /**
   *
   * @access public
   * @returns {Map<string, CAAnimation>} -
   */
  animations() {
    const animationHash = new Map()
    animationHash.set('animation', this.workingAnimationGroup) // FIXME
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