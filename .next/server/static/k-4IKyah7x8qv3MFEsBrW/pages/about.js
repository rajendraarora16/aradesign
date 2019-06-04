module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "92Fa":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "B+aG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./constants/variables.js
var variables = __webpack_require__("Ru7L");

// EXTERNAL MODULE: external "react-scramble"
var external_react_scramble_ = __webpack_require__("fBJr");
var external_react_scramble_default = /*#__PURE__*/__webpack_require__.n(external_react_scramble_);

// EXTERNAL MODULE: ./components/menu/style.less
var style = __webpack_require__("MVNz");

// CONCATENATED MODULE: ./components/menu/index.js







var menu_Menu = function Menu() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var toggleActive = function toggleActive(e) {
    setActive(!active);
    setTimeout(function () {
      !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none');
      !active && document.getElementById('menu-close') ? document.getElementById('menu-close').classList.add('active') : document.getElementById('menu-close').classList.remove('active');
    }, 200);
    setTimeout(function () {
      !active && document.getElementById('menu-triangle') ? document.getElementById('menu-triangle').classList.add('none') : document.getElementById('menu-triangle').classList.remove('none');
    }, 300);
  };

  var linkList = [{
    text: 'HOME',
    url: '/home'
  }, {
    text: 'PROJECTS',
    url: '/projects'
  }, {
    text: 'ABOUT',
    url: '/about'
  }, {
    text: 'CONTACT',
    url: '/contact'
  }];

  var listItem = function listItem() {
    return external_react_default.a.createElement(external_react_["Fragment"], null, linkList.map(function (item, index) {
      return external_react_default.a.createElement("div", {
        key: index,
        className: "menu"
      }, external_react_default.a.createElement("span", {
        className: "icon"
      }, external_react_default.a.createElement("img", {
        src: variables["a" /* triangleImage */]
      })), external_react_default.a.createElement(link_default.a, {
        href: item.url
      }, external_react_default.a.createElement("div", {
        className: "name"
      }, external_react_default.a.createElement(external_react_scramble_default.a, {
        autoStart: true,
        text: item.text,
        steps: [{
          roll: 10,
          action: '+',
          type: 'all'
        }, {
          action: '-',
          type: 'forward'
        }]
      }))));
    }));
  };

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
    href: "javascript:void(0);",
    className: active ? 'menu active' : 'menu',
    id: "menu-triangle",
    onClick: toggleActive
  }, external_react_default.a.createElement("img", {
    src: variables["a" /* triangleImage */]
  })), external_react_default.a.createElement("div", {
    className: "menu-wrapper ".concat(active ? 'show' : 'hide')
  }, external_react_default.a.createElement("div", {
    className: "close-menu"
  }, external_react_default.a.createElement("div", {
    className: "close cross",
    id: "menu-close",
    onClick: toggleActive
  })), external_react_default.a.createElement("div", {
    className: "nav"
  }, listItem()), external_react_default.a.createElement("div", {
    className: "close bottom"
  }, external_react_default.a.createElement("p", null, "At ARA Design from extensive urban plans to the littlest of furniture subtleties, our work consistently weaves interior and exterior spaces."), external_react_default.a.createElement("span", null, "MENU"))));
};

/* harmony default export */ var menu = __webpack_exports__["a"] = (menu_Menu);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Gvbv":
/***/ (function(module, exports) {



/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Juyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "react-scroll-wheel-handler"
var external_react_scroll_wheel_handler_ = __webpack_require__("qddP");
var external_react_scroll_wheel_handler_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_wheel_handler_);

// EXTERNAL MODULE: ./components/people-list/style.less
var style = __webpack_require__("Gvbv");

// CONCATENATED MODULE: ./components/people-list/index.js










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

var people_list_renderPeopleList = function renderPeopleList() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, peopleList.map(function (people, index) {
    return external_react_default.a.createElement("div", {
      key: index,
      className: "column"
    }, external_react_default.a.createElement("a", {
      href: "javascript:void(0)"
    }, external_react_default.a.createElement("div", {
      className: "image-wrapper"
    }, external_react_default.a.createElement("img", {
      src: people.imageUrl,
      alt: people.name
    })), external_react_default.a.createElement("div", {
      className: "details-section"
    }, external_react_default.a.createElement("h2", null, people.name), external_react_default.a.createElement("p", null, people.designation))));
  }));
};

var peopleCard = {
  textAlign: 'center'
};
var people_list_name = {
  fontSize: '16px',
  color: '#fff',
  fontWeight: '800'
};

