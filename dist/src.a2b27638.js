// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/webComponents/baseWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var BaseComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(BaseComponent, _HTMLElement);

  var _super = _createSuper(BaseComponent);

  // Contructor to define common properties to Base Custom Component
  function BaseComponent() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BaseComponent);

    _this = _super.call(this);
    _this._value = "";
    _this.shadowEl = _this.attachShadow({
      mode: "open"
    });
    _this.options = options;

    if (options.props) {
      var propDescriptors = {};

      var _iterator = _createForOfIteratorHelper(options.props),
          _step;

      try {
        var _loop = function _loop() {
          var prop = _step.value;
          propDescriptors[prop] = {
            get: function get() {
              var attrValue = this.getAttribute(prop);
              return this.getJSONParsedValue(attrValue);
            },
            set: function set(value) {
              if (prop === "value") {
                this.dispatchEvent(new CustomEvent("change", {
                  detail: value
                }));
              } else {
                this.dispatchEvent(new CustomEvent(prop === "value" ? "changed" : "".concat(prop, "Changed"), {
                  detail: value
                }));
              }

              if (value && _typeof(value) === "object") {
                this.setAttribute(prop, JSON.stringify(value));
              } else {
                this.setAttribute(prop, value);
              }
            }
          };
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      Object.defineProperties(_assertThisInitialized(_this), propDescriptors);
    }

    return _this;
  }

  _createClass(BaseComponent, [{
    key: "getJSONParsedValue",
    value: function getJSONParsedValue(value) {
      var parsedValue;

      try {
        parsedValue = JSON.parse(value);
      } catch (e) {
        parsedValue = value;
      }

      return parsedValue;
    } // Define base compoent Connected Callback

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var inputFieldHolder = this.shadowEl.querySelector(".input-field");

      if (inputFieldHolder) {
        var tooltip = this.getAttribute("tooltip");
        console.log(tooltip);
        !!tooltip && inputFieldHolder.setAttribute("data-tip", tooltip);
        inputFieldHolder.insertAdjacentHTML("afterbegin", "<label><p>".concat(this.getAttribute("labelText"), "</p></label>"));
      }
    }
  }]);

  return BaseComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

exports.default = BaseComponent;
},{}],"src/webComponents/titleComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TitleWebComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(TitleWebComponent, _BaseComponent);

  var _super = _createSuper(TitleWebComponent);

  //Contructor to attach shadow DOM to the title element
  function TitleWebComponent() {
    var _this;

    _classCallCheck(this, TitleWebComponent);

    _this = _super.call(this, {
      props: []
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t:host[hidden] {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t\n\t\t</style>\n\t\t<div class=\"title-field\" >\n\t\t</div>\n        ";
    _this.titleEl = _this.shadowRoot.querySelector(".title-field");
    return _this;
  } // Define connected callback


  _createClass(TitleWebComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.titleEl) {
        var placeholder = this.getAttribute("placeholder");
        !!placeholder && this.titleEl.insertAdjacentHTML("afterbegin", "<h3>".concat(this.getAttribute("placeholder"), "</h3>"));
      }
    }
  }]);

  return TitleWebComponent;
}(_baseWebComponent.default);

exports.default = TitleWebComponent;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js"}],"src/webComponents/imageComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TitleWebComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(TitleWebComponent, _BaseComponent);

  var _super = _createSuper(TitleWebComponent);

  //Contructor to attach shadow DOM to the image element
  function TitleWebComponent() {
    var _this;

    _classCallCheck(this, TitleWebComponent);

    _this = _super.call(this, {
      props: []
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t:host[hidden] {\n\t\t\t\tdisplay: none;\n            }\n            \n            .image-field > img {\n                width: 100%;\n            }\n\t\t\t\n\t\t</style>\n\t\t<div class=\"image-field\" >\n\t\t</div>\n        ";
    _this.imageEl = _this.shadowRoot.querySelector(".image-field");
    return _this;
  } // Define connected callback


  _createClass(TitleWebComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.imageEl) {
        var imageSrc = this.getAttribute("src");
        !!imageSrc && this.imageEl.insertAdjacentHTML("afterbegin", "<img src=\"".concat(this.getAttribute("src"), "\" />"));
      }
    }
  }]);

  return TitleWebComponent;
}(_baseWebComponent.default);

