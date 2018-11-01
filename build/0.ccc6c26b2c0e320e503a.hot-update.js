webpackHotUpdate(0,{

/***/ "./src/views/CreatePoll/AddPoll.jsx":
/*!******************************************!*\
  !*** ./src/views/CreatePoll/AddPoll.jsx ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Card_Card_jsx__ = __webpack_require__(/*! components/Card/Card.jsx */ "./src/components/Card/Card.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__ = __webpack_require__(/*! components/FormInputs/FormInputs.jsx */ "./src/components/FormInputs/FormInputs.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_CustomButton_CustomButton_jsx__ = __webpack_require__(/*! components/CustomButton/CustomButton.jsx */ "./src/components/CustomButton/CustomButton.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_notification_system__ = __webpack_require__(/*! react-notification-system */ "./node_modules/react-notification-system/dist/NotificationSystem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_notification_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_notification_system__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_variables_Variables_jsx__ = __webpack_require__(/*! variables/Variables.jsx */ "./src/variables/Variables.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_variables_Variables_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_variables_Variables_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var _jsxFileName = "/home/deligence/Music/devlopment/collectivetemp/src/views/CreatePoll/AddPoll.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







//import { UserCard } from "components/UserCard/UserCard.jsx";




//import avatar from "assets/img/faces/face-3.jpg";


//import { Input } from 'reactstrap';


console.log("firebae poll add page", __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */]);

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'production-url-here';
var API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'http://139.59.23.83:5000/api/addpoll';

var AddPoll = function (_Component) {
  _inherits(AddPoll, _Component);

  function AddPoll(props) {
    _classCallCheck(this, AddPoll);

    var _this = _possibleConstructorReturn(this, (AddPoll.__proto__ || Object.getPrototypeOf(AddPoll)).call(this, props));

    _this.handleUploadFile = function (event) {
      // Get upload file
      var uploadFile = event.target.files[0];
      var uploadFileRef = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */].storage().ref('images/' + uploadFile.name);

      var firebaseUploadRef = uploadFileRef.put(uploadFile);
      console.log("upload status============>", uploadFile);
      // Pause the upload
      // firebaseUploadRef.pause();

      // firebaseUploadRef.then(function(snapshot) {
      //   console.log("my new snapy===============>", snapshot);
      // });
      // Resume the upload
      //firebaseUploadRef.resume();

      //console.log("File Upload Called", firebaseUploadRef);
    };

    _this.formSubmitted = function (event) {
      event.preventDefault();
      console.log("event=======================>", event.target.title.value);
      console.log("files data===>", event.target.files);
    };

    _this.state = {
      lastWeek: 1
    };
    return _this;
  }

  _createClass(AddPoll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._notificationSystem = this.refs.notificationSystem;

      var usersRef = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */].database().ref("polls");
      var usersQuery = usersRef.limitToLast(1);
      usersQuery.on('value', function (dataSnapshot) {
        dataSnapshot.forEach(function (data) {
          var weekData = data.val();
          console.log("The " + data.key + " score is " + weekData.week);
          if (weekData) {
            console.log("hello data weekData", weekData);
            this.setState({ lastWeek: weekData.week + 1 });
          } else this.setState({ lastWeek: 1 });
        }.bind(this));
      }.bind(this));
    }
  }, {
    key: "handleForm",
    value: function handleForm(event) {
      var _this2 = this;

      console.log("handle form is called");
      event.preventDefault();
      // Get form element
      var elem = event.target.elements;
      console.log("event.target ===> ", event.target.title.value);
      console.log("title=====>", event.target.files);
      console.log("elem ===>", elem);
      var pollTitle = event.target.title.value;

      // File upload
      var fileName = ['file1', 'file2', 'file3', 'file4', 'file5', 'file6', 'file7', 'file8', 'file9', 'file10'];
      var picNames = [];
      var picName = "noname.jpg";
      var tempJ = 1;
      //const uploadFileRef = firebaseConf.storage().ref('images/' + uploadFile.name);
      var newPostKey = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.database().ref().child('polls').push().key;
      var imagesUrls = [];

      var _loop = function _loop(i) {
        if (fileName.includes(elem[i].name)) {

          if (elem[i].files.length) {
            console.log("my files hey hey==========>", elem[i].files[0]);
            console.log("my files hey hey==========>", elem[i].files.length);
            console.log("my files hey hey==========>", elem[i].files[0].name);
            //picNames.push(elem[i].files[0].name);
            // File upload code section

            var tempName = 'option' + tempJ + '.jpg';
            picNames.push(tempName);
            var uploadFileRef = __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */].storage().ref('images/' + newPostKey + '/' + tempName);
            var firebaseUploadRef = uploadFileRef.put(elem[i].files[0]);
            firebaseUploadRef.then(function (snapshot) {
              return snapshot.ref.getDownloadURL();
            }).then(function (url) {
              imagesUrls[tempName] = url;
              /////////// temp /////////////////////
              var updates = {};
              var urlval = 'option' + i / 4;
              updates['/polls/' + newPostKey + '/' + urlval] = url;
              __WEBPACK_IMPORTED_MODULE_8__config__["a" /* default */].database().ref().update(updates);
            });
          } else {

            picNames.push(picName);
          }
          tempJ++;
        }
      };

      for (var i = 0; i < elem.length; i++) {
        _loop(i);
      }
      console.log("pic names==========>", picNames);
      console.log("last week !!!!!!!!!!!!!!!!1", this.state.lastWeek);

      // Form submit code goes here

      console.log("api url ===> ", API_URL);

      fetch(API_URL + "/" + newPostKey, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          totalVote: 0,
          title: event.target.title.value,
          data: [{
            id: 1,
            option: event.target.option1.value,
            description: event.target.description1.value,
            imgName: picNames[0],
            url: event.target.weburl1.value,
            count: 0,
            users: []
          }, {
            id: 2,
            option: event.target.option2.value,
            description: event.target.description2.value,
            imgName: picNames[1],
            url: event.target.weburl2.value,
            count: 0,
            users: []
          }, {
            id: 3,
            option: event.target.option3.value,
            description: event.target.description3.value,
            imgName: picNames[2],
            url: event.target.weburl3.value,
            count: 0,
            users: []
          }, {
            id: 4,
            option: event.target.option4.value,
            description: event.target.description4.value,
            imgName: picNames[3],
            url: event.target.weburl4.value,
            count: 0,
            users: []
          }, {
            id: 5,
            option: event.target.option5.value,
            description: event.target.description5.value,
            imgName: picNames[4],
            url: event.target.weburl5.value,
            count: 0,
            users: []
          }, {
            id: 6,
            option: event.target.option6.value,
            description: event.target.description6.value,
            imgName: picNames[5],
            url: event.target.weburl6.value,
            count: 0,
            users: []
          }, {
            id: 7,
            option: event.target.option7.value,
            description: event.target.description7.value,
            imgName: picNames[6],
            url: event.target.weburl7.value,
            count: 0,
            users: []
          }, {
            id: 8,
            option: event.target.option8.value,
            description: event.target.description8.value,
            imgName: picNames[7],
            url: event.target.weburl8.value,
            count: 0,
            users: []
          }, {
            id: 9,
            option: event.target.option9.value,
            description: event.target.description9.value,
            imgName: picNames[8],
            url: event.target.weburl9.value,
            count: 0,
            users: []
          }, {
            id: 10,
            option: event.target.option10.value,
            description: event.target.description10.value,
            imgName: picNames[9],
            url: event.target.weburl10.value,
            count: 0,
            users: []
          }],
          starDate: Date.parse(event.target.startDate.value) / 1000,
          endDate: Date.parse(event.target.endDate.value) / 1000,
          status: 0,
          week: this.state.lastWeek,
          nextWeekTheme: ""
        })
      })
      // .then(res => res.json())
      .then(function (poll) {
        console.log("Poll ===>", poll);
        //this line changes the route to polls list
        //use if else condition to define success and failure result
        //change the api accordingly to get success true or false in return
        console.log("poll status********", poll);
        if (poll.status == 200) {
          // Success notification message
          console.log("this.props.history", _this2.props);
          _this2.props.history.push("/pollsList");
        } else {
          //send somewhere else
          _this2._notificationSystem.addNotification({
            message: 'Failed!, Internal Server Error',
            level: 'error',
            position: "tr",
            autoDismiss: 5
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "content", __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_notification_system___default.a, { ref: "notificationSystem", style: __WEBPACK_IMPORTED_MODULE_7_variables_Variables_jsx__["style"], __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["i" /* Grid */],
          { fluid: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 270
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["o" /* Row */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 271
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["d" /* Col */],
              { md: 12, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 272
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_components_Card_Card_jsx__["a" /* Card */], {
                title: "Create",
                content: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  "form",
                  { onSubmit: this.handleForm.bind(this), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 276
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-12"],
                    proprieties: [{
                      label: "Poll Title",
                      type: "text",
                      name: "title",
                      bsClass: "form-control",
                      placeholder: "Poll Title",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 277
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option1",
                      bsClass: "form-control",
                      placeholder: "Option1",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description1",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 290
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl1",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file1",
                      id: "file1",
                      multiple: true,
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 311
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 334
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option2",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description2",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 335
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl2",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file2",
                      id: "file2",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 356
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 378
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option3",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description3",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 379
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl3",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file3",
                      id: "file3",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 400
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 422
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option4",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description4",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 423
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl4",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file4",
                      id: "file4",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 444
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 466
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option5",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description5",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 467
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl5",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file5",
                      id: "file5",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 488
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 510
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option6",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description6",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 511
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl6",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file6",
                      id: "file6",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 532
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 554
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option7",
                      bsClass: "form-control",
                      placeholder: "First name",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description7",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 555
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl7",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file7",
                      id: "file7",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 576
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 598
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option8",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description8",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 599
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl8",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file8",
                      id: "file8",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 620
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 642
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option9",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description9",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 643
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl9",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file9",
                      id: "file9",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 664
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 686
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Option",
                      type: "text",
                      name: "option10",
                      bsClass: "form-control",
                      placeholder: "Option",
                      required: true
                    }, {
                      label: "Description",
                      type: "text",
                      name: "description10",
                      bsClass: "form-control",
                      placeholder: "Description",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 687
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Web",
                      type: "text",
                      name: "weburl10",
                      bsClass: "form-control",
                      placeholder: "website url",
                      required: true
                    }, {
                      label: "Upload",
                      type: "file",
                      name: "file10",
                      id: "file10",
                      bsClass: "form-control",
                      placeholder: "Upload file",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 708
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 730
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components_FormInputs_FormInputs_jsx__["a" /* FormInputs */], {
                    ncols: ["col-md-6", "col-md-6"],
                    proprieties: [{
                      label: "Start  Date",
                      type: "date",
                      name: "startDate",
                      bsClass: "form-control",
                      placeholder: "Start Date",
                      required: true
                    }, {
                      label: "End Date",
                      type: "date",
                      name: "endDate",
                      bsClass: "form-control",
                      placeholder: "End Date",
                      required: true
                    }],
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 731
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* ButtonToolbar */],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 752
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_5_components_CustomButton_CustomButton_jsx__["a" /* default */],
                      { bsStyle: "info", pullRight: true, fill: true, type: "submit", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 753
                        },
                        __self: this
                      },
                      "Add Poll"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      "button",
                      { className: "btn btn-fill btn-default pull-right", __source: {
                          fileName: _jsxFileName,
                          lineNumber: 756
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["a" /* Link */],
                        { to: { pathname: '/PollsList' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 757
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          "font",
                          { color: "white", __source: {
                              fileName: _jsxFileName,
                              lineNumber: 758
                            },
                            __self: this
                          },
                          "Cancel"
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "clearfix", __source: {
                      fileName: _jsxFileName,
                      lineNumber: 762
                    },
                    __self: this
                  })
                ),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 273
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return AddPoll;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (AddPoll);

/***/ })

})
//# sourceMappingURL=0.ccc6c26b2c0e320e503a.hot-update.js.map