module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _Person = __webpack_require__(/*! ./person/Person */ \"./client/person/Person.js\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n  _inherits(MainRouter, _Component);\n\n  function MainRouter() {\n    _classCallCheck(this, MainRouter);\n\n    return _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).apply(this, arguments));\n  }\n\n  _createClass(MainRouter, [{\n    key: 'componentDidMount',\n\n    // Removes the server-side injected CSS when React component mounts\n    value: function componentDidMount() {\n      var jssStyles = document.getElementById('jss-server-side');\n      if (jssStyles && jssStyles.parentNode) {\n        jssStyles.parentNode.removeChild(jssStyles);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Menu2.default, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Users2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/person', component: _Person2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: '/user/edit/:userId', component: _EditProfile2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/user/:userId', component: _Profile2.default })\n        )\n      );\n    }\n  }]);\n\n  return MainRouter;\n}(_react.Component);\n\nexports.default = MainRouter;\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/profile-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/profile-pic.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1f9c6f37e3fb05375c94e587cc503ef7.png\";\n\n//# sourceURL=webpack:///./client/assets/images/profile-pic.png?");

/***/ }),

/***/ "./client/assets/images/seashell.jpg":
/*!*******************************************!*\
  !*** ./client/assets/images/seashell.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c6fc97f3fb6ea0d30afd3cbfe46239a2.jpg\";\n\n//# sourceURL=webpack:///./client/assets/images/seashell.jpg?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n      return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n          pathname: '/signin',\n          state: { from: props.location }\n        } });\n    } }));\n};\n\nexports.default = PrivateRoute;\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signin);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, _this.clickSubmit = function () {\n      var user = {\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n\n      (0, _apiAuth.signin)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _authHelper2.default.authenticate(data, function () {\n            _this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signin, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var _ref2 = this.props.location.state || {\n        from: {\n          pathname: '/'\n        }\n      },\n          from = _ref2.from;\n\n      var redirectToReferrer = this.state.redirectToReferrer;\n\n      if (redirectToReferrer) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n      }\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign In'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Signin);\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar signin = function signin(user) {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar signout = function signout() {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nvar auth = {\n  isAuthenticated: function isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate: function authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  signout: function signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    (0, _apiAuth.signout)().then(function (data) {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\nexports.default = auth;\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/contact-card/ContactCard.js":
/*!********************************************!*\
  !*** ./client/contact-card/ContactCard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _apiContactCard = __webpack_require__(/*! ./api-contact-card.js */ \"./client/contact-card/api-contact-card.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n    return {\n        card: {\n            maxWidth: 600,\n            margin: 'auto',\n            textAlign: 'center',\n            marginTop: theme.spacing.unit * 5,\n            paddingBottom: theme.spacing.unit * 2\n        },\n        error: {\n            verticalAlign: 'middle'\n        },\n        title: {\n            marginTop: theme.spacing.unit * 2,\n            color: theme.palette.openTitle\n        },\n        textField: {\n            marginLeft: theme.spacing.unit,\n            marginRight: theme.spacing.unit,\n            width: 300\n        },\n        submit: {\n            margin: 'auto',\n            marginBottom: theme.spacing.unit * 2\n        }\n    };\n};\n\nvar ContactCard = function (_Component) {\n    _inherits(ContactCard, _Component);\n\n    function ContactCard(props) {\n        _classCallCheck(this, ContactCard);\n\n        var _this = _possibleConstructorReturn(this, (ContactCard.__proto__ || Object.getPrototypeOf(ContactCard)).call(this, props));\n\n        _this.handleChange = function (name) {\n            return function (event) {\n                _this.setState(_defineProperty({}, name, event.target.value));\n            };\n        };\n\n        _this.clickSubmit = function () {\n            console.log(_this.state.forPerson._id);\n            var contactCard = {\n                forPerson: _this.state.forPerson || undefined,\n                atOrganization: _this.state.atOrganization || undefined,\n                title: _this.state.title || undefined,\n                email: _this.state.email || undefined,\n                mobile: _this.state.mobile || undefined\n            };\n            console.log(contactCard);\n            (0, _apiContactCard.create)(contactCard).then(function (data) {\n                console.log(\"reached Create ContactCard function in ContactCard.js\");\n                console.log(data);\n                if (data.error) {\n                    _this.setState({ error: data.error });\n                } else {\n                    console.log('What do we do next?');\n                }\n            });\n        };\n\n        console.log(\"props\");\n        console.log(_this.props);\n        _this.state = {\n            forPerson: _this.props.person,\n            atOrganization: '',\n            title: '',\n            email: '',\n            mobile: '',\n            error: '',\n            open: false\n            // this.match = match\n        };return _this;\n    }\n\n    _createClass(ContactCard, [{\n        key: 'render',\n        value: function render() {\n            var classes = this.props.classes;\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _Card2.default,\n                    { className: classes.card },\n                    _react2.default.createElement(\n                        _Card.CardContent,\n                        null,\n                        _react2.default.createElement(\n                            _Typography2.default,\n                            { type: 'headline', component: 'h2', className: classes.title },\n                            'Add a ContactCard to Person ',\n                            this.props.person.called\n                        ),\n                        _react2.default.createElement(_TextField2.default, { id: 'title', label: 'Title', className: classes.textField, value: this.state.title, onChange: this.handleChange('title'), margin: 'normal' }),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n                        _react2.default.createElement('br', null)\n                    ),\n                    _react2.default.createElement('br', null),\n                    ' ',\n                    this.state.error && _react2.default.createElement(\n                        _Typography2.default,\n                        { component: 'p', color: 'error' },\n                        _react2.default.createElement(\n                            _Icon2.default,\n                            { color: 'error', className: classes.error },\n                            'error'\n                        ),\n                        this.state.error\n                    ),\n                    _react2.default.createElement(\n                        _Card.CardActions,\n                        null,\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n                            'Submit'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return ContactCard;\n}(_react.Component);\n\nexports.default = (0, _styles.withStyles)(styles)(ContactCard);\n\n//# sourceURL=webpack:///./client/contact-card/ContactCard.js?");

/***/ }),

/***/ "./client/contact-card/api-contact-card.js":
/*!*************************************************!*\
  !*** ./client/contact-card/api-contact-card.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar create = function create(contactCard) {\n  console.log(\"We are in the api-contact-card.js create function\");\n  console.log(contactCard);\n  return fetch('/api/contact-cards/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(contactCard)\n  }).then(function (response) {\n    console.log('The response is:');\n    console.log(response);\n    // console.log(response.json())\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\n\n//# sourceURL=webpack:///./client/contact-card/api-contact-card.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _seashell = __webpack_require__(/*! ./../assets/images/seashell.jpg */ \"./client/assets/images/seashell.jpg\");\n\nvar _seashell2 = _interopRequireDefault(_seashell);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _FindPeople = __webpack_require__(/*! ./../user/FindPeople */ \"./client/user/FindPeople.js\");\n\nvar _FindPeople2 = _interopRequireDefault(_FindPeople);\n\nvar _Newsfeed = __webpack_require__(/*! ./../post/Newsfeed */ \"./client/post/Newsfeed.js\");\n\nvar _Newsfeed2 = _interopRequireDefault(_Newsfeed);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1,\n      margin: 30\n    },\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      marginTop: theme.spacing.unit * 5\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2.5 + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.text.secondary\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n};\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      defaultPage: true\n    }, _this.init = function () {\n      if (_authHelper2.default.isAuthenticated()) {\n        _this.setState({ defaultPage: false });\n      } else {\n        _this.setState({ defaultPage: true });\n      }\n    }, _this.componentWillReceiveProps = function () {\n      _this.init();\n    }, _this.componentDidMount = function () {\n      _this.init();\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.root },\n        this.state.defaultPage && _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 12 },\n            _react2.default.createElement(\n              _Card2.default,\n              { className: classes.card },\n              _react2.default.createElement(\n                _Typography2.default,\n                { type: 'headline', component: 'h2', className: classes.title },\n                'Home Page'\n              ),\n              _react2.default.createElement(_Card.CardMedia, { className: classes.media, image: _seashell2.default, title: 'Unicorn Shells' }),\n              _react2.default.createElement(\n                _Card.CardContent,\n                null,\n                _react2.default.createElement(\n                  _Typography2.default,\n                  { type: 'body1', component: 'p' },\n                  'Welcome to the MERN Social home page.'\n                )\n              )\n            )\n          )\n        ),\n        !this.state.defaultPage && _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 8, sm: 7 },\n            _react2.default.createElement(_Newsfeed2.default, null)\n          ),\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 6, sm: 5 },\n            _react2.default.createElement(_FindPeople2.default, null)\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nHome.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Home);\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isActive = function isActive(history, path) {\n  if (history.location.pathname == path) return { color: '#ffa726' };else return { color: '#ffffff' };\n};\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n  var history = _ref.history;\n  return _react2.default.createElement(\n    _AppBar2.default,\n    { position: 'static' },\n    _react2.default.createElement(\n      _Toolbar2.default,\n      null,\n      _react2.default.createElement(\n        _Typography2.default,\n        { type: 'title', color: 'inherit' },\n        'Snapshot'\n      ),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/' },\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Home', style: isActive(history, \"/\") },\n          _react2.default.createElement(_Home2.default, null)\n        )\n      ),\n      !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/signup' },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signup\") },\n            'Sign up'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/signin' },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signin\") },\n            'Sign In'\n          )\n        )\n      ),\n      _authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/user/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/user/\" + _authHelper2.default.isAuthenticated().user._id) },\n            'My Profile'\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/person/' },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/person/\") },\n            'Person'\n          )\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          { color: 'inherit', onClick: function onClick() {\n              _authHelper2.default.signout(function () {\n                return history.push('/');\n              });\n            } },\n          'Sign out'\n        )\n      )\n    )\n  );\n});\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/person/Person.js":