var people_list_ReactSlickDemo =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(ReactSlickDemo, _Component);

  function ReactSlickDemo(props) {
    Object(classCallCheck["a" /* default */])(this, ReactSlickDemo);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ReactSlickDemo).call(this, props));
  }

  Object(createClass["a" /* default */])(ReactSlickDemo, [{
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
      return external_react_default.a.createElement("div", {
        className: "row people-list"
      }, external_react_default.a.createElement("div", {
        className: "container team-container"
      }, external_react_default.a.createElement("div", {
        className: "grid"
      }, external_react_default.a.createElement(external_react_scroll_wheel_handler_default.a, {
        upHandler: function upHandler() {
          return _this.slider.slickPrev();
        },
        downHandler: function downHandler() {
          return _this.slider.slickNext();
        }
      }, external_react_default.a.createElement(external_react_slick_default.a, Object(esm_extends["a" /* default */])({}, settings, {
        ref: function ref(slider) {
          return _this.slider = slider;
        }
      }), external_react_default.a.createElement("div", {
        className: "column",
        style: peopleCard
      }, external_react_default.a.createElement("div", {
        className: "image-wrapper"
      }, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_01.jpg"
      })), external_react_default.a.createElement("div", {
        className: "details-section"
      }, external_react_default.a.createElement("h2", null, "Ankita Kuriakose"), external_react_default.a.createElement("p", null, "Associate"), external_react_default.a.createElement("p", null, "Ankita graduated from Rachna Sansad Academy of Architecture with a skill set of sketching and layout planning. She interned with Somaya Kalapa Consultants at Fort and worked on Maharashtra Arts & Crafts Center. She is close to completing a decade with ARA and has mastered Design along with detailing. "))), external_react_default.a.createElement("div", {
        className: "column",
        style: peopleCard
      }, external_react_default.a.createElement("div", {
        className: "image-wrapper"
      }, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_02.jpg"
      })), external_react_default.a.createElement("div", {
        className: "details-section"
      }, external_react_default.a.createElement("h2", null, "Pankaj Panwar"), external_react_default.a.createElement("p", null, "Associate"), external_react_default.a.createElement("p", null, "Born and brought up in Indore, Pankaj completed his Bachelor of Architecture from Indore professional studies Academy (IPS), Indore. He has been majorly involved in designing project of the F&B sector and it is now his forte. "))), external_react_default.a.createElement("div", {
        className: "column",
        style: peopleCard
      }, external_react_default.a.createElement("div", {
        className: "image-wrapper"
      }, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_03.jpg"
      })), external_react_default.a.createElement("div", {
        className: "details-section"
      }, external_react_default.a.createElement("h2", null, "Raunak Shah"), external_react_default.a.createElement("p", null, "Associate"), external_react_default.a.createElement("p", null, "Raunak finished his Bachelors & Masters in Interior Design from ST. Francis Institute of Art & Design (SFIAD), Mumbai in the city where he grew up. After graduation he has been an integral part of ARA where he has enjoyed hands on site experience and explored project management."))), external_react_default.a.createElement("div", {
        className: "column",
        style: peopleCard
      }, external_react_default.a.createElement("div", {
        className: "image-wrapper"
      }, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/solo_04.jpg"
      })), external_react_default.a.createElement("div", {
        className: "details-section"
      }, external_react_default.a.createElement("h2", null, "Rajdeep Modak"), external_react_default.a.createElement("p", null, "Senior Architect"), external_react_default.a.createElement("p", null, "Rajdeep did his Bachelors from VIVA School of Architecture. He then moved from Mumbai to intern at Environ Planners in Nashik, where he had the opportunity to work on both architecture and interior projects of varied scales. Over the years his expertise in architecture projects has made him travel extensively.                                    "))))))));
    }
  }]);

  return ReactSlickDemo;
}(external_react_["Component"]);

function PeopleList() {
  return external_react_default.a.createElement(people_list_ReactSlickDemo, null);
}

/* harmony default export */ var people_list = (PeopleList);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./components/people-detail/style.less
var people_detail_style = __webpack_require__("je4i");

// CONCATENATED MODULE: ./components/people-detail/index.js












var people_detail_SimpleSlider =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SimpleSlider, _Component);

  function SimpleSlider(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, SimpleSlider);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SimpleSlider).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "play", function () {
      _this.slider.slickPlay();
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "pause", function () {
      _this.slider.slickPause();
    });

    _this.play = _this.play.bind(Object(assertThisInitialized["a" /* default */])(_this));
    _this.pause = _this.pause.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(SimpleSlider, [{
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
      return external_react_default.a.createElement("div", {
        className: "sliderWrapper",
        onMouseEnter: this.play,
        onMouseLeave: this.pause
      }, external_react_default.a.createElement(external_react_slick_default.a, Object(esm_extends["a" /* default */])({}, settings, {
        ref: function ref(slider) {
          return _this2.slider = slider;
        }
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/group_01.jpg",
        alt: ""
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("img", {
        src: "http://aradesign.in/content/people/group_02.jpg",
        alt: ""
      }))));
    }
  }]);

  return SimpleSlider;
}(external_react_["Component"]);

