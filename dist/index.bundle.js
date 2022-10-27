/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mainContainer {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0;\n}\n.initialContent {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n}\n.displayBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 48px;\n    width: 48px;\n    border: 1px solid black;\n}\n.ship {\n    background-color: slategray;\n}\n.hit {\n    background-color: darkred;\n}\n.miss {\n    background-color: aquamarine;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,SAAS;AACb;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,cAAc;AAClB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.mainContainer {\n    display: flex;\n    justify-content: center;\n    margin: 100px 0;\n}\n.initialContent {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n}\n.displayBoard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 48px;\n    width: 48px;\n    border: 1px solid black;\n}\n.ship {\n    background-color: slategray;\n}\n.hit {\n    background-color: darkred;\n}\n.miss {\n    background-color: aquamarine;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// board logic

const BoardFactory = () => {
    const board = [];
    const create = (length) => {
        for (let i = 0; i<length; i++) {
            let row = [];
            board.push(row);
            for (let j = 0; j<length; j++) {
                row.push(0);
            }
        }
        return board;
    }
    const shipArray = [];
    const placeShip = (object, axis, x, y) => {
        if (checkOnBoard(object.length, axis, x, y) || 
        checkPlace(object.length, axis, x, y)) {
            return false;
        }
        if (axis) {
            for (let i = 0; i<object.length; i++) {
                board[x+i][y] = object.marker;
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = object.marker;
            }
        }
        shipArray.push(object);
        return true;
    }
    const checkPlace = (length, axis, x, y) => {
        let array = [];
        let value;
        if (axis) {
            for (let i = 0; i<length; i++) {
                array.push(board[x+i][y] > 0);
            }
        } else {
            for (let i = 0; i<length; i++) {
                array.push(board[x][y+i] > 0);
            }
        }
        value = array.find(index => {
            return index == true;
        });
        return value;
    }
    const checkOnBoard = (length, axis, x, y) => {
        let value;
        if (axis) {
            value = x + length;
            return value > board.length;
        } else {
            value = y + length;
            return value > board[x].length;
        }
    }
    const _whichShip = (input) => {
        return shipArray.find(index => index.marker === input);
    }
    // pretty sure allSunk is working, 
    // but I didn't manipulate the board to have all the ships sunk to test it fyi !!!
    const allSunk = () => shipArray.every(index => index.isSunk() === true);
    const missedAttacks = [];
    const _addMiss = (x, y) => missedAttacks.push([x, y]);
    const _updateBoard = (x, y, value) => board[x][y] = value;
    const _updateMiss = (x, y) => {
        _addMiss(x, y);
        _updateBoard(x, y, -1);
    }
    const _updateHit = (x, y) => {
        const theShip = _whichShip(board[x][y]);
        const sunk = theShip.hitPlus();
        _updateBoard(x, y, (board[x][y] + 10));
        return sunk;
    }
    const _checkAttack = (x, y) => {
        if (board[x][y] > 10 || board[x][y] == -1) {
            return false;
        }
        return true;
    }
    const _launchAttack = (x, y, obj) => {
        obj.value = board[x][y];
        if (obj.value > 0) {
            const sunk = _updateHit(x, y);
            if (sunk) {
                obj.sunk = true;
                if (allSunk()) {
                    obj.allSunk = true;
                    console.log('Game over');
                    // need to fire gameOver function
                    // what all is needed inside?
                };
            }
            obj.ship = obj.value;
            // check which ship it is
            // run hit() on that ship
            // see if it sunk and update accordingly - send to DOM fn to update display?
            // thinking that you call a DOM fn with "sunk" boolean.. !!!
            // update board
            // send signal to DOM to update grid with hit mark !!!
            // needs to switch turns !!!
            // change return from value to true
            obj.value = true
        } else {
            // add miss to array
            // update gameboard w/ -1 (for miss)
            _updateMiss(x, y);
            obj.value = false;
            // send signal to DOM function to update grid with miss mark !!!
            // needs to switch turns !!!
        }
        return obj;
    }
    const receiveAttack = (x, y) => {
        const obj = {
            sunk: false,
            allSunk: false,
        };
        if (_checkAttack(x, y)) {
            return _launchAttack(x, y, obj);
        } 
        // need to loop back -> need user to give new coordinates
        obj.value = 0;
        return obj;
    }   
    return { board, create, placeShip, checkPlace, checkOnBoard, receiveAttack, allSunk };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardFactory);

/***/ }),

/***/ "./src/boardDOM.js":
/*!*************************!*\
  !*** ./src/boardDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildBoard": () => (/* binding */ buildBoard),
/* harmony export */   "displayShips": () => (/* binding */ displayShips),
/* harmony export */   "markCell": () => (/* binding */ markCell)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _placeFleetDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeFleetDOM */ "./src/placeFleetDOM.js");




// render gameboards on page
const buildBoard = (object, boolean, funct) => {
    const board = object.board;
    const displayBoard = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'displayBoard'});
    for (let i = 0; i<board.length; i++) {
        const gridCol = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `col`, id: `${i}`});
        displayBoard.appendChild(gridCol);
        for (let j = 0; j < board[i].length; j++) {
            const gridCell = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `cell`, id: `${i}${j}`});
            if (boolean) {
                // need to be able to delineate event listener for place ships and other for actual gameplay
                // hover(gridCell, object);
                // gridCell.addEventListener('click', (e) => {
                //     funct([i, j], e);
                // })
            }
            gridCol.appendChild(gridCell);
        }
    }
    return displayBoard;
}
const displayShips = (object, boardDOM) => {
    const board = object.board;
    for (let i = 0; i<board.length; i++) {
        for (let j = 0; j<board[i].length; j++) {
            if (board[i][j] > 0) {
                boardDOM.children[i].children[j].classList.add('ship');
            }
        }
    }
}
const markCell = (x, y, boolean, boardDOM) => {
    if (boolean) {
        boardDOM.children[x].children[y].classList.add('hit');
    } else {
        boardDOM.children[x].children[y].classList.add('miss');
    }
}




/***/ }),

/***/ "./src/comsDOM.js":
/*!************************!*\
  !*** ./src/comsDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "com": () => (/* binding */ com)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _initialDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialDOM */ "./src/initialDOM.js");



// build communication div - for displaying updates / prompts
const com = (() => {
    const commC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'commContainer'});

    const buildComms = () => {
        const comms = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'comms'});
        comms.textContent = `comms go here`;
        commC.appendChild(comms);
        return commC;
    }
    const instruct = (player, ship) => {
        const comms = commC.firstChild;
        comms.textContent = `Admiral ${player.codename}: Place your ${ship}.`;
    }
    const shipArray = ['empty', 'submarine', 'patrol boat', 'cruiser', 'destroyer', 'battle carrier'];
    const pronounArray = [{0: 'you', 1: 'their'}, {0: 'they', 1: 'your'}];
    const updateText = (playerName, boolean, hit, sunk, ship, player) => {
        let value = player ? pronounArray[0] : pronounArray[1];
        if (boolean) {
            commC.firstChild.textContent = `Attention ${playerName.codename}: Error! Must select new coordinates.`
        } else if (sunk === true) {
            commC.firstChild.textContent = `${playerName.codename} fires a shot and ${value[0]} sunk ${value[1]} ${shipArray[ship]}!`;
        }
        else {
            let strike = hit ? `lands a strike!`: `misses!`
            commC.firstChild.textContent = `${playerName.codename} attacks and ${strike}`;
        }
    }
    const endGame = (player, restartFn) => {
        const mainC = commC.nextElementSibling;
        // clear comms and main
        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(commC);
        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
        // build content
        const endC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'endContainer'});
        const banner = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'banner'});
        banner.textContent = 'Game Over!'
        const winner = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'winner'});
        winner.textContent = `Winner: ${player.codename}`;
        const playAgain = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'playAgain'});
        playAgain.textContent = `Play Again`;
        mainC.appendChild(endC);
        endC.appendChild(banner);
        endC.appendChild(winner);
        endC.appendChild(playAgain);

        // add listener
        playAgain.addEventListener('click', () => {
            // clear content
            // clearDiv(mainC.parentElement.parentElement);
            mainC.parentElement.removeChild(mainC);
            //
            restartFn();
            //
            (0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__.makeInitialLite)();
        });
    }
    return { buildComms, instruct, updateText, endGame };
})();



/***/ }),

