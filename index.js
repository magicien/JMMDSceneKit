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

	var _MMDIKController = __webpack_require__(2);

	var _MMDIKController2 = _interopRequireDefault(_MMDIKController);

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDPMDReader = __webpack_require__(5);

	var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

	var _MMDPMXReader = __webpack_require__(12);

	var _MMDPMXReader2 = _interopRequireDefault(_MMDPMXReader);

	var _MMDProgram = __webpack_require__(6);

	var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

	var _MMDReader = __webpack_require__(7);

	var _MMDReader2 = _interopRequireDefault(_MMDReader);

	var _MMDSceneSource = __webpack_require__(13);

	var _MMDSceneSource2 = _interopRequireDefault(_MMDSceneSource);

	var _MMDVMDReader = __webpack_require__(14);

	var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

	var _MMDXReader = __webpack_require__(16);

	var _MMDXReader2 = _interopRequireDefault(_MMDXReader);

	var _BinaryParser = __webpack_require__(21);

	var _BinaryParser2 = _interopRequireDefault(_BinaryParser);

	var _ecl = __webpack_require__(10);

	var _ecl2 = _interopRequireDefault(_ecl);

	var _AjaxRequest = __webpack_require__(22);

	var _AjaxRequest2 = _interopRequireDefault(_AjaxRequest);

	var _BinaryReader = __webpack_require__(8);

	var _BinaryReader2 = _interopRequireDefault(_BinaryReader);

	var _BinaryRequest = __webpack_require__(23);

	var _BinaryRequest2 = _interopRequireDefault(_BinaryRequest);

	var _Buffer = __webpack_require__(9);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _File = __webpack_require__(17);

	var _File2 = _interopRequireDefault(_File);

	var _FileReader = __webpack_require__(18);

	var _FileReader2 = _interopRequireDefault(_FileReader);

	var _TextReader = __webpack_require__(11);

	var _TextReader2 = _interopRequireDefault(_TextReader);

	var _TextRequest = __webpack_require__(24);

	var _TextRequest2 = _interopRequireDefault(_TextRequest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*global exports*/
	exports.MMDIKConstraint = _MMDIKConstraint2.default;
	exports.MMDIKController = _MMDIKController2.default;
	exports.MMDNode = _MMDNode2.default;
	exports.MMDPMDReader = _MMDPMDReader2.default;
	exports.MMDPMXReader = _MMDPMXReader2.default;
	exports.MMDProgram = _MMDProgram2.default;
	exports.MMDReader = _MMDReader2.default;
	exports.MMDSceneSource = _MMDSceneSource2.default;
	exports.MMDVMDReader = _MMDVMDReader2.default;
	exports.MMDXReader = _MMDXReader2.default;
	exports.BinaryParser = _BinaryParser2.default;
	exports.ecl = _ecl2.default;
	exports.AjaxRequest = _AjaxRequest2.default;
	exports.BinaryReader = _BinaryReader2.default;
	exports.BinaryRequest = _BinaryRequest2.default;
	exports.Buffer = _Buffer2.default;
	exports.File = _File2.default;
	exports.FileReader = _FileReader2.default;
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

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	__webpack_require__(4);

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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jscenekit = __webpack_require__(4);

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
	                  newAnim.keyPath = '//';
	                }
	              }
	            } else if (bone !== null) {
	              if (newAnim.keyPath.endsWith('.translation.x')) {
	                for (var _i = 0; _i < newAnim.values.length; _i++) {
	                  var origValue = newAnim.values[_i];
	                  var newValue = origValue + bone.position.x;
	                  newAnim.values[_i] = newValue;

	                  console.log('convert ' + newAnim.keyPath + ': ' + origValue + ' => ' + newValue);
	                }
	              } else if (newAnim.keyPath.endsWith('.translation.y')) {
	                for (var _i2 = 0; _i2 < newAnim.values.length; _i2++) {
	                  var _origValue = newAnim.values[_i2];
	                  var _newValue = _origValue + bone.position.y;
	                  newAnim.values[_i2] = _newValue;

	                  console.log('convert ' + newAnim.keyPath + ': ' + _origValue + ' => ' + _newValue);
	                }
	              } else if (newAnim.keyPath.endsWith('.translation.z')) {
	                for (var _i3 = 0; _i3 < newAnim.values.length; _i3++) {
	                  var _origValue2 = newAnim.values[_i3];
	                  var _newValue2 = _origValue2 + bone.position.z;
	                  newAnim.values[_i3] = _newValue2;

	                  console.log('convert ' + newAnim.keyPath + ': ' + _origValue2 + ' => ' + _newValue2);
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
	          this.presentation.rotation = rot;
	        } else {
	          var quat = this._rotationToQuat(rot);
	          //console.log(`${this.name} quat ${quat.float32Array()}`)
	          var orgQuat = this._rotationToQuat(this.presentation.rotation);
	          //console.log(`${this.name} orgQuat ${orgQuat.float32Array()}`)
	          var newQuat = this.slerp(orgQuat, quat, this.rotateEffectRate);
	          var newRot = this._quatToRotation(newQuat);
	          // FIXME: don't use presentation
	          this.presentaion.rotation = newRot;
	          //console.log(`${this.name} newQuat.quatToRotation ${this.rotation.float32Array()}`)
	        }
	      }
	      if (this.translateEffector !== null) {
	        var pos = this.translateEffector.position;
	        if (this.translateEffectRate === 1.0) {
	          // FIXME: don't use presentation node
	          this.presentation.position = pos;
	        } else {
	          // FIXME: don't use presentation node
	          this.presentation.position = pos.mul(this.translateEffectRate);
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("jscenekit");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDProgram = __webpack_require__(6);

	var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

	var _MMDReader2 = __webpack_require__(7);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _MMDIKConstraint = __webpack_require__(1);

	var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

	var _jscenekit = __webpack_require__(4);

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
	        if (textureFile.indexOf('*') >= 0) {
	          textureFile = textureFile.split('*')[0];
	        }

	        if (textureFile !== '') {
	          _this2.loadTexture(textureFile).then(function (texture) {
	            material.diffuse.contents = texture;
	            material.diffuse.wrapS = _jscenekit.SCNWrapMode.repeat;
	            material.diffuse.wrapT = _jscenekit.SCNWrapMode.repeat;
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jscenekit = __webpack_require__(4);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _BinaryReader = __webpack_require__(8);

	var _BinaryReader2 = _interopRequireDefault(_BinaryReader);

	var _TextReader = __webpack_require__(11);

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
	    key: 'loadTexture',
	    value: function loadTexture(filePath) {
	      var _this = this;

	      var promise = new Promise(function (resolve, reject) {
	        var fileName = _this.directoryPath + filePath;
	        var image = new Image();
	        image.onload = function () {
	          resolve(image);
	        };
	        image.src = fileName;
	      });
	      return promise;
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Buffer = __webpack_require__(9);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _ecl = __webpack_require__(10);

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
	    this._eof = true;

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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Buffer = __webpack_require__(9);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _ecl = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _integerPattern = new RegExp(/^(-|\+)?\d+;?/);
	var _floatPattern = new RegExp(/^(-|\+)?(\d)*\.(\d)*;?/);
	var _wordPattern = new RegExp(/^\w+/);

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

	    /**
	     * @access private
	     * @type {number}
	     */
	    this._pos = 0;

	    this._partialText = '';
	    this._partialOffset = 0;
	    this._partialStep = 200;
	    this._partialMinLength = 100;

	    /**
	     * @access private
	     * @type {boolean}
	     */
	    this._eof = true;

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
	    //this.bigEndian = bigEndian

	    /**
	     *
	     * @access public
	     * @type {string}
	     */
	    this.encoding = encoding;

	    // prepare buffered text
	    this._addPartialText();
	  }

	  /**
	   * @access public
	   * @param {number} length - length of data to skip
	   * @param {boolean} noAssert -
	   * @returns {void}
	   */


	  _createClass(TextReader, [{
	    key: 'skip',
	    value: function skip(length) {
	      var noAssert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      this._moveIndex(length);
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

	      var str = this._partialText.substring(0, length);

	      this._moveIndex(str.length);
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
	      var str = this._getString(_integerPattern);
	      var val = parseInt(str[0], 10);
	      return val;
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
	      var str = this._getString(_floatPattern);
	      var val = parseFloat(str[0]);
	      return val;
	    }

	    /**
	     *
	     * @access public
	     * @returns {number} -
	     */

	  }, {
	    key: 'readDouble',
	    value: function readDouble() {
	      return this.readFloat();
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
	  }, {
	    key: 'readWord',
	    value: function readWord() {
	      var str = this._getString(_wordPattern);
	      return str !== null ? str[0] : null;
	    }
	  }, {
	    key: 'readPattern',
	    value: function readPattern(pattern) {
	      return this._getString(pattern);
	    }

	    /**
	     *
	     * @access private
	     * @returns {void}
	     */

	  }, {
	    key: '_check',
	    value: function _check() {}

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

	    /**
	     *
	     * @access private
	     * @param {number} len -
	     * @returns {void}
	     */

	  }, {
	    key: '_moveIndex',
	    value: function _moveIndex(len) {
	      this._partialText = this._partialText.substring(len);
	      if (this._partialText.length < this._partialMinLength) {
	        this._addPartialText();
	      }
	    }
	  }, {
	    key: '_skipSpace',
	    value: function _skipSpace() {
	      var i = 0;
	      var code = this._partialText.charCodeAt(i);

	      //  9: Horizontal Tab
	      // 10: Line Feed
	      // 11: Vertical Tab
	      // 12: New Page
	      // 13: Carriage Return
	      // 32: Space
	      while (code === 32 || 9 <= code && code <= 13) {
	        i++;
	        code = this._partialText.charCodeAt(i);

	        if (i >= this._partialText.length) {
	          this._addPartialText();
	        }
	      }
	      if (i > 0) {
	        this._moveIndex(i);
	      }
	    }
	  }, {
	    key: '_addPartialText',
	    value: function _addPartialText() {
	      if (this._partialOffset >= this.buffer.length) {
	        return;
	      }

	      var newOffset = this._partialOffset + this._partialStep;
	      if (newOffset > this.buffer.length) {
	        newOffset = this.buffer.length;
	      }

	      if (_Buffer2.default.isEncoding(this.encoding)) {
	        this._partialText += this.buffer.toString(this.encoding, this._partialOffset, newOffset);
	      } else {
	        var data = this.buffer.toString('binary', this._partialOffset, newOffset);
	        this._partialText += this._convert(data, this.encoding);
	      }
	      this._partialOffset = newOffset;
	    }
	  }, {
	    key: '_getString',
	    value: function _getString(pattern) {
	      this._skipSpace();

	      var str = this._partialText.match(pattern);
	      if (str === null) {
	        return null;
	      }

	      this._moveIndex(str[0].length);

	      return str;
	    }
	  }]);

	  return TextReader;
	}();

	exports.default = TextReader;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDProgram = __webpack_require__(6);

	var _MMDProgram2 = _interopRequireDefault(_MMDProgram);

	var _MMDReader2 = __webpack_require__(7);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _MMDIKConstraint = __webpack_require__(1);

	var _MMDIKConstraint2 = _interopRequireDefault(_MMDIKConstraint);

	var _jscenekit = __webpack_require__(4);

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
	    _this._textureArray = [];

	    // material data
	    _this._materialCount = 0;
	    _this._materialArray = [];
	    _this._materialShapeArray = [];
	    _this._materialIndexCountArray = [];
	    _this._separatedIndexArray = [];

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
	    return _this;
	  }

	  _createClass(MMDPMXReader, [{
	    key: '_loadPMXFile',


	    /**
	     * @access private
	     * @returns {MMDNode} -
	     */
	    value: function _loadPMXFile() {
	      this._workingNode = new _MMDNode2.default();

	      // read contents of file
	      this.readPMXHeader();
	      if (this.pmxMagic !== 'PMX ') {
	        throw new Error('PMX file magic error: ' + this.pmxMagic);
	      }

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
	      this._readConstraint();

	      if (this._version > 2.0) {
	        this._readSoftBody();
	      }

	      return this._workingNode;
	    }
	  }, {
	    key: '_readPascalString',
	    value: function _readPascalString() {
	      var strlen = this.readUnsignedInt();
	      return this.readString(strlen, this._encoding);
	    }
	  }, {
	    key: '_readPMXHeader',
	    value: function _readPMXHeader() {
	      this._pmxMagic = this.readString(4);
	      this._version = this.readFloat();

	      var numData = this.readUnsignedByte();

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
	    }
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
	  }, {
	    key: '_readIndex',
	    value: function _readIndex() {
	      var indexCount = this.readUnsignedInt();
	      this._indexCount = indexCount;

	      for (var i = 0; i < indexCount; i++) {
	        this._indexArray.push(this.readInteger(this._indexSize));
	      }
	    }
	  }, {
	    key: '_readTexture',
	    value: function _readTexture() {
	      var textureCount = this._readUnsignedInt();
	      this._textureCount = textureCount;

	      for (var i = 0; i < textureCount; i++) {
	        var textureFile = this._readPascalString();
	        var fileName = this.directoryPath + textureFile;
	        var image = new Image();
	        image.src = fileName;
	        this._textureArray.push(image);
	      }
	    }
	  }, {
	    key: '_readMaterial',
	    value: function _readMaterial() {
	      var materialCount = this.readUnsignedInt();
	      this._materialCount = materialCount;

	      var indexPos = 0;

	      for (var i = 0; i < materialCount; i++) {
	        var material = new _jscenekit.SCNMaterial();
	        material.name = this._readPascalString();

	        var englishName = this._readPascalString();

	        material.diffuse.contents = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
	        material.specular.contents = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
	        material.shininess = this.readFloat();
	        material.ambient.contents = new _jscenekit.SKColor(0, 0, 0, 1);
	        material.emission.contents = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);

	        var bitFlag = this.readUnsignedByte();
	        var edgeColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());

	        var noCulling = (bitFlag && 0x01) !== 0;
	        var floorShadow = (bitFlag && 0x02) !== 0;
	        var shadowMap = (bitFlag && 0x04) !== 0;
	        var selfShadow = (bitFlag && 0x08) !== 0;
	        var drawEdge = (bitFlag && 0x10) !== 0;
	        var vertexColor = (bitFlag && 0x20) !== 0;
	        var drawPoint = (bitFlag && 0x40) !== 0;
	        var drawLine = (bitFlag && 0x80) !== 0;

	        var edgeSize = this.readFloat();
	        var textureNo = this.readInteger(this._textureIndexSize);
	        var sphereTextureNo = this.readInteger(this._textureIndexSize);
	        var sphereMode = this.readUnsignedByte();
	        var toonFlag = this.readUnsignedByte();
	        var toonTextureNo = 0;

	        if (textureNo < this._textureArray.length) {
	          var texture = this._textureArray[textureNo];
	          //material.diffuse.contents = this._createTexture(texture, material.diffuse.contents)
	          //material.emission.contents = this._createTexture(texture, material.emission.contents)
	          material.multiply.contents = texture;
	        }

	        if (toonFlag === 0) {
	          toonTextureNo = this.readInteger(this._textureIndexSize);
	        } else if (toonFlag === 1) {
	          toonTextureNo = this.readUnsignedByte();
	        } else {
	          throw new Error('unknown toon flag: ' + toonFlag);
	        }

	        if (noCulling) {
	          material.isDoubleSided = true;
	        } else {
	          material.isDoubleSided = false;
	        }

	        // FIXME: use floorShadow, shadowMap property
	        // FIXME: use drawEdge property
	        // FIXME: use vertexColor

	        var shape = _jscenekit.SCNGeometryPrimitiveType.triangles;
	        if (drawPoint) {
	          shape = _jscenekit.SCNGeometryPrimitiveType.point;
	        } else if (drawLine) {
	          shape = _jscenekit.SCNGeometryPrimitiveType.line;
	        }
	        this._materialShapeArray.push(shape);

	        var text = this._readPascalString();
	        var materialIndexCount = this.readUnsignedInt();

	        // create index data
	        var orgArray = this._indexArray.slice(indexPos, indexPos + materialIndexCount);
	        var newArray = [];
	        indexPos += materialIndexCount;

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
	              newArray.append(_index);
	              newArray.append(_index2);
	              newIndexCount += 1;
	            } else {
	              newArray.append(_index);
	              newArray.append(_index2);

	              newArray.append(_index2);
	              newArray.append(_index3);

	              newArray.append(_index3);
	              newArray.append(_index);

	              newIndexCount += 3;
	            }
	            arrayPos += 3;
	          }
	        } else if (shape === _jscenekit.SCNGeometryPrimitiveType.triangles) {
	          while (arrayPos < materialIndexCount) {
	            var _index4 = orgArray[arrayPos + 0];
	            var _index5 = orgArray[arrayPos + 1];
	            var _index6 = orgArray[arrayPos + 2];

	            newArray.append(_index4);
	            newArray.append(_index6);
	            newArray.append(_index5);

	            newIndexCount += 1;
	            arrayPos += 3;
	          }
	        }

	        this._materialIndexCountArray.push(newIndexCount);
	        this._materialArray.push(material);
	        this._separatedIndexArray.push(newArray);
	      }
	    }
	  }, {
	    key: '_readBone',
	    value: function _readBone() {
	      var bonePositionArray = [];
	      var parentNoArray = [];

	      var boneCount = this.readUnsignedInt();
	      this._boneCount = boneCount;
	      this._rootBone.position = new _jscenekit.SCNVector3(0, 0, 0);
	      this._rootBone.name = 'rootBone';

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
	        var z = this.readFloat();

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

	        console.log(_i + ': ' + _boneNode.name);
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
	  }, {
	    key: '_readVertexMorph',
	    value: function _readVertexMorph(count) {
	      var faceVertex = [];

	      for (var i = 0; i < count; i++) {
	        var index = this.readInteger(this._indexSize);
	        var vertexIndex = index * 3;

	        var x = this.readFloat();
	        var y = this.readFloat();
	        var z = -this.readFloat();

	        faceVertex[vertexIndex + 0] = x;
	        faceVertex[vertexIndex + 1] = y;
	        faceVertex[vertexIndex + 2] = z;
	      }

	      this._faceVertexArray.push(faceVertex);
	    }
	  }, {
	    key: '_readUVMorph',
	    value: function _readUVMorph(count, textureNo) {
	      for (var i = 0; i < count; i++) {
	        var index = this.readInteger(this._indexSize);
	        var x = this.readFloat();
	        var y = this.readFloat();
	        var z = this.readFloat();
	        var w = this.readFloat();
	      }
	    }
	  }, {
	    key: '_readBoneMorph',
	    value: function _readBoneMorph(count) {
	      for (var i = 0; i < count; i++) {
	        var index = this.readInteger(this._boneIndexSize);
	        var posX = this.readFloat();
	        var posY = this.readFloat();
	        var posZ = -this.readFloat();

	        var quatX = this.readFloat();
	        var quatY = this.readFloat();
	        var quatZ = this.readFloat();
	        var quatW = this.readFloat();
	      }
	    }
	  }, {
	    key: '_readMaterialMorph',
	    value: function _readMaterialMorph(count) {
	      for (var i = 0; i < count; i++) {
	        var index = this.readInteger(this._materialIndexSize);
	        var addColor = this.readUnsignedByte();
	        var diffuseColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
	        var specularColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
	        var shininess = this.readFloat();
	        var ambientColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
	        var edgeColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), 1.0);
	        var edgeSize = this.readFloat();
	        var textureColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
	        var sphereColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
	        var toonColor = new _jscenekit.SKColor(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat());
	      }
	    }
	  }, {
	    key: '_readGroupMorph',
	    value: function _readGroupMorph(count) {
	      for (var i = 0; i < count; i++) {
	        var morphIndex = this.readInteger(this._morphIndexSize);
	        var rate = this.readFloat();
	      }
	    }
	  }, {
	    key: '_readFlipMorph',
	    value: function _readFlipMorph(count) {
	      for (var i = 0; i < count; i++) {
	        var morphIndex = this.readInteger(this._morphIndexSize);
	        var rate = this.readFloat();
	      }
	    }
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
	        morpher.targets.push(faceGeometry);
	      }
	      var geometryNode = this._workingNode.childNodeWithNameRecursively('Geometry', true);
	      geometryNode.morpher = morpher;
	      this._workingNode.geometryMorpher = morpher;
	    }
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
	      true, // usesFloatComponents
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

	      var program = new _MMDProgram2.default();
	      this._materialArray.forEach(function (material) {
	        material.program = program;
	      });
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

	      this._workingNode.name = 'rootNode';
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
	      this._workingNode.materialArray = this._mateiralArray;
	      this._workingNode.materialIndexCountArray = this._materialIndexCountArray;
	      this._workingNode.rootBone = this._rootBone;
	    }
	  }, {
	    key: '_readPhysicsBody',
	    value: function _readPhysicsBody() {
	      var _this2 = this;

	      var bodyCount = this.readUnsignedInt();

	      for (var i = 0; i < bodyCount; i++) {
	        var name = this._readPascalString();
	        var englishName = this._readPascalString();
	        var boneIndex = this.readInteger(this._boneIndexSize);

	        var groupIndex = this.readUnsignedByte();
	        var groupTarget = this.readUnsignedByte();
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
	        bodyType = _jscenekit.SCNPhysicsBodyType.kinematic;

	        var shape = null;
	        if (shapeType === 0) {
	          shape = new _jscenekit.SCNSphere(dx);
	        } else if (shapeType === 1) {
	          shape = new _jscenekit.SCNBox(dx, dy, dz, 0.0);
	        } else if (shapeType === 2) {
	          shape = new _jscenekit.SCNCapsule(dx, dy);
	        } else {
	          throw new Error('unknown physics body shape: ' + shape);
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
	        var physicsShape = new _jscenekit.SCNPhysicsShape(shape, null);
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
	        _this2._physicsBodyArray.push(bone.physicsBody);
	      });
	    }
	  }, {
	    key: '_readConstraint',
	    value: function _readConstraint() {
	      var constraintCount = this.readUnsignedInt();
	      this._workingNode.joints = [];
	      for (var i = 0; i < constraintCount; i++) {
	        var name = this._readPascalString();
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
	  }, {
	    key: '_readSoftBody',
	    value: function _readSoftBody() {
	      var softBodyCount = this.readUnsignedInt();

	      for (var i = 0; i < softBodyCount; i++) {
	        var name = this._readPascalString();
	        var englishName = this._readPascalString();

	        var shape = this.readUnsignedByte();
	        if (shape === 0) {
	          // TriMesh
	        } else if (shape === 1) {
	          // Rope
	        } else {
	          throw new Error('unknown softbody type: ' + shape);
	        }

	        var index = this.readInteger(this._materialIndexSize);
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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jscenekit = __webpack_require__(4);

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDPMDReader = __webpack_require__(5);

	var _MMDPMDReader2 = _interopRequireDefault(_MMDPMDReader);

	var _MMDVMDReader = __webpack_require__(14);

	var _MMDVMDReader2 = _interopRequireDefault(_MMDVMDReader);

	var _MMDXReader = __webpack_require__(16);

	var _MMDXReader2 = _interopRequireDefault(_MMDXReader);

	var _File2 = __webpack_require__(17);

	var _File3 = _interopRequireDefault(_File2);

	var _FileReader2 = __webpack_require__(18);

	var _FileReader3 = _interopRequireDefault(_FileReader2);

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
	//import fs from 'fs'

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

	    var _this = _possibleConstructorReturn(this, (MMDSceneSource.__proto__ || Object.getPrototypeOf(MMDSceneSource)).call(this));

	    _this._fileType = _MMDFileType.unknown;
	    _this._directoryPath = directoryPath;
	    _this._workingScene = null;
	    _this._workingNode = null;
	    _this._workingAnimationGroup = null;

	    if (typeof data === 'undefined') {
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
	      } else if (this._fileType === _MMDFileType.x) {
	        var xNode = _MMDXReader2.default.getNode(data, this._directoryPath);
	        if (xNode) {
	          this._workingNode = xNode;
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
	            this.workingScene.rootNode.addChildNode(node)
	          })
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
	      //console.log('getMotion: workingAnimationGroup.animations.length: ' + this._workingAnimationGroup.animations.length)
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
	        var file = new _File3.default([], path);
	        var reader = new _FileReader3.default();
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

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDReader2 = __webpack_require__(7);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _constants = __webpack_require__(15);

	var _jscenekit = __webpack_require__(4);

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

	      console.log('_createAnimations');
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

	        console.log('animations.push ' + key);
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MMDNode = __webpack_require__(3);

	var _MMDNode2 = _interopRequireDefault(_MMDNode);

	var _MMDReader2 = __webpack_require__(7);

	var _MMDReader3 = _interopRequireDefault(_MMDReader2);

	var _jscenekit = __webpack_require__(4);

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
	          /*
	          const texture = this._loadTexture(textureFilePath)
	          if(texture !== null){
	            // FIXME: use mmd shader
	            material.emission.contents = texture
	            material.emission.wrapS = SCNWrapMode.repeat
	            material.emission.wrapT = SCNWrapMode.repeat
	            material.diffuse.contents = texture
	            material.diffuse.wrapS = SCNWrapMode.repeat
	            material.diffuse.wrapT = SCNWrapMode.repeat
	             // DEBUG
	            //material.diffuse.contents = new SKColor(0, 0.5, 0, 1.0)
	          }
	          */
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

	    /*
	      _loadTexture(path) {
	        const promise = new Promise((resolve, reject) => {
	          console.error('TODO: implement _loadTexture')
	          const fileName = this.directoryPath + path
	          const image = new Image()
	          image.onload = () => {
	            resolve(image)
	          }
	          image.src = fileName
	        })
	        return promise
	      }
	    */

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

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	/*global File*/

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _File = File;
	if (!_File) {
	  var _File2 = function () {
	    /**
	     * @access public
	     * @constructor
	     * @param {array} fileBits -
	     * @param {string} fileName -
	     * @param {Object} options -
	     */
	    function _File2(fileBits, fileName, options) {
	      _classCallCheck(this, _File2);

	      this._lastModified = null;
	      this._lastModifiedDate = null;
	      this._name = fileName;
	      this._size = null;
	      this._webkitRelativePath = null;
	      this._type = null;
	    }

	    _createClass(_File2, [{
	      key: 'lastModified',
	      get: function get() {
	        return this._lastModified;
	      }
	    }, {
	      key: 'lastModifiedDate',
	      get: function get() {
	        return this._lastModifiedDate;
	      }
	    }, {
	      key: 'name',
	      get: function get() {
	        return this._name;
	      }
	    }, {
	      key: 'size',
	      get: function get() {
	        return this._size;
	      }
	    }, {
	      key: 'webkitRelativePath',
	      get: function get() {
	        return this._webkitRelativePath;
	      }
	    }, {
	      key: 'type',
	      get: function get() {
	        return this._type;
	      }
	    }]);

	    return _File2;
	  }();

	  _File = _File2;
	}

	exports.default = _File;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _File2 = __webpack_require__(17);

	var _File3 = _interopRequireDefault(_File2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*global FileReader, require*/
	var _FileReader = FileReader;
	if (typeof process !== 'undefined') {
	  var fs = __webpack_require__(20);
	  var EMPTY = 0;
	  var LOADING = 1;
	  var DONE = 2;

	  var _FileReader2 = function () {
	    /**
	     * @access public
	     * @constructor
	     */
	    function _FileReader2() {
	      _classCallCheck(this, _FileReader2);

	      this.onabort = null;
	      this.onerror = null;
	      this.onload = null;
	      this.onloadstart = null;

	      /**
	       * @type {function}
	       */
	      this.onloadend = null;

	      this.onprogress = null;

	      this._error = null;
	      this._readyState = EMPTY;
	      this._result = null;
	    }

	    _createClass(_FileReader2, [{
	      key: 'abort',
	      value: function abort() {}

	      /**
	       * @access public
	       * @param {Blob|File} blob -
	       * @returns {void}
	       */

	    }, {
	      key: 'readAsArrayBuffer',
	      value: function readAsArrayBuffer(blob) {
	        this._read(blob, 'ArrayBuffer');
	      }

	      /**
	       * @access public
	       * @param {Blob|File} blob -
	       * @returns {void}
	       */

	    }, {
	      key: 'readAsBinaryString',
	      value: function readAsBinaryString(blob) {
	        this._read(blob, 'BinaryString');
	      }

	      /**
	       * @access public
	       * @param {Blob|File} blob -
	       * @param {string} [encoding = 'utf8'] -
	       * @returns {void}
	       */

	    }, {
	      key: 'readAsText',
	      value: function readAsText(blob) {
	        var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf8';

	        this._read(blob, 'Text', encoding);
	      }

	      /**
	       * @access public
	       * @param {Blob|File} blob -
	       * @returns {void}
	       */

	    }, {
	      key: 'readAsDataURL',
	      value: function readAsDataURL(blob) {
	        this._read(blob, 'DataURL');
	      }
	    }, {
	      key: '_read',
	      value: function _read(blob, type) {
	        var _this = this;

	        var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	        if (this._readyState === LOADING) {
	          throw new Error('InvalidStateError');
	        }
	        this._readyState = LOADING;

	        if (blob instanceof _File3.default) {
	          fs.readFile(blob.name, encoding, function (err, data) {
	            if (err) {
	              _this._error = err;
	              if (_this.onerror !== null) {
	                _this.onerror();
	              }
	            }

	            _this._readyState = DONE;

	            switch (type) {
	              case 'ArrayBuffer':
	                _this._result = data;
	                break;
	              case 'BinaryString':
	                _this._result = data;
	                break;
	              case 'Text':
	                _this._result = data;
	                break;
	              case 'DataURL':
	                _this._result = data;
	                break;
	              default:
	                throw new Error('unknown return type');
	            }

	            if (_this._readyState !== LOADING) {
	              if (_this.onloadend !== null) {
	                _this.onloadend();
	              }
	            }
	          });
	        }
	      }
	    }, {
	      key: 'error',
	      get: function get() {
	        return this._error;
	      }
	    }, {
	      key: 'readyState',
	      get: function get() {
	        return this._readyState;
	      }

	      /**
	       * @type {Blob|string}
	       */

	    }, {
	      key: 'result',
	      get: function get() {
	        return this._result;
	      }
	    }]);

	    return _FileReader2;
	  }();

	  _FileReader = _FileReader2;
	}

	exports.default = _FileReader;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ },
/* 19 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BinaryRequest = undefined;

	var _AjaxRequest2 = __webpack_require__(22);

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

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextRequest = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AjaxRequest2 = __webpack_require__(22);

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

/***/ }
/******/ ]);