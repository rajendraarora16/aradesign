webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/people-list/index.js":
/*!*****************************************!*\
  !*** ./components/people-list/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll_wheel_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll-wheel-handler */ "./node_modules/react-scroll-wheel-handler/dist/ReactScrollWheelHandler.js");
/* harmony import */ var react_scroll_wheel_handler__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll_wheel_handler__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.less */ "./components/people-list/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/pradip/aradesigns/components/people-list/index.js";




var peopleList = [{
  name: 'Ankita Kuriakose',
  designation: 'Associate',
  imageUrl: 'http://aradesign.in/content/people/solo_01.jpg'
}, {
  name: 'Pankaj Panwar',
  designation: 'Associate',
  imageUrl: 'http://aradesign.in/content/people/solo_02.jpg'
}, {
  name: 'Raunak Shah',
  designation: 'Associate',
  imageUrl: 'http://aradesign.in/content/people/solo_03.jpg'
}, {
  name: 'Rajdeep Modak',
  designation: 'Senior Architect',
  imageUrl: 'http://aradesign.in/content/people/solo_04.jpg'
}, {
  name: 'Twinkle Kataria',
  designation: 'Design & Communication',
  imageUrl: 'http://aradesign.in/content/people/solo_10.jpg'
}];

var renderPeopleList = function renderPeopleList() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, peopleList.map(function (people, index) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: index,
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      href: "javascript:void(0)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "image-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
      src: people.imageUrl,
      alt: people.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "details-section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, people.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, people.designation))));
  }));
};

var peopleCard = {
  textAlign: 'center'
};
var name = {
  fontSize: '16px',
  color: '#fff',
  fontWeight: '800'
};

var ReactSlickDemo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ReactSlickDemo, _Component);

  function ReactSlickDemo(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReactSlickDemo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ReactSlickDemo).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ReactSlickDemo, [{
    key: "render",
    value: function render() {
      var _this = this;

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
          }
        }, {
          breakpoint: 559,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row people-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container team-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_scroll_wheel_handler__WEBPACK_IMPORTED_MODULE_8___default.a, {
        upHandler: function upHandler() {
          return _this.slider.slickPrev();
        },
        downHandler: function downHandler() {
          return _this.slider.slickNext();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_7___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        ref: function ref(slider) {
          return _this.slider = slider;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        style: peopleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_01.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "details-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Ankita Kuriakose"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Associate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Ankita graduated from Rachna Sansad Academy of Architecture with a skill set of sketching and layout planning. She interned with Somaya Kalapa Consultants at Fort and worked on Maharashtra Arts & Crafts Center. She is close to completing a decade with ARA and has mastered Design along with detailing. "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        style: peopleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_02.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "details-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "Pankaj Panwar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Associate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Born and brought up in Indore, Pankaj completed his Bachelor of Architecture from Indore professional studies Academy (IPS), Indore. He has been majorly involved in designing project of the F&B sector and it is now his forte. "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        style: peopleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_03.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "details-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Raunak Shah"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Associate"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Raunak finished his Bachelors & Masters in Interior Design from ST. Francis Institute of Art & Design (SFIAD), Mumbai in the city where he grew up. After graduation he has been an integral part of ARA where he has enjoyed hands on site experience and explored project management."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "column",
        style: peopleCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "image-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_04.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "details-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Rajdeep Modak"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Senior Architect"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Rajdeep did his Bachelors from VIVA School of Architecture. He then moved from Mumbai to intern at Environ Planners in Nashik, where he had the opportunity to work on both architecture and interior projects of varied scales. Over the years his expertise in architecture projects has made him travel extensively.                                    "))))))));
    }
  }]);

  return ReactSlickDemo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

function PeopleList() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ReactSlickDemo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (PeopleList);

/***/ })

})
//# sourceMappingURL=about.js.7935edfc02fdf4fe4feb.hot-update.js.map