exports.default = TitleWebComponent;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js"}],"src/helpers/dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNode = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createNode = function createNode(nodeName, _ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? [] : _ref$classes,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? "" : _ref$content,
      _ref$attrs = _ref.attrs,
      attrs = _ref$attrs === void 0 ? {} : _ref$attrs,
      children = _ref.children,
      _ref$events = _ref.events,
      events = _ref$events === void 0 ? {} : _ref$events,
      _ref$props = _ref.props,
      props = _ref$props === void 0 ? {} : _ref$props;
  var el = document.createElement(nodeName);
  classes.forEach(function (c) {
    return el.classList.add(c);
  });

  for (var _i = 0, _Object$entries = Object.entries(attrs); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    el.setAttribute(key, value);
  }

  for (var _i2 = 0, _Object$entries2 = Object.entries(props); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        _key = _Object$entries2$_i[0],
        _value = _Object$entries2$_i[1];

    el[_key] = _value;
  }

  for (var _i3 = 0, _Object$entries3 = Object.entries(events); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        eventName = _Object$entries3$_i[0],
        eventHandler = _Object$entries3$_i[1];

    el.addEventListener(eventName, eventHandler);
  }

  if (content) {
    el.appendChild(document.createTextNode(content));
  }

  if (children) {
    if (Array.isArray(children)) {
      var frag = document.createDocumentFragment();
      children.forEach(function (c) {
        return frag.appendChild(c);
      });
      el.appendChild(frag);
    } else {
      el.appendChild(children);
    }
  }

  return el;
};

exports.createNode = createNode;
},{}],"src/helpers/object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowCompare = exports.shallowCompareObjects = exports.isNonEmptyObject = exports.isObject = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = function isObject(a) {
  return !!a && a.constructor.name === "Object";
};

exports.isObject = isObject;

var isNonEmptyObject = function isNonEmptyObject(a) {
  return isObject(a) && !!Object.keys(a).length;
};

exports.isNonEmptyObject = isNonEmptyObject;

var shallowCompareObjects = function shallowCompareObjects(a, b) {
  if (!!a && !!b && (!isObject(a) || !isObject(b))) {
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
      var key = _aKeys[_i];

      if (!Object.is(a[key], b[key])) {
        return false;
      }
    }

    return true;
  } else {
    return Object.is(a, b);
  }
};

exports.shallowCompareObjects = shallowCompareObjects;

var shallowCompare = function shallowCompare(a, b) {
  if (_typeof(a) !== _typeof(b)) {
    return false;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; i++) {
      if (!Object.is(a, b)) return false;
    }
  }

  return shallowCompareObjects(a, b);
};

exports.shallowCompare = shallowCompare;
},{}],"src/webComponents/inputWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

var _dom = require("../helpers/dom");

var _object = require("../helpers/object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InputElement = /*#__PURE__*/function (_BaseComponent) {
  _inherits(InputElement, _BaseComponent);

  var _super = _createSuper(InputElement);

  //Contructor to attach shadow DOM to the input element
  function InputElement() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? "text" : _ref$type;

    _classCallCheck(this, InputElement);

    _this = _super.call(this, {
      props: InputElement.observedAttributes
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t:host[hidden] {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.input-field {\n\t\t\t\tmargin-top: var(--input-field-margin-top);\n\t\t\t\tmargin-bottom: var(--input-field-margin-bottom);\n\t\t\t}\n\t\t\tlabel > p {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\tinput {\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder: 2px solid #ccc;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\toutline: none;\n\t\t\t\theight: 40px;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 15px 10px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tbox-shadow: none;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\ttransition: box-shadow 0.3s, border-color 0.4s;\n\t\t\t}\n\t\t\tinput.error {\n\t\t\t\tborder-color: red;\n\t\t\t}\n\t\t\tul.errors-list {\n\t\t\t\tlist-style: none;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: red;\n\t\t\t\tpadding-left: 0;\n            }\n            [data-tip] {\n                position:relative;\n            \n            }\n            [data-tip]:before {\n                content:'';\n                display:none;\n                content:'';\n                border-left: 5px solid transparent;\n                border-right: 5px solid transparent;\n                border-bottom: 5px solid #1a1a1a;\t\n                position:absolute;\n                top:30px;\n                left:135px;\n                z-index:8;\n                font-size:0;\n                line-height:0;\n                width:0;\n                height:0;\n            }\n            [data-tip]:after {\n                display:none;\n                content:attr(data-tip);\n                position:absolute;\n                top:35px;\n                left:100px;\n                padding:5px 8px;\n                background:#1a1a1a;\n                color:#fff;\n                z-index:9;\n                font-size: 0.75em;\n                height:18px;\n                line-height:18px;\n                -webkit-border-radius: 3px;\n                -moz-border-radius: 3px;\n                border-radius: 3px;\n                white-space:nowrap;\n                word-wrap:normal;\n            }\n            [data-tip]:hover:before,\n            [data-tip]:hover:after {\n                display:block;\n            }\n\t\t</style>\n\t\t<div class=\"input-field\" >\n\t\t\t<input type=\"".concat(type, "\" />\n\t\t\t<ul class=\"errors-list\">\n\t\t\t</ul>\n\t\t</div>\n\t\t");
    _this.inputEl = _this.shadowRoot.querySelector("input");
    return _this;
  } // Define connected callback


  _createClass(InputElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(InputElement.prototype), "connectedCallback", this).call(this);

      this.inputEl.value = this.value;

      this.inputEventListener = function (e) {
        _this2.value = e.target.value;
      }; // Add on change event listener


      this.inputEl.addEventListener("input", this.inputEventListener);
    } // Define Attribute Change Callback

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      var jsonParsedOldVal = this.getJSONParsedValue(oldValue);
      var jsonParsedNewVal = this.getJSONParsedValue(newValue);

      if (attrName === "value" && oldValue !== newValue) {
        this.value = newValue;

        if (this.inputEl) {
          this.inputEl.value = newValue;
        }
      }

      if (attrName === "validations" && !(0, _object.shallowCompare)(jsonParsedOldVal, jsonParsedNewVal)) {
        if (this.inputEl) {
          if ((0, _object.isNonEmptyObject)(jsonParsedNewVal)) {
            this.inputEl.classList.add("error");
            this.renderErrors(jsonParsedNewVal);
          } else {
            this.inputEl.classList.remove("error");
            this.renderErrors();
          }
        }
      }
    } // Render Validation Errors in the Shadow Root

  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var errorsMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var errorsUl = this.shadowRoot.querySelector(".errors-list");

      if (errorsUl) {
        errorsUl.innerHTML = "";

        if (!errorsMap) {
          return;
        }

        var liFragment = document.createDocumentFragment();

        for (var _i = 0, _Object$keys = Object.keys(errorsMap); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          liFragment.appendChild((0, _dom.createNode)("li", {
            content: errorsMap[key]
          }));
        }

        errorsUl.appendChild(liFragment);
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      _get(_getPrototypeOf(InputElement.prototype), "setAttribute", this).call(this, name, value);

      this.inputEl && this.inputEl.setAttribute(name, value);
    } // Define Disconnect Callback

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.inputEl.removeEventListener("change", this.inputEventListener);
    }
  }], [{
    key: "observedAttributes",
    get: // Define attributes whose changes need to be noticed
    function get() {
      return ["value", "validations"];
    }
  }]);

  return InputElement;
}(_baseWebComponent.default);

