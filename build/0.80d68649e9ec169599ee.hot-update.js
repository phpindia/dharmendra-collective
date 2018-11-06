webpackHotUpdate(0,{

/***/ "./src/views/PollDetails/PollDetails.jsx":
/*!***********************************************!*\
  !*** ./src/views/PollDetails/PollDetails.jsx ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Card_Card_jsx__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(/*! ../../config */ "./src/config.js");
var _jsxFileName = "/home/deligence/Music/devlopment/collectivetemp/src/views/PollDetails/PollDetails.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






//import { pollsHeding, thArray, tdArray } from "variables/Variables.jsx";

//const moment = require('moment');



var PollDetails = function (_Component) {
  _inherits(PollDetails, _Component);

  function PollDetails(props) {
    _classCallCheck(this, PollDetails);

    console.log("details props==========>", props.location.query);

    var _this = _possibleConstructorReturn(this, (PollDetails.__proto__ || Object.getPrototypeOf(PollDetails)).call(this, props));

    _this.deletePoll = function (event, id) {
      event.preventDefault();

      // Remove single polls
      var isDeleted = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].database().ref('polls/' + id).remove();
      console.log("poll deleted.......................", id);
    };

    _this.state = {
      data: [],
      pollId: props.location.query,
      alert: false,
      alertData: {}
    };
    return _this;
  }

  _createClass(PollDetails, [{
    key: "componentDidMount",
    value: function componentDidMount(e) {
      var pollId = this.state.pollId;

      var pollRef = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].database().ref('polls/' + pollId);

      pollRef.on("value", function (data) {
        console.log("poll details data ===========>", data.val());
        var tempData = data.val();
        tempData.id = data.key;
        console.log("key------------", tempData);
        this.setState({
          data: tempData
        });
      }.bind(this), function (error) {
        console.log("Error: " + error.code2);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;

      var pollData = data.data;
      var pollId = data.id;
      console.log("pollid=======>", pollId);
      console.log("poll data 44444", data);
      var formattedStartDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(data.starDate * 1000).format('L');
      console.log("s date", formattedStartDate);
      var formattedEndDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()(data.endDate * 1000).format('L');

      if (!pollData) {
        return 'loading........';
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "content", __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["i" /* Grid */],
          { fluid: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["o" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
              { md: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Card_Card_jsx__["b" /* default */], {
                title: "Poll Details"
                //category="Here you can see the number of Polls created"
                , ctTableFullWidth: true,
                ctTableResponsive: true,
                content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["p" /* Table */],
                  { striped: true, hover: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "thead",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "tr",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 78
                            },
                            __self: this
                          },
                          "Title:"
                        ),
                        " ",
                        data.title,
                        " ",
                        pollData.id
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ButtonToolbar */],
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 84
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Button */],
                            { className: "btn btn-fill btn-info pull-right", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 85
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* Link */],
                              { to: { pathname: '/EditPoll', query: { pollId: data.id } }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 86
                                },
                                __self: this
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "font",
                                { color: "white", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                  },
                                  __self: this
                                },
                                "Edit Poll"
                              )
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["b" /* Button */],
                            { className: "btn btn-fill btn-default pull-right", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* Link */],
                              { to: { pathname: '/PollsLIst' }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 91
                                },
                                __self: this
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "font",
                                { color: "white", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                  },
                                  __self: this
                                },
                                "Back"
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "tbody",
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "tr",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 101
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        { width: "40%", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 102
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 102
                            },
                            __self: this
                          },
                          "Start Date:"
                        ),
                        " ",
                        formattedStartDate
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        { width: "60%", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 103
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103
                            },
                            __self: this
                          },
                          "End Date:"
                        ),
                        " ",
                        formattedEndDate
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 104
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 105
                        },
                        __self: this
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "tr",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 107
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        { width: "40%", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 108
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 108
                            },
                            __self: this
                          },
                          "Options"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        { width: "60%", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 109
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "b",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 109
                            },
                            __self: this
                          },
                          "Description"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 110
                          },
                          __self: this
                        },
                        "Image"
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "td",
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                          },
                          __self: this
                        },
                        "URL"
                      )
                    ),
                    pollData.map(function (obj, key) {
                      var option = 'option' + (key + 1);
                      //let imageurl = 
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "tr",
                        { key: key, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 117
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "td",
                          { width: "40%", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 118
                            },
                            __self: this
                          },
                          obj.option
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "td",
                          { width: "40%", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 119
                            },
                            __self: this
                          },
                          obj.description
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "td",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { src: data[option], width: "25px", height: "25px", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 120
                            },
                            __self: this
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "td",
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 122
                            },
                            __self: this
                          },
                          obj.url
                        )
                      );
                    })
                  )
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return PollDetails;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PollDetails);

/***/ })

})
//# sourceMappingURL=0.80d68649e9ec169599ee.hot-update.js.map