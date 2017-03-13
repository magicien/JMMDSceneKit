'use strict'

import {
  CAAnimationGroup,
  CAKeyframeAnimation,
  SCNNode,
  SCNVector3,
  SCNVector4
} from 'jscenekit'

const _MMDNodeType = {
  rotate: Symbol(),
  rotateTranslate: Symbol(),
  ik: Symbol(),
  unknown: Symbol(),
  ikChild: Symbol(),
  rotateChild: Symbol(),
  ikTarget: Symbol(),
  hidden: Symbol(),
  twist: Symbol(),
  roll: Symbol()
}

const _MMDAnimationCompletionBlockKey = 'MMDAnimationCompletionBlockKey'

/**
 *
 * @access public
 * @extends {SCNNode}
 * @implements {CAAnimationDelegate}
 */
export default class MMDNode extends SCNNode {
  /**
   *
   * @access public
   * @param {MMDNode} mmdNode -
   * @constructor
   */
  constructor(mmdNode = null) {
    super()

    /**
     *
     * @type {SCNPhysicsBehaviors[]}
     */
    this.physicsBehaviors = []

    /**
     *
     * @type {Symbol}
     */
    this.type = MMDNode.Type.unknown

    /**
     *
     * @type {boolean}
     */
    this.isKnee = false

    /**
     *
     * @type {MMDIKConstraint}
     */
    this.ikConstraint = null

    /**
     *
     * @type {MMDIKConstraint[]}
     */
    this.ikArray = null

    /**
     *
     * @type {SCNPhysicsBehavior[]}
     */
    this.joints = null

    /**
     *
     * @type {number}
     */
    this.vertexCount = 0

    /**
     *
     * @type {number[]}
     */
    this.vertexArray = null

    /**
     *
     * @type {number[]}
     */
    this.normalArray = null

    /**
     *
     * @type {number[]}
     */
    this.texcoordArray = null

    /**
     *
     * @type {number[]}
     */
    this.boneIndicesArray = null

    /**
     *
     * @type {number[]}
     */
    this.boneWeightsArray = null

    /**
     *
     * @type {number}
     */
    this.indexCount = 0

    /**
     *
     * @type {number[]}
     */
    this.indexArray = null

    /**
     *
     * @type {number}
     */
    this.materialCount = 0

    /**
     *
     * @type {SCNMaterial[]}
     */
    this.materialArray = null

    /**
     *
     * @type {number[]}
     */
    this.materialIndexCountArray = null

    /**
     *
     * @type {?SCNGeometryElement[]}
     */
    this.elementArray = null

    /**
     *
     * @type {MMDNode[]}
     */
    this.boneArray = null

    /**
     *
     * @type {SCNMatrix4[]}
     */
    this.boneInverseMatrixArray = null

    /**
     *
     * @type {MMDNode}
     */
    this.rootBone = null

    /**
     *
     * @type {?MMDNode}
     */
    this.rotateEffector = null

    /**
     *
     * @type {number}
     */
    this.rotateEffectRate = 0

    /**
     *
     * @type {?MMDNode}
     */
    this.translateEffector = null

    /**
     *
     * @type {number}
     */
    this.translateEffectRate = 0

    /**
     *
     * @type {?number[]}
     */
    this.faceIndexArray = null

    /**
     *
     * @type {?number[][]}
     */
    this.faceDataArray = null

    /**
     *
     * @type {number[]}
     */
    this.faceWeights = null

    /**
     *
     * @type {SCNMorpher}
     */
    this.geometryMorpher = null

    /**
     *
     * @type {?Map}
     */
    this.preparedAnimation = null

    if(mmdNode !== null){
      this.copySCNNodeValues(mmdNode)
      this.copyValues(mmdNode)
    }
  }

  /**
   *
   * @access public
   * @returns {MMDNode} -
   */
  clone() {
    const newNode = new MMDNode()
    // TODO: copy values of SCNNode
    this.copyValuesRecursive(this, newNode)

    return newNode
  }

  /**
   *
   * @access public
   * @param {SCNNode} node -
   * @returns {void}
   */
  copySCNNodeValues(node) {
  }