/*!*********************************!*\
  !*** ./client/person/Person.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _apiPerson = __webpack_require__(/*! ./api-person.js */ \"./client/person/api-person.js\");\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _ContactCard = __webpack_require__(/*! ../contact-card/ContactCard */ \"./client/contact-card/ContactCard.js\");\n\nvar _ContactCard2 = _interopRequireDefault(_ContactCard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Person = function (_Component) {\n  _inherits(Person, _Component);\n\n  function Person(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Person);\n\n    var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this));\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    };\n\n    _this.clickSubmit = function () {\n      var person = {\n        called: _this.state.called || undefined,\n        surName: _this.state.surName || undefined,\n        email: _this.state.email || undefined\n      };\n      console.log(person);\n      console.log(called.value + ', ' + surName.value + ', ' + email.value);\n      (0, _apiPerson.create)(person).then(function (data) {\n        console.log(\"reached Create Person function\");\n        console.log(data);\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          // this.props.addUpdate(data)\n          // person has been created successfully, show contact card\n          console.log(\"person has been created and contact card should display\");\n          _this.setState({ shouldContactCardBeDisplayed: true, person: data });\n        }\n      });\n    };\n\n    _this.state = {\n      persons: [],\n      person: '',\n      called: '',\n      givenName: '',\n      surName: '',\n      email: '',\n      error: '',\n      open: false,\n      shouldContactCardBeDisplayed: false\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Person, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Card.CardContent,\n            null,\n            _react2.default.createElement(\n              _Typography2.default,\n              { type: 'headline', component: 'h2', className: classes.title },\n              'Add a Person'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'called', label: 'Called', className: classes.textField, value: this.state.called, onChange: this.handleChange('called'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'surName', label: 'surName', className: classes.textField, value: this.state.surName, onChange: this.handleChange('surName'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null)\n          ),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n              'Submit'\n            )\n          )\n        ),\n        this.state.shouldContactCardBeDisplayed && _react2.default.createElement(_ContactCard2.default, { classes: classes, person: this.state.person })\n      );\n    }\n  }]);\n\n  return Person;\n}(_react.Component);\n\nPerson.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Person);\n\n//# sourceURL=webpack:///./client/person/Person.js?");

/***/ }),

/***/ "./client/person/api-person.js":
/*!*************************************!*\
  !*** ./client/person/api-person.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar create = function create(person) {\n  console.log(\"We are in the api-person.js create function\");\n  console.log(person);\n  return fetch('/api/persons/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(person)\n  }).then(function (response) {\n    console.log('The response is:');\n    console.log(response);\n    // console.log(response.json())\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar list = function list() {\n  return fetch('/api/persons/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params, credentials) {\n  return fetch('/api/persons/' + params.personId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, person) {\n  return fetch('/api/persons/' + params.personId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: person\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/persons/' + params.personId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar findPerson = function findPerson(params, credentials) {\n  return fetch('/api/persons/find-person/' + params.personId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\nexports.findPerson = findPerson;\n\n//# sourceURL=webpack:///./client/person/api-person.js?");

/***/ }),

/***/ "./client/post/Comments.js":
/*!*********************************!*\
  !*** ./client/post/Comments.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiPost = __webpack_require__(/*! ./api-post.js */ \"./client/post/api-post.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    cardHeader: {\n      paddingTop: theme.spacing.unit,\n      paddingBottom: theme.spacing.unit\n    },\n    smallAvatar: {\n      width: 25,\n      height: 25\n    },\n    commentField: {\n      width: '96%'\n    },\n    commentText: {\n      backgroundColor: 'white',\n      padding: theme.spacing.unit,\n      margin: '2px ' + theme.spacing.unit * 2 + 'px 2px 2px'\n    },\n    commentDate: {\n      display: 'block',\n      color: 'gray',\n      fontSize: '0.8em'\n    },\n    commentDelete: {\n      fontSize: '1.6em',\n      verticalAlign: 'middle',\n      cursor: 'pointer'\n    }\n  };\n};\n\nvar Comments = function (_Component) {\n  _inherits(Comments, _Component);\n\n  function Comments() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Comments);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Comments.__proto__ || Object.getPrototypeOf(Comments)).call.apply(_ref, [this].concat(args))), _this), _this.state = { text: '' }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _this.addComment = function (event) {\n      if (event.keyCode == 13 && event.target.value) {\n        event.preventDefault();\n        var jwt = _authHelper2.default.isAuthenticated();\n        (0, _apiPost.comment)({\n          userId: jwt.user._id\n        }, {\n          t: jwt.token\n        }, _this.props.postId, { text: _this.state.text }).then(function (data) {\n          if (data.error) {\n            console.log(data.error);\n          } else {\n            _this.setState({ text: '' });\n            _this.props.updateComments(data.comments);\n          }\n        });\n      }\n    }, _this.deleteComment = function (comment) {\n      return function (event) {\n        var jwt = _authHelper2.default.isAuthenticated();\n        (0, _apiPost.uncomment)({\n          userId: jwt.user._id\n        }, {\n          t: jwt.token\n        }, _this.props.postId, comment).then(function (data) {\n          if (data.error) {\n            console.log(data.error);\n          } else {\n            _this.props.updateComments(data.comments);\n          }\n        });\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Comments, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n\n      var commentBody = function commentBody(item) {\n        return _react2.default.createElement(\n          'p',\n          { className: classes.commentText },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/user/\" + item.postedBy._id },\n            item.postedBy.name\n          ),\n          _react2.default.createElement('br', null),\n          item.text,\n          _react2.default.createElement(\n            'span',\n            { className: classes.commentDate },\n            new Date(item.created).toDateString(),\n            ' |',\n            _authHelper2.default.isAuthenticated().user._id === item.postedBy._id && _react2.default.createElement(\n              _Icon2.default,\n              { onClick: _this2.deleteComment(item), className: classes.commentDelete },\n              'delete'\n            )\n          )\n        );\n      };\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Card.CardHeader, {\n          avatar: _react2.default.createElement(_Avatar2.default, { className: classes.smallAvatar, src: '/api/users/photo/' + _authHelper2.default.isAuthenticated().user._id }),\n          title: _react2.default.createElement(_TextField2.default, {\n            onKeyDown: this.addComment,\n            multiline: true,\n            value: this.state.text,\n            onChange: this.handleChange('text'),\n            placeholder: 'Write something ...',\n            className: classes.commentField,\n            margin: 'normal'\n          }),\n          className: classes.cardHeader\n        }),\n        this.props.comments.map(function (item, i) {\n          return _react2.default.createElement(_Card.CardHeader, {\n            avatar: _react2.default.createElement(_Avatar2.default, { className: classes.smallAvatar, src: '/api/users/photo/' + item.postedBy._id }),\n            title: commentBody(item),\n            className: classes.cardHeader,\n            key: i });\n        })\n      );\n    }\n  }]);\n\n  return Comments;\n}(_react.Component);\n\nComments.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  postId: _propTypes2.default.string.isRequired,\n  comments: _propTypes2.default.array.isRequired,\n  updateComments: _propTypes2.default.func.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Comments);\n\n//# sourceURL=webpack:///./client/post/Comments.js?");

/***/ }),