exports.default = InputElement;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js","../helpers/dom":"src/helpers/dom.js","../helpers/object":"src/helpers/object.js"}],"src/webComponents/numberWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputWebComponent = _interopRequireDefault(require("./inputWebComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NumberWebComponent = /*#__PURE__*/function (_InputWebComponent) {
  _inherits(NumberWebComponent, _InputWebComponent);

  var _super = _createSuper(NumberWebComponent);

  function NumberWebComponent() {
    _classCallCheck(this, NumberWebComponent);

    return _super.call(this, {
      type: "number"
    });
  }

  return NumberWebComponent;
}(_inputWebComponent.default);

exports.default = NumberWebComponent;
},{"./inputWebComponent":"src/webComponents/inputWebComponent.js"}],"src/webComponents/dropdownWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

var _object = require("../helpers/object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownWebComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(DropdownWebComponent, _BaseComponent);

  var _super = _createSuper(DropdownWebComponent);

  //Contructor to attach shadow DOM to the select element
  function DropdownWebComponent() {
    var _this;

    _classCallCheck(this, DropdownWebComponent);

    _this = _super.call(this, {
      props: ["datasource", "value"]
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t.input-field {\n\t\t\t\tmargin-top: var(--input-field-margin-top);\n\t\t\t\tmargin-bottom: var(--input-field-margin-bottom);\n\t\t\t}\n\t\t\tlabel > p {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\tselect {\n\t\t\t\tbackground: transparent;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 10px 15px;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tborder-radius: 2px;\n                height: 40px;\n                font-size: 14px;\n            }\n            \n            [data-tip] {\n                position:relative;\n            \n            }\n            [data-tip]:before {\n                content:'';\n                display:none;\n                content:'';\n                border-left: 5px solid transparent;\n                border-right: 5px solid transparent;\n                border-bottom: 5px solid #1a1a1a;\t\n                position:absolute;\n                top:30px;\n                left:135px;\n                z-index:8;\n                font-size:0;\n                line-height:0;\n                width:0;\n                height:0;\n            }\n            [data-tip]:after {\n                display:none;\n                content:attr(data-tip);\n                position:absolute;\n                top:35px;\n                left:100px;\n                padding:5px 8px;\n                background:#1a1a1a;\n                color:#fff;\n                z-index:9;\n                font-size: 0.75em;\n                height:18px;\n                line-height:18px;\n                -webkit-border-radius: 3px;\n                -moz-border-radius: 3px;\n                border-radius: 3px;\n                white-space:nowrap;\n                word-wrap:normal;\n            }\n            [data-tip]:hover:before,\n            [data-tip]:hover:after {\n                display:block;\n            }\n\n\t\t</style>\n\t\t<div class=\"input-field\">\n\t\t\t<select>\n\t\t\t</select>\n\t\t</div>\n\t\t\t";
    _this.selectEl = _this.shadowEl.querySelector("select");
    return _this;
  } // Define connected callback


  _createClass(DropdownWebComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownWebComponent.prototype), "connectedCallback", this).call(this);

      this.changeEventListener = function (e) {
        _this2.value = e.target.value;
      };

      this.selectEl.addEventListener("change", this.changeEventListener);
    } // Define Attribute Change Callback

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      var val = this.getJSONParsedValue(newValue);
      var oldVal = this.getJSONParsedValue(oldValue);
      if ((0, _object.shallowCompare)(oldVal, val)) return;

      switch (attrName) {
        case "datasource":
          {
            this.selectEl.innerHTML = val.map(function (optionValue) {
              return "<option value=\"".concat(optionValue, "\">").concat(optionValue, "</option>");
            });
            this.selectEl.value = this.value;
          }
          break;

        case "value":
          this.selectEl.value = val;
      }
    } // Define Disconnect Callback

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.selectEl.removeEventListener("change", this.changeEventListener);
    }
  }], [{
    key: "observedAttributes",
    get: // Define attributes whose changes need to be noticed
    function get() {
      return ["value", "datasource"];
    }
  }]);

  return DropdownWebComponent;
}(_baseWebComponent.default);

