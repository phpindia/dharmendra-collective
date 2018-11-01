webpackHotUpdate(0,{

/***/ "./src/components/Header/HeaderLinks.jsx":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderLinks.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system__ = __webpack_require__(/*! react-notification-system */ "./node_modules/react-notification-system/dist/NotificationSystem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_variables_Variables_jsx__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_variables_Variables_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_variables_Variables_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history__ = __webpack_require__(/*! ../../history */ "./src/history.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(/*! ../../config */ "./src/config.js");
var _jsxFileName = "/home/deligence/Music/devlopment/collectivetemp/src/components/Header/HeaderLinks.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










console.log("firebaecf", __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */]);

var HeaderLinks = function (_Component) {
  _inherits(HeaderLinks, _Component);

  function HeaderLinks(props, context) {
    _classCallCheck(this, HeaderLinks);

    var _this = _possibleConstructorReturn(this, (HeaderLinks.__proto__ || Object.getPrototypeOf(HeaderLinks)).call(this, props, context));

    _this.handleShow = _this.handleShow.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.formSubmitted = _this.formSubmitted.bind(_this);

    _this.handleLoginClick = _this.handleLoginClick.bind(_this);
    _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
    //this.state = {isLoggedIn: false};

    _this.state = {
      _notificationSystem: null,
      show: false,
      isLoggedIn: false,
      exists: false
    };
    return _this;
  }

  _createClass(HeaderLinks, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //this.interval = setInterval(this.fetchNews, 3600000);
      //window.firebase = firebaseConf;
      var data = '';
      setTimeout(function () {
        data = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().currentUser;
        if (data) {
          _this2.setState({ exists: true });
        }
        console.log("===== Nitin ", data);
      }, 2000);
      console.log("inside did mount^^^^^^^^^^^^^^");
      console.log("ffirebase.auth().currentUser aaa^^^^^^^^", __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().currentUser);
    }
  }, {
    key: "handleLoginClick",
    value: function handleLoginClick() {
      console.log("click handleloginbutton");
      this.setState({ isLoggedIn: true });
    }

    // handleLogoutClick() {
    //   this.setState({isLoggedIn: false});
    // }


  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({ isLoggedIn: false });
    }
  }, {
    key: "handleShow",
    value: function handleShow() {

      this.setState({ show: true });
    }
  }, {
    key: "handleLogoutClick",
    value: function handleLogoutClick() {
      console.log(this.props);
      // Firebase auth signuot
      __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().signOut().then(function () {
        // Sign-out successful.    
        //localStorage.removeItem("firebase:host:project-xxxxxxxxxxx.firebaseio.com");
        // Sign-out successful.
        console.log("Logout successful");
        //this.setState({ show: true });
        this.setState({ isLoggedIn: false });
        this.setState({ show: true });
        //window.location.href='/dashboard';
        //$state.go("login");
        //this.context.router.push('/dashboard');
        //this.context.router.history.push('/dashboard');
        //this.context.router.replaceWith('/dashboard');
        __WEBPACK_IMPORTED_MODULE_4__history__["a" /* default */].push("/dashboard");
      }.bind(this), function (error) {
        // An error happened.
        console.log(error);
      });
    }
  }, {
    key: "formSubmitted",
    value: function formSubmitted(event) {
      event.preventDefault();
      console.log("email=======================>", event.target.email.value);
      console.log("password=======================>", event.target.password.value);
      var email = event.target.email.value;
      var password = event.target.password.value;
      console.log("login button called");

      if (email !== 'admin-collective@gmail.com') {
        this.setState({ isLoggedIn: true });
        this.setState({ _notificationSystem: this.refs.notificationSystem });

        var _notificationSystem = this.refs.notificationSystem;
        _notificationSystem.addNotification({
          title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { "data-notify": "icon", className: "pe-7s", __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }),
          message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "b",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              },
              "Login Failed!. You don't have access privilege"
            )
          ),
          level: "error",
          position: "tr",
          autoDismiss: 5
        });
        return false;
      }

      //console.log(firebaseConf.auth().currentUser);

      // firebaseConf.auth().createUserWithEmailAndPassword('ashish@deligence.com',"pass123").catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log("new user error", error);

      // });

      // Firebase auth login
      __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().signInWithEmailAndPassword(email, password).then(function () {
        // User is signed in.
        console.log("login success");
        this.setState({ show: false });
        this.setState({ isLoggedIn: true });
        // Success notification message
        __WEBPACK_IMPORTED_MODULE_4__history__["a" /* default */].push("/dashboard");
      }.bind(this)).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error message", error);
        console.log("login failed");
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log("firebase.auth().currentUser OOOOO", __WEBPACK_IMPORTED_MODULE_5_firebase___default.a);
      var isLoggedIn = this.state.isLoggedIn;
      var popover = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["n" /* Popover */],
        { id: "modal-popover", title: "popover", __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        },
        "very popover. such engagement"
      );

      var tooltip = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["q" /* Tooltip */],
        { id: "modal-tooltip", __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        },
        "wow."
      );

      var notification = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", { className: "fa fa-globe", __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("b", { className: "caret", __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { className: "notification", __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          },
          "5"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "p",
          { className: "hidden-lg hidden-md", __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          },
          "Notification"
        )
      );
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_notification_system___default.a, { ref: "notificationSystem", style: __WEBPACK_IMPORTED_MODULE_3_variables_Variables_jsx__["style"], __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["k" /* Nav */],
          { pullRight: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["l" /* NavItem */],
            { eventKey: 3, href: "#", __source: {
                fileName: _jsxFileName,
                lineNumber: 223
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ButtonToolbar */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 224
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().currentUser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                { className: "btn btn-danger btn-fill", onClick: this.handleLogoutClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                  },
                  __self: this
                },
                "Log Out"
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "button",
                { className: "btn btn-info btn-fill", onClick: this.handleLoginClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                  },
                  __self: this
                },
                "Sign In"
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Modal */],
          { show: this.state.isLoggedIn && !__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].auth().currentUser, onHide: this.handleClose, __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Modal */].Header,
            { closeButton: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 237
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Modal */].Title,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 238
                },
                __self: this
              },
              "Sign In"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Modal */].Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 240
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["f" /* Form */],
              { horizontal: true, onSubmit: this.formSubmitted, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 241
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["h" /* FormGroup */],
                { controlId: "formHorizontalEmail", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
                  { componentClass: __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* ControlLabel */], sm: 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 243
                    },
                    __self: this
                  },
                  "Email"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
                  { sm: 10, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 246
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* FormControl */], { type: "email", placeholder: "Email", name: "email", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 247
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["h" /* FormGroup */],
                { controlId: "formHorizontalPassword", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
                  { componentClass: __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["e" /* ControlLabel */], sm: 2, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 252
                    },
                    __self: this
                  },
                  "Password"
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
                  { sm: 10, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 255
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["g" /* FormControl */], { type: "password", placeholder: "Password", name: "password", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 256
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["h" /* FormGroup */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 260
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
                  { smOffset: 2, sm: 10, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 261
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Button */],
                    { type: "submit", className: "btn btn-info btn-fill", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 262
                      },
                      __self: this
                    },
                    "Sign In"
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["j" /* Modal */].Footer,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Button */],
              { onClick: this.handleClose, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 268
                },
                __self: this
              },
              "Close"
            )
          )
        )
      );
    }
  }]);

  return HeaderLinks;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (HeaderLinks);

/***/ })

})
//# sourceMappingURL=0.8679e3ccc97928ef470b.hot-update.js.map