/***/ "./client/post/NewPost.js":
/*!********************************!*\
  !*** ./client/post/NewPost.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiPost = __webpack_require__(/*! ./api-post.js */ \"./client/post/api-post.js\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _PhotoCamera = __webpack_require__(/*! material-ui-icons/PhotoCamera */ \"material-ui-icons/PhotoCamera\");\n\nvar _PhotoCamera2 = _interopRequireDefault(_PhotoCamera);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      backgroundColor: '#efefef',\n      padding: theme.spacing.unit * 3 + 'px 0px 1px'\n    },\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 3,\n      backgroundColor: 'rgba(65, 150, 136, 0.09)',\n      boxShadow: 'none'\n    },\n    cardContent: {\n      backgroundColor: 'white',\n      paddingTop: 0,\n      paddingBottom: 0\n    },\n    cardHeader: {\n      paddingTop: 8,\n      paddingBottom: 8\n    },\n    photoButton: {\n      height: 30,\n      marginBottom: 5\n    },\n    input: {\n      display: 'none'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit * 2,\n      marginRight: theme.spacing.unit * 2,\n      width: '90%'\n    },\n    submit: {\n      margin: theme.spacing.unit * 2\n    },\n    filename: {\n      verticalAlign: 'super'\n    }\n  };\n};\n\nvar NewPost = function (_Component) {\n  _inherits(NewPost, _Component);\n\n  function NewPost() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, NewPost);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewPost.__proto__ || Object.getPrototypeOf(NewPost)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      text: '',\n      photo: '',\n      error: '',\n      user: {}\n    }, _this.componentDidMount = function () {\n      _this.postData = new FormData();\n      _this.setState({ user: _authHelper2.default.isAuthenticated().user });\n    }, _this.clickPost = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiPost.create)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, _this.postData).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ text: '', photo: '' });\n          _this.props.addUpdate(data);\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        var value = name === 'photo' ? event.target.files[0] : event.target.value;\n        _this.postData.set(name, value);\n        _this.setState(_defineProperty({}, name, value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(NewPost, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.root },\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(_Card.CardHeader, {\n            avatar: _react2.default.createElement(_Avatar2.default, { src: '/api/users/photo/' + this.state.user._id }),\n            title: this.state.user.name,\n            className: classes.cardHeader\n          }),\n          _react2.default.createElement(\n            _Card.CardContent,\n            { className: classes.cardContent },\n            _react2.default.createElement(_TextField2.default, {\n              placeholder: 'Share your thoughts ...',\n              multiline: true,\n              rows: '3',\n              value: this.state.text,\n              onChange: this.handleChange('text'),\n              className: classes.textField,\n              margin: 'normal'\n            }),\n            _react2.default.createElement('input', { accept: 'image/*', onChange: this.handleChange('photo'), className: classes.input, id: 'icon-button-file', type: 'file' }),\n            _react2.default.createElement(\n              'label',\n              { htmlFor: 'icon-button-file' },\n              _react2.default.createElement(\n                _IconButton2.default,\n                { color: 'secondary', className: classes.photoButton, component: 'span' },\n                _react2.default.createElement(_PhotoCamera2.default, null)\n              )\n            ),\n            ' ',\n            _react2.default.createElement(\n              'span',\n              { className: classes.filename },\n              this.state.photo ? this.state.photo.name : ''\n            ),\n            this.state.error && _react2.default.createElement(\n              _Typography2.default,\n              { component: 'p', color: 'error' },\n              _react2.default.createElement(\n                _Icon2.default,\n                { color: 'error', className: classes.error },\n                'error'\n              ),\n              this.state.error\n            )\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', disabled: this.state.text === '', onClick: this.clickPost, className: classes.submit },\n              'POST'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return NewPost;\n}(_react.Component);\n\nNewPost.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  addUpdate: _propTypes2.default.func.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(NewPost);\n\n//# sourceURL=webpack:///./client/post/NewPost.js?");

/***/ }),

/***/ "./client/post/Newsfeed.js":
/*!*********************************!*\
  !*** ./client/post/Newsfeed.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _PostList = __webpack_require__(/*! ./PostList */ \"./client/post/PostList.js\");\n\nvar _PostList2 = _interopRequireDefault(_PostList);\n\nvar _apiPost = __webpack_require__(/*! ./api-post.js */ \"./client/post/api-post.js\");\n\nvar _NewPost = __webpack_require__(/*! ./NewPost */ \"./client/post/NewPost.js\");\n\nvar _NewPost2 = _interopRequireDefault(_NewPost);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      margin: 'auto',\n      paddingTop: 0,\n      paddingBottom: theme.spacing.unit * 3\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2.5 + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle,\n      fontSize: '1em'\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n};\n\nvar Newsfeed = function (_Component) {\n  _inherits(Newsfeed, _Component);\n\n  function Newsfeed() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Newsfeed);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Newsfeed.__proto__ || Object.getPrototypeOf(Newsfeed)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      posts: []\n    }, _this.loadPosts = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiPost.listNewsFeed)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ posts: data });\n        }\n      });\n    }, _this.componentDidMount = function () {\n      _this.loadPosts();\n    }, _this.addPost = function (post) {\n      var updatedPosts = _this.state.posts;\n      updatedPosts.unshift(post);\n      _this.setState({ posts: updatedPosts });\n    }, _this.removePost = function (post) {\n      var updatedPosts = _this.state.posts;\n      var index = updatedPosts.indexOf(post);\n      updatedPosts.splice(index, 1);\n      _this.setState({ posts: updatedPosts });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Newsfeed, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'Newsfeed'\n        ),\n        _react2.default.createElement(_Divider2.default, null),\n        _react2.default.createElement(_NewPost2.default, { addUpdate: this.addPost }),\n        _react2.default.createElement(_Divider2.default, null),\n        _react2.default.createElement(_PostList2.default, { removeUpdate: this.removePost, posts: this.state.posts })\n      );\n    }\n  }]);\n\n  return Newsfeed;\n}(_react.Component);\n\nNewsfeed.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Newsfeed);\n\n//# sourceURL=webpack:///./client/post/Newsfeed.js?");

/***/ }),

/***/ "./client/post/Post.js":
/*!*****************************!*\
  !*** ./client/post/Post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Favorite = __webpack_require__(/*! material-ui-icons/Favorite */ \"material-ui-icons/Favorite\");\n\nvar _Favorite2 = _interopRequireDefault(_Favorite);\n\nvar _FavoriteBorder = __webpack_require__(/*! material-ui-icons/FavoriteBorder */ \"material-ui-icons/FavoriteBorder\");\n\nvar _FavoriteBorder2 = _interopRequireDefault(_FavoriteBorder);\n\nvar _Comment = __webpack_require__(/*! material-ui-icons/Comment */ \"material-ui-icons/Comment\");\n\nvar _Comment2 = _interopRequireDefault(_Comment);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiPost = __webpack_require__(/*! ./api-post.js */ \"./client/post/api-post.js\");\n\nvar _Comments = __webpack_require__(/*! ./Comments */ \"./client/post/Comments.js\");\n\nvar _Comments2 = _interopRequireDefault(_Comments);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 3,\n      backgroundColor: 'rgba(0, 0, 0, 0.06)'\n    },\n    cardContent: {\n      backgroundColor: 'white',\n      padding: theme.spacing.unit * 2 + 'px 0px'\n    },\n    cardHeader: {\n      paddingTop: theme.spacing.unit,\n      paddingBottom: theme.spacing.unit\n    },\n    text: {\n      margin: theme.spacing.unit * 2\n    },\n    photo: {\n      textAlign: 'center',\n      backgroundColor: '#f2f5f4',\n      padding: theme.spacing.unit\n    },\n    media: {\n      height: 200\n    },\n    button: {\n      margin: theme.spacing.unit\n    }\n  };\n};\n\nvar Post = function (_Component) {\n  _inherits(Post, _Component);\n\n  function Post() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Post);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      like: false,\n      likes: 0,\n      comments: []\n    }, _this.componentDidMount = function () {\n      _this.setState({ like: _this.checkLike(_this.props.post.likes), likes: _this.props.post.likes.length, comments: _this.props.post.comments });\n    }, _this.componentWillReceiveProps = function (props) {\n      _this.setState({ like: _this.checkLike(props.post.likes), likes: props.post.likes.length, comments: props.post.comments });\n    }, _this.checkLike = function (likes) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      var match = likes.indexOf(jwt.user._id) !== -1;\n      return match;\n    }, _this.like = function () {\n      var callApi = _this.state.like ? _apiPost.unlike : _apiPost.like;\n      var jwt = _authHelper2.default.isAuthenticated();\n      callApi({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, _this.props.post._id).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ like: !_this.state.like, likes: data.likes.length });\n        }\n      });\n    }, _this.updateComments = function (comments) {\n      _this.setState({ comments: comments });\n    }, _this.deletePost = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiPost.remove)({\n        postId: _this.props.post._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.props.onRemove(_this.props.post);\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Post, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(_Card.CardHeader, {\n          avatar: _react2.default.createElement(_Avatar2.default, { src: '/api/users/photo/' + this.props.post.postedBy._id }),\n          action: this.props.post.postedBy._id === _authHelper2.default.isAuthenticated().user._id && _react2.default.createElement(\n            _IconButton2.default,\n            { onClick: this.deletePost },\n            _react2.default.createElement(_Delete2.default, null)\n          ),\n          title: _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: \"/user/\" + this.props.post.postedBy._id },\n            this.props.post.postedBy.name\n          ),\n          subheader: new Date(this.props.post.created).toDateString(),\n          className: classes.cardHeader\n        }),\n        _react2.default.createElement(\n          _Card.CardContent,\n          { className: classes.cardContent },\n          _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', className: classes.text },\n            this.props.post.text\n          ),\n          this.props.post.photo && _react2.default.createElement(\n            'div',\n            { className: classes.photo },\n            _react2.default.createElement('img', {\n              className: classes.media,\n              src: '/api/posts/photo/' + this.props.post._id\n            })\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          this.state.like ? _react2.default.createElement(\n            _IconButton2.default,\n            { onClick: this.like, className: classes.button, 'aria-label': 'Like', color: 'secondary' },\n            _react2.default.createElement(_Favorite2.default, null)\n          ) : _react2.default.createElement(\n            _IconButton2.default,\n            { onClick: this.like, className: classes.button, 'aria-label': 'Unlike', color: 'secondary' },\n            _react2.default.createElement(_FavoriteBorder2.default, null)\n          ),\n          ' ',\n          _react2.default.createElement(\n            'span',\n            null,\n            this.state.likes\n          ),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { className: classes.button, 'aria-label': 'Comment', color: 'secondary' },\n            _react2.default.createElement(_Comment2.default, null)\n          ),\n          ' ',\n          _react2.default.createElement(\n            'span',\n            null,\n            this.state.comments.length\n          )\n        ),\n        _react2.default.createElement(_Divider2.default, null),\n        _react2.default.createElement(_Comments2.default, { postId: this.props.post._id, comments: this.state.comments, updateComments: this.updateComments })\n      );\n    }\n  }]);\n\n  return Post;\n}(_react.Component);\n\nPost.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  post: _propTypes2.default.object.isRequired,\n  onRemove: _propTypes2.default.func.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Post);\n\n//# sourceURL=webpack:///./client/post/Post.js?");