exports.default = DropdownWebComponent;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js","../helpers/object":"src/helpers/object.js"}],"src/webComponents/textAreaWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

var _dom = require("../helpers/dom");

var _object = require("../helpers/object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextAreaComponent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(TextAreaComponent, _BaseComponent);

  var _super = _createSuper(TextAreaComponent);

  //Contructor to attach shadow DOM to the textarea element
  function TextAreaComponent() {
    var _this;

    _classCallCheck(this, TextAreaComponent);

    _this = _super.call(this, {
      props: ["value", "validations"]
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t:host[hidden] {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.textarea-field {\n\t\t\t\t\n\t\t\t}\n\t\t\tlabel > p {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\ttextarea {\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder: 2px solid #ccc;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\toutline: none;\n\t\t\t\theight: 100px;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 15px 10px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tbox-shadow: none;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\ttransition: box-shadow 0.3s, border-color 0.4s;\n\t\t\t}\n\t\t\t.input-field .error {\n\t\t\t\tborder-color: red\n\t\t\t}\n\t\t\tul.errors-list {\n\t\t\t\tlist-style: none;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: red;\n\t\t\t\tpadding-left: 0;\n\t\t\t}\n\t\t\t[data-tip] {\n                position:relative;\n            \n            }\n            [data-tip]:before {\n                content:'';\n                display:none;\n                content:'';\n                border-left: 5px solid transparent;\n                border-right: 5px solid transparent;\n                border-bottom: 5px solid #1a1a1a;\t\n                position:absolute;\n                top:30px;\n                left:135px;\n                z-index:8;\n                font-size:0;\n                line-height:0;\n                width:0;\n                height:0;\n            }\n            [data-tip]:after {\n                display:none;\n                content:attr(data-tip);\n                position:absolute;\n                top:35px;\n                left:100px;\n                padding:5px 8px;\n                background:#1a1a1a;\n                color:#fff;\n                z-index:9;\n                font-size: 0.75em;\n                height:18px;\n                line-height:18px;\n                -webkit-border-radius: 3px;\n                -moz-border-radius: 3px;\n                border-radius: 3px;\n                white-space:nowrap;\n                word-wrap:normal;\n            }\n            [data-tip]:hover:before,\n            [data-tip]:hover:after {\n                display:block;\n            }\n\t\t</style>\n\t\t<div class=\"input-field\" >\n\t\t\t<textarea> </textarea >\n\t\t\t<ul class=\"errors-list\">\n\t\t\t</ul>\n\t\t</div>\n\t\t";
    _this.textAreaEl = _this.shadowRoot.querySelector("textarea");
    return _this;
  } // Define connected callback


  _createClass(TextAreaComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(TextAreaComponent.prototype), "connectedCallback", this).call(this);

      this.textAreaEl.value = this.value;

      this.textAreaEventListener = function (e) {
        _this2.value = e.target.value;
      }; // Add on change event listener


      this.textAreaEl.addEventListener("input", this.textAreaEventListener);
    } // Define Attribute Change Callback

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      var jsonParsedOldVal = this.getJSONParsedValue(oldValue);
      var jsonParsedNewVal = this.getJSONParsedValue(newValue);

      if (attrName === "value" && oldValue !== newValue) {
        this.value = newValue;

        if (this.textAreaEl) {
          this.textAreaEl.value = newValue;
        }
      }

      if (attrName === "validations" && !(0, _object.shallowCompare)(jsonParsedOldVal, jsonParsedNewVal)) {
        if (this.textAreaEl) {
          if ((0, _object.isNonEmptyObject)(jsonParsedNewVal)) {
            this.textAreaEl.classList.add("error");
            this.renderErrors(jsonParsedNewVal);
          } else {
            this.textAreaEl.classList.remove("error");
            this.renderErrors();
          }
        }
      }
    } // Render Validation Errors in the Shadow Root

  }, {
    key: "renderErrors",
    value: function renderErrors() {
      var errorsMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var errorsUl = this.shadowRoot.querySelector(".errors-list");

      if (errorsUl) {
        errorsUl.innerHTML = "";

        if (!errorsMap) {
          return;
        }

        var liFragment = document.createDocumentFragment();

        for (var _i = 0, _Object$keys = Object.keys(errorsMap); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          liFragment.appendChild((0, _dom.createNode)("li", {
            content: errorsMap[key]
          }));
        }

        errorsUl.appendChild(liFragment);
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      _get(_getPrototypeOf(TextAreaComponent.prototype), "setAttribute", this).call(this, name, value);

      this.textAreaEl && this.textAreaEl.setAttribute(name, value);
    } // Define Disconnect Callback

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.textAreaEl.removeEventListener("change", this.textAreaEventListener);
    }
  }], [{
    key: "observedAttributes",
    get: // Define attributes whose changes need to be noticed
    function get() {
      return ["value", "validations"];
    }
  }]);

  return TextAreaComponent;
}(_baseWebComponent.default);

