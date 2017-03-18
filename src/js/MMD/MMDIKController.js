'use strict'

import MMDNode from './MMDNode'
import {
} from 'jscenekit'


let _sharedController = null

/**
 *
 * @access public
 * @implements {SCNSceneRendererDelegate}
 */
export default class MMDIKController {
  static get sharedController() {
    if(_sharedController === null){
      _sharedController = new MMDIKController()
    }
    return _sharedController
  }

  /**
   *
   * @access private
   * @constructor
   */
  constructor() {
  }

  /**
   * update IK constraint for the given renderer
   * @access public
   * @param {SCNSceneRenderer} renderer -
   * @returns {void}
   */
  static updateIK(renderer) {
    if(renderer.scene){
      MMDIKController.applyIKRecursive(renderer.scene.rootNode)
    }
  }

  /**
   * apply IK constraint recursively
   * @access public
   * @param {SCNNode} node -
   * @returns {void}
   */
  static applyIKRecursive(node) {
    if(node instanceof MMDNode){
      node.updateIK()
    }

    node.childNodes.forEach((childNode) => {
      MMDIKController.applyIKRecursive(childNode)
    })
  }

  /**
   * apply IK constraint after animations are applied
   * @access public
   * @param {SCNSceneRenderer} renderer -
   * @param {TimeInterval} time -
   */
  rendererDidApplyAnimationsAtTime(renderer, time) {
    MMDIKController.updateIK(renderer)
  }
}