/***/ }),

/***/ "./client/post/PostList.js":
/*!*********************************!*\
  !*** ./client/post/PostList.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Post = __webpack_require__(/*! ./Post */ \"./client/post/Post.js\");\n\nvar _Post2 = _interopRequireDefault(_Post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PostList = function (_Component) {\n  _inherits(PostList, _Component);\n\n  function PostList() {\n    _classCallCheck(this, PostList);\n\n    return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));\n  }\n\n  _createClass(PostList, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { style: { marginTop: '24px' } },\n        this.props.posts.map(function (item, i) {\n          return _react2.default.createElement(_Post2.default, { post: item, key: i, onRemove: _this2.props.removeUpdate });\n        })\n      );\n    }\n  }]);\n\n  return PostList;\n}(_react.Component);\n\nPostList.propTypes = {\n  posts: _propTypes2.default.array.isRequired,\n  removeUpdate: _propTypes2.default.func.isRequired\n};\nexports.default = PostList;\n\n//# sourceURL=webpack:///./client/post/PostList.js?");

/***/ }),

/***/ "./client/post/api-post.js":
/*!*********************************!*\
  !*** ./client/post/api-post.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar create = function create(params, credentials, post) {\n  return fetch('/api/posts/new/' + params.userId, {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: post\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar listByUser = function listByUser(params, credentials) {\n  return fetch('/api/posts/by/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar listNewsFeed = function listNewsFeed(params, credentials) {\n  return fetch('/api/posts/feed/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/posts/' + params.postId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar like = function like(params, credentials, postId) {\n  return fetch('/api/posts/like/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar unlike = function unlike(params, credentials, postId) {\n  return fetch('/api/posts/unlike/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar comment = function comment(params, credentials, postId, _comment) {\n  return fetch('/api/posts/comment/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId, comment: _comment })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar uncomment = function uncomment(params, credentials, postId, comment) {\n  return fetch('/api/posts/uncomment/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId, comment: comment })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nexports.listNewsFeed = listNewsFeed;\nexports.listByUser = listByUser;\nexports.create = create;\nexports.remove = remove;\nexports.like = like;\nexports.unlike = unlike;\nexports.comment = comment;\nexports.uncomment = uncomment;\n\n//# sourceURL=webpack:///./client/post/api-post.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteUser = function (_Component) {\n  _inherits(DeleteUser, _Component);\n\n  function DeleteUser() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DeleteUser);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      redirect: false,\n      open: false\n    }, _this.clickButton = function () {\n      _this.setState({ open: true });\n    }, _this.deleteAccount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.remove)({\n        userId: _this.props.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _authHelper2.default.signout(function () {\n            return console.log('deleted');\n          });\n          _this.setState({ redirect: true });\n        }\n      });\n    }, _this.handleRequestClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DeleteUser, [{\n    key: 'render',\n    value: function render() {\n      var redirect = this.state.redirect;\n      if (redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n          _react2.default.createElement(_Delete2.default, null)\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, onClose: this.handleRequestClose },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            \"Delete Account\"\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'Confirm to delete your account.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.handleRequestClose, color: 'primary' },\n              'Cancel'\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n              'Confirm'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return DeleteUser;\n}(_react.Component);\n\nDeleteUser.propTypes = {\n  userId: _propTypes2.default.string.isRequired\n};\nexports.default = DeleteUser;\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _FileUpload = __webpack_require__(/*! material-ui-icons/FileUpload */ \"material-ui-icons/FileUpload\");\n\nvar _FileUpload2 = _interopRequireDefault(_FileUpload);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    },\n    bigAvatar: {\n      width: 60,\n      height: 60,\n      margin: 'auto'\n    },\n    input: {\n      display: 'none'\n    },\n    filename: {\n      marginLeft: '10px'\n    }\n  };\n};\n\nvar EditProfile = function (_Component) {\n  _inherits(EditProfile, _Component);\n\n  function EditProfile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, EditProfile);\n\n    var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n    _this.componentDidMount = function () {\n      _this.userData = new FormData();\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: _this.match.params.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ id: data._id, name: data.name, email: data.email, about: data.about });\n        }\n      });\n    };\n\n    _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined,\n        about: _this.state.about || undefined\n      };\n      (0, _apiUser.update)({\n        userId: _this.match.params.userId\n      }, {\n        t: jwt.token\n      }, _this.userData).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ 'redirectToProfile': true });\n        }\n      });\n    };\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        var value = name === 'photo' ? event.target.files[0] : event.target.value;\n        _this.userData.set(name, value);\n        _this.setState(_defineProperty({}, name, value));\n      };\n    };\n\n    _this.state = {\n      name: '',\n      about: '',\n      photo: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(EditProfile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var photoUrl = this.state.id ? '/api/users/photo/' + this.state.id + '?' + new Date().getTime() : '/api/users/defaultphoto';\n      if (this.state.redirectToProfile) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.id });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Edit Profile'\n          ),\n          _react2.default.createElement(_Avatar2.default, { src: photoUrl, className: classes.bigAvatar }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { accept: 'image/*', onChange: this.handleChange('photo'), className: classes.input, id: 'icon-button-file', type: 'file' }),\n          _react2.default.createElement(\n            'label',\n            { htmlFor: 'icon-button-file' },\n            _react2.default.createElement(\n              _Button2.default,\n              { variant: 'raised', color: 'default', component: 'span' },\n              'Upload',\n              _react2.default.createElement(_FileUpload2.default, null)\n            )\n          ),\n          ' ',\n          _react2.default.createElement(\n            'span',\n            { className: classes.filename },\n            this.state.photo ? this.state.photo.name : ''\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, {\n            id: 'multiline-flexible',\n            label: 'About',\n            multiline: true,\n            rows: '2',\n            value: this.state.about,\n            onChange: this.handleChange('about'),\n            className: classes.textField,\n            margin: 'normal'\n          }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }]);\n\n  return EditProfile;\n}(_react.Component);\n\nEditProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(EditProfile);\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/FindPeople.js":