exports.default = TextAreaComponent;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js","../helpers/dom":"src/helpers/dom.js","../helpers/object":"src/helpers/object.js"}],"src/webComponents/submitWebComponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseWebComponent = _interopRequireDefault(require("./baseWebComponent"));

var _dom = require("../helpers/dom");

var _object = require("../helpers/object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SubmitElement = /*#__PURE__*/function (_BaseComponent) {
  _inherits(SubmitElement, _BaseComponent);

  var _super = _createSuper(SubmitElement);

  //Contructor to attach shadow DOM to the image element
  function SubmitElement() {
    var _this;

    _classCallCheck(this, SubmitElement);

    _this = _super.call(this, {
      props: SubmitElement.observedAttributes
    });
    _this.shadowEl.innerHTML = "\n\t\t<style>\n\t\t\t:host {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t:host[hidden] {\n\t\t\t\tdisplay: none;\n            }\n            .submit-field{\n                margin-top:10px;\n            }\n            input {\n\t\t\t\tbackground-color: transparent;\n\t\t\t\tborder: 2px solid #ccc;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\toutline: none;\n\t\t\t\theight: 40px;\n\t\t\t\twidth: 200px;\n\t\t\t\tpadding: 5px;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\t\t\tinput.error {\n\t\t\t\tborder-color: red;\n\t\t\t}\n\t\t\tul.errors-list {\n\t\t\t\tlist-style: none;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: red;\n\t\t\t\tpadding-left: 0;\n            }\n\n            ul.success-message {\n                list-style: none;\n\t\t\t\tfont-size: 20px;\n\t\t\t\tcolor: green;\n\t\t\t\tpadding-left: 0;\n            }\n            [data-tip] {\n                position:relative;\n            \n            }\n            [data-tip]:before {\n                content:'';\n                display:none;\n                content:'';\n                border-left: 5px solid transparent;\n                border-right: 5px solid transparent;\n                border-bottom: 5px solid #1a1a1a;\t\n                position:absolute;\n                top:30px;\n                left:135px;\n                z-index:8;\n                font-size:0;\n                line-height:0;\n                width:0;\n                height:0;\n            }\n            [data-tip]:after {\n                display:none;\n                content:attr(data-tip);\n                position:absolute;\n                top:35px;\n                left:100px;\n                padding:5px 8px;\n                background:#1a1a1a;\n                color:#fff;\n                z-index:9;\n                font-size: 0.75em;\n                height:18px;\n                line-height:18px;\n                -webkit-border-radius: 3px;\n                -moz-border-radius: 3px;\n                border-radius: 3px;\n                white-space:nowrap;\n                word-wrap:normal;\n            }\n            [data-tip]:hover:before,\n            [data-tip]:hover:after {\n                display:block;\n            }\n\t\t\t\n\t\t</style>\n        <div class=\"submit-field\" >\n            <input type=\"button\" value=\"Submit\" />\n            <ul class=\"errors-list\">\n            </ul>\n            <ul class=\"success-message\"></ul>\n\t\t</div>\n        ";
    _this.submitBtn = _this.shadowRoot.querySelector(".submit-field");
    _this.errorEl = _this.shadowRoot.querySelector(".error-list");
    _this.successEl = _this.shadowRoot.querySelector(".success-message");
    return _this;
  }

  _createClass(SubmitElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(SubmitElement.prototype), "connectedCallback", this).call(this);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      var jsonParsedOldVal = this.getJSONParsedValue(oldValue);
      var jsonParsedNewVal = this.getJSONParsedValue(newValue);
      var messageUl = this.shadowRoot.querySelector(".submit-field");

      if (attrName === "validations" && !(0, _object.shallowCompare)(jsonParsedOldVal, jsonParsedNewVal)) {
        if (messageUl && jsonParsedNewVal && jsonParsedNewVal.FormError) {
          messageUl.classList.add("error");
          this.renderErrors(jsonParsedNewVal.FormError);
          this.renderSuccess(null);
        } else if (messageUl && jsonParsedNewVal && jsonParsedNewVal.FormSuccess) {
          messageUl.classList.add("success");
          this.renderSuccess(jsonParsedNewVal.FormSuccess);
          this.renderErrors(null);
        } else {
          this.renderErrors(null);
          this.renderSuccess(null);
        }
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      _get(_getPrototypeOf(SubmitElement.prototype), "setAttribute", this).call(this, name, value);

      this.submitBtn && this.submitBtn.setAttribute(name, value);
    }
  }, {
    key: "renderErrors",
    value: function renderErrors(error) {
      var errorsUl = this.shadowRoot.querySelector(".errors-list");

      if (errorsUl) {
        errorsUl.innerHTML = "";

        if (!error) {
          return;
        }

        var liFragment = document.createDocumentFragment();
        liFragment.appendChild((0, _dom.createNode)("li", {
          content: error
        }));
        errorsUl.appendChild(liFragment);
      }
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess(msg) {
      var successUl = this.shadowRoot.querySelector(".success-message");

      if (successUl) {
        successUl.innerHTML = "";

        if (!msg) {
          return;
        }

        var liFragment = document.createDocumentFragment();
        liFragment.appendChild((0, _dom.createNode)("li", {
          content: msg
        }));
        successUl.appendChild(liFragment);
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["validations"];
    }
  }]);

  return SubmitElement;
}(_baseWebComponent.default);

