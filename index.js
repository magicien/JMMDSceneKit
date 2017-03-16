module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _MMDIKConstraint = __webpack_require__(1);

	var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

	var _MMDNode = __webpack_require__(2);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDPMDReader = __webpack_require__(4);

	var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

	var _MMDProgram = __webpack_require__(5);

	var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

	var _MMDReader = __webpack_require__(6);

	var _MMDReader2 = _interopRequireDefault(_MMDReader);

	var _MMDSceneSource = __webpack_require__(13);

	var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

	var _MMDVMDReader = __webpack_require__(14);

	var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

	var _BinaryParser = __webpack_require__(17);

	var _BinaryParser2 = _interopRequireDefault(_BinaryParser);

	var _ecl = __webpack_require__(9);

	var _ecl2 = _interopRequireDefault(_ecl);

	var _AjaxRequest = __webpack_require__(12);

	var _AjaxRequest2 = _interopRequireDefault(_AjaxRequest);

	var _BinaryReader = __webpack_require__(7);

	var _BinaryReader2 = _interopRequireDefault(_BinaryReader);

	var _BinaryRequest = __webpack_require__(18);

	var _BinaryRequest2 = _interopRequireDefault(_BinaryRequest);

	var _Buffer = __webpack_require__(8);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _TextReader = __webpack_require__(10);

	var _TextReader2 = _interopRequireDefault(_TextReader);

	var _TextRequest = __webpack_require__(11);

	var _TextRequest2 = _interopRequireDefault(_TextRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*global exports*/
	exports.MMDIKConstraint = _MMDIKConstraint2.default;
	exports.MMDNode = _MMDNode2.default;
	exports.MMDPMDReader = _MMDPMDReader2.default;
	exports.MMDProgram = _MMDProgram2.default;
	exports.MMDReader = _MMDReader2.default;
	exports.MMDSceneSource = _MMDSceneSource2.default;
	exports.MMDVMDReader = _MMDVMDReader2.default;
	exports.BinaryParser = _BinaryParser2.default;
	exports.ecl = _ecl2.default;
	exports.AjaxRequest = _AjaxRequest2.default;
	exports.BinaryReader = _BinaryReader2.default;
	exports.BinaryRequest = _BinaryRequest2.default;
	exports.Buffer = _Buffer2.default;
	exports.TextReader = _TextReader2.default;
	exports.TextRequest = _TextRequest2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jscenekit = __webpack_require__(3);

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
	    var _this = _possibleConstructorReturn(this, (MMDNode.__proto__ || Object.getPrototypeOf(MMDNode)).call(this));

	    _this.physicsBehaviors = [];

	    /**
	     *
	     * @type {Symbol}
	     */
	    _this.type = MMDNode.Type.unknown;

	    /**
	     *
	     * @type {boolean}
	     */
	    _this.isKnee = false;

	    /**
	     *
	     * @type {MMDIKConstraint}
	     */
	    _this.ikConstraint = null;

	    /**
	     *
	     * @type {MMDIKConstraint[]}
	     */
	    _this.ikArray = null;

	    /**
	     *
	     * @type {SCNPhysicsBehavior[]}
	     */
	    _this.joints = null;

	    /**
	     *
	     * @type {number}
	     */
	    _this.vertexCount = 0;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.vertexArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.normalArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.texcoordArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.boneIndicesArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.boneWeightsArray = null;

	    /**
	     *
	     * @type {number}
	     */
	    _this.indexCount = 0;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.indexArray = null;

	    /**
	     *
	     * @type {number}
	     */
	    _this.materialCount = 0;

	    /**
	     *
	     * @type {SCNMaterial[]}
	     */
	    _this.materialArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.materialIndexCountArray = null;

	    /**
	     *
	     * @type {?SCNGeometryElement[]}
	     */
	    _this.elementArray = null;

	    /**
	     *
	     * @type {MMDNode[]}
	     */
	    _this.boneArray = null;

	    /**
	     *
	     * @type {SCNMatrix4[]}
	     */
	    _this.boneInverseMatrixArray = null;

	    /**
	     *
	     * @type {MMDNode}
	     */
	    _this.rootBone = null;

	    /**
	     *
	     * @type {?MMDNode}
	     */
	    _this.rotateEffector = null;

	    /**
	     *
	     * @type {number}
	     */
	    _this.rotateEffectRate = 0;

	    /**
	     *
	     * @type {?MMDNode}
	     */
	    _this.translateEffector = null;

	    /**
	     *
	     * @type {number}
	     */
	    _this.translateEffectRate = 0;

	    /**
	     *
	     * @type {?number[]}
	     */
	    _this.faceIndexArray = null;

	    /**
	     *
	     * @type {?number[][]}
	     */
	    _this.faceDataArray = null;

	    /**
	     *
	     * @type {number[]}
	     */
	    _this.faceWeights = null;

	    /**
	     *
	     * @type {SCNMorpher}
	     */
	    _this.geometryMorpher = null;

	    /**
	     *
	     * @type {?Map}
	     */
	    _this.preparedAnimation = null;

	    if (mmdNode !== null) {
	      _this.copySCNNodeValues(mmdNode);
	      _this.copyValues(mmdNode);
	    }
	    return _this;
	  }

	  /**
	   *
	   * @access public
	   * @returns {MMDNode} -
	   */


	  _createClass(MMDNode, [{
	    key: 'clone',
	    value: function clone() {
	      var newNode = new MMDNode();
	      // TODO: copy values of SCNNode
	      this.copyValuesRecursive(this, newNode);

	      return newNode;
	    }

	    /**
	     *
	     * @access public
	     * @param {SCNNode} node -
	     * @returns {void}
	     */

	  }, {
	    key: 'copySCNNodeValues',
	    value: function copySCNNodeValues(node) {}

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
	    value: function valueForUndefinedKey(key) {}
	  }, {
	    key: 'setValueForUndefinedKey',
	    value: function setValueForUndefinedKey(value, key) {}

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
	        var convertedAnimation = this.convertAnimation(animation);
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
	    key: 'playPreparedAnimationForKey',
	    value: function playPreparedAnimationForKey(key) {
	      if (this.preparedAnimation === null) {
	        return;
	      }
	      var anim = this.preparedAnimation.get(key);
	      if (anim) {
	        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimation', this).call(this, anim, key);
	      }
	    }

	    /**
	     *
	     * @access public
	     * @param {CAAnimationGroup} animation -
	     * @returns {CAAnimationGroup} -
	     */

	  }, {
	    key: 'convertAnimation',
	    value: function convertAnimation(animation) {
	      var _this2 = this;

	      var geometryNode = this.childNodeWithNameRecursively('Geometry', true);
	      var newGroup = animation.copy();
	      newGroup.animations = [];

	      var animations = animation.animations;
	      if (animations) {
	        animations.forEach(function (anim) {
	          var hasEffector = false;
	          var newAnim = anim.copy();

	          if (newAnim instanceof _jscenekit.CAKeyframeAnimation) {
	            var boneNameKey = newAnim.keyPath.split('.')[0];
	            var boneName = boneNameKey.substring(1);
	            var bone = _this2.childNodeWithNameRecursively(boneName, true);

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
	                  newAnim.keyPath = '//';
	                }
	              }
	            } else if (bone !== null) {
	              if (newAnim.keyPath.endsWith('.translation.x')) {
	                for (var _i = 0; _i < newAnim.values.length; _i++) {
	                  var origValue = newAnim.values[_i];
	                  var newValue = origValue + bone.position.x;
	                  newAnim.values[_i] = newValue;
	                }
	              } else if (newAnim.keyPath.endsWith('.translation.y')) {
	                for (var _i2 = 0; _i2 < newAnim.values.length; _i2++) {
	                  var _origValue = newAnim.values[_i2];
	                  var _newValue = _origValue + bone.position.y;
	                  newAnim.values[_i2] = _newValue;
	                }
	              } else if (newAnim.keyPath.endsWith('.translation.z')) {
	                for (var _i3 = 0; _i3 < newAnim.values.length; _i3++) {
	                  var _origValue2 = newAnim.values[_i3];
	                  var _newValue2 = _origValue2 + bone.position.z;
	                  newAnim.values[_i3] = _newValue2;
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
	        var convertedAnimation = this.convertAnimation(animation);
	        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimation', this).call(this, convertedAnimation, key);
	      } else {
	        animation.delegate = this;
	        _get(MMDNode.prototype.__proto__ || Object.getPrototypeOf(MMDNode.prototype), 'addAnimation', this).call(this, animation, key);
	      }
	    }

	    /**
	     *
	     * @access public
	     * @returns {void}
	     */

	  }, {
	    key: 'updateIK',
	    value: function updateIK() {}
	    // TODO: implement


	    /**
	     *
	     * @access public
	     * @returns {void}
	     */

	  }, {
	    key: 'updateEffector',
	    value: function updateEffector() {}
	    // TODO: implement


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
	  }, {
	    key: 'setCompletionHandler',
	    value: function setCompletionHandler(block, key) {
	      var anim = this.preparedAnimation.get(key);
	      if (anim) {
	        anim.setValueForKey(block, _MMDAnimationCompletionBlockKey);
	      }
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("jscenekit");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MMDNode = __webpack_require__(2);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDProgram = __webpack_require__(5);

	var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

	var _MMDReader2 = __webpack_require__(6);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _MMDIKConstraint = __webpack_require__(1);

	var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

	var _jscenekit = __webpack_require__(3);

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
	      if (this._pos >= this.length) {
	        return this._workingNode;
	      }

	      this._readEnglishInfo();
	      if (this._pos >= this.length) {
	        return this._workingNode;
	      }

	      this._readToonTexture();

	      if (this._pos >= this.length) {
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

	        if (textureFile !== '') {
	          var fileName = _this2.directoryPath + textureFile;
	          var image = new Image();
	          image.onload = function () {
	            material.diffuse.contents = image;
	          };
	          image.src = fileName;
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
	        var baseFaceVertex = zeroArray.splice(0);

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
	          var faceVertex = zeroArray.splice(0);
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

	      this._texcoordSource = new _jscenekit.SCNGeometrySource(normalData, // data
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

	      var program = new _MMDProgram2.default();
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

	      this._workingNode.name = 'rootNode';
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jscenekit = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

	    return _possibleConstructorReturn(this, (MMDProgram.__proto__ || Object.getPrototypeOf(MMDProgram)).call(this));
	  }

	  return MMDProgram;
	}(_jscenekit.SCNProgram);

	exports.default = MMDProgram;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BinaryReader = __webpack_require__(7);

	var _BinaryReader2 = _interopRequireDefault(_BinaryReader);

	var _TextReader = __webpack_require__(10);

	var _TextReader2 = _interopRequireDefault(_TextReader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//import {
	//  SCNNode
	//} from 'jscenekit'

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
	   */
	  function MMDReader(data, directoryPath) {
	    var isBinary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	    var isBigEndian = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	    var encoding = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

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
	    this.length = data.byteLength;

	    this._reader = null;

	    if (isBinary) {
	      this._reader = new _BinaryReader2.default(data, isBigEndian, encoding);
	    } else {
	      this._reader = new _TextReader2.default(data, encoding);
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
	    key: 'pos',
	    get: function get() {
	      return this._reader._pos;
	    }
	  }]);

	  return MMDReader;
	}();

	exports.default = MMDReader;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Buffer = __webpack_require__(8);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _ecl = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * BinaryReader class
	 * @access public
	 */
	var BinaryReader = function () {
	  /**
	   * constructor
	   * @param {Buffer|ArrayBuffer} data - 
	   * @param {boolean} bigEndian -
	   * @param {string} encoding -
	   * @constructor
	   */
	  function BinaryReader(data) {
	    var bigEndian = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	    _classCallCheck(this, BinaryReader);

	    /**
	     * @access private
	     * @type {number}
	     */
	    this._pos = 0;

	    /**
	     * @access private
	     * @type {boolean}
	     */
	    this.eof = true;

	    /**
	     *
	     * @access public
	     * @type {Buffer}
	     */
	    this.buffer = null;

	    if (data instanceof _Buffer2.default) {
	      this.buffer = data;
	    } else {
	      this.buffer = _Buffer2.default.from(data);
	    }

	    /**
	     *
	     * @access public
	     * @type {boolean}
	     */
	    this.bigEndian = bigEndian;

	    /**
	     *
	     * @access public
	     * @type {string}
	     */
	    this.encoding = encoding;
	  }

	  /**
	   * @access public
	   * @param {number} length - length of data to skip
	   * @param {boolean} noAssert -
	   * @returns {void}
	   */


	  _createClass(BinaryReader, [{
	    key: 'skip',
	    value: function skip(length) {
	      var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      this._pos += length;
	      if (!noAssert) {
	        this._check();
	      }
	    }

	    /**
	     *
	     * @access public
	     * @param {number} length - length of data to read
	     * @param {?string} [encoding = null] -
	     * @returns {string} -
	     */

	  }, {
	    key: 'readString',
	    value: function readString(length) {
	      var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      var start = this._pos;
	      this._pos += length;
	      var _encoding = encoding || this.encoding || 'sjis';
	      if (_Buffer2.default.isEncoding(_encoding)) {
	        return this.buffer.toString(_encoding, start, this._pos);
	      }

	      var data = this.buffer.toString('binary', start, this._pos);
	      return this._convert(data, _encoding);
	    }

	    /**
	     *
	     * @access public
	     * @param {number} length - 
	     * @param {boolean} signed -
	     * @returns {number} -
	     */

	  }, {
	    key: 'readInteger',
	    value: function readInteger(length, signed) {
	      var start = this._pos;
	      this._pos += length;

	      // big endian
	      if (this.bigEndian) {
	        if (signed) {
	          return this.buffer.readIntBE(start, length);
	        }
	        return this.buffer.readUIntBE(start, length);
	      }

	      // little endian
	      if (signed) {
	        return this.buffer.readIntLE(start, length);
	      }
	      return this.buffer.readUIntLE(start, length);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readUnsignedByte',
	    value: function readUnsignedByte() {
	      return this.readInteger(1, false);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readUnsignedShort',
	    value: function readUnsignedShort() {
	      return this.readInteger(2, false);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readUnsignedInt',
	    value: function readUnsignedInt() {
	      return this.readInteger(4, false);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readInt',
	    value: function readInt() {
	      return this.readInteger(4, true);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readFloat',
	    value: function readFloat() {
	      var start = this._pos;
	      this._pos += 4;
	      if (this.bigEndian) {
	        return this.buffer.readFloatBE(start);
	      }

	      return this.buffer.readFloatLE(start);
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readDouble',
	    value: function readDouble() {
	      var start = this._pos;
	      this._pos += 8;
	      if (this.bigEndian) {
	        return this.buffer.readDoubleBE(start);
	      }

	      return this.buffer.readDoubleLE(start);
	    }

	    /**
	     *
	     * @access public
	     * @param {number} length -
	     * @returns {Buffer} -
	     */

	  }, {
	    key: 'readData',
	    value: function readData(length) {
	      var start = this._pos;
	      this._pos += length;
	      return this.buffer.slice(start, this._pos);
	    }

	    /**
	     *
	     * @access private
	     * @returns {void}
	     */

	  }, {
	    key: '_check',
	    value: function _check() {
	      if (this._pos >= this.buffer.length) {
	        throw new Error('BinaryReader: buffer out of range (' + this._pos + ' >= ' + this.buffer.length + ')');
	      }
	    }

	    /**
	     *
	     * @access private
	     * @param {number[]} data - length of data to convert
	     * @param {?string} [encoding = null] -
	     * @returns {string} -
	     */

	  }, {
	    key: '_convert',
	    value: function _convert(data, encoding) {
	      var length = data.length;
	      var escapeString = '';
	      for (var i = 0; i < length; i++) {
	        var charCode = data.charCodeAt(i);
	        if (charCode === 0) {
	          break;
	        } else if (charCode < 16) {
	          escapeString += '%0' + charCode.toString(16);
	        } else {
	          escapeString += '%' + charCode.toString(16);
	        }
	      }

	      if (encoding === 'sjis') {
	        return (0, _ecl.UnescapeSJIS)(escapeString);
	      } else if (encoding === 'euc-jp') {
	        return (0, _ecl.UnescapeEUCJP)(escapeString);
	      } else if (encoding === 'jis-7') {
	        return (0, _ecl.UnescapeJIS7)(escapeString);
	      } else if (encoding === 'jis-8') {
	        return (0, _ecl.UnescapeJIS8)(escapeString);
	      } else if (encoding === 'unicode') {
	        return (0, _ecl.UnescapeUnicode)(escapeString);
	      } else if (encoding === 'utf7') {
	        return (0, _ecl.UnescapeUTF7)(escapeString);
	      } else if (encoding === 'utf-8') {
	        return (0, _ecl.UnescapeUTF8)(escapeString);
	      } else if (encoding === 'utf-16') {
	        return (0, _ecl.UnescapeUTF16LE)(escapeString);
	      }

	      throw new Error('unsupported encoding: ' + encoding);
	    }
	  }, {
	    key: 'getAvailableDataLength',
	    value: function getAvailableDataLength() {
	      return this.buffer.length - this._pos;
	    }
	  }]);

	  return BinaryReader;
	}();

	exports.default = BinaryReader;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _supportedEncoding = ['ascii', 'utf8', 'utf16le', 'ucs2', 'base64', 'latin1', 'binary', 'hex'];

	/*global Buffer*/
	var _Buffer = Buffer;
	if (!_Buffer) {
	  var _Buffer2 = function () {
	    function _Buffer2() {
	      _classCallCheck(this, _Buffer2);

	      this._data = null;
	    }

	    _createClass(_Buffer2, [{
	      key: 'readIntBE',
	      value: function readIntBE(offset, byteLength) {
	        var noAssert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      }
	    }, {
	      key: 'readIntLE',
	      value: function readIntLE(offset, byteLength) {
	        var noAssert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      }
	    }, {
	      key: 'readInt8',
	      value: function readInt8(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readIntBE(offset, 1, noAssert);
	      }
	    }, {
	      key: 'readInt16BE',
	      value: function readInt16BE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readIntBE(offset, 2, noAssert);
	      }
	    }, {
	      key: 'readInt16LE',
	      value: function readInt16LE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readIntLE(offset, 2, noAssert);
	      }
	    }, {
	      key: 'readInt32BE',
	      value: function readInt32BE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readIntBE(offset, 4, noAssert);
	      }
	    }, {
	      key: 'readInt32LE',
	      value: function readInt32LE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readIntLE(offset, 4, noAssert);
	      }
	    }, {
	      key: 'readUIntBE',
	      value: function readUIntBE(offset, byteLength) {
	        var noAssert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      }
	    }, {
	      key: 'readUIntLE',
	      value: function readUIntLE(offset, byteLength) {
	        var noAssert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      }
	    }, {
	      key: 'readUInt8',
	      value: function readUInt8(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readUIntBE(offset, 1, noAssert);
	      }
	    }, {
	      key: 'readUInt16BE',
	      value: function readUInt16BE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readUIntBE(offset, 2, noAssert);
	      }
	    }, {
	      key: 'readUInt16LE',
	      value: function readUInt16LE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readUIntLE(offset, 2, noAssert);
	      }
	    }, {
	      key: 'readUInt32BE',
	      value: function readUInt32BE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readUIntBE(offset, 4, noAssert);
	      }
	    }, {
	      key: 'readUInt32LE',
	      value: function readUInt32LE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	        return this.readUIntLE(offset, 4, noAssert);
	      }
	    }, {
	      key: 'readFloatBE',
	      value: function readFloatBE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      }
	    }, {
	      key: 'readFloatLE',
	      value: function readFloatLE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      }
	    }, {
	      key: 'readDoubleBE',
	      value: function readDoubleBE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      }
	    }, {
	      key: 'readDoubleLE',
	      value: function readDoubleLE(offset) {
	        var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      }
	    }, {
	      key: 'slice',
	      value: function slice(start, end) {
	        return new _Buffer2(this._data.buffer.slice(start, end));
	      }
	    }, {
	      key: 'toString',
	      value: function toString(encoding, start, end) {
	        if (!_Buffer2.isEncoding(encoding)) {
	          throw new Error('unsupported encoding: ' + encoding);
	        }
	      }
	    }, {
	      key: 'length',
	      get: function get() {
	        return this._data.byteLength;
	      }
	    }], [{
	      key: 'from',
	      value: function from(array) {
	        var byteOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	        var buf = new _Buffer2();
	        if (Array.isArray(array)) {
	          var ab = new ArrayBuffer(array);
	          buf._data = new DataView(ab.buffer, byteOffset, length);
	        } else if (array instanceof ArrayBuffer) {
	          buf._data = new DataView(array, byteOffset, length);
	        } else if (array.buffer instanceof ArrayBuffer) {
	          buf._data = new DataView(array.buffer, byteOffset, length);
	        }

	        if (buf._data === null) {
	          throw new Error('Buffer.from: unsupported data type: ' + array);
	        }
	      }
	    }, {
	      key: 'isEncoding',
	      value: function isEncoding(encoding) {
	        return _supportedEncoding.indexOf(encoding) >= 0;
	      }
	    }]);

	    return _Buffer2;
	  }();

	  _Buffer = _Buffer2;
	}

	exports.default = _Buffer;

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TextRequest = __webpack_require__(11);

	var _TextRequest2 = _interopRequireDefault(_TextRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * TextReader class
	 * @access public
	 */
	var TextReader = function () {
	  /**
	   * constructor
	   * @access public
	   * @constructor
	   * @param {Buffer|ArrayBuffer} data -
	   * @param {string} encoding -
	   */
	  function TextReader(data) {
	    var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf-8';

	    _classCallCheck(this, TextReader);

	    this.position = 0;
	    this.eof = true;
	    this.data = null;
	    this.encoding = encoding;

	    if (encoding === 'sjis') {
	      this.encoding = 'shift_jis';
	    }

	    var obj = this;
	    if (data instanceof File) {
	      this.url = data.name;
	      var reader = new FileReader();
	      reader.onloadend = function () {
	        obj._onload(reader.result);
	      };
	      reader.readAsText(data, this._encoding);
	    } else {
	      this.url = data;

	      _TextRequest2.default.getWithCharset(data, this.encoding).then(function (value) {
	        obj._onload(value);
	      }).catch(function (e) {
	        obj._onerror(e);
	      });
	    }
	  }

	  _createClass(TextReader, [{
	    key: '_onload',
	    value: function _onload(textData) {
	      this.position = 0;

	      this.data = textData;
	      this.eof = false;

	      if (this.onloadFunc) {
	        this.onloadFunc(this);
	      }
	    }
	  }, {
	    key: '_onerror',
	    value: function _onerror(error) {
	      if (this.onerrorFunc) {
	        this.onerrorFunc(error);
	      }
	    }
	  }, {
	    key: 'getText',
	    value: function getText() {
	      return this.data;
	    }

	    // FIXME: implementation

	  }, {
	    key: 'hasBytesAvailable',
	    value: function hasBytesAvailable() {
	      return !this.eof;
	    }
	  }, {
	    key: 'readData',
	    value: function readData(length) {
	      /*
	      if(this.eof){
	        return null
	      }
	      const dataStr = String.fromCharCode.apply(String, this.data.slice(this.position, this.position + length))
	       this.position += length
	      if(this.position >= this.data.length){
	        this.eof = true
	      }
	       return dataStr
	      */
	    }
	  }, {
	    key: 'readInteger',
	    value: function readInteger(length, signed) {
	      /*
	      if(this.eof){
	        return null
	      }
	       const value = this.parser.decodeInt(this.readData(length), length * 8, signed)
	       return value
	      */
	    }
	  }, {
	    key: 'readByte',
	    value: function readByte() {
	      /*
	      return this.readInteger(1, true)
	      */
	    }
	  }, {
	    key: 'readUnsignedByte',
	    value: function readUnsignedByte() {
	      /*
	      return this.readInteger(1, false)
	      */
	    }
	  }, {
	    key: 'readShort',
	    value: function readShort() {
	      /*
	      return this.readInteger(2, true)
	      */
	    }
	  }, {
	    key: 'readUnsignedShort',
	    value: function readUnsignedShort() {
	      //return this.readInteger(2, false)
	    }
	  }, {
	    key: 'readInt',
	    value: function readInt() {
	      //return this.readInteger(4, true)
	    }
	  }, {
	    key: 'readUnsignedInt',
	    value: function readUnsignedInt() {
	      //return this.readInteger(4, false)
	    }
	  }, {
	    key: 'readFloat',
	    value: function readFloat() {
	      /*
	      if(this.eof){
	        return null
	      }
	      const floatSize = 4
	      const value = this.parser.toFloat(this.readData(floatSize))
	       return value
	      */
	    }
	  }, {
	    key: 'readDouble',
	    value: function readDouble() {
	      /*
	      if(this.eof){
	        return null
	      }
	      const doubleSize = 8
	      const value = this.parser.toDouble(this.readData(doubleSize))
	       return value
	      */
	    }
	  }, {
	    key: 'readString',
	    value: function readString(length) {
	      /*
	      if(this.eof){
	        return null
	      }
	       const escapeString = ''
	      for(var i=0 i<length i++){
	        const charCode = this.data[this.position + i]
	        if(charCode == 0){
	          break
	        }
	        else if(charCode < 16){
	          escapeString += '%0' + charCode.toString(16)
	        }else{
	          escapeString += '%' + charCode.toString(16)
	        }
	      }
	        
	      this.position += length 
	      if(this.position >= this.data.length)
	        this.eof = true
	       const value
	      if(this.encoding == 'sjis'){
	        value = UnescapeSJIS(escapeString)
	      }else if(this.encoding == 'euc-jp'){
	        value = UnescapeEUCJP(escapeString)
	      }else if(this.encoding == 'jis-7'){
	        value = UnescapeJIS7(escapeString)
	      }else if(this.encoding == 'jis-8'){
	        value = UnescapeJIS8(escapeString)
	      }else if(this.encoding == 'unicode'){
	        value = UnescapeUnicode(escapeString)
	      }else if(this.encoding == 'utf7'){
	        value = UnescapeUTF7(escapeString)
	      }else if(this.encoding == 'utf-8'){
	        value = UnescapeUTF8(escapeString)
	      }else if(this.encoding == 'utf-16'){
	        value = UnescapeUTF16LE(escapeString)
	      }
	       return value
	      */
	    }
	  }], [{
	    key: 'open',
	    value: function open(url, encoding) {
	      return new Promise(function (resolve, reject) {
	        return new TextReader(url, encoding, resolve, reject);
	      });
	    }
	  }]);

	  return TextReader;
	}();

	exports.default = TextReader;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextRequest = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AjaxRequest2 = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * TextRequest class
	 * @access public
	 */
	var TextRequest = exports.TextRequest = function (_AjaxRequest) {
	  _inherits(TextRequest, _AjaxRequest);

	  /**
	   * constructor
	   * @access public
	   * @constructor
	   */
	  function TextRequest() {
	    _classCallCheck(this, TextRequest);

	    var _this = _possibleConstructorReturn(this, (TextRequest.__proto__ || Object.getPrototypeOf(TextRequest)).call(this));

	    _this.defaultOptions.mimeType = 'text/plain; charset=utf-8';
	    return _this;
	  }

	  _createClass(TextRequest, [{
	    key: 'getWithCharset',
	    value: function getWithCharset(url, charset) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      options.mimeType = 'text/plain; charset=' + charset;
	      return this.get(url, options);
	    }
	  }, {
	    key: 'postWithCharset',
	    value: function postWithCharset(url, charset) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      options.mimeType = 'text/plain; charset=' + charset;
	      return this.post(url, options);
	    }
	  }]);

	  return TextRequest;
	}(_AjaxRequest2.AjaxRequest);

	exports.default = new TextRequest();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * AjaxRequest class
	 * @access public
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AjaxRequest = exports.AjaxRequest = function () {
	  /**
	   * constructor
	   * @access public
	   * @constructor
	   */
	  function AjaxRequest() {
	    _classCallCheck(this, AjaxRequest);

	    this.defaultOptions = {
	      method: 'POST',
	      async: true,
	      data: null,
	      user: null,
	      password: null,
	      mimeType: null,
	      isJSONP: false,
	      requestHeader: {}
	    };

	    this.jsonpScripts = [];
	    this.jsonpCallbackPrefix = 'jsonpCallback_';
	  }

	  _createClass(AjaxRequest, [{
	    key: 'get',
	    value: function get(url) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options.method = 'GET';
	      return this.request(url, options);
	    }
	  }, {
	    key: 'post',
	    value: function post(url) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      options.method = 'POST';
	      return this.request(url, options);
	    }
	  }, {
	    key: 'jsonp',
	    value: function jsonp(url) {
	      var callbackParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'callback';
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var requestURL = url;
	      var script = document.createElement('script');
	      var callbackFuncName = this._getNewFuncName(this.jsonpCallbackPrefix);

	      if (!options.data) {
	        options.data = {};
	      }
	      options.data[callbackParam] = callbackFuncName;

	      var queryArray = [];
	      options.data.forEach(function (key, value) {
	        queryArray.push(encodeURI(key) + '=' + encodeURI(value));
	      });
	      requestURL += '?' + queryArray.join('&');

	      var promise = new Promise(function (resolve, reject) {
	        window[callbackFuncName] = resolve;
	        script.addEventListener('error', reject);
	      }).catch(function (error) {
	        delete window[callbackFuncName];
	        document.head.removeChild(script);
	        return Promise.reject(error);
	      }).then(function (result) {
	        delete window[callbackFuncName];
	        document.head.removeChild(script);
	        return Promise.resolve(result);
	      });

	      script.src = requestURL;
	      document.head.appendChild(script);

	      return promise;
	    }
	  }, {
	    key: '_getNewFuncName',
	    value: function _getNewFuncName() {
	      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      // ESLint prefers for(;;) more than while(true)
	      for (;;) {
	        var funcName = prefix + Math.random().toString(16).slice(2);
	        if (typeof window[funcName] === 'undefined') {
	          return funcName;
	        }
	      }
	    }
	  }, {
	    key: 'request',
	    value: function request(url) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      var requestURL = url;
	      var method = typeof options.method === 'undefined' ? this.defaultOptions.method : options.method;
	      var async = typeof options.async === 'undefined' ? this.defaultOptions.async : options.async;
	      var data = this.defaultOptions.data;
	      var user = typeof options.user === 'undefined' ? this.defaultOptions.user : options.user;
	      var password = typeof options.password === 'undefined' ? this.defaultOptions.password : options.password;
	      var mimeType = typeof options.mimeType === 'undefined' ? this.defaultOptions.mimeType : options.mimeType;
	      var header = typeof options.requestHeader === 'undefined' ? this.defaultOptions.requestHeader : options.requestHeader;
	      var isJSONP = typeof options.isJSONP === 'undefined' ? this.defaultOptions.isJSONP : options.isJSONP;

	      if (method !== 'POST' && method !== 'GET') {
	        method = 'POST';
	      }

	      if (options.data) {
	        var dataArray = [];
	        if (options.data instanceof Map) {
	          options.data.forEach(function (key, value) {
	            dataArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
	          });
	        } else {
	          Object.keys(options.data).forEach(function (key) {
	            var value = options.data[key];
	            dataArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
	          });
	        }

	        if (method === 'POST') {
	          data = dataArray.join('&').replace(/%20/g, '+');
	        } else {
	          requestURL += '?' + dataArray.join('&').replace(/%20/g, '+');
	        }
	      }

	      if (method === 'POST' && typeof header['Content-Type'] === 'undefined') {
	        header['Content-Type'] = 'application/x-www-form-urlencoded';
	      }

	      return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();

	        if (mimeType) {
	          xhr.overrideMimeType(mimeType);
	        }

	        if (user) {
	          xhr.open(method, url, async, user, password);
	        } else {
	          xhr.open(method, url, async);
	        }

	        if (header) {
	          for (var key in header) {
	            // Reflect is not yet implemented...
	            //if(Reflect.apply({}.hasOwnProperty, header, [key])){
	            if ({}.hasOwnProperty.call(header, key)) {
	              xhr.setRequestHeader(key, header[key]);
	            }
	          }
	        }

	        xhr.onload = function () {
	          if (xhr.readyState === 4 && xhr.status === 200) {
	            resolve(xhr.response);
	          } else {
	            reject(new Error(xhr.statusText));
	          }
	        };
	        xhr.onerror = function () {
	          reject(new Error(xhr.statusText));
	        };
	        xhr.send(data);
	      });
	    }
	  }]);

	  return AjaxRequest;
	}();

	exports.default = new AjaxRequest();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jscenekit = __webpack_require__(3);

	var _MMDNode = __webpack_require__(2);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDPMDReader = __webpack_require__(4);

	var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

	var _MMDVMDReader = __webpack_require__(14);

	var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

	var _fs = __webpack_require__(16);

	var _fs2 = _interopRequireDefault(_fs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _MMDFileType = {
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
	};

	// for node

	/**
	 *
	 * @access public
	 * @extends {SCNSceneSource}
	 */
	var MMDSceneSource = function (_SCNSceneSource) {
	  _inherits(MMDSceneSource, _SCNSceneSource);

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
	  function MMDSceneSource(data, options, directoryPath, models, motions) {
	    _classCallCheck(this, MMDSceneSource);

	    var _this = _possibleConstructorReturn(this, (MMDSceneSource.__proto__ || Object.getPrototypeOf(MMDSceneSource)).call(this));

	    _this._fileType = _MMDFileType.unknown;
	    _this._directoryPath = directoryPath;
	    _this._workingScene = null;
	    _this._workingNode = null;
	    _this._workingAnimationGroup = null;

	    if (data === undefined) {
	      return _possibleConstructorReturn(_this);
	    }
	    _this._loadData(data, options);
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
	      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

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
	      }
	      /*
	      if(this._fileType === _MMDFileType.pmd){
	        const pmdNode = MMDPMDReader.getNode(data, this._directoryPath)
	        if(pmdNode){
	          this._workingNode = pmdNode
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
	          this._workingNode = xNode
	        }
	      }else if(this._fileType === _MMDFileType.vac){
	        const vacNode = MMDVACReader.getNode(data, this._directoryPath)
	        if(vacNode){
	          this._workingNode = vacNode
	        }
	      }else if(this._fileType === _MMDFileType.pmx){
	        const pmxNode = MMDPMXReader.getNode(data, this._directoryPath)
	        if(pmxNode){
	          this._workingNode = pmxNode
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
	      return this.workingScene;
	    }
	  }, {
	    key: 'getModel',
	    value: function getModel() {
	      if (this._fileType === _MMDFileType.pmd || this._fileType === _MMDFileType.pmx || this._fileType === _MMDFileType.x || this._fileType === _MMDFileType.vac) {
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
	    key: 'sceneSourceWithURLOpions',
	    value: function sceneSourceWithURLOpions(url, options) {
	      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	    }
	  }, {
	    key: 'sceneSourceWithPathOptions',
	    value: function sceneSourceWithPathOptions(path, options) {
	      var models = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var motions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var paths = path.split('/');
	      paths.pop();
	      var directoryPath = paths.join('/') + '/';

	      // for node
	      var promise = new Promise(function (resolve, reject) {
	        _fs2.default.readFile(path, null, function (err, data) {
	          if (err) {
	            reject(err);
	            return;
	          }

	          var source = new MMDSceneSource(data, options, directoryPath, models, motions);
	          resolve(source);
	        });
	      });

	      // for browser
	      /*
	      const promise = BinaryRequest.get(path)
	        .then((data) => {
	          const source = new MMDSceneSource(data, options, models, motions)
	          Promise.reject(error)
	          Promise.resolve(source)
	        })
	      */

	      return promise;
	    }
	  }, {
	    key: 'sceneSource',
	    value: function sceneSource() {}
	  }, {
	    key: 'FileType',
	    get: function get() {
	      return _MMDFileType;
	    }
	  }]);

	  return MMDSceneSource;
	}(_jscenekit.SCNSceneSource);

	exports.default = MMDSceneSource;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MMDNode = __webpack_require__(2);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDReader2 = __webpack_require__(6);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _constants = __webpack_require__(15);

	var _jscenekit = __webpack_require__(3);

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
	};

	/**
	 *
	 * @access public
	 * @extends {MMDReader}
	 */

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

	      console.log('pos: ' + this.pos + ', length: ' + this.length);
	      if (this.pos >= this.length) {
	        return this._workingAnimationGroup;
	      }

	      this._readShadow();

	      if (this.pos >= this.length) {
	        return this._workingAnimationGroup;
	      }

	      this._readVisbilityAndIK();

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
	        console.log('boneName: ' + boneName);
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
	        console.log('frameNo: ' + frameNo);

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
	        console.log('pos: ' + posX + ', ' + posY + ', ' + posZ);

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

	        console.log('faceName: ' + name);

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

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	/*global exports*/
	exports.MMD_CAMERA_NODE_NAME = 'MMD_CAMERA_NODE';
	exports.MMD_CAMERA_ROTX_NODE_NAME = 'MMD_CAMERA_ROTX_NODE';
	exports.MMD_CAMERA_ROTY_NODE_NAME = 'MMD_CAMERA_ROTY_NODE';
	exports.MMD_CAMERA_ROTZ_NODE_NAME = 'MMD_CAMERA_ROTZ_NODE';

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 17 */
/***/ function(module, exports) {

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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BinaryRequest = undefined;

	var _AjaxRequest2 = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * BinaryRequest class
	 * @access public
	 */
	var BinaryRequest = exports.BinaryRequest = function (_AjaxRequest) {
	  _inherits(BinaryRequest, _AjaxRequest);

	  /**
	   * constructor
	   * @access public
	   * @constructor
	   */
	  function BinaryRequest() {
	    _classCallCheck(this, BinaryRequest);

	    var _this = _possibleConstructorReturn(this, (BinaryRequest.__proto__ || Object.getPrototypeOf(BinaryRequest)).call(this));

	    _this.defaultOptions.mimeType = 'text/plain; charset=x-user-defined';
	    return _this;
	  }

	  return BinaryRequest;
	}(_AjaxRequest2.AjaxRequest);

	exports.default = new BinaryRequest();

/***/ }
/******/ ]);