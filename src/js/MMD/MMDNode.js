'use strict'

import {
  CAAnimationGroup,
  CAKeyframeAnimation,
  NSObject,
  SCNNode,
  SCNPhysicsBody,
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
const _faceWeightsPattern = /faceWeights\[(\d+)\]/

class DummyNode extends NSObject {
  valueForUndefinedKey(key) {
    return this
  }
}
const _dummyNode = new DummyNode()

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
    //console.log('MMDNode.clone() ' + this.name)
    const newNode = super.clone()
    // TODO: copy values of SCNNode
    this.copyValuesRecursive(this, newNode)

    return newNode
  }

  /*
  copy() {
    return this.clone()
  }
  */

  /**
   *
   * @access public
   * @param {SCNNode} node -
   * @returns {void}
   */
  copySCNNodeValues(node) {
    this.name = node.name
    this.light = node.light
    this.camera = node.camera
    this.geometry = node.geometry
    this.morpher = node.morpher
    this.skinner = node.skinner
    this.categoryBitMask = node.categoryBitMask
    this.isPaused = node.isPaused
    this.transform = node.transform
    this.constraints = node.constraints ? node.constraints.slice() : null
    this.isHidden = node.isHidden
    this.opacity = node.opacity
    this.renderingOrder = node.renderingOrder
    this.castsShadow = node.castsShadow
    this.movabilityHint = node.movabilityHint
    this.filters = node.filters ? node.filters.slice() : null
    this.rendererDelegate = node.rendererDelegate

    if(node.physicsBody){
      const body = node.physicsBody
      let newBody = null
      switch(body.type){
        case SCNPhysicsBody.Type.static:
          newBody = SCNPhysicsBody.static()
          break
        case SCNPhysicsBody.Type.dynamic:
          newBody = SCNPhysicsBody.dynamic()
          break
        case SCNPhysicsBody.Type.kinematic:
          newBody = SCNPhysicsBody.kinematic()
          break
        default:
          throw new Error(`unknown physics body type: ${body.type}`)
      }
      newBody.physicsShape = body.physicsShape
      newBody.velocityFactor = body.velocityFactor
      newBody.angularVelocityFactor = body.angularVelocityFactor
      newBody.isAffectedByGravity = body.isAffectedByGravity
      newBody.mass = body.mass
      newBody.charge = body.charge
      newBody.friction = body.friction
      newBody.rollingFriction = body.rollingFriction
      newBody.restitution = body.restitution
      newBody.damping = body.damping
      newBody.angularDamping = body.angularDamping
      newBody.momentOfInertia = body.momentOfInertia
      newBody.usesDefaultMomentOfInertia = body.usesDefaultMomentOfInertia
      newBody.cateogryBitMask = body.categoryBitMask
      newBody.contactTestBitMask = body.contactTestBitMask
      newBody.collisionBitMask = body.collisionBitMask
      newBody.velocity = body.velocity
      newBody.angularVelocity = body.angularVelocity
      newBody.allowsResting = body.allowsResting

      this.physicsBody = newBody
    }

    this.physicsField = node.physicsField
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
    //console.log('MMDNode.valueForUndefinedKey: ' + key)
    if(key.startsWith('/')){
      const searchKey = key.substring(1)
      const node = this.childNodeWithNameRecursively(searchKey, true)
      if(node){
        return node
      }

      //console.warn(`valueForUndefinedKey ${key} not found.`)
      return _dummyNode
    }

    const result = key.match(_faceWeightsPattern)
    if(result){
      const index = result[1]
      const value = this.faceWeights[index]
      return value
    }

    if(key === 'kPivotKey'){
      return null
    }

    return super.valueForUndefinedKey(key)
  }

  /*
  setValueForUndefinedKey(value, key) {
    console.log('MMDNode.setValueForUndefinedKey: ' + key)
  }

  setValueForKeyPath(value, keyPath) {
    console.log('MMDNode.setValueForKeyPath: ' + keyPath)
    super.setValueForKeyPath(value, keyPath)
  }
  */

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
      const convertedAnimation = this._convertAnimation(animation)
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
   * @access private
   * @param {CAAnimationGroup} animation -
   * @returns {CAAnimationGroup} -
   */
  _convertAnimation(animation) {
    console.log('_convertAnimation start')
    const geometryNode = this.childNodeWithNameRecursively('Geometry', true)
    const newGroup = animation.copy()
    newGroup.animations = []

    const animations = animation.animations
    console.log('animations')
    if(animations){
      console.log('if(animations): true')
      animations.forEach((anim) => {
        console.log('anim: ' + anim.keyPath)
        let hasEffector = false
        const newAnim = anim.copy()

        if(newAnim instanceof CAKeyframeAnimation){
          console.log('newAnim: ' + newAnim.keyPath)
          const boneNameKey = newAnim.keyPath.split('.')[0]
          const boneName = boneNameKey.substring(1)
          const bone = this.childNodeWithNameRecursively(boneName, true)
          console.log('boneName: ' + boneName + ', bone: ' + bone)

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

                console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
              }
            }else if(newAnim.keyPath.endsWith('.translation.y')){
              for(let i=0; i<newAnim.values.length; i++){
                const origValue = newAnim.values[i]
                const newValue = origValue + bone.position.y
                newAnim.values[i] = newValue

                console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
              }
            }else if(newAnim.keyPath.endsWith('.translation.z')){
              for(let i=0; i<newAnim.values.length; i++){
                const origValue = newAnim.values[i]
                const newValue = origValue + bone.position.z
                newAnim.values[i] = newValue

                console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
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
    console.log('_convertAnimation end')
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
      const convertedAnimation = this._convertAnimation(animation)
      super.addAnimationForKey(convertedAnimation, key)
    }else{
      animation.delegate = this
      super.addAnimationForKey(animation, key)
    }
  }

  /**
   *
   * @access public
   * @returns {void}
   */
  updateIK() {
    if(this.ikArray !== null){
      const zeroThreshold = 0.0000001
      this.ikArray.forEach((ik) => {
        const ikBone = ik.ikBone
        const targetBone = ik.targetBone

        for(let i=0; i<ik.iteration; i++){
          for(let index=0; index<ik.boneArray.length; index++){
            const bone = ik.boneArray[index]

            const bonePosition = this._getWorldPosition(bone.presentation)
            const targetPosition = this._getWorldPosition(targetBone.presentation)
            const ikPosition = this._getWorldPosition(ikBone.presentation)
            //console.log(`IK it ${i} bone ${bone.name} target ${targetPosition.float32Array()} ik ${ikPosition.float32Array()}`)

            let v1 = bonePosition.sub(targetPosition)
            let v2 = bonePosition.sub(ikPosition)

            v1 = v1.normalize()
            v2 = v2.normalize()

            const diff = v1.sub(v2)
            const x2 = diff.x * diff.x
            const y2 = diff.y * diff.y
            const z2 = diff.z * diff.z
            if(x2 + y2 + z2 < zeroThreshold){
              break
            }

            let v = v1.cross(v2)
            v = this._inverseCross(v, bone.parent.presentation.worldTransform)
            v = v.normalize()

            if(bone.isKnee){
              if(v.x > 0){
                v.x = 1.0
              }else{
                v.x = -1.0
              }
              v.y = 0
              v.z = 0
            }

            let innerProduct = v1.dot(v2)
            if(innerProduct > 1){
              innerProduct = 1
            }else if(innerProduct < -1){
              innerProduct = -1
            }

            let ikRot = 0.5 * Math.acos(innerProduct)
            const maxRot = ik.weight * (index + 1) * 2
            if(ikRot > maxRot){
              ikRot = maxRot
            }

            const ikSin = Math.sin(ikRot)
            const ikCos = Math.cos(ikRot)
            let quat = new SCNVector4()

            // create quaternion
            quat.x = v.x * ikSin
            quat.y = v.y * ikSin
            quat.z = v.z * ikSin
            quat.w = ikCos

            const orgQuat = this._rotationToQuat(bone.presentation.rotation)
            //console.log(`${this.name} rot ${bone.presentation.rotation.float32Array()}`)
            //console.log(`${this.name} orgQuat ${orgQuat.float32Array()}`)
            quat = quat.cross(orgQuat)

            // FIXME: don't use presentation node
            //bone.presentation.rotation = this._quatToRotation(quat)
            bone.rotation = this._quatToRotation(quat)

            if(bone.isKnee){
              // FIXME: don't use presentation node
              //if(bone.presentation.eulerAngles.x < 0){
              if(bone.eulerAngles.x < 0){
                quat.x = -quat.x
                // FIXME: don't use presentation node
                //bone.presentation.rotation = rot
                bone.rotation = this._quatToRotation(quat)
                //console.log(`${bone.name} quatToRotation ${bone.rotation.float32Array()}`)
              }
            }
            //console.log(`after ${this.name} rot ${bone.presentation.rotation.float32Array()}`)
          } // boneArray
        } // iteration
      }) // ikArray
    }
    this.updateEffector()
  }

  /**
   *
   * @access public
   * @returns {void}
   */
  updateEffector() {
    if(this.rotateEffector !== null){
      const rot = this.rotateEffector.presentation.rotation
      if(this.rotateEffectRate === 1.0){
        // FIXME: don't use presentation node
        //this.presentation.rotation = rot
        this.rotation = rot
      }else{
        const quat = this._rotationToQuat(rot)
        //console.log(`${this.name} quat ${quat.float32Array()}`)
        const orgQuat = this._rotationToQuat(this.presentation.rotation)
        //console.log(`${this.name} orgQuat ${orgQuat.float32Array()}`)
        //const newQuat = this.slerp(orgQuat, quat, this.rotateEffectRate)
        const newQuat = orgQuat.slerp(quat, this.rotateEffectRate)
        const newRot = this._quatToRotation(newQuat)
        // FIXME: don't use presentation
        //this.presentation.rotation = newRot
        this.rotation = newRot
        //console.log(`${this.name} newQuat.quatToRotation ${this.rotation.float32Array()}`)
      }
    }
    if(this.translateEffector !== null){
      const pos = this.translateEffector.presentation.position
      if(this.translateEffectRate === 1.0){
        // FIXME: don't use presentation node
        //this.presentation.position = pos
        this.position = pos
      }else{
        // FIXME: don't use presentation node
        //this.presentation.position = pos.mul(this.translateEffectRate)
        this.position = pos.mul(this.translateEffectRate)
      }
    }
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

  /**
   * @access public
   * @param {CAAnimation} anim -
   * @param {boolean} finished -
   * @returns {void}
   */
  animationDidStop(anim, finished) {
    if(finished){
      const block = anim.valueForKey(_MMDAnimationCompletionBlockKey)
      if(block){
        block()
      }
    }
  }

  /**
   * @access public
   * @param {function} block -
   * @param {string} key -
   * @returns {void}
   */
  setCompletionHandler(block, key) {
    const anim = this.preparedAnimation.get(key)
    if(anim){
      anim.setValueForKey(block, _MMDAnimationCompletionBlockKey)
    }
  }

  static get Type() {
    return _MMDNodeType
  }

  /**
   *
   * @access private
   * @param {SCNNode} node -
   * @returns {SCNVector3} -
   */
  _getWorldPosition(node = null) {
    let m = null
    if(node === null){
      m = this.worldTransform
    }else{
      m = node.worldTransform
    }
    return new SCNVector3(m.m41, m.m42, m.m43)
  }

  /**
   * @access private
   * @param {SCNVector3} v1 -
   * @param {SCNMatrix4} mat -
   * @param {boolean} [includeTranslation = false] -
   * @returns {SCNVector3} -
   */
  _inverseCross(v1, mat, includeTranslation = false) {
    const v = new SCNVector3()

    v.x = v1.x * mat.m11 + v1.y * mat.m12 + v1.z * mat.m13
    v.y = v1.x * mat.m21 + v1.y * mat.m22 + v1.z * mat.m23
    v.z = v1.x * mat.m31 + v1.y * mat.m32 + v1.z * mat.m33

    if(includeTranslation){
      v.x += mat.m14
      v.y += mat.m24
      v.z += mat.m34
    }

    return v
  }

  _rotationToQuat(rot) {
    const quat = new SCNVector4()
    if(rot.x === 0 && rot.y === 0 && rot.z === 0){
      quat.x = 0
      quat.y = 0
      quat.z = 0
      quat.w = 1.0
    }else{
      const r = 1.0 / Math.sqrt(rot.x * rot.x + rot.y * rot.y + rot.z * rot.z)
      const cosW = Math.cos(rot.w)
      const sinW = Math.sin(rot.w) * r
      quat.x = rot.x * sinW
      quat.y = rot.y * sinW
      quat.z = rot.z * sinW
      quat.w = cosW
    }
    return quat
  }

  _quatToRotation(quat) {
    const rot = new SCNVector4()

    if(quat.x === 0 && quat.y === 0 && quat.z === 0){
      rot.x = 0
      rot.y = 0
      rot.z = 0
      rot.w = 0
    }else{
      rot.x = quat.x
      rot.y = quat.y
      rot.z = quat.z

      let qw = quat.w
      if(quat.w > 1){
        qw = 1
      }else if(quat.w < -1){
        qw = -1
      }
      const w = Math.acos(qw)

      if(isNaN(w)){
        rot.w = 0
      }else{
        rot.w = w
      }
    }

    return rot
  }
}