/***/ "./src/gameloop.js":
/*!*************************!*\
  !*** ./src/gameloop.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _placeFleet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeFleet */ "./src/placeFleet.js");
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boardDOM */ "./src/boardDOM.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");
/* harmony import */ var _placeFleetDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placeFleetDOM */ "./src/placeFleetDOM.js");








// game loop
// initialize w/ p1 and gameboard1
// place ships
// create p2 and gameboard2
// place ships
// turn logic
// -> take coordinates, confirm legal play (not repeat)
// -> launch attack
//      -> hit
//            -> sunk?
//                -> yes: -> all sunk?
//                    -> yes: end game (display)
//                    -> no: switch turns
//                -> no: switch turns
//      -> miss
//          -> switch turns

const p1 = (0,_players__WEBPACK_IMPORTED_MODULE_1__.PlayerFactory)('Alfredo');
const gb1 = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
gb1.create(10);
const ship1a = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(5);
const ship1b = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(4);
const ship1c = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(3);
gb1.placeShip(ship1a, false, 0, 0);
gb1.placeShip(ship1b, false, 2, 0);
gb1.placeShip(ship1c, false, 4, 0);

const p2 = (0,_players__WEBPACK_IMPORTED_MODULE_1__.computer)();
const gb2 = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
gb2.create(10);
const ship2a = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(5);
const ship2b = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(4);
const ship2c = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.ShipFactory)(3);
gb2.placeShip(ship2a, false, 5, 0);
gb2.placeShip(ship2b, false, 7, 0);
gb2.placeShip(ship2c, false, 9, 0);

// create players and their respective gameboard
const initialize = (playerName) => {
    let player;
    if (!playerName) {
        player = (0,_players__WEBPACK_IMPORTED_MODULE_1__.computer)();
    } else {
        player = (0,_players__WEBPACK_IMPORTED_MODULE_1__.PlayerFactory)(`${playerName}`);
    }
    const gb = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
    gb.create(10);
    const fleet = (0,_ship__WEBPACK_IMPORTED_MODULE_2__.buildFleet)();

    return { player, gb, fleet }
}

const loop = (() => {
    let playerTurn = true;
    let playerOne;
    let playerTwo;
    let playerBoardDOM;
    let compBoardDOM;
    const switchTurns = () => playerTurn = !playerTurn;
    const initialTurn = (board1, board2, parentDOM) => {
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.buildBoard)(board1, false));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.displayShips)(board1, parentDOM.firstChild);
        playerBoardDOM = parentDOM.firstChild;
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.buildBoard)(board2, true, loop.turn));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.displayShips)(board2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild;
    }
    const startGame = (callsign, parentDOM) => {
        const p1 = initialize(`${callsign}`);
        const p2 = initialize(false);
        console.log(p1);
        console.log(p2);
        // have AI place fleet, randomly
        // needs to be checked !!!
        // p2.player.placeFleet(p1);
        p2.player.placeFleet(p2);
        // needs to invoke fn for user to place their ships... !!!
        (0,_placeFleetDOM__WEBPACK_IMPORTED_MODULE_6__.main)(parentDOM, p1);
        // parentDOM.appendChild(buildBoard(p1.gb, true, ((x, e) => {
        //     console.log(x);
        //     console.log(e.target.id);
        //     console.log(e.target);
        //     hover(e.target, p1.gb);
        // })));
        // addHover(p1.gb);
        // initial turn ?
        // need to pass in p1.board and p2.board (change initial turn fn)
        console.log(p2.gb.board);
        // initialTurn(p1.gb, p2.gb, parentDOM)
        playerOne = p1;
        playerTwo = p2;
        return { p1, p2 }
    }
    const restartFn = () => {
        // new players
        // new gameboards
        // new ship locations
        // display ^^these
        // -> go to initial page, need user input
        // -> go to place ships page, need user input
        // -> go to main page, let battle begin
        // what else?
        console.log('restartfn'); 
    }
    let currentPlayer = {};
    // do i need ? !!!
    let currentResult = {};
    const turn = (input) => {
        currentPlayer = playerTurn ? playerOne.player : playerTwo.player;
        let result;
        // does it need a check?
        if (playerTurn) {
            result = playerTwo.gb.receiveAttack(input[0], input[1]);
            if (result.value === 0) {
                // aka user clicked on coordinates for a second time
                _comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.updateText(currentPlayer, true, "");
                // dom function prompting user to try new coordinates
            } else {
                // user clicked on new coordinates, turn can complete
                // display the move on ai gameboard
                (0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.markCell)(input[0], input[1], result.value, compBoardDOM);
                _comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.updateText(currentPlayer, false, result.value, result.sunk, result.ship, true);
                // check if sunk
                // display different message...
                switchTurns();
            }
        } else {
            // ai player makes attack
            // display the move on p1 gameboard
            result = playerTwo.player.attack(playerOne.gb);
            (0,_boardDOM__WEBPACK_IMPORTED_MODULE_4__.markCell)(result.coord[0], result.coord[1], result.obj.value, playerBoardDOM);
            _comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.updateText(currentPlayer, false, result.obj.value, result.obj.sunk, result.obj.ship, false);
            switchTurns();
        }
        if (!playerTurn && (!result.allSunk)) {
            setTimeout(() => {
                turn(false); 
            }, 2000);
        }
        if (result.allSunk) {
            // switch turns (back to winning player)
            switchTurns();
            // run gameover fn
            console.log('loop throwing game over');
            // needs restartFn !!!
            _comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.endGame(currentPlayer, restartFn);
        }
    }
    return { initialTurn, startGame, turn };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loop);

/***/ }),

/***/ "./src/initialDOM.js":
/*!***************************!*\
  !*** ./src/initialDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeInitial": () => (/* binding */ makeInitial),
/* harmony export */   "makeInitialLite": () => (/* binding */ makeInitialLite)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/github.svg */ "./src/icons/github.svg");
/* harmony import */ var _icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/linkedin.svg */ "./src/icons/linkedin.svg");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");






// build initial page
// pt 1 - header and footer 
// pt 2 - body (title, instructions, user name input, start btn)

//
const header = () => {
    const headC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'headerContainer'});
    const title = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'headerTitle'});
    title.textContent = 'BATTLESHIP';
    headC.appendChild(title);
    return headC;
}
//
const footer = () => {
    const footC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'footerContainer'});
    const footerBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "footerBox"});
    const linkContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "linkContainer"});
    const gitLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: "https://github.com/connorwarme", "alt": "Github Profile", "target": "_blank"});
    const gitIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: 'gitIcon'});;
    gitIcon.src = _icons_github_svg__WEBPACK_IMPORTED_MODULE_1__;
    gitIcon.alt = "Github Profile";
    const linkLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: "https://www.linkedin.com/in/connor-warme-103a09167", "alt": "LinkedIn Profile", "target": "_blank"});
    const linkIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: 'linkIcon'});
    linkIcon.src = _icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__;
    linkIcon.alt = "LinkedIn Profile";
    const textContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "textContainer"});
    textContainer.textContent = "Peregrinning Productions";

    // append it all together
    footC.appendChild(footerBox);
    footerBox.appendChild(linkContainer);
    linkContainer.appendChild(gitLink);
    gitLink.appendChild(gitIcon);
    linkContainer.appendChild(linkLink);
    linkLink.appendChild(linkIcon);
    footerBox.appendChild(textContainer);

    return footC;
}
// 
const mainContent = () => {
    const mainC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'mainContainer'});
    const initialC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'initialContent'});
    const infoC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructionsContainer'});
    const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructions'});
    instruct.textContent = 'Eliminate the enemy';
    const inputC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'inputContainer'});
    const input = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type: 'text', id: 'username', class: 'inputField', placeholder: 'Player 1'});
    const inputLabel = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {for: 'username'});
    inputLabel.textContent = 'Username:';
    const startC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'startContainer'});
    const start = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'start'});
    start.textContent = 'Start Game!'

    // listener and helpers
    const clearMain = () => (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
    
    const startFn = () => {
        // need a check if input is empty !!!
        const callsign = input.value;
        // clear main container -> prep for board display
        clearMain();
        // initialize game loop?
        // loop.initialTurn(mainC);
        _gameloop__WEBPACK_IMPORTED_MODULE_4__["default"].startGame(callsign, mainC);
    }
    start.addEventListener('click', () => {
        startFn();
    })

    // append it all together
    mainC.appendChild(initialC);
    initialC.appendChild(infoC);
    infoC.appendChild(instruct);
    initialC.appendChild(inputC);
    inputC.appendChild(inputLabel);
    inputC.appendChild(input);
    initialC.appendChild(startC);
    startC.appendChild(start);

    return mainC;
}