/*!***********************************!*\
  !*** ./client/user/FindPeople.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Snackbar = __webpack_require__(/*! material-ui/Snackbar */ \"material-ui/Snackbar\");\n\nvar _Snackbar2 = _interopRequireDefault(_Snackbar);\n\nvar _Visibility = __webpack_require__(/*! material-ui-icons/Visibility */ \"material-ui-icons/Visibility\");\n\nvar _Visibility2 = _interopRequireDefault(_Visibility);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      padding: theme.spacing.unit,\n      margin: 0\n    }),\n    title: {\n      margin: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle,\n      fontSize: '1em'\n    },\n    avatar: {\n      marginRight: theme.spacing.unit * 1\n    },\n    follow: {\n      right: theme.spacing.unit * 2\n    },\n    snack: {\n      color: theme.palette.protectedTitle\n    },\n    viewButton: {\n      verticalAlign: 'middle'\n    }\n  };\n};\n\nvar FindPeople = function (_Component) {\n  _inherits(FindPeople, _Component);\n\n  function FindPeople() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FindPeople);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FindPeople.__proto__ || Object.getPrototypeOf(FindPeople)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: [],\n      open: false\n    }, _this.componentDidMount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.findPeople)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ users: data });\n        }\n      });\n    }, _this.clickFollow = function (user, index) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.follow)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, user._id).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          var toFollow = _this.state.users;\n          toFollow.splice(index, 1);\n          _this.setState({ users: toFollow, open: true, followMessage: 'Following ' + user.name + '!' });\n        }\n      });\n    }, _this.handleRequestClose = function (event, reason) {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(FindPeople, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Paper2.default,\n          { className: classes.root, elevation: 4 },\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'title', className: classes.title },\n            'Who to follow'\n          ),\n          _react2.default.createElement(\n            _List2.default,\n            null,\n            this.state.users.map(function (item, i) {\n              return _react2.default.createElement(\n                'span',\n                { key: i },\n                _react2.default.createElement(\n                  _List.ListItem,\n                  null,\n                  _react2.default.createElement(\n                    _List.ListItemAvatar,\n                    { className: classes.avatar },\n                    _react2.default.createElement(_Avatar2.default, { src: '/api/users/photo/' + item._id })\n                  ),\n                  _react2.default.createElement(_List.ListItemText, { primary: item.name }),\n                  _react2.default.createElement(\n                    _List.ListItemSecondaryAction,\n                    { className: classes.follow },\n                    _react2.default.createElement(\n                      _reactRouterDom.Link,\n                      { to: \"/user/\" + item._id },\n                      _react2.default.createElement(\n                        _IconButton2.default,\n                        { variant: 'raised', color: 'secondary', className: classes.viewButton },\n                        _react2.default.createElement(_Visibility2.default, null)\n                      )\n                    ),\n                    _react2.default.createElement(\n                      _Button2.default,\n                      { 'aria-label': 'Follow', variant: 'raised', color: 'primary', onClick: _this2.clickFollow.bind(_this2, item, i) },\n                      'Follow'\n                    )\n                  )\n                )\n              );\n            })\n          )\n        ),\n        _react2.default.createElement(_Snackbar2.default, {\n          anchorOrigin: {\n            vertical: 'bottom',\n            horizontal: 'right'\n          },\n          open: this.state.open,\n          onClose: this.handleRequestClose,\n          autoHideDuration: 6000,\n          message: _react2.default.createElement(\n            'span',\n            { className: classes.snack },\n            this.state.followMessage\n          )\n        })\n      );\n    }\n  }]);\n\n  return FindPeople;\n}(_react.Component);\n\nFindPeople.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(FindPeople);\n\n//# sourceURL=webpack:///./client/user/FindPeople.js?");

/***/ }),

/***/ "./client/user/FollowGrid.js":
/*!***********************************!*\
  !*** ./client/user/FollowGrid.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _GridList = __webpack_require__(/*! material-ui/GridList */ \"material-ui/GridList\");\n\nvar _GridList2 = _interopRequireDefault(_GridList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      paddingTop: theme.spacing.unit * 2,\n      display: 'flex',\n      flexWrap: 'wrap',\n      justifyContent: 'space-around',\n      overflow: 'hidden',\n      background: theme.palette.background.paper\n    },\n    bigAvatar: {\n      width: 60,\n      height: 60,\n      margin: 'auto'\n    },\n    gridList: {\n      width: 500,\n      height: 220\n    },\n    tileText: {\n      textAlign: 'center',\n      marginTop: 10\n    }\n  };\n};\n\nvar FollowGrid = function (_Component) {\n  _inherits(FollowGrid, _Component);\n\n  function FollowGrid() {\n    _classCallCheck(this, FollowGrid);\n\n    return _possibleConstructorReturn(this, (FollowGrid.__proto__ || Object.getPrototypeOf(FollowGrid)).apply(this, arguments));\n  }\n\n  _createClass(FollowGrid, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.root },\n        _react2.default.createElement(\n          _GridList2.default,\n          { cellHeight: 160, className: classes.gridList, cols: 4 },\n          this.props.people.map(function (person, i) {\n            return _react2.default.createElement(\n              _GridList.GridListTile,\n              { style: { 'height': 120 }, key: i },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/user/\" + person._id },\n                _react2.default.createElement(_Avatar2.default, { src: '/api/users/photo/' + person._id, className: classes.bigAvatar }),\n                _react2.default.createElement(\n                  _Typography2.default,\n                  { className: classes.tileText },\n                  person.name\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return FollowGrid;\n}(_react.Component);\n\nFollowGrid.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  people: _propTypes2.default.array.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(FollowGrid);\n\n//# sourceURL=webpack:///./client/user/FollowGrid.js?");

/***/ }),

/***/ "./client/user/FollowProfileButton.js":
/*!********************************************!*\
  !*** ./client/user/FollowProfileButton.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FollowProfileButton = function (_Component) {\n  _inherits(FollowProfileButton, _Component);\n\n  function FollowProfileButton() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FollowProfileButton);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FollowProfileButton.__proto__ || Object.getPrototypeOf(FollowProfileButton)).call.apply(_ref, [this].concat(args))), _this), _this.followClick = function () {\n      _this.props.onButtonClick(_apiUser.follow);\n    }, _this.unfollowClick = function () {\n      _this.props.onButtonClick(_apiUser.unfollow);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(FollowProfileButton, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.props.following ? _react2.default.createElement(\n          _Button2.default,\n          { variant: 'raised', color: 'secondary', onClick: this.unfollowClick },\n          'Unfollow'\n        ) : _react2.default.createElement(\n          _Button2.default,\n          { variant: 'raised', color: 'primary', onClick: this.followClick },\n          'Follow'\n        )\n      );\n    }\n  }]);\n\n  return FollowProfileButton;\n}(_react.Component);\n\nFollowProfileButton.propTypes = {\n  following: _propTypes2.default.bool.isRequired,\n  onButtonClick: _propTypes2.default.func.isRequired\n};\nexports.default = FollowProfileButton;\n\n//# sourceURL=webpack:///./client/user/FollowProfileButton.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Edit = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _FollowProfileButton = __webpack_require__(/*! ./../user/FollowProfileButton */ \"./client/user/FollowProfileButton.js\");\n\nvar _FollowProfileButton2 = _interopRequireDefault(_FollowProfileButton);\n\nvar _ProfileTabs = __webpack_require__(/*! ./../user/ProfileTabs */ \"./client/user/ProfileTabs.js\");\n\nvar _ProfileTabs2 = _interopRequireDefault(_ProfileTabs);\n\nvar _apiPost = __webpack_require__(/*! ./../post/api-post.js */ \"./client/post/api-post.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      maxWidth: 600,\n      margin: 'auto',\n      padding: theme.spacing.unit * 3,\n      marginTop: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 2 + 'px ' + theme.spacing.unit + 'px 0',\n      color: theme.palette.protectedTitle,\n      fontSize: '1em'\n    },\n    bigAvatar: {\n      width: 60,\n      height: 60,\n      margin: 10\n    }\n  };\n};\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n    _initialiseProps.call(_this);\n\n    _this.state = {\n      user: { following: [], followers: [] },\n      redirectToSignin: false,\n      following: false,\n      posts: []\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var photoUrl = this.state.user._id ? '/api/users/photo/' + this.state.user._id + '?' + new Date().getTime() : '/api/users/defaultphoto';\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n      }\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'Profile'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(\n              _List.ListItemAvatar,\n              null,\n              _react2.default.createElement(_Avatar2.default, { src: photoUrl, className: classes.bigAvatar })\n            ),\n            _react2.default.createElement(_List.ListItemText, { primary: this.state.user.name, secondary: this.state.user.email }),\n            ' ',\n            _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id ? _react2.default.createElement(\n              _List.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/user/edit/\" + this.state.user._id },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  { 'aria-label': 'Edit', color: 'primary' },\n                  _react2.default.createElement(_Edit2.default, null)\n                )\n              ),\n              _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n            ) : _react2.default.createElement(_FollowProfileButton2.default, { following: this.state.following, onButtonClick: this.clickFollowButton })\n          ),\n          _react2.default.createElement(_Divider2.default, null),\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(_List.ListItemText, { primary: this.state.user.about, secondary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n          )\n        ),\n        _react2.default.createElement(_ProfileTabs2.default, { user: this.state.user, posts: this.state.posts, removePostUpdate: this.removePost })\n      );\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nvar _initialiseProps = function _initialiseProps() {\n  var _this2 = this;\n\n  this.init = function (userId) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    (0, _apiUser.read)({\n      userId: userId\n    }, { t: jwt.token }).then(function (data) {\n      if (data.error) {\n        _this2.setState({ redirectToSignin: true });\n      } else {\n        var following = _this2.checkFollow(data);\n        _this2.setState({ user: data, following: following });\n        _this2.loadPosts(data._id);\n      }\n    });\n  };\n\n  this.componentWillReceiveProps = function (props) {\n    _this2.init(props.match.params.userId);\n  };\n\n  this.componentDidMount = function () {\n    _this2.init(_this2.match.params.userId);\n  };\n\n  this.checkFollow = function (user) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    var match = user.followers.find(function (follower) {\n      return follower._id == jwt.user._id;\n    });\n    return match;\n  };\n\n  this.clickFollowButton = function (callApi) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    callApi({\n      userId: jwt.user._id\n    }, {\n      t: jwt.token\n    }, _this2.state.user._id).then(function (data) {\n      if (data.error) {\n        _this2.setState({ error: data.error });\n      } else {\n        _this2.setState({ user: data, following: !_this2.state.following });\n      }\n    });\n  };\n\n  this.loadPosts = function (user) {\n    var jwt = _authHelper2.default.isAuthenticated();\n    (0, _apiPost.listByUser)({\n      userId: user\n    }, {\n      t: jwt.token\n    }).then(function (data) {\n      if (data.error) {\n        console.log(data.error);\n      } else {\n        _this2.setState({ posts: data });\n      }\n    });\n  };\n\n  this.removePost = function (post) {\n    var updatedPosts = _this2.state.posts;\n    var index = updatedPosts.indexOf(post);\n    updatedPosts.splice(index, 1);\n    _this2.setState({ posts: updatedPosts });\n  };\n};\n\nProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Profile);\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/ProfileTabs.js":