exports.default = SubmitElement;
},{"./baseWebComponent":"src/webComponents/baseWebComponent.js","../helpers/dom":"src/helpers/dom.js","../helpers/object":"src/helpers/object.js"}],"src/webComponents/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementsConfig = void 0;

var _titleComponent = _interopRequireDefault(require("./titleComponent"));

var _imageComponent = _interopRequireDefault(require("./imageComponent"));

var _inputWebComponent = _interopRequireDefault(require("./inputWebComponent"));

var _numberWebComponent = _interopRequireDefault(require("./numberWebComponent"));

var _dropdownWebComponent = _interopRequireDefault(require("./dropdownWebComponent"));

var _textAreaWebComponent = _interopRequireDefault(require("./textAreaWebComponent"));

var _submitWebComponent = _interopRequireDefault(require("./submitWebComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var elementsConfig = {
  "form-title": _titleComponent.default,
  "form-image": _imageComponent.default,
  "form-input": _inputWebComponent.default,
  "form-number-input": _numberWebComponent.default,
  "form-dropdown": _dropdownWebComponent.default,
  "form-textarea": _textAreaWebComponent.default,
  "form-submit": _submitWebComponent.default
};
exports.elementsConfig = elementsConfig;

for (var _i = 0, _Object$entries = Object.entries(elementsConfig); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      val = _Object$entries$_i[1];

  customElements.define(key, val);
}
},{"./titleComponent":"src/webComponents/titleComponent.js","./imageComponent":"src/webComponents/imageComponent.js","./inputWebComponent":"src/webComponents/inputWebComponent.js","./numberWebComponent":"src/webComponents/numberWebComponent.js","./dropdownWebComponent":"src/webComponents/dropdownWebComponent.js","./textAreaWebComponent":"src/webComponents/textAreaWebComponent.js","./submitWebComponent":"src/webComponents/submitWebComponent.js"}],"src/validator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OPERATORS = {
  "=": function _(a, b) {
    return a === b;
  },
  "!=": function _(a, b) {
    return a !== b;
  },
  "<": function _(a, b) {
    return a < b;
  },
  "<=": function _(a, b) {
    return a <= b;
  },
  ">": function _(a, b) {
    return a > b;
  },
  ">=": function _(a, b) {
    return a >= b;
  }
}; // Utility boolean function

var booleanProcessor = function booleanProcessor(config, formValues) {
  var type = config.type,
      operator = config.operator,
      fieldId = config.fieldId,
      fieldValue = config.fieldValue;

  if (type === "COMPOUND") {
    return operator === "AND" ? conditions.reduce(function (accumulator, cond) {
      return accumulator && booleanProcessor(cond);
    }, true) : conditions.reduce(function (accumulator, cond) {
      return accumulator || booleanProcessor(cond);
    }, false);
  } else {
    return OPERATORS[operator](formValues[fieldId], fieldValue);
  }
}; // This validator function is added to on change event listener and triggered whenever element value changes and revalidates it. It Creates an error object with all the validation and passed it to the Custom Element which displays it