//
const makeInitial = () => {
    const page = document.querySelector('body');
    const body = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'body'});
    body.appendChild(header());
    body.appendChild(_comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.buildComms());
    body.appendChild(mainContent());
    body.appendChild(footer());
    page.appendChild(body);
}
const makeInitialLite = () => {
    const body = document.querySelector('div.body');
    body.insertBefore(mainContent(), body.children[2]);
}


/***/ }),

/***/ "./src/placeFleet.js":
/*!***************************!*\
  !*** ./src/placeFleet.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
 

// from initial, go to 1 board (empty)
// above, a button to switch axis
// above, a communication bar (e.g. "Place your carrier")
//
// hover over board, shadow outline of ship size, rotates when axis btn clicked
// click on board, places ship according to those coordinates
// goes through each ship
// after last ship, takes board and makes it p1.gb.board
// page fades out, then load loop.initialturn 

const place = (() => {
    const createEmpty = () => {
        const board = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
        board.create(10);
        return board;
    }
    const ship = (board, ship, input) => {
        // call dom function -> display instruction: 'place your ship'
        if (!(board.placeShip(ship, true, input[0], input[1]))) {
            console.log('not valid ese!')
        } else {
        console.log('that went..?');
        }
        console.log(board);

    }
    const fleet = (player, input) => {
        // need to only create ONE new board, and get all the ships placed on it.
        const board = createEmpty();
        ship(board, player.fleet.carrier, input)
        // const shipArray = Object.keys(player.fleet);
        // shipArray.forEach(ship => {

        // })
    }
    return { ship, fleet };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (place);

/***/ }),

/***/ "./src/placeFleetDOM.js":
/*!******************************!*\
  !*** ./src/placeFleetDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hover": () => (/* binding */ hover),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardDOM */ "./src/boardDOM.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");




let axis = true;
const currentAxis = () => {
    return axis;
}
const createPlaceDisplay = () => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "placeContainer"});
    const buttonC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'placeBtnContainer'});
    const axisBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'axisBtn'});
    axisBtn.textContent = `Axis: X`
    const randomBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'randomBtn'});
    randomBtn.textContent = 'Random';

    // add listeners
    axisBtn.addEventListener('click', () => {
        axis = !axis;
        let text = axis ? 'X' : 'Y';
        axisBtn.textContent = `Axis: ${text}`;
        // delete current board
        currentDOM.removeChild(currentDOM.lastChild);
        // build new board w/ correct listeners
        perShip(currentDOM, currentBoard, currentShip);
    })
    randomBtn.addEventListener('click', () => {
        console.log('place fleet randomly!');
    })

    // append it all together
    container.appendChild(buttonC);
    buttonC.appendChild(axisBtn);
    buttonC.appendChild(randomBtn);

    return container;
}
// 
const checkCell = (gameboard, ship, axis, x, y) => {
    if (gameboard.checkOnBoard(ship.length, axis, x, y) || 
    gameboard.checkPlace(ship.length, axis, x, y)) {
        return false;
    }
    return true;
}
const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    let newId;
    for (let i = 0; i < length; i++) {
        if (axis) {
            newId = `${Number(coord[0])+i}${coord[1]}`;
        } else {
            newId = `${coord[0]}${Number(coord[1])+i}`;
        }
        const cell = document.getElementById(newId);
        cell.style.backgroundColor = "slategray";
    }
}
const clickListener = (x, y) => {
    // should I make this it's own function? !!!
    currentObj.gb.placeShip(currentShip, axis, x, y);
    count++;
    currentDOM.removeChild(currentDOM.lastChild);
    nextShip(currentDOM, currentObj);
}
const click = (element, gameboard, ship, x, y) => {
    if (checkCell(gameboard, ship, currentAxis(), x, y)) {
        element.addEventListener('click', () => {
            clickListener(x, y);
            console.log(currentAxis());
        })
    }
}
const hover = (element, gameboard, ship, x, y) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        if (checkCell(gameboard, ship, currentAxis(), x, y)) {
            element.style.cursor = "pointer";
            highlightLength(element, ship.length);
        } else {
            element.style.cursor = "not-allowed";
            element.style.backgroundColor = "red";
        }
    })
    element.addEventListener('mouseout', () => {
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            if (cell.classList.length == 1) {
                cell.style.backgroundColor = "white";
            } else if (cell.classList.length == 2) {
                cell.style.backgroundColor = "slategray";
            }
        })
    })
}
const addCellListeners = (gameboard, ship) => {
    const cellArray = Array.from(document.querySelectorAll('div.cell'));
    cellArray.forEach(cell => {
        const x = Number(cell.id.charAt(0));
        const y = Number(cell.id.charAt(1));
        hover(cell, gameboard, ship, x, y);
        click(cell, gameboard, ship, x, y);
    })
}
let currentObj;
let currentBoard;
let currentShip;
let fleetKeys;
let currentDOM;
let count = 0;
const updateCurrents = (parent, board, ship) => {
    currentDOM = parent;
    currentBoard = board;
    currentShip = ship;
}
const nextShip = (parentDOM, playerObj) => {
    console.log(count);
    if (count < 5) {
        _comsDOM__WEBPACK_IMPORTED_MODULE_2__.com.instruct(playerObj.player, fleetKeys[count]);
        perShip(parentDOM, playerObj.gb, playerObj.fleet[fleetKeys[count]]);
    } else {
        console.log('next step of gameloop!');
    }
}
const perShip = (parentDOM, playerBoard, ship) => {
    updateCurrents(parentDOM, playerBoard, ship);
    parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.buildBoard)(playerBoard, true));
    console.log(currentDOM);
    (0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.displayShips)(currentBoard, currentDOM.children[1]);
    addCellListeners(playerBoard, ship);
}
const main = (parentDOM, playerObj) => {
    parentDOM.appendChild(createPlaceDisplay());
    currentObj = playerObj;
    // update all currents? then a smaller one to run on each perShip? !!!
    fleetKeys = Object.keys(playerObj.fleet);
    nextShip(parentDOM, playerObj);
}


/***/ }),

/***/ "./src/players.js":
/*!************************!*\
  !*** ./src/players.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerFactory": () => (/* binding */ PlayerFactory),
/* harmony export */   "computer": () => (/* binding */ computer)
/* harmony export */ });
// player factory and AI logic

const PlayerFactory = (codename) => {
    let wins = 0;
    const attack = (coordinates, gameboard) => {
        return gameboard.receiveAttack(coordinates[0], coordinates[1]);
    }
    const addWin = () => wins += 1;
    return { codename, wins, attack, addWin };
}
const computer = () => {
    const ai = PlayerFactory('AI Player');
    const _generate = () => Math.floor(Math.random() * 10);
    const _generateRandomAttack = () => {
        let x = _generate();
        let y = _generate();
        return [x, y];
    };
    const attacksArray = [];
    const _available = (array) => {
        let value = true;
        for (let i = 0; i<attacksArray.length; i++) {
            if (attacksArray[i][0] === array[0]) {
                if (attacksArray[i][1] === array[1]) {
                    value = false;
                }
            }
        }
        return value;
    }
    const _generateCoord = () => {
        let coord = _generateRandomAttack();
        while (!(_available(coord))) {
            coord = _generateRandomAttack();
        }
        return coord;
    }
    const attack = (gameboard) => {
            const coord = _generateCoord();
            // add coordinates to attacksArray
            // launch attack on opposition's board
            attacksArray.push(coord);
            const obj = {};
            obj.coord = coord;
            obj.obj = gameboard.receiveAttack(coord[0], coord[1]);
            return obj;
    }
    const _randomAxis = () => {
        const axis = Math.floor(Math.random() * 2);
        if (axis == 0) {
            return true;
        }
        return false;
    }
    const placeFleet = (player) => {
        // i think this can be used for either player...maybe make a button for user (in initial) !!!
        // for each ship, randomly generate coordinates and axis
        const fleetKeys = Object.keys(player.fleet);
        fleetKeys.forEach(ship => {
            let axis = _randomAxis();
            let coord = _generateRandomAttack();
            while (!(player.gb.placeShip(player.fleet[ship], axis, coord[0], coord[1]))) {
                axis = _randomAxis();
                coord = _generateRandomAttack();
            };
        });
    };
    return Object.assign({}, ai, { attack }, { placeFleet });
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShipFactory": () => (/* binding */ ShipFactory),
/* harmony export */   "buildFleet": () => (/* binding */ buildFleet)
/* harmony export */ });
// ship logic