  /**
   *
   * @access public
   * @param {MMDNode} node -
   * @returns {void}
   */
  copyValues(node) {
    this.physicsBehaviors = node.physicsBehaviors // [SCNPhysicsBehavior]
    this.type = node.type
    this.isKnee = node.isKnee
    this.ikConstraint = node.ikConstraint // MMDIKConstraint
    this.ikArray = node.ikArray // [MMDIKConstraint]
    this.joints = node.joints // [SCNPhysicsBehavior]
    this.vertexCount = node.vertexCount
    this.vertexArray = node.vertexArray
    this.normalArray = node.normalArray
    this.texcoordArray = node.texcoordArray
    this.boneIndicesArray = node.boneIndicesArray
    this.boneWeightsArray = node.boneWeightsArray
    this.indexCount = node.indexCount
    this.indexArray = node.indexArray
    this.materialCount = node.materialCount
    this.materialArray = node.materialArray // [SCNMaterial]
    this.materialIndexCountArray = node.materialIndexCountArray
    this.elementArray = node.elementArray // [SCNGeometryElement]
    this.boneArray = node.boneArray // [MMDNode]
    this.boneInverseMatrixArray = node.boneInverseMatrixArray
    this.rootBone = node.rootBone // MMDNode
    
    this.rotateEffector = node.rotateEffector // MMDNode
    this.rotateEffectRate = node.rotateEffectRate
    this.translateEffector = node.translateEffector // MMDNode
    this.translateEffectRate = node.translateEffectRate
    
    this.faceIndexArray = node.faceIndexArray
    this.faceDataArray = node.faceDataArray
    this.faceWeights = node.faceWeights
    this.geometryMorpher = node.geometryMorpher // SCNMorpher
    
    this.preparedAnimation = node.preparedAnimation
  }

  /**
   *
   * @access public
   * @param {SCNNode} src -
   * @param {SCNNode} dst -
   * @returns {void}
   */
  copyValuesRecursive(src, dst) {
    if(src instanceof MMDNode){
      if(dst instanceof MMDNode){
        dst.copyValues(src)
      }
    }

    for(let i=0; i<src.childNodes.length; i++){
      this.copyValuesRecursive(src.childNodes[i], dst.childNodes[i])
    }
  }

  valueForUndefinedKey(key) {
  }

  setValueForUndefinedKey(value, key) {
  }

  /**
   *
   * @access public
   * @param {CAAnimation} animation -
   * @param {string} key -
   * @returns {void}
   */
  prepareAnimationForKey(animation, key) {
    if(this.preparedAnimation === null){
      this.preparedAnimation = new Map()
    }
    if(animation instanceof CAAnimationGroup){
      const convertedAnimation = this.convertAnimation(animation)
      convertedAnimation.delegate = this
      this.preparedAnimation.set(key, convertedAnimation)
    }else{
      animation.delegate = this
      this.preparedAnimation.set(key, animation)
    }
  }

  /**
   *
   * @access public
   * @param {string} key -
   * @returns {void}
   */
  playPreparedAnimationForKey(key) {
    if(this.preparedAnimation === null){
      return
    }
    const anim = this.preparedAnimation.get(key)
    if(anim){
      super.addAnimation(anim, key)
    }
  }