var _default = function _default(validationConfig, fieldId, formValues) {
  var fieldValue = formValues[fieldId] || "";
  var errors = {};
  validationConfig.forEach(function (validation) {
    switch (validation.type) {
      case "REQUIRED":
        if (!fieldValue) {
          errors["REQUIRED"] = "Required";
        }

        break;

      case "RANGE":
        {
          var min = validation.min,
              max = validation.max;

          if (!(min <= fieldValue && fieldValue <= max)) {
            errors["RANGE"] = "Out of Range";
          }
        }
        break;

      case "LENGTH":
        {
          var _validation$min = validation.min,
              _min = _validation$min === void 0 ? 0 : _validation$min,
              _max = validation.max;

          if (!(_min <= fieldValue.length && fieldValue.length <= _max)) {
            errors["LENGTH"] = "Invalid Length";
          }
        }
        break;

      case "PATTERN":
        {
          var expression = validation.expression;

          if (!new RegExp(expression).test(fieldValue)) {
            errors["PATTERN"] = "Doesn't match the pattern";
          }
        }
        break;

      case "COMPARISON":
        {
          if (!booleanProcessor(_objectSpread(_objectSpread({}, validation), {}, {
            fieldValue: fieldValue
          }), formValues)) {
            errors["COMPARISON"] = "Doesn't meet the conditions";
          }
        }
        break;

      case "CUSTOM":
        {
          var customValidator = validation.validator,
              customMessage = validation.customMessage;

          if (!customValidator(fieldValue)) {
            errors["CUSTOM"] = customMessage || "Validation Failed";
          }
        }

      default:
        throw "Please pass a valid validation type";
    }
  });
  return errors;
};

exports.default = _default;
},{}],"src/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMPONENTS_MAPPING = exports.FORM_CONFIG = void 0;
// This is the config which is used to generate the form
var FORM_CONFIG = [{
  id: "title",
  type: "TITLE",
  text: "Company Form"
}, {
  id: "image-banner",
  type: "IMAGE",
  src: "https://blog.ipleaders.in/wp-content/uploads/2017/05/iPleaders-12.jpg"
}, {
  id: "firstName",
  type: "TEXT",
  text: "Company Name",
  tooltip: "Please enter your company name",
  validations: [{
    type: "LENGTH",
    max: 20,
    min: 3
  }, {
    type: "REQUIRED"
  }]
}, {
  id: "gstin",
  type: "TEXT",
  text: "GSTIN Number",
  tooltip: "Please enter your company GSTIN",
  validations: [{
    type: "LENGTH",
    max: 15,
    min: 15
  }, {
    type: "REQUIRED"
  }]
}, {
  id: "numberofemployee",
  type: "NUMBER",
  text: "Number of Employee",
  tooltip: "Please enter your company number of employee",
  validations: [{
    type: "REQUIRED"
  }, {
    type: "PATTERN",
    expression: "^\\d+$"
  }, {
    type: "RANGE",
    min: 1,
    max: 10000
  }]
}, {
  id: "address",
  type: "TEXTAREA",
  text: "Address",
  tooltip: "Please enter your company Address",
  validations: [{
    type: "LENGTH",
    max: 20,
    min: 3
  }, {
    type: "REQUIRED"
  }]
}, {
  id: "city",
  type: "DROPDOWN",
  text: "City",
  dataSource: ["Delhi", "Mumbai", "Bangalore"]
}, {
  id: "state",
  type: "DROPDOWN",
  text: "State",
  dataSource: ["Karnataka", "Maharashtra", "Delhi"]
}, {
  id: "form-submit",
  type: "SUBMIT",
  api: "http://localhost:3000/api/postForm",
  method: "POST"
}]; // This is the component Mapping  which is used to define the type of custom elements supported by the Universal form renderer

exports.FORM_CONFIG = FORM_CONFIG;
var COMPONENTS_MAPPING = {
  TITLE: "form-title",
  IMAGE: "form-image",
  TEXT: "form-input",
  DROPDOWN: "form-dropdown",
  NUMBER: "form-number-input",
  TEXTAREA: "form-textarea",
  SUBMIT: "form-submit"
};
exports.COMPONENTS_MAPPING = COMPONENTS_MAPPING;
},{}],"src/formGenerator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./webComponents");

var _validator = _interopRequireDefault(require("./validator"));

var _constants = require("./constants");

