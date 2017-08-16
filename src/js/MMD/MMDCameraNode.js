'use strict'

import {
  SCNCamera,
  SCNTechnique,
  SCNVector4
} from 'jscenekit'
import MMDNode from './MMDNode'

export const MMD_CAMERA_ROOT_NODE_NAME = 'MMDCameraRoot'
export const MMD_CAMERA_NODE_NAME = 'MMDCamera'
export const MMD_CAMERA_ROTX_NODE_NAME = 'MMDCameraRotX'
export const MMD_CAMERA_ROTY_NODE_NAME = 'MMDCameraRotY'
export const MMD_CAMERA_ROTZ_NODE_NAME = 'MMDCameraRotZ'

/**
 *
 * @access public
 * @extends {MMDNode}
 */
export default class MMDCameraNode extends MMDNode {
  /**
   *
   * @access public
   * @param {string} [name = MMD_CAMERA_ROOT_NODE_NAME] -
   * @constructor
   */
  constructor(name = MMD_CAMERA_ROOT_NODE_NAME) {
    super()

    this.name = name

    /** @type {MMDNode} */
    this.cameraNode = new MMDNode()

    const camera = new SCNCamera()
    this.cameraNode.name = MMD_CAMERA_NODE_NAME
    this.cameraNode.camera = camera

    // TODO: set default values of MikuMikuDance: ex) fov
    camera.yFov = 30.0
    camera.automaticallyAdjustsZRange = true

    /** @type {MMDNode} */
    this.rotYNode = new MMDNode()

    this.rotYNode.name = MMD_CAMERA_ROTY_NODE_NAME
    this.addChildNode(this.rotYNode)

    /** @type {MMDNode} */
    this.rotXNode = new MMDNode()

    this.rotXNode.name = MMD_CAMERA_ROTX_NODE_NAME
    this.rotYNode.addChildNode(this.rotXNode)

    /** @type {MMDNode} */
    this.rotZNode = new MMDNode()

    this.rotZNode.name = MMD_CAMERA_ROTZ_NODE_NAME
    this.rotXNode.addChildNode(this.rotZNode)

    this.rotZNode.addChildNode(this.cameraNode)

    const technique = new SCNTechnique({
      sequence: ['pass_scene', 'pass_edge'],
      passes: {
        pass_scene: {
          colorStates: {
            clear: true,
            clearColor: 'sceneBackground'
          },
          draw: 'DRAW_SCENE',
          blendStates: {
            enable: true
          },
          inputs: {
            depth: 'DEPTH',
            color: 'COLOR'
          },
          outputs: {
            color: 'COLOR',
            depth: 'DEPTH'
          }
        },
        pass_edge: {
          colorStates: {
            clear: false
          },
          blendStates: {
            enable: true
          },
          depthStates: {
            clear: false,
            enableWrite: true,
            func: 'less'
          },
          cullMode: 'front',
          draw: 'DRAW_SCENE',
          program: 'doesntexist',
          metalVertexShader: 'pass_edge_vertex',
          metalFragmentShader: 'pass_edge_fragment',
          inputs: {
          },
          outputs: {
            color: 'COLOR',
            depth: 'DEPTH'
          }
        }
      },
      targets: {
        symbols: {
          screenSize: {
            type: 'float'
          },
          vertexSymbol: {
            semantic: 'vertex'
          },
          normalSymbol: {
            semantic: 'normal'
          }
        }
      }
    })
    camera.technique = technique
  }

  get rotX() {
    //return this.rotXNode.eulerAngles.x
    let value = this.rotXNode.rotation.w
    if(this.rotXNode.rotation.x < 0){
      return -value
    }
    return value
  }
  set rotX(newValue) {
    //const euler = this.rotXNode.eulerAngles
    //euler.x = newValue
    //this.rotXNode.eulerAngles = euler
    this.rotXNode.rotation = new SCNVector4(1, 0, 0, newValue)
  }

  get rotY() {
    //return this.rotYNode.eulerAngles.y
    let value = this.rotYNode.rotation.w
    if(this.rotYNode.rotation.y < 0){
      return -value
    }
    return value
  }
  set rotY(newValue) {
    //const euler = this.rotYNode.eulerAngles
    //euler.y = newValue
    //this.rotYNode.eulerAngles = euler
    this.rotYNode.rotation = new SCNVector4(0, 1, 0, newValue)
  }

  get rotZ() {
    //return this.rotZNode.eulerAngles.z
    let value = this.rotZNode.rotation.w
    if(this.rotZNode.rotation.z < 0){
      return -value
    }
    return value
  }
  set rotZ(newValue) {
    //const euler = this.rotZNode.eulerAngles
    //euler.z = newValue
    //this.rotZNode.eulerAngles = euler
    this.rotZNode.rotation = new SCNVector4(0, 0, 1, newValue)
  }

  get distance() {
    return this.cameraNode.position.z
  }
  set distance(newValue) {
    this.cameraNode.position.z = newValue
  }

  get angle() {
    return this.cameraNode.camera.yFov
  }
  set angle(newValue) {
    this.cameraNode.camera.yFov = newValue
  }

  /**
   * @access public
   * @returns {SCNNode} -
   */
  getCameraNode() {
    return this.cameraNode
  }

  /**
   * @access public
   * @returns {SCNCamera} -
   */
  getCamera() {
    return this.cameraNode.camera
  }
}