  /**
   *
   * @access public
   * @param {CAAnimationGroup} animation -
   * @returns {CAAnimationGroup} -
   */
  convertAnimation(animation) {
    const geometryNode = this.childNodeWithNameRecursively('Geometry', true)
    const newGroup = animation.copy()
    newGroup.animations = []

    const animations = animation.animations
    if(animations){
      animations.forEach((anim) => {
        let hasEffector = false
        const newAnim = anim.copy()

        if(newAnim instanceof CAKeyframeAnimation){
          const boneNameKey = newAnim.keyPath.split('.')[0]
          const boneName = boneNameKey.substring(1)
          const bone = this.childNodeWithNameRecursively(boneName, true)

          if(boneNameKey === 'morpher'){
            if(newAnim.keyPath.startsWith('morpher.weights.')){
              const faceName = newAnim.keyPath.substring(16)
              let faceIndex = -1

              // search face name from geometry node
              for(let i=0; i<geometryNode.morpher.targets.length; i++){
                if(geometryNode.morpher.targets[i].name === faceName){
                  faceIndex = i
                  break
                }
              }

              if(faceIndex >= 0){
                newAnim.keyPath = `/Geometry.morpher.weights[${faceIndex}]`
              }else{
                newAnim.keyPath = '//'
              }
            }
          }else if(bone !== null){
            if(newAnim.keyPath.endsWith('.translation.x')){
              for(let i=0; i<newAnim.values.length; i++){
                const origValue = newAnim.values[i]
                const newValue = origValue + bone.position.x
                newAnim.values[i] = newValue
              }
            }else if(newAnim.keyPath.endsWith('.translation.y')){
              for(let i=0; i<newAnim.values.length; i++){
                const origValue = newAnim.values[i]
                const newValue = origValue + bone.position.y
                newAnim.values[i] = newValue
              }
            }else if(newAnim.keyPath.endsWith('.translation.z')){
              for(let i=0; i<newAnim.values.length; i++){
                const origValue = newAnim.values[i]
                const newValue = origValue + bone.position.z
                newAnim.values[i] = newValue
              }
            }

            if(newAnim.values.length === 1){
              // remove the meanless animation
              const value = newAnim.values[0]
              if(value instanceof SCNVector3){
                if(value.x === 0 && value.y === 0 && value.z === 0){
                  hasEffector = true
                }
              }else if(value instanceof SCNVector4){
                if(value.x === 0 && value.y === 0 && value.z === 0){
                  hasEffector = true
                }
              }
            } // newAnim.values.length === 1
          } // bone !== null
        } // newAnim instanceof CAKeyframeAnimation

        if(!hasEffector){
          newGroup.animations.push(newAnim)
        }
      }) // animations.forEach
    } // animations
    return newGroup
  }

  /**
   *
   * @access public
   * @param {CAAnimation} animation -
   * @param {string} key -
   * @returns {void}
   */
  addAnimationForKey(animation, key) {
    if(animation instanceof CAAnimationGroup){
      const convertedAnimation = this.convertAnimation(animation)
      super.addAnimation(convertedAnimation, key)
    }else{
      animation.delegate = this
      super.addAnimation(animation, key)
    }
  }

  /**
   *
   * @access public
   * @returns {void}
   */
  updateIK() {
    // TODO: implement
  }

  /**
   *
   * @access public
   * @returns {void}
   */
  updateEffector() {
    // TODO: implement
  }

  /**
   * 
   * @access public
   * @param {SCNScene} scene -
   * @returns {void}
   */
  addPhysicsBehavior(scene) {
    if(this.joints === null){
      return
    }

    this.joints.forEach((joint) => {
      scene.physicsWorld.addBehavior(joint)
    })
  }

  /**
   *
   * @access public
   * @param {SCNScene} scene -
   * @returns {void}
   */
  removePhysicsBehavior(scene) {
    if(this.joints === null){
      return
    }

    this.joints.forEach((joint) => {
      scene.physicsWorld.removeBehavior(joint)
    })
  }

  /**
   *
   * @access public
   * @returns {SCNNode} -
   */
  getRootNode() {
    let node = this
    let parentNode = node.parent
    while(parentNode !== null){
      node = parentNode
      parentNode = node.parent
    }
    return node
  }

  /**
   *
   * @access public
   * @param {string} key -
   * @param {string} boneName -
   * @returns {object} -
   */
  getFirstFramePoseForKeyBoneName(key, boneName) {
    // TODO: implement
  }

  /**
   *
   * @access public
   * @param {string} key -
   * @param {string} boneName -
   * @returns {object} -
   */
  getLastFramePoseForKeyBoneName(key, boneName) {
    // TODO: implement
  }

  /////////////////////////
  // CAAnimationDelegate //
  /////////////////////////

  animationDidStop(anim, finished) {
    if(finished){
      const block = anim.valueForKey(_MMDAnimationCompletionBlockKey)
      if(block){
        block()
      }
    }
  }

  setCompletionHandler(block, key) {
    const anim = this.preparedAnimation.get(key)
    if(anim){
      anim.setValueForKey(block, _MMDAnimationCompletionBlockKey)
    }
  }

  static get Type() {
    return _MMDNodeType
  }
}