var _dom = require("./helpers/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Generator = /*#__PURE__*/function () {
  // Define Contructor for Generator
  function Generator(formConfig, formContainer, formValues, onChangeCallback, formReferenceId) {
    _classCallCheck(this, Generator);

    this.formElementsMap = {};
    this.formValidations = {};
    this.formConfig = {};
    this.formReferenceId = formReferenceId; // Update formValues to a Proxy

    var formValuesProxied = new Proxy(formValues, {
      set: function set(obj, prop, value) {
        obj[prop] = value;
        onChangeCallback();
        return true;
      }
    }); // Create Component Method Which takes the form config JSON and iterate through each config to create component out of it. This also validates the input JSON

    this.createFormComponents(formConfig, formContainer, formValuesProxied);
  }

  _createClass(Generator, [{
    key: "validateComponent",
    value: function validateComponent(component, formValues) {
      if (component.validations) {
        var errors = (0, _validator.default)(component.validations, component.id, formValues);
        this.formValidations[component.id] = errors;
        this.formElementsMap[component.id].validations = errors;
      }
    } // Render Component Takes form Config and default form values as input, append on change event to validate the element with the validation provided and finally create Node out of it.

  }, {
    key: "renderComp",
    value: function (_renderComp) {
      function renderComp(_x, _x2) {
        return _renderComp.apply(this, arguments);
      }

      renderComp.toString = function () {
        return _renderComp.toString();
      };

      return renderComp;
    }(function (component, formValues) {
      var _this = this;

      var elementName = _constants.COMPONENTS_MAPPING[component.type]; // Add on click event listener on change of input fields

      var events = component.type != "SUBMIT" ? {
        change: function change(e) {
          formValues[component.id] = e.detail;

          _this.validateComponent(component, formValues);
        }
      } : {
        // Add on click event listener on change of submit button
        click: function click(e) {
          // validate the forms and display error
          var _iterator = _createForOfIteratorHelper(_this.formConfig),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _component = _step.value;

              _this.validateComponent(_component, formValues);
            } //is form valid to be submitted 

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var isValid = Object.keys(_this.formValidations).reduce(function (prev, curr) {
            prev = prev && Object.keys(_this.formValidations[curr]).length == 0;
            return prev;
          }, true); // show error if it is invalid form

          _this.formValidations[component.id] = {};
          _this.formElementsMap[component.id].validations = !isValid ? {
            'FormError': "Please check the above Errors"
          } : null;
          var formData = {
            formValues: _objectSpread({}, formValues),
            formId: _this.formReferenceId
          };

          if (isValid) {
            fetch(component.api, {
              method: component.method,
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              if (res && res.success) {
                _this.formElementsMap[component.id].validations = {
                  'FormSuccess': res.message
                };
              } else {
                _this.formElementsMap[component.id].validations = {
                  'FormError': "There has been a problem with your saving form operation:" + (res && res.message)
                };
              }
            }).catch(function (err) {
              console.log(err);
              _this.formElementsMap[component.id].validations = {
                'FormError': "There has been a problem with your saving form operation:" + err
              };
            });
          }
        }
      }; // Create Node based on form Config

      var node = (0, _dom.createNode)(elementName, {
        props: {
          value: formValues[component.id] || "",
          datasource: component.dataSource || [],
          validations: this.formValidations[component.id] || {}
        },
        attrs: _objectSpread(_objectSpread({
          placeholder: component.text || "",
          name: component.id,
          labelText: component.text,
          tooltip: component.tooltip || ""
        }, component.src ? {
          src: component.src
        } : {}), component.attrs),
        events: events,
        children: (component.children || []).map(function (childConfig) {
          return renderComp(childConfig, formValues);
        })
      });
      this.formElementsMap[component.id] = node;
      return node;
    } // Create Component Method Which takes the form config JSON and iterate through each config to create component out of it. This also validates the input JSON
    )
  }, {
    key: "createFormComponents",
    value: function createFormComponents(formConfig, containerEl, formValues) {
      containerEl.innerHTML = "";
      this.formConfig = formConfig;

      var _iterator2 = _createForOfIteratorHelper(formConfig),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var component = _step2.value;
          var formElement = this.renderComp(component, formValues);
          !!formElement ? containerEl.appendChild(formElement) : void 0;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return Generator;
}();

exports.default = Generator;
},{"./webComponents":"src/webComponents/index.js","./validator":"src/validator.js","./constants":"src/constants.js","./helpers/dom":"src/helpers/dom.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _formGenerator = _interopRequireWildcard(require("./formGenerator"));

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var formGenerator = document.getElementById("formGenerator");
var generatedValues = document.querySelector("#generatedValues #valueContent");
var defaultValues = {};

var renderFromGeneratedValues = function renderFromGeneratedValues() {
  generatedValues.innerText = JSON.stringify(defaultValues, null, 4);
};

renderFromGeneratedValues();
var generateForm = new _formGenerator.default(window.JSON_FORM_CONFIG || _constants.FORM_CONFIG, formGenerator, defaultValues, renderFromGeneratedValues, window.formReferenceId || "test-form");
},{"./formGenerator":"src/formGenerator.js","./constants":"src/constants.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50675" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map