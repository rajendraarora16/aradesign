webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/menu/index.js":
/*!**********************************!*\
  !*** ./components/menu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/variables */ "./constants/variables.js");
/* harmony import */ var react_scramble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scramble */ "./node_modules/react-scramble/dist/index.js");
/* harmony import */ var react_scramble__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scramble__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.less */ "./components/menu/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/pradip/aradesigns/components/menu/index.js";






var Menu = function Menu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var toggleActive = function toggleActive(e) {
    setActive(!active);
    setTimeout(function () {
      !active && document.getElementById('menu-close') ? document.getElementById('menu-close').classList.add('active') : document.getElementById('menu-close').classList.remove('active');
    }, 200);
  };

  var linkList = [{
    text: 'HOME',
    url: '/home'
  }, {
    text: 'PROJECTS',
    url: '/project-list'
  }, {
    text: 'OUR PEOPLE',
    url: '/people'
  }, {
    text: 'CONTACT',
    url: '/contact'
  }];

  var listItem = function listItem() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, linkList.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: index,
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _constants_variables__WEBPACK_IMPORTED_MODULE_3__["triangleImage"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scramble__WEBPACK_IMPORTED_MODULE_4___default.a, {
        autoStart: true,
        text: item.text,
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
          lineNumber: 39
        },
        __self: this
      }))));
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0);",
    className: active ? 'menu active' : 'menu',
    id: "menu-triangle",
    onClick: toggleActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _constants_variables__WEBPACK_IMPORTED_MODULE_3__["triangleImage"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "menu-wrapper ".concat(active ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "close-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "close cross",
    id: "menu-close",
    onClick: toggleActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, listItem()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "close bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "At ARA Design from extensive urban plans to the littlest of furniture subtleties, our work consistently weaves interior and exterior spaces."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "MENU"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.5f4ff48d1243bdea58d1.hot-update.js.map