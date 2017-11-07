module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("jscenekit");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscenekit = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MMDNodeType = {
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
};

var _MMDAnimationCompletionBlockKey = 'MMDAnimationCompletionBlockKey';
var _faceWeightsPattern = /faceWeights\[(\d+)\]/;

var DummyNode = function (_NSObject) {
  _inherits(DummyNode, _NSObject);

  function DummyNode() {
    _classCallCheck(this, DummyNode);

    return _possibleConstructorReturn(this, (DummyNode.__proto__ || Object.getPrototypeOf(DummyNode)).apply(this, arguments));
  }

  _createClass(DummyNode, [{
    key: 'valueForUndefinedKey',
    value: function valueForUndefinedKey(key) {
      return this;
    }
  }]);

  return DummyNode;
}(_jscenekit.NSObject);

var _dummyNode = new DummyNode();

/**
 *
 * @access public
 * @extends {SCNNode}
 * @implements {CAAnimationDelegate}
 */

var MMDNode = function (_SCNNode) {
  _inherits(MMDNode, _SCNNode);

  /**
   *
   * @access public
   * @param {MMDNode} mmdNode -
   * @constructor
   */
  function MMDNode() {
    var mmdNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, MMDNode);

    /**
     *
     * @type {SCNPhysicsBehaviors[]}
     */
    var _this2 = _possibleConstructorReturn(this, (MMDNode.__proto__ || Object.getPrototypeOf(MMDNode)).call(this));

    _this2.physicsBehaviors = [];

    /**
     *
     * @type {Symbol}
     */
    _this2.type = MMDNode.Type.unknown;

    /**
     *
     * @type {boolean}
     */
    _this2.isKnee = false;

    /**
     *
     * @type {MMDIKConstraint}
     */
    _this2.ikConstraint = null;

    /**
     *
     * @type {MMDIKConstraint[]}
     */
    _this2.ikArray = null;

    /**
     *
     * @type {SCNPhysicsBehavior[]}
     */
    _this2.joints = null;

    /**
     *
     * @type {number}
     */
    _this2.vertexCount = 0;

    /**
     *
     * @type {number[]}
     */
    _this2.vertexArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.normalArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.texcoordArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.boneIndicesArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.boneWeightsArray = null;

    /**
     *
     * @type {number}
     */
    _this2.indexCount = 0;

    /**
     *
     * @type {number[]}
     */
    _this2.indexArray = null;

    /**
     *
     * @type {number}
     */
    _this2.materialCount = 0;

    /**
     *
     * @type {SCNMaterial[]}
     */
    _this2.materialArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.materialIndexCountArray = null;

    /**
     *
     * @type {?SCNGeometryElement[]}
     */
    _this2.elementArray = null;

    /**
     *
     * @type {MMDNode[]}
     */
    _this2.boneArray = null;

    /**
     *
     * @type {SCNMatrix4[]}
     */
    _this2.boneInverseMatrixArray = null;

    /**
     *
     * @type {MMDNode}
     */
    _this2.rootBone = null;

    /**
     *
     * @type {?MMDNode}
     */
    _this2.rotateEffector = null;

    /**
     *
     * @type {number}
     */
    _this2.rotateEffectRate = 0;

    /**
     *
     * @type {?MMDNode}
     */
    _this2.translateEffector = null;

    /**
     *
     * @type {number}
     */
    _this2.translateEffectRate = 0;

    /**
     *
     * @type {?number[]}
     */
    _this2.faceIndexArray = null;

    /**
     *
     * @type {?number[][]}
     */
    _this2.faceDataArray = null;

    /**
     *
     * @type {number[]}
     */
    _this2.faceWeights = null;

    /**
     *
     * @type {SCNMorpher}
     */
    _this2.geometryMorpher = null;

    /**
     *
     * @type {?Map}
     */
    _this2.preparedAnimation = null;

    if (mmdNode !== null) {
      _this2.copySCNNodeValues(mmdNode);
      _this2.copyValues(mmdNode);
    }
    return _this2;
  }

  /**
   *
   * @access public
   * @returns {MMDNode} -
   */


  _createClass(MMDNode, [{
    key: 'clone',
    value: function clone() {
      //console.log('MMDNode.clone() ' + this.name)
      var newNode = _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'clone', this).call(this);
      // TODO: copy values of SCNNode
      this.copyValuesRecursive(this, newNode);

      return newNode;
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

  }, {
    key: 'copySCNNodeValues',
    value: function copySCNNodeValues(node) {
      this.name = node.name;
      this.light = node.light;
      this.camera = node.camera;
      this.geometry = node.geometry;
      this.morpher = node.morpher;
      this.skinner = node.skinner;
      this.categoryBitMask = node.categoryBitMask;
      this.isPaused = node.isPaused;
      this.transform = node.transform;
      this.constraints = node.constraints ? node.constraints.slice() : null;
      this.isHidden = node.isHidden;
      this.opacity = node.opacity;
      this.renderingOrder = node.renderingOrder;
      this.castsShadow = node.castsShadow;
      this.movabilityHint = node.movabilityHint;
      this.filters = node.filters ? node.filters.slice() : null;
      this.rendererDelegate = node.rendererDelegate;

      if (node.physicsBody) {
        var body = node.physicsBody;
        var newBody = null;
        switch (body.type) {
          case _jscenekit.SCNPhysicsBody.Type.static:
            newBody = _jscenekit.SCNPhysicsBody.static();
            break;
          case _jscenekit.SCNPhysicsBody.Type.dynamic:
            newBody = _jscenekit.SCNPhysicsBody.dynamic();
            break;
          case _jscenekit.SCNPhysicsBody.Type.kinematic:
            newBody = _jscenekit.SCNPhysicsBody.kinematic();
            break;
          default:
            throw new Error('unknown physics body type: ' + body.type);
        }
        newBody.physicsShape = body.physicsShape;
        newBody.velocityFactor = body.velocityFactor;
        newBody.angularVelocityFactor = body.angularVelocityFactor;
        newBody.isAffectedByGravity = body.isAffectedByGravity;
        newBody.mass = body.mass;
        newBody.charge = body.charge;
        newBody.friction = body.friction;
        newBody.rollingFriction = body.rollingFriction;
        newBody.restitution = body.restitution;
        newBody.damping = body.damping;
        newBody.angularDamping = body.angularDamping;
        newBody.momentOfInertia = body.momentOfInertia;
        newBody.usesDefaultMomentOfInertia = body.usesDefaultMomentOfInertia;
        newBody.cateogryBitMask = body.categoryBitMask;
        newBody.contactTestBitMask = body.contactTestBitMask;
        newBody.collisionBitMask = body.collisionBitMask;
        newBody.velocity = body.velocity;
        newBody.angularVelocity = body.angularVelocity;
        newBody.allowsResting = body.allowsResting;

        this.physicsBody = newBody;
      }

      this.physicsField = node.physicsField;
    }

    /**
     *
     * @access public
     * @param {MMDNode} node -
     * @returns {void}
     */

  }, {
    key: 'copyValues',
    value: function copyValues(node) {
      this.physicsBehaviors = node.physicsBehaviors; // [SCNPhysicsBehavior]
      this.type = node.type;
      this.isKnee = node.isKnee;
      this.ikConstraint = node.ikConstraint; // MMDIKConstraint
      this.ikArray = node.ikArray; // [MMDIKConstraint]
      this.joints = node.joints; // [SCNPhysicsBehavior]
      this.vertexCount = node.vertexCount;
      this.vertexArray = node.vertexArray;
      this.normalArray = node.normalArray;
      this.texcoordArray = node.texcoordArray;
      this.boneIndicesArray = node.boneIndicesArray;
      this.boneWeightsArray = node.boneWeightsArray;
      this.indexCount = node.indexCount;
      this.indexArray = node.indexArray;
      this.materialCount = node.materialCount;
      this.materialArray = node.materialArray; // [SCNMaterial]
      this.materialIndexCountArray = node.materialIndexCountArray;
      this.elementArray = node.elementArray; // [SCNGeometryElement]
      this.boneArray = node.boneArray; // [MMDNode]
      this.boneInverseMatrixArray = node.boneInverseMatrixArray;
      this.rootBone = node.rootBone; // MMDNode

      this.rotateEffector = node.rotateEffector; // MMDNode
      this.rotateEffectRate = node.rotateEffectRate;
      this.translateEffector = node.translateEffector; // MMDNode
      this.translateEffectRate = node.translateEffectRate;

      this.faceIndexArray = node.faceIndexArray;
      this.faceDataArray = node.faceDataArray;
      this.faceWeights = node.faceWeights;
      this.geometryMorpher = node.geometryMorpher; // SCNMorpher

      this.preparedAnimation = node.preparedAnimation;
    }

    /**
     *
     * @access public
     * @param {SCNNode} src -
     * @param {SCNNode} dst -
     * @returns {void}
     */

  }, {
    key: 'copyValuesRecursive',
    value: function copyValuesRecursive(src, dst) {
      if (src instanceof MMDNode) {
        if (dst instanceof MMDNode) {
          dst.copyValues(src);
        }
      }

      for (var i = 0; i < src.childNodes.length; i++) {
        this.copyValuesRecursive(src.childNodes[i], dst.childNodes[i]);
      }
    }
  }, {
    key: 'valueForUndefinedKey',
    value: function valueForUndefinedKey(key) {
      //console.log('MMDNode.valueForUndefinedKey: ' + key)
      if (key.startsWith('/')) {
        var searchKey = key.substring(1);
        var node = this.childNodeWithNameRecursively(searchKey, true);
        if (node) {
          return node;
        }

        //console.warn(`valueForUndefinedKey ${key} not found.`)
        return _dummyNode;
      }

      var result = key.match(_faceWeightsPattern);
      if (result) {
        var index = result[1];
        var value = this.faceWeights[index];
        return value;
      }

      if (key === 'kPivotKey') {
        return null;
      }

      return _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'valueForUndefinedKey', this).call(this, key);
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

  }, {
    key: 'prepareAnimationForKey',
    value: function prepareAnimationForKey(animation, key) {
      if (this.preparedAnimation === null) {
        this.preparedAnimation = new Map();
      }
      if (animation instanceof _jscenekit.CAAnimationGroup) {
        var convertedAnimation = this._convertAnimation(animation);
        convertedAnimation.delegate = this;
        this.preparedAnimation.set(key, convertedAnimation);
      } else {
        animation.delegate = this;
        this.preparedAnimation.set(key, animation);
      }
    }

    /**
     *
     * @access public
     * @param {string} key -
     * @returns {void}
     */

  }, {
    key: 'stopPreparedAnimationForKey',
    value: function stopPreparedAnimationForKey(key) {
      if (this.preparedAnimation === null) {
        return;
      }
      _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'removeAnimationForKey', this).call(this, key);
      //this.preparedAnimation.delete(key)
    }

    /**
     *
     * @access public
     * @param {string} key -
     * @returns {void}
     */

  }, {
    key: 'playPreparedAnimationForKey',
    value: function playPreparedAnimationForKey(key) {
      if (this.preparedAnimation === null) {
        return;
      }
      var anim = this.preparedAnimation.get(key);
      if (anim) {
        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimationForKey', this).call(this, anim, key);
      }
    }

    /**
     *
     * @access private
     * @param {CAAnimationGroup} animation -
     * @returns {CAAnimationGroup} -
     */

  }, {
    key: '_convertAnimation',
    value: function _convertAnimation(animation) {
      var _this3 = this;

      console.log('_convertAnimation start');
      var geometryNode = this.childNodeWithNameRecursively('Geometry', true);
      var newGroup = animation.copy();
      newGroup.animations = [];

      var animations = animation.animations;
      console.log('animations');
      if (animations) {
        console.log('if(animations): true');
        animations.forEach(function (anim) {
          console.log('anim: ' + anim.keyPath);
          var hasEffector = false;
          var newAnim = anim.copy();

          if (newAnim instanceof _jscenekit.CAKeyframeAnimation) {
            console.log('newAnim: ' + newAnim.keyPath);
            var boneNameKey = newAnim.keyPath.split('.')[0];
            var boneName = boneNameKey.substring(1);
            var bone = _this3.childNodeWithNameRecursively(boneName, true);
            console.log('boneName: ' + boneName + ', bone: ' + bone);

            if (boneNameKey === 'morpher') {
              if (newAnim.keyPath.startsWith('morpher.weights.')) {
                var faceName = newAnim.keyPath.substring(16);
                var faceIndex = -1;

                // search face name from geometry node
                for (var i = 0; i < geometryNode.morpher.targets.length; i++) {
                  if (geometryNode.morpher.targets[i].name === faceName) {
                    faceIndex = i;
                    break;
                  }
                }

                if (faceIndex >= 0) {
                  newAnim.keyPath = '/Geometry.morpher.weights[' + faceIndex + ']';
                } else {
                  // newAnim.keyPath = '//'
                  return;
                }
              }
            } else if (bone !== null) {
              if (newAnim.keyPath.endsWith('.translation.x')) {
                for (var _i = 0; _i < newAnim.values.length; _i++) {
                  var origValue = newAnim.values[_i];
                  var newValue = origValue + bone.position.x;
                  newAnim.values[_i] = newValue;

                  //console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
                }
              } else if (newAnim.keyPath.endsWith('.translation.y')) {
                for (var _i2 = 0; _i2 < newAnim.values.length; _i2++) {
                  var _origValue = newAnim.values[_i2];
                  var _newValue = _origValue + bone.position.y;
                  newAnim.values[_i2] = _newValue;

                  //console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
                }
              } else if (newAnim.keyPath.endsWith('.translation.z')) {
                for (var _i3 = 0; _i3 < newAnim.values.length; _i3++) {
                  var _origValue2 = newAnim.values[_i3];
                  var _newValue2 = _origValue2 + bone.position.z;
                  newAnim.values[_i3] = _newValue2;

                  //console.log(`convert ${newAnim.keyPath}: ${origValue} => ${newValue}`)
                }
              }

              if (newAnim.values.length === 1) {
                // remove the meanless animation
                var value = newAnim.values[0];
                if (value instanceof _jscenekit.SCNVector3) {
                  if (value.x === 0 && value.y === 0 && value.z === 0) {
                    hasEffector = true;
                  }
                } else if (value instanceof _jscenekit.SCNVector4) {
                  if (value.x === 0 && value.y === 0 && value.z === 0) {
                    hasEffector = true;
                  }
                }
              } // newAnim.values.length === 1
            } // bone !== null
          } // newAnim instanceof CAKeyframeAnimation

          if (!hasEffector) {
            newGroup.animations.push(newAnim);
          }
        }); // animations.forEach
      } // animations
      console.log('_convertAnimation end');
      return newGroup;
    }

    /**
     *
     * @access public
     * @param {CAAnimation} animation -
     * @param {string} key -
     * @returns {void}
     */

  }, {
    key: 'addAnimationForKey',
    value: function addAnimationForKey(animation, key) {
      if (animation instanceof _jscenekit.CAAnimationGroup) {
        var convertedAnimation = this._convertAnimation(animation);
        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimationForKey', this).call(this, convertedAnimation, key);
      } else {
        animation.delegate = this;
        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimationForKey', this).call(this, animation, key);
      }
    }

    /**
     *
     * @access public
     * @returns {void}
     */

  }, {
    key: 'updateIK',
    value: function updateIK() {
      var _this4 = this;

      if (this.ikArray !== null) {
        var zeroThreshold = 0.0000001;
        this.ikArray.forEach(function (ik) {
          var ikBone = ik.ikBone;
          var targetBone = ik.targetBone;

          for (var i = 0; i < ik.iteration; i++) {
            for (var index = 0; index < ik.boneArray.length; index++) {
              var bone = ik.boneArray[index];

              var bonePosition = _this4._getWorldPosition(bone.presentation);
              var targetPosition = _this4._getWorldPosition(targetBone.presentation);
              var ikPosition = _this4._getWorldPosition(ikBone.presentation);
              //console.log(`IK it ${i} bone ${bone.name} target ${targetPosition.float32Array()} ik ${ikPosition.float32Array()}`)

              var v1 = bonePosition.sub(targetPosition);
              var v2 = bonePosition.sub(ikPosition);

              v1 = v1.normalize();
              v2 = v2.normalize();

              var diff = v1.sub(v2);
              var x2 = diff.x * diff.x;
              var y2 = diff.y * diff.y;
              var z2 = diff.z * diff.z;
              if (x2 + y2 + z2 < zeroThreshold) {
                break;
              }

              var v = v1.cross(v2);
              v = _this4._inverseCross(v, bone.parent.presentation.worldTransform);
              v = v.normalize();

              if (bone.isKnee) {
                if (v.x > 0) {
                  v.x = 1.0;
                } else {
                  v.x = -1.0;
                }
                v.y = 0;
                v.z = 0;
              }

              var innerProduct = v1.dot(v2);
              if (innerProduct > 1) {
                innerProduct = 1;
              } else if (innerProduct < -1) {
                innerProduct = -1;
              }

              var ikRot = 0.5 * Math.acos(innerProduct);
              var maxRot = ik.weight * (index + 1) * 2;
              if (ikRot > maxRot) {
                ikRot = maxRot;
              }

              var ikSin = Math.sin(ikRot);
              var ikCos = Math.cos(ikRot);
              var quat = new _jscenekit.SCNVector4();

              // create quaternion
              quat.x = v.x * ikSin;
              quat.y = v.y * ikSin;
              quat.z = v.z * ikSin;
              quat.w = ikCos;

              var orgQuat = _this4._rotationToQuat(bone.presentation.rotation);
              //console.log(`${this.name} rot ${bone.presentation.rotation.float32Array()}`)
              //console.log(`${this.name} orgQuat ${orgQuat.float32Array()}`)
              quat = quat.cross(orgQuat);

              // FIXME: don't use presentation node
              //bone.presentation.rotation = this._quatToRotation(quat)
              bone.rotation = _this4._quatToRotation(quat);

              if (bone.isKnee) {
                // FIXME: don't use presentation node
                //if(bone.presentation.eulerAngles.x < 0){
                if (bone.eulerAngles.x < 0) {
                  quat.x = -quat.x;
                  // FIXME: don't use presentation node
                  //bone.presentation.rotation = rot
                  bone.rotation = _this4._quatToRotation(quat);
                  //console.log(`${bone.name} quatToRotation ${bone.rotation.float32Array()}`)
                }
              }
              //console.log(`after ${this.name} rot ${bone.presentation.rotation.float32Array()}`)
            } // boneArray
          } // iteration
        }); // ikArray
      }
      this.updateEffector();
    }

    /**
     *
     * @access public
     * @returns {void}
     */

  }, {
    key: 'updateEffector',
    value: function updateEffector() {
      if (this.rotateEffector !== null) {
        var rot = this.rotateEffector.presentation.rotation;
        if (this.rotateEffectRate === 1.0) {
          // FIXME: don't use presentation node
          //this.presentation.rotation = rot
          this.rotation = rot;
        } else {
          var quat = this._rotationToQuat(rot);
          //console.log(`${this.name} quat ${quat.float32Array()}`)
          var orgQuat = this._rotationToQuat(this.presentation.rotation);
          //console.log(`${this.name} orgQuat ${orgQuat.float32Array()}`)
          //const newQuat = this.slerp(orgQuat, quat, this.rotateEffectRate)
          var newQuat = orgQuat.slerp(quat, this.rotateEffectRate);
          var newRot = this._quatToRotation(newQuat);
          // FIXME: don't use presentation
          //this.presentation.rotation = newRot
          this.rotation = newRot;
          //console.log(`${this.name} newQuat.quatToRotation ${this.rotation.float32Array()}`)
        }
      }
      if (this.translateEffector !== null) {
        var pos = this.translateEffector.presentation.position;
        if (this.translateEffectRate === 1.0) {
          // FIXME: don't use presentation node
          //this.presentation.position = pos
          this.position = pos;
        } else {
          // FIXME: don't use presentation node
          //this.presentation.position = pos.mul(this.translateEffectRate)
          this.position = pos.mul(this.translateEffectRate);
        }
      }
    }

    /**
     * 
     * @access public
     * @param {SCNScene} scene -
     * @returns {void}
     */

  }, {
    key: 'addPhysicsBehavior',
    value: function addPhysicsBehavior(scene) {
      if (this.joints === null) {
        return;
      }

      this.joints.forEach(function (joint) {
        scene.physicsWorld.addBehavior(joint);
      });
    }

    /**
     *
     * @access public
     * @param {SCNScene} scene -
     * @returns {void}
     */

  }, {
    key: 'removePhysicsBehavior',
    value: function removePhysicsBehavior(scene) {
      if (this.joints === null) {
        return;
      }

      this.joints.forEach(function (joint) {
        scene.physicsWorld.removeBehavior(joint);
      });
    }

    /**
     *
     * @access public
     * @returns {SCNNode} -
     */

  }, {
    key: 'getRootNode',
    value: function getRootNode() {
      var node = this;
      var parentNode = node.parent;
      while (parentNode !== null) {
        node = parentNode;
        parentNode = node.parent;
      }
      return node;
    }

    /**
     *
     * @access public
     * @param {string} key -
     * @param {string} boneName -
     * @returns {object} -
     */

  }, {
    key: 'getFirstFramePoseForKeyBoneName',
    value: function getFirstFramePoseForKeyBoneName(key, boneName) {}
    // TODO: implement


    /**
     *
     * @access public
     * @param {string} key -
     * @param {string} boneName -
     * @returns {object} -
     */

  }, {
    key: 'getLastFramePoseForKeyBoneName',
    value: function getLastFramePoseForKeyBoneName(key, boneName) {}
    // TODO: implement


    /////////////////////////
    // CAAnimationDelegate //
    /////////////////////////

    /**
     * @access public
     * @param {CAAnimation} anim -
     * @param {boolean} finished -
     * @returns {void}
     */

  }, {
    key: 'animationDidStop',
    value: function animationDidStop(anim, finished) {
      if (finished) {
        var block = anim.valueForKey(_MMDAnimationCompletionBlockKey);
        if (block) {
          block();
        }
      }
    }

    /**
     * @access public
     * @param {function} block -
     * @param {string} key -
     * @returns {void}
     */

  }, {
    key: 'setCompletionHandler',
    value: function setCompletionHandler(block, key) {
      var anim = this.preparedAnimation.get(key);
      if (anim) {
        anim.setValueForKey(block, _MMDAnimationCompletionBlockKey);
      }
    }
  }, {
    key: '_getWorldPosition',


    /**
     *
     * @access private
     * @param {SCNNode} node -
     * @returns {SCNVector3} -
     */
    value: function _getWorldPosition() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var m = null;
      if (node === null) {
        m = this.worldTransform;
      } else {
        m = node.worldTransform;
      }
      return new _jscenekit.SCNVector3(m.m41, m.m42, m.m43);
    }

    /**
     * @access private
     * @param {SCNVector3} v1 -
     * @param {SCNMatrix4} mat -
     * @param {boolean} [includeTranslation = false] -
     * @returns {SCNVector3} -
     */

  }, {
    key: '_inverseCross',
    value: function _inverseCross(v1, mat) {
      var includeTranslation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var v = new _jscenekit.SCNVector3();

      v.x = v1.x * mat.m11 + v1.y * mat.m12 + v1.z * mat.m13;
      v.y = v1.x * mat.m21 + v1.y * mat.m22 + v1.z * mat.m23;
      v.z = v1.x * mat.m31 + v1.y * mat.m32 + v1.z * mat.m33;

      if (includeTranslation) {
        v.x += mat.m14;
        v.y += mat.m24;
        v.z += mat.m34;
      }

      return v;
    }
  }, {
    key: '_rotationToQuat',
    value: function _rotationToQuat(rot) {
      var quat = new _jscenekit.SCNVector4();
      if (rot.x === 0 && rot.y === 0 && rot.z === 0) {
        quat.x = 0;
        quat.y = 0;
        quat.z = 0;
        quat.w = 1.0;
      } else {
        var r = 1.0 / Math.sqrt(rot.x * rot.x + rot.y * rot.y + rot.z * rot.z);
        var cosW = Math.cos(rot.w);
        var sinW = Math.sin(rot.w) * r;
        quat.x = rot.x * sinW;
        quat.y = rot.y * sinW;
        quat.z = rot.z * sinW;
        quat.w = cosW;
      }
      return quat;
    }
  }, {
    key: '_quatToRotation',
    value: function _quatToRotation(quat) {
      var rot = new _jscenekit.SCNVector4();

      if (quat.x === 0 && quat.y === 0 && quat.z === 0) {
        rot.x = 0;
        rot.y = 0;
        rot.z = 0;
        rot.w = 0;
      } else {
        rot.x = quat.x;
        rot.y = quat.y;
        rot.z = quat.z;

        var qw = quat.w;
        if (quat.w > 1) {
          qw = 1;
        } else if (quat.w < -1) {
          qw = -1;
        }
        var w = Math.acos(qw);

        if (isNaN(w)) {
          rot.w = 0;
        } else {
          rot.w = w;
        }
      }

      return rot;
    }
  }], [{
    key: 'Type',
    get: function get() {
      return _MMDNodeType;
    }
  }]);

  return MMDNode;
}(_jscenekit.SCNNode);

exports.default = MMDNode;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscenekit = __webpack_require__(0);

var _TGAImage = __webpack_require__(18);

var _TGAImage2 = _interopRequireDefault(_TGAImage);

var _ToonImages2 = __webpack_require__(7);

var _ToonImages3 = _interopRequireDefault(_ToonImages2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _toonImages = _ToonImages3.default;
var _toonMaterials = [];
var _c = document.createElement('canvas');
_c.width = 1;
_c.height = 1;
var _ctx = _c.getContext('2d');

/**
 *
 * @access public
 */

var MMDReader = function () {
  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @param {boolean} [isBinary = true] -
   * @param {boolean} [isBigEndian = false] -
   * @param {string} [encoding = ''] -
   * @param {boolean} [crossDomain = false] - 
   */
  function MMDReader(data, directoryPath) {
    var isBinary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var isBigEndian = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var encoding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var crossDomain = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    _classCallCheck(this, MMDReader);

    /**
     *
     * @type {string}
     */
    this.directoryPath = directoryPath;

    /**
     *
     * @type {}
     */
    this.binaryData = data;

    /**
     *
     * @type {number}
     */
    //this.length = data.byteLength
    this.length = data.length;

    /**
     *
     * @type {boolean}
     */
    this.crossDomain = crossDomain;

    this._reader = null;

    if (isBinary) {
      this._reader = new _jscenekit._BinaryReader(data, isBigEndian, encoding);
    } else {
      this._reader = new _jscenekit._TextReader(data, encoding);
    }
  }

  _createClass(MMDReader, [{
    key: 'skip',
    value: function skip(length) {
      var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._reader.skip(length, noAssert);
    }
  }, {
    key: 'readString',
    value: function readString(length, encoding) {
      return this._reader.readString(length, encoding);
    }
  }, {
    key: 'readInteger',
    value: function readInteger(length, signed) {
      return this._reader.readInteger(length, signed);
    }
  }, {
    key: 'readUnsignedByte',
    value: function readUnsignedByte() {
      return this._reader.readUnsignedByte();
    }
  }, {
    key: 'readUnsignedShort',
    value: function readUnsignedShort() {
      return this._reader.readUnsignedShort();
    }
  }, {
    key: 'readUnsignedInt',
    value: function readUnsignedInt() {
      return this._reader.readUnsignedInt();
    }
  }, {
    key: 'readInt',
    value: function readInt() {
      return this._reader.readInt();
    }
  }, {
    key: 'readFloat',
    value: function readFloat() {
      return this._reader.readFloat();
    }
  }, {
    key: 'readDouble',
    value: function readDouble() {
      return this._reader.readDouble();
    }
  }, {
    key: 'getAvailableDataLength',
    value: function getAvailableDataLength() {
      return this._reader.getAvailableDataLength();
    }
  }, {
    key: 'loadTexture',
    value: function loadTexture(filePath) {
      var _this = this;

      var promise = new Promise(function (resolve, reject) {
        var fileName = _this.directoryPath + filePath;
        if (fileName.endsWith('tga')) {
          var tga = _TGAImage2.default.imageWithURL(fileName);
          tga.didLoad.then(function () {
            resolve(tga.image);
          });
        } else {
          var image = new Image();
          // TODO: check option if it allows cross-domain.
          // if(this.crossDomain){
          image.crossOrigin = "anonymous";
          // }
          image.onload = function () {
            resolve(image);
          };
          image.onerror = function () {
            reject(new Error('image ' + fileName + ' load error'));
          };
          image.src = fileName;
        }
      });
      return promise;
    }
  }, {
    key: 'pos',
    get: function get() {
      return this._reader._pos;
    }
  }], [{
    key: 'getToonMaterial',
    value: function getToonMaterial(image) {
      _ctx.drawImage(image, 0, image.height - 1, 1, 1, 0, 0, 1, 1);
      var data = _ctx.getImageData(0, 0, 1, 1).data;
      var r = data[0] / 255.0;
      var g = data[1] / 255.0;
      var b = data[2] / 255.0;
      var a = data[3] / 255.0;
      console.warn(r + ', ' + g + ', ' + b + ', ' + a);
      return new _jscenekit.SKColor(r, g, b, a);
    }
  }, {
    key: 'toonTextures',
    get: function get() {
      return _toonImages;
    }
  }, {
    key: 'toonMaterials',
    get: function get() {
      return _toonMaterials;
    }
  }]);

  return MMDReader;
}();

exports.default = MMDReader;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

  for (var _iterator = _toonImages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var image = _step.value;

    _toonMaterials.push(MMDReader.getToonMaterial(image));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jscenekit = __webpack_require__(0);

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDPMDReader = __webpack_require__(9);

var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

var _MMDPMMReader = __webpack_require__(10);

var _MMDPMMReader2 = _interopRequireDefault(_MMDPMMReader);

var _MMDPMXReader = __webpack_require__(11);

var _MMDPMXReader2 = _interopRequireDefault(_MMDPMXReader);

var _MMDVACReader = __webpack_require__(12);

var _MMDVACReader2 = _interopRequireDefault(_MMDVACReader);

var _MMDVMDReader = __webpack_require__(13);

var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

var _MMDVPDReader = __webpack_require__(14);

var _MMDVPDReader2 = _interopRequireDefault(_MMDVPDReader);

var _MMDXReader = __webpack_require__(15);

var _MMDXReader2 = _interopRequireDefault(_MMDXReader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MMDFileType = {
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
};

var _LoadingOption = {
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

  // for node
  //import fs from 'fs'

  /**
   *
   * @access public
   * @extends {SCNSceneSource}
   */
};
var MMDSceneSource = function (_SCNSceneSource) {
  _inherits(MMDSceneSource, _SCNSceneSource);

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
  function MMDSceneSource(data, options, directoryPath, models, motions) {
    _classCallCheck(this, MMDSceneSource);

    var _this = _possibleConstructorReturn(this, (MMDSceneSource.__proto__ || Object.getPrototypeOf(MMDSceneSource)).call(this, data, options));

    _this._fileType = _MMDFileType.unknown;
    _this._directoryPath = directoryPath;
    _this._workingScene = null;
    _this._workingNode = null;
    _this._workingAnimationGroup = null;

    //if(typeof data === 'undefined'){
    //  return
    //}
    //this._loadData(data, options)
    return _this;
  }

  _createClass(MMDSceneSource, [{
    key: '_loadData',


    /**
     *
     * @access private
     * @param {Buffer} data -
     * @param {Map<SCNSceneSource.LoadingOption, object>} options -
     * @param {?MMDNode[]} [models = null] -
     * @param {?CAAnimation[]} [motions = null] -
     * @returns {void}
     */
    value: function _loadData(data, options) {
      var _this2 = this;

      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      console.warn('MMDSceneSource _loadData');
      //this._workingScene = new MMDScene()
      this._workingScene = new _jscenekit.SCNScene();
      this._checkFileTypeFromData(data);

      if (this._fileType === _MMDFileType.pmd) {
        var pmdNode = _MMDPMDReader2.default.getNode(data, this._directoryPath);
        if (pmdNode) {
          this._workingNode = pmdNode;
        }
      } else if (this._fileType === _MMDFileType.vmd) {
        var vmdMotion = _MMDVMDReader2.default.getMotion(data);
        if (vmdMotion) {
          this._workingAnimationGroup = vmdMotion;
        }
      } else if (this._fileType === _MMDFileType.x) {
        var xNode = _MMDXReader2.default.getNode(data, this._directoryPath);
        if (xNode) {
          this._workingNode = xNode;
        }
      } else if (this._fileType === _MMDFileType.pmx) {
        var pmxNode = _MMDPMXReader2.default.getNode(data, this._directoryPath);
        if (pmxNode) {
          this._workingNode = pmxNode;
          pmxNode.didLoad.then(function () {
            console.error('pmxNode.didLoad');
          });
        }
      } else if (this._fileType === _MMDFileType.vpd) {
        var vpdAnimation = _MMDVPDReader2.default.getAnimation(data);
        if (vpdAnimation) {
          this.workingAnimationGroup = vpdAnimation;
        }
      } else if (this._fileType === _MMDFileType.pmm) {
        var pmmScene = _MMDPMMReader2.default.getScene(data, this._directoryPath, models, motions);
        if (pmmScene) {
          pmmScene.rootNode.childNodes.forEach(function (node) {
            _this2._workingScene.rootNode.addChildNode(node);
          });
        }
      } else if (this._fileType === _MMDFileType.vac) {
        var vacNode = _MMDVACReader2.default.getNode(data, this._directoryPath);
        if (vacNode) {
          this._workingNode = vacNode;
        }
      } else if (this._fileType === _MMDFileType.obj || this._fileType === _MMDFileType.dae || this._fileType === _MMDFileType.scn) {
        var sceneSource = new _jscenekit.SCNSceneSource(data, options);
        if (sceneSource) {
          var scene = sceneSource.scene(options);
          var mmdNode = new _MMDNode2.default();
          scene.rootNode.childNodes.forEach(function (child) {
            mmdNode.addChildNode(child);
          });
          this._workingNode = mmdNode;
        }
      } else if (this._fileType === _MMDFileType.abc) {
        // ?
      } else {
        // try SCNSceneSource to load the data
        this._data = data;
        this._workingScene = _get(MMDSceneSource.prototype.__proto__ || Object.getPrototypeOf(MMDSceneSource.prototype), 'scene', this).call(this, options);
      }

      if (this._workingNode) {
        this._workingScene.rootNode.addChildNode(this._workingNode);
      }
      if (this._workingAnimationGroup) {
        this._workingScene.rootNode.addAnimationForKey(this._workingAnimationGroup, null);
      }
    }
  }, {
    key: 'scene',
    value: function scene() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var statusHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var _options = options;
      if (!_options) {
        if (this._options) {
          _options = this._options;
        } else {
          _options = new Map();
        }
      }

      var url = this._url;
      var assetDirectoryURLs = _options.get(_LoadingOption.assetDirectoryURLs);
      if (assetDirectoryURLs) {
        var dir = assetDirectoryURLs;
        if (Array.isArray(dir)) {
          dir = dir[0];
        }
        url = dir + '/';
        if (this._url) {
          url += this._url.split('/').pop();
        }
      }
      if (!this._directoryPath) {
        var paths = url.split('/');
        paths.pop();
        this._directoryPath = paths.join('/') + '/';
      }

      this._loadData(this._data, _options);

      return this.getScene();
    }
  }, {
    key: 'modelNodes',
    value: function modelNodes() {
      var nodeArray = [];
      if (this._fileType === _MMDFileType.pmd || this._fileType === _MMDFileType.pmx || this._fileType === _MMDFileType.x || this._fileType === _MMDFileType.vac) {
        nodeArray.push(this._workingNode);
      } else if (this._fileType === _MMDFileType.pmm) {
        this._workingScene.rootNode.childNodes.forEach(function (node) {
          if (node instanceof _MMDNode2.default) {
            nodeArray.push(node); // FIXME: clone node
          }
        });
      }
      return nodeArray;
    }
  }, {
    key: 'getScene',
    value: function getScene() {
      return this._workingScene;
    }
  }, {
    key: 'getModel',
    value: function getModel() {
      if (this._workingScene === null) {
        this.scene();
      }

      if (this._fileType === _MMDFileType.pmd || this._fileType === _MMDFileType.pmx || this._fileType === _MMDFileType.x || this._fileType === _MMDFileType.vac) {
        this._workingNode.didLoad.then(function () {
          console.error('workingNode.didLoad');
        });
        return this._workingNode;
      } else if (this._fileType === _MMDFileType.pmm) {
        return this._workingScene.rootNode.childNodes.find(function (node) {
          return node instanceof _MMDNode2.default;
        });
      }
      throw new Error('getModel not implemented for the file type');
    }
  }, {
    key: 'getMotion',
    value: function getMotion() {
      if (this._workingScene === null) {
        this.scene();
      }

      return this._workingAnimationGroup;
    }

    /**
     *
     * @access public
     * @returns {Map<string, CAAnimation>} -
     */

  }, {
    key: 'animations',
    value: function animations() {
      var animationHash = new Map();
      animationHash.set('animation', this._workingAnimationGroup); // FIXME
      return animationHash;
    }

    /**
     * 
     * @access private
     * @param {Buffer} data -
     * @returns {Symbol} -
     */

  }, {
    key: '_checkFileTypeFromData',
    value: function _checkFileTypeFromData(data) {
      var str = data.toString('ascii', 0, 25);
      if (str.startsWith('Pmd')) {
        this._fileType = _MMDFileType.pmd;
      } else if (str.startsWith('xof ')) {
        this._fileType = _MMDFileType.x;
      } else if (str.startsWith('PMX ')) {
        this._fileType = _MMDFileType.pmx;
      } else if (str.startsWith('Vocaloid Pose Data File')) {
        this._fileType = _MMDFileType.vpd;
      } else if (str.startsWith('Polygon Movie maker 0001') || str.startsWith('Polygon Movie maker 0002')) {
        this._fileType = _MMDFileType.pmm;
      } else if (str.startsWith('Vocaloid Motion Data 0002')) {
        this._fileType = _MMDFileType.vmd;
      }

      return this._fileType;
    }
  }, {
    key: 'cameraNodes',
    get: function get() {
      var cameraArray = [];
      // TODO: implement
      return cameraArray;
    }
  }, {
    key: 'lightNodes',
    get: function get() {
      var lightArray = [];
      // TODO: implement
      return lightArray;
    }
  }], [{
    key: 'sceneSourceWithDataOptions',
    value: function sceneSourceWithDataOptions(data, options, directoryPath) {
      var models = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var motions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

      return new MMDSceneSource(data, options, directoryPath, models, motions);
    }
  }, {
    key: 'sceneSourceWithURLOptions',
    value: function sceneSourceWithURLOptions(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var _options = options;
      if (_options === null) {
        _options = new Map();
      }
      if (typeof _options.get(_LoadingOption.assetDirectoryURLs) === 'undefined') {
        var paths = url.split('/');
        var name = paths.pop();
        var directory = paths.join('/');

        _options.set(_LoadingOption.assetDirectoryURLs, directory);
      }

      var source = new MMDSceneSource();
      source._url = url;
      _jscenekit._BinaryRequest.get(url).then(function (data) {
        source._data = data;
        source._options = _options;
        source._resolveFunction();
      });

      // check file type from the file extension
      if (url.endsWith('.vac')) {
        source._fileType = _MMDFileType.vac;
      } else if (url.endsWith('.obj')) {
        source._fileType = _MMDFileType.obj;
      } else if (url.endsWith('.dae')) {
        source._fileType = _MMDFileType.dae;
      } else if (url.endsWith('.abc')) {
        source._fileType = _MMDFileType.abc;
      } else if (url.endsWith('.scn')) {
        source._fileType = _MMDFileType.scn;
      }

      return source;
    }
  }, {
    key: 'sceneSourceWithPathOptions',
    value: function sceneSourceWithPathOptions(path, options) {
      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var paths = path.split('/');
      var fileName = paths.pop();
      var directoryPath = paths.join('/') + '/';

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

      var promise = new Promise(function (resolve, reject) {
        var file = new _jscenekit._File([], path);
        var reader = new _jscenekit._FileReader();
        reader.onloadend = function () {
          var data = reader.result;
          var source = new MMDSceneSource(data, options, directoryPath, models, motions);
          resolve(source);
        };
        reader.onerror = function () {
          reject(reader.error);
        };
        reader.readAsBinaryString(file);
      });

      return promise;
    }
  }, {
    key: 'sceneSource',
    value: function sceneSource() {
      return new MMDSceneSource();
    }
  }, {
    key: 'FileType',
    get: function get() {
      return _MMDFileType;
    }
  }]);

  return MMDSceneSource;
}(_jscenekit.SCNSceneSource);

exports.default = MMDSceneSource;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * @access public
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MMDIKConstraint = function MMDIKConstraint() {
  _classCallCheck(this, MMDIKConstraint);
};

exports.default = MMDIKConstraint;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jscenekit = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @access private
 * @type {string}
 */
var _vertexShader = '#version 300 es\n  precision mediump float;\n\n  #define NUM_AMBIENT_LIGHTS __NUM_AMBIENT_LIGHTS__\n  #define NUM_DIRECTIONAL_LIGHTS __NUM_DIRECTIONAL_LIGHTS__\n  #define NUM_DIRECTIONAL_SHADOW_LIGHTS __NUM_DIRECTIONAL_SHADOW_LIGHTS__\n  #define NUM_OMNI_LIGHTS __NUM_OMNI_LIGHTS__\n  #define NUM_SPOT_LIGHTS __NUM_SPOT_LIGHTS__\n  #define NUM_IES_LIGHTS __NUM_IES_LIGHTS__\n  #define NUM_PROBE_LIGHTS __NUM_PROBE_LIGHTS__\n\n  #define NUM_SHADOW_LIGHTS (NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS)\n  #define NUM_LIGHTS (NUM_AMBIENT_LIGHTS + NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS + NUM_IES_LIGHTS + NUM_PROBE_LIGHTS)\n\n  #define USE_SHADER_MODIFIER_GEOMETRY __USE_SHADER_MODIFIER_GEOMETRY__\n\n  layout (std140) uniform cameraUniform {\n    vec4 position;\n    mat4 viewTransform;\n    mat4 viewProjectionTransform;\n  } camera;\n\n  layout (std140) uniform materialUniform {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 emission;\n    float shininess;\n    float fresnelExponent;\n  } material;\n\n  struct AmbientLight {\n    vec4 color;\n  };\n\n  struct DirectionalLight {\n    vec4 color;\n    vec4 direction; // should use vec4; vec3 might cause problem for the layout\n  };\n\n  struct DirectionalShadowLight {\n    vec4 color;\n    vec4 direction; // should use vec4; vec3 might cause problem for the layout\n    vec4 shadowColor;\n    mat4 viewProjectionTransform;\n    mat4 shadowProjectionTransform;\n  };\n\n  struct OmniLight {\n    vec4 color;\n    vec4 position; // should use vec4; vec3 might cause problem for the layout\n  };\n\n  struct SpotLight {\n    // TODO: implement\n    vec4 color;\n  };\n\n  struct IESLight {\n    // TODO: implement\n    vec4 color;\n  };\n\n  struct ProbeLight {\n    // TODO: implement\n    vec4 color;\n  };\n\n  layout (std140) uniform lightUniform {\n    #if NUM_AMBIENT_LIGHTS > 0\n      AmbientLight ambient[NUM_AMBIENT_LIGHTS];\n    #endif\n    #if NUM_DIRECTIONAL_LIGHTS > 0\n      DirectionalLight directional[NUM_DIRECTIONAL_LIGHTS];\n    #endif\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n      DirectionalShadowLight directionalShadow[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n    #endif\n    #if NUM_OMNI_LIGHTS > 0\n      OmniLight omni[NUM_OMNI_LIGHTS];\n    #endif\n    #if NUM_SPOT_LIGHTS > 0\n      SpotLight spot[NUM_SPOT_LIGHTS];\n    #endif\n    #if NUM_IES_LIGHTS > 0\n      IESLight ies[NUM_IES_LIGHTS];\n    #endif\n    #if NUM_PROBE_LIGHTS > 0\n      ProbeLight probe[NUM_PROBE_LIGHTS];\n    #endif\n    #if NUM_LIGHTS == 0\n      vec4 dummy;\n    #endif\n  } light;\n  #if NUM_SHADOW_LIGHTS > 0\n    out vec3 v_light[NUM_SHADOW_LIGHTS];\n  #endif\n  #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n    out vec4 v_directionalShadowDepth[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n    out vec4 v_directionalShadowTexcoord[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n  #endif\n  out vec2 v_sptex;\n\n  layout (std140) uniform fogUniform {\n    vec4 color;\n    float startDistance;\n    float endDistance;\n    float densityExponent;\n  } fog;\n\n  #define kSCNTexcoordCount 2\n  struct SCNShaderGeometry {\n    vec3 position;\n    vec3 normal;\n    vec4 tangent;\n    vec4 color;\n    vec2 texcoords[kSCNTexcoordCount];\n  };\n\n  uniform float u_time;\n  //uniform mat3x4[255] skinningJoints;\n  uniform vec4[765] skinningJoints;\n  uniform int numSkinningJoints;\n  uniform mat4 modelTransform;\n\n  in vec3 position;\n  in vec3 normal;\n  in vec3 tangent;\n  in vec4 color;\n  in vec2 texcoord0;\n  in vec2 texcoord1;\n  in vec4 boneIndices;\n  in vec4 boneWeights;\n\n  out vec3 v_position;\n  out vec3 v_normal;\n  out vec3 v_tangent;\n  out vec3 v_bitangent;\n  out vec2 v_texcoord0;\n  out vec2 v_texcoord1;\n  out vec4 v_color;\n  out vec3 v_eye;\n  out float v_fogFactor;\n\n  __USER_CUSTOM_UNIFORM__\n\n  #if USE_SHADER_MODIFIER_GEOMETRY\n  void shaderModifierGeometry(inout SCNShaderGeometry _geometry) {\n    __SHADER_MODIFIER_GEOMETRY__\n  }\n  #endif\n\n  void main() {\n    SCNShaderGeometry _geometry;\n    _geometry.position = position;\n    _geometry.normal = normal;\n    _geometry.tangent = vec4(tangent, 1.0);\n    _geometry.color = color;\n    _geometry.texcoords[0] = texcoord0;\n    _geometry.texcoords[1] = texcoord1;\n    \n    #if USE_SHADER_MODIFIER_GEOMETRY\n      shaderModifierGeometry(_geometry);\n    #endif\n\n    vec3 pos = vec3(0, 0, 0);\n    vec3 nom = vec3(0, 0, 0);\n    vec3 tng = vec3(0, 0, 0);\n    vec4 col = _geometry.color;\n\n    if(numSkinningJoints > 0){\n      for(int i=0; i<numSkinningJoints; i++){\n        float weight = boneWeights[i];\n        if(int(boneIndices[i]) < 0){\n          continue;\n        }\n        int idx = int(boneIndices[i]) * 3;\n        mat4 jointMatrix = transpose(mat4(skinningJoints[idx],\n                                          skinningJoints[idx+1],\n                                          skinningJoints[idx+2],\n                                          vec4(0, 0, 0, 1)));\n        pos += (jointMatrix * vec4(_geometry.position, 1.0)).xyz * weight;\n        nom += (mat3(jointMatrix) * _geometry.normal) * weight;\n        tng += (mat3(jointMatrix) * _geometry.tangent.xyz) * weight;\n      }\n    }else{\n      mat4 jointMatrix = transpose(mat4(skinningJoints[0],\n                                        skinningJoints[1],\n                                        skinningJoints[2],\n                                        vec4(0, 0, 0, 1)));\n      pos = (jointMatrix * vec4(_geometry.position, 1.0)).xyz;\n      nom = mat3(jointMatrix) * _geometry.normal;\n      tng = mat3(jointMatrix) * _geometry.tangent.xyz;\n    }\n    v_position = pos;\n    v_normal = normalize(nom);\n    v_tangent = normalize(tng);\n    v_bitangent = cross(v_tangent, v_normal);\n\n    vec3 viewVec = camera.position.xyz - pos;\n    v_eye = viewVec;\n\n    v_color = material.emission;\n\n    // Lighting\n    int numLights = 0;\n\n    v_color.rgb = material.emission.rgb;\n\n    #if NUM_AMBIENT_LIGHTS > 0\n      for(int i=0; i<NUM_AMBIENT_LIGHTS; i++){\n        v_color.rgb += light.ambient[i].color.rgb * material.ambient.rgb;\n      }\n    #endif\n\n    #if NUM_DIRECTIONAL_LIGHTS > 0\n      if(!useToon){\n        for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){\n          v_light[numLights + i] = -light.directional[i].direction.xyz;\n\n          vec4 diffuseColor = material.diffuse * vec4(light.directional[i].color.rgb, 1.0);\n          vec3 lightVec = normalize(v_light[numLights + i]);\n          float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);\n          v_color.rgb += diffuse * diffuseColor.rgb;\n          //v_color.a = diffuseColor.a;\n          v_color = clamp(v_color, 0.0f, 1.0f);\n        }\n      }\n      v_color.a = material.diffuse.a;\n\n      numLights += NUM_DIRECTIONAL_LIGHTS;\n    #endif\n\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n      if(!useToon){\n        for(int i=0; i<NUM_DIRECTIONAL_SHADOW_LIGHTS; i++){\n          v_light[numLights + i] = -light.directionalShadow[i].direction.xyz;\n          v_directionalShadowDepth[i] = light.directionalShadow[i].viewProjectionTransform * vec4(pos, 1.0);\n          v_directionalShadowTexcoord[i] = light.directionalShadow[i].shadowProjectionTransform * vec4(pos, 1.0);\n\n          vec4 diffuseColor = material.diffuse * vec4(light.directionalShadow[i].color.rgb, 1.0);\n          vec3 lightVec = normalize(v_light[numLights + i]);\n          float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);\n          v_color.rgb += diffuse * diffuseColor.rgb;\n          v_color.a = diffuseColor.a;\n          v_color = clamp(v_color, 0.0f, 1.0f);\n        }\n      }\n      v_color.a = material.diffuse.a;\n\n      numLights += NUM_DIRECTIONAL_SHADOW_LIGHTS;\n    #endif\n\n    if(useSphereMap){\n      if(useSubTexture){\n        v_sptex = \n      }else{\n        vec2 normalWV = vec2(camera.viewTransform * vec4(v_normal, 1.0));\n        v_sptex.x = normalWV.x * 0.5 + 0.5;\n        v_sptex.y = normalWV.y * (-0.5) + 0.5;\n      }\n    }\n\n    #if NUM_OMNI_LIGHTS > 0\n      for(int i=0; i<NUM_OMNI_LIGHTS; i++){\n        v_light[numLights + i] = light.omni[i].position.xyz - pos;\n      }\n      numLights += NUM_OMNI_LIGHTS;\n    #endif\n\n    #if NUM_SPOT_LIGHTS > 0\n      for(int i=0; i<NUM_SPOT_LIGHTS; i++){\n        v_light[numLights + i] = light.spot[i].position.xyz - pos;\n      }\n      numLights += NUM_SPOT_LIGHTS;\n    #endif\n\n    #if NUM_IES_LIGHTS > 0\n      // TODO: implement\n    #endif\n\n    #if NUM_PROBE_LIGHTS > 0\n      // TODO: implement\n    #endif\n\n    float distance = length(viewVec);\n    v_fogFactor = clamp((distance - fog.startDistance) / (fog.endDistance - fog.startDistance), 0.0, 1.0);\n\n    v_texcoord0 = _geometry.texcoords[0];\n    v_texcoord1 = _geometry.texcoords[1];\n    gl_Position = camera.viewProjectionTransform * vec4(pos, 1.0);\n  }\n';

/**
 * @access private
 * @type {string}
 */
var _fragmentShader = '#version 300 es\n  precision mediump float;\n  precision highp sampler2DShadow;\n\n  uniform bool[8] textureFlags;\n  #define TEXTURE_EMISSION_INDEX 0\n  #define TEXTURE_AMBIENT_INDEX 1\n  #define TEXTURE_DIFFUSE_INDEX 2\n  #define TEXTURE_SPECULAR_INDEX 3\n  #define TEXTURE_REFLECTIVE_INDEX 4\n  #define TEXTURE_TRANSPARENT_INDEX 5\n  #define TEXTURE_MULTIPLY_INDEX 6\n  #define TEXTURE_NORMAL_INDEX 7\n\n  uniform bool selfIllumination;\n\n  uniform sampler2D u_emissionTexture;\n  uniform sampler2D u_ambientTexture;\n  uniform sampler2D u_diffuseTexture;\n  uniform sampler2D u_specularTexture;\n  uniform samplerCube u_reflectiveTexture;\n  uniform sampler2D u_transparentTexture;\n  uniform sampler2D u_multiplyTexture;\n  uniform sampler2D u_normalTexture;\n\n  #define NUM_AMBIENT_LIGHTS __NUM_AMBIENT_LIGHTS__\n  #define NUM_DIRECTIONAL_LIGHTS __NUM_DIRECTIONAL_LIGHTS__\n  #define NUM_DIRECTIONAL_SHADOW_LIGHTS __NUM_DIRECTIONAL_SHADOW_LIGHTS__\n  #define NUM_OMNI_LIGHTS __NUM_OMNI_LIGHTS__\n  #define NUM_SPOT_LIGHTS __NUM_SPOT_LIGHTS__\n  #define NUM_IES_LIGHTS __NUM_IES_LIGHTS__\n  #define NUM_PROBE_LIGHTS __NUM_PROBE_LIGHTS__\n\n  #define NUM_SHADOW_LIGHTS (NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS)\n  #define NUM_LIGHTS (NUM_AMBIENT_LIGHTS + NUM_DIRECTIONAL_LIGHTS + NUM_DIRECTIONAL_SHADOW_LIGHTS + NUM_OMNI_LIGHTS + NUM_SPOT_LIGHTS + NUM_IES_LIGHTS + NUM_PROBE_LIGHTS)\n\n  #define USE_SHADER_MODIFIER_SURFACE __USE_SHADER_MODIFIER_SURFACE__\n  #define USE_SHADER_MODIFIER_FRAGMENT __USE_SHADER_MODIFIER_FRAGMENT__\n\n  layout (std140) uniform materialUniform {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 emission;\n    float shininess;\n    float fresnelExponent;\n  } material;\n\n  struct AmbientLight {\n    vec4 color;\n  };\n\n  struct DirectionalLight {\n    vec4 color;\n    vec4 direction; // should use vec4; vec3 might cause problem for the layout\n  };\n\n  struct DirectionalShadowLight {\n    vec4 color;\n    vec4 direction; // should use vec4; vec3 might cause problem for the layout\n    vec4 shadowColor;\n    mat4 viewProjectionTransform;\n    mat4 shadowProjectionTransform;\n  };\n\n  struct OmniLight {\n    vec4 color;\n    vec4 position; // should use vec4; vec3 might cause problem for the layout\n  };\n\n  struct ProbeLight {\n    // TODO: implement\n    vec4 color;\n  };\n\n  struct SpotLight {\n    // TODO: implement\n    vec4 color;\n  };\n\n  layout (std140) uniform lightUniform {\n    #if NUM_AMBIENT_LIGHTS > 0\n      AmbientLight ambient[NUM_AMBIENT_LIGHTS];\n    #endif\n    #if NUM_DIRECTIONAL_LIGHTS > 0\n      DirectionalLight directional[NUM_DIRECTIONAL_LIGHTS];\n    #endif\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n      DirectionalShadowLight directionalShadow[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n    #endif\n    #if NUM_OMNI_LIGHTS > 0\n      OmniLight omni[NUM_OMNI_LIGHTS];\n    #endif\n    #if NUM_SPOT_LIGHTS > 0\n      SpotLight spot[NUM_SPOT_LIGHTS];\n    #endif\n    #if NUM_IES_LIGHTS > 0\n      IESLight ies[NUM_IES_LIGHTS];\n    #endif\n    #if NUM_PROBE_LIGHTS > 0\n      ProbeLight probe[NUM_PROBE_LIGHTS];\n    #endif\n    #if NUM_LIGHTS == 0\n      vec4 dummy;\n    #endif\n  } light;\n  #if NUM_SHADOW_LIGHTS > 0\n    in vec3 v_light[NUM_SHADOW_LIGHTS];\n  #endif\n  #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n    in vec4 v_directionalShadowDepth[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n    in vec4 v_directionalShadowTexcoord[NUM_DIRECTIONAL_SHADOW_LIGHTS];\n    uniform sampler2D u_shadowMapTexture0;\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 1\n      uniform sampler2D u_shadowMapTexture1;\n    #endif\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 2\n      uniform sampler2D u_shadowMapTexture2;\n    #endif\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 3\n      uniform sampler2D u_shadowMapTexture3;\n    #endif\n  #endif\n\n  layout (std140) uniform fogUniform {\n    vec4 color;\n    float startDistance;\n    float endDistance;\n    float densityExponent;\n  } fog;\n\n  struct SCNShaderSurface {\n    vec3 view;\n    vec3 position;\n    vec3 normal;\n    vec2 normalTexcoord;\n    vec3 geometryNormal;\n    vec3 tangent;\n    vec3 bitangent;\n    vec4 ambient;\n    vec2 ambientTexcoord;\n    vec4 diffuse;\n    vec2 diffuseTexcoord;\n    vec4 specular;\n    vec2 specularTexcoord;\n    vec4 emission;\n    vec2 emissionTexcoord;\n    vec4 multiply;\n    vec2 multiplyTexcoord;\n    vec4 transparent;\n    vec2 transparentTexcoord;\n    vec4 reflective;\n    float ambientOcclusion;\n    float shininess;\n    float fresnel;\n    __USER_CUSTOM_SURFACE__\n  } _surface;\n\n  struct SCNShaderOutput {\n    vec4 color;\n  } _output;\n\n  vec2 poissonDisk[4] = vec2[](\n    vec2( -0.94201624, -0.39906216 ),\n    vec2( 0.94558609, -0.76890725 ),\n    vec2( -0.094184101, -0.92938870 ),\n    vec2( 0.34495938, 0.29387760 )\n  );\n\n  uniform float u_time;\n\n  in vec3 v_position;\n  in vec3 v_normal;\n  in vec2 v_texcoord0;\n  in vec2 v_texcoord1;\n  in vec4 v_color;\n  in vec3 v_eye;\n  in vec3 v_tangent;\n  in vec3 v_bitangent;\n  in float v_fogFactor;\n\n  out vec4 outColor;\n\n  __USER_CUSTOM_UNIFORM__\n\n  float saturate(float value) {\n    return clamp(value, 0.0, 1.0);\n  }\n\n  float convDepth(vec4 color) {\n    const float rMask = 1.0;\n    const float gMask = 1.0 / 255.0;\n    const float bMask = 1.0 / (255.0 * 255.0);\n    const float aMask = 1.0 / (255.0 * 255.0 * 255.0);\n    float depth = dot(color, vec4(rMask, gMask, bMask, aMask));\n    return depth * 2.0 - 1.0;\n  }\n\n  #if USE_SHADER_MODIFIER_SURFACE\n  void shaderModifierSurface() {\n    __SHADER_MODIFIER_SURFACE__\n  }\n  #endif\n\n  #if USE_SHADER_MODIFIER_FRAGMENT\n  void shaderModifierFragment() {\n    __SHADER_MODIFIER_FRAGMENT__\n  }\n  #endif\n\n    \n  void main() {\n    bool spadd = true;\n\n    _output.color = v_color;\n\n    //vec3 viewVec = normalize(v_eye);\n    //vec3 nom = normalize(v_normal);\n    _surface.view = normalize(v_eye);\n    _surface.position = v_position;\n    _surface.normal = normalize(v_normal);\n    _surface.tangent = normalize(v_tangent);\n    _surface.bitangent = normalize(v_bitangent);\n\n    // normal texture\n    //if(textureFlags[TEXTURE_NORMAL_INDEX]){\n    //  mat3 tsInv = mat3(_surface.tangent, _surface.bitangent, _surface.normal);\n    //  vec3 color = normalize(texture(u_normalTexture, v_texcoord0).rgb * 2.0 - 1.0); // FIXME: check mappingChannel to decide which texture you use.\n    //  _surface.normal = normalize(tsInv * color);\n    //}\n\n    #if USE_SHADER_MODIFIER_SURFACE\n      shaderModifierSurface();\n    #endif\n\n    // emission texture\n    //if(textureFlags[TEXTURE_EMISSION_INDEX]){\n    //  if(selfIllumination){\n    //    vec4 color = texture(u_emissionTexture, v_texcoord1); // FIXME: check mappingChannel to decide which texture you use.\n    //    _output.color += color;\n    //  }else{\n    //    vec4 color = texture(u_emissionTexture, v_texcoord0);\n    //    _output.color = color * _output.color;\n    //  }\n    //}\n\n    vec4 specularColor;\n    if(textureFlags[TEXTURE_SPECULAR_INDEX]){\n      vec4 color = texture(u_specularTexture, v_texcoord0);\n      specularColor = color;\n    }else{\n      specularColor = material.specular;\n    }\n      \n    //_output.color.a = material.diffuse.a;\n    vec4 shadowColor = vec4(clamp(material.ambient.rgb, 0.0f, 1.0f), v_color.a);\n    if(textureFlags[TEXTURE_DIFFUSE_INDEX]){\n      vec4 texColor = texture(u_diffuseTexture, v_texcoord0);\n      vec4 textureMulValue = vec4(1);\n      vec4 textureAddValue = vec4(0);\n\n      if(textureFlags[TEXTURE_EMISSION_INDEX]){\n        textureAddValue = texture(u_emissionTexture, v_texcoord0);\n      }\n      if(textureFlags[TEXTURE_MULTIPLY_INDEX]){\n        textureMulValue = texture(u_multiplyTexture, v_texcoord0);\n      }\n      texColor.rgb = mix(vec3(1), texColor.rgb * textureMulValue.rgb + textureAddValue.rgb, textureMulValue.a + textureAddValue.a);\n      _output.color *= texColor;\n      shadowColor *= texColor;\n\n    }\n    if(textureFlags[TEXTURE_REFLECTIVE_INDEX]){\n      vec4 sphereMulValue = vec4(1);\n      vec4 sphereAddValue = vec4(0);\n\n      vec3 r = reflect(_surface.view, _surface.normal);\n      vec4 texColor = texture(u_reflectiveTexture, r);\n      texColor.rgb = mix(spadd ? vec3(0) : vec3(1), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);\n      if(spadd){\n        _output.color.rgb += texColor.rgb;\n        shadowColor.rgb += texColor.rgb;\n      }else{\n        _output.color.rgb *= texColor.rgb;\n        shadowColor.rgb *= texColor.rgb;\n      }\n      _output.color.a *= texColor.a;\n      shadowColor.a *= texColor.a;\n    }\n    _output.color.rgb += specularColor.rgb;\n\n    // Lighting\n    int numLights = 0;\n\n    #if NUM_AMBIENT_LIGHTS > 0\n      // nothing to do for ambient lights\n    #endif\n\n    vec4 outSpecular = vec4(0, 0, 0, 1);\n    #if NUM_DIRECTIONAL_LIGHTS > 0\n      //for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){\n      //  // diffuse\n      //  vec3 lightVec = normalize(v_light[numLights + i]);\n      //  float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);\n      //  _output.color.rgb += light.directional[i].color.rgb * material.diffuse.rgb * diffuse;\n      //  _output.color.a = material.diffuse.a;\n\n      //  // specular\n      //  if(diffuse > 0.0f){\n      //    vec3 halfVec = normalize(lightVec + _surface.view);\n      //    float specular = pow(dot(halfVec, _surface.normal), material.shininess);\n      //    _output.color.rgb += specularColor.rgb * specular;\n      //  }\n      //}\n      for(int i=0; i<NUM_DIRECTIONAL_LIGHTS; i++){\n        vec3 lightVec = normalize(v_light[numLights + i]);\n        vec3 halfVector = normalize(lightVec + _surface.view);\n        float specular = pow(max(0, dot(halfVec, _surface.normal)), material.shininess);\n        outSpecular = specular * specularColor;\n      }\n      numLights += NUM_DIRECTIONAL_LIGHTS;\n    #endif\n\n    #if NUM_DIRECTIONAL_SHADOW_LIGHTS > 0\n      for(int i=0; i<NUM_DIRECTIONAL_SHADOW_LIGHTS; i++){\n        vec3 lightVec = normalize(v_light[numLights + i]);\n        vec3 halfVector = normalize(lightVec + _surface.view);\n        float specular = pow(max(0, dot(halfVec, _surface.normal)), material.shininess);\n        outSpecular = specular * specularColor;\n      }\n    #endif\n\n    #if NUM_OMNI_LIGHTS > 0\n      //for(int i=0; i<NUM_OMNI_LIGHTS; i++){\n      //  // diffuse\n      //  vec3 lightVec = normalize(v_light[numLights + i]);\n      //  float diffuse = clamp(dot(lightVec, _surface.normal), 0.0f, 1.0f);\n      //  _output.color.rgb += light.omni[i].color.rgb * material.diffuse.rgb * diffuse;\n\n      //  // specular\n      //  if(diffuse > 0.0f){\n      //    vec3 halfVec = normalize(lightVec + _surface.view);\n      //    float specular = pow(dot(halfVec, _surface.normal), material.shininess);\n      //    //outColor.rgb += material.specular.rgb * specular; // TODO: get the light color of specular\n      //    _output.color.rgb += specularColor.rgb * specular;\n      //  }\n      //}\n      numLights += NUM_OMNI_LIGHTS;\n    #endif\n\n    #if NUM_SPOT_LIGHTS > 0\n      // TODO: implement\n    #endif\n\n    #if NUM_IES_LIGHTS > 0\n      // TODO: implement\n    #endif\n\n    #if NUM_PROBE_LIGHTS > 0\n      // TODO: implement\n    #endif\n\n\n    // diffuse texture\n    //if(textureFlags[TEXTURE_DIFFUSE_INDEX]){\n    //  vec4 color = texture(u_diffuseTexture, v_texcoord0);\n    //  _output.color = color * _output.color;\n    //}\n\n    // fresnel reflection\n    //if(textureFlags[TEXTURE_REFLECTIVE_INDEX]){\n    //  vec3 r = reflect(_surface.view, _surface.normal);\n    //  //float f0 = 0.0; // TODO: calculate f0\n    //  //float fresnel = f0 + (1.0 - f0) * pow(1.0 - clamp(dot(viewVec, nom), 0.0, 1.0), material.fresnelExponent);\n    //  float fresnel = 0.4 * pow(1.0 - clamp(dot(_surface.view, _surface.normal), 0.0, 1.0), material.fresnelExponent);\n    //  _output.color.rgb += texture(u_reflectiveTexture, r).rgb * fresnel;\n    //}\n\n    //float fogFactor = pow(v_fogFactor, fog.densityExponent);\n    //_output.color = mix(_output.color, fog.color, fogFactor);\n\n    #if USE_SHADER_MODIFIER_FRAGMENT\n      shaderModifierFragment();\n    #endif\n\n    // DEBUG\n    //_output.color.a = material.diffuse.a;\n\n    outColor = _output.color;\n  }\n';

/**
 *
 * @access public
 * @extends {SCNProgram}
 */

var MMDProgram = function (_SCNProgram) {
  _inherits(MMDProgram, _SCNProgram);

  /**
   *
   * @access public
   * @constructor
   */
  function MMDProgram() {
    _classCallCheck(this, MMDProgram);

    var _this = _possibleConstructorReturn(this, (MMDProgram.__proto__ || Object.getPrototypeOf(MMDProgram)).call(this));

    _this.vertexShader = _vertexShader;
    _this.fragmentShader = _fragmentShader;
    return _this;
  }

  return MMDProgram;
}(_jscenekit.SCNProgram);

exports.default = MMDProgram;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _MMDFragmentShader = '\n  uniform float useTexture;\n  uniform float useToon;\n  uniform float useSphereMap;\n  uniform float useSubtexture;\n\n  uniform float spadd;\n\n  uniform sampler2D sphereTexture;\n\n  uniform vec4 textureAddValue;\n  uniform vec4 textureMulValue;\n  uniform vec4 sphereAddValue;\n  uniform vec4 sphereMulValue;\n  uniform vec4 materialToon;\n  uniform float parthf;\n  uniform float transp;\n\n  #pragma transparent\n  #pragma body\n\n  vec4 debugColor;\n\n  // linear to sRGB\n  //vec4 materialDiffuse = pow(_surface.diffuse, vec4(1.0/2.2));\n  //vec4 materialSpecular = pow(_surface.specular, vec4(1.0/2.2));\n  //vec4 materialEmission = pow(_surface.emission, vec4(1.0/2.2));\n  //vec3 lightAmbient = pow(_lightingContribution.ambient, vec3(1.0/2.2));\n  //vec3 lightSpecular = pow(_lightingContribution.specular, vec3(1.0/2.2));\n  vec4 materialDiffuse = _surface.diffuse;\n  vec4 materialSpecular = _surface.specular;\n  vec4 materialEmission = _surface.emission;\n  vec3 lightAmbient = _lightingContribution.ambient;\n  vec3 lightSpecular = _lightingContribution.specular;\n\n  vec3 lightDirection = -scn_lights.direction0.xyz;\n\n  // light direction in view space\n  vec3 lightDir = normalize((u_viewTransform * vec4(lightDirection, 0.0)).xyz);\n\n  //vec4 diffuseColor = materialDiffuse * vec4(lightDiffuse, 1.0);\n  vec4 diffuseColor = vec4(0, 0, 0, 1);\n  // This is not typo; use materialDiffuse for ambientColor.\n  vec3 ambientColor = materialDiffuse.rgb * lightAmbient.rgb + materialEmission.rgb;\n  vec3 specularColor = materialSpecular.rgb * lightSpecular.rgb;\n\n  vec3 n = normalize(_surface.normal);\n\n  #define SKII1 1500.0\n  #define SKII2 8000.0\n  #define Toon 3.0\n\n  _output.color.rgb = ambientColor.rgb;\n  if(useToon <= 0.0){\n    _output.color.rgb += diffuseColor.rgb;\n  }\n  _output.color.a = diffuseColor.a;\n  _output.color = clamp(_output.color, vec4(0), vec4(1));\n\n  vec2 spTex;\n  if(useSphereMap > 0.0){\n    if(useSubtexture > 0.0){\n      spTex = _surface.specularTexcoord;\n    }else{\n      spTex.x = n.x * 0.5 + 0.5;\n      spTex.y = -n.y * 0.5 + 0.5;\n    }\n  }\n\n\n\n\n\n  //vec3 halfVector = normalize(normalize(_surface.view) - normalize(lightDir));\n  //vec3 specular = pow(max(0.0, dot(halfVector, n)), _surface.shininess) * specularColor;\n  vec4 shadowColor = vec4(ambientColor, _output.color.a);\n\n\n\n\n\n\n\n  if(useTexture > 0.0){\n    //_output.color *= texture(u_multiplyTexture, _surface.multiplyTexcoord);\n    vec4 texColor = texture(u_multiplyTexture, _surface.multiplyTexcoord);\n    texColor.rgb = mix(vec3(1), texColor.rgb * textureMulValue.rgb + textureAddValue.rgb, textureMulValue.a + textureAddValue.a);\n    _output.color *= texColor;\n    shadowColor *= texColor;\n  }\n  //debugColor = shadowColor;\n\n  if(useSphereMap > 0.0){\n    vec4 texColor = texture(sphereTexture, spTex);\n    if(spadd > 0.0){\n      texColor.rgb = mix(vec3(0), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);\n      _output.color.rgb += texColor.rgb;\n      shadowColor.rgb += texColor.rgb;\n    }else{\n      texColor.rgb = mix(vec3(1), texColor.rgb * sphereMulValue.rgb + sphereAddValue.rgb, sphereMulValue.a + sphereAddValue.a);\n      _output.color.rgb *= texColor.rgb;\n      shadowColor.rgb *= texColor.rgb;\n    }\n    _output.color.a *= texColor.a;\n    shadowColor.a *= texColor.a;\n  }\n  _output.color.rgb += specularColor;\n\n  vec4 zCalcTex = scn_lights.shadowMatrix0 * u_inverseViewTransform * vec4(_surface.position, 1.0);\n  zCalcTex /= zCalcTex.w;\n  vec2 transTexCoord;\n  transTexCoord.x = (1.0 + zCalcTex.x) * 0.5;\n  transTexCoord.y = (1.0 - zCalcTex.y) * 0.5;\n\n  debugColor = vec4(1.0, 0.0, 0.0, 1.0);\n  if(0.0 <= transTexCoord.x && transTexCoord.x <= 1.0\n    && 0.0 <= transTexCoord.y && transTexCoord.y <= 1.0){\n    float comp;\n    float depth = convDepth(texture(u_shadowTexture0, transTexCoord));\n    if(parthf > 0.0){\n      //debugColor = vec4(1.0, 0.0, 0.0, 1.0);\n      //comp = 1.0 - clamp(max(zCalcTex.z - texture(u_shadowTexture0, transTexCoord).r, 0.0) * SKII2 * transTexCoord.y - 0.3, 0.0, 1.0);\n      comp = 1.0 - clamp(max(zCalcTex.z - depth, 0.0) * SKII2 * transTexCoord.y - 0.3, 0.0, 1.0);\n    }else{\n      //debugColor = vec4(0.0, 1.0, 0.0, 1.0);\n      //comp = 1.0 - clamp(max(zCalcTex.z - texture(u_shadowTexture0, transTexCoord).r, 0.0) * SKII1 - 0.3, 0.0, 1.0);\n      comp = 1.0 - clamp(max(zCalcTex.z - depth, 0.0) * SKII1 - 0.3, 0.0, 1.0);\n    }\n    if(useToon > 0.0){\n      //debugColor = vec4(0.0, 0.0, 1.0, 1.0);\n      float lightNormal = dot(n, -lightDir) * Toon;\n      comp = min(clamp(lightNormal, 0.0, 1.0), comp);\n      //_output.color *= texture(u_transparentTexture, vec2(0, 0.5 + lightNormal * 0.5));\n      shadowColor.rgb *= materialToon.rgb;\n    }\n    debugColor = shadowColor;\n    //_output.color.rgb += specularColor.rgb;\n\n    _output.color = mix(shadowColor, _output.color, comp);\n    if(transp > 0.0){\n      _output.color.a = 0.5;\n    }\n  }\n\n  \n\n\n  //_output.color.rgb *= _output.color.a;\n\n  // sRGB to linear\n  //_output.color = pow(_output.color, vec4(2.2));\n\n\n\n\n\n  // DEBUG\n\n  //if(useTexture > 0.0){\n  //  _output.color = texture(u_multiplyTexture, _surface.multiplyTexcoord);\n  //}\n\n  //_output.color.rgb = ambientColor;\n  //_output.color.a = 1.0;\n\n  //_output.color.rgb = _lightingContribution.specular;\n  //_output.color.a = 1.0;\n\n  //if(useToon > 0.0){\n  //  float lightNormal = dot(n, -lightDir);\n  //  _output.color = texture(u_transparentTexture, vec2(0, 0.5 + lightNormal * 0.5));\n  //}\n\n  //_output.color = debugColor;\n  //_output.color = materialToon;\n  //_output.color = vec4(ambientColor, 1.0);\n  //_output.color = shadowColor;\n';

exports.default = _MMDFragmentShader;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dataUrls = ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAD1JREFUWAnt1UENACAMA0Ag+JdWS0Aw0c/VQJfrY/O8jGJWsftXO4AAAQIECBDYSaof2QQECBAgQIBAXeAC0JEGqCKc/58AAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAD5JREFUWAnt1bENACAMAzBA/H9kj2CliCeyOA+kcobO+zKCWcHuX+0AAgQIECBAYJ+q6Ec2AQECBAgQIBAXaFUyBvgWZ9yCAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAD1JREFUWAnt1UENACAMA0Ag+DdQsUAw0c/VQJfrY/O8jGJWsftXO4AAAQIECBDYSaof2QQECBAgQIBAXeAC/+gGD8FBA34AAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAD9JREFUWAnt1bENACAMAzBA/H8pAytTQTyRxXkglTO010sLZgS7f7UDCBAgQIAAgXn2in5kExAgQIAAAQJxgQsutAcTsTp79gAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAXVJREFUWAntVtFuAyEMg4r//96p63qNTQzhjtOp26S+gLQmxI4dWHu6vNlKH1y3D3rTeg2wbmDdwLqBdQPrBtYNrBsohxcSvSDlnJLySLJy0juUOKgl56P2xio02Z695WBqbtGwM3vWTON0BnNAj2JDv/FTKulxrxCN3UmGJBusoZqgq2l/06ktNvGYg489gn1I35I6gMwByBQ9rKMLS10uhG0zQw6OuOD4H8uoY+8cRSuUdP9CtS6aG0pjFScxGk/gYTDiMKdrjxwIAzy+XcKOBBIPqtPu1V2klXkN1rKZXMWYy8xgKWXWKr+1W62kHxuARFEbzASyQmIulkYSB3XlwmZ9tR8DPPEL6CeowPgpIVR73m0yLTsSu1VVjBh87TkgIcWRcr1Tn+J1R2QcH0QR/Y/8bC6/kj7AGfHPQ0AYbjsDbvEd0Jr/k4Rex53+2HAG8jsg5zPSKHW6k0wk+CkPpw+cssXf5y9nmHnTgwBEnTF5wL0ALDJrOqmNWLMAAAAASUVORK5CYII=', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAl5JREFUWAntlb9qVEEUxr+ZvbtZTRAUUVHsFCwiCKJYWmjpI1jY2fkGPoC+h62FIiJ2FrYRAxY2ioQgGI0b3ST7Z8bfmbl33cgaI6IX4c7u3Dlz5sz5vvnm7lkX125E1dh8jdgJuiHQKPCfK+CKX/+InJNc96dxhdw+Fq0UhLJj29S1eACQQFiLgzy3ONeWWselzkVp8xFzhIxDRgMqy4rljX1SnKafkrafM/+cfQG/EVNbLvbvR/kF7PM58fYzaeuJtHBTGq8CdJLNT6W5Kxk0fGAjzQiFNXzHmEDK9vmj2CQevSbfGfrZnGP4Supeznb/HjEQ9gfxXYNA6EW5/STkBFsP6Y/ZuAiBWzmxBWssDV5kgpsPwIOEPyzNX5eGy3TW7ACdC3nNCJidSL6H0BviD5Uq9KQDt8mFwuErBHp3INABYwUH0oiTuXlGu98RG49w+ktIDbmwjs+ayWeDXZMRRIEUb/KzJzJ2INS9Km3cxWfxFoPfzaHaCUywwHN7+i8woFgmIM2emr07pqSpY4RmteFSoj1raacvcgW/2yJKDJZ23zVaTvrtHvQ3V4vFmgm0z9VMAHXtFa61NQQaBYoYxvn/i2pln/y18fvcnLNqWVmQKa/ZclZyk5ms5N/hK+Oqt97WivVPqwoh0McKVLyY7AB+1afJZBr2nAbPIDwByN0zWnfyvpVs70tfOVbz4t3bl4nANGBMtZtTVzU8qWG8jUzFf2r84dS2kogkRYxUJjMZIeHNB7niy8ZHwsuTpWEWwhTYH5n5iibq2RWY9P+ucbj8nUA2P8NGgdoV+AaTnOoWJjozfwAAAABJRU5ErkJggg==', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADJJREFUWAnt0EENAAAIAzHAv2cgmODTGbil2bt4XD22L+0AAQIECBAgQIAAAQIECBAgME2IBDzy317fAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADJJREFUWAnt0EENAAAIAzHAv2cgmODTGbil2bt4XD22L+0AAQIECBAgQIAAAQIECBAgME2IBDzy317fAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADJJREFUWAnt0EENAAAIAzHAv2cgmODTGbil2bt4XD22L+0AAQIECBAgQIAAAQIECBAgME2IBDzy317fAAAAAElFTkSuQmCC', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAADJJREFUWAnt0EENAAAIAzHAv2cgmODTGbil2bt4XD22L+0AAQIECBAgQIAAAQIECBAgME2IBDzy317fAAAAAElFTkSuQmCC'];

var _ToonImages = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _dataUrls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var data = _step.value;

    var image = new Image();
    image.src = data;
    _ToonImages.push(image);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

exports.default = _ToonImages;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MMD_CAMERA_ROTZ_NODE_NAME = exports.MMD_CAMERA_ROTY_NODE_NAME = exports.MMD_CAMERA_ROTX_NODE_NAME = exports.MMD_CAMERA_NODE_NAME = exports.MMD_CAMERA_ROOT_NODE_NAME = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscenekit = __webpack_require__(0);

var _MMDNode2 = __webpack_require__(1);

var _MMDNode3 = _interopRequireDefault(_MMDNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMD_CAMERA_ROOT_NODE_NAME = exports.MMD_CAMERA_ROOT_NODE_NAME = 'MMDCameraRoot';
var MMD_CAMERA_NODE_NAME = exports.MMD_CAMERA_NODE_NAME = 'MMDCamera';
var MMD_CAMERA_ROTX_NODE_NAME = exports.MMD_CAMERA_ROTX_NODE_NAME = 'MMDCameraRotX';
var MMD_CAMERA_ROTY_NODE_NAME = exports.MMD_CAMERA_ROTY_NODE_NAME = 'MMDCameraRotY';
var MMD_CAMERA_ROTZ_NODE_NAME = exports.MMD_CAMERA_ROTZ_NODE_NAME = 'MMDCameraRotZ';

/**
 *
 * @access public
 * @extends {MMDNode}
 */

var MMDCameraNode = function (_MMDNode) {
  _inherits(MMDCameraNode, _MMDNode);

  /**
   *
   * @access public
   * @param {string} [name = MMD_CAMERA_ROOT_NODE_NAME] -
   * @constructor
   */
  function MMDCameraNode() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MMD_CAMERA_ROOT_NODE_NAME;

    _classCallCheck(this, MMDCameraNode);

    var _this = _possibleConstructorReturn(this, (MMDCameraNode.__proto__ || Object.getPrototypeOf(MMDCameraNode)).call(this));

    _this.name = name;

    /** @type {MMDNode} */
    _this.cameraNode = new _MMDNode3.default();

    var camera = new _jscenekit.SCNCamera();
    _this.cameraNode.name = MMD_CAMERA_NODE_NAME;
    _this.cameraNode.camera = camera;

    // TODO: set default values of MikuMikuDance: ex) fov
    camera.yFov = 30.0;
    camera.automaticallyAdjustsZRange = true;

    /** @type {MMDNode} */
    _this.rotYNode = new _MMDNode3.default();

    _this.rotYNode.name = MMD_CAMERA_ROTY_NODE_NAME;
    _this.addChildNode(_this.rotYNode);

    /** @type {MMDNode} */
    _this.rotXNode = new _MMDNode3.default();

    _this.rotXNode.name = MMD_CAMERA_ROTX_NODE_NAME;
    _this.rotYNode.addChildNode(_this.rotXNode);

    /** @type {MMDNode} */
    _this.rotZNode = new _MMDNode3.default();

    _this.rotZNode.name = MMD_CAMERA_ROTZ_NODE_NAME;
    _this.rotXNode.addChildNode(_this.rotZNode);

    _this.rotZNode.addChildNode(_this.cameraNode);

    var technique = new _jscenekit.SCNTechnique({
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
          inputs: {},
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
    });
    camera.technique = technique;
    return _this;
  }

  _createClass(MMDCameraNode, [{
    key: 'getCameraNode',


    /**
     * @access public
     * @returns {SCNNode} -
     */
    value: function getCameraNode() {
      return this.cameraNode;
    }

    /**
     * @access public
     * @returns {SCNCamera} -
     */

  }, {
    key: 'getCamera',
    value: function getCamera() {
      return this.cameraNode.camera;
    }
  }, {
    key: 'rotX',
    get: function get() {
      //return this.rotXNode.eulerAngles.x
      var value = this.rotXNode.rotation.w;
      if (this.rotXNode.rotation.x < 0) {
        return -value;
      }
      return value;
    },
    set: function set(newValue) {
      //const euler = this.rotXNode.eulerAngles
      //euler.x = newValue
      //this.rotXNode.eulerAngles = euler
      this.rotXNode.rotation = new _jscenekit.SCNVector4(1, 0, 0, newValue);
    }
  }, {
    key: 'rotY',
    get: function get() {
      //return this.rotYNode.eulerAngles.y
      var value = this.rotYNode.rotation.w;
      if (this.rotYNode.rotation.y < 0) {
        return -value;
      }
      return value;
    },
    set: function set(newValue) {
      //const euler = this.rotYNode.eulerAngles
      //euler.y = newValue
      //this.rotYNode.eulerAngles = euler
      this.rotYNode.rotation = new _jscenekit.SCNVector4(0, 1, 0, newValue);
    }
  }, {
    key: 'rotZ',
    get: function get() {
      //return this.rotZNode.eulerAngles.z
      var value = this.rotZNode.rotation.w;
      if (this.rotZNode.rotation.z < 0) {
        return -value;
      }
      return value;
    },
    set: function set(newValue) {
      //const euler = this.rotZNode.eulerAngles
      //euler.z = newValue
      //this.rotZNode.eulerAngles = euler
      this.rotZNode.rotation = new _jscenekit.SCNVector4(0, 0, 1, newValue);
    }
  }, {
    key: 'distance',
    get: function get() {
      return this.cameraNode.position.z;
    },
    set: function set(newValue) {
      this.cameraNode.position.z = newValue;
    }
  }, {
    key: 'angle',
    get: function get() {
      return this.cameraNode.camera.yFov;
    },
    set: function set(newValue) {
      this.cameraNode.camera.yFov = newValue;
    }
  }]);

  return MMDCameraNode;
}(_MMDNode3.default);

exports.default = MMDCameraNode;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDProgram = __webpack_require__(5);

var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _MMDIKConstraint = __webpack_require__(4);

var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _BoneNodeTypes = [_MMDNode2.default.Type.rotate, _MMDNode2.default.Type.rotateTranslate, _MMDNode2.default.Type.ik, _MMDNode2.default.Type.unknown, _MMDNode2.default.Type.ikChild, _MMDNode2.default.Type.rotateChild, _MMDNode2.default.Type.hidden, _MMDNode2.default.Type.twist, _MMDNode2.default.Type.roll];

/**
 *
 * @access public
 * @extends {MMDReader}
 */

var MMDPMDReader = function (_MMDReader) {
  _inherits(MMDPMDReader, _MMDReader);

  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDPMDReader(data, directoryPath) {
    _classCallCheck(this, MMDPMDReader);

    var isBinary = true;
    var isBigEndian = false;
    var encoding = 'sjis';

    /** @type {MMDNode} */
    var _this = _possibleConstructorReturn(this, (MMDPMDReader.__proto__ || Object.getPrototypeOf(MMDPMDReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this._workingNode = null;

    // header
    _this._pmdMagic = '';
    _this._version = 0.0;
    _this._modelName = '';
    _this._comment = '';

    // vertex data
    _this._vertexCount = 0;
    _this._vertexArray = [];
    _this._normalArray = [];
    _this._texcoordArray = [];
    _this._boneIndicesArray = [];
    _this._boneWeightsArray = [];

    // index data
    _this._indexCount = 0;
    _this._indexArray = [];

    // material data
    _this._materialCount = 0;
    _this._materialIndexCountArray = [];
    _this._materialArray = [];

    // bone data
    _this._rootBone = new _MMDNode2.default();
    _this._boneCount = 0;
    _this._boneArray = [];
    _this._boneHash = new Map();
    _this._boneInverseMatrixArray = [];

    // ik data
    _this._ikCount = 0;

    // face data
    _this._faceCount = 0;
    _this._faceNameArray = [];
    _this._faceVertexArray = [];
    _this._faceIndexArray = [];

    // display info
    _this._faceDisplayCount = 0;
    _this._boneDisplayNameCount = 0;
    //this._boneDisplayCount

    // toon texture info
    //this._textureFileNames

    // physics
    _this._physicsBodyCount = 0;
    _this._physicsBodyArray = [];

    // geometry
    _this._vertexSource = null;
    _this._normalSource = null;
    _this._texcoordSource = null;
    _this._boneIndicesSource = null;
    _this._boneWeightsSource = null;
    _this._elementArray = [];
    return _this;
  }

  _createClass(MMDPMDReader, [{
    key: '_loadPMDFile',


    /**
     * @access private
     * @returns {MMDNode} -
     */
    value: function _loadPMDFile() {
      this._workingNode = new _MMDNode2.default();

      this._readPMDHeader();
      if (this._pmdMagic !== 'Pmd') {
        throw new Error('incorrect PMD format');
      }

      // read basic data
      this._readVertex();
      this._readIndex();
      this._readMaterial();
      this._readBone();
      this._readIK();
      this._readFace();
      this._readDisplayInfo();

      // create geometry for shader
      this._createGeometry();
      this._createFaceMorph();

      // read additional data
      if (this.pos >= this.length) {
        return this._workingNode;
      }

      this._readEnglishInfo();
      if (this.pos >= this.length) {
        return this._workingNode;
      }

      this._readToonTexture();

      if (this.pos >= this.length) {
        return this._workingNode;
      }

      this._readPhysicsBody();
      this._readConstraint();

      return this._workingNode;
    }
  }, {
    key: '_readPMDHeader',
    value: function _readPMDHeader() {
      this._pmdMagic = this.readString(3);
      this._version = this.readFloat();
      this._modelName = this.readString(20);
      this._comment = this.readString(256);
    }
  }, {
    key: '_readVertex',
    value: function _readVertex() {
      var vertexCount = this.readUnsignedInt();
      this._vertexCount = vertexCount;

      var edgeArray = [];

      for (var i = 0; i < vertexCount; i++) {
        this._vertexArray.push(this.readFloat());
        this._vertexArray.push(this.readFloat());
        this._vertexArray.push(-this.readFloat());

        this._normalArray.push(this.readFloat());
        this._normalArray.push(this.readFloat());
        this._normalArray.push(-this.readFloat());

        this._texcoordArray.push(this.readFloat());
        this._texcoordArray.push(this.readFloat());

        var boneNo1 = this.readUnsignedShort();
        var boneNo2 = this.readUnsignedShort();

        var weightByte = this.readUnsignedByte();
        var weight1 = weightByte / 100.0;
        var weight2 = 1.0 - weight1;

        if (weight1 === 0.0) {
          this._boneIndicesArray.push(boneNo2);
          this._boneIndicesArray.push(boneNo1);

          this._boneWeightsArray.push(weight2);
          this._boneWeightsArray.push(weight1);
        } else {
          this._boneIndicesArray.push(boneNo1);
          this._boneIndicesArray.push(boneNo2);

          this._boneWeightsArray.push(weight1);
          this._boneWeightsArray.push(weight2);
        }

        // FIXME: use edge data for rendering
        edgeArray.push(this.readUnsignedByte());
      }
    }
  }, {
    key: '_readIndex',
    value: function _readIndex() {
      this._indexCount = this.readUnsignedInt();
      var triangles = this._indexCount / 3;

      for (var i = 0; i < triangles; i++) {
        var index1 = this.readUnsignedShort();
        var index2 = this.readUnsignedShort();
        var index3 = this.readUnsignedShort();

        // change the index order because of the coordination difference
        this._indexArray.push(index1);
        this._indexArray.push(index3);
        this._indexArray.push(index2);
      }
    }
  }, {
    key: '_readMaterial',
    value: function _readMaterial() {
      var _this2 = this;

      this._materialCount = this.readUnsignedInt();

      var _loop = function _loop(i) {
        var material = new _jscenekit.SCNMaterial();
        material.diffuse.contents = new _jscenekit.SKColor(_this2.readFloat(), _this2.readFloat(), _this2.readFloat(), _this2.readFloat());
        material.shininess = _this2.readFloat();
        material.specular.contents = new _jscenekit.SKColor(_this2.readFloat(), _this2.readFloat(), _this2.readFloat(), 1.0);
        material.emission.contents = new _jscenekit.SKColor(_this2.readFloat(), _this2.readFloat(), _this2.readFloat(), 1.0);
        material.ambient.contents = new _jscenekit.SKColor(0.0, 0.0, 0.0, 0.0);

        var toonIndex = _this2.readUnsignedByte();
        var edge = _this2.readUnsignedByte();
        var indexCount = _this2.readUnsignedInt();
        var textureFile = _this2.readString(20);
        var sphereFile = '';
        if (textureFile.indexOf('*') >= 0) {
          var files = textureFile.split('*');
          textureFile = files[0];
          sphereFile = files[1];
        }
        if (textureFile.endsWith('spa') || textureFile.endsWith('sph')) {
          sphereFile = textureFile;
          textureFile = '';
        }

        if (textureFile !== '') {
          _this2.loadTexture(textureFile).then(function (texture) {
            material.multiply.contents = texture;
            material.multiply.wrapS = _jscenekit.SCNWrapMode.repeat;
            material.multiply.wrapT = _jscenekit.SCNWrapMode.repeat;
          });
        }
        if (sphereFile !== '') {
          _this2.loadTexture(sphereFile).then(function (texture) {
            material.reflective.contents = texture;
          });
        }
        material.isDoubleSided = true;

        _this2._materialIndexCountArray.push(indexCount);
        _this2._materialArray.push(material);
      };

      for (var i = 0; i < this._materialCount; i++) {
        _loop(i);
      }
    }
  }, {
    key: '_readBone',
    value: function _readBone() {
      var boneCount = this.readUnsignedShort();
      this._boneCount = boneCount;

      var parentNoArray = [];
      var bonePositionArray = [];

      this._rootBone.position = new _jscenekit.SCNVector3(0, 0, 0);
      this._rootBone.name = 'rootBone';

      for (var i = 0; i < boneCount; i++) {
        var boneNode = new _MMDNode2.default();
        boneNode.name = this.readString(20);

        if (boneNode.name !== null) {
          var kneeName = boneNode.name.substring(0, 3);
          if (kneeName === '右ひざ' || kneeName === '左ひざ') {
            boneNode.isKnee = true;
          }
        }

        var parentNo = this.readUnsignedShort();
        parentNoArray.push(parentNo);

        var childNo = this.readUnsignedShort();
        var type = this.readUnsignedByte();
        var ikTarget = this.readUnsignedShort();

        boneNode.type = _BoneNodeTypes[type] || _MMDNode2.default.Type.unknown;

        var position = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), this.readFloat());
        bonePositionArray.push(position);
        this._boneArray.push(boneNode);
        this._boneHash.set(boneNode.name, boneNode);

        //console.log(`${i} ${boneNode.name}: ${position.x}, ${position.y}, ${position.z}`)
      }

      // set parent node
      for (var _i = 0; _i < boneCount; _i++) {
        var bone = this._boneArray[_i];
        var _parentNo = parentNoArray[_i];
        var bonePos = bonePositionArray[_i];

        if (_parentNo !== 0xFFFF) {
          this._boneArray[_parentNo].addChildNode(bone);
          var parentPos = bonePositionArray[_parentNo];
          bone.position = bonePos.sub(parentPos);

          //console.log(`parent ${this._boneArray[parentNo].name} ${parentPos.y}, bone ${bone.name} ${bonePos.y}: pos: ${bone.position.y}`)
        } else {
          this._rootBone.addChildNode(bone);
          bone.position = bonePos;
        }
      }

      // calc initial matrix
      for (var _i2 = 0; _i2 < boneCount; _i2++) {
        var _bonePos = bonePositionArray[_i2];
        //const boneName = this._boneArray[i].name
        //console.log(`inverseMatrix ${i} ${boneName}: ${-bonePos.x}, ${-bonePos.y}, ${-bonePos.z}`)
        var matrix = _jscenekit.SCNMatrix4.matrixWithTranslation(-_bonePos.x, -_bonePos.y, -_bonePos.z);
        this._boneInverseMatrixArray.push(matrix);
      }

      this._boneArray.push(this._rootBone);
      this._boneInverseMatrixArray.push(new _jscenekit.SCNMatrix4());

      this._workingNode.addChildNode(this._rootBone);
    }
  }, {
    key: '_readIK',
    value: function _readIK() {
      var ikCount = this.readUnsignedShort();
      this._ikCount = ikCount;

      this._workingNode.ikArray = [];

      for (var i = 0; i < ikCount; i++) {
        var ik = new _MMDIKConstraint2.default();

        var ikBoneNo = this.readUnsignedShort();
        var targetBoneNo = this.readUnsignedShort();
        var numLink = this.readUnsignedByte();
        var iteration = this.readUnsignedShort();
        var weight = this.readFloat();

        ik.ikBone = this._boneArray[ikBoneNo];
        ik.targetBone = this._boneArray[targetBoneNo];
        ik.iteration = iteration;
        ik.weight = weight;
        ik.boneArray = [];

        //console.log(`targetBoneNo: ${targetBoneNo} ${ik.targetBone.name}, ikBoneNo: ${ikBoneNo} ${ik.ikBone.name}`)
        for (var j = 0; j < numLink; j++) {
          var linkNo = this.readUnsignedShort();
          var bone = this._boneArray[linkNo];

          //console.log(`linkNo: ${linkNo}, ${bone.name}`)
          ik.boneArray.push(bone);
        }
        this._workingNode.ikArray.push(ik);

        // FIXME: use SceneKit IK
        //const constraint = SCNIKConstraint.inverseKinematicsConstraint(ik.boneArray[ik.boneArray.length - 1])
      }
    }

    //_calcKneeConstraint(mat) {
    //}

  }, {
    key: '_readFace',
    value: function _readFace() {
      this._faceCount = this.readUnsignedShort();
      var zeroArray = [];
      zeroArray.length = this._vertexArray.length;
      zeroArray.fill(0);

      // read base face
      if (this._faceCount > 0) {
        var baseName = this.readString(20); // must be 'base'
        var baseFaceVertex = zeroArray.slice();

        var baseNumVertices = this.readUnsignedInt();
        var baseType = this.readUnsignedByte();

        for (var i = 0; i < baseNumVertices; i++) {
          var index = this.readUnsignedInt();
          this._faceIndexArray.push(index);

          var vertexIndex = index * 3;
          var x = this.readFloat();
          var y = this.readFloat();
          var z = -this.readFloat();

          baseFaceVertex[vertexIndex + 0] = x;
          baseFaceVertex[vertexIndex + 1] = y;
          baseFaceVertex[vertexIndex + 2] = z;
        }
        this._faceNameArray.push(baseName);
        this._faceVertexArray.push(baseFaceVertex);

        for (var _i3 = 1; _i3 < this._faceCount; _i3++) {
          var name = this.readString(20);
          var faceVertex = zeroArray.slice();
          //console.log(`faceName: ${name}`)

          var numVertices = this.readUnsignedInt();

          // 0: base, 1: eyebrows, 2: eyes, 3: lips, 4: etc
          var type = this.readUnsignedByte();

          for (var j = 0; j < numVertices; j++) {
            var _index = this._faceIndexArray[this.readUnsignedInt()];
            var _vertexIndex = _index * 3;
            var _x = this.readFloat();
            var _y = this.readFloat();
            var _z = -this.readFloat();

            faceVertex[_vertexIndex + 0] = _x;
            faceVertex[_vertexIndex + 1] = _y;
            faceVertex[_vertexIndex + 2] = _z;
          }

          this._faceNameArray.push(name);
          this._faceVertexArray.push(faceVertex);
        }
      }
    }
  }, {
    key: '_createFaceMorph',
    value: function _createFaceMorph() {
      var morpher = new _jscenekit.SCNMorpher();
      morpher.calculationMode = _jscenekit.SCNMorpherCalculationMode.additive;

      for (var i = 0; i < this._faceCount; i++) {
        var faceVertexData = this._faceVertexArray[i];
        var faceVertexSource = new _jscenekit.SCNGeometrySource(faceVertexData, // data
        _jscenekit.SCNGeometrySource.Semantic.vertex, // semantic
        this._vertexCount, // vectorCount
        true, // usesFloatComponents
        3, // componentsPerVector
        4, // bytesPerComponent
        0, // dataOffset
        12 // dataStride
        );

        var faceGeometry = new _jscenekit.SCNGeometry([faceVertexSource], []);
        faceGeometry.name = this._faceNameArray[i];

        morpher.targets.push(faceGeometry);
        morpher._weights.push(0);
      }
      var geometryNode = this._workingNode.childNodeWithName('Geometry', true);

      if (this._faceCount > 0) {
        geometryNode.morpher = morpher;
      }

      this._workingNode.geometryMorpher = morpher;
    }
  }, {
    key: '_readDisplayInfo',
    value: function _readDisplayInfo() {
      // read face display info
      var faceDisplayCount = this.readUnsignedByte();
      this._faceDisplayCount = faceDisplayCount;
      for (var i = 0; i < faceDisplayCount; i++) {
        var index = this.readUnsignedShort();
        // just ignore data
      }

      // read bone display name
      var boneDisplayNameCount = this.readUnsignedByte();
      this._boneDisplayNameCount = boneDisplayNameCount;
      for (var _i4 = 0; _i4 < boneDisplayNameCount; _i4++) {
        var name = this.readString(50);
        // just ignore data
      }

      // read bone display info
      var boneDisplayCount = this.readUnsignedInt();
      //this._boneDisplayCount = boneDisplayCount
      for (var _i5 = 0; _i5 < boneDisplayCount; _i5++) {
        var _index2 = this.readUnsignedShort();
        var frameIndex = this.readUnsignedByte();
      }
    }
  }, {
    key: '_readEnglishInfo',
    value: function _readEnglishInfo() {
      // read english
      var englishCompatibility = this.readUnsignedByte();

      // read english header
      var englishHeaderName = this.readString(20);
      var englishComment = this.readString(256);

      // read english bone name
      for (var i = 0; i < this._boneCount; i++) {
        var englishBoneName = this.readString(20);
      }

      // read english face name
      for (var _i6 = 0; _i6 < this._faceDisplayCount; _i6++) {
        var englishFaceName = this.readString(20);
      }

      // read english bone name
      for (var _i7 = 0; _i7 < this._boneDisplayNameCount; _i7++) {
        var englishBoneDisplayName = this.readString(50);
      }
    }
  }, {
    key: '_readToonTexture',
    value: function _readToonTexture() {
      for (var i = 0; i < 10; i++) {
        var textureFileName = this.readString(100);
      }
    }
  }, {
    key: '_readPhysicsBody',
    value: function _readPhysicsBody() {
      var physicsBodyCount = this.readUnsignedInt();
      this._physicsBodyCount = physicsBodyCount;
      var gravity = new _jscenekit.SCNPhysicsField();

      for (var i = 0; i < physicsBodyCount; i++) {
        var name = this.readString(20);
        var boneIndex = this.readUnsignedShort();
        var groupIndex = this.readUnsignedByte();
        var groupTarget = this.readUnsignedShort();
        var shapeType = this.readUnsignedByte();
        var dx = this.readFloat();
        var dy = this.readFloat();
        var dz = this.readFloat();
        var posX = this.readFloat();
        var posY = this.readFloat();
        var posZ = -this.readFloat();
        var rotX = this.readFloat();
        var rotY = this.readFloat();
        var rotZ = -this.readFloat();
        var weight = this.readFloat();
        var positionDim = this.readFloat();
        var rotateDim = this.readFloat();
        var recoil = this.readFloat();
        var friction = this.readFloat();
        var type = this.readUnsignedByte();

        var bodyType = null;
        if (type === 0) {
          bodyType = _jscenekit.SCNPhysicsBodyType.kinematic;
        } else if (type === 1) {
          bodyType = _jscenekit.SCNPhysicsBodyType.dynamic;
        } else if (type === 2) {
          bodyType = _jscenekit.SCNPhysicsBodyType.dynamic;
        }
        bodyType = _jscenekit.SCNPhysicsBodyType.kinematic; // for debug

        var shape = null;
        if (shapeType === 0) {
          shape = new _jscenekit.SCNSphere(dx);
        } else if (shapeType === 1) {
          shape = new _jscenekit.SCNBox(dx, dy, dz, 0);
        } else if (shapeType === 2) {
          shape = new _jscenekit.SCNCapsule(dx, dy);
        } else {
          throw new Error('unknown physics body shape: ' + shapeType);
        }

        var body = new _jscenekit.SCNPhysicsBody(bodyType, new _jscenekit.SCNPhysicsShape(shape, null));
        body.isAffectedByGravity = true;
        body.mass = weight;
        body.friction = friction;
        body.rollingFriction = rotateDim;
        body.collisionBitMask = groupTarget;
        body.restitution = recoil;
        body.usesDefaultMomentOfInertia = true;

        if (boneIndex !== 0xFFFF) {
          var bone = this._boneArray[boneIndex];
          bone.physicsBody = body;
        } else {
          // do nothing
        }
        this._physicsBodyArray.push(body);
      }
    }
  }, {
    key: '_readConstraint',
    value: function _readConstraint() {
      var constraintCount = this.readUnsignedInt();

      for (var i = 0; i < constraintCount; i++) {
        var name = this.readString(20);
        var bodyANo = this.readUnsignedInt();
        var bodyBNo = this.readUnsignedInt();

        var bodyA = this._physicsBodyArray[bodyANo];
        var bodyB = this._physicsBodyArray[bodyBNo];

        var pos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var rot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var pos1 = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var pos2 = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var rot1 = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var rot2 = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var spring_pos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var spring_rot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        // TODO: create 6dof constraint
        //constraint = ...

        //this._workingNode.physicsBehaviors.push(constraint)
      }
    }
  }, {
    key: '_createGeometry',
    value: function _createGeometry() {
      var vertexData = this._vertexArray;
      var normalData = this._normalArray;
      var texcoordData = this._texcoordArray;
      var boneIndicesData = this._boneIndicesArray;
      var boneWeightsData = this._boneWeightsArray;
      var indexData = this._indexArray;

      this._vertexSource = new _jscenekit.SCNGeometrySource(vertexData, // data
      _jscenekit.SCNGeometrySource.Semantic.vertex, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );

      this._normalSource = new _jscenekit.SCNGeometrySource(normalData, // data
      _jscenekit.SCNGeometrySource.Semantic.normal, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );

      this._texcoordSource = new _jscenekit.SCNGeometrySource(texcoordData, // data
      _jscenekit.SCNGeometrySource.Semantic.texcoord, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
      );

      this._boneIndicesSource = new _jscenekit.SCNGeometrySource(boneIndicesData, // data
      _jscenekit.SCNGeometrySource.Semantic.boneIndices, // semantic
      this._vertexCount, // vectorCount
      false, // usesFloatComponents
      2, // componentsPerVector
      2, // bytesPerComponent
      0, // dataOffset
      4 // dataStride
      );

      this._boneWeightsSource = new _jscenekit.SCNGeometrySource(boneWeightsData, // data
      _jscenekit.SCNGeometrySource.Semantic.boneWeights, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
      );

      var indexPos = 0;
      for (var i = 0; i < this._materialCount; i++) {
        var count = this._materialIndexCountArray[i];
        var triangles = count / 3;
        //const length = count * 2
        var data = indexData.slice(indexPos, indexPos + count);
        var element = new _jscenekit.SCNGeometryElement(data, // data
        _jscenekit.SCNGeometryPrimitiveType.triangles, // primitiveType
        triangles, // primitiveCount
        2 // bytesPerIndex
        );
        this._elementArray.push(element);
        indexPos += count;
      }

      //const program = new MMDProgram()
      var geometry = new _jscenekit.SCNGeometry([this._vertexSource, this._normalSource, this._texcoordSource], this._elementArray);
      geometry.materials = this._materialArray;
      geometry.name = 'Geometry';

      var geometryNode = new _jscenekit.SCNNode(geometry);
      geometryNode.name = 'Geometry';

      if (this._vertexCount > 0 && this._indexCount > 0) {
        var skinner = new _jscenekit.SCNSkinner(geometry, // baseGeometry
        this._boneArray, // bones
        this._boneInverseMatrixArray, // boneInverseBindTransforms
        this._boneWeightsSource, // boneWeights
        this._boneIndicesSource // boneIndices
        );
        geometryNode.skinner = skinner;
        geometryNode.skinner.skeleton = this._rootBone;
      }
      geometryNode.castsShadow = true;

      this._workingNode.name = this._modelName;
      this._workingNode.castsShadow = true;
      this._workingNode.addChildNode(geometryNode);

      // FIXME: delete code below
      this._workingNode.boneArray = this._boneArray;
      this._workingNode.boneInverseMatrixArray = this._boneInverseMatrixArray;
      this._workingNode.vertexCount = this._vertexCount;
      this._workingNode.vertexArray = this._vertexArray;
      this._workingNode.normalArray = this._normalArray;
      this._workingNode.texcoordArray = this._texcoordArray;
      this._workingNode.boneIndicesArray = this._boneIndicesArray;
      this._workingNode.boneWeightsArray = this._boneWeightsArray;
      this._workingNode.indexCount = this._indexCount;
      this._workingNode.indexArray = this._indexArray;
      this._workingNode.materialCount = this._materialCount;
      this._workingNode.materialArray = this._materialArray;
      this._workingNode.materialIndexCountArray = this._materialIndexCountArray;
      this._workingNode.rootBone = this._rootBone;
    }
  }], [{
    key: 'getNode',
    value: function getNode(data, directoryPath) {
      var reader = new MMDPMDReader(data, directoryPath);
      return reader._loadPMDFile();
    }
  }]);

  return MMDPMDReader;
}(_MMDReader3.default);

exports.default = MMDPMDReader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _MMDSceneSource = __webpack_require__(3);

var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

var _MMDCameraNode = __webpack_require__(8);

var _MMDCameraNode2 = _interopRequireDefault(_MMDCameraNode);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @access private
 */
var MMDVMDInfo =
/**
 * @access public
 * @constructor
 * @param {MMDPMMReader} reader -
 */
function MMDVMDInfo(reader) {
  _classCallCheck(this, MMDVMDInfo);

  this.frameNo = reader.readUnsignedInt();
  this.prev = reader.readUnsignedInt();
  this.next = reader.readUnsignedInt();

  var interpolation = [];
  for (var i = 0; i < 16; i++) {
    interpolation.push(reader.readUnsignedByte() / 127.0);
  }

  this.posX = reader.readFloat();
  this.posY = reader.readFloat();
  this.posZ = -reader.readFloat();
  var quat = new _jscenekit.SCNVector4(-reader.readFloat(), -reader.readFloat(), reader.readFloat(), reader.readFloat());
  this.rotate = quat.normalize();

  this.timingX = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[0], interpolation[1], interpolation[2], interpolation[3]);
  this.timingY = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[4], interpolation[5], interpolation[6], interpolation[7]);
  this.timingZ = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[8], interpolation[9], interpolation[10], interpolation[11]);
  this.timingRot = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[12], interpolation[13], interpolation[14], interpolation[15]);

  if (reader.version > 1) {
    reader.skip(1); // unknown
  }

  var isSelected = reader.readUnsignedByte();
};

/**
 * @access private
 */


var MMDVMDFaceInfo =
/**
 * @access public
 * @constructor
 * @param {MMDPMMReader} reader -
 */
function MMDVMDFaceInfo(reader) {
  _classCallCheck(this, MMDVMDFaceInfo);

  this.frameNo = reader.readUnsignedInt();
  this.prev = reader.readUnsignedInt();
  this.next = reader.readUnsignedInt();

  this.weight = reader.readFloat();

  var selected = reader.readUnsignedByte();
};

/**
 * @access private
 */


var MMDVMDCameraInfo =
/**
 * @access public
 * @constructor
 * @param {MMDPMMReader} reader -
 */
function MMDVMDCameraInfo(reader) {
  _classCallCheck(this, MMDVMDCameraInfo);

  this.frameNo = reader.readUnsignedInt();
  this.prev = reader.readUnsignedInt();
  this.next = reader.readUnsignedInt();

  this.distance = -reader.readFloat();
  this.posX = reader.readFloat();
  this.posY = reader.readFloat();
  this.posZ = reader.readFloat();
  this.rotX = reader.readFloat();
  this.rotY = reader.readFloat();
  this.rotZ = reader.readFloat();

  var followModelIndex = -1;
  var followBoneIndex = 0;

  if (reader.version > 1) {
    followModelIndex = reader.readInt();
    followBoneIndex = reader.readUnsignedInt();
  }

  if (followModelIndex >= 0) {
    //const model = reader.models[followModelIndex]
  }

  var interpolation = [];
  for (var i = 0; i < 24; i++) {
    interpolation.push(reader.readUnsignedByte() / 127.0);
  }

  this.timingX = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[0], interpolation[1], interpolation[2], interpolation[3]);
  this.timingY = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[4], interpolation[5], interpolation[6], interpolation[7]);
  this.timingZ = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[8], interpolation[9], interpolation[10], interpolation[11]);
  this.timingRot = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[12], interpolation[13], interpolation[14], interpolation[15]);
  this.timingDistance = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[16], interpolation[17], interpolation[18], interpolation[19]);
  this.timingAngle = _jscenekit.CAMediaTimingFunction.functionWithControlPoints(interpolation[20], interpolation[21], interpolation[22], interpolation[23]);

  var perspective = reader.readUnsignedByte();
  this.useOrtho = perspective !== 0;
  this.angle = reader.readInt();

  var isSelected = reader.readUnsignedByte();
};

/**
 * @access private
 */


var MMDVMDLightInfo =
/**
 * @access public
 * @constructor
 * @param {MMDPMMReader} reader -
 */
function MMDVMDLightInfo(reader) {
  _classCallCheck(this, MMDVMDLightInfo);

  this.frameNo = reader.readUnsignedInt();
  this.prev = reader.readUnsignedInt();
  this.next = reader.readUnsignedInt();

  var color = new _jscenekit.SKColor(reader.readFloat(), reader.readFloat(), reader.readFloat(), 1.0);
  this.color = color;

  var rotX = -reader.readFloat();
  var rotY = -reader.readFloat();
  var rotZ = reader.readFloat();

  var cosX = Math.cos(rotX / 2);
  var cosY = Math.cos(rotY / 2);
  var cosZ = Math.cos(rotZ / 2);
  var sinX = Math.sin(rotX / 2);
  var sinY = Math.sin(rotY / 2);
  var sinZ = Math.sin(rotZ / 2);

  var quat = new _jscenekit.SCNVector4();
  quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ;
  quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ;
  quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
  quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ;

  this.direction = quat.normalize();

  var isSelected = reader.readUnsignedByte();
};

/**
 * @access private
 */


var MMDVMDAccessoryInfo =
/**
 * @access public
 * @constructor
 * @param {MMDPMMReader} reader -
 */
function MMDVMDAccessoryInfo(reader) {
  _classCallCheck(this, MMDVMDAccessoryInfo);

  this.frameNo = reader.readUnsignedInt();
  this.prev = reader.readUnsignedInt();
  this.next = reader.readUnsignedInt();

  var visibility = reader.readUnsignedByte();
  var isVisible = visibility & 0x01;
  var opacity = (100 - (visibility >> 1)) * 0.01;

  this.isHidden = isVisible === 0;
  this.opacity = opacity;

  var modelIndex = reader.readUnsignedInt();
  if (modelIndex === 0xFFFFFFFF) {
    modelIndex = -1;
  }
  var boneIndex = reader.readUnsignedInt();

  var parentNode = null;
  if (modelIndex >= 0 && modelIndex < reader.models.length) {
    var parentModel = reader.models[modelIndex];

    if (boneIndex < parentModel.boneArray.length) {
      var boneName = parentModel.boneArray[boneIndex].name;
      if (boneName === null) {
        throw new Error('bone.name === null');
      }
      parentNode = parentModel.childNodeWithNameRecursively(boneName, true);
      if (parentNode === null) {
        throw new Error('parentNode === null');
      }
    }
  }
  this.parent = parentNode;

  var pos = new _jscenekit.SCNVector3(reader.readFloat(), reader.readFloat(), reader.readFloat());
  this.position = pos;

  var rotX = -reader.readFloat();
  var rotY = -reader.readFloat();
  var rotZ = reader.readFloat();

  var cosX = Math.cos(rotX / 2);
  var cosY = Math.cos(rotY / 2);
  var cosZ = Math.cos(rotZ / 2);
  var sinX = Math.sin(rotX / 2);
  var sinY = Math.sin(rotY / 2);
  var sinZ = Math.sin(rotZ / 2);

  var quat = new _jscenekit.SCNVector4();
  quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ;
  quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ;
  quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
  quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ;

  this.rotation = quat.normalize();
  var scale = reader.readFloat() * 10.0;
  this.scale = new _jscenekit.SCNVector3(scale, scale, scale);

  var flag = reader.readUnsignedByte();
  if ((flag & 0x01) === 0) {
    this.additive = _jscenekit.SCNBlendMode.add;
  } else {
    this.additive = _jscenekit.SCNBlendMode.alpha;
  }
  var isSelected = reader.readUnsignedByte();

  console.log('=====');
  console.log('frameNo: ' + this.frameNo);
  console.log('prev: ' + this.prev);
  console.log('next: ' + this.next);
  console.log('visibility: ' + visibility);
  console.log('modelIndex: ' + modelIndex);
  console.log('boneIndex: ' + boneIndex);
};

var _userFilePathPattern = new RegExp(/\\UserFile\\(.*)$/);

/**
 *
 * @access public
 * @extends {MMDReader}
 */

var MMDPMMReader = function (_MMDReader) {
  _inherits(MMDPMMReader, _MMDReader);

  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDPMMReader(data, directoryPath) {
    _classCallCheck(this, MMDPMMReader);

    var isBinary = true;
    var isBigEndian = false;
    var encoding = 'sjis';

    /** @type {MMDScene} */
    var _this = _possibleConstructorReturn(this, (MMDPMMReader.__proto__ || Object.getPrototypeOf(MMDPMMReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this._workingNode = null;

    // header
    _this._pmmMagic = '';
    _this.version = 0.0;

    _this.fps = 30.0;

    _this._boneCount = 0;
    _this._boneNameArray = null;

    _this._faceCount = 0;
    _this._faceNameArray = null;

    _this._ikCount = 0;
    _this._ikIndexArray = null;

    _this._parentCount = 0;

    _this._accessoryCount = 0;
    _this._accessoryNameCount = null;
    _this._accessories = [];

    _this._modelCount = 0;
    _this.models = [];
    _this._workingModel = null;
    _this._motions = [];

    _this._substituteModels = null;

    // for animation
    _this._frameLength = 0;
    _this._workingAnimationGroup = null;
    _this._animationHash = null;
    _this._faceAnimationHash = null;

    _this._initialBoneFrame = null;
    _this._boneFrameHash = null;
    _this._initialFaceFrame = null;
    _this._faceFrameHash = null;

    // for accessory animation
    _this._initialAccessoryFrame = null;
    _this._accessoryFrameHash = null;
    _this._accessoryMotions = [];

    // for camera animation
    _this._workingCameraAnimationGroup = null;
    _this._initialCameraFrame = null;
    _this._cameraFrameHash = null;

    // for light animation
    _this._workingLightAnimationGroup = null;
    _this._initialLightFrame = null;
    _this._lightFrameHash = null;
    return _this;
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @param {MMDNode[]} [models = null] -
   * @param {CAAnimation[]} [motions = null] -
   * @returns {SCNScene} -
   */


  _createClass(MMDPMMReader, [{
    key: 'loadPMMFile',


    /**
     * @access private
     * @param {MMDNode[]} [models = null] -
     * @param {CAAnimation[]} [motions = null] -
     * @returns {?SCNScene} -
     */
    value: function loadPMMFile() {
      var _this2 = this;

      var models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var motions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // initialize working variables
      this._workingScene = new _jscenekit.SCNScene();
      this._workingScene._dataLoadedPromise = new Promise(function (resolve, reject) {
        _this2._resolveFunction = resolve;
        _this2._rejectFunction = reject;
      });

      this._pmmMagic = '';
      this.version = 0;

      this._substituteModels = models;
      if (this._substituteModels === null) {
        this._substituteModels = [];
      }

      // read contents of the file
      this._readPMMHeader();
      if (this.version !== 1 && this.version !== 2) {
        // unknown file format
        console.error('unknown file format: ' + this._pmmMagic);
        return null;
      }

      this._readModels().then(function () {
        _this2._readCameras();
        _this2._readLights();
        return _this2._readAccessories();
      }).then(function () {
        _this2._readSettings();

        _this2._setupScene();

        _this2._resolveFunction();
      });

      return this._workingScene;
    }

    /**
     * read PMD header data
     * @access private
     */

  }, {
    key: '_readPMMHeader',
    value: function _readPMMHeader() {
      this._pmmMagic = this.readString(30);

      if (this._pmmMagic === 'Polygon Movie maker 0001') {
        this.version = 1;
      } else if (this._pmmMagic === 'Polygon Movie maker 0002') {
        this.version = 2;
      }

      var movieWidth = this.readInt();
      var movieHeight = this.readInt();
      var frameWindowWidth = this.readInt();
      var viewAngle = this.readFloat();
      var isCameraMode = this.readUnsignedByte();

      this.skip(6); // skip unknown bytes

      if (this.version === 2) {
        this.skip(1); // unknown data
      }
    }

    /**
     * @access private
     */

  }, {
    key: '_readModels',
    value: function _readModels() {
      var _this3 = this;

      this._modelCount = this.readUnsignedByte();

      if (this.version === 1) {
        for (var i = 0; i < this._modelCount; i++) {
          var modelName = this.readString(20);
          console.log('modelName: ' + modelName);
        }
      }

      if (this._modelCount > this._substituteModels.length) {
        for (var _i = 0; _i < this._modelCount - this._substituteModels.length; _i++) {
          this._substituteModels.push(null);
        }
      }

      var prevPromise = Promise.resolve();

      var _loop = function _loop(modelNo) {
        prevPromise = prevPromise.then(function () {
          if (_this3._substituteModels[modelNo]) {
            var model = _this3._substituteModels[modelNo];

            // just skip data
            _this3.skip(1);
            if (_this3.version === 1) {
              _this3.skip(20);
            } else {
              var a = _this3._readPascalString();
              var b = _this3._readPascalString();
            }
            _this3.skip(257);
            return model;
          }

          var no = _this3.readUnsignedByte();
          if (_this3.version === 1) {
            var _modelName = _this3.readString(20);
          } else {
            var _modelName2 = _this3._readPascalString();
            var englishName = _this3._readPascalString();
          }

          var filePath = _this3.readString(256);
          _this3.skip(1); // unknown flag

          var paths = filePath.match(_userFilePathPattern);
          if (paths) {
            var replaced = paths[1].replace(/\\/g, '/');
            filePath = _this3.directoryPath + '/' + replaced;
          } else {
            filePath = filePath.replace(/\\/g, '/');
          }

          var modelSceneSource = _MMDSceneSource2.default.sceneSourceWithURLOptions(filePath);
          return modelSceneSource.didLoad.then(function () {
            var newModel = modelSceneSource.getModel();
            return newModel.didLoad.then(function () {
              return newModel;
            }).catch(function (error) {
              console.error('cannot get model data: ' + filePath + ': ' + error);
              return Promise.reject(error);
            });
          }).catch(function (error) {
            console.error('cannot read file: ' + filePath + ': ' + error);
            return Promise.reject(error);
          });
        }).then(function (model) {
          _this3._workingModel = model;

          if (_this3.version === 1) {
            _this3._boneCount = model.boneArray.length - 1;
            _this3._boneNameArray = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = model.boneArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var bone = _step.value;

                _this3._boneNameArray.push(bone.name);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this3._faceCount = model.geometryMorpher.targets.length;
            _this3._faceNameArray = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = model.geometryMorpher.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var face = _step2.value;

                _this3._faceNameArray.push(face.name);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this3._ikCount = model.ikArray.length;
            _this3._ikIndexArray = [];
            // TODO: set ikIndexArray

            _this3._parentCount = 0;
          } else {
            _this3._readBone();
            _this3._readFace();
            _this3._readIK();
            _this3._readParent();

            _this3.skip(1); // unknown flag
          }

          var visible = _this3.readUnsignedByte();
          var selectedBone = _this3.readUnsignedInt();
          var morph_eyebrows = _this3.readUnsignedInt();
          var morph_eyes = _this3.readUnsignedInt();
          var morph_lips = _this3.readUnsignedInt();
          var morph_etc = _this3.readUnsignedInt();

          var frameCount = _this3.readUnsignedByte();
          for (var _i2 = 0; _i2 < frameCount; _i2++) {
            _this3.readUnsignedByte();
          }

          _this3.skip(4); // unknown data

          // read motions
          var lastFrame = _this3.readUnsignedInt();

          _this3._workingAnimationGroup = new _jscenekit.CAAnimationGroup();
          _this3._workingAnimationGroup.animations = [];

          _this3._animationHash = {};
          _this3._faceAnimationHash = {};

          _this3._frameLength = 0;

          _this3._readBoneFrames();
          _this3._readFaceFrames();
          _this3._readIKFrames();

          _this3._createAnimations();

          _this3._readBoneStatus();
          _this3._readFaceStatus();
          _this3._readIKStatus();
          _this3._readParentStatus();

          if (_this3.version > 1) {
            _this3.skip(7); // unknown data
          }

          _this3.models.push(model);
        });
      };

      for (var modelNo = 0; modelNo < this._modelCount; modelNo++) {
        _loop(modelNo);
      }
      return prevPromise;
    }
  }, {
    key: '_readBone',
    value: function _readBone() {
      this._boneCount = this.readUnsignedInt();

      this._boneNameArray = [];
      for (var i = 0; i < this._boneCount; i++) {
        this._boneNameArray.push(this._readPascalString());
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._boneNameArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var boneName = _step3.value;

          console.log('    bone: ' + boneName);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: '_readFace',
    value: function _readFace() {
      this._faceCount = this.readUnsignedInt();
      this._faceNameArray = [];
      for (var i = 0; i < this._faceCount; i++) {
        this._faceNameArray.push(this._readPascalString());
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._faceNameArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var faceName = _step4.value;

          console.log('    face: ' + faceName);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: '_readIK',
    value: function _readIK() {
      this._ikCount = this.readUnsignedInt();
      this._ikIndexArray = [];
      for (var i = 0; i < this._ikCount; i++) {
        this._ikIndexArray.push(this.readUnsignedInt());
      }
    }
  }, {
    key: '_readParent',
    value: function _readParent() {
      this._parentCount = this.readUnsignedInt();
      for (var i = 0; i < this._parentCount; i++) {
        this.readUnsignedInt();
      }
    }

    // MARK: - Bone Frame

  }, {
    key: '_readBoneFrames',
    value: function _readBoneFrames() {
      this._initialBoneFrame = [];
      this._boneFrameHash = {};

      for (var i = 0; i < this._boneCount; i++) {
        this._readOneBoneFrame(false);
      }

      var boneFrameCount = this.readUnsignedInt();
      for (var _i3 = 0; _i3 < boneFrameCount; _i3++) {
        this._readOneBoneFrame();
      }

      // create animation data
      for (var index = 0; index < this._boneCount; index++) {
        var boneName = this._boneNameArray[index];

        console.log('===== bone animation: ' + boneName + ' =====');

        var posXMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.x');
        var posYMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.y');
        var posZMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.z');
        var rotMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.quaternion');

        posXMotion.values = [];
        posYMotion.values = [];
        posZMotion.values = [];
        rotMotion.values = [];

        posXMotion.keyTimes = [];
        posYMotion.keyTimes = [];
        posZMotion.keyTimes = [];
        rotMotion.keyTimes = [];

        posXMotion.timingFunctions = [];
        posYMotion.timingFunctions = [];
        posZMotion.timingFunctions = [];
        rotMotion.timingFunctions = [];

        this._animationHash['posX:' + boneName] = posXMotion;
        this._animationHash['posY:' + boneName] = posYMotion;
        this._animationHash['posZ:' + boneName] = posZMotion;
        this._animationHash['rot:' + boneName] = rotMotion;

        this._addMotionRecursive(this._initialBoneFrame[index], posXMotion, posYMotion, posZMotion, rotMotion);
      }
    }

    /**
     * @access private
     * @param {MMDVMDInfo} info -
     * @param {CAKeyframeAnimation} posXMotion -
     * @param {CAKeyframeAnimation} posYMotion -
     * @param {CAKeyframeAnimation} posZMotion -
     * @param {CAKeyframeAnimation} rotMotion -
     * @returns {void}
     */

  }, {
    key: '_addMotionRecursive',
    value: function _addMotionRecursive(info, posXMotion, posYMotion, posZMotion, rotMotion) {
      var motion = info;
      while (motion) {
        var frameIndex = posXMotion.keyTimes.length - 1;

        // the frame number mihgt not be sorted
        while (frameIndex >= 0) {
          var k = posXMotion.keyTimes[frameIndex];
          if (k < motion.frameNo) {
            break;
          }

          frameIndex -= 1;
        }
        frameIndex += 1;

        if (motion.frameNo > this._frameLength) {
          this._frameLength = motion.frameNo;
        }

        posXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        posYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        posZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        rotMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);

        posXMotion.timingFunctions.splice(frameIndex, 0, motion.timingX);
        posYMotion.timingFunctions.splice(frameIndex, 0, motion.timingY);
        posZMotion.timingFunctions.splice(frameIndex, 0, motion.timingZ);
        rotMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot);

        posXMotion.values.splice(frameIndex, 0, motion.posX);
        posYMotion.values.splice(frameIndex, 0, motion.posY);
        posZMotion.values.splice(frameIndex, 0, motion.posZ);
        rotMotion.values.splice(frameIndex, 0, motion.rotate);

        console.log('frameNo: ' + motion.frameNo);
        console.log('pos: ' + motion.posX + ', ' + motion.posY + ', ' + motion.posZ);
        console.log('rot: ' + motion.rotate);

        if (motion.next <= 0) {
          break;
        }

        var _motion = this._boneFrameHash[motion.next];
        if (!_motion) {
          console.error('error: the frame index(' + motion.next + ') does not exist');
        }
        motion = _motion;
      }
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneBoneFrame',
    value: function _readOneBoneFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = 0;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }

      var vmdInfo = new MMDVMDInfo(this);
      if (hasIndex) {
        this._boneFrameHash[index] = vmdInfo;
      } else {
        this._initialBoneFrame.push(vmdInfo);
      }
    }

    // MARK: - Face Frame

  }, {
    key: '_readFaceFrames',
    value: function _readFaceFrames() {
      this._initialFaceFrame = [];
      this._faceFrameHash = {};

      console.log('faceCount: ' + this._faceCount);
      for (var i = 0; i < this._faceCount; i++) {
        this._readOneFaceFrame(false);
      }
      var faceFrameCount = this.readUnsignedInt();
      console.log('faceFrameCount: ' + faceFrameCount);
      for (var _i4 = 0; _i4 < faceFrameCount; _i4++) {
        this._readOneFaceFrame();
      }

      // create animation data
      for (var index = 0; index < this._faceCount; index++) {
        var faceName = this._faceNameArray[index];

        var faceMotion = new _jscenekit.CAKeyframeAnimation('morpher.weights.' + faceName);
        faceMotion.values = [];
        faceMotion.keyTimes = [];
        faceMotion.timingFunctions = [];

        this._faceAnimationHash[faceName] = faceMotion;

        this._addFaceMotionRecursive(this._initialFaceFrame[index], faceMotion);
      }
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneFaceFrame',
    value: function _readOneFaceFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = 0;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }
      var faceInfo = new MMDVMDFaceInfo(this);
      if (hasIndex) {
        this._faceFrameHash[index] = faceInfo;
      } else {
        this._initialFaceFrame.push(faceInfo);
      }
    }

    /**
     * @access private
     * @param {MMDVMDFaceInfo} info -
     * @param {CAKeyframeAnimation} faceMotion -
     * @returns {void}
     */

  }, {
    key: '_addFaceMotionRecursive',
    value: function _addFaceMotionRecursive(info, faceMotion) {
      var motion = info;
      while (motion) {
        var frameIndex = faceMotion.keyTimes.length - 1;

        // the frame number might not be sorted.
        while (frameIndex >= 0) {
          var k = faceMotion.keyTimes[frameIndex];
          if (k < motion.frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        if (motion.frameNo > this._frameLength) {
          this._frameLength = motion.frameNo;
        }
        var timingFunc = _jscenekit.CAMediaTimingFunction.functionWithName(_jscenekit.kCAMediaTimingFunctionLinear);

        faceMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        faceMotion.timingFunctions.splice(frameIndex, 0, timingFunc);
        faceMotion.values.splice(frameIndex, 0, motion.weight);

        if (motion.next <= 0) {
          break;
        }

        var _motion = this._faceFrameHash[motion.next];
        if (!_motion) {
          console.error('error: the face frame index(' + motion.next + ') does not exist.');
        }
        motion = _motion;
      }
    }

    // MARK: - IK Frame

  }, {
    key: '_readIKFrames',
    value: function _readIKFrames() {
      this._readOneIKFrame(false);

      var boneIKCount = this.readUnsignedInt();
      for (var i = 0; i < boneIKCount; i++) {
        this._readOneIKFrame();
      }
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneIKFrame',
    value: function _readOneIKFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = 0;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }
      var frameNo = this.readUnsignedInt();
      var prev = this.readUnsignedInt();
      var next = this.readUnsignedInt();

      var isVisible = this.readUnsignedByte();
      for (var i = 0; i < this._ikCount; i++) {
        var isEnable = this.readUnsignedByte();
      }

      // If the version is 1.0, parentCount is 0.
      for (var _i5 = 0; _i5 < this._parentCount; _i5++) {
        var modelIndex = this.readUnsignedInt();
        var boneIndex = this.readUnsignedInt();
      }

      var isSelected = this.readUnsignedByte();
    }

    // MARK: - Create Animation

  }, {
    key: '_createAnimations',
    value: function _createAnimations() {
      var duration = this._frameLength / this.fps;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Object.keys(this._animationHash)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var name = _step5.value;

          var motion = this._animationHash[name];
          var motionLength = motion.keyTimes[motion.keyTimes.length - 1];

          for (var num = 0; num < motion.keyTimes.length; num++) {
            var keyTime = motion.keyTimes[num] / motionLength;
            motion.keyTimes[num] = keyTime;
          }

          motion.duration = motionLength / this.fps;
          motion.usesSceneTimeBase = false;
          motion.isRemovedOnCompletion = false;
          motion.fillMode = _jscenekit.kCAFillModeForwards;

          if (motion.keyTimes.length === 1) {
            motion.repeatCount = Infinity;
          }

          this._workingAnimationGroup.animations.push(motion);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = Object.keys(this._faceAnimationHash)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _name = _step6.value;

          var motion = this._faceAnimationHash[_name];
          var motionLength = motion.keyTimes[motion.keyTimes.length - 1];

          for (var _num = 0; _num < motion.keyTimes.length; _num++) {
            var _keyTime = motion.keyTimes[_num] / motionLength;
            motion.keyTimes[_num] = _keyTime;
          }

          motion.duration = motionLength / this.fps;
          motion.usesSceneTimeBase = false;
          motion.isRemovedOnCompletion = false;
          motion.fillMode = _jscenekit.kCAFillModeForwards;

          this._workingAnimationGroup.animations.push(motion);
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      this._workingAnimationGroup.duration = duration;
      this._workingAnimationGroup.usesSceneTimeBase = false;
      this._workingAnimationGroup.isRemovedOnCompletion = false;
      this._workingAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;

      this._motions.push(this._workingAnimationGroup);
    }
  }, {
    key: '_readBoneStatus',
    value: function _readBoneStatus() {
      // float3 translation
      // float4 rotation
      // bool isMoving?
      // bool enabledPhysics?
      // bool isSelected

      // just ignore data
      if (this.version === 1) {
        this.skip(34 * this._boneCount);
      } else {
        this.skip(31 * this._boneCount);
      }
    }
  }, {
    key: '_readFaceStatus',
    value: function _readFaceStatus() {
      // float skinValue

      // just ignore data
      this.skip(4 * this._faceCount);
    }
  }, {
    key: '_readIKStatus',
    value: function _readIKStatus() {
      // bool isIsEnable
      this.skip(this._ikCount);
    }
  }, {
    key: '_readParentStatus',
    value: function _readParentStatus() {
      // int4 parentStatus
      this.skip(16 * this._parentCount);
    }

    // MARK: - Camera Frame

  }, {
    key: '_readCameras',
    value: function _readCameras() {
      this._workingCameraAnimationGroup = new _jscenekit.CAAnimationGroup();
      this._workingCameraAnimationGroup.animations = [];
      this._cameraFrameHash = {};

      this._frameLength = 0;

      this._readOneCameraFrame(false);

      var cameraFrameCount = this.readUnsignedInt();
      for (var i = 0; i < cameraFrameCount; i++) {
        this._readOneCameraFrame();
      }

      this._createCameraAnimation();

      this._readCameraStatus();
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneCameraFrame',
    value: function _readOneCameraFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = -1;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }
      var cameraInfo = new MMDVMDCameraInfo(this);
      if (hasIndex) {
        this._cameraFrameHash[index] = cameraInfo;
      } else {
        this._initialCameraFrame = cameraInfo;
      }
    }

    /**
     * @access private
     * @param {MMDVMDCameraInfo} info -
     * @param {CAKeyframeAnimation} distanceMotion -
     * @param {CAKeyframeAnimation} posXMotion -
     * @param {CAKeyframeAnimation} posYMotion -
     * @param {CAKeyframeAnimation} posZMotion -
     * @param {CAKeyframeAnimation} rotXMotion -
     * @param {CAKeyframeAnimation} rotYMotion -
     * @param {CAKeyframeAnimation} rotZMotion -
     * @param {CAKeyframeAnimation} angleMotion -
     * @param {CAKeyframeAnimation} persMotion -
     * @returns {void}
     */

  }, {
    key: '_addCameraMotionRecursive',
    value: function _addCameraMotionRecursive(info, distanceMotion, posXMotion, posYMotion, posZMotion, rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion) {

      var motion = info;
      while (motion) {
        var frameIndex = distanceMotion.keyTimes.length - 1;

        // the frame number might not be sorted.
        while (frameIndex >= 0) {
          var k = distanceMotion.keyTimes[frameIndex];
          if (k < motion.frameNo) {
            break;
          }

          frameIndex -= 1;
        }
        frameIndex += 1;

        if (motion.frameNo > this.frameLength) {
          this._frameLength = motion.frameNo;
        }
        console.log('camera frameNo: ' + motion.frameNo);

        distanceMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        posXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        posYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        posZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        rotXMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        rotYMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        rotZMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        angleMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        persMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);

        distanceMotion.timingFunctions.splice(frameIndex, 0, motion.timingDistance);
        posXMotion.timingFunctions.splice(frameIndex, 0, motion.timingX);
        posYMotion.timingFunctions.splice(frameIndex, 0, motion.timingY);
        posZMotion.timingFunctions.splice(frameIndex, 0, motion.timingZ);
        rotXMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot);
        rotYMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot);
        rotZMotion.timingFunctions.splice(frameIndex, 0, motion.timingRot);
        angleMotion.timingFunctions.splice(frameIndex, 0, motion.timingAngle);

        distanceMotion.values.splice(frameIndex, 0, motion.distance);
        posXMotion.values.splice(frameIndex, 0, motion.posX);
        posYMotion.values.splice(frameIndex, 0, motion.posY);
        posZMotion.values.splice(frameIndex, 0, motion.posZ);
        rotXMotion.values.splice(frameIndex, 0, motion.rotX);
        rotYMotion.values.splice(frameIndex, 0, motion.rotY);
        rotZMotion.values.splice(frameIndex, 0, motion.rotZ);
        angleMotion.values.splice(frameIndex, 0, motion.angle);
        persMotion.values.splice(frameIndex, 0, motion.useOrtho);

        if (motion.next <= 0) {
          break;
        }

        var _motion = this._cameraFrameHash[motion.next];
        if (!_motion) {
          console.error('error: the camera frame index(' + motion.next + ') does not exist.');
        }
        motion = _motion;
      }
    }
  }, {
    key: '_createCameraAnimation',
    value: function _createCameraAnimation() {
      var distanceMotion = new _jscenekit.CAKeyframeAnimation('/' + _MMDCameraNode.MMD_CAMERA_NODE_NAME + '.translation.z');
      var posXMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.x');
      var posYMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.y');
      var posZMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.z');
      var rotZMotion = new _jscenekit.CAKeyframeAnimation('/' + _MMDCameraNode.MMD_CAMERA_ROTZ_NODE_NAME + '.eulerAngles.z');
      var rotXMotion = new _jscenekit.CAKeyframeAnimation('/' + _MMDCameraNode.MMD_CAMERA_ROTX_NODE_NAME + '.eulerAngles.x');
      var rotYMotion = new _jscenekit.CAKeyframeAnimation('eulerAngles.y');
      var angleMotion = new _jscenekit.CAKeyframeAnimation('/' + _MMDCameraNode.MMD_CAMERA_NODE_NAME + '.camera.yFov');
      var persMotion = new _jscenekit.CAKeyframeAnimation('/' + _MMDCameraNode.MMD_CAMERA_NODE_NAME + '.camera.usesOrthographicProjection');

      distanceMotion.values = [];
      posXMotion.values = [];
      posYMotion.values = [];
      posZMotion.values = [];
      rotXMotion.values = [];
      rotYMotion.values = [];
      rotZMotion.values = [];
      angleMotion.values = [];
      persMotion.values = [];

      distanceMotion.keyTimes = [];
      posXMotion.keyTimes = [];
      posYMotion.keyTimes = [];
      posZMotion.keyTimes = [];
      rotXMotion.keyTimes = [];
      rotYMotion.keyTimes = [];
      rotZMotion.keyTimes = [];
      angleMotion.keyTimes = [];
      persMotion.keyTimes = [];

      distanceMotion.timingFunctions = [];
      posXMotion.timingFunctions = [];
      posYMotion.timingFunctions = [];
      posZMotion.timingFunctions = [];
      rotXMotion.timingFunctions = [];
      rotYMotion.timingFunctions = [];
      rotZMotion.timingFunctions = [];
      angleMotion.timingFunctions = [];
      //persMotion.timingFunctions = []

      this._frameLength = 0;
      this._addCameraMotionRecursive(this._initialCameraFrame, distanceMotion, posXMotion, posYMotion, posZMotion, rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion);

      var duration = this._frameLength / this.fps;

      var _arr = [distanceMotion, posXMotion, posYMotion, posZMotion, rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion];
      for (var _i6 = 0; _i6 < _arr.length; _i6++) {
        var motion = _arr[_i6];
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        motion.duration = motionLength / this.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        for (var num = 0; num < motion.keyTimes.length; num++) {
          var keyTime = motion.keyTimes[num] / motionLength;
          motion.keyTimes[num] = keyTime;
        }

        this._workingCameraAnimationGroup.animations.push(motion);
        this._workingCameraAnimationGroup.duration = duration;
        this._workingCameraAnimationGroup.usesSceneTimeBase = false;
        this._workingCameraAnimationGroup.isRemovedOnCompletion = false;
        this._workingCameraAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;
      }
    }
  }, {
    key: '_readCameraStatus',
    value: function _readCameraStatus() {
      // float3 pos
      // float3 lookat?
      // float3 rot
      // usesParse

      // just ignore data
      this.skip(37);
    }

    // MARK: - Light Frame

  }, {
    key: '_readLights',
    value: function _readLights() {
      this._workingLightAnimationGroup = new _jscenekit.CAAnimationGroup();
      this._workingLightAnimationGroup.animations = [];
      this._lightFrameHash = {};

      this._readOneLightFrame(false);

      var lightFrameCount = this.readUnsignedInt();
      for (var i = 0; i < lightFrameCount; i++) {
        this._readOneLightFrame();
      }

      this._createLightAnimation();

      this._readLightStatus();
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneLightFrame',
    value: function _readOneLightFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = -1;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }

      var info = new MMDVMDLightInfo(this);
      if (hasIndex) {
        this._lightFrameHash[index] = info;
      } else {
        this._initialLightFrame = info;
      }
    }
  }, {
    key: '_createLightAnimation',
    value: function _createLightAnimation() {
      var colorMotion = new _jscenekit.CAKeyframeAnimation('light.color');
      var directionMotion = new _jscenekit.CAKeyframeAnimation('transform.quaternion');

      colorMotion.values = [];
      directionMotion.values = [];

      colorMotion.keyTimes = [];
      directionMotion.keyTimes = [];

      this._frameLength = 0;
      this._addLightMotionRecursive(this._initialLightFrame, colorMotion, directionMotion);

      var duration = this._frameLength / this.fps;

      var _arr2 = [colorMotion, directionMotion];
      for (var _i7 = 0; _i7 < _arr2.length; _i7++) {
        var motion = _arr2[_i7];
        motion.duration = duration;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        for (var num = 0; num < motion.keyTimes.length; num++) {
          var keyTime = motion.keyTimes[num] / this._frameLength;
          motion.keyTimes[num] = keyTime;
        }

        this._workingLightAnimationGroup.animations.push(motion);
      }

      this._workingLightAnimationGroup.duration = duration;
      this._workingLightAnimationGroup.usesSceneTimeBase = false;
      this._workingLightAnimationGroup.isRemovedOnCompletion = false;
      this._workingLightAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;
    }

    /**
     * @access private
     * @param {MMDVMDLightInfo} info -
     * @param {CAKeyframeAnimation} colorMotion -
     * @param {CAKeyframeAnimation} directionMotion -
     * @returns {void}
     */

  }, {
    key: '_addLightMotionRecursive',
    value: function _addLightMotionRecursive(info, colorMotion, directionMotion) {
      var motion = info;
      while (motion) {
        var frameIndex = colorMotion.keyTimes.length - 1;

        // the frame number might not be sorted.
        while (frameIndex >= 0) {
          var k = colorMotion.keyTimes[frameIndex];
          if (k < motion.frameNo) {
            break;
          }

          frameIndex -= 1;
        }
        frameIndex += 1;

        if (motion.frameNo > this._frameLength) {
          this._frameLength = motion.frameNo;
        }

        colorMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        directionMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);

        colorMotion.values.splice(frameIndex, 0, motion.color);
        directionMotion.values.splice(frameIndex, 0, motion.direction);

        if (motion.next <= 0) {
          break;
        }

        var _motion = this._lightFrameHash[motion.next];
        if (!_motion) {
          console.error('error: the light frame index(' + motion.next + ') does not exist.');
        }
        motion = _motion;
      }
    }
  }, {
    key: '_readLightStatus',
    value: function _readLightStatus() {
      // float3 rgb
      // float3 pos
      // byte5 unknown

      // just ignore data
      this.skip(29);
    }

    // MARK: - Accessory Frame

  }, {
    key: '_readAccessories',
    value: function _readAccessories() {
      var _this4 = this;

      this._accessoryCount = this.readUnsignedByte();
      this._accessoryNameArray = [];

      for (var i = 0; i < this._accessoryCount; i++) {
        this._accessoryNameArray.push(this.readString(100));
      }
      for (var index = 0; index < this._accessoryCount; index++) {
        console.log('[' + index + ']: ' + this._accessoryNameArray[index]);
      }

      if (this._modelCount + this._accessoryCount > this._substituteModels.length) {
        var len = this._modelCount + this._accessoryCount - this._substituteModels.length;
        for (var _i8 = 0; _i8 < len; _i8++) {
          this._substituteModels.push(null);
        }
      }

      this._accessoryFrameHash = {};

      var prevPromise = Promise.resolve();

      var _loop2 = function _loop2(_index) {
        prevPromise = prevPromise.then(function () {
          //let accessory = new MMDNode()
          var m = _this4._substituteModels[_this4._modelCount + _index];
          if (m) {
            // just skip accessory data
            _this4.skip(358);

            return m;
          }

          var no = _this4.readUnsignedByte();
          var name = _this4.readString(100);
          var filePath = _this4.readString(256);

          //accessory.name = name

          var paths = filePath.match(_userFilePathPattern);
          if (paths) {
            var replaced = paths[1].replace(/\\/g, '/');
            filePath = _this4.directoryPath + '/' + replaced;
          } else {
            filePath = filePath.replace(/\\/g, '/');
          }

          if (!filePath) {
            var accessory = new _MMDNode2.default();
            accessory.name = name;
            return accessory;
          }

          var accessorySceneSource = _MMDSceneSource2.default.sceneSourceWithURLOptions(filePath);
          return accessorySceneSource.didLoad.then(function () {
            var newAccessory = accessorySceneSource.getModel();
            return newAccessory.didLoad.then(function () {
              return newAccessory;
            }).catch(function (error) {
              console.error('cannot get accessory data: ' + filePath);
              return Promise.reject(error);
            });
          }).catch(function (error) {
            console.error('cannot read file: ' + filePath);
            return Promise.reject(error);
          });
        }).then(function (accessory) {

          // set the default scale for accessory (x10)
          accessory.scale = new _jscenekit.SCNVector3Make(10.0, 10.0, 10.0);

          var accessoryIndex = _this4.readUnsignedByte();
          console.log('accessoryIndex: ' + accessoryIndex);

          _this4._readOneAccessoryFrame(false);

          var accessoryFrameCount = _this4.readUnsignedInt();
          console.log('accessoryFrameCount: ' + accessoryFrameCount);
          for (var _i9 = 0; _i9 < accessoryFrameCount; _i9++) {
            _this4._readOneAccessoryFrame();
          }

          _this4._createAccessoryAnimation();

          _this4._readAccessoryStatus();

          _this4._accessories.push(accessory);
        });
      };

      for (var _index = 0; _index < this._accessoryCount; _index++) {
        _loop2(_index);
      }
      return prevPromise;
    }

    /**
     * @access private
     * @param {boolean} [hasIndex = true] -
     * @returns {void}
     */

  }, {
    key: '_readOneAccessoryFrame',
    value: function _readOneAccessoryFrame() {
      var hasIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var index = 0;
      if (hasIndex) {
        index = this.readUnsignedInt();
      }

      var info = new MMDVMDAccessoryInfo(this);
      if (hasIndex) {
        this._accessoryFrameHash[index] = info;
      } else {
        this._initialAccessoryFrame = info;
      }
    }
  }, {
    key: '_createAccessoryAnimation',
    value: function _createAccessoryAnimation() {
      var animation = new _jscenekit.CAAnimationGroup();
      animation.animations = [];

      var posMotion = new _jscenekit.CAKeyframeAnimation('position');
      var rotMotion = new _jscenekit.CAKeyframeAnimation('transform.quaternion');
      var scaleMotion = new _jscenekit.CAKeyframeAnimation('scale');
      var hiddenMotion = new _jscenekit.CAKeyframeAnimation('hidden');
      var opacityMotion = new _jscenekit.CAKeyframeAnimation('opacity');
      var additiveMotion = new _jscenekit.CAKeyframeAnimation('/Geometry.materials.blendMode');
      var parentMotion = new _jscenekit.CAKeyframeAnimation('parent.motionParentNode');

      posMotion.values = [];
      rotMotion.values = [];
      scaleMotion.values = [];
      hiddenMotion.values = [];
      opacityMotion.values = [];
      additiveMotion.values = [];
      parentMotion.values = [];

      posMotion.keyTimes = [];
      rotMotion.keyTimes = [];
      scaleMotion.keyTimes = [];
      hiddenMotion.keyTimes = [];
      opacityMotion.keyTimes = [];
      additiveMotion.keyTimes = [];
      parentMotion.keyTimes = [];

      this._frameLength = 0;
      this._addAccessoryMotionRecursive(this._initialAccessoryFrame, posMotion, rotMotion, scaleMotion, hiddenMotion, opacityMotion, additiveMotion, parentMotion);

      var duration = this._frameLength / this.fps;

      var _arr3 = [posMotion, rotMotion, scaleMotion, hiddenMotion, opacityMotion, additiveMotion, parentMotion];
      for (var _i10 = 0; _i10 < _arr3.length; _i10++) {
        var motion = _arr3[_i10];
        motion.duration = duration;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        for (var _num2 = 0; _num2 < motion.keyTimes.length; _num2++) {
          var _keyTime2 = motion.keyTimes[_num2] / this._frameLength;
          if (this._frameLength <= 0) {
            _keyTime2 = 0.0;
          }
          motion.keyTimes[_num2] = _keyTime2;
        }
      }
      hiddenMotion.calculationMode = _jscenekit.kCAAnimationDiscrete;
      additiveMotion.calculationMode = _jscenekit.kCAAnimationDiscrete;
      parentMotion.calculationMode = _jscenekit.kCAAnimationDiscrete;

      for (var num = 0; num < hiddenMotion.keyTimes.length; num++) {
        var keyTime = hiddenMotion.keyTimes[num];
        var value = hiddenMotion.values[num];
        console.log('isHidden @' + keyTime + ': ' + value);
      }

      animation.animations.push(posMotion);
      animation.animations.push(rotMotion);
      animation.animations.push(scaleMotion);
      animation.animations.push(hiddenMotion);
      animation.animations.push(opacityMotion);
      animation.duration = duration;
      animation.usesScaleTimeBase = false;
      animation.isRemovedOnCompletion = false;
      animation.fillMode = _jscenekit.kCAFillModeForwards;

      var parentEvents = [];
      var prevParent = null;

      var _loop3 = function _loop3(index) {
        var keyTime = parentMotion.keyTimes[index];
        var value = parentMotion.values[index];

        if (value) {
          var mmdParentNode = value;
          // TODO: implement for playingBackward
          var parentEvent = new _jscenekit.SCNAnimationEvent(keyTime, function (_animation, animatedObject, playingBackward) {
            var node = animatedObject;
            if (animatedObject) {
              if (playingBackward) {
                if (parent === prevParent) {
                  parent.addChildNode(node);
                }
              } else {
                value.addChildNode(node);
              }
            }
          });

          parentEvents.push(parentEvent);
          prevParent = mmdParentNode;
        }
      };

      for (var index = 0; index < parentMotion.keyTimes.length; index++) {
        _loop3(index);
      }

      var prevBlendMode = _jscenekit.SCNBlendMode.alpha;

      var _loop4 = function _loop4(index) {
        var keyTime = additiveMotion.keyTimes[index];
        var value = additiveMotion.values[index];

        var additiveEvent = new _jscenekit.SCNAnimationEvent(keyTime, function (_animation, animatedObject, playingBackward) {
          var geometry = animatedObject.childNodeWithNameRecursively('Geometry', true).geometry;
          if (geometry) {
            var blendMode = value;
            if (playingBackward) {
              blendMode = prevBlendMode;
            }
            //if(blendMode === SCNBlendMode.add){
            //  console.log('.add')
            //}else if(blendMode === SCNBlendMode.alpha){
            //  console.log('.alpha')
            //}
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = geometry.materials[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var material = _step7.value;

                material.blendMode = blendMode;
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        });
        parentEvents.push(additiveEvent);
        prevBlendMode = value;
      };

      for (var index = 0; index < additiveMotion.keyTimes.length; index++) {
        _loop4(index);
      }

      animation.animationEvents = parentEvents;

      this._accessoryMotions.push(animation);
    }

    /**
     * @access private
     * @param {MMDVMDAccessoryInfo} info -
     * @param {CAKeyframeAnimation} posMotion -
     * @param {CAKeyframeAnimation} rotMotion -
     * @param {CAKeyframeAnimation} scaleMotion -
     * @param {CAKeyframeAnimation} hiddenMotion -
     * @param {CAKeyframeAnimation} opacityMotion -
     * @param {CAKeyframeAnimation} additiveMotion -
     * @param {CAKeyframeAnimation} parentMotion -
     * @returns {void}
     */

  }, {
    key: '_addAccessoryMotionRecursive',
    value: function _addAccessoryMotionRecursive(info, posMotion, rotMotion, scaleMotion, hiddenMotion, opacityMotion, additiveMotion, parentMotion) {

      var motion = info;
      while (motion) {
        var frameIndex = posMotion.keyTimes.length - 1;

        // the frame number might not be sorted
        while (frameIndex >= 0) {
          var k = posMotion.keyTimes[frameIndex];
          if (k < motion.frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        if (motion.frameNo > this._frameLength) {
          this._frameLength = motion.frameNo;
        }

        posMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        rotMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        scaleMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        hiddenMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        opacityMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        additiveMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);
        parentMotion.keyTimes.splice(frameIndex, 0, motion.frameNo);

        posMotion.values.splice(frameIndex, 0, motion.position);
        rotMotion.values.splice(frameIndex, 0, motion.rotation);
        scaleMotion.values.splice(frameIndex, 0, motion.scale);
        hiddenMotion.values.splice(frameIndex, 0, motion.isHidden);
        opacityMotion.values.splice(frameIndex, 0, motion.opacity);
        additiveMotion.values.splice(frameIndex, 0, motion.additive);
        parentMotion.values.splice(frameIndex, 0, motion.parent);

        if (motion.next <= 0) {
          break;
        }

        var _motion = this._accessoryFrameHash[motion.next];
        if (!_motion) {
          console.error('error: the accessory frame index(' + motion.next + ') does not exist.');
        }
        motion = _motion;
      }
    }
  }, {
    key: '_readAccessoryStatus',
    value: function _readAccessoryStatus() {
      // byte opacity?
      // int modelIndex
      // int boneIndex
      // float3 pos
      // float scale
      // float3 rot
      // byte flag1?
      // byte flat2?

      this.skip(38);
      if (this.version >= 2) {
        this.skip(1);
      }
    }

    // MARK: - other settings

  }, {
    key: '_readSettings',
    value: function _readSettings() {
      var numObjects = this._modelCount + this._accessoryCount;

      var viewFlag = this.readUnsignedByte();

      // wav file
      var usesWav = this.readUnsignedByte();
      var wavPath = this.readString(256);

      // background movie
      var bgMoviePath = this.readString(256);
      var usesMovie = this.readUnsignedByte();

      // background image
      var bgImagePath = this.readString(256);
      var usesImage = this.readUnsignedByte();

      // misc.
      var showInfo = this.readUnsignedByte();
      var showGrid = this.readUnsignedByte();
      var shadow = this.readUnsignedByte();
      this.skip(3); // ?

      var screenCapture = this.readUnsignedByte();
      this.skip(7); // ?

      var shadowColor = this.readFloat(); // ?

      this.skip(numObjects);

      this.skip(4 * this._modelCount);

      this.skip(62); // ?

      var usesPhysics = this.readUnsignedByte();
      var gravity = this.readFloat();
      var noise = 0.0;
      if (this.version === 1) {
        noise = this.readFloat();
      }
      var gravityX = this.readFloat();
      var gravityY = this.readFloat();
      var gravityZ = this.readFloat();

      this.skip(24); // ?

      this.skip(this._modelCount);

      this.skip(5);
    }
  }, {
    key: '_setupScene',
    value: function _setupScene() {
      // camera
      var cameraNode = new _MMDCameraNode2.default();
      cameraNode.prepareAnimationForKey(this._workingCameraAnimationGroup, 'motion');
      cameraNode.playPreparedAnimationForKey('motion');
      cameraNode.getCamera().automaticallyAdjustsZRange = true;

      this._workingScene.rootNode.addChildNode(cameraNode);

      // light
      var lightNode = new _jscenekit.SCNNode();
      lightNode.light = new _jscenekit.SCNLight();
      lightNode.light.type = _jscenekit.SCNLight.LightType.directional;
      lightNode.light.castsShadow = true;
      lightNode.addAnimationForKey(this._workingLightAnimationGroup, 'motion');
      lightNode.name = 'MMDLight';

      this._workingScene.rootNode.addChildNode(lightNode);

      // model and motion
      for (var index = 0; index < this.models.count; index++) {
        var model = this.models[index];
        var motion = this._motions[index];

        model.prepareAnimationForKey(motion, 'motion');
        model.playPreparedAnimationForKey('motion');
        this._workingScene.rootNode.addChildNode(model);
      }

      // accessory
      for (var _index2 = 0; _index2 < this._accessories.length; _index2++) {
        var accessory = this._accessories[_index2];
        var _motion2 = this._accessoryMotions[_index2];

        accessory.prepareAnimationForKey(_motion2, 'motion');
        accessory.playPreparedAnimationForKey('motion');

        this._workingScene.rootNode.addChildNode(accessory);
      }
    }

    /**
     * @access private
     * @returns {string} -
     */

  }, {
    key: '_getPascalString',
    value: function _getPascalString() {
      var strlen = this.readUnsignedByte();
      var str = this.readString(strlen);
      if (str) {
        return str;
      }
      return '';
    }
  }], [{
    key: 'getScene',
    value: function getScene(data, directoryPath) {
      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var reader = new MMDPMMReader(data, directoryPath);
      var scene = reader.loadPMMFile(models, motions);

      return scene;
    }
  }]);

  return MMDPMMReader;
}(_MMDReader3.default);

exports.default = MMDPMMReader;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDProgram = __webpack_require__(5);

var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _MMDIKConstraint = __webpack_require__(4);

var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

var _MMDFragmentShader2 = __webpack_require__(6);

var _MMDFragmentShader3 = _interopRequireDefault(_MMDFragmentShader2);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _BoneNodeTypes = [_MMDNode2.default.Type.rotate, _MMDNode2.default.Type.rotateTranslate, _MMDNode2.default.Type.ik, _MMDNode2.default.Type.unknown, _MMDNode2.default.Type.ikChild, _MMDNode2.default.Type.rotateChild, _MMDNode2.default.Type.hidden, _MMDNode2.default.Type.twist, _MMDNode2.default.Type.roll];

/**
 *
 * @access public
 * @extends {MMDReader}
 */

var MMDPMXReader = function (_MMDReader) {
  _inherits(MMDPMXReader, _MMDReader);

  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDPMXReader(data, directoryPath) {
    _classCallCheck(this, MMDPMXReader);

    console.log('MMDPMXReader constructor');
    var isBinary = true;
    var isBigEndian = false;
    var encoding = 'sjis';

    // initialize working variables
    var _this = _possibleConstructorReturn(this, (MMDPMXReader.__proto__ || Object.getPrototypeOf(MMDPMXReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this._workingNode = null;

    // header info
    _this._pmxMagic = '';
    _this._version = 0.0;
    _this._encoding = '';

    _this._numUV = 0;
    _this._indexSize = 0;
    _this._textureIndexSize = 0;
    _this._materialIndexSize = 0;
    _this._boneIndexSize = 0;
    _this._morphIndexSize = 0;
    _this._physicsBodyIndexSize = 0;

    _this._modelName = '';
    _this._englishModelName = '';
    _this._comment = '';
    _this._englishComment = '';

    // vertex data
    _this._vertexCount = 0;
    _this._vertexArray = [];
    _this._normalArray = [];
    _this._texcoordArray = [];

    _this._boneIndicesArray = [];
    _this._boneWeightsArray = [];
    _this._edgeArray = [];

    // index data
    _this._indexCount = 0;
    _this._indexArray = [];

    // texture data
    _this._textureCount = 0;
    _this._texturePromiseArray = [];
    _this._textureArray = [];
    _this._toonMaterials = [];

    // material data
    _this._materialCount = 0;
    _this._materialArray = [];
    _this._materialShapeArray = [];
    _this._materialIndexCountArray = [];
    _this._separatedIndexArray = [];
    _this._shaderModifiers = {};

    // bone data
    _this._boneCount = 0;
    _this._rootBone = new _MMDNode2.default();
    _this._boneArray = [];
    _this._boneInverseMatrixArray = [];

    // morphing data
    _this._faceCount = 0;
    _this._faceNameArray = [];
    _this._faceVertexArray = [];

    // data sources
    _this._vertexSource = null;
    _this._normalSource = null;
    _this._texcoordSource = null;
    _this._elementArray = [];

    // physics body
    _this._physicsBoneArray = [];
    _this._physicsBodyArray = [];
    return _this;
  }

  /**
   * @access public
   * @param {} data -
   * @param {string} directoryPath -
   * @returns {MMDNode} -
   */


  _createClass(MMDPMXReader, [{
    key: '_loadPMXFile',


    /**
     * @access private
     * @returns {MMDNode} -
     */
    value: function _loadPMXFile() {
      this._workingNode = new _MMDNode2.default();

      // read contents of file
      this._readPMXHeader();
      if (this._pmxMagic !== 'PMX ') {
        throw new Error('PMX file magic error: ' + this._pmxMagic);
      }

      // load shader modifiers
      this._shaderModifiers[_jscenekit.SCNShaderModifierEntryPoint.fragment] = _MMDFragmentShader3.default;

      // read basic data
      this._readVertex();
      this._readIndex();
      this._readTexture();
      this._readMaterial();
      this._readBone();
      this._readFace();
      this._readDisplayInfo();

      // create geometry for shader
      this._createGeometry();
      this._createFaceMorph();

      this._readPhysicsBody();
      this._readConstraint();

      if (this._version > 2.0) {
        this._readSoftBody();
      }

      return this._workingNode;
    }

    /**
     * @access private
     * @returns {string} -
     */

  }, {
    key: '_readPascalString',
    value: function _readPascalString() {
      var strlen = this.readUnsignedInt();
      return this.readString(strlen, this._encoding);
    }

    /**
     * read PMX header data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readPMXHeader',
    value: function _readPMXHeader() {
      this._pmxMagic = this.readString(4);
      this._version = this.readFloat();

      var numData = this.readUnsignedByte();
      if (numData !== 8) {
        throw new Error('unknown header data size: ' + numData);
      }

      var encodingNo = this.readUnsignedByte();
      switch (encodingNo) {
        case 0:
          this._encoding = 'utf16le';
          break;
        case 1:
          this._encoding = 'utf8';
          break;
        default:
          throw new Error('unknown encoding number: ' + encodingNo);
      }

      this._numUV = this.readUnsignedByte();
      this._indexSize = this.readUnsignedByte();
      this._textureIndexSize = this.readUnsignedByte();
      this._materialIndexSize = this.readUnsignedByte();
      this._boneIndexSize = this.readUnsignedByte();
      this._morphIndexSize = this.readUnsignedByte();
      this._physicsBodyIndexSize = this.readUnsignedByte();

      this._modelName = this._readPascalString();
      this._englishModelName = this._readPascalString();
      this._comment = this._readPascalString();
      this._englishComment = this._readPascalString();

      console.log('modelName: ' + this._modelName);
    }

    /**
     * read PMX vertex data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readVertex',
    value: function _readVertex() {
      var vertexCount = this.readInt();
      this._vertexCount = vertexCount;

      var noBone = 0;
      switch (this._boneIndexSize) {
        case 1:
          noBone = 0xFF;
          break;
        case 2:
          noBone = 0xFFFF;
          break;
        case 4:
          noBone = 0xFFFFFFFF;
          break;
        default:
          throw new Error('unknown bone index size: ' + this._boneIndexSize);
      }

      for (var i = 0; i < vertexCount; i++) {
        this._vertexArray.push(this.readFloat());
        this._vertexArray.push(this.readFloat());
        this._vertexArray.push(-this.readFloat());

        this._normalArray.push(this.readFloat());
        this._normalArray.push(this.readFloat());
        this._normalArray.push(-this.readFloat());

        this._texcoordArray.push(this.readFloat());
        this._texcoordArray.push(this.readFloat());

        for (var j = 0; j < this._numUV; j++) {
          // FIXME: use additional UV
          this.readFloat();
          this.readFloat();
          this.readFloat();
          this.readFloat();
        }

        var weightType = this.readUnsignedByte();
        var weight1 = 0.0;
        var weight2 = 0.0;
        var weight3 = 0.0;
        var weight4 = 0.0;
        var boneNo1 = 0;
        var boneNo2 = 0;
        var boneNo3 = 0;
        var boneNo4 = 0;

        switch (weightType) {
          case 0:
            // BDEF1
            boneNo1 = this.readInteger(this._boneIndexSize);
            weight1 = 1.0;
            break;
          case 1:
            // BDEF2
            boneNo1 = this.readInteger(this._boneIndexSize);
            boneNo2 = this.readInteger(this._boneIndexSize);
            weight1 = this.readFloat();
            weight2 = 1.0 - weight1;
            break;
          case 2:
            // BDEF4
            boneNo1 = this.readInteger(this._boneIndexSize);
            boneNo2 = this.readInteger(this._boneIndexSize);
            boneNo3 = this.readInteger(this._boneIndexSize);
            boneNo4 = this.readInteger(this._boneIndexSize);
            weight1 = this.readFloat();
            weight2 = this.readFloat();
            weight3 = this.readFloat();
            weight4 = this.readFloat();
            break;
          case 3:
            // SDEF
            boneNo1 = this.readInteger(this._boneIndexSize);
            boneNo2 = this.readInteger(this._boneIndexSize);
            weight1 = this.readFloat();
            weight2 = 1.0 - weight1;

            // FIXME: use SDEF-C
            this.readFloat();
            this.readFloat();
            this.readFloat();

            // FIXME: use SDEF-R0
            this.readFloat();
            this.readFloat();
            this.readFloat();

            // FIXME: use SDEF-R1
            this.readFloat();
            this.readFloat();
            this.readFloat();
            break;
          case 4:
            // QDEF
            boneNo1 = this.readInteger(this._boneIndexSize);
            boneNo2 = this.readInteger(this._boneIndexSize);
            boneNo3 = this.readInteger(this._boneIndexSize);
            boneNo4 = this.readInteger(this._boneIndexSize);
            weight1 = this.readFloat();
            weight2 = this.readFloat();
            weight3 = this.readFloat();
            weight4 = this.readFloat();
            break;
          default:
            throw new Error('unknown skin weight type: ' + weightType);
        }

        if (boneNo1 === noBone) {
          boneNo1 = 0;
          weight1 = 0;
        }
        if (boneNo2 === noBone) {
          boneNo2 = 0;
          weight2 = 0;
        }
        if (boneNo3 === noBone) {
          boneNo3 = 0;
          weight3 = 0;
        }
        if (boneNo4 === noBone) {
          boneNo4 = 0;
          weight4 = 0;
        }

        //console.log(`boneIndex ${i} ${boneNo1}:${weight1} ${boneNo2}:${weight2} ${boneNo3}:${weight3} ${boneNo4}:${weight4}`)

        // the first weight must not be 0 in SceneKit...
        if (weight1 === 0.0) {
          if (weight2 !== 0.0) {
            this._boneIndicesArray.push(boneNo2);
            this._boneIndicesArray.push(boneNo1);
            this._boneIndicesArray.push(boneNo3);
            this._boneIndicesArray.push(boneNo4);

            this._boneWeightsArray.push(weight2);
            this._boneWeightsArray.push(weight1);
            this._boneWeightsArray.push(weight3);
            this._boneWeightsArray.push(weight4);
          } else if (weight3 !== 0.0) {
            this._boneIndicesArray.push(boneNo3);
            this._boneIndicesArray.push(boneNo1);
            this._boneIndicesArray.push(boneNo2);
            this._boneIndicesArray.push(boneNo4);

            this._boneWeightsArray.push(weight3);
            this._boneWeightsArray.push(weight1);
            this._boneWeightsArray.push(weight2);
            this._boneWeightsArray.push(weight4);
          } else if (weight4 !== 0.0) {
            this._boneIndicesArray.push(boneNo4);
            this._boneIndicesArray.push(boneNo1);
            this._boneIndicesArray.push(boneNo2);
            this._boneIndicesArray.push(boneNo3);

            this._boneWeightsArray.push(weight4);
            this._boneWeightsArray.push(weight1);
            this._boneWeightsArray.push(weight2);
            this._boneWeightsArray.push(weight3);
          } else {
            throw new Error('bad data definition: all bone weights are 0.');
          }
        } else {
          this._boneIndicesArray.push(boneNo1);
          this._boneIndicesArray.push(boneNo2);
          this._boneIndicesArray.push(boneNo3);
          this._boneIndicesArray.push(boneNo4);

          this._boneWeightsArray.push(weight1);
          this._boneWeightsArray.push(weight2);
          this._boneWeightsArray.push(weight3);
          this._boneWeightsArray.push(weight4);
        }

        this._edgeArray.push(this.readFloat());
      }
    }

    /**
     * read PMX index data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readIndex',
    value: function _readIndex() {
      var indexCount = this.readUnsignedInt();
      this._indexCount = indexCount;
      console.log('indexCount: ' + indexCount);

      for (var i = 0; i < indexCount; i++) {
        this._indexArray.push(this.readInteger(this._indexSize));
      }
    }

    /**
     * read PMX texture data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readTexture',
    value: function _readTexture() {
      var _this2 = this;

      var textureCount = this.readUnsignedInt();
      this._textureCount = textureCount;

      var _loop = function _loop(i) {
        var textureFile = _this2._readPascalString();
        var index = _this2._texturePromiseArray.length;
        _this2._texturePromiseArray.push(_this2.loadTexture(textureFile).then(function (texture) {
          _this2._textureArray[index] = texture;
          _this2._toonMaterials[index] = _MMDReader3.default.getToonMaterial(texture);
        }));
      };

      for (var i = 0; i < textureCount; i++) {
        _loop(i);
      }
    }

    /**
     * read PMX material data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readMaterial',
    value: function _readMaterial() {
      var _this3 = this;

      var materialCount = this.readUnsignedInt();
      this._materialCount = materialCount;

      var indexPos = 0;

      var _loop2 = function _loop2(i) {
        var material = new _jscenekit.SCNMaterial();
        material.name = _this3._readPascalString();

        var englishName = _this3._readPascalString();

        material.diffuse.contents = new _jscenekit.SKColor(_this3.readFloat(), _this3.readFloat(), _this3.readFloat(), _this3.readFloat());
        material.specular.contents = new _jscenekit.SKColor(_this3.readFloat(), _this3.readFloat(), _this3.readFloat(), 1.0);
        material.shininess = _this3.readFloat();
        material.ambient.contents = new _jscenekit.SKColor(0, 0, 0, 1);
        material.emission.contents = new _jscenekit.SKColor(_this3.readFloat(), _this3.readFloat(), _this3.readFloat(), 1.0);

        var bitFlag = _this3.readUnsignedByte();
        var edgeColor = new _jscenekit.SKColor(_this3.readFloat(), _this3.readFloat(), _this3.readFloat(), _this3.readFloat());

        var noCulling = (bitFlag & 0x01) !== 0;
        var floorShadow = (bitFlag & 0x02) !== 0;
        var shadowMap = (bitFlag & 0x04) !== 0;
        var selfShadow = (bitFlag & 0x08) !== 0;
        var drawEdge = (bitFlag & 0x10) !== 0;
        var vertexColor = (bitFlag & 0x20) !== 0;
        var drawPoint = (bitFlag & 0x40) !== 0;
        var drawLine = (bitFlag & 0x80) !== 0;

        var edgeSize = _this3.readFloat();
        var textureNo = _this3.readInteger(_this3._textureIndexSize);
        var sphereTextureNo = _this3.readInteger(_this3._textureIndexSize);
        var sphereMode = _this3.readUnsignedByte();
        var toonFlag = _this3.readUnsignedByte();
        var toonTextureNo = 0;

        if (textureNo < _this3._texturePromiseArray.length) {
          material.multiply._loadedPromise = _this3._texturePromiseArray[textureNo].then(function () {
            material.multiply.contents = _this3._textureArray[textureNo];
            material.multiply.wrapS = _jscenekit.SCNWrapMode.repeat;
            material.multiply.wrapT = _jscenekit.SCNWrapMode.repeat;
            console.warn('material.diffuse promise resolve');
          });
          material.setValueForKey(1.0, 'useTexture');
        } else {
          material.setValueForKey(0.0, 'useTexture');
        }

        if (sphereTextureNo < _this3._texturePromiseArray.length) {
          _this3._texturePromiseArray[sphereTextureNo].then(function () {
            var prop = new _jscenekit.SCNMaterialProperty(_this3._textureArray[sphereTextureNo]);
            material.setValueForKey(prop, 'sphereTexture');
          });
        }
        if (sphereMode === 0) {
          // disabled
          material.setValueForKey(0.0, 'useSphereMap');
          material.setValueForKey(0.0, 'spadd');
          material.setValueForKey(0.0, 'useSubtexture');
        } else if (sphereMode === 1) {
          // sph
          material.setValueForKey(1.0, 'useSphereMap');
          material.setValueForKey(0.0, 'spadd');
          material.setValueForKey(0.0, 'useSubtexture');
        } else if (sphereMode === 2) {
          // spa
          material.setValueForKey(1.0, 'useSphereMap');
          material.setValueForKey(1.0, 'spadd');
          material.setValueForKey(0.0, 'useSubtexture');
        } else if (sphereMode === 3) {
          // subtexture
          material.setValueForKey(0.0, 'useSphereMap');
          material.setValueForKey(0.0, 'spadd');
          material.setValueForKey(1.0, 'useSubtexture');
        } else {
          throw new Error('unknown sphereMode: ' + sphereMode);
        }

        if (toonFlag === 0) {
          toonTextureNo = _this3.readInteger(_this3._textureIndexSize);
          if (toonTextureNo < _this3._texturePromiseArray.length) {
            material.transparent._loadedPromise = _this3._texturePromiseArray[toonTextureNo].then(function () {
              material.transparent.contents = _this3._textureArray[toonTextureNo];
              material.setValueForKey(_this3._toonMaterials[toonTextureNo], 'materialToon');
            });
            material.setValueForKey(1.0, 'useToon');
          } else {
            material.setValueForKey(_jscenekit.SKColor.black, 'materialToon');
            material.setValueForKey(0.0, 'useToon');
          }
        } else if (toonFlag === 1) {
          toonTextureNo = _this3.readUnsignedByte();
          material.transparent.contents = _MMDReader3.default.toonTextures[toonTextureNo];
          material.setValueForKey(1.0, 'useToon');
          material.setValueForKey(_MMDReader3.default.toonMaterials[toonTextureNo], 'materialToon');
        } else {
          throw new Error('unknown toon flag: ' + toonFlag);
        }

        if (noCulling) {
          material.isDoubleSided = true;
        } else {
          material.isDoubleSided = false;
        }

        material.setValueForKey(new _jscenekit.SCNVector4(0, 0, 0, 0), 'textureAddValue');
        material.setValueForKey(new _jscenekit.SCNVector4(1, 1, 1, 1), 'textureMulValue');
        material.setValueForKey(new _jscenekit.SCNVector4(0, 0, 0, 0), 'sphereAddValue');
        material.setValueForKey(new _jscenekit.SCNVector4(1, 1, 1, 1), 'sphereMulValue');
        material.setValueForKey(0.0, 'parthf');
        material.setValueForKey(0.0, 'transp');

        // FIXME: use floorShadow, shadowMap property
        // FIXME: use drawEdge property
        // FIXME: use vertexColor

        var shape = _jscenekit.SCNGeometryPrimitiveType.triangles;
        if (drawPoint) {
          shape = _jscenekit.SCNGeometryPrimitiveType.point;
        } else if (drawLine) {
          shape = _jscenekit.SCNGeometryPrimitiveType.line;
        }

        _this3._materialShapeArray.push(shape);

        var text = _this3._readPascalString();
        var materialIndexCount = _this3.readUnsignedInt();

        // create index data
        var orgArray = _this3._indexArray.slice(indexPos, indexPos + materialIndexCount);
        var newArray = [];
        indexPos += materialIndexCount;
        console.log('indexPos: ' + text + ' ' + indexPos);

        var arrayPos = 0;
        var newIndexCount = 0;
        if (shape === _jscenekit.SCNGeometryPrimitiveType.point) {
          while (arrayPos < materialIndexCount) {
            var index1 = orgArray[arrayPos + 0];
            var index2 = orgArray[arrayPos + 1];
            var index3 = orgArray[arrayPos + 2];

            if (index1 === index2 && index2 === index3) {
              newArray.push(index1);
              newIndexCount += 1;
            } else {
              newArray.push(index1);
              newArray.push(index2);
              newArray.push(index3);
              newIndexCount += 3;
            }
            arrayPos += 3;
          }
        } else if (shape === _jscenekit.SCNGeometryPrimitiveType.line) {
          while (arrayPos < materialIndexCount) {
            var _index = orgArray[arrayPos + 0];
            var _index2 = orgArray[arrayPos + 1];
            var _index3 = orgArray[arrayPos + 2];

            if (_index === _index3) {
              newArray.push(_index);
              newArray.push(_index2);
              newIndexCount += 1;
            } else {
              newArray.push(_index);
              newArray.push(_index2);

              newArray.push(_index2);
              newArray.push(_index3);

              newArray.push(_index3);
              newArray.push(_index);

              newIndexCount += 3;
            }
            arrayPos += 3;
          }
        } else if (shape === _jscenekit.SCNGeometryPrimitiveType.triangles) {
          while (arrayPos < materialIndexCount) {
            var _index4 = orgArray[arrayPos + 0];
            var _index5 = orgArray[arrayPos + 1];
            var _index6 = orgArray[arrayPos + 2];

            newArray.push(_index4);
            newArray.push(_index6);
            newArray.push(_index5);

            newIndexCount += 1;
            arrayPos += 3;
          }
        }

        material.shaderModifiers = _this3._shaderModifiers;

        _this3._materialIndexCountArray.push(newIndexCount);
        _this3._materialArray.push(material);
        _this3._separatedIndexArray.push(newArray);
      };

      for (var i = 0; i < materialCount; i++) {
        _loop2(i);
      }
    }

    /**
     * read PMX bone data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readBone',
    value: function _readBone() {
      var bonePositionArray = [];
      var parentNoArray = [];

      var boneCount = this.readUnsignedInt();
      this._boneCount = boneCount;
      this._rootBone.position = new _jscenekit.SCNVector3(0, 0, 0);
      this._rootBone.name = 'rootBone';

      this._workingNode.ikArray = [];

      for (var i = 0; i < boneCount; i++) {
        var boneNode = new _MMDNode2.default();
        this._boneArray.push(boneNode);
      }

      for (var _i = 0; _i < boneCount; _i++) {
        var _boneNode = this._boneArray[_i];
        _boneNode.name = this._readPascalString();
        var englishName = this._readPascalString();

        if (_boneNode.name.startsWith('右ひざ') || _boneNode.name.startsWith('左ひざ')) {
          _boneNode.isKnee = true;
        }

        var x = this.readFloat();
        var y = this.readFloat();
        var z = -this.readFloat();

        var position = new _jscenekit.SCNVector3(x, y, z);
        bonePositionArray.push(position);

        parentNoArray.push(this.readInteger(this._boneIndexSize));
        var level = this.readInt();
        var flags = this.readUnsignedShort();

        var hasChildBoneIndex = (flags & 0x0001) !== 0;
        var isRotatable = (flags & 0x0002) !== 0;
        var isMovable = (flags & 0x0004) !== 0;
        var isVisible = (flags & 0x0008) !== 0;
        var isControllable = (flags & 0x0010) !== 0;
        var isIKBone = (flags & 0x0020) !== 0;
        // 0x0040: ?
        var isLocalValue = (flags & 0x0080) !== 0;
        var hasRotationValue = (flags & 0x0100) !== 0;
        var hasTranslationValue = (flags & 0x0200) !== 0;
        var hasFixAxis = (flags & 0x0400) !== 0;
        var hasLocalAxis = (flags & 0x0800) !== 0;
        var isDeformable = (flags & 0x1000) !== 0;
        var hasDeformableParent = (flags & 0x2000) !== 0;

        if (hasChildBoneIndex) {
          var childBoneNo = this.readInteger(this._boneIndexSize);
        } else {
          this.readFloat();
          this.readFloat();
          this.readFloat();
        }

        if (hasRotationValue || hasTranslationValue) {
          var boneIndex = this.readInteger(this._boneIndexSize);
          var rate = this.readFloat();
          var bone = this._boneArray[boneIndex];
          console.log('   rotation/translation: [' + boneIndex + '] ' + bone.name + ' ' + rate);

          if (hasRotationValue) {
            _boneNode.rotateEffector = bone;
            _boneNode.rotateEffectRate = rate;
          }
          if (hasTranslationValue) {
            _boneNode.translateEffector = bone;
            _boneNode.translateEffectRate = rate;
          }
        }

        if (hasFixAxis) {
          var _x = this.readFloat();
          var _y = this.readFloat();
          var _z = this.readFloat();
        }

        if (hasLocalAxis) {
          var xAxisX = this.readFloat();
          var xAxisY = this.readFloat();
          var xAxisZ = this.readFloat();

          var zAxisX = this.readFloat();
          var zAxisY = this.readFloat();
          var zAxisZ = this.readFloat();
        }

        if (hasDeformableParent) {
          var parentBoneKey = this.readInt();
        }

        if (isIKBone) {
          var ik = new _MMDIKConstraint2.default();

          var targetBoneNo = this.readInteger(this._boneIndexSize);
          var targetBone = this._boneArray[targetBoneNo];

          var iteration = this.readInt();
          var weight = this.readFloat();
          var numLink = this.readInt();

          ik.ikBone = _boneNode;
          ik.targetBone = targetBone;
          ik.iteration = iteration;
          ik.weight = weight * 0.25 * Math.PI;
          ik.boneArray = [];

          console.log('targetBoneNo: ' + targetBoneNo + ' ' + targetBone.name + ' ikBone: ' + ik.ikBone.name);

          var linkBoneNoArray = [];
          for (var j = 0; j < numLink; j++) {
            var linkNo = this.readUnsignedShort();
            var _bone = this._boneArray[linkNo];

            var limitFlag = this.readUnsignedByte();
            if (limitFlag === 1) {
              // TODO: constraint
              var minX = this.readFloat();
              var minY = this.readFloat();
              var minZ = this.readFloat();
              var maxX = this.readFloat();
              var maxY = this.readFloat();
              var maxZ = this.readFloat();
            }

            ik.boneArray.push(_bone);
          }

          this._workingNode.ikArray.push(ik);
        }
      }

      // set parent node
      var noParent = 0;
      if (this._boneIndexSize === 1) {
        noParent = 0xFF;
      } else if (this._boneIndexSize === 2) {
        noParent = 0xFFFF;
      } else if (this._boneIndexSize === 4) {
        noParent = 0xFFFFFFFF;
      }

      for (var _i2 = 0; _i2 < this._boneCount; _i2++) {
        var _bone2 = this._boneArray[_i2];
        var parentNo = parentNoArray[_i2];
        var bonePos = bonePositionArray[_i2];

        if (parentNo !== noParent) {
          this._boneArray[parentNo].addChildNode(_bone2);

          var parentPos = bonePositionArray[parentNo];
          _bone2._position.x = bonePos.x - parentPos.x;
          _bone2._position.y = bonePos.y - parentPos.y;
          _bone2._position.z = bonePos.z - parentPos.z;
        } else {
          this._rootBone.addChildNode(_bone2);
          _bone2._position = bonePos;
        }
      }

      // calc initial matrix
      for (var _i3 = 0; _i3 < this._boneCount; _i3++) {
        var _bonePos = bonePositionArray[_i3];
        var matrix = _jscenekit.SCNMatrix4.matrixWithTranslation(-_bonePos.x, -_bonePos.y, -_bonePos.z);
        this._boneInverseMatrixArray.push(matrix);
      }

      this._boneArray.push(this._rootBone);
      this._boneInverseMatrixArray.push(_jscenekit.SCNMatrix4.matrixWithTranslation(0, 0, 0));

      this._workingNode.addChildNode(this._rootBone);
    }

    /**
     * read PMX face data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readFace',
    value: function _readFace() {
      var faceCount = this.readUnsignedInt();
      this._faceCount = faceCount;

      for (var i = 0; i < faceCount; i++) {
        var name = this._readPascalString();
        var englishName = this._readPascalString();
        var panelNo = this.readUnsignedByte();
        var type = this.readUnsignedByte();
        var offsetCount = this.readInt();

        switch (type) {
          case 0:
            // group morph
            this._readGroupMorph(offsetCount);
            break;
          case 1:
            // vertex morph
            this._readVertexMorph(offsetCount);
            this._faceNameArray.push(name);
            break;
          case 2:
            // bone morph
            this._readBoneMorph(offsetCount);
            break;
          case 3:
            // UV morph
            this._readUVMorph(offsetCount, 0);
            break;
          case 4:
            // additional UV - 1
            this._readUVMorph(offsetCount, 1);
            break;
          case 5:
            // additional UV - 2
            this._readUVMorph(offsetCount, 2);
            break;
          case 6:
            // additional UV - 3
            this._readUVMorph(offsetCount, 3);
            break;
          case 7:
            // additional UV - 4
            this._readUVMorph(offsetCount, 4);
            break;
          case 8:
            // material morph
            this._readMaterialMorph(offsetCount);
            break;
          case 9:
            // flip morph
            this._readFlipMorph(offsetCount);
            break;
          case 10:
            // impulse morph
            this._readImpulseMorph(offsetCount);
            break;
          default:
            // unknown type
            throw new Error('unknown face type: ' + type);
        }
      }
    }

    /**
     * read PMX vertex morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readVertexMorph',
    value: function _readVertexMorph(count) {
      var faceVertex = [];

      for (var i = 0; i < count; i++) {
        var _index7 = this.readInteger(this._indexSize);
        var vertexIndex = _index7 * 3;

        var x = this.readFloat();
        var y = this.readFloat();
        var z = -this.readFloat();

        faceVertex[vertexIndex + 0] = x;
        faceVertex[vertexIndex + 1] = y;
        faceVertex[vertexIndex + 2] = z;
      }

      this._faceVertexArray.push(faceVertex);
    }

    /**
     * read PMX uv morphing data
     * @access private
     * @param {number} count -
     * @param {number} textureNo -
     * @returns {void}
     */

  }, {
    key: '_readUVMorph',
    value: function _readUVMorph(count, textureNo) {
      for (var i = 0; i < count; i++) {
        var _index8 = this.readInteger(this._indexSize);
        var x = this.readFloat();
        var y = this.readFloat();
        var z = this.readFloat();
        var w = this.readFloat();
      }
    }

    /**
     * read PMX bone morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readBoneMorph',
    value: function _readBoneMorph(count) {
      for (var i = 0; i < count; i++) {
        var _index9 = this.readInteger(this._boneIndexSize);
        var posX = this.readFloat();
        var posY = this.readFloat();
        var posZ = -this.readFloat();

        var quatX = this.readFloat();
        var quatY = this.readFloat();
        var quatZ = this.readFloat();
        var quatW = this.readFloat();
      }
    }

    /**
     * read PMX material morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readMaterialMorph',
    value: function _readMaterialMorph(count) {
      for (var i = 0; i < count; i++) {
        var _index10 = this.readInteger(this._materialIndexSize);
        var addColor = this.readUnsignedByte();
        var diffuseColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
        var specularColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
        var shininess = this.readFloat();
        var ambientColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
        var edgeColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
        var edgeSize = this.readFloat();
        var textureColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
        var sphereColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
        var toonColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
      }
    }

    /** 
     * read PMX group morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readGroupMorph',
    value: function _readGroupMorph(count) {
      for (var i = 0; i < count; i++) {
        var morphIndex = this.readInteger(this._morphIndexSize);
        var rate = this.readFloat();
      }
    }

    /**
     * read PMX flip morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readFlipMorph',
    value: function _readFlipMorph(count) {
      for (var i = 0; i < count; i++) {
        var morphIndex = this.readInteger(this._morphIndexSize);
        var rate = this.readFloat();
      }
    }

    /**
     * read PMX impulse morphing data
     * @access private
     * @param {number} count -
     * @returns {void}
     */

  }, {
    key: '_readImpulseMorph',
    value: function _readImpulseMorph(count) {
      for (var i = 0; i < count; i++) {
        var morphIndex = this.readInteger(this._morphIndexSize);
        var isLocal = this.readUnsignedByte();

        var vx = this.readFloat();
        var vy = this.readFloat();
        var vz = -this.readFloat();

        var torqueX = this.readFloat();
        var torqueY = this.readFloat();
        var torqueZ = this.readFloat();
      }
    }

    /**
     * read PMX face morphing data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_createFaceMorph',
    value: function _createFaceMorph() {
      var morpher = new _jscenekit.SCNMorpher();
      morpher.calculationMode = _jscenekit.SCNMorpherCalculationMode.additive;

      var count = this._faceVertexArray.length;
      for (var i = 0; i < count; i++) {
        var faceVertexData = this._faceVertexArray[i];
        var faceVertexSource = new _jscenekit.SCNGeometrySource(faceVertexData, // data
        _jscenekit.SCNGeometrySource.Semantic.vertex, // semantic
        this._vertexCount, // vectorCount
        true, // usesFloatComponents
        3, // componentsPerVector
        4, // bytesPerComponent
        0, // dataOffset
        12 // dataStride
        );
        var faceGeometry = new _jscenekit.SCNGeometry([faceVertexSource, this._normalSource], []);
        faceGeometry.name = this._faceNameArray[i];

        morpher.targets.push(faceGeometry);
      }
      var geometryNode = this._workingNode.childNodeWithNameRecursively('Geometry', true);
      geometryNode.morpher = morpher;
      this._workingNode.geometryMorpher = morpher;
    }

    /**
     * read PMX display info
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readDisplayInfo',
    value: function _readDisplayInfo() {
      var displayCount = this.readUnsignedInt();

      for (var i = 0; i < displayCount; i++) {
        var infoName = this._readPascalString();
        var englishInfoName = this._readPascalString();
        var flag = this.readUnsignedByte();
        var infoCount = this.readInt();

        for (var j = 0; j < infoCount; j++) {
          var type = this.readUnsignedByte();

          if (type === 0) {
            var boneIndex = this.readInteger(this._boneIndexSize);
          } else if (type === 1) {
            var morphIndex = this.readInteger(this._morphIndexSize);
          } else {
            throw new Error('unknown display info type: ' + type);
          }
        }
      }
    }

    /**
     * create geometry objects
     * @access private
     * @returns {void}
     */

  }, {
    key: '_createGeometry',
    value: function _createGeometry() {
      var vertexData = this._vertexArray;
      var normalData = this._normalArray;
      var texcoordData = this._texcoordArray;
      var boneWeightsData = this._boneWeightsArray;
      var boneIndicesData = null;
      switch (this._boneIndexSize) {
        case 1:
          {
            //const array = []
            //this._boneIndicesArray.forEach((data) => {
            //  array.push(data)
            //})
            //boneIndicesData = array
            boneIndicesData = this._boneIndicesArray;
            break;
          }
        case 2:
          {
            //const array = []
            //this._boneIndicesArray.forEach((data) => {
            //  array.push(data)
            //})
            //boneIndicesData = array
            boneIndicesData = this._boneIndicesArray;
            break;
          }
        case 4:
          {
            //const array = []
            //this._boneIndicesArray.forEach((data) => {
            //  array.push(data)
            //})
            //boneIndicesData = array
            boneIndicesData = this._boneIndicesArray;
            break;
          }
        default:
          {
            throw new Error('unknown bone indices size: ' + this._boneIndexSize);
          }
      }

      this._vertexSource = new _jscenekit.SCNGeometrySource(vertexData, // data
      _jscenekit.SCNGeometrySource.Semantic.vertex, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );
      this._normalSource = new _jscenekit.SCNGeometrySource(normalData, // data
      _jscenekit.SCNGeometrySource.Semantic.normal, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );
      this._texcoordSource = new _jscenekit.SCNGeometrySource(texcoordData, // data
      _jscenekit.SCNGeometrySource.Semantic.texcoord, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
      );

      var boneIndicesSource = new _jscenekit.SCNGeometrySource(boneIndicesData, // data
      _jscenekit.SCNGeometrySource.Semantic.boneIndices, // semantic
      this._vertexCount, // vectorCount
      false, // usesFloatComponents
      4, // componentsPerVector
      this._boneIndexSize, // bytesPerComponent
      0, // dataOffset
      4 * this._boneIndexSize // dataStride
      );
      var boneWeightsSource = new _jscenekit.SCNGeometrySource(boneWeightsData, // data
      _jscenekit.SCNGeometrySource.Semantic.boneWeights, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      4, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      16 // dataStride
      );

      for (var i = 0; i < this._materialCount; i++) {
        var count = this._materialIndexCountArray[i];
        var indexArray = this._separatedIndexArray[i];
        var indexData = null;
        switch (this._indexSize) {
          case 1:
            {
              //const array = []
              //indexArray.forEach((data) => {
              //  array.push(data)
              //})
              //indexData = array
              indexData = indexArray;
              break;
            }
          case 2:
            {
              //const array = []
              //indexArray.forEach((data) => {
              //  array.push(data)
              //})
              //indexData = array
              indexData = indexArray;
              break;
            }
          case 4:
            {
              //const array = []
              //indexArray.forEach((data) => {
              //  array.push(data)
              //})
              //indexData = array
              indexData = indexArray;
              break;
            }
          default:
            {
              throw new Error('unknown vertex indices size: ' + this._boneIndexSize);
            }
        }

        // FIXME: use Point/Line in the A-A-A pattern or the A-B-A pattern

        var primitiveType = this._materialShapeArray[i];
        var element = new _jscenekit.SCNGeometryElement(indexData, // data
        primitiveType, // primitiveType
        count, // primitiveCount
        this._indexSize // bytesPerIndex
        );

        this._elementArray.push(element);
      }

      //const program = new MMDProgram()
      //// TODO: implement MMD renderer
      //this._materialArray.forEach((material) => {
      //  material.program = program
      //})
      var geometry = new _jscenekit.SCNGeometry([this._vertexSource, this._normalSource, this._texcoordSource], this._elementArray);
      geometry.materials = this._materialArray;
      geometry.name = 'Geometry';

      var geometryNode = new _jscenekit.SCNNode(geometry);
      geometryNode.name = 'Geometry';

      var skinner = new _jscenekit.SCNSkinner(geometry, // baseGeometry
      this._boneArray, // bones
      this._boneInverseMatrixArray, // boneInverseBindTransforms
      boneWeightsSource, // boneWeights
      boneIndicesSource // boneIndices
      );

      geometryNode.skinner = skinner;
      geometryNode.skinner.skeleton = this._rootBone;
      geometryNode.castsShadow = true;

      this._workingNode.name = this._modelName;
      this._workingNode.castsShadow = true;
      this._workingNode.addChildNode(geometryNode);

      this._workingNode.vertexArray = this._vertexArray;

      this._workingNode.boneArray = this._boneArray;
      this._workingNode.boneInverseMatrixArray = this._boneInverseMatrixArray;

      this._workingNode.vertexCount = this._vertexCount;
      this._workingNode.vertexArray = this._vertexArray;
      this._workingNode.normalArary = this._normalArray;
      this._workingNode.texcoordArray = this._texcoordArray;

      this._workingNode.boneWeightsArray = this._boneWeight;
      this._workingNode.indexCount = this._indexCount;
      this._workingNode.materialCount = this._materialCount;
      this._workingNode.materialArray = this._materialArray;
      this._workingNode.materialIndexCountArray = this._materialIndexCountArray;
      this._workingNode.rootBone = this._rootBone;
    }

    /**
     * read PMX physics body data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readPhysicsBody',
    value: function _readPhysicsBody() {
      var _this4 = this;

      var bodyCount = this.readUnsignedInt();

      console.log('readPhysicsBody bodyCount: ' + bodyCount);

      for (var i = 0; i < bodyCount; i++) {
        var name = this._readPascalString();
        console.log('physics body name: ' + name);
        var englishName = this._readPascalString();
        var boneIndex = this.readInteger(this._boneIndexSize);

        var groupIndex = this.readUnsignedByte();
        var groupTarget = this.readUnsignedShort();
        var shapeType = this.readUnsignedByte();
        var dx = this.readFloat();
        var dy = this.readFloat();
        var dz = this.readFloat();
        var posX = this.readFloat();
        var posY = this.readFloat();
        var posZ = -this.readFloat();
        var rotX = -this.readFloat();
        var rotY = -this.readFloat();
        var rotZ = this.readFloat();
        var weight = this.readFloat();
        var positionDim = this.readFloat();
        var rotateDim = this.readFloat();
        var recoil = this.readFloat();
        var friction = this.readFloat();
        var type = this.readUnsignedByte();

        var bodyType = null;
        if (type === 0) {
          bodyType = _jscenekit.SCNPhysicsBodyType.kinematic;
        } else if (type === 1) {
          bodyType = _jscenekit.SCNPhysicsBodyType.dynamic;
        } else if (type === 2) {
          bodyType = _jscenekit.SCNPhysicsBodyType.dynamic;
        }
        bodyType = _jscenekit.SCNPhysicsBodyType.kinematic; // for debug

        var _shape = null;
        if (shapeType === 0) {
          _shape = new _jscenekit.SCNSphere(dx);
        } else if (shapeType === 1) {
          _shape = new _jscenekit.SCNBox(dx, dy, dz, 0.0);
        } else if (shapeType === 2) {
          _shape = new _jscenekit.SCNCapsule(dx, dy);
        } else {
          throw new Error('unknown physics body shape: ' + shapeType);
        }

        var bone = null;
        if (boneIndex !== -1) {
          bone = this._boneArray[boneIndex];
        }
        if (bone === null || typeof bone === 'undefined') {
          bone = this._boneArray[0];
        }

        var worldTransform = (0, _jscenekit.SCNMatrix4MakeTranslation)(posX, posY, posZ);
        worldTransform = worldTransform.rotation(0, 1, 0, rotY);
        worldTransform = worldTransform.rotation(1, 0, 0, rotX);
        worldTransform = worldTransform.rotation(0, 0, 1, rotZ);

        var invBoneTransform = bone.worldTransform.invert();
        var physicsTransform = worldTransform.mult(invBoneTransform);
        var physicsShape = new _jscenekit.SCNPhysicsShape(_shape, null);
        var transformedShape = new _jscenekit.SCNPhysicsShape([physicsShape], [physicsTransform]);

        if (bone.physicsBody !== null) {
          var identity = (0, _jscenekit.SCNMatrix4MakeTranslation)(0, 0, 0);
          transformedShape = new _jscenekit.SCNPhysicsShape([bone.physicsBody.physicsShape, transformedShape], [identity, identity]);
        }
        var body = new _jscenekit.SCNPhysicsBody(bodyType, transformedShape);

        body.isAffectedByGravity = true;
        body.mass = weight;
        body.friction = friction;
        body.rollingFriction = friction;
        body.dumping = positionDim;
        body.angularDamping = rotateDim;
        body.categoryBitMask = 1 << groupIndex;
        body.collisionBitMask = groupTarget;
        body.restitution = recoil;
        body.usesDefaultMomentOfInertia = true;
        body.allowsResting = true;
        body.charge = 0;

        if (boneIndex !== -1) {
          bone.physicsBody = body;
        }

        this._physicsBoneArray.push(bone);
      }

      this._physicsBoneArray.forEach(function (bone) {
        _this4._physicsBodyArray.push(bone.physicsBody);
      });
    }

    /**
     * read PMX constraint data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readConstraint',
    value: function _readConstraint() {
      var constraintCount = this.readUnsignedInt();
      this._workingNode.joints = [];
      for (var i = 0; i < constraintCount; i++) {
        var name = this._readPascalString();
        console.log('constraint name: ' + name);
        var englishName = this._readPascalString();
        var type = this.readUnsignedByte();

        var bodyANo = this.readInteger(this._physicsBodyIndexSize);
        var bodyBNo = this.readInteger(this._physicsBodyIndexSize);

        var bodyA = this._physicsBodyArray[bodyANo];
        var bodyB = this._physicsBodyArray[bodyBNo];

        var pos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var rot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var minPos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var manPos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var minRot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var manRot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var springPos = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());
        var springRot = new _jscenekit.SCNVector3(this.readFloat(), this.readFloat(), -this.readFloat());

        var boneA = this._physicsBoneArray[bodyANo];
        var boneB = this._physicsBoneArray[bodyBNo];

        var anchorA = new _jscenekit.SCNVector3(pos.x - boneA.worldTransform.m41, pos.y - boneA.worldTransform.m42, pos.z - boneA.worldTransform.m43);
        var anchorB = new _jscenekit.SCNVector3(pos.x - boneB.worldTransform.m41, pos.y - boneB.worldTransform.m42, pos.z - boneB.worldTransform.m43);

        if (boneA === boneB) {
          continue;
        }

        var constraint = new _jscenekit.SCNPhysicsBallSocketJoint(bodyA, anchorA, bodyB, anchorB);
        this._workingNode.joints.push(constraint);
      }
    }

    /**
     * read PMX soft body data
     * @access private
     * @returns {void}
     */

  }, {
    key: '_readSoftBody',
    value: function _readSoftBody() {
      var softBodyCount = this.readUnsignedInt();

      for (var i = 0; i < softBodyCount; i++) {
        var name = this._readPascalString();
        var englishName = this._readPascalString();

        var _shape2 = this.readUnsignedByte();
        if (_shape2 === 0) {
          // TriMesh
        } else if (_shape2 === 1) {
          // Rope
        } else {
          throw new Error('unknown softbody type: ' + _shape2);
        }

        var _index11 = this.readInteger(this._materialIndexSize);
        var groupIndex = this.readUnsignedByte();
        var groupTarget = this.readUnsignedShort();

        var flags = this.readUnsignedByte();
        if (flags & 0x01) {
          // TODO: create B-Link
        }
        if (flags & 0x02) {
          // TODO: create cluster
        }
        if (flags & 0x04) {}
        // TODO: mix links


        /*
          4  : int	| B-Link 作成距離
          4  : int	| クラスタ数
          
          4  : float	| 総質量
          4  : float	| 衝突マージン
          
          4  : int	| AeroModel - 0:V_Point, 1:V_TwoSided, 2:V_OneSided, 3:F_TwoSided, 4:F_OneSided
          
          <config>
          4  : float	| VCF
          4  : float	| DP
          4  : float	| DG
          4  : float	| LF
          4  : float	| PR
          4  : float	| VC
          4  : float	| DF
          4  : float	| MT
          4  : float	| CHR
          4  : float	| KHR
          4  : float	| SHR
          4  : float	| AHR
          
          <cluster>
          4  : float	| SRHR_CL
          4  : float	| SKHR_CL
          4  : float	| SSHR_CL
          4  : float	| SR_SPLT_CL
          4  : float	| SK_SPLT_CL
          4  : float	| SS_SPLT_CL
          
          <iteration>
          4  : int	| V_IT
          4  : int	| P_IT
          4  : int	| D_IT
          4  : int	| C_IT
          
          <material>
          4  : float	| LST
          4  : float	| AST
          4  : float	| VST
          
          4  : int	| アンカー剛体数
          <アンカー剛体>
          n  : 剛体Indexサイズ  | 関連剛体Index
          n  : 頂点Indexサイズ  | 関連頂点Index
          1  : byte	| Near モード  0:OFF 1:ON
          </アンカー剛体>
          * アンカー剛体数
          
          4  : int	| Pin頂点数
          <Pin頂点>
          n  : 頂点Indexサイズ  | 関連頂点Index
          </Pin頂点>
          * Pin頂点数
        */
      }
    }
  }], [{
    key: 'getNode',
    value: function getNode(data, directoryPath) {
      var reader = new MMDPMXReader(data, directoryPath);
      return reader._loadPMXFile();
    }
  }]);

  return MMDPMXReader;
}(_MMDReader3.default);

exports.default = MMDPMXReader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _MMDSceneSource = __webpack_require__(3);

var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @access public
 * @extends {MMDReader}
 */
var MMDVACReader = function (_MMDReader) {
  _inherits(MMDVACReader, _MMDReader);

  /**
   * 
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDVACReader(data, directoryPath) {
    _classCallCheck(this, MMDVACReader);

    var isBinary = false;
    var isBigEndian = false;
    var encoding = 'sjis';
    return _possibleConstructorReturn(this, (MMDVACReader.__proto__ || Object.getPrototypeOf(MMDVACReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @returns {?MMDNode} -
   */


  _createClass(MMDVACReader, [{
    key: 'loadVACFile',


    /**
     * @access private
     * @returns {?MMDNode} -
     */
    value: function loadVACFile() {
      var _this2 = this;

      var lines = this.binaryData.split('\r\n');
      if (lines.length < 6) {
        return null;
      }
      var name = lines[0];
      var fileName = lines[1];
      var scaleStr = lines[2];
      var positions = lines[3].split(',');
      var rotations = lines[4].split(',');
      var boneName = lines[5];

      var xFilePath = this.directoryPath + '/' + fileName;
      var xNode = new _MMDNode2.default();
      xNode._loadedPromise = new Promise(function (resolve, reject) {
        _this2._resolveFunction = resolve;
        _this2._rejectFunction = reject;
      });

      var source = _MMDSceneSource2.default.sceneSourceWithURLOptions(xFilePath);
      source.didLoad.then(function () {
        //if(!scene){
        //  console.error(`cannot read file: ${xFilePath}`)
        //  return null
        //}

        _this2._model = source.getModel();
        if (!_this2._model) {
          throw new Error('model load error');
        }
        return _this2._model.didLoad;
      }).then(function () {
        _this2._model.name = name;
        var scale = parseFloat(scaleStr);
        if (!isNaN(scale)) {
          var s = scale * 10.0;
          _this2._model.scale = new _jscenekit.SCNVector3(s, s, s);
        } else {
          _this2._model.scale = new _jscenekit.SCNVector3(10.0, 10.0, 10.0);
        }

        if (positions.length >= 3) {
          var posX = parseFloat(positions[0]);
          var posY = parseFloat(positions[1]);
          var posZ = parseFloat(positions[2]);
          if (!isNaN(posX) && !isNaN(posY) && !isNaN(posZ)) {
            _this2._model.position = new _jscenekit.SCNVector3(posX, posY, posZ);
          }
        }

        if (rotations.length >= 3) {
          var rotX = parseFloat(rotations[0]);
          var rotY = parseFloat(rotations[1]);
          var rotZ = parseFloat(rotations[2]);
          if (!isNaN(rotX) && !isNaN(rotY) && !isNaN(rotZ)) {
            // TODO: implement
          }
        }

        xNode.copySCNNodeValues(_this2._model);
        xNode.copyValues(_this2._model);

        _this2._resolveFunction();
      }).catch(function (error) {
        throw new Error('model load error: ' + error);
      });
      return xNode;
    }
  }], [{
    key: 'getNode',
    value: function getNode(data, directoryPath) {
      var reader = new MMDVACReader(data, directoryPath);
      var node = reader.loadVACFile();

      return node;
    }
  }]);

  return MMDVACReader;
}(_MMDReader3.default);

exports.default = MMDVACReader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _constants = __webpack_require__(19);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _VMDMotionType = {
  model: Symbol(),
  cameraOrLight: Symbol(),
  camera: Symbol(),
  light: Symbol(),
  unknown: Symbol()

  /**
   *
   * @access public
   * @extends {MMDReader}
   */
};
var MMDVMDReader = function (_MMDReader) {
  _inherits(MMDVMDReader, _MMDReader);

  /**
   *
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @constructor
   */
  function MMDVMDReader(data, directoryPath) {
    _classCallCheck(this, MMDVMDReader);

    var isBinary = true;
    var isBigEndian = false;
    var encoding = 'sjis';

    var _this = _possibleConstructorReturn(this, (MMDVMDReader.__proto__ || Object.getPrototypeOf(MMDVMDReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this._workingAnimationGroup = null;
    _this._animationHash = null;
    _this._faceAnimationHash = null;

    _this.fps = 30.0;

    // header
    _this._vmdMagic = '';
    _this._motionName = '';
    _this._motionType = _VMDMotionType.unknown;

    // frame
    _this._frameCount = 0;
    _this._frameLength = 0;
    return _this;
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} directoryPath -
   * @returns {CAAnimationGroup} -
   */


  _createClass(MMDVMDReader, [{
    key: '_loadVMDFile',


    /**
     * @access private
     * @returns {CAAnimationGroup} -
     */
    value: function _loadVMDFile() {
      this._workingAnimationGroup = new _jscenekit.CAAnimationGroup();
      this._workingAnimationGroup.animations = [];

      this._animationHash = new Map();
      this._faceAnimationHash = new Map();

      this._readVMDHeader();
      this._readFrame();
      this._readFaceMotion();
      this._createAnimations();

      if (this.pos >= this.length) {
        return this._workingAnimationGroup;
      }

      this._readCameraMotion();
      this._readLightMotion();

      //console.log(`pos: ${this.pos}, length: ${this.length}`)
      if (this.pos >= this.length) {
        return this._workingAnimationGroup;
      }

      this._readShadow();

      if (this.pos >= this.length) {
        return this._workingAnimationGroup;
      }

      this._readVisibilityAndIK();

      return this._workingAnimationGroup;
    }
  }, {
    key: '_readVMDHeader',
    value: function _readVMDHeader() {
      this._vmdMagic = this.readString(30);
      this._motionName = this.readString(20);

      if (this._motionName === 'カメラ・照明') {
        this._motionType = _VMDMotionType.cameraOrLight;
      } else {
        this._motionType = _VMDMotionType.model;
      }
    }
  }, {
    key: '_readFrame',
    value: function _readFrame() {
      var frameCount = this.readUnsignedInt();
      this._frameCount = frameCount;
      this._frameLength = 0;
      var bytesPerFrame = 111;

      console.log('readFrame: frameCount: ' + frameCount);

      if (this._motionType === _VMDMotionType.cameraOrLight && frameCount > 0) {
        console.warn('MMDVMDReader: not model motion data has bone motion data');
        this.skip(bytesPerFrame * frameCount, true);
        return;
      }

      for (var i = 0; i < frameCount; i++) {
        var boneName = this.readString(15);
        //console.log(`boneName: ${boneName}`)
        if (boneName === null) {
          console.warn('motion(' + i + '): skip because of broken bone name');
          this.skip(96);
          continue;
        }
        var posXMotion = this._animationHash.get('posX:' + boneName);
        var posYMotion = this._animationHash.get('posY:' + boneName);
        var posZMotion = this._animationHash.get('posZ:' + boneName);
        var rotMotion = this._animationHash.get('rot:' + boneName);

        if (typeof posXMotion === 'undefined') {
          posXMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.x');
          posYMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.y');
          posZMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation.z');
          rotMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.quaternion');

          posXMotion.values = [];
          posYMotion.values = [];
          posZMotion.values = [];
          rotMotion.values = [];

          posXMotion.keyTimes = [];
          posYMotion.keyTimes = [];
          posZMotion.keyTimes = [];
          rotMotion.keyTimes = [];

          posXMotion.timingFunctions = [];
          posYMotion.timingFunctions = [];
          posZMotion.timingFunctions = [];
          rotMotion.timingFunctions = [];

          this._animationHash.set('posX:' + boneName, posXMotion);
          this._animationHash.set('posY:' + boneName, posYMotion);
          this._animationHash.set('posZ:' + boneName, posZMotion);
          this._animationHash.set('rot:' + boneName, rotMotion);
        }

        var frameIndex = posXMotion.keyTimes.length - 1;
        var frameNo = this.readUnsignedInt();
        //console.log(`frameNo: ${frameNo}`)

        while (frameIndex >= 0) {
          var k = posXMotion.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        // insert frameNo at frameIndex
        posXMotion.keyTimes.splice(frameIndex, 0, frameNo);
        posYMotion.keyTimes.splice(frameIndex, 0, frameNo);
        posZMotion.keyTimes.splice(frameIndex, 0, frameNo);
        rotMotion.keyTimes.splice(frameIndex, 0, frameNo);

        if (frameNo > this._frameLength) {
          this._frameLength = frameNo;
        }

        var posX = this.readFloat();
        var posY = this.readFloat();
        var posZ = this.readFloat();
        var rotate = new _jscenekit.SCNQuaternion(-this.readFloat(), -this.readFloat(), this.readFloat(), this.readFloat()).normalize();
        //console.log(`pos: ${posX}, ${posY}, ${posZ}`)

        var interpolation = [];
        for (var j = 0; j < 64; j++) {
          interpolation.push(this.readUnsignedByte() / 127.0);
        }

        var timingX = new _jscenekit.CAMediaTimingFunction(interpolation[0], interpolation[4], interpolation[8], interpolation[12]);
        posXMotion.timingFunctions.splice(frameIndex, 0, timingX);

        var timingY = new _jscenekit.CAMediaTimingFunction(interpolation[1], interpolation[5], interpolation[9], interpolation[13]);
        posYMotion.timingFunctions.splice(frameIndex, 0, timingY);

        var timingZ = new _jscenekit.CAMediaTimingFunction(interpolation[2], interpolation[6], interpolation[10], interpolation[14]);
        posZMotion.timingFunctions.splice(frameIndex, 0, timingZ);

        var timingRot = new _jscenekit.CAMediaTimingFunction(interpolation[3], interpolation[7], interpolation[11], interpolation[15]);
        rotMotion.timingFunctions.splice(frameIndex, 0, timingRot);

        posXMotion.values.splice(frameIndex, 0, posX);
        posYMotion.values.splice(frameIndex, 0, posY);
        posZMotion.values.splice(frameIndex, 0, posZ);
        rotMotion.values.splice(frameIndex, 0, rotate);
      }
    }
  }, {
    key: '_readFaceMotion',
    value: function _readFaceMotion() {
      var faceFrameCount = this.readUnsignedInt();
      var timingFunc = _jscenekit.CAMediaTimingFunction.functionWithName(_jscenekit.kCAMediaTimingFunctionLinear);
      var bytesPerFrame = 23;

      console.log('readFaceMotion: faceFrameCount: ' + faceFrameCount);

      if (this._motionType === _VMDMotionType.cameraOrLight && faceFrameCount > 0) {
        console.warn('not model motion data has face motion data');
        this.skip(bytesPerFrame * faceFrameCount, true);
        return;
      }

      for (var i = 0; i < faceFrameCount; i++) {
        var name = this.readString(15);
        var frameNo = this.readUnsignedInt();
        var factor = this.readFloat();

        //console.log(`faceName: ${name}`)

        var keyPath = 'morpher.weights.' + name;
        var animation = this._faceAnimationHash.get(name);

        if (typeof animation === 'undefined') {
          animation = new _jscenekit.CAKeyframeAnimation(keyPath);
          animation.values = [];
          animation.keyTimes = [];
          animation.timingFunctions = [];
          this._faceAnimationHash.set(name, animation);
        }

        var frameIndex = animation.keyTimes.length - 1;
        while (frameIndex >= 0) {
          var k = animation.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        // insert frameNo at frameIndex
        animation.keyTimes.splice(frameIndex, 0, frameNo);
        animation.values.splice(frameIndex, 0, factor);
        animation.timingFunctions.splice(frameIndex, 0, timingFunc);
      }
    }
  }, {
    key: '_createAnimations',
    value: function _createAnimations() {
      var _this2 = this;

      var duration = this._frameLength / this.fps;

      //console.log('_createAnimations')
      this._animationHash.forEach(function (motion, key) {
        // normalize keyTimes
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        for (var num = 0; num < motion.keyTimes.length; num++) {
          var keyTime = motion.keyTimes[num] / motionLength;
          motion.keyTimes[num] = keyTime;
        }

        motion.duration = motionLength / _this2.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        //console.log('animations.push ' + key)
        _this2._workingAnimationGroup.animations.push(motion);
      });

      this._faceAnimationHash.forEach(function (motion, key) {
        // normalize keyTimes
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        for (var num = 0; num < motion.keyTimes.length; num++) {
          var keyTime = motion.keyTimes[num] / motionLength;
          motion.keyTimes[num] = keyTime;
        }

        motion.duration = motionLength / _this2.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        _this2._workingAnimationGroup.animations.push(motion);
      });

      this._workingAnimationGroup.duration = duration;
      this._workingAnimationGroup.usesSceneTimeBase = false;
      this._workingAnimationGroup.isRemovedOnCompletion = false;
      this._workingAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;
    }
  }, {
    key: '_readCameraMotion',
    value: function _readCameraMotion() {
      var _this3 = this;

      var cameraFrameCount = this.readUnsignedInt();
      var bytesPerFrame = 61;

      console.log('readCameraMotion: cameraFrameCount: ' + cameraFrameCount);

      if (cameraFrameCount === 0) {
        return;
      }

      if (this._motionType !== _VMDMotionType.cameraOrLight) {
        console.warn('not camera motion has motion data');
        this.skip(bytesPerFrame * cameraFrameCount, true);
        return;
      }
      this._motionType = _VMDMotionType.camera;

      // init values
      this._frameCount = cameraFrameCount;
      this._frameLength = 0;

      var distanceMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_NODE_NAME + '.translation.z');
      var posXMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.x');
      var posYMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.y');
      var posZMotion = new _jscenekit.CAKeyframeAnimation('transform.translation.z');
      var rotZMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_ROTZ_NODE_NAME + '.eulerAngles.z');
      var rotXMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_ROTX_NODE_NAME + '.eulerAngles.x');
      var rotYMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_ROTY_NODE_NAME + '.eulerAngles.y');
      var angleMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_NODE_NAME + '.camera.yFov');
      var persMotion = new _jscenekit.CAKeyframeAnimation('/' + _constants.MMD_CAMERA_NODE_NAME + '.camera.usesOrthographicProjection');

      distanceMotion.values = [];
      posXMotion.values = [];
      posYMotion.values = [];
      posZMotion.values = [];
      rotXMotion.values = [];
      rotYMotion.values = [];
      rotZMotion.values = [];
      angleMotion.values = [];
      persMotion.values = [];

      distanceMotion.timingFunctions = [];
      posXMotion.timingFunctions = [];
      posYMotion.timingFunctions = [];
      posZMotion.timingFunctions = [];
      rotXMotion.timingFunctions = [];
      rotYMotion.timingFunctions = [];
      rotZMotion.timingFunctions = [];
      angleMotion.timingFunctions = [];
      persMotion.timingFunctions = [];

      for (var i = 0; i < cameraFrameCount; i++) {
        var frameIndex = distanceMotion.keyTimes.length - 1;
        var frameNo = this.readUnsignedInt();

        while (frameIndex >= 0) {
          var k = distanceMotion.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        distanceMotion.keyTimes.splice(frameIndex, 0, frameNo);
        posXMotion.keyTimes.splice(frameIndex, 0, frameNo);
        posYMotion.keyTimes.splice(frameIndex, 0, frameNo);
        posZMotion.keyTimes.splice(frameIndex, 0, frameNo);
        rotXMotion.keyTimes.splice(frameIndex, 0, frameNo);
        rotYMotion.keyTimes.splice(frameIndex, 0, frameNo);
        rotZMotion.keyTimes.splice(frameIndex, 0, frameNo);
        angleMotion.keyTimes.splice(frameIndex, 0, frameNo);
        persMotion.keyTimes.splice(frameIndex, 0, frameNo);

        if (frameNo > this._frameLength) {
          this._frameLength = frameNo;
        }

        var distance = -this.readFloat();
        var posX = this.readFloat();
        var posY = this.readFloat();
        var posZ = -this.readFloat();

        var rotX = this.readFloat();
        var rotY = this.readFloat();
        var rotZ = -this.readFloat();

        var interpolation = [];
        for (var j = 0; j < 24; i++) {
          interpolation.push(this.readUnsignedByte() / 127.0);
        }

        var angle = this.readInt();
        var perspective = this.readUnsignedByte();
        var useOrtho = perspective !== 0;

        var timingX = new _jscenekit.CAMediaTimingFunction(interpolation[0], interpolation[2], interpolation[1], interpolation[3]);
        posXMotion.timingFunctions.splice(frameIndex, 0, timingX);

        var timingY = new _jscenekit.CAMediaTimingFunction(interpolation[4], interpolation[6], interpolation[5], interpolation[7]);
        posYMotion.timingFunctions.splice(frameIndex, 0, timingY);

        var timingZ = new _jscenekit.CAMediaTimingFunction(interpolation[8], interpolation[10], interpolation[9], interpolation[11]);
        posZMotion.timingFunctions.splice(frameIndex, 0, timingZ);

        var timingRot = new _jscenekit.CAMediaTimingFunction(interpolation[12], interpolation[14], interpolation[13], interpolation[15]);
        rotXMotion.timingFunctions.splice(frameIndex, 0, timingRot);
        rotYMotion.timingFunctions.splice(frameIndex, 0, timingRot);
        rotZMotion.timingFunctions.splice(frameIndex, 0, timingRot);

        var timingDistance = new _jscenekit.CAMediaTimingFunction(interpolation[16], interpolation[18], interpolation[17], interpolation[19]);
        distanceMotion.timingFunctions.splice(frameIndex, 0, timingDistance);

        var timingAngle = new _jscenekit.CAMediaTimingFunction(interpolation[20], interpolation[22], interpolation[21], interpolation[23]);
        angleMotion.timingFunctions.splice(frameIndex, 0, timingAngle);

        distanceMotion.values.splice(frameIndex, 0, distance);
        posXMotion.values.splice(frameIndex, 0, posX);
        posYMotion.values.splice(frameIndex, 0, posY);
        posZMotion.values.splice(frameIndex, 0, posZ);
        rotXMotion.values.splice(frameIndex, 0, rotX);
        rotYMotion.values.splice(frameIndex, 0, rotY);
        rotZMotion.values.splice(frameIndex, 0, rotZ);
        angleMotion.values.splice(frameIndex, 0, angle);
        persMotion.values.splice(frameIndex, 0, useOrtho);
      }

      var duration = this._frameLength / this.fps;

      var motions = [distanceMotion, posXMotion, posYMotion, posZMotion, rotXMotion, rotYMotion, rotZMotion, angleMotion, persMotion];
      motions.forEach(function (motion) {
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        motion.duration = motionLength / _this3.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        var len = motion.keyTimes.length;
        for (var num = 0; num < len; num++) {
          var keyTime = motion.keyTimes[num] / motionLength;
          motion.keyTimes[num] = keyTime;
        }
        _this3._workingAnimationGroup.animations.push(motion);
      });

      this._workingAnimationGroup.duration = duration;
      this._workingAnimationGroup.usesSceneTimeBase = false;
      this._workingAnimationGroup.isRemovedOnCompletion = false;
      this._workingAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;
    }
  }, {
    key: '_readLightMotion',
    value: function _readLightMotion() {
      var _this4 = this;

      var lightFrameCount = this.readUnsignedInt();
      var bytesPerFrame = 28;

      console.log('readLightMotion: lightFrameCount: ' + lightFrameCount);

      if (lightFrameCount === 0) {
        return;
      }

      if (this._motionType !== _VMDMotionType.cameraOrLight) {
        console.warn('not light motion has light motion data');
        this.skip(bytesPerFrame * lightFrameCount, true);
        return;
      }
      this._motionType = _VMDMotionType.light;

      this._frameCount = lightFrameCount;
      this._frameLength = 0;

      var colorMotion = new _jscenekit.CAKeyframeAnimation('light.color');
      var directionMotion = new _jscenekit.CAKeyframeAnimation('transform.quaternion');

      colorMotion.values = [];
      directionMotion.values = [];

      colorMotion.keyTimes = [];
      directionMotion.keyTimes = [];

      for (var i = 0; i < lightFrameCount; i++) {
        var frameIndex = colorMotion.keyTimes.length - 1;
        var frameNo = this.readUnsignedInt();

        while (frameIndex >= 0) {
          var k = colorMotion.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        colorMotion.keyTimes.splice(frameIndex, 0, frameNo);
        directionMotion.keyTimes.splice(frameIndex, 0, frameNo);

        if (frameNo > this._frameLength) {
          this._frameLength = frameNo;
        }

        var color = (0, _jscenekit.SKColor)(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
        colorMotion.values.splice(frameIndex, 0, color);

        var rotX = this.readFloat();
        var rotY = this.readFloat();
        var rotZ = this.readFloat();

        var cosX = Math.cos(rotX * 0.5);
        var cosY = Math.cos(rotY * 0.5);
        var cosZ = Math.cos(rotZ * 0.5);
        var sinX = Math.sin(rotX * 0.5);
        var sinY = Math.sin(rotY * 0.5);
        var sinZ = Math.sin(rotZ * 0.5);

        var quat = new _jscenekit.SCNQuaternion();
        quat.x = sinX * cosY * cosZ + cosX * sinY * sinZ;
        quat.y = cosX * sinY * cosZ - cosX * cosY * sinZ;
        quat.z = cosX * cosY * sinZ - sinX * sinY * cosZ;
        quat.w = cosX * cosY * cosZ + sinX * sinY * sinZ;

        var direction = quat.normalize();
        directionMotion.values.splice(frameIndex, 0, direction);
      }

      var duration = this._frameLength / this.fps;
      var motions = [colorMotion, directionMotion];

      motions.forEach(function (motion) {
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        motion.duration = motionLength / _this4.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        var len = motion.keyTImes.length;
        for (var num = 0; num < len; num++) {
          var keyTime = motion.keyTimes[num] / motionLength;
          motion.keyTimes[num] = keyTime;
        }

        _this4._workingAnimationGroup.animations.push(motion);
      });

      this._workingAnimationGroup.duration = duration;
      this._workingAnimationGroup.usesSceneTimeBase = false;
      this._workingAnimationGroup.isRemovedOnCompletion = false;
      this._workingAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;
    }
  }, {
    key: '_readShadow',
    value: function _readShadow() {
      var shadowFrameCount = this.readUnsignedInt();
      var shadowArray = [];
      var bytesPerFrame = 9;

      console.log('readShadow: shadowFrameCount: ' + shadowFrameCount);
      if (shadowFrameCount === 0) {
        return;
      }

      var dataLength = bytesPerFrame * shadowFrameCount;
      if (this._motionType !== _VMDMotionType.model) {
        console.warn('not model motion has shadow motion data');
        this.skip(dataLength, true);
        return;
      }

      if (this.getAvailableDataLength() < dataLength) {
        console.warn('this file doesn\'t have shadow data');
        this.skip(dataLength, true);
        return;
      }

      var shadowFrameLength = 0;
      var shadowMotion = new _jscenekit.CAKeyframeAnimation('????'); // FIXME: set appropriate keyPath

      shadowMotion.values = [];
      shadowMotion.keyTimes = [];

      for (var i = 0; i < shadowFrameCount; i++) {
        var frameIndex = shadowMotion.keyTimes.length - 1;
        var frameNo = this.readUnsignedInt();

        while (frameIndex >= 0) {
          var k = shadowMotion.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        shadowMotion.keyTimes.splice(frameIndex, 0, frameNo);

        if (frameNo > this._frameLength) {
          this._frameLength = frameNo;
        }

        var mode = this.readUnsignedByte();
        var distance = this.readFloat();
      }

      //const duration = shadowFrameLength / this.fps

      var motionLength = shadowMotion.keyTimes[shadowMotion.keyTimes.length - 1];
      shadowMotion.duration = motionLength / this.fps;
      shadowMotion.usesSceneTimeBase = false;
      shadowMotion.isRemovedOnCompletion = false;
      shadowMotion.fillMode = _jscenekit.kCAFillModeForwards;

      var len = shadowMotion.keyTimes.length;
      for (var num = 0; num < len; num++) {
        var keyTime = shadowMotion.keyTimes[num] / motionLength;
        shadowMotion.keyTimes[num] = keyTime;
      }

      this._workingAnimationGroup.animations.push(shadowMotion);
    }
  }, {
    key: '_readVisibilityAndIK',
    value: function _readVisibilityAndIK() {
      var _this5 = this;

      var ikFrameCount = this.readUnsignedInt();
      var ikArray = [];
      var bytesPerFrame = 9;

      console.log('readVisibilityAndIK: ikFrameCount: ' + ikFrameCount);

      if (ikFrameCount === 0) {
        return;
      }

      var dataLength = bytesPerFrame * ikFrameCount;
      if (this._motionType !== _VMDMotionType.model) {
        console.warn('not model motion has IK motion data');
        this.skip(dataLength, true);
        return;
      }

      if (this.getAvailableDataLength() < dataLength) {
        console.warn('this file doesn\'t have IK data');
        this.skip(dataLength, true);
        return;
      }

      var ikFrameLength = 0;
      var ikMotion = new _jscenekit.CAKeyframeAnimation('????'); // FIXME: set appropriate keyPath
      var hiddenMotion = new _jscenekit.CAKeyframeAnimation('hidden');

      ikMotion.values = [];
      hiddenMotion.values = [];

      ikMotion.keyTimes = [];
      hiddenMotion.keyTimes = [];

      for (var i = 0; i < ikFrameCount; i++) {
        var frameIndex = ikMotion.keyTimes.length - 1;
        var frameNo = this.readUnsignedInt();

        while (frameIndex >= 0) {
          var k = ikMotion.keyTimes[frameIndex];
          if (k < frameNo) {
            break;
          }
          frameIndex -= 1;
        }
        frameIndex += 1;

        ikMotion.keyTimes.splice(frameIndex, 0, frameNo);
        hiddenMotion.keyTimes.splice(frameIndex, 0, frameNo);

        if (frameNo > this._frameLength) {
          this._frameLength = frameNo;
        }

        var visible = this.readUnsignedByte();
        var hidden = visible === 0;
        var ikNum = this.readUnsignedInt();

        for (var num = 0; num < ikNum; num++) {
          var boneName = this.readString(20);
          var ikOn = this.readUnsignedByte();
        }
      }
      var duration = ikFrameLength / this.fps;

      var motions = [ikMotion, hiddenMotion];
      motions.forEach(function (motion) {
        var motionLength = motion.keyTimes[motion.keyTimes.length - 1];
        motion.duration = motionLength / _this5.fps;
        motion.usesSceneTimeBase = false;
        motion.isRemovedOnCompletion = false;
        motion.fillMode = _jscenekit.kCAFillModeForwards;

        var len = motion.keyTimes.length;
        for (var _num = 0; _num < len; _num++) {
          var keyTime = motion.keyTimes[_num] / motionLength;
          motion.keyTimes[_num] = keyTime;
        }
        _this5._workingAnimationGroup.animations.push(motion);
      });

      this._workingAnimationGroup.duration = duration;
    }
  }], [{
    key: 'getMotion',
    value: function getMotion(data, directoryPath) {
      var reader = new MMDVMDReader(data, directoryPath);
      return reader._loadVMDFile();
    }
  }, {
    key: 'Type',
    get: function get() {
      return _VMDMotionType;
    }
  }]);

  return MMDVMDReader;
}(_MMDReader3.default);

exports.default = MMDVMDReader;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * @access public
 * @extends {MMDReader}
 */
var MMDVPDReader = function (_MMDReader) {
  _inherits(MMDVPDReader, _MMDReader);

  /**
   * 
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDVPDReader(data, directoryPath) {
    _classCallCheck(this, MMDVPDReader);

    var isBinary = false;
    var isBigEndian = false;
    var encoding = 'sjis';

    /**
     * @access private
     * @type {CAAnimationGroup}
     */
    var _this = _possibleConstructorReturn(this, (MMDVPDReader.__proto__ || Object.getPrototypeOf(MMDVPDReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this.workingAnimationGroup = null;
    return _this;
  }

  /**
   * @access public
   * @param {Buffer} data -
   * @param {string} [directoryPath = ''] -
   * @returns {?CAAnimationGroup} -
   */


  _createClass(MMDVPDReader, [{
    key: 'loadVPDFile',


    /**
     * @access private
     * @returns {?CAAnimationGroup} -
     */
    value: function loadVPDFile() {
      var lines = this.binaryData.split('\r\n');

      this.workingAnimationGroup = new _jscenekit.CAAnimationGroup();
      this.workingAnimationGroup.animations = [];

      var magic = lines[0];
      if (magic !== 'Vocaloid Pose Data file') {
        console.error('Unknown file format: ' + magic);
        return null;
      }

      var modelName = lines[2].split(';')[0];
      var numBonesText = lines[3].split(';')[0];
      var numBones = parseInt(numBonesText);
      if (isNaN(numBones)) {
        return null;
      }

      var line = 5;
      for (var boneNo = 0; boneNo < numBones; boneNo++) {
        var boneName = lines[line + 0].split('{')[1];
        var posText = lines[line + 1].split(';')[0].split(',');
        var rotText = lines[line + 2].split(';')[0].split(',');

        var posX = this.getFloatFromText(posText[0]);
        var posY = this.getFloatFromText(posText[1]);
        var posZ = this.getFloatFromText(posText[2]);
        var pos = new _jscenekit.SCNVector3(posX, posY, posZ);

        var rotX = this.getFloatFromText(rotText[0]);
        var rotY = this.getFloatFromText(rotText[1]);
        var rotZ = this.getFloatFromText(rotText[2]);
        var rotW = this.getFloatFromText(rotText[3]);
        var rot = new _jscenekit.SCNVector4(-rotX, -rotY, rotZ, rotW);

        var posMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.translation');
        var rotMotion = new _jscenekit.CAKeyframeAnimation('/' + boneName + '.transform.quaternion');

        posMotion.values = [pos];
        rotMotion.values = [rot];

        posMotion.keyTimes = [0.0];
        rotMotion.keyTimes = [0.0];

        this.workingAnimationGroup.animations.push(posMotion);
        this.workingANimationGroup.animations.push(rotMotion);

        line += 5;
      }

      this.workingAnimationGroup.duration = 0;
      this.workingAnimationGroup.usesSceneTimeBase = false;
      this.workingAnimationGroup.isRemovedOnCompletion = false;
      this.workingAnimationGroup.fillMode = _jscenekit.kCAFillModeForwards;

      return this.workingAnimationGroup;
    }

    /**
     * @access private
     * @param {string} text -
     * @returns {Float} -
     */

  }, {
    key: 'getFloatFromText',
    value: function getFloatFromText(text) {
      var value = parseFloat(text);
      if (!isNaN(value)) {
        return value;
      }
      return 0;
    }
  }], [{
    key: 'getAnimation',
    value: function getAnimation(data) {
      var directoryPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var reader = new MMDVPDReader(data, directoryPath);
      var animation = reader.loadVPDFile();

      return animation;
    }
  }]);

  return MMDVPDReader;
}(_MMDReader3.default);

exports.default = MMDVPDReader;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDReader2 = __webpack_require__(2);

var _MMDReader3 = _interopRequireDefault(_MMDReader2);

var _jscenekit = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _headerPattern = new RegExp(/^xof (\d\d\d\d)([ \w][ \w][ \w][ \w])(\d\d\d\d)/);
var _commaOrSemicolonPattern = new RegExp(/^,|;/);
var _uuidPattern = new RegExp(/^<[\w-]+>/);
var _leftBracePattern = new RegExp(/^{/);
var _rightBracePattern = new RegExp(/^}/);
var _memberPattern = new RegExp(/^((array\s+\w+\s+\w+\[(\d+|\w+)\]|\w+\s+\w+)\s*;|\[[\w.]+\])/);
var _filenamePattern = new RegExp(/^"(.*)";?/);

/**
 *
 * @access public
 * @extends {MMDReader}
 */

var MMDXReader = function (_MMDReader) {
  _inherits(MMDXReader, _MMDReader);

  /**
   *
   * @access public
   * @constructor
   * @param {Buffer} data -
   * @param {string} directoryPath -
   */
  function MMDXReader(data, directoryPath) {
    _classCallCheck(this, MMDXReader);

    // TODO: implement binary x file reader
    var isBinary = false;
    var isBigEndian = false;
    var encoding = 'sjis';

    var _this = _possibleConstructorReturn(this, (MMDXReader.__proto__ || Object.getPrototypeOf(MMDXReader)).call(this, data, directoryPath, isBinary, isBigEndian, encoding));

    _this._workingNode = null;
    _this._workingGeometry = null;
    _this._workingGeometryNode = null;

    // header info
    _this._version = '';
    _this._format = '';
    _this._floatSize = '';

    // vertex
    _this._vertexCount = 0;
    _this._rawVertexArray = [];
    _this._vertexArray = [];

    // face
    _this._indexCount = 0;
    _this._rawVertexIndexArray = [];
    _this._indexArray = [];

    // material
    _this._rawMaterialIndexArray = [];
    _this._materialArray = [];

    // normal
    _this._rawNormalArray = [];
    _this._rawNormalIndexArray = [];
    _this._vertexNormalMap = [];
    _this._normalMap = [];
    _this._rawSortedNormalArray = [];
    _this._normalArray = [];

    // texcoord
    _this._rawTexcoordArray = [];
    _this._texcoordArray = [];

    _this._elementArray = [];
    return _this;
  }

  _createClass(MMDXReader, [{
    key: '_loadXFile',


    /**
     * @access private
     * @returns {MMDNode} -
     */
    value: function _loadXFile() {
      this._workingNode = new _MMDNode2.default();

      if (!this._XFileHeader()) {
        throw new Error('MMDXReader: header format error');
      }

      var end = false;
      while (!end) {
        var result = this._XObjectLong();

        if (result === null) {
          end = true;
        } else {
          end = !result;
        }
      }

      this._splitFaceNormals();

      this._workingNode.name = 'rootNode';

      this._workingGeometry = this._createGeometry();
      this._workingGeometryNode = new _jscenekit.SCNNode(this._workingGeometry);
      this._workingGeometryNode.name = 'Geometry';
      this._workingGeometryNode.castsShadow = true;

      this._workingNode.addChildNode(this._workingGeometryNode);
      this._workingNode.castsShadow = true;

      return this._workingNode;
    }
  }, {
    key: '_commaOrSemicolon',
    value: function _commaOrSemicolon() {
      // FIXME: don't access private property and method
      //return this._reader.readPattern(_commaOrSemicolonPattern)
      var code = this._reader._partialText.charCodeAt(0);
      if (code === 44 || code === 59) {
        this._reader._moveIndex(1);
      }
    }
  }, {
    key: '_UUID',
    value: function _UUID() {
      return this._reader.readPattern(_uuidPattern);
    }
  }, {
    key: '_leftBrace',
    value: function _leftBrace() {
      return this._reader.readPattern(_leftBracePattern);
    }
  }, {
    key: '_rightBrace',
    value: function _rightBrace() {
      return this._reader.readPattern(_rightBracePattern);
    }
  }, {
    key: '_member',
    value: function _member() {
      return this._reader.readPattern(_memberPattern);
    }
  }, {
    key: '_filename',
    value: function _filename() {
      var str = this._reader.readPattern(_filenamePattern);
      return str[1];
    }
  }, {
    key: '_integerArray',
    value: function _integerArray() {
      var n = this._reader.readInteger();
      var arr = [];
      for (var i = 0; i < n; i++) {
        arr.push(this._reader.readInteger());
        this._commaOrSemicolon();
      }
      return arr;
    }
  }, {
    key: '_floatArray',
    value: function _floatArray() {
      var n = this._reader.readInteger();
      var arr = [];
      for (var i = 0; i < n; i++) {
        arr.push(this._reader.readFloat());
        this._commaOrSemicolon();
      }
      return arr;
    }
  }, {
    key: '_vector3',
    value: function _vector3() {
      var invertZSign = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var v = new _jscenekit.SCNVector3();
      v.x = this._reader.readFloat();
      v.y = this._reader.readFloat();
      v.z = this._reader.readFloat();

      if (invertZSign) {
        v.z = -v.z;
      }

      this._commaOrSemicolon();

      return v;
    }
  }, {
    key: '_vector4',
    value: function _vector4() {
      var v = new _jscenekit.SCNVector4();
      v.x = this._reader.readFloat();
      v.y = this._reader.readFloat();
      v.z = this._reader.readFloat();
      v.w = this._reader.readFloat();
      this._commaOrSemicolon();

      return v;
    }
  }, {
    key: '_splitFaceNormals',
    value: function _splitFaceNormals() {
      var numFaces = this._rawVertexIndexArray.length;

      // set texcoord
      if (this._rawTexcoordArray.length === 0) {
        for (var i = 0; i < numFaces; i++) {
          this._rawTexcoordArray.push([0, 0]);
        }
      }

      // create normal
      if (this._rawNormalArray.length === 0) {
        for (var _i = 0; _i < numFaces; _i++) {
          var vertexIndex = this._rawVertexIndexArray[_i];
          var angles = vertexIndex.length;
          var normal = this._calcNormal(this._rawVertexArray[vertexIndex[0]], this._rawVertexArray[vertexIndex[1]], this._rawVertexArray[vertexIndex[angles - 1]]);
          this._rawNormalArray.splice(_i, 0, normal);

          var normalIndex = [];
          this._rawNormalIndexArray.splice(_i, 0, normalIndex);
        }
      }

      // flatten arrays
      var flatVertexIndexArray = [];
      var flatNormalIndexArray = [];
      var flatMaterialIndexArray = [];

      this._vertexCount = 0;
      this._indexCount = 0;

      for (var _i2 = 0; _i2 < numFaces; _i2++) {
        var _vertexIndex = this._rawVertexIndexArray[_i2];
        var _normalIndex = this._rawNormalIndexArray[_i2];
        var materialIndex = this._rawMaterialIndexArray[_i2];

        var _angles = _vertexIndex.length;

        for (var j = 2; j < _angles; j++) {
          flatVertexIndexArray.push(_vertexIndex[0]);
          flatVertexIndexArray.push(_vertexIndex[j]);
          flatVertexIndexArray.push(_vertexIndex[j - 1]);

          flatNormalIndexArray.push(_normalIndex[0]);
          flatNormalIndexArray.push(_normalIndex[j]);
          flatNormalIndexArray.push(_normalIndex[j - 1]);

          flatMaterialIndexArray.push(materialIndex);
          flatMaterialIndexArray.push(materialIndex);
          flatMaterialIndexArray.push(materialIndex);

          this._indexCount += 1;
        }
      }

      // make map of vertex to normal
      var vertexCount = this._rawVertexArray.length;

      var flatArrayCount = flatVertexIndexArray.length;
      for (var _i3 = 0; _i3 < flatArrayCount; _i3++) {
        var _vertexIndex2 = flatVertexIndexArray[_i3];
        var _normalIndex2 = flatNormalIndexArray[_i3];
        var _materialIndex = flatMaterialIndexArray[_i3];

        var vertexToNormal = this._vertexNormalMap[_vertexIndex2];
        var newVertexIndex = typeof vertexToNormal === 'undefined' ? null : vertexToNormal[_normalIndex2];

        if (typeof vertexToNormal === 'undefined') {
          // new
          this._vertexNormalMap[_vertexIndex2] = [];
          this._vertexNormalMap[_vertexIndex2][_normalIndex2] = _vertexIndex2;
          this._normalMap[_vertexIndex2] = _normalIndex2;
        } else if (typeof newVertexIndex === 'undefined' || newVertexIndex === null) {
          // conflict: add vertex data at index(vertexCount)
          this._rawVertexArray.push(this._rawVertexArray[_vertexIndex2]);
          this._rawTexcoordArray.push(this._rawTexcoordArray[_vertexIndex2]);
          this._vertexNormalMap[_vertexIndex2][_normalIndex2] = vertexCount;
          this._normalMap[vertexCount] = _normalIndex2;
          flatVertexIndexArray[_i3] = vertexCount;
          vertexCount += 1;
        } else {
          // reuse
          flatVertexIndexArray[_i3] = newVertexIndex;
        }
      }

      // create normal data
      for (var _i4 = 0; _i4 < vertexCount; _i4++) {
        var _normalIndex3 = this._normalMap[_i4];
        if (typeof _normalIndex3 === 'undefined') {
          _normalIndex3 = 0;
        }

        this._rawSortedNormalArray.push(this._rawNormalArray[_normalIndex3]);
      }

      // create vertex data
      this._vertexCount = this._rawVertexArray.length;
      this._vertexArray = [];
      for (var _i5 = 0; _i5 < this._vertexCount; _i5++) {
        this._vertexArray.push(this._rawVertexArray[_i5].x);
        this._vertexArray.push(this._rawVertexArray[_i5].y);
        this._vertexArray.push(this._rawVertexArray[_i5].z);
      }

      this._normalArray = [];
      for (var _i6 = 0; _i6 < this._vertexCount; _i6++) {
        this._normalArray.push(this._rawSortedNormalArray[_i6].x);
        this._normalArray.push(this._rawSortedNormalArray[_i6].y);
        this._normalArray.push(this._rawSortedNormalArray[_i6].z);
      }

      this._texcoordArray = [];
      var texCount = this._rawTexcoordArray.length;
      for (var _i7 = 0; _i7 < texCount; _i7++) {
        this._texcoordArray.push(this._rawTexcoordArray[_i7][0]);
        this._texcoordArray.push(this._rawTexcoordArray[_i7][1]);
      }

      // create index data
      this._indexArray = [];
      var materialCount = this._materialArray.length;
      for (var _i8 = 0; _i8 < materialCount; _i8++) {
        this._indexArray.push([]);
      }
      var materialIndexCount = flatMaterialIndexArray.length;
      for (var _i9 = 0; _i9 < materialIndexCount; _i9++) {
        var _materialIndex2 = flatMaterialIndexArray[_i9];
        var _vertexIndex3 = flatVertexIndexArray[_i9];

        this._indexArray[_materialIndex2].push(_vertexIndex3);
      }
    }
  }, {
    key: '_createGeometry',
    value: function _createGeometry() {
      var vertexSource = new _jscenekit.SCNGeometrySource(this._vertexArray, // data
      _jscenekit.SCNGeometrySource.Semantic.vertex, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );

      var normalSource = new _jscenekit.SCNGeometrySource(this._normalArray, // data
      _jscenekit.SCNGeometrySource.Semantic.normal, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      3, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      12 // dataStride
      );

      var texcoordSource = new _jscenekit.SCNGeometrySource(this._texcoordArray, // data
      _jscenekit.SCNGeometrySource.Semantic.texcoord, // semantic
      this._vertexCount, // vectorCount
      true, // usesFloatComponents
      2, // componentsPerVector
      4, // bytesPerComponent
      0, // dataOffset
      8 // dataStride
      );

      this._elementArray = [];
      var newMaterialArray = [];
      var materialCount = this._materialArray.length;
      console.log('materialCount: ' + materialCount);
      for (var i = 0; i < materialCount; i++) {
        var indexArray = this._indexArray[i];
        var indexCount = indexArray.length / 3;
        console.log('indexCount: ' + indexCount);

        if (indexCount > 0) {
          var indices = [];
          var element = new _jscenekit.SCNGeometryElement(indexArray, // data
          _jscenekit.SCNGeometryPrimitiveType.triangles, // primitiveType
          indexCount, // primitiveCount
          4 // bytesPerIndex
          );
          this._elementArray.push(element);
          newMaterialArray.push(this._materialArray[i]);
        }
      }

      var geometry = new _jscenekit.SCNGeometry([vertexSource, normalSource, texcoordSource], this._elementArray);
      geometry.materials = newMaterialArray;
      geometry.name = 'Geometry';

      return geometry;
    }
  }, {
    key: '_calcNormal',
    value: function _calcNormal(v1, v2, v3) {
      var a = v3.sub(v1);
      var b = v2.sub(v1);
      var n = a.cross(b).normalize();
      return n;
    }

    /**
     * @access private
     * @returns {boolean} - returns true if it's a valid header.
     */

  }, {
    key: '_XFileHeader',
    value: function _XFileHeader() {
      var str = this._reader.readPattern(_headerPattern);
      this._version = str[1];
      this._format = str[2];
      this._floatSize = str[3];
      //console.log(`version ${this.version} format ${this.format} floatSize ${this.floatSize}`)
      return true;
    }

    /**
     * @access private
     * @returns {?Object} -
     */

  }, {
    key: '_XObjectLong',
    value: function _XObjectLong() {
      var id = this._reader.readWord();

      if (id === null) {
        return null;
      }
      console.log('********** id: ' + id + ' **********');

      switch (id) {
        case 'template':
          return this._Template();
        case 'Header':
          return this._Header();
        case 'Mesh':
          return this._Mesh();
        case 'MeshMaterialList':
          return this._MeshMaterialList();
        case 'MeshNormals':
          return this._MeshNormals();
        case 'MeshTextureCoords':
          return this._MeshTextureCoords();
        case 'MeshVertexColors':
          return this._MeshVertexColors();
        default:
          throw new Error('MMDXReader: unknown type: ' + id);
      }
    }
  }, {
    key: '_ColorRGB',
    value: function _ColorRGB() {
      var color = new _jscenekit.SKColor();
      color.red = this._reader.readFloat();
      color.green = this._reader.readFloat();
      color.blue = this._reader.readFloat();
      color.alpha = 1.0;
      this._commaOrSemicolon();

      return color;
    }
  }, {
    key: '_ColorRGBA',
    value: function _ColorRGBA() {
      var color = new _jscenekit.SKColor();
      color.red = this._reader.readFloat();
      color.green = this._reader.readFloat();
      color.blue = this._reader.readFloat();
      color.alpha = this._reader.readFloat();
      this._commaOrSemicolon();

      return color;
    }
  }, {
    key: '_IndexedColor',
    value: function _IndexedColor() {
      var index = this._reader.readInteger();
      var color = this._ColorRGBA();
      // TODO: retain index info
      // color.index = index
      return color;
    }
  }, {
    key: '_Coords2d',
    value: function _Coords2d() {
      var v = [];
      v.push(this._reader.readFloat());
      v.push(this._reader.readFloat());
      this._commaOrSemicolon();

      return v;
    }
  }, {
    key: '_Template',
    value: function _Template() {
      this._reader.readWord();
      this._leftBrace();
      this._UUID();
      var member = null;
      do {
        member = this._member();
        //console.log(`member: ${member}`)
      } while (member !== null);
      this._rightBrace();

      return true;
    }
  }, {
    key: '_Header',
    value: function _Header() {
      this._leftBrace();
      this._reader.readInteger(); // major
      this._reader.readInteger(); // minor
      this._reader.readInteger(); // flags
      this._rightBrace();
      return true;
    }
  }, {
    key: '_Material',
    value: function _Material() {
      var material = new _jscenekit.SCNMaterial();

      this._leftBrace();

      material.diffuse.contents = this._ColorRGBA();
      material.ambient.contents = material.diffuse.contents;
      material.shininess = this._reader.readFloat();
      material.specular.contents = this._ColorRGB();
      material.emission.contents = this._ColorRGB();

      var name = this._reader.readWord();
      if (name === 'TextureFilename') {
        var textureFilePath = this._TextureFilename();
        if (textureFilePath !== null) {
          this.loadTexture(textureFilePath).then(function (texture) {
            material.emission.contents = texture;
            material.emission.wrapS = _jscenekit.SCNWrapMode.repeat;
            material.emission.wrapT = _jscenekit.SCNWrapMode.repeat;
            material.diffuse.contents = texture;
            material.diffuse.wrapS = _jscenekit.SCNWrapMode.repeat;
            material.diffuse.wrapT = _jscenekit.SCNWrapMode.repeat;
          });
        }
      }

      this._rightBrace();

      return material;
    }
  }, {
    key: '_Mesh',
    value: function _Mesh() {
      this._leftBrace();

      // vertices
      var rawVertexCount = this._reader.readInteger();
      console.log('vertexCount: ' + rawVertexCount);

      for (var i = 0; i < rawVertexCount; i++) {
        var pos = this._vector3(true);
        this._rawVertexArray.push(pos);
        this._commaOrSemicolon();
      }

      // faces
      this._indexCount = 0;
      var nFaces = this._reader.readInteger();
      console.log('num faces: ' + nFaces);

      for (var _i10 = 0; _i10 < nFaces; _i10++) {
        var face = this._integerArray();
        this._rawVertexIndexArray.push(face);
      }

      this._rightBrace();

      return true;
    }
  }, {
    key: '_MeshMaterialList',
    value: function _MeshMaterialList() {
      this._leftBrace();

      // materials
      var nMaterials = this._reader.readInteger();
      console.log('materials: ' + nMaterials);

      // face materials
      var nFaceIndices = this._reader.readInteger();
      console.log('face indices: ' + nFaceIndices);

      for (var i = 0; i < nFaceIndices; i++) {
        var materialNo = this._reader.readInteger();
        this._commaOrSemicolon();
        this._rawMaterialIndexArray.push(materialNo);
      }

      // materials
      var name = this._reader.readWord();
      while (name === 'Material') {
        var material = this._Material();
        this._materialArray.push(material);
        name = this._reader.readWord();
      }

      this._rightBrace();

      return true;
    }
  }, {
    key: '_MeshNormals',
    value: function _MeshNormals() {
      this._leftBrace();

      var nNormals = this._reader.readInteger();
      console.log('mesh normals: ' + nNormals);

      for (var i = 0; i < nNormals; i++) {
        var normal = this._vector3(true);
        this._rawNormalArray.push(normal);
      }

      var nFaceNormals = this._reader.readInteger();
      console.log('normal indices: ' + nFaceNormals);

      for (var _i11 = 0; _i11 < nFaceNormals; _i11++) {
        var faceNormals = this._integerArray();
        this._rawNormalIndexArray.push(faceNormals);
      }

      this._rightBrace();

      return true;
    }
  }, {
    key: '_MeshTextureCoords',
    value: function _MeshTextureCoords() {
      this._leftBrace();

      // suppose to be the same number as vertexCount
      var nTextureCoords = this._reader.readInteger();
      console.log('textureCoords: ' + nTextureCoords);

      for (var i = 0; i < nTextureCoords; i++) {
        var texcoord = this._Coords2d();
        this._rawTexcoordArray.push(texcoord);
      }

      this._rightBrace();

      return true;
    }
  }, {
    key: '_MeshVertexColors',
    value: function _MeshVertexColors() {
      this._leftBrace();

      var nVertexColors = this._reader.readInteger();
      for (var i = 0; i < nVertexColors; i++) {
        var v = this._IndexedColor();
        // TODO: implement
      }

      this._rightBrace();

      return true;
    }
  }, {
    key: '_TextureFilename',
    value: function _TextureFilename() {
      this._leftBrace();

      var name = this._filename();
      var filePath = name.replace('\\\\', '/');
      console.log('filePath: ' + filePath);

      this._rightBrace();

      return filePath;
    }
  }], [{
    key: 'getNode',
    value: function getNode(data, directoryPath) {
      var reader = new MMDXReader(data, directoryPath);
      return reader._loadXFile();
    }
  }]);

  return MMDXReader;
}(_MMDReader3.default);

exports.default = MMDXReader;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MMDFragmentShader2 = __webpack_require__(6);

var _MMDFragmentShader3 = _interopRequireDefault(_MMDFragmentShader2);

var _ToonImages2 = __webpack_require__(7);

var _ToonImages3 = _interopRequireDefault(_ToonImages2);

var _MMDCameraNode = __webpack_require__(8);

var _MMDCameraNode2 = _interopRequireDefault(_MMDCameraNode);

var _MMDIKConstraint = __webpack_require__(4);

var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

var _MMDIKController = __webpack_require__(17);

var _MMDIKController2 = _interopRequireDefault(_MMDIKController);

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

var _MMDPMDReader = __webpack_require__(9);

var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

var _MMDPMMReader = __webpack_require__(10);

var _MMDPMMReader2 = _interopRequireDefault(_MMDPMMReader);

var _MMDPMXReader = __webpack_require__(11);

var _MMDPMXReader2 = _interopRequireDefault(_MMDPMXReader);

var _MMDProgram = __webpack_require__(5);

var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

var _MMDReader = __webpack_require__(2);

var _MMDReader2 = _interopRequireDefault(_MMDReader);

var _MMDScene = __webpack_require__(20);

var _MMDScene2 = _interopRequireDefault(_MMDScene);

var _MMDSceneSource = __webpack_require__(3);

var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

var _MMDVACReader = __webpack_require__(12);

var _MMDVACReader2 = _interopRequireDefault(_MMDVACReader);

var _MMDVMDReader = __webpack_require__(13);

var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

var _MMDVPDReader = __webpack_require__(14);

var _MMDVPDReader2 = _interopRequireDefault(_MMDVPDReader);

var _MMDXReader = __webpack_require__(15);

var _MMDXReader2 = _interopRequireDefault(_MMDXReader);

var _BinaryParser = __webpack_require__(21);

var _BinaryParser2 = _interopRequireDefault(_BinaryParser);

var _ecl = __webpack_require__(22);

var _ecl2 = _interopRequireDefault(_ecl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*global exports*/
exports._MMDFragmentShader = _MMDFragmentShader3.default;
exports._ToonImages = _ToonImages3.default;
exports.MMDCameraNode = _MMDCameraNode2.default;
exports.MMDIKConstraint = _MMDIKConstraint2.default;
exports.MMDIKController = _MMDIKController2.default;
exports.MMDNode = _MMDNode2.default;
exports.MMDPMDReader = _MMDPMDReader2.default;
exports.MMDPMMReader = _MMDPMMReader2.default;
exports.MMDPMXReader = _MMDPMXReader2.default;
exports.MMDProgram = _MMDProgram2.default;
exports.MMDReader = _MMDReader2.default;
exports.MMDScene = _MMDScene2.default;
exports.MMDSceneSource = _MMDSceneSource2.default;
exports.MMDVACReader = _MMDVACReader2.default;
exports.MMDVMDReader = _MMDVMDReader2.default;
exports.MMDVPDReader = _MMDVPDReader2.default;
exports.MMDXReader = _MMDXReader2.default;
exports.BinaryParser = _BinaryParser2.default;
exports.ecl = _ecl2.default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MMDNode = __webpack_require__(1);

var _MMDNode2 = _interopRequireDefault(_MMDNode);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _sharedController = null;

/**
 *
 * @access public
 * @implements {SCNSceneRendererDelegate}
 */

var MMDIKController = function () {
  _createClass(MMDIKController, null, [{
    key: 'sharedController',
    get: function get() {
      if (_sharedController === null) {
        _sharedController = new MMDIKController();
      }
      return _sharedController;
    }

    /**
     *
     * @access private
     * @constructor
     */

  }]);

  function MMDIKController() {
    _classCallCheck(this, MMDIKController);
  }

  /**
   * update IK constraint for the given renderer
   * @access public
   * @param {SCNSceneRenderer} renderer -
   * @returns {void}
   */


  _createClass(MMDIKController, [{
    key: 'rendererDidApplyAnimationsAtTime',


    /**
     * apply IK constraint after animations are applied
     * @access public
     * @param {SCNSceneRenderer} renderer -
     * @param {TimeInterval} time -
     */
    value: function rendererDidApplyAnimationsAtTime(renderer, time) {
      MMDIKController.updateIK(renderer);
    }
  }], [{
    key: 'updateIK',
    value: function updateIK(renderer) {
      if (renderer.scene) {
        MMDIKController.applyIKRecursive(renderer.scene.rootNode);
      }
    }

    /**
     * apply IK constraint recursively
     * @access public
     * @param {SCNNode} node -
     * @returns {void}
     */

  }, {
    key: 'applyIKRecursive',
    value: function applyIKRecursive(node) {
      if (node instanceof _MMDNode2.default) {
        node.updateIK();
      }

      node.childNodes.forEach(function (childNode) {
        MMDIKController.applyIKRecursive(childNode);
      });
    }
  }]);

  return MMDIKController;
}();

exports.default = MMDIKController;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*global Buffer*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ImageType = {
  noImage: 0,
  colorMapped: 1,
  RGB: 2,
  blackAndWhite: 3,
  runlengthColorMapped: 9,
  runlengthRGB: 10,
  compressedBlackAndWhite: 11,
  compressedColorMapped: 32,
  compressed4PassQTColorMapped: 33
};

var _headerLength = 18;

var TGAImage = function () {
  /**
   * constructor
   * @param {Buffer|ArrayBuffer} data -
   * @constructor
   */
  function TGAImage(data) {
    var _this = this;

    _classCallCheck(this, TGAImage);

    if (data instanceof Buffer) {
      this._buffer = data;
    } else if (typeof data === 'string') {
      this._buffer = Buffer.from(data, 'binary');
    } else if (data) {
      this._buffer = Buffer.from(data);
    } else {
      this._buffer = null;
    }

    // Header
    this._idLength = 0;
    this._colorMapType = 0;
    this._imageType = 0;
    this._colorMapOrigin = 0;
    this._colorMapLength = 0;
    this._colorMapDepth = 0;
    this._imageXOrigin = 0;
    this._imageYOrigin = 0;
    this._imageWidth = 0;
    this._imageHeight = 0;
    this._imageDepth = 0;
    this._alphaDepth = 0;
    this._leftToRight = true;
    this._topToBottom = false;
    this._interleave = false;
    this._hasAlpha = false;

    // Image Identification Field
    this._imageID = null;

    // Image Data
    this._canvas = null;
    this._context = null;
    this._imageData = null;
    this._image = null;

    // for HTML Image tag compatibility
    this._src = null;
    this.onload = null;
    this.onerror = null;

    this._resolveFunc = null;
    this._rejectFunc = null;
    this._didLoad = new Promise(function (resolve, reject) {
      _this._resolveFunc = resolve;
      _this._rejectFunc = reject;
    });

    if (data) {
      this._parseData();
    }
  }

  _createClass(TGAImage, [{
    key: '_loadURL',
    value: function _loadURL(url) {
      var _this2 = this;

      this._src = url;
      this._requestBinaryFile(url).then(function (data) {
        _this2._buffer = Buffer.from(data);
        _this2._parseData();
      }).catch(function (error) {
        _this2._reject(error);
      });
    }
  }, {
    key: '_requestBinaryFile',
    value: function _requestBinaryFile(url) {
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'arraybuffer';
        request.onload = function (ev) {
          if (request.response) {
            resolve(request.response);
          } else {
            reject(request);
          }
        };
        request.onerror = function (ev) {
          reject(ev);
        };
        request.send(null);
      });
    }
  }, {
    key: '_parseData',
    value: function _parseData() {
      this._readHeader();
      this._readImageID();
      this._initImage();

      var data = this._getImageData();

      switch (this._imageType) {
        case _ImageType.noImage:
          {
            // nothing to do
            break;
          }
        case _ImageType.colorMapped:
          {
            this._parseColorMapData(data);
            break;
          }
        case _ImageType.RGB:
          {
            this._parseRGBData(data);
            break;
          }
        case _ImageType.blackAndWhite:
          {
            this._parseBlackAndWhiteData(data);
            break;
          }
        case _ImageType.runlengthColorMapped:
          {
            this._parseColorMapData(data);
            break;
          }
        case _ImageType.runlengthRGB:
          {
            this._parseRGBData(data);
            break;
          }
        case _ImageType.compressedBlackAndWhite:
          {
            this._parseBlackAndWhiteData(data);
            break;
          }
        case _ImageType.compressedColorMapped:
          {
            console.error('parser for compressed TGA is not implemeneted');
            break;
          }
        case _ImageType.compressed4PassQTColorMapped:
          {
            console.error('parser for compressed TGA is not implemeneted');
            break;
          }
        default:
          {
            throw new Error('unknown imageType: ' + this._imageType);
          }
      }

      this._setImage();
      this._deleteBuffer();
    }
  }, {
    key: '_readHeader',
    value: function _readHeader() {
      this._idLength = this._buffer.readUIntLE(0, 1);
      this._colorMapType = this._buffer.readUIntLE(1, 1);
      this._imageType = this._buffer.readUIntLE(2, 1);
      this._colorMapOrigin = this._buffer.readUIntLE(3, 2);
      this._colorMapLength = this._buffer.readUIntLE(5, 2);
      this._colorMapDepth = this._buffer.readUIntLE(7, 1);
      this._imageXOrigin = this._buffer.readUIntLE(8, 2);
      this._imageYOrigin = this._buffer.readUIntLE(10, 2);
      this._imageWidth = this._buffer.readUIntLE(12, 2);
      this._imageHeight = this._buffer.readUIntLE(14, 2);
      this._imageDepth = this._buffer.readUIntLE(16, 1);

      var descriptor = this._buffer.readUIntLE(17, 1);
      this._alphaDepth = descriptor & 0x0F;
      this._leftToRight = (descriptor & 0x10) === 0;
      this._topToBottom = (descriptor & 0x20) > 0;
      this._interleave = descriptor & 0xC0;
    }
  }, {
    key: '_readImageID',
    value: function _readImageID() {
      if (this._idLength > 0) {
        this._imageID = this._buffer.subarray(_headerLength, this._idLength);
      }
    }
  }, {
    key: '_initImage',
    value: function _initImage() {
      if (this._imageType === _ImageType.noImage) {
        return;
      }
      if (this._imageWidth <= 0 || this._imageHeight <= 0) {
        return;
      }
      this._canvas = document.createElement('canvas');
      this._canvas.width = this._imageWidth;
      this._canvas.height = this._imageHeight;
      this._context = this._canvas.getContext('2d');
      this._imageData = this._context.createImageData(this._imageWidth, this._imageHeight);
    }
  }, {
    key: '_setImage',
    value: function _setImage() {
      var _this3 = this;

      this._context.putImageData(this._imageData, 0, 0);
      this._image = new Image();
      this._image.width = this._imageWidth;
      this._image.height = this._imageHeight;
      this._image.onload = function () {
        _this3._resolve();
      };
      this._image.src = this._canvas.toDataURL();
    }
  }, {
    key: '_deleteBuffer',
    value: function _deleteBuffer() {
      if (this._buffer) {
        delete this._buffer;
        this._buffer = null;
      }
      if (this._imageData) {
        delete this._imageData;
        this._imageData = null;
      }
    }
  }, {
    key: '_parseColorMapData',
    value: function _parseColorMapData(buf) {
      if (this._colorMapDepth === 24 || this._colorMapDepth === 16 || this._colorMapDepth === 15) {
        this._hasAlpha = false;
      } else if (this._colorMapDepth === 32) {
        this._hasAlpha = true;
      } else {
        throw new Error('unknown colorMapDepth: ' + this._colorMapDepth);
      }

      var colorMapDataPos = _headerLength + this._idLength;
      var colorMapDataSize = Math.ceil(this._colorMapDepth / 8);
      var colorMapDataLen = colorMapDataSize * this._colorMapLength;

      var imageDataSize = 1;

      var colorMap = [];
      var pos = colorMapDataPos;
      for (var i = 0; i < this._colorMapLength; i++) {
        var rgba = this._getRGBA(this._buffer, pos, this._colorMapDepth);
        colorMap.push(rgba);
        pos += colorMapDataSize;
      }

      var data = this._imageData.data;
      var initX = 0;
      var initY = 0;
      var xStep = 1;
      var yStep = 1;
      if (!this._leftToRight) {
        initX = this._imageWidth - 1;
        xStep = -1;
      }
      if (!this._topToBottom) {
        initY = this._imageHeight - 1;
        yStep = -1;
      }

      pos = 0;
      var y = initY;
      var defaultColor = [0xFF, 0xFF, 0xFF, 0xFF];
      for (var iy = 0; iy < this._imageHeight; iy++) {
        var x = initX;
        for (var ix = 0; ix < this._imageWidth; ix++) {
          var index = (y * this._imageWidth + x) * 4;
          var color = defaultColor;
          var mapNo = buf[pos] - this._colorMapOrigin;
          if (mapNo >= 0) {
            color = colorMap[mapNo];
          }
          data[index] = color[0];
          data[index + 1] = color[1];
          data[index + 2] = color[2];
          data[index + 3] = color[3];

          x += xStep;
          pos += imageDataSize;
        }
        y += yStep;
      }
    }
  }, {
    key: '_parseRGBData',
    value: function _parseRGBData(buf) {
      if (this._imageDepth === 24 || this._imageDepth === 16 || this._imageDepth === 15) {
        this._hasAlpha = false;
      } else if (this._imageDepth === 32) {
        this._hasAlpha = true;
      } else {
        throw new Error('unknown imageDepth: ' + this._imageDepth);
      }

      var imageDataSize = Math.ceil(this._imageDepth / 8);

      var data = this._imageData.data;
      var initX = 0;
      var initY = 0;
      var xStep = 1;
      var yStep = 1;
      if (!this._leftToRight) {
        initX = this._imageWidth - 1;
        xStep = -1;
      }
      if (!this._topToBottom) {
        initY = this._imageHeight - 1;
        yStep = -1;
      }

      var pos = 0;
      var y = initY;
      for (var iy = 0; iy < this._imageHeight; iy++) {
        var x = initX;
        for (var ix = 0; ix < this._imageWidth; ix++) {
          var index = (y * this._imageWidth + x) * 4;
          var rgba = this._getRGBA(buf, pos, this._imageDepth);
          data[index] = rgba[0];
          data[index + 1] = rgba[1];
          data[index + 2] = rgba[2];
          data[index + 3] = rgba[3];

          x += xStep;
          pos += imageDataSize;
        }
        y += yStep;
      }
    }
  }, {
    key: '_getRGBA',
    value: function _getRGBA(buf, offset, depth) {
      if (depth === 15) {
        var r = (buf[offset + 1] & 0x7c) << 1;
        var g = (buf[offset + 1] & 0x03) << 6 | (buf[offset] & 0xe0) >> 2;
        var b = (buf[offset] & 0x1f) << 3;
        //const a = (buf[offset+1] & 0x80) > 0 ? 255 : 0
        var a = 255;
        return [r, g, b, a];
      } else if (depth === 16) {
        var _r = (buf[offset + 1] & 0x7c) << 1;
        var _g = (buf[offset + 1] & 0x03) << 6 | (buf[offset] & 0xe0) >> 2;
        var _b = (buf[offset] & 0x1f) << 3;
        var _a = 255;
        return [_r, _g, _b, _a];
      } else if (depth === 24) {
        return [buf[offset + 2], buf[offset + 1], buf[offset], 255];
      } else if (depth === 32) {
        return [buf[offset + 2], buf[offset + 1], buf[offset], buf[offset + 3]];
      }
      throw new Error('unsupported imageDepth: ' + depth);
    }
  }, {
    key: '_parseBlackAndWhiteData',
    value: function _parseBlackAndWhiteData(buf) {
      if (this._imageDepth == 8) {
        this._hasAlpha = false;
      } else if (this._imageDepth == 16) {
        this._hasAlpha = true;
      } else {
        throw new Error('unknown imageDepth: ' + this._imageDepth);
      }

      var imageDataSize = this._imageDepth / 8;

      var data = this._imageData.data;
      var initX = 0;
      var initY = 0;
      var xStep = 1;
      var yStep = 1;
      if (!this._leftToRight) {
        initX = this._imageWidth - 1;
        xStep = -1;
      }
      if (!this._topToBottom) {
        initY = this._imageHeight - 1;
        yStep = -1;
      }

      var pos = 0;
      if (this._hasAlpha) {
        var y = initY;
        for (var iy = 0; iy < this._imageHeight; iy++) {
          var x = initX;
          for (var ix = 0; ix < this._imageWidth; ix++) {
            var index = (y * this._imageWidth + x) * 4;
            var c = buf[pos];
            var a = buf[pos + 1];
            data[index] = c;
            data[index + 1] = c;
            data[index + 2] = c;
            data[index + 3] = a;

            x += xStep;
            pos += imageDataSize;
          }
          y += yStep;
        }
      } else {
        var _y = initY;
        for (var _iy = 0; _iy < this._imageHeight; _iy++) {
          var _x = initX;
          for (var _ix = 0; _ix < this._imageWidth; _ix++) {
            var _index = (_y * this._imageWidth + _x) * 4;
            var _c = buf[pos];
            var _a2 = 255;
            data[_index] = _c;
            data[_index + 1] = _c;
            data[_index + 2] = _c;
            data[_index + 3] = _a2;

            _x += xStep;
            pos += imageDataSize;
          }
          _y += yStep;
        }
      }
    }
  }, {
    key: '_getImageData',
    value: function _getImageData() {
      var data = null;
      if (this._imageType !== _ImageType.none) {
        var colorMapDataLen = Math.ceil(this._colorMapDepth / 8) * this._colorMapLength;
        var start = _headerLength + this._idLength + colorMapDataLen;
        data = this._buffer.subarray(start);
      }

      if (this._imageType === _ImageType.runlengthColorMapped || this._imageType === _ImageType.runlengthRGB) {
        data = this._decompressRunlengthData(data);
      } else if (this._imageType === _ImageType.compressedBlackAndWhite) {
        data = this._decompressRunlengthData(data);
      } else if (this._imageType === _ImageType.compressedColorMapped) {
        // TODO: implement
        console.error('Compressed Color Mapped TGA Image data is not supported');
      } else if (this._imageType === _ImageType.compressed4PassQTColorMapped) {
        // TODO: implement
        console.error('Compressed Color Mapped TGA Image data is not supported');
      }
      return data;
    }
  }, {
    key: '_decompressRunlengthData',
    value: function _decompressRunlengthData(data) {
      var d = [];
      var elementCount = Math.ceil(this._imageDepth / 8);
      var dataLength = elementCount * this._imageWidth * this._imageHeight;
      var pos = 0;

      while (d.length < dataLength) {
        var packet = data[pos];
        pos += 1;
        if ((packet & 0x80) !== 0) {
          // RLE
          var elements = data.slice(pos, pos + elementCount);
          pos += elementCount;

          var count = (packet & 0x7F) + 1;
          for (var i = 0; i < count; i++) {
            d.push.apply(d, _toConsumableArray(elements));
          }
        } else {
          // RAW
          var len = (packet + 1) * elementCount;
          d.push.apply(d, _toConsumableArray(data.slice(pos, pos + len)));
          pos += len;
        }
      }
      return d;
    }
  }, {
    key: '_resolve',
    value: function _resolve(e) {
      if (this.onload) {
        this.onload(e);
      }
      this._resolveFunc(e);
    }
  }, {
    key: '_reject',
    value: function _reject(e) {
      if (this.onerror) {
        this.onerror(e);
      }
      this._rejectFunc(e);
    }
  }, {
    key: 'image',
    get: function get() {
      return this._image;
    }
  }, {
    key: 'canvas',
    get: function get() {
      return this._canvas;
    }
  }, {
    key: 'didLoad',
    get: function get() {
      return this._didLoad;
    }
  }, {
    key: 'src',
    get: function get() {
      return this._src;
    },
    set: function set(newValue) {
      this._loadURL(newValue);
    }
  }], [{
    key: 'imageWithData',
    value: function imageWithData(data) {
      return new TGAImage(data);
    }
  }, {
    key: 'imageWithURL',
    value: function imageWithURL(url) {
      var image = new TGAImage();
      image._loadURL(url);
      return image;
    }
  }]);

  return TGAImage;
}();

module.exports = TGAImage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).Buffer))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(4)
var isArray = __webpack_require__(5)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ })
/******/ ]);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global exports*/
exports.MMD_CAMERA_NODE_NAME = 'MMD_CAMERA_NODE';
exports.MMD_CAMERA_ROTX_NODE_NAME = 'MMD_CAMERA_ROTX_NODE';
exports.MMD_CAMERA_ROTY_NODE_NAME = 'MMD_CAMERA_ROTY_NODE';
exports.MMD_CAMERA_ROTZ_NODE_NAME = 'MMD_CAMERA_ROTZ_NODE';

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jscenekit = __webpack_require__(0);

var _MMDSceneSource = __webpack_require__(3);

var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _mmdFileExtensions = ['pmm', 'pmd', 'vmd', 'vpd', 'x', 'vac', 'pmx'];

/**
 *
 * @access public
 * @extends {MMDScene}
 */

var MMDScene = function (_SCNScene) {
  _inherits(MMDScene, _SCNScene);

  /**
   * Loads a MMD scene from the specified URL.
   * @access public
   * @constructor
   * @param {string} url - The URL to the scene file to load.
   * @param {?Map<SCNSceneSource.LoadingOption, Object>} [options = null] - A dictionary of options affecting scene loading, or nil for default options. For available keys, see Scene Loading Options.
   * @param {function} onload -
   * @param {function} onerror -
   * @throws {Error}
   */
  function MMDScene(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var onload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var onerror = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, MMDScene);

    return _possibleConstructorReturn(this, (MMDScene.__proto__ || Object.getPrototypeOf(MMDScene)).call(this, url, options, onload, onerror));
  }

  /**
   * Overrided function of SCNSceneSource
   * @access private
   * @param {Blob} data -
   * @param {Object} options -
   * @returns {MMDScene} -
   */


  _createClass(MMDScene, [{
    key: '_loadSceneWithData',
    value: function _loadSceneWithData(data, options) {
      var source = new _MMDSceneSource2.default(data, options);
      return source.scene();
    }

    /**
     * Loads a MMD scene from the specified URL.
     * @access public
     * @param {string} url -
     * @param {Object} options -
     * @returns {MMDScene} -
     */

  }], [{
    key: 'scene',
    value: function scene(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      return new MMDScene(url, options);
    }
  }]);

  return MMDScene;
}(_jscenekit.SCNScene);

exports.default = MMDScene;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/classes/binary-parser [rev. #1]

var BinaryParser = function BinaryParser(bigEndian, allowExceptions) {
	this.bigEndian = bigEndian, this.allowExceptions = allowExceptions;
};
exports.default = BinaryParser;


var p = BinaryParser.prototype;

p.encodeFloat = function (number, precisionBits, exponentBits) {
	var bias = Math.pow(2, exponentBits - 1) - 1,
	    minExp = -bias + 1,
	    maxExp = bias,
	    minUnnormExp = minExp - precisionBits,
	    status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0,
	    exp = 0,
	    len = 2 * bias + 1 + precisionBits + 3,
	    bin = new Array(len),
	    signal = (n = status !== 0 ? 0 : n) < 0,
	    n = Math.abs(n),
	    intPart = Math.floor(n),
	    floatPart = n - intPart,
	    i,
	    lastBit,
	    rounded,
	    j,
	    result;
	for (i = len; i; bin[--i] = 0) {}
	for (i = bias + 2; intPart && i; bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2)) {}
	for (i = bias + 1; floatPart > 0 && i; (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart) {}
	for (i = -1; ++i < len && !bin[i];) {}
	if (bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]) {
		if (!(rounded = bin[lastBit])) for (j = lastBit + 2; !rounded && j < len; rounded = bin[j++]) {}
		for (j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0)) {}
	}
	for (i = i - 2 < 0 ? -1 : i - 3; ++i < len && !bin[i];) {}

	(exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp && (exp != bias + 1 - len && exp < minUnnormExp && this.warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1));
	(intPart || status !== 0) && (this.warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status), exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1));
	for (n = Math.abs(exp + bias), j = exponentBits + 1, result = ""; --j; result = n % 2 + result, n = n >>= 1) {}
	for (n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = []; i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = String.fromCharCode(n), n = 0), j = (j + 1) % 8) {}
	r[r.length] = n ? String.fromCharCode(n) : "";
	return (this.bigEndian ? r.reverse() : r).join("");
};
p.encodeInt = function (number, bits, signed) {
	var max = Math.pow(2, bits),
	    r = [];
	(number >= max || number < -(max >> 1)) && this.warn("encodeInt::overflow") && (number = 0);
	number < 0 && (number += max);
	for (; number; r[r.length] = String.fromCharCode(number % 256), number = Math.floor(number / 256)) {}
	for (bits = -(-bits >> 3) - r.length; bits--; r[r.length] = "\0") {}
	return (this.bigEndian ? r.reverse() : r).join("");
};
p.decodeFloat = function (data, precisionBits, exponentBits) {
	var b = ((b = new this.Buffer(this.bigEndian, data)).checkBuffer(precisionBits + exponentBits + 1), b),
	    bias = Math.pow(2, exponentBits - 1) - 1,
	    signal = b.readBits(precisionBits + exponentBits, 1),
	    exponent = b.readBits(precisionBits, exponentBits),
	    significand = 0,
	    divisor = 2,
	    curByte = b.buffer.length + (-precisionBits >> 3) - 1,
	    byteValue,
	    startBit,
	    mask;
	do {
		for (byteValue = b.buffer[++curByte], startBit = precisionBits % 8 || 8, mask = 1 << startBit; mask >>= 1; byteValue & mask && (significand += 1 / divisor), divisor *= 2) {}
	} while (precisionBits -= startBit);
	return exponent == (bias << 1) + 1 ? significand ? NaN : signal ? -Infinity : +Infinity : (1 + signal * -2) * (exponent || significand ? !exponent ? Math.pow(2, -bias + 1) * significand : Math.pow(2, exponent - bias) * (1 + significand) : 0);
};
p.decodeInt = function (data, bits, signed) {
	var b = new this.Buffer(this.bigEndian, data),
	    x = b.readBits(0, bits),
	    max = Math.pow(2, bits);
	return signed && x >= max / 2 ? x - max : x;
};

var p2 = (p.Buffer = function (bigEndian, buffer) {
	this.bigEndian = bigEndian || 0, this.buffer = [], this.setBuffer(buffer);
}).prototype;

p2.readBits = function (start, length) {
	//shl fix: Henri Torgemane ~1996 (compressed by Jonas Raoni)
	function shl(a, b) {
		for (++b; --b; a = ((a %= 0x7fffffff + 1) & 0x40000000) == 0x40000000 ? a * 2 : (a - 0x40000000) * 2 + 0x7fffffff + 1) {}
		return a;
	}
	if (start < 0 || length <= 0) return 0;
	this.checkBuffer(start + length);
	for (var offsetLeft, offsetRight = start % 8, curByte = this.buffer.length - (start >> 3) - 1, lastByte = this.buffer.length + (-(start + length) >> 3), diff = curByte - lastByte, sum = (this.buffer[curByte] >> offsetRight & (1 << (diff ? 8 - offsetRight : length)) - 1) + (diff && (offsetLeft = (start + length) % 8) ? (this.buffer[lastByte++] & (1 << offsetLeft) - 1) << (diff-- << 3) - offsetRight : 0); diff; sum += shl(this.buffer[lastByte++], (diff-- << 3) - offsetRight)) {}
	return sum;
};
p2.setBuffer = function (data) {
	if (data) {
		for (var l, i = l = data.length, b = this.buffer = new Array(l); i; b[l - i] = data.charCodeAt(--i)) {}
		this.bigEndian && b.reverse();
	}
};
p2.hasNeededBits = function (neededBits) {
	return this.buffer.length >= -(-neededBits >> 3);
};
p2.checkBuffer = function (neededBits) {
	if (!this.hasNeededBits(neededBits)) throw new Error("checkBuffer::missing bytes");
};

p.warn = function (msg) {
	if (this.allowExceptions) throw new Error(msg);
	return 1;
};
p.toSmall = function (data) {
	return this.decodeInt(data, 8, true);
};
p.fromSmall = function (number) {
	return this.encodeInt(number, 8, true);
};
p.toByte = function (data) {
	return this.decodeInt(data, 8, false);
};
p.fromByte = function (number) {
	return this.encodeInt(number, 8, false);
};
p.toShort = function (data) {
	return this.decodeInt(data, 16, true);
};
p.fromShort = function (number) {
	return this.encodeInt(number, 16, true);
};
p.toWord = function (data) {
	return this.decodeInt(data, 16, false);
};
p.fromWord = function (number) {
	return this.encodeInt(number, 16, false);
};
p.toInt = function (data) {
	return this.decodeInt(data, 32, true);
};
p.fromInt = function (number) {
	return this.encodeInt(number, 32, true);
};
p.toDWord = function (data) {
	return this.decodeInt(data, 32, false);
};
p.fromDWord = function (number) {
	return this.encodeInt(number, 32, false);
};
p.toFloat = function (data) {
	return this.decodeFloat(data, 23, 8);
};
p.fromFloat = function (number) {
	return this.encodeFloat(number, 23, 8);
};
p.toDouble = function (data) {
	return this.decodeFloat(data, 52, 11);
};
p.fromDouble = function (number) {
	return this.encodeFloat(number, 52, 11);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
// Escape Codec Library: ecl.js (Ver.041208)
//
// Copyright (C) http://nurucom-archives.hp.infoseek.co.jp/digital/
//

var EscapeSJIS = function EscapeSJIS(str) {
	return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
		var c = s.charCodeAt(0),
		    m;
		return c < 128 ? (c < 16 ? "%0" : "%") + c.toString(16).toUpperCase() : 65376 < c && c < 65440 ? "%" + (c - 65216).toString(16).toUpperCase() : (c = JCT11280.indexOf(s)) < 0 ? "%81E" : "%" + ((m = ((c < 8272 ? c : c = JCT11280.lastIndexOf(s)) - (c %= 188)) / 188) < 31 ? m + 129 : m + 193).toString(16).toUpperCase() + (64 < (c += c < 63 ? 64 : 65) && c < 91 || 95 == c || 96 < c && c < 123 ? String.fromCharCode(c) : "%" + c.toString(16).toUpperCase());
	});
};

var UnescapeSJIS = function UnescapeSJIS(str) {
	return str.replace(/%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])/ig, function (s) {
		var c = parseInt(s.substring(1, 3), 16),
		    l = s.length;
		return 3 == l ? String.fromCharCode(c < 160 ? c : c + 65216) : JCT11280.charAt((c < 160 ? c - 129 : c - 193) * 188 + (4 == l ? s.charCodeAt(3) - 64 : (c = parseInt(s.substring(4), 16)) < 127 ? c - 64 : c - 65));
	});
};

var EscapeEUCJP = function EscapeEUCJP(str) {
	return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
		var c = s.charCodeAt(0);
		return (c < 128 ? (c < 16 ? "%0" : "%") + c.toString(16) : 65376 < c && c < 65440 ? "%8E%" + (c - 65216).toString(16) : (c = JCT8836.indexOf(s)) < 0 ? "%A1%A6" : "%" + ((c - (c %= 94)) / 94 + 161).toString(16) + "%" + (c + 161).toString(16)).toUpperCase();
	});
};

var UnescapeEUCJP = function UnescapeEUCJP(str) {
	return str.replace(/(%A[1-9A-F]|%[B-E][0-9A-F]|%F[0-9A-E]){2}|%8E%(A[1-9A-F]|[B-D][0-9A-F])|%[0-7][0-9A-F]/ig, function (s) {
		var c = parseInt(s.substring(1), 16);
		return c < 161 ? String.fromCharCode(c < 128 ? c : parseInt(s.substring(4), 16) + 65216) : JCT8836.charAt((c - 161) * 94 + parseInt(s.substring(4), 16) - 161);
	});
};

var EscapeJIS7 = function EscapeJIS7(str) {
	var u = String.fromCharCode,
	    ri = u(92, 120, 48, 48, 45, 92, 120, 55, 70),
	    rj = u(65377, 45, 65439, 93, 43),
	    H = function H(c) {
		return 41 < c && c < 58 && 44 != c || 64 < c && c < 91 || 95 == c || 96 < c && c < 123 ? u(c) : "%" + c.toString(16).toUpperCase();
	},
	    I = function I(s) {
		var c = s.charCodeAt(0);
		return (c < 16 ? "%0" : "%") + c.toString(16).toUpperCase();
	},
	    rI = new RegExp();rI.compile("[^*+.-9A-Z_a-z-]", "g");
	return ("g" + str + "g").replace(RegExp("[" + ri + "]+", "g"), function (s) {
		return "%1B%28B" + s.replace(rI, I);
	}).replace(RegExp("[" + rj, "g"), function (s) {
		var c,
		    i = 0,
		    t = "%1B%28I";while (c = s.charCodeAt(i++)) {
			t += H(c - 65344);
		}return t;
	}).replace(RegExp("[^" + ri + rj, "g"), function (s) {
		var a,
		    c,
		    i = 0,
		    t = "%1B%24B";while (a = s.charAt(i++)) {
			t += (c = JCT8836.indexOf(a)) < 0 ? "%21%26" : H((c - (c %= 94)) / 94 + 33) + H(c + 33);
		}return t;
	}).slice(8, -1);
};

var UnescapeJIS7 = function UnescapeJIS7(str) {
	var i = 0,
	    p,
	    q,
	    s = "",
	    u = String.fromCharCode,
	    P = ("%28B" + str.replace(/%49/g, "I").replace(/%1B%24%4[02]|%1B%24@/ig, "%1B%24B")).split(/%1B/i),
	    I = function I(s) {
		return u(parseInt(s.substring(1), 16));
	},
	    J = function J(s) {
		return u((3 == s.length ? parseInt(s.substring(1), 16) : s.charCodeAt(0)) + 65344);
	},
	    K = function K(s) {
		var l = s.length;
		return JCT8836.charAt(4 < l ? (parseInt(s.substring(1), 16) - 33) * 94 + parseInt(s.substring(4), 16) - 33 : 2 < l ? (37 == (l = s.charCodeAt(0)) ? (parseInt(s.substring(1, 3), 16) - 33) * 94 + s.charCodeAt(3) : (l - 33) * 94 + parseInt(s.substring(2), 16)) - 33 : (s.charCodeAt(0) - 33) * 94 + s.charCodeAt(1) - 33);
	},
	    rI = new RegExp(),
	    rJ = new RegExp(),
	    rK = new RegExp();
	rI.compile("%[0-7][0-9A-F]", "ig");rJ.compile("(%2[1-9A-F]|%[3-5][0-9A-F])|[!-_]", "ig");
	rK.compile("(%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E]){2}|(%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E])[!-~]|[!-~](%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E])|[!-~]{2}", "ig");
	while (p = P[i++]) {
		s += "%24B" == (q = p.substring(0, 4)) ? p.substring(4).replace(rK, K) : "%28I" == q ? p.substring(4).replace(rJ, J) : p.replace(rI, I).substring(2);
	}return s;
};

var EscapeJIS8 = function EscapeJIS8(str) {
	var u = String.fromCharCode,
	    r = u(92, 120, 48, 48, 45, 92, 120, 55, 70, 65377, 45, 65439, 93, 43),
	    H = function H(c) {
		return 41 < c && c < 58 && 44 != c || 64 < c && c < 91 || 95 == c || 96 < c && c < 123 ? u(c) : "%" + c.toString(16).toUpperCase();
	},
	    I = function I(s) {
		var c = s.charCodeAt(0);
		return (c < 16 ? "%0" : "%") + (c < 128 ? c : c - 65216).toString(16).toUpperCase();
	},
	    rI = new RegExp();rI.compile("[^*+.-9A-Z_a-z-]", "g");
	return ("g" + str + "g").replace(RegExp("[" + r, "g"), function (s) {
		return "%1B%28B" + s.replace(rI, I);
	}).replace(RegExp("[^" + r, "g"), function (s) {
		var a,
		    c,
		    i = 0,
		    t = "%1B%24B";while (a = s.charAt(i++)) {
			t += (c = JCT8836.indexOf(a)) < 0 ? "%21%26" : H((c - (c %= 94)) / 94 + 33) + H(c + 33);
		}return t;
	}).slice(8, -1);
};

var UnescapeJIS8 = function UnescapeJIS8(str) {
	var i = 0,
	    p,
	    s = "",
	    P = ("%28B" + str.replace(/%1B%24%4[02]|%1B%24@/ig, "%1B%24B")).split(/%1B/i),
	    I = function I(s) {
		var c = parseInt(s.substring(1), 16);
		return String.fromCharCode(c < 128 ? c : c + 65216);
	},
	    K = function K(s) {
		var l = s.length;
		return JCT8836.charAt(4 < l ? (parseInt(s.substring(1), 16) - 33) * 94 + parseInt(s.substring(4), 16) - 33 : 2 < l ? (37 == (l = s.charCodeAt(0)) ? (parseInt(s.substring(1, 3), 16) - 33) * 94 + s.charCodeAt(3) : (l - 33) * 94 + parseInt(s.substring(2), 16)) - 33 : (s.charCodeAt(0) - 33) * 94 + s.charCodeAt(1) - 33);
	},
	    rI = new RegExp(),
	    rK = new RegExp();
	rI.compile("%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig");
	rK.compile("(%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E]){2}|(%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E])[!-~]|[!-~](%2[1-9A-F]|%[3-6][0-9A-F]|%7[0-9A-E])|[!-~]{2}", "ig");
	while (p = P[i++]) {
		s += "%24B" == p.substring(0, 4) ? p.substring(4).replace(rK, K) : p.replace(rI, I).substring(2);
	}return s;
};

var EscapeUnicode = function EscapeUnicode(str) {
	return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
		var c = s.charCodeAt(0);
		return (c < 16 ? "%0" : c < 256 ? "%" : c < 4096 ? "%u0" : "%u") + c.toString(16).toUpperCase();
	});
};

var UnescapeUnicode = function UnescapeUnicode(str) {
	return str.replace(/%u[0-9A-F]{4}|%[0-9A-F]{2}/ig, function (s) {
		return String.fromCharCode("0x" + s.substring(s.length / 3));
	});
};

var EscapeUTF7 = function EscapeUTF7(str) {
	var B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
	    E = function E(s) {
		var c = s.charCodeAt(0);
		return B[c >> 10] + B[c >> 4 & 63] + B[(c & 15) << 2 | (c = s.charCodeAt(1)) >> 14] + (0 <= c ? B[c >> 8 & 63] + B[c >> 2 & 63] + B[(c & 3) << 4 | (c = s.charCodeAt(2)) >> 12] + (0 <= c ? B[c >> 6 & 63] + B[c & 63] : "") : "");
	},
	    re = new RegExp();re.compile("[^+]{1,3}", "g");
	return (str + "g").replace(/[^*+.-9A-Z_a-z-]+[*+.-9A-Z_a-z-]|[+]/g, function (s) {
		if ("+" == s) return "+-";
		var l = s.length - 1,
		    w = s.charAt(l);
		return "+" + s.substring(0, l).replace(re, E) + ("+" == w ? "-+-" : "*" == w || "." == w || "_" == w ? w : "-" + w);
	}).slice(0, -1);
};

var UnescapeUTF7 = function UnescapeUTF7(str) {
	var i = 0,
	    B = {};
	while (i < 64) {
		B["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i)] = i++;
	}return str.replace(RegExp("[+][+/-9A-Za-z]*-?", "g"), function (s) {
		if ("+-" == s) return "+";
		var b = B[s.charAt(1)],
		    c,
		    i = 1,
		    t = "";
		while (0 <= b) {
			if ((c = i & 7) < 6) c = c < 3 ? b << 10 | B[s.charAt(++i)] << 4 | (b = B[s.charAt(++i)]) >> 2 : (b & 3) << 14 | B[s.charAt(++i)] << 8 | B[s.charAt(++i)] << 2 | (b = B[s.charAt(++i)]) >> 4;else {
				c = (b & 15) << 12 | B[s.charAt(++i)] << 6 | B[s.charAt(++i)];b = B[s.charAt(++i)];
			}
			if (c) t += String.fromCharCode(c);
		}
		return t;
	});
};

var EscapeUTF8 = function EscapeUTF8(str) {
	return str.replace(/[^*+.-9A-Z_a-z-]/g, function (s) {
		var c = s.charCodeAt(0);
		return (c < 16 ? "%0" + c.toString(16) : c < 128 ? "%" + c.toString(16) : c < 2048 ? "%" + (c >> 6 | 192).toString(16) + "%" + (c & 63 | 128).toString(16) : "%" + (c >> 12 | 224).toString(16) + "%" + (c >> 6 & 63 | 128).toString(16) + "%" + (c & 63 | 128).toString(16)).toUpperCase();
	});
};

var UnescapeUTF8 = function UnescapeUTF8(str) {
	return str.replace(/%(E(0%[AB]|[1-CEF]%[89AB]|D%[89])[0-9A-F]|C[2-9A-F]|D[0-9A-F])%[89AB][0-9A-F]|%[0-7][0-9A-F]/ig, function (s) {
		var c = parseInt(s.substring(1), 16);
		return String.fromCharCode(c < 128 ? c : c < 224 ? (c & 31) << 6 | parseInt(s.substring(4), 16) & 63 : ((c & 15) << 6 | parseInt(s.substring(4), 16) & 63) << 6 | parseInt(s.substring(7), 16) & 63);
	});
};

var EscapeUTF16LE = function EscapeUTF16LE(str) {
	var H = function H(c) {
		return 41 < c && c < 58 && 44 != c || 64 < c && c < 91 || 95 == c || 96 < c && c < 123 ? String.fromCharCode(c) : (c < 16 ? "%0" : "%") + c.toString(16).toUpperCase();
	};
	return str.replace(/[^ ]| /g, function (s) {
		var c = s.charCodeAt(0);return H(c & 255) + H(c >> 8);
	});
};

var UnescapeUTF16LE = function UnescapeUTF16LE(str) {
	var u = String.fromCharCode,
	    b = u(92, 120, 48, 48, 45, 92, 120, 70, 70);
	return str.replace(/^%FF%FE/i, "").replace(RegExp("%[0-9A-F]{2}%[0-9A-F]{2}|%[0-9A-F]{2}[" + b + "]|[" + b + "]%[0-9A-F]{2}|[" + b + "]{2}", "ig"), function (s) {
		var l = s.length;
		return u(4 < l ? "0x" + s.substring(4, 6) + s.substring(1, 3) : 2 < l ? 37 == (l = s.charCodeAt(0)) ? parseInt(s.substring(1, 3), 16) | s.charCodeAt(3) << 8 : l | parseInt(s.substring(2), 16) << 8 : s.charCodeAt(0) | s.charCodeAt(1) << 8);
	});
};

var GetEscapeCodeType = function GetEscapeCodeType(str) {
	if (/%u[0-9A-F]{4}/i.test(str)) return "Unicode";
	if (/%([0-9A-DF][0-9A-F]%[8A]0%|E0%80|[0-7][0-9A-F]|C[01])%[8A]0|%00|%[7F]F/i.test(str)) return "UTF16LE";
	if (/%E[0-9A-F]%[8A]0%[8A]0|%[CD][0-9A-F]%[8A]0/i.test(str)) return "UTF8";
	if (/%F[DE]/i.test(str)) return (/%8[0-9A-D]|%9[0-9A-F]|%A0/i.test(str) ? "UTF16LE" : "EUCJP"
	);
	if (/%1B/i.test(str)) return (/%[A-D][0-9A-F]/i.test(str) ? "JIS8" : "JIS7"
	);
	var S = str.substring(0, 6143).replace(/%[0-9A-F]{2}|[^ ]| /ig, function (s) {
		return s.length < 3 ? "40" : s.substring(1);
	}),
	    c,
	    C,
	    i = 0,
	    T;
	while (0 <= (c = parseInt(S.substring(i, i += 2), 16)) && i < 4092) {
		if (128 <= c) {
			if ((C = parseInt(S.substring(i, i + 2), 16)) < 128) i += 2;else if (194 <= c && c < 240 && C < 192) {
				if (c < 224) {
					T = "UTF8";i += 2;continue;
				}
				if (2 == parseInt(S.charAt(i + 2), 16) >> 2) {
					T = "UTF8";i += 4;continue;
				}
			}
			if (142 == c && 161 <= C && C < 224) {
				if (!T) T = "EUCJP";if ("EUCJP" == T) continue;
			}
			if (c < 161) return "SJIS";
			if (c < 224 && !T) {
				if ((164 == c && C < 244 || 165 == c && C < 247) && 161 <= C) i += 2;else T = 224 <= C ? "EUCJP" : "SJIS";
			} else T = "EUCJP";
		}
	}return T ? T : "EUCJP";
};

var JCT11280 = Function('var a="zKV33~jZ4zN=~ji36XazM93y!{~k2y!o~k0ZlW6zN?3Wz3W?{EKzK[33[`y|;-~j^YOTz$!~kNy|L1$353~jV3zKk3~k-4P4zK_2+~jY4y!xYHR~jlz$_~jk4z$e3X5He<0y!wy|X3[:~l|VU[F3VZ056Hy!nz/m1XD61+1XY1E1=1y|bzKiz!H034zKj~mEz#c5ZA3-3X$1~mBz$$3~lyz#,4YN5~mEz#{ZKZ3V%7Y}!J3X-YEX_J(3~mAz =V;kE0/y|F3y!}~m>z/U~mI~j_2+~mA~jp2;~m@~k32;~m>V}2u~mEX#2x~mBy+x2242(~mBy,;2242(~may->2&XkG2;~mIy-_2&NXd2;~mGz,{4<6:.:B*B:XC4>6:.>B*BBXSA+A:X]E&E<~r#z+625z s2+zN=`HXI@YMXIAXZYUM8X4K/:Q!Z&33 3YWX[~mB`{zKt4z (zV/z 3zRw2%Wd39]S11z$PAXH5Xb;ZQWU1ZgWP%3~o@{Dgl#gd}T){Uo{y5_d{e@}C(} WU9|cB{w}bzvV|)[} H|zT}d||0~{]Q|(l{|x{iv{dw}(5}[Z|kuZ }cq{{y|ij}.I{idbof%cu^d}Rj^y|-M{ESYGYfYsZslS`?ZdYO__gLYRZ&fvb4oKfhSf^d<Yeasc1f&a=hnYG{QY{D`Bsa|u,}Dl|_Q{C%xK|Aq}C>|c#ryW=}eY{L+`)][YF_Ub^h4}[X|?r|u_ex}TL@YR]j{SrXgo*|Gv|rK}B#mu{R1}hs|dP{C7|^Qt3|@P{YVV |8&}#D}ef{e/{Rl|>Hni}R1{Z#{D[}CQlQ||E}[s{SG_+i8eplY[=[|ec[$YXn#`hcm}YR|{Ci(_[ql|?8p3]-}^t{wy}4la&pc|3e{Rp{LqiJ],] `kc(]@chYnrM`O^,ZLYhZB]ywyfGY~aex!_Qww{a!|)*lHrM{N+n&YYj~Z b c#e_[hZSon|rOt`}hBXa^i{lh|<0||r{KJ{kni)|x,|0auY{D!^Sce{w;|@S|cA}Xn{C1h${E]Z-XgZ*XPbp]^_qbH^e[`YM|a||+=]!Lc}]vdBc=j-YSZD]YmyYLYKZ9Z>Xcczc2{Yh}9Fc#Z.l{}(D{G{{mRhC|L3b#|xK[Bepj#ut`H[,{E9Yr}1b{[e]{ZFk7[ZYbZ0XL]}Ye[(`d}c!|*y`Dg=b;gR]Hm=hJho}R-[n}9;{N![7k_{UbmN]rf#pTe[x8}!Qcs_rs[m`|>N}^V})7{^r|/E}),}HH{OYe2{Skx)e<_.cj.cjoMhc^d}0uYZd!^J_@g,[[[?{i@][|3S}Yl3|!1|eZ|5IYw|1D}e7|Cv{OHbnx-`wvb[6[4} =g+k:{C:}ed{S]|2M]-}WZ|/q{LF|dYu^}Gs^c{Z=}h>|/i|{W]:|ip{N:|zt|S<{DH[p_tvD{N<[8Axo{X4a.^o^X>Yfa59`#ZBYgY~_t^9`jZHZn`>G[oajZ;X,i)Z.^~YJe ZiZF^{][[#Zt^|]Fjx]&_5dddW]P0C[-]}]d|y {C_jUql] |OpaA[Z{lp|rz}:Mu#]_Yf6{Ep?f5`$[6^D][^u[$[6^.Z8]]ePc2U/=]K^_+^M{q*|9tYuZ,s(dS{i=|bNbB{uG}0jZOa:[-]dYtu3]:]<{DJ_SZIqr_`l=Yt`gkTnXb3d@kiq0a`Z{|!B|}e}Ww{Sp,^Z|0>_Z}36|]A|-t}lt{R6pi|v8hPu#{C>YOZHYmg/Z4nicK[}hF_Bg|YRZ7c|crkzYZY}_iXcZ.|)U|L5{R~qi^Uga@Y[xb}&qdbd6h5|Btw[}c<{Ds53[Y7]?Z<|e0{L[ZK]mXKZ#Z2^tavf0`PE[OSOaP`4gi`qjdYMgys/?[nc,}EEb,eL]g[n{E_b/vcvgb.{kcwi`~v%|0:|iK{Jh_vf5lb}KL|(oi=LrzhhY_^@`zgf[~g)[J_0fk_V{T)}I_{D&_/d9W/|MU[)f$xW}?$xr4<{Lb{y4}&u{XJ|cm{Iu{jQ}CMkD{CX|7A}G~{kt)nB|d5|<-}WJ}@||d@|Iy}Ts|iL|/^|no|0;}L6{Pm]7}$zf:|r2}?C_k{R(}-w|`G{Gy[g]bVje=_0|PT{^Y^yjtT[[[l!Ye_`ZN]@[n_)j3nEgMa]YtYpZy].d-Y_cjb~Y~[nc~sCi3|zg}B0}do{O^{|$`_|D{}U&|0+{J3|8*]iayx{a{xJ_9|,c{Ee]QXlYb]$[%YMc*]w[aafe]aVYi[fZEii[xq2YQZHg]Y~h#|Y:thre^@^|_F^CbTbG_1^qf7{L-`VFx Zr|@EZ;gkZ@slgko`[e}T:{Cu^pddZ_`yav^Ea+[#ZBbSbO`elQfLui}.F|txYcbQ`XehcGe~fc^RlV{D_0ZAej[l&jShxG[ipB_=u:eU}3e8[=j|{D(}dO{Do[BYUZ0/]AYE]ALYhZcYlYP/^-^{Yt_1_-;YT`P4BZG=IOZ&]H[e]YYd[9^F[1YdZxZ?Z{Z<]Ba2[5Yb[0Z4l?]d_;_)a?YGEYiYv`_XmZs4ZjY^Zb]6gqGaX^9Y}dXZr[g|]Y}K aFZp^k^F]M`^{O1Ys]ZCgCv4|E>}8eb7}l`{L5[Z_faQ|c2}Fj}hw^#|Ng|B||w2|Sh{v+[G}aB|MY}A{|8o}X~{E8paZ:]i^Njq]new)`-Z>haounWhN}c#{DfZ|fK]KqGZ=:u|fqoqcv}2ssm}.r{]{nIfV{JW)[K|,Z{Uxc|]l_KdCb%]cfobya3`p}G^|LZiSC]U|(X|kBlVg[kNo({O:g:|-N|qT}9?{MBiL}Sq{`P|3a|u.{Uaq:{_o|^S}jX{Fob0`;|#y_@[V[K|cw[<_ }KU|0F}d3|et{Q7{LuZttsmf^kYZ`Af`}$x}U`|Ww}d]| >}K,r&|XI|*e{C/a-bmr1fId4[;b>tQ_:]hk{b-pMge]gfpo.|(w[jgV{EC1Z,YhaY^q,_G[c_g[J0YX]`[h^hYK^_Yib,` {i6vf@YM^hdOKZZn(jgZ>bzSDc^Z%[[o9[2=/YHZ(_/Gu_`*|8z{DUZxYt^vuvZjhi^lc&gUd4|<UiA`z]$b/Z?l}YI^jaHxe|;F}l${sQ}5g}hA|e4}?o{ih}Uz{C)jPe4]H^J[Eg[|AMZMlc}:,{iz}#*|gc{Iq|/:|zK{l&}#u|myd{{M&v~nV};L|(g|I]ogddb0xsd7^V})$uQ{HzazsgxtsO^l}F>ZB]r|{7{j@cU^{{CbiYoHlng]f+nQ[bkTn/}<-d9q {KXadZYo+n|l[|lc}V2{[a{S4Zam~Za^`{HH{xx_SvF|ak=c^[v^7_rYT`ld@]:_ub%[$[m](Shu}G2{E.ZU_L_R{tz`vj(f?^}hswz}GdZ}{S:h`aD|?W|`dgG|if{a8|J1{N,}-Ao3{H#{mfsP|[ bzn+}_Q{MT{u4kHcj_q`eZj[8o0jy{p7}C|[}l){MuYY{|Ff!Ykn3{rT|m,^R|,R}$~Ykgx{P!]>iXh6[l[/}Jgcg{JYZ.^qYfYIZl[gZ#Xj[Pc7YyZD^+Yt;4;`e8YyZVbQ7YzZxXja.7SYl[s]2^/Ha$[6ZGYrb%XiYdf2]H]kZkZ*ZQ[ZYS^HZXcCc%Z|[(bVZ]]:OJQ_DZCg<[,]%Zaa [g{C00HY[c%[ChyZ,Z_`PbXa+eh`^&jPi0a[ggvhlekL]w{Yp^v}[e{~;k%a&k^|nR_z_Qng}[E}*Wq:{k^{FJZpXRhmh3^p>de^=_7`|ZbaAZtdhZ?n4ZL]u`9ZNc3g%[6b=e.ZVfC[ZZ^^^hD{E(9c(kyZ=bb|Sq{k`|vmr>izlH[u|e`}49}Y%}FT{[z{Rk}Bz{TCc/lMiAqkf(m$hDc;qooi[}^o:c^|Qm}a_{mrZ(pA`,}<2sY| adf_%|}`}Y5U;}/4|D>|$X{jw{C<|F.hK|*A{MRZ8Zsm?imZm_?brYWZrYx`yVZc3a@f?aK^ojEd {bN}/3ZH]/$YZhm^&j 9|(S|b]mF}UI{q&aM]LcrZ5^.|[j`T_V_Gak}9J[ ZCZD|^h{N9{~&[6Zd{}B}2O|cv]K}3s}Uy|l,fihW{EG`j_QOp~Z$F^zexS`dcISfhZBXP|.vn|_HYQ|)9|cr]<`&Z6]m_(ZhPcSg>`Z]5`~1`0Xcb4k1{O!bz|CN_T{LR|a/gFcD|j<{Z._[f)mPc:1`WtIaT1cgYkZOaVZOYFrEe[}T$}Ch}mk{K-^@]fH{Hdi`c*Z&|Kt{if[C{Q;{xYB`dYIX:ZB[}]*[{{p9|4GYRh2ao{DS|V+[zd$`F[ZXKadb*A] Ys]Maif~a/Z2bmclb8{Jro_rz|x9cHojbZ{GzZx_)]:{wAayeDlx}<=`g{H1{l#}9i|)=|lP{Qq}.({La|!Y{i2EZfp=c*}Cc{EDvVB|;g}2t{W4av^Bn=]ri,|y?|3+}T*ckZ*{Ffr5e%|sB{lx^0]eZb]9[SgAjS_D|uHZx]dive[c.YPkcq/}db{EQh&hQ|eg}G!ljil|BO]X{Qr_GkGl~YiYWu=c3eb}29v3|D|}4i||.{Mv})V{SP1{FX}CZW6{cm|vO{pS|e#}A~|1i}81|Mw}es|5[}3w{C`h9aL]o{}p[G`>i%a1Z@`Ln2bD[$_h`}ZOjhdTrH{[j_:k~kv[Sdu]CtL}41{I |[[{]Zp$]XjxjHt_eThoa#h>sSt8|gK|TVi[Y{t=}Bs|b7Zpr%{gt|Yo{CS[/{iteva|cf^hgn}($_c^wmb^Wm+|55jrbF|{9^ q6{C&c+ZKdJkq_xOYqZYSYXYl`8]-cxZAq/b%b*_Vsa[/Ybjac/OaGZ4fza|a)gY{P?| I|Y |,pi1n7}9bm9ad|=d{aV|2@[(}B`d&|Uz}B}{`q|/H|!JkM{FU|CB|.{}Az}#P|lk}K{|2rk7{^8^?`/|k>|Ka{Sq}Gz}io{DxZh[yK_#}9<{TRdgc]`~Z>JYmYJ]|`!ZKZ]gUcx|^E[rZCd`f9oQ[NcD_$ZlZ;Zr}mX|=!|$6ZPZYtIo%fj}CpcN|B,{VDw~gb}@hZg`Q{LcmA[(bo`<|@$|o1|Ss}9Z_}tC|G`{F/|9nd}i=}V-{L8aaeST]daRbujh^xlpq8|}zs4bj[S`J|]?G{P#{rD{]I`OlH{Hm]VYuSYUbRc*6[j`8]pZ[bt_/^Jc*[<Z?YE|Xb|?_Z^Vcas]h{t9|Uwd)_(=0^6Zb{Nc} E[qZAeX[a]P^|_J>e8`W^j_Y}R{{Jp__]Ee#e:iWb9q_wKbujrbR}CY`,{mJ}gz{Q^{t~N|? gSga`V_||:#mi}3t|/I`X{N*|ct|2g{km}gi|{={jC}F;|E}{ZZjYf*frmu}8Tdroi{T[|+~}HG{cJ}DM{Lp{Ctd&}$hi3|FZ| m}Kr|38}^c|m_|Tr{Qv|36}?Up>|;S{DV{k_as}BK{P}}9p|t`jR{sAm4{D=b4pWa[}Xi{EjwEkI}3S|E?u=X0{jf} S|NM|JC{qo^3cm]-|JUx/{Cj{s>{Crt[UXuv|D~|j|d{YXZR}Aq}0r}(_{pJfi_z}0b|-vi)Z mFe,{f4|q`b{}^Z{HM{rbeHZ|^x_o|XM|L%|uFXm}@C_{{Hhp%a7|0p[Xp+^K}9U{bP}: tT}B|}+$|b2|[^|~h{FAby[`{}xgygrt~h1[li`c4vz|,7p~b(|mviN}^pg[{N/|g3|^0c,gE|f%|7N{q[|tc|TKA{LU}I@|AZp(}G-sz{F |qZ{}F|f-}RGn6{Z]_5})B}UJ{FFb2]4ZI@v=k,]t_Dg5Bj]Z-]L]vrpdvdGlk|gF}G]|IW}Y0[G| /bo|Te^,_B}#n^^{QHYI[?hxg{[`]D^IYRYTb&kJ[cri[g_9]Ud~^_]<p@_e_XdNm-^/|5)|h_{J;{kacVopf!q;asqd}n)|.m|bf{QW|U)}b+{tL|w``N|to{t ZO|T]jF}CB|0Q{e5Zw|k |We}5:{HO{tPwf_uajjBfX}-V_C_{{r~gg|Ude;s+}KNXH}! `K}eW{Upwbk%ogaW}9EYN}YY|&v|SL{C3[5s.]Y]I]u{M6{pYZ`^,`ZbCYR[1mNg>rsk0Ym[jrE]RYiZTr*YJ{Ge|%-lf|y(`=[t}E6{k!|3)}Zk} ][G{E~cF{u3U.rJ|a9p#o#ZE|?|{sYc#vv{E=|LC}cu{N8`/`3`9rt[4|He{cq|iSYxY`}V |(Q|t4{C?]k_Vlvk)BZ^r<{CL}#h}R+[<|i=}X|{KAo]|W<`K{NW|Zx}#;|fe{IMr<|K~tJ_x}AyLZ?{GvbLnRgN}X&{H7|x~}Jm{]-| GpNu0}.ok>|c4{PYisrDZ|fwh9|hfo@{H~XSbO]Odv]%`N]b1Y]]|eIZ}_-ZA]aj,>eFn+j[aQ_+]h[J_m_g]%_wf.`%k1e#Z?{CvYu_B^|gk`Xfh^M3`afGZ-Z|[m{L}|k3cp[it ^>YUi~d>{T*}YJ{Q5{Jxa$hg|%4`}|LAgvb }G}{P=|<;Ux{_skR{cV|-*|s-{Mp|XP|$G|_J}c6cM{_=_D|*9^$ec{V;|4S{qO|w_|.7}d0|/D}e}|0G{Dq]Kdp{}dfDi>}B%{Gd|nl}lf{C-{y}|ANZr}#={T~|-(}c&{pI|ft{lsVP}){|@u}!W|bcmB{d?|iW|:dxj{PSkO|Hl]Li:}VYk@|2={fnWt{M3`cZ6|)}|Xj}BYa?vo{e4|L7|B7{L7|1W|lvYO}W8nJ|$Vih|{T{d*_1|:-n2dblk``fT{Ky|-%}m!|Xy|-a{Pz}[l{kFjz|iH}9N{WE{x,|jz}R {P|{D)c=nX|Kq|si}Ge{sh|[X{RF{t`|jsr*fYf,rK|/9}$}}Nf{y!1|<Std}4Wez{W${Fd_/^O[ooqaw_z[L`Nbv[;l7V[ii3_PeM}.h^viqYjZ*j1}+3{bt{DR[;UG}3Og,rS{JO{qw{d<_zbAh<R[1_r`iZTbv^^a}c{iEgQZ<exZFg.^Rb+`Uj{a+{z<[~r!]`[[|rZYR|?F|qppp]L|-d|}K}YZUM|=Y|ktm*}F]{D;g{uI|7kg^}%?Z%ca{N[_<q4xC]i|PqZC]n}.bDrnh0Wq{tr|OMn6tM|!6|T`{O`|>!]ji+]_bTeU}Tq|ds}n|{Gm{z,f)}&s{DPYJ`%{CGd5v4tvb*hUh~bf]z`jajiFqAii]bfy^U{Or|m+{I)cS|.9k:e3`^|xN}@Dnlis`B|Qo{`W|>||kA}Y}{ERYuYx`%[exd`]|OyiHtb}HofUYbFo![5|+]gD{NIZR|Go}.T{rh^4]S|C9_}xO^i`vfQ}C)bK{TL}cQ|79iu}9a];sj{P.o!f[Y]pM``Jda^Wc9ZarteBZClxtM{LW}l9|a.mU}KX}4@{I+f1}37|8u}9c|v${xGlz}jP{Dd1}e:}31}%3X$|22i<v+r@~mf{sN{C67G97855F4YL5}8f{DT|xy{sO{DXB334@55J1)4.G9A#JDYtXTYM4, YQD9;XbXm9SX]IB^4UN=Xn<5(;(F3YW@XkH-X_VM[DYM:5XP!T&Y`6|,^{IS-*D.H>:LXjYQ0I3XhAF:9:(==.F*3F1189K/7163D,:@|e2{LS36D4hq{Lw/84443@4.933:0307::6D7}&l{Mx657;89;,K5678H&93D(H<&<>0B90X^I;}Ag1{P%3A+>><975}[S{PZE453?4|T2{Q+5187;>447:81{C=hL6{Me^:=7ii{R=.=F<81;48?|h8}Uh{SE|,VxL{ST,7?9Y_5Xk3A#:$%YSYdXeKXOD8+TXh7(@>(YdXYHXl9J6X_5IXaL0N?3YK7Xh!1?XgYz9YEXhXaYPXhC3X`-YLY_XfVf[EGXZ5L8BXL9YHX]SYTXjLXdJ: YcXbQXg1PX]Yx4|Jr{Ys4.8YU+XIY`0N,<H%-H;:0@,74/:8546I=9177154870UC]d<C3HXl7ALYzXFXWP<<?E!88E5@03YYXJ?YJ@6YxX-YdXhYG|9o{`iXjY_>YVXe>AYFX[/(I@0841?):-B=14337:8=|14{c&93788|di{cW-0>0<097/A;N{FqYpugAFT%X/Yo3Yn,#=XlCYHYNX[Xk3YN:YRT4?)-YH%A5XlYF3C1=NWyY}>:74-C673<69545v {iT85YED=64=.F4..9878/D4378?48B3:7:7/1VX[f4{D,{l<5E75{dAbRB-8-@+;DBF/$ZfW8S<4YhXA.(5@*11YV8./S95C/0R-A4AXQYI7?68167B95HA1*<M3?1/@;/=54XbYP36}lc{qzSS38:19?,/39193574/66878Yw1X-87E6=;964X`T734:>86>1/=0;(I-1::7ALYGXhF+Xk[@W%TYbX7)KXdYEXi,H-XhYMRXfYK?XgXj.9HX_SX]YL1XmYJ>Y}WwIXiI-3-GXcYyXUYJ$X`Vs[7;XnYEZ;XF! 3;%8;PXX(N3Y[)Xi1YE&/ :;74YQ6X`33C;-(>Xm0(TYF/!YGXg8 9L5P01YPXO-5%C|qd{{/K/E6,=0144:361:955;6443@?B7*7:F89&F35YaX-CYf,XiFYRXE_e{}sF 0*7XRYPYfXa5YXXY8Xf8Y~XmA[9VjYj*#YMXIYOXk,HHX40YxYMXU8OXe;YFXLYuPXP?EB[QV0CXfY{:9XV[FWE0D6X^YVP*$4%OXiYQ(|xp|%c3{}V`1>Y`XH00:8/M6XhQ1:;3414|TE|&o@1*=81G8<3}6<|(f6>>>5-5:8;093B^3U*+*^*UT30XgYU&7*O1953)5@E78--F7YF*B&0:%P68W9Zn5974J9::3}Vk|-,C)=)1AJ4+<3YGXfY[XQXmT1M-XcYTYZXCYZXEYXXMYN,17>XIG*SaS|/eYJXbI?XdNZ+WRYP<F:R PXf;0Xg`$|1GX9YdXjLYxWX!ZIXGYaXNYm6X9YMX?9EXmZ&XZ#XQ>YeXRXfAY[4 ;0X!Zz0XdN$XhYL XIY^XGNXUYS/1YFXhYk.TXn4DXjB{jg|4DEX]:XcZMW=A.+QYL<LKXc[vV$+&PX*Z3XMYIXUQ:ZvW< YSXFZ,XBYeXMM)?Xa XiZ4/EXcP3%}&-|6~:1(-+YT$@XIYRBC<}&,|7aJ6}bp|8)K1|Xg|8C}[T|8Q.89;-964I38361<=/;883651467<7:>?1:.}le|:Z=39;1Y^)?:J=?XfLXbXi=Q0YVYOXaXiLXmJXO5?.SFXiCYW}-;|=u&D-X`N0X^,YzYRXO(QX_YW9`I|>hZ:N&X)DQXP@YH#XmNXi$YWX^=!G6YbYdX>XjY|XlX^XdYkX>YnXUXPYF)FXT[EVTMYmYJXmYSXmNXi#GXmT3X8HOX[ZiXN]IU2>8YdX1YbX<YfWuZ8XSXcZU%0;1XnXkZ_WTG,XZYX5YSX Yp 05G?XcYW(IXg6K/XlYP4XnI @XnO1W4Zp-9C@%QDYX+OYeX9>--YSXkD.YR%Q/Yo YUX].Xi<HYEZ2WdCE6YMXa7F)=,D>-@9/8@5=?7164;35387?N<618=6>7D+C50<6B03J0{Hj|N9$D,9I-,.KB3}m |NzE0::/81YqXjMXl7YG; [.W=Z0X4XQY]:MXiR,XgM?9$9>:?E;YE77VS[Y564760391?14941:0=:8B:;/1DXjFA-564=0B3XlH1+D85:0Q!B#:-6&N/:9<-R3/7Xn<*3J4.H:+334B.=>30H.;3833/76464665755:/83H6633:=;.>5645}&E|Y)?1/YG-,93&N3AE@5 <L1-G/8A0D858/30>8<549=@B8] V0[uVQYlXeD(P#ID&7T&7;Xi0;7T-$YE)E=1:E1GR):--0YI7=E<}n9|aT6783A>D7&4YG7=391W;Zx<5+>F#J39}o/|cc;6=A050EQXg8A1-}D-|d^5548083563695D?-.YOXd37I$@LYLWeYlX<Yd+YR A$;3-4YQ-9XmA0!9/XLY_YT(=5XdDI>YJ5XP1ZAW{9>X_6R(XhYO65&J%DA)C-!B:97#A9;@?F;&;(9=11/=657/H,<8}bz|j^5446>.L+&Y^8Xb6?(CYOXb*YF(8X`FYR(XPYVXmPQ%&DD(XmZXW??YOXZXfCYJ79,O)XnYF7K0!QXmXi4IYFRXS,6<%-:YO(+:-3Q!1E1:W,Zo}Am|n~;3580534*?3Zc4=9334361693:30C<6/717:<1/;>59&:4}6!|rS36=1?75<8}[B|s809983579I.A.>84758=108564741H*9E{L{|u%YQ<%6XfH.YUXe4YL@,>N}Tv|ve*G0X)Z;/)3@A74(4P&A1X:YVH97;,754*A66:1 D739E3553545558E4?-?K17/770843XAYf838A7K%N!YW4.$T19Z`WJ*0XdYJXTYOXNZ 1XaN1A+I&Xi.Xk3Z3GB&5%WhZ1+5#Y[X<4YMXhQYoQXVXbYQ8XSYUX4YXBXWDMG0WxZA[8V+Z8X;D],Va$%YeX?FXfX[XeYf<X:Z[WsYz8X_Y]%XmQ(!7BXIZFX]&YE3F$(1XgYgYE& +[+W!<YMYFXc;+PXCYI9YrWxGXY9DY[!GXiI7::)OC;*$.>N*HA@{C|}&k=:<TB83X`3YL+G4XiK]i}(fYK<=5$.FYE%4*5*H*6XkCYL=*6Xi6!Yi1KXR4YHXbC8Xj,B9ZbWx/XbYON#5B}Ue}+QKXnF1&YV5XmYQ0!*3IXBYb71?1B75XmF;0B976;H/RXU:YZX;BG-NXj;XjI>A#D3B636N;,*%<D:0;YRXY973H5)-4FXOYf0:0;/7759774;7;:/855:543L43<?6=E,.A4:C=L)%4YV!1(YE/4YF+ F3%;S;&JC:%/?YEXJ4GXf/YS-EXEYW,9;E}X$}547EXiK=51-?71C%?57;5>463553Zg90;6447?<>4:9.7538XgN{|!}9K/E&3-:D+YE1)YE/3;37/:05}n<}:UX8Yj4Yt864@JYK..G=.(A Q3%6K>3(P3#AYE$-6H/456*C=.XHY[#S.<780191;057C)=6HXj?955B:K1 E>-B/9,;5.!L?:0>/.@//:;7833YZ56<4:YE=/:7Z_WGC%3I6>XkC*&NA16X=Yz2$X:Y^&J48<99k8}CyB-61<18K946YO4{|N}E)YIB9K0L>4=46<1K0+R;6-=1883:478;4,S+3YJX`GJXh.Yp+Xm6MXcYpX(>7Yo,/:X=Z;Xi0YTYHXjYmXiXj;*;I-8S6N#XgY}.3XfYGO3C/$XjL$*NYX,1 6;YH&<XkK9C#I74.>}Hd`A748X[T450[n75<4439:18A107>|ET}Rf<1;14876/Yb983E<5.YNXd4149>,S=/4E/<306443G/06}0&}UkYSXFYF=44=-5095=88;63844,9E6644{PL}WA8:>)7+>763>>0/B3A545CCnT}Xm|dv}Xq1L/YNXk/H8;;.R63351YY747@15YE4J8;46;.38.>4A369.=-83,;Ye3?:3@YE.4-+N353;/;@(X[YYD>@/05-I*@.:551741Yf5>6A443<3535;.58/86=D4753442$635D1>0359NQ @73:3:>><Xn?;43C14 ?Y|X611YG1&<+,4<*,YLXl<1/AIXjF*N89A4Z576K1XbJ5YF.ZOWN.YGXO/YQ01:4G38Xl1;KI0YFXB=R<7;D/,/4>;$I,YGXm94@O35Yz66695385.>:6A#5}W7n^4336:4157597434433<3|XA}m`>=D>:4A.337370?-6Q96{`E|4A}C`|Qs{Mk|J+~r>|o,wHv>Vw}!c{H!|Gb|*Ca5}J||,U{t+{CN[!M65YXOY_*B,Y[Z9XaX[QYJYLXPYuZ%XcZ8LY[SYPYKZM<LMYG9OYqSQYM~[e{UJXmQYyZM_)>YjN1~[f3{aXFY|Yk:48YdH^NZ0|T){jVFYTZNFY^YTYN~[h{nPYMYn3I]`EYUYsYIZEYJ7Yw)YnXPQYH+Z.ZAZY]^Z1Y`YSZFZyGYHXLYG 8Yd#4~[i|+)YH9D?Y^F~Y7|-eYxZ^WHYdYfZQ~[j|3>~[k|3oYmYqY^XYYO=Z*4[]Z/OYLXhZ1YLZIXgYIHYEYK,<Y`YEXIGZI[3YOYcB4SZ!YHZ*&Y{Xi3~[l|JSY`Zz?Z,~[m|O=Yi>??XnYWXmYS617YVYIHZ(Z4[~L4/=~[n|Yu{P)|];YOHHZ}~[o33|a>~[r|aE]DH~[s|e$Zz~[t|kZFY~XhYXZB[`Y}~[u|{SZ&OYkYQYuZ2Zf8D~[v}% ~[w3},Q[X]+YGYeYPIS~[y}4aZ!YN^!6PZ*~[z}?E~[{3}CnZ=~[}}EdDZz/9A3(3S<,YR8.D=*XgYPYcXN3Z5 4)~[~}JW=$Yu.XX~] }KDX`PXdZ4XfYpTJLY[F5]X~[2Yp}U+DZJ::<446[m@~]#3}]1~]%}^LZwZQ5Z`/OT<Yh^ -~]&}jx[ ~m<z!%2+~ly4VY-~o>}p62yz!%2+Xf2+~ly4VY-zQ`z (=] 2z~o2",C={" ":0,"!":1},c=34,i=2,p,s="",u=String.fromCharCode,t=u(12539);while(++c<127)C[u(c)]=c^39&&c^92?i++:0;i=0;while(0<=(c=C[a.charAt(i++)]))if(16==c)if((c=C[a.charAt(i++)])<87){if(86==c)c=1879;while(c--)s+=u(++p)}else s+=s.substr(8272,360);else if(c<86)s+=u(p+=c<51?c-16:(c-55)*92+C[a.charAt(i++)]);else if((c=((c-86)*92+C[a.charAt(i++)])*92+C[a.charAt(i++)])<49152)s+=u(p=c<40960?c:c|57344);else{c&=511;while(c--)s+=t;p=12539}return s')();

var JCT8836 = JCT11280.substring(0, 8836);

exports.EscapeSJIS = EscapeSJIS;
exports.UnescapeSJIS = UnescapeSJIS;
exports.EscapeEUCJP = EscapeEUCJP;
exports.UnescapeEUCJP = UnescapeEUCJP;
exports.EscapeJIS7 = EscapeJIS7;
exports.UnescapeJIS7 = UnescapeJIS7;
exports.EscapeJIS8 = EscapeJIS8;
exports.UnescapeJIS8 = UnescapeJIS8;
exports.EscapeUnicode = EscapeUnicode;
exports.UnescapeUnicode = UnescapeUnicode;
exports.EscapeUTF7 = EscapeUTF7;
exports.UnescapeUTF7 = UnescapeUTF7;
exports.EscapeUTF8 = EscapeUTF8;
exports.UnescapeUTF8 = UnescapeUTF8;
exports.EscapeUTF16LE = EscapeUTF16LE;
exports.UnescapeUTF16LE = UnescapeUTF16LE;
exports.GetEscapeCodeType = GetEscapeCodeType;
exports.JCT11280 = JCT11280;
exports.JCT8836 = JCT8836;

/***/ })
/******/ ]);