/*!************************************!*\
  !*** ./client/user/ProfileTabs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Tabs = __webpack_require__(/*! material-ui/Tabs */ \"material-ui/Tabs\");\n\nvar _Tabs2 = _interopRequireDefault(_Tabs);\n\nvar _FollowGrid = __webpack_require__(/*! ./../user/FollowGrid */ \"./client/user/FollowGrid.js\");\n\nvar _FollowGrid2 = _interopRequireDefault(_FollowGrid);\n\nvar _PostList = __webpack_require__(/*! ./../post/PostList */ \"./client/post/PostList.js\");\n\nvar _PostList2 = _interopRequireDefault(_PostList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProfileTabs = function (_Component) {\n  _inherits(ProfileTabs, _Component);\n\n  function ProfileTabs() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ProfileTabs);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileTabs.__proto__ || Object.getPrototypeOf(ProfileTabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      tab: 0,\n      posts: []\n    }, _this.componentWillReceiveProps = function (props) {\n      _this.setState({ tab: 0 });\n    }, _this.handleTabChange = function (event, value) {\n      _this.setState({ tab: value });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(ProfileTabs, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _AppBar2.default,\n          { position: 'static', color: 'default' },\n          _react2.default.createElement(\n            _Tabs2.default,\n            {\n              value: this.state.tab,\n              onChange: this.handleTabChange,\n              indicatorColor: 'primary',\n              textColor: 'primary',\n              fullWidth: true\n            },\n            _react2.default.createElement(_Tabs.Tab, { label: 'Posts' }),\n            _react2.default.createElement(_Tabs.Tab, { label: 'Following' }),\n            _react2.default.createElement(_Tabs.Tab, { label: 'Followers' })\n          )\n        ),\n        this.state.tab === 0 && _react2.default.createElement(\n          TabContainer,\n          null,\n          _react2.default.createElement(_PostList2.default, { removeUpdate: this.props.removePostUpdate, posts: this.props.posts })\n        ),\n        this.state.tab === 1 && _react2.default.createElement(\n          TabContainer,\n          null,\n          _react2.default.createElement(_FollowGrid2.default, { people: this.props.user.following })\n        ),\n        this.state.tab === 2 && _react2.default.createElement(\n          TabContainer,\n          null,\n          _react2.default.createElement(_FollowGrid2.default, { people: this.props.user.followers })\n        )\n      );\n    }\n  }]);\n\n  return ProfileTabs;\n}(_react.Component);\n\nProfileTabs.propTypes = {\n  user: _propTypes2.default.object.isRequired,\n  removePostUpdate: _propTypes2.default.func.isRequired,\n  posts: _propTypes2.default.array.isRequired\n};\n\nvar TabContainer = function TabContainer(props) {\n  return _react2.default.createElement(\n    _Typography2.default,\n    { component: 'div', style: { padding: 8 * 2 } },\n    props.children\n  );\n};\n\nTabContainer.propTypes = {\n  children: _propTypes2.default.node.isRequired\n};\n\nexports.default = ProfileTabs;\n\n//# sourceURL=webpack:///./client/user/ProfileTabs.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signup);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _this.clickSubmit = function () {\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.create)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signup, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Card.CardContent,\n            null,\n            _react2.default.createElement(\n              _Typography2.default,\n              { type: 'headline', component: 'h2', className: classes.title },\n              'Sign Up'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            ' ',\n            this.state.error && _react2.default.createElement(\n              _Typography2.default,\n              { component: 'p', color: 'error' },\n              _react2.default.createElement(\n                _Icon2.default,\n                { color: 'error', className: classes.error },\n                'error'\n              ),\n              this.state.error\n            )\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n              'Submit'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, disableBackdropClick: true },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            'New Account'\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'New account successfully created.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                'Sign In'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Signup);\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _ArrowForward = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      padding: theme.spacing.unit,\n      margin: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle\n    }\n  };\n};\n\nvar Users = function (_Component) {\n  _inherits(Users, _Component);\n\n  function Users() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Users);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: []\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Users, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      (0, _apiUser.list)().then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this2.setState({ users: data });\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'All Users'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          this.state.users.map(function (item, i) {\n            return _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/\" + item._id, key: i },\n              _react2.default.createElement(\n                _List.ListItem,\n                { button: true },\n                _react2.default.createElement(\n                  _List.ListItemAvatar,\n                  null,\n                  _react2.default.createElement(\n                    _Avatar2.default,\n                    null,\n                    _react2.default.createElement(_Person2.default, null)\n                  )\n                ),\n                _react2.default.createElement(_List.ListItemText, { primary: item.name }),\n                _react2.default.createElement(\n                  _List.ListItemSecondaryAction,\n                  null,\n                  _react2.default.createElement(\n                    _IconButton2.default,\n                    null,\n                    _react2.default.createElement(_ArrowForward2.default, null)\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Users);\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar create = function create(user) {\n  return fetch('/api/users/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar list = function list() {\n  return fetch('/api/users/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, user) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: user\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar follow = function follow(params, credentials, followId) {\n  return fetch('/api/users/follow/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, followId: followId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar unfollow = function unfollow(params, credentials, unfollowId) {\n  return fetch('/api/users/unfollow/', {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, unfollowId: unfollowId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar findPeople = function findPeople(params, credentials) {\n  return fetch('/api/users/findpeople/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\nexports.follow = follow;\nexports.unfollow = unfollow;\nexports.findPeople = findPeople;\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 3035,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\n\nexports.default = config;\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar signin = function signin(req, res) {\n  _user2.default.findOne({\n    \"email\": req.body.email\n  }, function (err, user) {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = _jsonwebtoken2.default.sign({\n      _id: user._id\n    }, _config2.default.jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token: token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n  secret: _config2.default.jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nexports.default = {\n  signin: signin,\n  signout: signout,\n  requireSignin: requireSignin,\n  hasAuthorization: hasAuthorization\n};\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/contactCard.controller.js":
/*!******************************************************!*\
  !*** ./server/controllers/contactCard.controller.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _contactCard = __webpack_require__(/*! ../models/contact-card.model */ \"./server/models/contact-card.model.js\");\n\nvar _contactCard2 = _interopRequireDefault(_contactCard);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res, next) {\n  console.log(\"WE ARE IN CONTROLLER CREATE CARD\");\n  console.log(req);\n  var contactCard = new _contactCard2.default(req.body);\n  contactCard.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"ContactCard created!\"\n    });\n  });\n};\n\nvar list = function list(req, res) {\n  _contactCard2.default.find(function (err, contactCards) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(contactCards);\n  });\n};\n\nexports.default = {\n  create: create,\n  list: list\n};\n\n//# sourceURL=webpack:///./server/controllers/contactCard.controller.js?");

/***/ }),

/***/ "./server/controllers/organization.controller.js":
/*!*******************************************************!*\
  !*** ./server/controllers/organization.controller.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _organization = __webpack_require__(/*! ../models/organization.model */ \"./server/models/organization.model.js\");\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res, next) {\n  console.log(\"WE ARE IN CONTROLLER CREATE Organization\");\n  console.log(req);\n  var organization = new _organization2.default(req.body);\n  organization.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Organization created!\"\n    });\n  });\n};\n\nexports.default = {\n  create: create\n};\n\n//# sourceURL=webpack:///./server/controllers/organization.controller.js?");

/***/ }),

