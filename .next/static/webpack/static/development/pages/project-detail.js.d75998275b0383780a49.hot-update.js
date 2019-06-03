webpackHotUpdate("static/development/pages/project-detail.js",{

/***/ "./pages/project-detail.js":
/*!*********************************!*\
  !*** ./pages/project-detail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_scramble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-scramble */ "./node_modules/react-scramble/dist/index.js");
/* harmony import */ var react_scramble__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_scramble__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/header */ "./components/header/index.js");
/* harmony import */ var _styles_project_detail_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/project-detail.less */ "./styles/project-detail.less");
/* harmony import */ var _styles_project_detail_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_project_detail_less__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "/Users/pradip/ara-designs/pages/project-detail.js";







var SimpleSlider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SimpleSlider, _Component);

  function SimpleSlider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SimpleSlider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SimpleSlider).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "play", function () {
      _this.slider.slickPlay();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "pause", function () {
      _this.slider.slickPause();
    });

    _this.play = _this.play.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.pause = _this.pause.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimpleSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 2000
      };
      var images = this.props.images;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "sliderWrapper",
        onMouseEnter: this.play,
        onMouseLeave: this.pause,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        ref: function ref(slider) {
          return _this2.slider = slider;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), images && images.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: item,
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }));
      })));
    }
  }]);

  return SimpleSlider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var PeopleDetail =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PeopleDetail, _Component2);

  function PeopleDetail() {
    var _getPrototypeOf2;

    var _this3;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PeopleDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PeopleDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3), "state", {
      data: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this3), "renderProjectDetail", function (data) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column column-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "slider-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SimpleSlider, {
        images: data.projectImages,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column column-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "detail-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, data.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scramble__WEBPACK_IMPORTED_MODULE_10___default.a, {
        autoStart: true,
        text: "JAIPUR, ".concat(data.location.toUpperCase(), " |"),
        steps: [{
          roll: 10,
          action: '+',
          type: 'all'
        }, {
          action: '-',
          type: 'forward'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scramble__WEBPACK_IMPORTED_MODULE_10___default.a, {
        autoStart: true,
        text: "".concat(data.type.toUpperCase(), " |"),
        steps: [{
          roll: 10,
          action: '+',
          type: 'all'
        }, {
          action: '-',
          type: 'forward'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scramble__WEBPACK_IMPORTED_MODULE_10___default.a, {
        autoStart: true,
        text: "".concat(data.status.toUpperCase(), " |"),
        steps: [{
          roll: 10,
          action: '+',
          type: 'all'
        }, {
          action: '-',
          type: 'forward'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_scramble__WEBPACK_IMPORTED_MODULE_10___default.a, {
        autoStart: true,
        text: "".concat(data.size.toUpperCase(), " |"),
        steps: [{
          roll: 10,
          action: '+',
          type: 'all'
        }, {
          action: '-',
          type: 'forward'
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, data.details))));
    });

    return _this3;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PeopleDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.get('https://api.myjson.com/bins/160sf3').then(function (res) {
        return _this4.setState({
          data: res.data
        });
      }).catch(function (error) {
        return console.log('Err: ', error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "main-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "super-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container project-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, data.length > 0 && this.renderProjectDetail(data[0])))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "slider-popup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })));
    }
  }]);

  return PeopleDetail;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PeopleDetail);

/***/ })

})
//# sourceMappingURL=project-detail.js.d75998275b0383780a49.hot-update.js.map