function PeopleDetail() {
  return external_react_default.a.createElement("div", {
    className: "row people-row"
  }, external_react_default.a.createElement("div", {
    className: "container people-container"
  }, external_react_default.a.createElement("div", {
    className: "grid"
  }, external_react_default.a.createElement("div", {
    className: "column text-content"
  }, external_react_default.a.createElement("div", {
    className: "left-content"
  }, external_react_default.a.createElement("h2", null, "Our People"), external_react_default.a.createElement("p", null))), external_react_default.a.createElement("div", {
    className: "column column-right"
  }, external_react_default.a.createElement("div", {
    className: "slider-section"
  }, external_react_default.a.createElement(people_detail_SimpleSlider, null))))));
}

/* harmony default export */ var people_detail = (PeopleDetail);
// EXTERNAL MODULE: ./components/about-detail/style.less
var about_detail_style = __webpack_require__("zYTr");

// CONCATENATED MODULE: ./components/about-detail/index.js



function AboutDetail() {
  return external_react_default.a.createElement("div", {
    className: "row people-row"
  }, external_react_default.a.createElement("div", {
    className: "container about-container"
  }, external_react_default.a.createElement("div", {
    className: "grid"
  }, external_react_default.a.createElement("div", {
    className: "column text-content"
  }, external_react_default.a.createElement("div", {
    className: "left-content"
  }, external_react_default.a.createElement("h2", null, "About"), external_react_default.a.createElement("p", null, "ARA Design is a brainchild of Amey Dahanukar (MA Urban Design, UK) and also a partner of Dahanukar Associates. Alongside his team, which he prefers to be called, \u2018family\u2019 form a charismatic design firm excelling in Design, Architecture, Urbanism and Interiors. From extensive urban plans to the littlest of furniture subtleties, our work consistently weaves interior and exterior spaces."), external_react_default.a.createElement("p", null, "ARA Designs characterizes architecture as an art and investigation of ensuring our urban communities and structures fit with the manner in which we need to experience our lives. Our varied clientele exhibits our diverse work exposure. Our forte is building relationships. At ARA family, we aim at developing this organization that grows beyond a single entity. The growth of our design family is the growth of our firm."))), external_react_default.a.createElement("div", {
    className: "column column-right"
  }, external_react_default.a.createElement("div", {
    className: "slider-section"
  }, external_react_default.a.createElement("img", {
    src: "http://aradesign.in/content/people/amey.jpg",
    alt: ""
  }), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Amey Dahanukar"), external_react_default.a.createElement("br", null), "Principal Architect")))), external_react_default.a.createElement("div", {
    className: "scroll-text"
  }, "Scroll"), external_react_default.a.createElement("div", {
    class: "container-arrow__arrow"
  })));
}

/* harmony default export */ var about_detail = (AboutDetail);
// EXTERNAL MODULE: ./components/header/index.js
var header = __webpack_require__("QyV/");

// EXTERNAL MODULE: ./components/screen-pattern/index.js
var screen_pattern = __webpack_require__("jPlQ");

// CONCATENATED MODULE: ./pages/about.js







var about_People = function People() {
  return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement("div", {
    class: "main-container"
  }, external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(header["a" /* default */], null))), external_react_default.a.createElement("div", {
    className: "super-container people-details"
  }, external_react_default.a.createElement(about_detail, null), external_react_default.a.createElement(people_detail, null), external_react_default.a.createElement(people_list, null))), external_react_default.a.createElement(screen_pattern["a" /* default */], null));
};

/* harmony default export */ var about = __webpack_exports__["default"] = (about_People);

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MVNz":
/***/ (function(module, exports) {



/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B+aG");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("m8lf");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("92Fa");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column column-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Ru7L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return triangleImage; });
var triangleImage = 'http://aradesign.in/content/common/menu-img.png';

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fBJr":
/***/ (function(module, exports) {

module.exports = require("react-scramble");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jMFD":
/***/ (function(module, exports) {



/***/ }),

/***/ "jPlQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("B+aG");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("m8lf");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("scTn");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);





var Pattern = function Pattern() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "screen-pattern"
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Pattern);

/***/ }),

/***/ "je4i":
/***/ (function(module, exports) {



/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "m8lf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jMFD");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://aradesign.in/content/common/logo.png",
    alt: "Ara"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qddP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-wheel-handler");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "scTn":
/***/ (function(module, exports) {



/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zYTr":
/***/ (function(module, exports) {



/***/ })

/******/ });