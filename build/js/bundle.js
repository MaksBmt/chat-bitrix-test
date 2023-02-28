/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
class Dropdown {
  constructor(container) {
    this.container = container;

    this.list = this.container.querySelectorAll('.faq__item');
    this.dropdownButtonClickHandler = this.dropdownButtonClickHandler.bind(this);
  }

  init() {
    this.list.forEach((item) => {
      item.addEventListener('click', this.dropdownButtonClickHandler);
    });
  }

  dropdownButtonClickHandler(evt) {
    const button = evt.target;

    if (button.classList.contains('faq__caption')) {
      const buttonBox = button.closest('li');

      if (buttonBox.classList.contains('faq__item--closed') === true) {
        this.closedBox()
        buttonBox.classList.remove('faq__item--closed');
      } else {
        buttonBox.classList.add('faq__item--closed');
      }
    }
  }

  closedBox() {
    this.list.forEach((item) => {
      if (item.classList.contains('faq__item--closed') !== true) {
        item.classList.add('faq__item--closed');
      }
    });
  }
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
class Header {
  constructor(container) {
    this.container = container;

    this.navMenu = this.container.querySelector(`.nav-menu`);
    this.navMenuToggle = this.navMenu.querySelector(`.nav-menu__button`);
    this.heightHeader = this.container.offsetHeight;
    this.widthContainer = this.container.offsetWidth;
    this.list = this.container.querySelectorAll(`.site-list__item--parent`);

    this.menuButtonClickHandler = this.menuButtonClickHandler.bind(this);
    this.navMenuEscKeyHandler = this.navMenuEscKeyHandler.bind(this);
    this.mouseoverMenuHandler = this.mouseoverMenuHandler.bind(this);
    this.mouseoutMenuHandler = this.mouseoutMenuHandler.bind(this);
  }

  init() {
    this.setMenuToggle();

    if (this.widthContainer > 768) {
      this.list.forEach((item, index) => {
        item.addEventListener(`mouseover`, this.mouseoverMenuHandler.bind(this, item));
        item.addEventListener(`mouseout`, this.mouseoutMenuHandler.bind(this, index));
      });
    }
  }

  setMenuToggle() {
    this.navMenuToggle.addEventListener(`click`, this.menuButtonClickHandler);
  }

  openNavMenu() {
    this.navMenu.classList.remove(`nav-menu--closed`);
    this.navMenu.classList.add(`nav-menu--opened`);
  }

  closeNavMenu() {
    this.navMenu.classList.remove(`nav-menu--opened`);
    this.navMenu.classList.add(`nav-menu--closed`);
  }

  menuButtonClickHandler(evt) {
    evt.preventDefault();

    if (this.navMenu.classList.contains(`nav-menu--closed`)) {
      this.openNavMenu();
      document.addEventListener(`keydown`, this.navMenuEscKeyHandler);
    } else {
      this.closeNavMenu();
    }
  }

  navMenuEscKeyHandler(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this.closeNavMenu();
      document.removeEventListener(`keydown`, this.navMenuEscKeyHandler)
    }
  }

  mouseoverMenuHandler(item) {
    const targetSubMenu = item.querySelector(`ul`);

    if (this.heightSubMenu !== null) {
      const widthSubMenu = targetSubMenu.offsetWidth;
      const headerWrap = this.container.querySelector(`.header__wrap`);

      const is_style = headerWrap.currentStyle || window.getComputedStyle(headerWrap, null);
      const widthHeaderWrap = headerWrap.clientWidth - parseInt(is_style.paddingLeft)

      const widthCarrent = item.getBoundingClientRect().left + widthSubMenu;

      if (widthCarrent > widthHeaderWrap) {
        targetSubMenu.style.left = -(widthCarrent - widthHeaderWrap) + "px";
      }

      const heightSubMenu = targetSubMenu.offsetHeight;
      item.style.borderBottom = `3px solid #ffffff`;
      return this.container.style.height = this.heightHeader + heightSubMenu + "px";
    }
  }

  mouseoutMenuHandler(index) {
    this.list[index].style.borderBottom = `none`;
    this.container.style.height = this.heightHeader + "px";
  }
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.js */ "./src/dropdown.js");



const headerBox = document.querySelector('header');
const header = new _header_js__WEBPACK_IMPORTED_MODULE_0__["default"](headerBox);
header.init();

const dropdownBox = document.querySelector('.faq');
const dropdown = new _dropdown_js__WEBPACK_IMPORTED_MODULE_1__["default"](dropdownBox);
dropdown.init();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map