/***/ "./server/controllers/person.controller.js":
/*!*************************************************!*\
  !*** ./server/controllers/person.controller.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _person = __webpack_require__(/*! ../models/person.model */ \"./server/models/person.model.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const create = (req, res, next) => {\n//     console.log(req)\n//     const person = new Person(req.body)\n//     person.save((err, result) => {\n//       if (err) {\n//         return res.status(400).json({\n//           error: errorHandler.getErrorMessage(err)\n//         })\n//       }\n//       res.status(200).json({\n//         message: \"Person created!\"\n//       })\n//     })\n//   }\n\nvar create = function create(req, res, next) {\n  console.log(req);\n  var person = new _person2.default(req.body);\n  person.save(function (err, savedPerson) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(savedPerson);\n  });\n};\n\nvar list = function list(req, res) {\n  _person2.default.find(function (err, persons) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(persons);\n  }).select('name email updated created');\n};\n\nexports.default = {\n  create: create,\n  list: list\n};\n\n//# sourceURL=webpack:///./server/controllers/person.controller.js?");

/***/ }),

/***/ "./server/controllers/post.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/post.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _post = __webpack_require__(/*! ../models/post.model */ \"./server/models/post.model.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n    var post = new _post2.default(fields);\n    post.postedBy = req.profile;\n    if (files.photo) {\n      post.photo.data = _fs2.default.readFileSync(files.photo.path);\n      post.photo.contentType = files.photo.type;\n    }\n    post.save(function (err, result) {\n      if (err) {\n        return res.status(400).json({\n          error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n      }\n      res.json(result);\n    });\n  });\n};\n\nvar postByID = function postByID(req, res, next, id) {\n  _post2.default.findById(id).populate('postedBy', '_id name').exec(function (err, post) {\n    if (err || !post) return res.status('400').json({\n      error: \"Post not found\"\n    });\n    req.post = post;\n    next();\n  });\n};\n\nvar listByUser = function listByUser(req, res) {\n  _post2.default.find({ postedBy: req.profile._id }).populate('comments', 'text created').populate('comments.postedBy', '_id name').populate('postedBy', '_id name').sort('-created').exec(function (err, posts) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nvar listNewsFeed = function listNewsFeed(req, res) {\n  var following = req.profile.following;\n  following.push(req.profile._id);\n  _post2.default.find({ postedBy: { $in: req.profile.following } }).populate('comments', 'text created').populate('comments.postedBy', '_id name').populate('postedBy', '_id name').sort('-created').exec(function (err, posts) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nvar remove = function remove(req, res) {\n  var post = req.post;\n  post.remove(function (err, deletedPost) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(deletedPost);\n  });\n};\n\nvar photo = function photo(req, res, next) {\n  res.set(\"Content-Type\", req.post.photo.contentType);\n  return res.send(req.post.photo.data);\n};\n\nvar like = function like(req, res) {\n  _post2.default.findByIdAndUpdate(req.body.postId, { $push: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\n\nvar unlike = function unlike(req, res) {\n  _post2.default.findByIdAndUpdate(req.body.postId, { $pull: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\n\nvar comment = function comment(req, res) {\n  var comment = req.body.comment;\n  comment.postedBy = req.body.userId;\n  _post2.default.findByIdAndUpdate(req.body.postId, { $push: { comments: comment } }, { new: true }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\nvar uncomment = function uncomment(req, res) {\n  var comment = req.body.comment;\n  _post2.default.findByIdAndUpdate(req.body.postId, { $pull: { comments: { _id: comment._id } } }, { new: true }).populate('comments.postedBy', '_id name').populate('postedBy', '_id name').exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\n\nvar isPoster = function isPoster(req, res, next) {\n  var isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;\n  if (!isPoster) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nexports.default = {\n  listByUser: listByUser,\n  listNewsFeed: listNewsFeed,\n  create: create,\n  postByID: postByID,\n  remove: remove,\n  photo: photo,\n  like: like,\n  unlike: unlike,\n  comment: comment,\n  uncomment: uncomment,\n  isPoster: isPoster\n};\n\n//# sourceURL=webpack:///./server/controllers/post.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _profilePic = __webpack_require__(/*! ./../../client/assets/images/profile-pic.png */ \"./client/assets/images/profile-pic.png\");\n\nvar _profilePic2 = _interopRequireDefault(_profilePic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar create = function create(req, res, next) {\n  var user = new _user2.default(req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\n/**\n * Load user and append to req.\n */\nvar userByID = function userByID(req, res, next, id) {\n  _user2.default.findById(id).populate('following', '_id name').populate('followers', '_id name').exec(function (err, user) {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar list = function list(req, res) {\n  _user2.default.find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nvar update = function update(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"Photo could not be uploaded\"\n      });\n    }\n    var user = req.profile;\n    user = _lodash2.default.extend(user, fields);\n    user.updated = Date.now();\n    if (files.photo) {\n      user.photo.data = _fs2.default.readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n    user.save(function (err, result) {\n      if (err) {\n        return res.status(400).json({\n          error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n      }\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    });\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar photo = function photo(req, res, next) {\n  if (req.profile.photo.data) {\n    res.set(\"Content-Type\", req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n  next();\n};\n\nvar defaultPhoto = function defaultPhoto(req, res) {\n  return res.sendFile(process.cwd() + _profilePic2.default);\n};\n\nvar addFollowing = function addFollowing(req, res, next) {\n  _user2.default.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } }, function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\n\nvar addFollower = function addFollower(req, res) {\n  _user2.default.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  });\n};\n\nvar removeFollowing = function removeFollowing(req, res, next) {\n  _user2.default.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } }, function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\nvar removeFollower = function removeFollower(req, res) {\n  _user2.default.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true }).populate('following', '_id name').populate('followers', '_id name').exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  });\n};\n\nvar findPeople = function findPeople(req, res) {\n  var following = req.profile.following;\n  following.push(req.profile._id);\n  _user2.default.find({ _id: { $nin: following } }, function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name');\n};\n\nexports.default = {\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  update: update,\n  photo: photo,\n  defaultPhoto: defaultPhoto,\n  addFollowing: addFollowing,\n  addFollower: addFollower,\n  removeFollowing: removeFollowing,\n  removeFollower: removeFollower,\n  findPeople: findPeople\n};\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nexports.default = {\n  compile: compile\n};\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _post = __webpack_require__(/*! ./routes/post.routes */ \"./server/routes/post.routes.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nvar _person = __webpack_require__(/*! ./routes/person.routes */ \"./server/routes/person.routes.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nvar _organization = __webpack_require__(/*! ./routes/organization.routes */ \"./server/routes/organization.routes.js\");\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nvar _contactCard = __webpack_require__(/*! ./routes/contact-card.routes */ \"./server/routes/contact-card.routes.js\");\n\nvar _contactCard2 = _interopRequireDefault(_contactCard);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _colors = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CURRENT_WORKING_DIR = process.cwd();\n//end\n\n//comment out before building for production\n\n\n// modules for server side rendering\n\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Sharing\napp.use((0, _cors2.default)());\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\napp.use('/', _post2.default);\napp.use('/', _person2.default);\napp.use('/', _organization2.default);\napp.use('/', _contactCard2.default);\n\napp.get('*', function (req, res) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: '#52c7b8',\n        main: '#009688',\n        dark: '#00675b',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#ffd95b',\n        main: '#ffa726',\n        dark: '#c77800',\n        contrastText: '#000'\n      },\n      openTitle: _colors.teal['700'],\n      protectedTitle: _colors.orange['700'],\n      type: 'light'\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var context = {};\n  var markup = _server2.default.renderToString(_react2.default.createElement(\n    _StaticRouter2.default,\n    { location: req.url, context: context },\n    _react2.default.createElement(\n      _JssProvider2.default,\n      { registry: sheetsRegistry, generateClassName: generateClassName },\n      _react2.default.createElement(\n        _styles.MuiThemeProvider,\n        { theme: theme, sheetsManager: new Map() },\n        _react2.default.createElement(_MainRouter2.default, null)\n      )\n    )\n  ));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  var css = sheetsRegistry.toString();\n  res.status(200).send((0, _template2.default)({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\nexports.default = app;\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Get unique error field name\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\n * Get the error message from error object\n */\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\nexports.default = { getErrorMessage: getErrorMessage };\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/contact-card.model.js":
/*!*********************************************!*\
  !*** ./server/models/contact-card.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Contacts can be thought of as \"ContactCards\" or business cards,\na data model for contact information that belongs to a Person.\nA contact can be current or not current, based on whether or not there is an\nendDate.\n*/\n\nvar ContactCardSchema = new _mongoose2.default.Schema({\n  forPerson: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Person'\n  },\n  atOrganization: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Organization'\n  },\n  startDate: {\n    type: Date\n  },\n  endDate: {\n    type: Date\n  },\n  title: {\n    type: String\n  },\n  roleDescription: {\n    type: String\n  },\n  atLocation: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Location'\n  },\n  email: {\n    type: String\n  },\n  mobile: {\n    type: String\n  },\n  directLine: {\n    type: String\n  },\n  officeLine: {\n    type: String\n  }\n});\n//ContactCardSchema.set('toObject', { virtuals: true });\n\nexports.default = _mongoose2.default.model('ContactCard', ContactCardSchema);\n\n//# sourceURL=webpack:///./server/models/contact-card.model.js?");

/***/ }),