const ShipFactory = (input, mark) => {
    const length = input;
    let hits = 0;
    let sunk = false;
    let marker = length;
    if (mark) {
        marker = mark;
    }
    const getHits = () => {
        return hits;
    }
    const hit = () => {
        hits += 1;
    }
    const isSunk = () => {
        return length <= hits ? sunk = true : sunk = false;
    }
    // added this - can I set hit and isSunk to private, and only export this one? !!!
    const hitPlus = () => {
        hit();
        return isSunk();
    }
    return { length, sunk, marker, getHits, hit, isSunk, hitPlus}
};
const buildFleet = () => {
    const submarine = ShipFactory(3, 1);
    const patrol = ShipFactory(2);
    const destroyer = ShipFactory(3);
    const battleship = ShipFactory(4);
    const carrier = ShipFactory(5);
    return { submarine, patrol, destroyer, battleship, carrier }
}



/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDiv": () => (/* binding */ clearDiv),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
// DOM helper functions
// -> create DOM element and add attributes
// is there a more effective/efficient way to do this?!
const createElement = (type, attributes) => {
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    return newElement;
}
const setAttributes = (element, attributes) => {
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    })
}
const clearDiv = (div) => {
    while (div.children.length > 0) {
        div.removeChild(div.firstChild);
    }
}


/***/ }),

/***/ "./src/icons/github.svg":
/*!******************************!*\
  !*** ./src/icons/github.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eb3d39757ca9be726d6.svg";

/***/ }),

/***/ "./src/icons/linkedin.svg":
/*!********************************!*\
  !*** ./src/icons/linkedin.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbcb81dd730af01d5340.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _initialDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialDOM */ "./src/initialDOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__.makeInitial)();

// loop.turn([5, 5]);
// loop.turn([0, 0]);


// const ShipFactory = (input) => {
//     const length = input;
//     let hits = 0;
//     let sunk = false;
//     const getHits = () => {
//         return hits;
//     }
//     const hit = () => {
//         hits += 1;
//     }
//     const isSunk = () => {
//         return length <= hits ? sunk = true : sunk = false;
//     }
//     // added this - can I set hit and isSunk to private, and only export this one? !!!
//     const hitPlus = () => {
//         hit();
//         return isSunk();
//     }
//     return { length, sunk, getHits, hit, isSunk, hitPlus}
//     };
// const ship = ShipFactory(4);

// const boardFactory = () => {
//     const board = [];
//     const create = (length) => {
//         for (let i = 0; i<length; i++) {
//             let row = [];
//             board.push(row);
//             for (let j = 0; j<length; j++) {
//                 row.push(0);
//             }
//         }
//         return board;
//     }
//     const shipArray = [];
//     const placeShip = (object, axis, x, y) => {
//         if (_checkOnBoard(object.length, axis, x, y) || 
//         _checkPlace(object.length, axis, x, y)) {
//             return `Denied.`;
//         }
//         if (axis) {
//             for (let i = 0; i<object.length; i++) {
//                 board[x+i][y] = object.length;
//         }} else {
//             for (let i = 0; i<object.length; i++) {
//                 board[x][y+i] = object.length;
//             }
//         }
//         shipArray.push(object);
//         return `Placed.`
//     }
//     const _checkPlace = (length, axis, x, y) => {
//         let array = [];
//         let value;
//         if (axis) {
//             for (let i = 0; i<length; i++) {
//                 array.push(board[x+i][y] > 0);
//             }
//         } else {
//             for (let i = 0; i<length; i++) {
//                 array.push(board[x][y+i] > 0);
//             }
//         }
//         value = array.find(index => {
//             return index == true;
//         });
//         return value;
//     }
//     const _checkOnBoard = (length, axis, x, y) => {
//         let value;
//         if (axis) {
//             value = x + length;
//             return value > board.length;
//         } else {
//             value = y + length;
//             return value > board[x].length;
//         }
//     }
//     const _whichShip = (input) => {
//         return shipArray.find(index => index.length === input);
//     }
//     // pretty sure allSunk is working, 
//     // but I didn't manipulate the board to have all the ships sunk to test it fyi !!!
//     const allSunk = () => shipArray.every(index => index.isSunk() === true);
//     const missedAttacks = [];
//     const _addMiss = (x, y) => missedAttacks.push([x, y]);
//     const _updateBoard = (x, y, value) => board[x][y] = value;
//     const _updateMiss = (x, y) => {
//         _addMiss(x, y);
//         _updateBoard(x, y, -1);
//     }
//     const _updateHit = (x, y) => {
//         const theShip = _whichShip(board[x][y]);
//         const sunk = theShip.hitPlus();
//         _updateBoard(x, y, (board[x][y] + 10));
//         return sunk;
//     }
//     const _checkAttack = (x, y) => {
//         if (board[x][y] > 10 || board[x][y] == -1) {
//             return false;
//         }
//         return true;
//     }
//     const _launchAttack = (x, y) => {
//         let value = board[x][y];
//         if (value > 0) {
//             const sunk = _updateHit(x, y);
//             if (sunk) {
//                 if (allSunk()) {
//                     console.log('Game over');
//                     // need to fire gameOver function
//                     // what all is needed inside?
//                 };
//             }
//             // check which ship it is
//             // run hit() on that ship
//             // see if it sunk and update accordingly - send to DOM fn to update display?
//             // thinking that you call a DOM fn with "sunk" boolean.. !!!
//             // update board
//             // send signal to DOM to update grid with hit mark !!!
//             // needs to switch turns !!!
//             return value;
//         } else {
//             // add miss to array
//             // update gameboard w/ -1 (for miss)
//             _updateMiss(x, y);
//             // send signal to DOM function to update grid with miss mark !!!
//             // needs to switch turns !!!
//             return 'Miss';
//         }
//     }
//     const receiveAttack = (x, y) => {
//         if (_checkAttack(x, y)) {
//             return _launchAttack(x, y);
//         } 
//         // need to loop back -> need user to give new coordinates
//         return false;
//     }   
//     return { create, placeShip, receiveAttack, allSunk };
// };
// const playerFactory = (codename) => {
//     const attack = (coordinates, gameboard) => {
//         return gameboard.receiveAttack(coordinates[0], coordinates[1]);
//     }
//     return { codename, wins: 0, attack };
// }
// const computer = () => {
//     const {codename} = playerFactory('Easy AI').codename;
//     const _generate = () => Math.floor(Math.random() * 10);
//     const _generateRandomAttack = () => {
//         let x = _generate();
//         let y = _generate();
//         return [x, y];
//     };
//     const attacksArray = [];
//     const _available = (array) => {
//         let value = true;
//         for (let i = 0; i<attacksArray.length; i++) {
//             if (attacksArray[i][0] === array[0]) {
//                 if (attacksArray[i][1] === array[1]) {
//                     value = false;
//                 }
//             }
//         }
//         return value;
//     }
//     const attack = (gameboard) => {
//         let coord = _generateRandomAttack();
//         if (_available(coord)) {
//             // add coordinates to attacksArray
//             // launch attack on opposition's board
//             attacksArray.push(coord);
//             return gameboard.receiveAttack(coord[0], coord[1]);
//         } else {
//             // try again - w/ new coordinates
//             attack();
//         }
//     }
//     return { codename, attack, wins: 0};
// }
// for testing purposes
// const gameboard = boardFactory();
// const board = gameboard.create(10);
// gameboard.placeShip(ship, true, 0, 0);
// const ship2 = ShipFactory(5);
// gameboard.placeShip(ship2, false, 4, 4);
// const ship3 = ShipFactory(3);
// gameboard.placeShip(ship3, false, 9, 0);
// console.log(board);
// const player = playerFactory('whamo');
// console.log(player);
// let ai = computer();
// export { ship, playerFactory };
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21zRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VGbGVldC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlRmxlZXRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmRpc3BsYXlCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmNvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2l0SWNvbixcXG4ubGlua0ljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbiAgICAgICAgY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgfX0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5K2ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3doaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gICAgfVxuICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4gICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSBfd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoc3Vuaykge1xuICAgICAgICAgICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4gICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4gICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgICAgIC8vIGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgICAgICB9IFxuICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgb2JqLnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9ICAgXG4gICAgcmV0dXJuIHsgYm9hcmQsIGNyZWF0ZSwgcGxhY2VTaGlwLCBjaGVja1BsYWNlLCBjaGVja09uQm9hcmQsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRmFjdG9yeTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IGhvdmVyIH0gZnJvbSAnLi9wbGFjZUZsZWV0RE9NJztcblxuLy8gcmVuZGVyIGdhbWVib2FyZHMgb24gcGFnZVxuY29uc3QgYnVpbGRCb2FyZCA9IChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGlzcGxheUJvYXJkJ30pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gfSk7XG4gICAgICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWB9KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBiZSBhYmxlIHRvIGRlbGluZWF0ZSBldmVudCBsaXN0ZW5lciBmb3IgcGxhY2Ugc2hpcHMgYW5kIG90aGVyIGZvciBhY3R1YWwgZ2FtZXBsYXlcbiAgICAgICAgICAgICAgICAvLyBob3ZlcihncmlkQ2VsbCwgb2JqZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZ1bmN0KFtpLCBqXSwgZSk7XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWRDb2wuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Qm9hcmQ7XG59XG5jb25zdCBkaXNwbGF5U2hpcHMgPSAob2JqZWN0LCBib2FyZERPTSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRET00uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgbWFya0NlbGwgPSAoeCwgeSwgYm9vbGVhbiwgYm9hcmRET00pID0+IHtcbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwgfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfSBmcm9tIFwiLi9pbml0aWFsRE9NXCI7XG5cbi8vIGJ1aWxkIGNvbW11bmljYXRpb24gZGl2IC0gZm9yIGRpc3BsYXlpbmcgdXBkYXRlcyAvIHByb21wdHNcbmNvbnN0IGNvbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29tbUMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdjb21tQ29udGFpbmVyJ30pO1xuXG4gICAgY29uc3QgYnVpbGRDb21tcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tbXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdjb21tcyd9KTtcbiAgICAgICAgY29tbXMudGV4dENvbnRlbnQgPSBgY29tbXMgZ28gaGVyZWA7XG4gICAgICAgIGNvbW1DLmFwcGVuZENoaWxkKGNvbW1zKTtcbiAgICAgICAgcmV0dXJuIGNvbW1DO1xuICAgIH1cbiAgICBjb25zdCBpbnN0cnVjdCA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY29tbXMgPSBjb21tQy5maXJzdENoaWxkO1xuICAgICAgICBjb21tcy50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7cGxheWVyLmNvZGVuYW1lfTogUGxhY2UgeW91ciAke3NoaXB9LmA7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFsnZW1wdHknLCAnc3VibWFyaW5lJywgJ3BhdHJvbCBib2F0JywgJ2NydWlzZXInLCAnZGVzdHJveWVyJywgJ2JhdHRsZSBjYXJyaWVyJ107XG4gICAgY29uc3QgcHJvbm91bkFycmF5ID0gW3swOiAneW91JywgMTogJ3RoZWlyJ30sIHswOiAndGhleScsIDE6ICd5b3VyJ31dO1xuICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAocGxheWVyTmFtZSwgYm9vbGVhbiwgaGl0LCBzdW5rLCBzaGlwLCBwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGxheWVyID8gcHJvbm91bkFycmF5WzBdIDogcHJvbm91bkFycmF5WzFdO1xuICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGBBdHRlbnRpb24gJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfTogRXJyb3IhIE11c3Qgc2VsZWN0IG5ldyBjb29yZGluYXRlcy5gXG4gICAgICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGZpcmVzIGEgc2hvdCBhbmQgJHt2YWx1ZVswXX0gc3VuayAke3ZhbHVlWzFdfSAke3NoaXBBcnJheVtzaGlwXX0hYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdHJpa2UgPSBoaXQgPyBgbGFuZHMgYSBzdHJpa2UhYDogYG1pc3NlcyFgXG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gYXR0YWNrcyBhbmQgJHtzdHJpa2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlbmRHYW1lID0gKHBsYXllciwgcmVzdGFydEZuKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5DID0gY29tbUMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAvLyBjbGVhciBjb21tcyBhbmQgbWFpblxuICAgICAgICBjbGVhckRpdihjb21tQyk7XG4gICAgICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAgICAgLy8gYnVpbGQgY29udGVudFxuICAgICAgICBjb25zdCBlbmRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW5kQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdiYW5uZXInfSk7XG4gICAgICAgIGJhbm5lci50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhJ1xuICAgICAgICBjb25zdCB3aW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3aW5uZXInfSk7XG4gICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7cGxheWVyLmNvZGVuYW1lfWA7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3BsYXlBZ2Fpbid9KTtcbiAgICAgICAgcGxheUFnYWluLnRleHRDb250ZW50ID0gYFBsYXkgQWdhaW5gO1xuICAgICAgICBtYWluQy5hcHBlbmRDaGlsZChlbmRDKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJcbiAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2xlYXIgY29udGVudFxuICAgICAgICAgICAgLy8gY2xlYXJEaXYobWFpbkMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIG1haW5DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbkMpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJlc3RhcnRGbigpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIG1ha2VJbml0aWFsTGl0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnVpbGRDb21tcywgaW5zdHJ1Y3QsIHVwZGF0ZVRleHQsIGVuZEdhbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgcGxhY2UgZnJvbSBcIi4vcGxhY2VGbGVldFwiO1xuaW1wb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tICcuL2NvbXNET00nO1xuaW1wb3J0IHsgaG92ZXIsIGFkZEhvdmVyLCBtYWluIH0gZnJvbSAnLi9wbGFjZUZsZWV0RE9NJztcblxuLy8gZ2FtZSBsb29wXG4vLyBpbml0aWFsaXplIHcvIHAxIGFuZCBnYW1lYm9hcmQxXG4vLyBwbGFjZSBzaGlwc1xuLy8gY3JlYXRlIHAyIGFuZCBnYW1lYm9hcmQyXG4vLyBwbGFjZSBzaGlwc1xuLy8gdHVybiBsb2dpY1xuLy8gLT4gdGFrZSBjb29yZGluYXRlcywgY29uZmlybSBsZWdhbCBwbGF5IChub3QgcmVwZWF0KVxuLy8gLT4gbGF1bmNoIGF0dGFja1xuLy8gICAgICAtPiBoaXRcbi8vICAgICAgICAgICAgLT4gc3Vuaz9cbi8vICAgICAgICAgICAgICAgIC0+IHllczogLT4gYWxsIHN1bms/XG4vLyAgICAgICAgICAgICAgICAgICAgLT4geWVzOiBlbmQgZ2FtZSAoZGlzcGxheSlcbi8vICAgICAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgIC0+IG1pc3Ncbi8vICAgICAgICAgIC0+IHN3aXRjaCB0dXJuc1xuXG5jb25zdCBwMSA9IFBsYXllckZhY3RvcnkoJ0FsZnJlZG8nKTtcbmNvbnN0IGdiMSA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IxLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMWEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAxYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDFjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYSwgZmFsc2UsIDAsIDApO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWIsIGZhbHNlLCAyLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFjLCBmYWxzZSwgNCwgMCk7XG5cbmNvbnN0IHAyID0gY29tcHV0ZXIoKTtcbmNvbnN0IGdiMiA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IyLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMmEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAyYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDJjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYSwgZmFsc2UsIDUsIDApO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmIsIGZhbHNlLCA3LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJjLCBmYWxzZSwgOSwgMCk7XG5cbi8vIGNyZWF0ZSBwbGF5ZXJzIGFuZCB0aGVpciByZXNwZWN0aXZlIGdhbWVib2FyZFxuY29uc3QgaW5pdGlhbGl6ZSA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gICAgbGV0IHBsYXllcjtcbiAgICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICAgICAgcGxheWVyID0gY29tcHV0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIgPSBQbGF5ZXJGYWN0b3J5KGAke3BsYXllck5hbWV9YCk7XG4gICAgfVxuICAgIGNvbnN0IGdiID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgZ2IuY3JlYXRlKDEwKTtcbiAgICBjb25zdCBmbGVldCA9IGJ1aWxkRmxlZXQoKTtcblxuICAgIHJldHVybiB7IHBsYXllciwgZ2IsIGZsZWV0IH1cbn1cblxuY29uc3QgbG9vcCA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICAgIGxldCBwbGF5ZXJPbmU7XG4gICAgbGV0IHBsYXllclR3bztcbiAgICBsZXQgcGxheWVyQm9hcmRET007XG4gICAgbGV0IGNvbXBCb2FyZERPTTtcbiAgICBjb25zdCBzd2l0Y2hUdXJucyA9ICgpID0+IHBsYXllclR1cm4gPSAhcGxheWVyVHVybjtcbiAgICBjb25zdCBpbml0aWFsVHVybiA9IChib2FyZDEsIGJvYXJkMiwgcGFyZW50RE9NKSA9PiB7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKGJvYXJkMSwgZmFsc2UpKTtcbiAgICAgICAgZGlzcGxheVNoaXBzKGJvYXJkMSwgcGFyZW50RE9NLmZpcnN0Q2hpbGQpO1xuICAgICAgICBwbGF5ZXJCb2FyZERPTSA9IHBhcmVudERPTS5maXJzdENoaWxkO1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChib2FyZDIsIHRydWUsIGxvb3AudHVybikpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoYm9hcmQyLCBwYXJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZDtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGNhbGxzaWduLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgICAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAyKTtcbiAgICAgICAgLy8gaGF2ZSBBSSBwbGFjZSBmbGVldCwgcmFuZG9tbHlcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgY2hlY2tlZCAhISFcbiAgICAgICAgLy8gcDIucGxheWVyLnBsYWNlRmxlZXQocDEpO1xuICAgICAgICBwMi5wbGF5ZXIucGxhY2VGbGVldChwMik7XG4gICAgICAgIC8vIG5lZWRzIHRvIGludm9rZSBmbiBmb3IgdXNlciB0byBwbGFjZSB0aGVpciBzaGlwcy4uLiAhISFcbiAgICAgICAgbWFpbihwYXJlbnRET00sIHAxKTtcbiAgICAgICAgLy8gcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQocDEuZ2IsIHRydWUsICgoeCwgZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIC8vICAgICBob3ZlcihlLnRhcmdldCwgcDEuZ2IpO1xuICAgICAgICAvLyB9KSkpO1xuICAgICAgICAvLyBhZGRIb3ZlcihwMS5nYik7XG4gICAgICAgIC8vIGluaXRpYWwgdHVybiA/XG4gICAgICAgIC8vIG5lZWQgdG8gcGFzcyBpbiBwMS5ib2FyZCBhbmQgcDIuYm9hcmQgKGNoYW5nZSBpbml0aWFsIHR1cm4gZm4pXG4gICAgICAgIGNvbnNvbGUubG9nKHAyLmdiLmJvYXJkKTtcbiAgICAgICAgLy8gaW5pdGlhbFR1cm4ocDEuZ2IsIHAyLmdiLCBwYXJlbnRET00pXG4gICAgICAgIHBsYXllck9uZSA9IHAxO1xuICAgICAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAgICAgcmV0dXJuIHsgcDEsIHAyIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZXcgcGxheWVyc1xuICAgICAgICAvLyBuZXcgZ2FtZWJvYXJkc1xuICAgICAgICAvLyBuZXcgc2hpcCBsb2NhdGlvbnNcbiAgICAgICAgLy8gZGlzcGxheSBeXnRoZXNlXG4gICAgICAgIC8vIC0+IGdvIHRvIGluaXRpYWwgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIHBsYWNlIHNoaXBzIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBtYWluIHBhZ2UsIGxldCBiYXR0bGUgYmVnaW5cbiAgICAgICAgLy8gd2hhdCBlbHNlP1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydGZuJyk7IFxuICAgIH1cbiAgICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICAgIC8vIGRvIGkgbmVlZCA/ICEhIVxuICAgIGxldCBjdXJyZW50UmVzdWx0ID0ge307XG4gICAgY29uc3QgdHVybiA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAvLyBkb2VzIGl0IG5lZWQgYSBjaGVjaz9cbiAgICAgICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWthIHVzZXIgY2xpY2tlZCBvbiBjb29yZGluYXRlcyBmb3IgYSBzZWNvbmQgdGltZVxuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIHRydWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIGRvbSBmdW5jdGlvbiBwcm9tcHRpbmcgdXNlciB0byB0cnkgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiBuZXcgY29vcmRpbmF0ZXMsIHR1cm4gY2FuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBhaSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdC52YWx1ZSwgY29tcEJvYXJkRE9NKTtcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0LnZhbHVlLCByZXN1bHQuc3VuaywgcmVzdWx0LnNoaXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHN1bmtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGRpZmZlcmVudCBtZXNzYWdlLi4uXG4gICAgICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFpIHBsYXllciBtYWtlcyBhdHRhY2tcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gcDEgZ2FtZWJvYXJkXG4gICAgICAgICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLmF0dGFjayhwbGF5ZXJPbmUuZ2IpO1xuICAgICAgICAgICAgbWFya0NlbGwocmVzdWx0LmNvb3JkWzBdLCByZXN1bHQuY29vcmRbMV0sIHJlc3VsdC5vYmoudmFsdWUsIHBsYXllckJvYXJkRE9NKTtcbiAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQub2JqLnZhbHVlLCByZXN1bHQub2JqLnN1bmssIHJlc3VsdC5vYmouc2hpcCwgZmFsc2UpO1xuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYXllclR1cm4gJiYgKCFyZXN1bHQuYWxsU3VuaykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1cm4oZmFsc2UpOyBcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIC8vIHJ1biBnYW1lb3ZlciBmblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgdGhyb3dpbmcgZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAvLyBuZWVkcyByZXN0YXJ0Rm4gISEhXG4gICAgICAgICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyLCByZXN0YXJ0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxUdXJuLCBzdGFydEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgR2l0aHViIGZyb20gJy4vaWNvbnMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi9pY29ucy9saW5rZWRpbi5zdmcnO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG4vLyBidWlsZCBpbml0aWFsIHBhZ2Vcbi8vIHB0IDEgLSBoZWFkZXIgYW5kIGZvb3RlciBcbi8vIHB0IDIgLSBib2R5ICh0aXRsZSwgaW5zdHJ1Y3Rpb25zLCB1c2VyIG5hbWUgaW5wdXQsIHN0YXJ0IGJ0bilcblxuLy9cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlclRpdGxlJ30pO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZEM7XG59XG4vL1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9vdGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb290ZXJCb3hcIn0pO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGlua0NvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIiwgXCJhbHRcIjogXCJHaXRodWIgUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2dpdEljb24nfSk7O1xuICAgIGdpdEljb24uc3JjID0gR2l0aHViO1xuICAgIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICAgIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsIFwiYWx0XCI6IFwiTGlua2VkSW4gUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgbGlua0ljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdsaW5rSWNvbid9KTtcbiAgICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRleHRDb250YWluZXJcIn0pO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtMaW5rKTtcbiAgICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RDO1xufVxuLy8gXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ21haW5Db250YWluZXInfSk7XG4gICAgY29uc3QgaW5pdGlhbEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbml0aWFsQ29udGVudCd9KTtcbiAgICBjb25zdCBpbmZvQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9uc0NvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnN0cnVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9ucyd9KTtcbiAgICBpbnN0cnVjdC50ZXh0Q29udGVudCA9ICdFbGltaW5hdGUgdGhlIGVuZW15JztcbiAgICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnB1dENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6ICd0ZXh0JywgaWQ6ICd1c2VybmFtZScsIGNsYXNzOiAnaW5wdXRGaWVsZCcsIHBsYWNlaG9sZGVyOiAnUGxheWVyIDEnfSk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2ZvcjogJ3VzZXJuYW1lJ30pO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnVXNlcm5hbWU6JztcbiAgICBjb25zdCBzdGFydEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdzdGFydENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3N0YXJ0J30pO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUhJ1xuXG4gICAgLy8gbGlzdGVuZXIgYW5kIGhlbHBlcnNcbiAgICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmVlZCBhIGNoZWNrIGlmIGlucHV0IGlzIGVtcHR5ICEhIVxuICAgICAgICBjb25zdCBjYWxsc2lnbiA9IGlucHV0LnZhbHVlO1xuICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICAvLyBpbml0aWFsaXplIGdhbWUgbG9vcD9cbiAgICAgICAgLy8gbG9vcC5pbml0aWFsVHVybihtYWluQyk7XG4gICAgICAgIGxvb3Auc3RhcnRHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gICAgfVxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEZuKCk7XG4gICAgfSlcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluQy5hcHBlbmRDaGlsZChpbml0aWFsQyk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICAgIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbnB1dEMpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKHN0YXJ0Qyk7XG4gICAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgIHJldHVybiBtYWluQztcbn1cblxuLy9cbmNvbnN0IG1ha2VJbml0aWFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2JvZHknfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb20uYnVpbGRDb21tcygpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYm9keSk7XG59XG5jb25zdCBtYWtlSW5pdGlhbExpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ib2R5Jyk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbkNvbnRlbnQoKSwgYm9keS5jaGlsZHJlblsyXSk7XG59XG5leHBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiOyBcblxuLy8gZnJvbSBpbml0aWFsLCBnbyB0byAxIGJvYXJkIChlbXB0eSlcbi8vIGFib3ZlLCBhIGJ1dHRvbiB0byBzd2l0Y2ggYXhpc1xuLy8gYWJvdmUsIGEgY29tbXVuaWNhdGlvbiBiYXIgKGUuZy4gXCJQbGFjZSB5b3VyIGNhcnJpZXJcIilcbi8vXG4vLyBob3ZlciBvdmVyIGJvYXJkLCBzaGFkb3cgb3V0bGluZSBvZiBzaGlwIHNpemUsIHJvdGF0ZXMgd2hlbiBheGlzIGJ0biBjbGlja2VkXG4vLyBjbGljayBvbiBib2FyZCwgcGxhY2VzIHNoaXAgYWNjb3JkaW5nIHRvIHRob3NlIGNvb3JkaW5hdGVzXG4vLyBnb2VzIHRocm91Z2ggZWFjaCBzaGlwXG4vLyBhZnRlciBsYXN0IHNoaXAsIHRha2VzIGJvYXJkIGFuZCBtYWtlcyBpdCBwMS5nYi5ib2FyZFxuLy8gcGFnZSBmYWRlcyBvdXQsIHRoZW4gbG9hZCBsb29wLmluaXRpYWx0dXJuIFxuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZSgxMCk7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IChib2FyZCwgc2hpcCwgaW5wdXQpID0+IHtcbiAgICAgICAgLy8gY2FsbCBkb20gZnVuY3Rpb24gLT4gZGlzcGxheSBpbnN0cnVjdGlvbjogJ3BsYWNlIHlvdXIgc2hpcCdcbiAgICAgICAgaWYgKCEoYm9hcmQucGxhY2VTaGlwKHNoaXAsIHRydWUsIGlucHV0WzBdLCBpbnB1dFsxXSkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIGVzZSEnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhhdCB3ZW50Li4/Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQpO1xuXG4gICAgfVxuICAgIGNvbnN0IGZsZWV0ID0gKHBsYXllciwgaW5wdXQpID0+IHtcbiAgICAgICAgLy8gbmVlZCB0byBvbmx5IGNyZWF0ZSBPTkUgbmV3IGJvYXJkLCBhbmQgZ2V0IGFsbCB0aGUgc2hpcHMgcGxhY2VkIG9uIGl0LlxuICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVtcHR5KCk7XG4gICAgICAgIHNoaXAoYm9hcmQsIHBsYXllci5mbGVldC5jYXJyaWVyLCBpbnB1dClcbiAgICAgICAgLy8gY29uc3Qgc2hpcEFycmF5ID0gT2JqZWN0LmtleXMocGxheWVyLmZsZWV0KTtcbiAgICAgICAgLy8gc2hpcEFycmF5LmZvckVhY2goc2hpcCA9PiB7XG5cbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcCwgZmxlZXQgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2U7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcyB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tICcuL2NvbXNET00nO1xuXG5sZXQgYXhpcyA9IHRydWU7XG5jb25zdCBjdXJyZW50QXhpcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpcztcbn1cbmNvbnN0IGNyZWF0ZVBsYWNlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicGxhY2VDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGJ1dHRvbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUJ0bkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBheGlzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYXhpc0J0bid9KTtcbiAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYEF4aXM6IFhgXG4gICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgIHJhbmRvbUJ0bi50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGF4aXMgPSAhYXhpcztcbiAgICAgICAgbGV0IHRleHQgPSBheGlzID8gJ1gnIDogJ1knO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYEF4aXM6ICR7dGV4dH1gO1xuICAgICAgICAvLyBkZWxldGUgY3VycmVudCBib2FyZFxuICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgLy8gYnVpbGQgbmV3IGJvYXJkIHcvIGNvcnJlY3QgbGlzdGVuZXJzXG4gICAgICAgIHBlclNoaXAoY3VycmVudERPTSwgY3VycmVudEJvYXJkLCBjdXJyZW50U2hpcCk7XG4gICAgfSlcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGFjZSBmbGVldCByYW5kb21seSEnKTtcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG4vLyBcbmNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgZ2FtZWJvYXJkLmNoZWNrUGxhY2Uoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5jb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuaWQpO1xuICAgIGxldCBuZXdJZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkraX0ke2Nvb3JkWzFdfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJZCA9IGAke2Nvb3JkWzBdfSR7TnVtYmVyKGNvb3JkWzFdKStpfWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNsYXRlZ3JheVwiO1xuICAgIH1cbn1cbmNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoeCwgeSkgPT4ge1xuICAgIC8vIHNob3VsZCBJIG1ha2UgdGhpcyBpdCdzIG93biBmdW5jdGlvbj8gISEhXG4gICAgY3VycmVudE9iai5nYi5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGF4aXMsIHgsIHkpO1xuICAgIGNvdW50Kys7XG4gICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgbmV4dFNoaXAoY3VycmVudERPTSwgY3VycmVudE9iaik7XG59XG5jb25zdCBjbGljayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrTGlzdGVuZXIoeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QXhpcygpKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5jb25zdCBob3ZlciA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyBjb3VsZCBhZGQgYSBjbGFzcy4uLlxuICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICBoaWdobGlnaHRMZW5ndGgoZWxlbWVudCwgc2hpcC5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jZWxsJykpO1xuICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgICBob3ZlcihjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICBjbGljayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgIH0pXG59XG5sZXQgY3VycmVudE9iajtcbmxldCBjdXJyZW50Qm9hcmQ7XG5sZXQgY3VycmVudFNoaXA7XG5sZXQgZmxlZXRLZXlzO1xubGV0IGN1cnJlbnRET007XG5sZXQgY291bnQgPSAwO1xuY29uc3QgdXBkYXRlQ3VycmVudHMgPSAocGFyZW50LCBib2FyZCwgc2hpcCkgPT4ge1xuICAgIGN1cnJlbnRET00gPSBwYXJlbnQ7XG4gICAgY3VycmVudEJvYXJkID0gYm9hcmQ7XG4gICAgY3VycmVudFNoaXAgPSBzaGlwO1xufVxuY29uc3QgbmV4dFNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmopID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICBjb20uaW5zdHJ1Y3QocGxheWVyT2JqLnBsYXllciwgZmxlZXRLZXlzW2NvdW50XSk7XG4gICAgICAgIHBlclNoaXAocGFyZW50RE9NLCBwbGF5ZXJPYmouZ2IsIHBsYXllck9iai5mbGVldFtmbGVldEtleXNbY291bnRdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25leHQgc3RlcCBvZiBnYW1lbG9vcCEnKTtcbiAgICB9XG59XG5jb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICB1cGRhdGVDdXJyZW50cyhwYXJlbnRET00sIHBsYXllckJvYXJkLCBzaGlwKTtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSkpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRET00pO1xuICAgIGRpc3BsYXlTaGlwcyhjdXJyZW50Qm9hcmQsIGN1cnJlbnRET00uY2hpbGRyZW5bMV0pO1xuICAgIGFkZENlbGxMaXN0ZW5lcnMocGxheWVyQm9hcmQsIHNoaXApO1xufVxuY29uc3QgbWFpbiA9IChwYXJlbnRET00sIHBsYXllck9iaikgPT4ge1xuICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChjcmVhdGVQbGFjZURpc3BsYXkoKSk7XG4gICAgY3VycmVudE9iaiA9IHBsYXllck9iajtcbiAgICAvLyB1cGRhdGUgYWxsIGN1cnJlbnRzPyB0aGVuIGEgc21hbGxlciBvbmUgdG8gcnVuIG9uIGVhY2ggcGVyU2hpcD8gISEhXG4gICAgZmxlZXRLZXlzID0gT2JqZWN0LmtleXMocGxheWVyT2JqLmZsZWV0KTtcbiAgICBuZXh0U2hpcChwYXJlbnRET00sIHBsYXllck9iaik7XG59XG5leHBvcnQgeyBob3ZlciwgbWFpbiB9OyIsIi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gICAgbGV0IHdpbnMgPSAwO1xuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgIH1cbiAgICBjb25zdCBhZGRXaW4gPSAoKSA9PiB3aW5zICs9IDE7XG4gICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnMsIGF0dGFjaywgYWRkV2luIH07XG59XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoJ0FJIFBsYXllcicpO1xuICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IF9nZW5lcmF0ZUNvb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgd2hpbGUgKCEoX2F2YWlsYWJsZShjb29yZCkpKSB7XG4gICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZDtcbiAgICB9XG4gICAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbiAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGlmIChheGlzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gaSB0aGluayB0aGlzIGNhbiBiZSB1c2VkIGZvciBlaXRoZXIgcGxheWVyLi4ubWF5YmUgbWFrZSBhIGJ1dHRvbiBmb3IgdXNlciAoaW4gaW5pdGlhbCkgISEhXG4gICAgICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgICAgIGZsZWV0S2V5cy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB3aGlsZSAoIShwbGF5ZXIuZ2IucGxhY2VTaGlwKHBsYXllci5mbGVldFtzaGlwXSwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWksIHsgYXR0YWNrIH0sIHsgcGxhY2VGbGVldCB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBtYXJrZXIgPSBsZW5ndGg7XG4gICAgaWYgKG1hcmspIHtcbiAgICAgICAgbWFya2VyID0gbWFyaztcbiAgICB9XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4gICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbiAgICAgICAgaGl0KCk7XG4gICAgICAgIHJldHVybiBpc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMywgMSk7XG4gICAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICByZXR1cm4geyBzdWJtYXJpbmUsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH1cbn1cblxuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTsiLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWwgfSBmcm9tICcuL2luaXRpYWxET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbm1ha2VJbml0aWFsKCk7XG5cbi8vIGxvb3AudHVybihbNSwgNV0pO1xuLy8gbG9vcC50dXJuKFswLCAwXSk7XG5cblxuLy8gY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbi8vICAgICBsZXQgaGl0cyA9IDA7XG4vLyAgICAgbGV0IHN1bmsgPSBmYWxzZTtcbi8vICAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gaGl0cztcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuLy8gICAgICAgICBoaXRzICs9IDE7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIC8vIGFkZGVkIHRoaXMgLSBjYW4gSSBzZXQgaGl0IGFuZCBpc1N1bmsgdG8gcHJpdmF0ZSwgYW5kIG9ubHkgZXhwb3J0IHRoaXMgb25lPyAhISFcbi8vICAgICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuLy8gICAgICAgICBoaXQoKTtcbi8vICAgICAgICAgcmV0dXJuIGlzU3VuaygpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBsZW5ndGgsIHN1bmssIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxuLy8gICAgIH07XG4vLyBjb25zdCBzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG5cbi8vIGNvbnN0IGJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbi8vICAgICBjb25zdCBib2FyZCA9IFtdO1xuLy8gICAgIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbi8vICAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICAgICAgcm93LnB1c2goMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGJvYXJkO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbi8vICAgICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChfY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuLy8gICAgICAgICBfY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGBEZW5pZWQuYDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XSA9IG9iamVjdC5sZW5ndGg7XG4vLyAgICAgICAgIH19IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5sZW5ndGg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbi8vICAgICAgICAgcmV0dXJuIGBQbGFjZWQuYFxuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgICAgIGxldCB2YWx1ZTtcbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlO1xuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF93aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lmxlbmd0aCA9PT0gaW5wdXQpO1xuLy8gICAgIH1cbi8vICAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuLy8gICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbi8vICAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbi8vICAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4vLyAgICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4vLyAgICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuLy8gICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4vLyAgICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aGVTaGlwID0gX3doaWNoU2hpcChib2FyZFt4XVt5XSk7XG4vLyAgICAgICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbi8vICAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIChib2FyZFt4XVt5XSArIDEwKSk7XG4vLyAgICAgICAgIHJldHVybiBzdW5rO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlID0gYm9hcmRbeF1beV07XG4vLyAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuLy8gICAgICAgICAgICAgaWYgKHN1bmspIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBmaXJlIGdhbWVPdmVyIGZ1bmN0aW9uXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgYWxsIGlzIG5lZWRlZCBpbnNpZGU/XG4vLyAgICAgICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC8vIGNoZWNrIHdoaWNoIHNoaXAgaXQgaXNcbi8vICAgICAgICAgICAgIC8vIHJ1biBoaXQoKSBvbiB0aGF0IHNoaXBcbi8vICAgICAgICAgICAgIC8vIHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgLSBzZW5kIHRvIERPTSBmbiB0byB1cGRhdGUgZGlzcGxheT9cbi8vICAgICAgICAgICAgIC8vIHRoaW5raW5nIHRoYXQgeW91IGNhbGwgYSBET00gZm4gd2l0aCBcInN1bmtcIiBib29sZWFuLi4gISEhXG4vLyAgICAgICAgICAgICAvLyB1cGRhdGUgYm9hcmRcbi8vICAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSB0byB1cGRhdGUgZ3JpZCB3aXRoIGhpdCBtYXJrICEhIVxuLy8gICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgLy8gYWRkIG1pc3MgdG8gYXJyYXlcbi8vICAgICAgICAgICAgIC8vIHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuLy8gICAgICAgICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4vLyAgICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gZnVuY3Rpb24gdG8gdXBkYXRlIGdyaWQgd2l0aCBtaXNzIG1hcmsgISEhXG4vLyAgICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4vLyAgICAgICAgICAgICByZXR1cm4gJ01pc3MnO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5KTtcbi8vICAgICAgICAgfSBcbi8vICAgICAgICAgLy8gbmVlZCB0byBsb29wIGJhY2sgLT4gbmVlZCB1c2VyIHRvIGdpdmUgbmV3IGNvb3JkaW5hdGVzXG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9ICAgXG4vLyAgICAgcmV0dXJuIHsgY3JlYXRlLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbi8vIH07XG4vLyBjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4vLyAgICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNvZGVuYW1lLCB3aW5zOiAwLCBhdHRhY2sgfTtcbi8vIH1cbi8vIGNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHtjb2RlbmFtZX0gPSBwbGF5ZXJGYWN0b3J5KCdFYXN5IEFJJykuY29kZW5hbWU7XG4vLyAgICAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuLy8gICAgIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbi8vICAgICAgICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbi8vICAgICAgICAgbGV0IHkgPSBfZ2VuZXJhdGUoKTtcbi8vICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbi8vICAgICB9O1xuLy8gICAgIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuLy8gICAgIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlID0gdHJ1ZTtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8YXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMV0gPT09IGFycmF5WzFdKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuLy8gICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbi8vICAgICAgICAgaWYgKF9hdmFpbGFibGUoY29vcmQpKSB7XG4vLyAgICAgICAgICAgICAvLyBhZGQgY29vcmRpbmF0ZXMgdG8gYXR0YWNrc0FycmF5XG4vLyAgICAgICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuLy8gICAgICAgICAgICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAvLyB0cnkgYWdhaW4gLSB3LyBuZXcgY29vcmRpbmF0ZXNcbi8vICAgICAgICAgICAgIGF0dGFjaygpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNvZGVuYW1lLCBhdHRhY2ssIHdpbnM6IDB9O1xuLy8gfVxuLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbi8vIGNvbnN0IGdhbWVib2FyZCA9IGJvYXJkRmFjdG9yeSgpO1xuLy8gY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuY3JlYXRlKDEwKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgdHJ1ZSwgMCwgMCk7XG4vLyBjb25zdCBzaGlwMiA9IFNoaXBGYWN0b3J5KDUpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwMiwgZmFsc2UsIDQsIDQpO1xuLy8gY29uc3Qgc2hpcDMgPSBTaGlwRmFjdG9yeSgzKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDMsIGZhbHNlLCA5LCAwKTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkKTtcbi8vIGNvbnN0IHBsYXllciA9IHBsYXllckZhY3RvcnkoJ3doYW1vJyk7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuLy8gbGV0IGFpID0gY29tcHV0ZXIoKTtcbi8vIGV4cG9ydCB7IHNoaXAsIHBsYXllckZhY3RvcnkgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=