/***/ "./server/models/organization.model.js":
/*!*********************************************!*\
  !*** ./server/models/organization.model.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\nOrganizations are the central data object around much of the other objects in the schema.\nAdmins will need to be able to create organizations and add data around them,\nmuch of it going to other collections such as Person, Location, Interaction, Snapshot, etc.\n\nEventually, Admins need to be able to create forms for Organizations, where Users can update\nOrganization information, as well as record Snapshots.\n\nIt could be possible that the \"description\" should come from a more\nabstract cell system for managing versions of copy management.\n*/\n\nvar OrganizationSchema = new _mongoose2.default.Schema({\n  called: {\n    type: String\n  },\n  longName: {\n    type: String\n  },\n  url: {\n    type: String\n  },\n  emailSuffix: {\n    type: String\n  },\n  description: {\n    type: String\n  },\n  parentOrganization: {\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Organization'\n  },\n  childOrganizations: [{\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Organization'\n  }],\n  locations: [{\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Location'\n  }],\n  persons: [{\n    type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Person'\n  }]\n});\n\nexports.default = _mongoose2.default.model('Organization', OrganizationSchema);\n\n//# sourceURL=webpack:///./server/models/organization.model.js?");

/***/ }),

/***/ "./server/models/person.model.js":
/*!***************************************!*\
  !*** ./server/models/person.model.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\nPeople and Persons and a Person are objects representing the static information related to\na person. The information about their role needs to be stored in the Contacts collection,\nas Admins will want to be able to track persons across roles and organizations and\ncontact information.\n\nUser Accounts will be created linked to the Person data.  A User should be able to edit their\nPerson data, as well as add and manage their Contacts.\n\nPersons that are \"Team Members\" will be Administrators with Administrative permissions from their User Account.\n*/\n\nvar PersonSchema = new _mongoose2.default.Schema({\n  called: {\n    type: String\n  },\n  givenName: {\n    type: String\n  },\n  surName: {\n    type: String\n  },\n  maidenName: {\n    type: String\n  },\n  birthDate: {\n    type: Date\n  },\n  gender: {\n    type: String\n  },\n  hasUserAccount: {\n    type: Boolean\n  },\n  isTeamMember: {\n    type: Boolean\n  },\n  currentOrganizations: [{ type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'Organization'\n  }],\n  currentContacts: [{ type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'ContactCard'\n  }],\n  priorContacts: [{ type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'ContactCard'\n  }],\n  personalContacts: [{ type: _mongoose2.default.Schema.Types.ObjectId,\n    ref: 'ContactCard'\n  }]\n});\n\n// PersonSchema.virtual('fullName').get(function() {\n//     return this.called + ' '  + this.surName;\n// }).set(function(fullName) {\n//     var parts = fullName.split(' ');\n//     this.called = parts[0];\n//     this.surName = parts[1];\n// });\n\n// PersonSchema.set('toObject', { virtuals: true });\n\nexports.default = _mongoose2.default.model('Person', PersonSchema);\n\n//# sourceURL=webpack:///./server/models/person.model.js?");

/***/ }),

/***/ "./server/models/post.model.js":
/*!*************************************!*\
  !*** ./server/models/post.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PostSchema = new _mongoose2.default.Schema({\n  text: {\n    type: String,\n    required: 'Name is required'\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  likes: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }],\n  comments: [{\n    text: String,\n    created: { type: Date, default: Date.now },\n    postedBy: { type: _mongoose2.default.Schema.ObjectId, ref: 'User' }\n  }],\n  postedBy: { type: _mongoose2.default.Schema.ObjectId, ref: 'User' },\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nexports.default = _mongoose2.default.model('Post', PostSchema);\n\n//# sourceURL=webpack:///./server/models/post.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserSchema = new _mongoose2.default.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  following: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }],\n  followers: [{ type: _mongoose2.default.Schema.ObjectId, ref: 'User' }]\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n    try {\n      return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/contact-card.routes.js":
/*!**********************************************!*\
  !*** ./server/routes/contact-card.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _contactCard = __webpack_require__(/*! ../controllers/contactCard.controller */ \"./server/controllers/contactCard.controller.js\");\n\nvar _contactCard2 = _interopRequireDefault(_contactCard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/contact-cards').post(_contactCard2.default.create).get(_contactCard2.default.list);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/contact-card.routes.js?");

/***/ }),

/***/ "./server/routes/organization.routes.js":
/*!**********************************************!*\
  !*** ./server/routes/organization.routes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _organization = __webpack_require__(/*! ../controllers/organization.controller */ \"./server/controllers/organization.controller.js\");\n\nvar _organization2 = _interopRequireDefault(_organization);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/organizations').post(_organization2.default.create);\n//  .get(organizationCtrl.list)\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/organization.routes.js?");

/***/ }),

/***/ "./server/routes/person.routes.js":
/*!****************************************!*\
  !*** ./server/routes/person.routes.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _person = __webpack_require__(/*! ../controllers/person.controller */ \"./server/controllers/person.controller.js\");\n\nvar _person2 = _interopRequireDefault(_person);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/persons').post(_person2.default.create).get(_person2.default.list);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/person.routes.js?");

/***/ }),

/***/ "./server/routes/post.routes.js":
/*!**************************************!*\
  !*** ./server/routes/post.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _post = __webpack_require__(/*! ../controllers/post.controller */ \"./server/controllers/post.controller.js\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/posts/new/:userId').post(_auth2.default.requireSignin, _post2.default.create);\n\nrouter.route('/api/posts/photo/:postId').get(_post2.default.photo);\n\nrouter.route('/api/posts/by/:userId').get(_auth2.default.requireSignin, _post2.default.listByUser);\n\nrouter.route('/api/posts/feed/:userId').get(_auth2.default.requireSignin, _post2.default.listNewsFeed);\n\nrouter.route('/api/posts/like').put(_auth2.default.requireSignin, _post2.default.like);\nrouter.route('/api/posts/unlike').put(_auth2.default.requireSignin, _post2.default.unlike);\n\nrouter.route('/api/posts/comment').put(_auth2.default.requireSignin, _post2.default.comment);\nrouter.route('/api/posts/uncomment').put(_auth2.default.requireSignin, _post2.default.uncomment);\n\nrouter.route('/api/posts/:postId').delete(_auth2.default.requireSignin, _post2.default.isPoster, _post2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\nrouter.param('postId', _post2.default.postByID);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/post.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/photo/:userId').get(_user2.default.photo, _user2.default.defaultPhoto);\nrouter.route('/api/users/defaultphoto').get(_user2.default.defaultPhoto);\n\nrouter.route('/api/users/follow').put(_auth2.default.requireSignin, _user2.default.addFollowing, _user2.default.addFollower);\nrouter.route('/api/users/unfollow').put(_auth2.default.requireSignin, _user2.default.removeFollowing, _user2.default.removeFollower);\n\nrouter.route('/api/users/findpeople/:userId').get(_auth2.default.requireSignin, _user2.default.findPeople);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Connection URL\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri);\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('unable to connect to database: ' + mongoUri);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>MERN Social</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            loader: \"babel-loader\",\n            query: {\n                presets: ['react']\n            }\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/mpstaton/code/snapshot-react-app/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/Comment":
/*!********************************************!*\
  !*** external "material-ui-icons/Comment" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Comment\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Comment%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/Favorite":
/*!*********************************************!*\
  !*** external "material-ui-icons/Favorite" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Favorite\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Favorite%22?");

/***/ }),

/***/ "material-ui-icons/FavoriteBorder":
/*!***************************************************!*\
  !*** external "material-ui-icons/FavoriteBorder" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/FavoriteBorder\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/FavoriteBorder%22?");

/***/ }),

/***/ "material-ui-icons/FileUpload":
/*!***********************************************!*\
  !*** external "material-ui-icons/FileUpload" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/FileUpload\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/FileUpload%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui-icons/PhotoCamera":
/*!************************************************!*\
  !*** external "material-ui-icons/PhotoCamera" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/PhotoCamera\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/PhotoCamera%22?");

/***/ }),

/***/ "material-ui-icons/Visibility":
/*!***********************************************!*\
  !*** external "material-ui-icons/Visibility" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Visibility\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Visibility%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/Grid":
/*!***********************************!*\
  !*** external "material-ui/Grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Grid\");\n\n//# sourceURL=webpack:///external_%22material-ui/Grid%22?");

/***/ }),

/***/ "material-ui/GridList":
/*!***************************************!*\
  !*** external "material-ui/GridList" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/Snackbar":
/*!***************************************!*\
  !*** external "material-ui/Snackbar" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Snackbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Snackbar%22?");

/***/ }),

/***/ "material-ui/Tabs":
/*!***********************************!*\
  !*** external "material-ui/Tabs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Tabs\");\n\n//# sourceURL=webpack:///external_%22material-ui/Tabs%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });