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
        if (_checkOnBoard(object.length, axis, x, y) || 
        _checkPlace(object.length, axis, x, y)) {
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
    const _checkPlace = (length, axis, x, y) => {
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
    const _checkOnBoard = (length, axis, x, y) => {
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
    return { board, create, placeShip, receiveAttack, allSunk };
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



// render gameboards on page
const buildBoard = (object, boolean) => {
    const board = object.board;
    const displayBoard = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'displayBoard'});
    for (let i = 0; i<board.length; i++) {
        const gridCol = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `col`, id: `${i}`});
        displayBoard.appendChild(gridCol);
        for (let j = 0; j < board[i].length; j++) {
            const gridCell = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `cell`, id: `${i}${j}`});
            if (boolean) {
                gridCell.addEventListener('click', () => {
                    _gameloop__WEBPACK_IMPORTED_MODULE_1__["default"].turn([i, j]);
                })
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
            // clear main content
            (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
            //
            restartFn();
            //
            (0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();
        });
    }
    return { buildComms, updateText, endGame };
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
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardDOM */ "./src/boardDOM.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");






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
console.log(gb1.board);

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
    let playerBoardDOM;
    let compBoardDOM;
    const switchTurns = () => playerTurn = !playerTurn;
    const initialTurn = (board2, parentDOM) => {
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(gb1, false));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(gb1, parentDOM.firstChild);
        playerBoardDOM = parentDOM.firstChild;
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(board2, true));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(board2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild;
    }
    const startGame = (callsign, parentDOM) => {
        const p1 = initialize(`${callsign}`);
        const p2 = initialize(false);
        console.log(p1);
        console.log(p2);
        // have AI place fleet, randomly
        // needs to be checked !!!
        p2.player.placeFleet(p2);
        // needs to invoke fn for user to place their ships...
        // initial turn ?
        // need to pass in p1.board and p2.board (change initial turn fn)
        console.log(p2.gb.board);
        initialTurn(p2.gb, parentDOM)
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
        currentPlayer = playerTurn ? p1 : p2;
        let result;
        // does it need a check?
        if (playerTurn) {
            result = gb2.receiveAttack(input[0], input[1]);
            if (result.value === 0) {
                // aka user clicked on coordinates for a second time
                _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, true, "");
                // dom function prompting user to try new coordinates
            } else {
                // user clicked on new coordinates, turn can complete
                // display the move on ai gameboard
                (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(input[0], input[1], result.value, compBoardDOM);
                _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, false, result.value, result.sunk, result.ship, true);
                // check if sunk
                // display different message...
                switchTurns();
            }
        } else {
            // ai player makes attack
            // display the move on p1 gameboard
            result = p2.attack(gb1);
            (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(result.coord[0], result.coord[1], result.obj.value, playerBoardDOM);
            _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, false, result.obj.value, result.obj.sunk, result.obj.ship, false);
            switchTurns();
        }
        if (!playerTurn && (!result.allSunk)) {
            turn(false);
        }
        if (result.allSunk) {
            // switch turns (back to winning player)
            switchTurns();
            // run gameover fn
            console.log('loop throwing game over');
            // needs restartFn !!!
            _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.endGame(currentPlayer, restartFn);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeInitial);

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
        const axis = Math.floor(Math.random * 2);
        if (axis == 0) {
            return true;
        }
        return false;
    }
    const placeFleet = (player) => {
        let axis = _randomAxis();
        let coord = _generateRandomAttack();
        // for each ship, randomly generate coordinates and axis
        const fleetArray = Array.from(player.fleet);
        fleetArray.forEach(ship => {
            while (!(player.gb.placeShip(ship, axis, coord[0], coord[1]))) {
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
    const sub = ShipFactory(3, 1);
    const patrol = ShipFactory(2);
    const destroyer = ShipFactory(3);
    const battleship = ShipFactory(4);
    const carrier = ShipFactory(5);
    return { sub, patrol, destroyer, battleship, carrier }
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




(0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmRpc3BsYXlCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmNvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2l0SWNvbixcXG4ubGlua0ljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKF9jaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIF9jaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3graV1beV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICB9fSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kraV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgX2NoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF93aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICAgIH1cbiAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVTaGlwID0gX3doaWNoU2hpcChib2FyZFt4XVt5XSk7XG4gICAgICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIChib2FyZFt4XVt5XSArIDEwKSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHksIG9iaikgPT4ge1xuICAgICAgICBvYmoudmFsdWUgPSBib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKG9iai52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuICAgICAgICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgICAgICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmouYWxsU3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBmaXJlIGdhbWVPdmVyIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgYWxsIGlzIG5lZWRlZCBpbnNpZGU/XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5zaGlwID0gb2JqLnZhbHVlO1xuICAgICAgICAgICAgLy8gY2hlY2sgd2hpY2ggc2hpcCBpdCBpc1xuICAgICAgICAgICAgLy8gcnVuIGhpdCgpIG9uIHRoYXQgc2hpcFxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSAtIHNlbmQgdG8gRE9NIGZuIHRvIHVwZGF0ZSBkaXNwbGF5P1xuICAgICAgICAgICAgLy8gdGhpbmtpbmcgdGhhdCB5b3UgY2FsbCBhIERPTSBmbiB3aXRoIFwic3Vua1wiIGJvb2xlYW4uLiAhISFcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIHRvIHVwZGF0ZSBncmlkIHdpdGggaGl0IG1hcmsgISEhXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4gICAgICAgICAgICAvLyBjaGFuZ2UgcmV0dXJuIGZyb20gdmFsdWUgdG8gdHJ1ZVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkIG1pc3MgdG8gYXJyYXlcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuICAgICAgICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4gICAgICAgICAgICBvYmoudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSBmdW5jdGlvbiB0byB1cGRhdGUgZ3JpZCB3aXRoIG1pc3MgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICBhbGxTdW5rOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSwgb2JqKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gbmVlZCB0byBsb29wIGJhY2sgLT4gbmVlZCB1c2VyIHRvIGdpdmUgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgIG9iai52YWx1ZSA9IDA7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSAgIFxuICAgIHJldHVybiB7IGJvYXJkLCBjcmVhdGUsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRGYWN0b3J5OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG4vLyByZW5kZXIgZ2FtZWJvYXJkcyBvbiBwYWdlXG5jb25zdCBidWlsZEJvYXJkID0gKG9iamVjdCwgYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Rpc3BsYXlCb2FyZCd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY29sYCwgaWQ6IGAke2l9YH0pO1xuICAgICAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gfSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb29wLnR1cm4oW2ksIGpdKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZENvbC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlCb2FyZDtcbn1cbmNvbnN0IGRpc3BsYXlTaGlwcyA9IChvYmplY3QsIGJvYXJkRE9NKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICAgICAgICBib2FyZERPTS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBtYXJrQ2VsbCA9ICh4LCB5LCBib29sZWFuLCBib2FyZERPTSkgPT4ge1xuICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IG1ha2VJbml0aWFsIGZyb20gXCIuL2luaXRpYWxET01cIjtcblxuLy8gYnVpbGQgY29tbXVuaWNhdGlvbiBkaXYgLSBmb3IgZGlzcGxheWluZyB1cGRhdGVzIC8gcHJvbXB0c1xuY29uc3QgY29tID0gKCgpID0+IHtcbiAgICBjb25zdCBjb21tQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2NvbW1Db250YWluZXInfSk7XG5cbiAgICBjb25zdCBidWlsZENvbW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tcyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2NvbW1zJ30pO1xuICAgICAgICBjb21tcy50ZXh0Q29udGVudCA9IGBjb21tcyBnbyBoZXJlYDtcbiAgICAgICAgY29tbUMuYXBwZW5kQ2hpbGQoY29tbXMpO1xuICAgICAgICByZXR1cm4gY29tbUM7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFsnZW1wdHknLCAnc3VibWFyaW5lJywgJ3BhdHJvbCBib2F0JywgJ2NydWlzZXInLCAnZGVzdHJveWVyJywgJ2JhdHRsZSBjYXJyaWVyJ107XG4gICAgY29uc3QgcHJvbm91bkFycmF5ID0gW3swOiAneW91JywgMTogJ3RoZWlyJ30sIHswOiAndGhleScsIDE6ICd5b3VyJ31dO1xuICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAocGxheWVyTmFtZSwgYm9vbGVhbiwgaGl0LCBzdW5rLCBzaGlwLCBwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGxheWVyID8gcHJvbm91bkFycmF5WzBdIDogcHJvbm91bkFycmF5WzFdO1xuICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGBBdHRlbnRpb24gJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfTogRXJyb3IhIE11c3Qgc2VsZWN0IG5ldyBjb29yZGluYXRlcy5gXG4gICAgICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGZpcmVzIGEgc2hvdCBhbmQgJHt2YWx1ZVswXX0gc3VuayAke3ZhbHVlWzFdfSAke3NoaXBBcnJheVtzaGlwXX0hYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdHJpa2UgPSBoaXQgPyBgbGFuZHMgYSBzdHJpa2UhYDogYG1pc3NlcyFgXG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gYXR0YWNrcyBhbmQgJHtzdHJpa2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlbmRHYW1lID0gKHBsYXllciwgcmVzdGFydEZuKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5DID0gY29tbUMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAvLyBjbGVhciBjb21tcyBhbmQgbWFpblxuICAgICAgICBjbGVhckRpdihjb21tQyk7XG4gICAgICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAgICAgLy8gYnVpbGQgY29udGVudFxuICAgICAgICBjb25zdCBlbmRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW5kQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdiYW5uZXInfSk7XG4gICAgICAgIGJhbm5lci50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhJ1xuICAgICAgICBjb25zdCB3aW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3aW5uZXInfSk7XG4gICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7cGxheWVyLmNvZGVuYW1lfWA7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3BsYXlBZ2Fpbid9KTtcbiAgICAgICAgcGxheUFnYWluLnRleHRDb250ZW50ID0gYFBsYXkgQWdhaW5gO1xuICAgICAgICBtYWluQy5hcHBlbmRDaGlsZChlbmRDKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJcbiAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250ZW50XG4gICAgICAgICAgICBjbGVhckRpdihtYWluQyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmVzdGFydEZuKCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbWFrZUluaXRpYWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGJ1aWxkQ29tbXMsIHVwZGF0ZVRleHQsIGVuZEdhbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gJy4vY29tc0RPTSc7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcblxuY29uc3QgcDEgPSBQbGF5ZXJGYWN0b3J5KCdBbGZyZWRvJyk7XG5jb25zdCBnYjEgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMS5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDFhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMWIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAxYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWEsIGZhbHNlLCAwLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFiLCBmYWxzZSwgMiwgMCk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYywgZmFsc2UsIDQsIDApO1xuY29uc29sZS5sb2coZ2IxLmJvYXJkKTtcblxuY29uc3QgcDIgPSBjb21wdXRlcigpO1xuY29uc3QgZ2IyID0gQm9hcmRGYWN0b3J5KCk7XG5nYjIuY3JlYXRlKDEwKTtcbmNvbnN0IHNoaXAyYSA9IFNoaXBGYWN0b3J5KDUpO1xuY29uc3Qgc2hpcDJiID0gU2hpcEZhY3RvcnkoNCk7XG5jb25zdCBzaGlwMmMgPSBTaGlwRmFjdG9yeSgzKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJhLCBmYWxzZSwgNSwgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYiwgZmFsc2UsIDcsIDApO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmMsIGZhbHNlLCA5LCAwKTtcblxuLy8gY3JlYXRlIHBsYXllcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZ2FtZWJvYXJkXG5jb25zdCBpbml0aWFsaXplID0gKHBsYXllck5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgICBwbGF5ZXIgPSBjb21wdXRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllciA9IFBsYXllckZhY3RvcnkoYCR7cGxheWVyTmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgZ2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBnYi5jcmVhdGUoMTApO1xuICAgIGNvbnN0IGZsZWV0ID0gYnVpbGRGbGVldCgpO1xuXG4gICAgcmV0dXJuIHsgcGxheWVyLCBnYiwgZmxlZXQgfVxufVxuXG5jb25zdCBsb29wID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gICAgbGV0IHBsYXllckJvYXJkRE9NO1xuICAgIGxldCBjb21wQm9hcmRET007XG4gICAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQoZ2IxLCBmYWxzZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoZ2IxLCBwYXJlbnRET00uZmlyc3RDaGlsZCk7XG4gICAgICAgIHBsYXllckJvYXJkRE9NID0gcGFyZW50RE9NLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKGJvYXJkMiwgdHJ1ZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoYm9hcmQyLCBwYXJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZDtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKGNhbGxzaWduLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgICAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAyKTtcbiAgICAgICAgLy8gaGF2ZSBBSSBwbGFjZSBmbGVldCwgcmFuZG9tbHlcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgY2hlY2tlZCAhISFcbiAgICAgICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgICAgICAvLyBuZWVkcyB0byBpbnZva2UgZm4gZm9yIHVzZXIgdG8gcGxhY2UgdGhlaXIgc2hpcHMuLi5cbiAgICAgICAgLy8gaW5pdGlhbCB0dXJuID9cbiAgICAgICAgLy8gbmVlZCB0byBwYXNzIGluIHAxLmJvYXJkIGFuZCBwMi5ib2FyZCAoY2hhbmdlIGluaXRpYWwgdHVybiBmbilcbiAgICAgICAgY29uc29sZS5sb2cocDIuZ2IuYm9hcmQpO1xuICAgICAgICBpbml0aWFsVHVybihwMi5nYiwgcGFyZW50RE9NKVxuICAgICAgICByZXR1cm4geyBwMSwgcDIgfVxuICAgIH1cbiAgICBjb25zdCByZXN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5ldyBwbGF5ZXJzXG4gICAgICAgIC8vIG5ldyBnYW1lYm9hcmRzXG4gICAgICAgIC8vIG5ldyBzaGlwIGxvY2F0aW9uc1xuICAgICAgICAvLyBkaXNwbGF5IF5edGhlc2VcbiAgICAgICAgLy8gLT4gZ28gdG8gaW5pdGlhbCBwYWdlLCBuZWVkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gLT4gZ28gdG8gcGxhY2Ugc2hpcHMgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIG1haW4gcGFnZSwgbGV0IGJhdHRsZSBiZWdpblxuICAgICAgICAvLyB3aGF0IGVsc2U/XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0Zm4nKTsgXG4gICAgfVxuICAgIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gICAgLy8gZG8gaSBuZWVkID8gISEhXG4gICAgbGV0IGN1cnJlbnRSZXN1bHQgPSB7fTtcbiAgICBjb25zdCB0dXJuID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUdXJuID8gcDEgOiBwMjtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgLy8gZG9lcyBpdCBuZWVkIGEgY2hlY2s/XG4gICAgICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBnYjIucmVjZWl2ZUF0dGFjayhpbnB1dFswXSwgaW5wdXRbMV0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFrYSB1c2VyIGNsaWNrZWQgb24gY29vcmRpbmF0ZXMgZm9yIGEgc2Vjb25kIHRpbWVcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCB0cnVlLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAvLyBkb20gZnVuY3Rpb24gcHJvbXB0aW5nIHVzZXIgdG8gdHJ5IG5ldyBjb29yZGluYXRlc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb24gbmV3IGNvb3JkaW5hdGVzLCB0dXJuIGNhbiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gYWkgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgbWFya0NlbGwoaW5wdXRbMF0sIGlucHV0WzFdLCByZXN1bHQudmFsdWUsIGNvbXBCb2FyZERPTSk7XG4gICAgICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgZmFsc2UsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnN1bmssIHJlc3VsdC5zaGlwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzdW5rXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBkaWZmZXJlbnQgbWVzc2FnZS4uLlxuICAgICAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhaSBwbGF5ZXIgbWFrZXMgYXR0YWNrXG4gICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBtb3ZlIG9uIHAxIGdhbWVib2FyZFxuICAgICAgICAgICAgcmVzdWx0ID0gcDIuYXR0YWNrKGdiMSk7XG4gICAgICAgICAgICBtYXJrQ2VsbChyZXN1bHQuY29vcmRbMF0sIHJlc3VsdC5jb29yZFsxXSwgcmVzdWx0Lm9iai52YWx1ZSwgcGxheWVyQm9hcmRET00pO1xuICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgZmFsc2UsIHJlc3VsdC5vYmoudmFsdWUsIHJlc3VsdC5vYmouc3VuaywgcmVzdWx0Lm9iai5zaGlwLCBmYWxzZSk7XG4gICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGxheWVyVHVybiAmJiAoIXJlc3VsdC5hbGxTdW5rKSkge1xuICAgICAgICAgICAgdHVybihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5hbGxTdW5rKSB7XG4gICAgICAgICAgICAvLyBzd2l0Y2ggdHVybnMgKGJhY2sgdG8gd2lubmluZyBwbGF5ZXIpXG4gICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgLy8gcnVuIGdhbWVvdmVyIGZuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9vcCB0aHJvd2luZyBnYW1lIG92ZXInKTtcbiAgICAgICAgICAgIC8vIG5lZWRzIHJlc3RhcnRGbiAhISFcbiAgICAgICAgICAgIGNvbS5lbmRHYW1lKGN1cnJlbnRQbGF5ZXIsIHJlc3RhcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgaW5pdGlhbFR1cm4sIHN0YXJ0R2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBHaXRodWIgZnJvbSAnLi9pY29ucy9naXRodWIuc3ZnJztcbmltcG9ydCBMaW5rZWRJbiBmcm9tICcuL2ljb25zL2xpbmtlZGluLnN2Zyc7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gXCIuL2NvbXNET01cIjtcbi8vIGJ1aWxkIGluaXRpYWwgcGFnZVxuLy8gcHQgMSAtIGhlYWRlciBhbmQgZm9vdGVyIFxuLy8gcHQgMiAtIGJvZHkgKHRpdGxlLCBpbnN0cnVjdGlvbnMsIHVzZXIgbmFtZSBpbnB1dCwgc3RhcnQgYnRuKVxuXG4vL1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaGVhZGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaGVhZGVyVGl0bGUnfSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgaGVhZEMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkQztcbn1cbi8vXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb290ZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvb3RlckJveFwifSk7XG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJsaW5rQ29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBnaXRMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb25ub3J3YXJtZVwiLCBcImFsdFwiOiBcIkdpdGh1YiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnZ2l0SWNvbid9KTs7XG4gICAgZ2l0SWNvbi5zcmMgPSBHaXRodWI7XG4gICAgZ2l0SWNvbi5hbHQgPSBcIkdpdGh1YiBQcm9maWxlXCI7XG4gICAgY29uc3QgbGlua0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci13YXJtZS0xMDNhMDkxNjdcIiwgXCJhbHRcIjogXCJMaW5rZWRJbiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBsaW5rSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2xpbmtJY29uJ30pO1xuICAgIGxpbmtJY29uLnNyYyA9IExpbmtlZEluO1xuICAgIGxpbmtJY29uLmFsdCA9IFwiTGlua2VkSW4gUHJvZmlsZVwiO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGV4dENvbnRhaW5lclwifSk7XG4gICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUGVyZWdyaW5uaW5nIFByb2R1Y3Rpb25zXCI7XG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgZm9vdEMuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEljb24pO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0xpbmspO1xuICAgIGxpbmtMaW5rLmFwcGVuZENoaWxkKGxpbmtJY29uKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZm9vdEM7XG59XG4vLyBcbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWFpbkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luaXRpYWxDb250ZW50J30pO1xuICAgIGNvbnN0IGluZm9DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zJ30pO1xuICAgIGluc3RydWN0LnRleHRDb250ZW50ID0gJ0VsaW1pbmF0ZSB0aGUgZW5lbXknO1xuICAgIGNvbnN0IGlucHV0QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2lucHV0Q29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dHlwZTogJ3RleHQnLCBpZDogJ3VzZXJuYW1lJywgY2xhc3M6ICdpbnB1dEZpZWxkJywgcGxhY2Vob2xkZXI6ICdQbGF5ZXIgMSd9KTtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAndXNlcm5hbWUnfSk7XG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdVc2VybmFtZTonO1xuICAgIGNvbnN0IHN0YXJ0QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3N0YXJ0Q29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnc3RhcnQnfSk7XG4gICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSEnXG5cbiAgICAvLyBsaXN0ZW5lciBhbmQgaGVscGVyc1xuICAgIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+IGNsZWFyRGl2KG1haW5DKTtcbiAgICBcbiAgICBjb25zdCBzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZWVkIGEgY2hlY2sgaWYgaW5wdXQgaXMgZW1wdHkgISEhXG4gICAgICAgIGNvbnN0IGNhbGxzaWduID0gaW5wdXQudmFsdWU7XG4gICAgICAgIC8vIGNsZWFyIG1haW4gY29udGFpbmVyIC0+IHByZXAgZm9yIGJvYXJkIGRpc3BsYXlcbiAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgZ2FtZSBsb29wP1xuICAgICAgICAvLyBsb29wLmluaXRpYWxUdXJuKG1haW5DKTtcbiAgICAgICAgbG9vcC5zdGFydEdhbWUoY2FsbHNpZ24sIG1haW5DKTtcbiAgICB9XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0Rm4oKTtcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIG1haW5DLmFwcGVuZENoaWxkKGluaXRpYWxDKTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbmZvQyk7XG4gICAgaW5mb0MuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGlucHV0Qyk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoc3RhcnRDKTtcbiAgICBzdGFydEMuYXBwZW5kQ2hpbGQoc3RhcnQpO1xuXG4gICAgcmV0dXJuIG1haW5DO1xufVxuXG4vL1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYm9keSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn1cbmV4cG9ydCBkZWZhdWx0IG1ha2VJbml0aWFsOyIsIi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gICAgbGV0IHdpbnMgPSAwO1xuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgIH1cbiAgICBjb25zdCBhZGRXaW4gPSAoKSA9PiB3aW5zICs9IDE7XG4gICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnMsIGF0dGFjaywgYWRkV2luIH07XG59XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoJ0FJIFBsYXllcicpO1xuICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IF9nZW5lcmF0ZUNvb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgd2hpbGUgKCEoX2F2YWlsYWJsZShjb29yZCkpKSB7XG4gICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZDtcbiAgICB9XG4gICAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbiAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSAqIDIpO1xuICAgICAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlRmxlZXQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgICAgIGNvbnN0IGZsZWV0QXJyYXkgPSBBcnJheS5mcm9tKHBsYXllci5mbGVldCk7XG4gICAgICAgIGZsZWV0QXJyYXkuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIHdoaWxlICghKHBsYXllci5nYi5wbGFjZVNoaXAoc2hpcCwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWksIHsgYXR0YWNrIH0sIHsgcGxhY2VGbGVldCB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBtYXJrZXIgPSBsZW5ndGg7XG4gICAgaWYgKG1hcmspIHtcbiAgICAgICAgbWFya2VyID0gbWFyaztcbiAgICB9XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4gICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbiAgICAgICAgaGl0KCk7XG4gICAgICAgIHJldHVybiBpc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3ViID0gU2hpcEZhY3RvcnkoMywgMSk7XG4gICAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICByZXR1cm4geyBzdWIsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH1cbn1cblxuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTsiLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IG1ha2VJbml0aWFsIGZyb20gJy4vaW5pdGlhbERPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubWFrZUluaXRpYWwoKTtcblxuLy8gbG9vcC50dXJuKFs1LCA1XSk7XG4vLyBsb29wLnR1cm4oWzAsIDBdKTtcblxuXG4vLyBjb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuLy8gICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuLy8gICAgIGxldCBoaXRzID0gMDtcbi8vICAgICBsZXQgc3VuayA9IGZhbHNlO1xuLy8gICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBoaXRzO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4vLyAgICAgICAgIGhpdHMgKz0gMTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuLy8gICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4vLyAgICAgICAgIGhpdCgpO1xuLy8gICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG4vLyAgICAgfTtcbi8vIGNvbnN0IHNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcblxuLy8gY29uc3QgYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGJvYXJkID0gW107XG4vLyAgICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuLy8gICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gYm9hcmQ7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuLy8gICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKF9jaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4vLyAgICAgICAgIF9jaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gYERlbmllZC5gO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lmxlbmd0aDtcbi8vICAgICAgICAgfX0gZWxzZSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBib2FyZFt4XVt5K2ldID0gb2JqZWN0Lmxlbmd0aDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuLy8gICAgICAgICByZXR1cm4gYFBsYWNlZC5gXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICAgICAgbGV0IHZhbHVlO1xuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPiAwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID4gMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWU7XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgX3doaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubGVuZ3RoID09PSBpbnB1dCk7XG4vLyAgICAgfVxuLy8gICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4vLyAgICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuLy8gICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuLy8gICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbi8vICAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbi8vICAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4vLyAgICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbi8vICAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHRoZVNoaXAgPSBfd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbi8vICAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuLy8gICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbi8vICAgICAgICAgcmV0dXJuIHN1bms7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWUgPSBib2FyZFt4XVt5XTtcbi8vICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuLy8gICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4vLyAgICAgICAgICAgICBpZiAoc3Vuaykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbi8vICAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbi8vICAgICAgICAgICAgICAgICB9O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLy8gY2hlY2sgd2hpY2ggc2hpcCBpdCBpc1xuLy8gICAgICAgICAgICAgLy8gcnVuIGhpdCgpIG9uIHRoYXQgc2hpcFxuLy8gICAgICAgICAgICAgLy8gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSAtIHNlbmQgdG8gRE9NIGZuIHRvIHVwZGF0ZSBkaXNwbGF5P1xuLy8gICAgICAgICAgICAgLy8gdGhpbmtpbmcgdGhhdCB5b3UgY2FsbCBhIERPTSBmbiB3aXRoIFwic3Vua1wiIGJvb2xlYW4uLiAhISFcbi8vICAgICAgICAgICAgIC8vIHVwZGF0ZSBib2FyZFxuLy8gICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIHRvIHVwZGF0ZSBncmlkIHdpdGggaGl0IG1hcmsgISEhXG4vLyAgICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuLy8gICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4vLyAgICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbi8vICAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSBmdW5jdGlvbiB0byB1cGRhdGUgZ3JpZCB3aXRoIG1pc3MgbWFyayAhISFcbi8vICAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbi8vICAgICAgICAgICAgIHJldHVybiAnTWlzcyc7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHkpO1xuLy8gICAgICAgICB9IFxuLy8gICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH0gICBcbi8vICAgICByZXR1cm4geyBjcmVhdGUsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xuLy8gfTtcbi8vIGNvbnN0IHBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbi8vICAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnM6IDAsIGF0dGFjayB9O1xuLy8gfVxuLy8gY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3Qge2NvZGVuYW1lfSA9IHBsYXllckZhY3RvcnkoJ0Vhc3kgQUknKS5jb2RlbmFtZTtcbi8vICAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4vLyAgICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuLy8gICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuLy8gICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuLy8gICAgICAgICByZXR1cm4gW3gsIHldO1xuLy8gICAgIH07XG4vLyAgICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4vLyAgICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBhdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4vLyAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuLy8gICAgICAgICBpZiAoX2F2YWlsYWJsZShjb29yZCkpIHtcbi8vICAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbi8vICAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4vLyAgICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vIHRyeSBhZ2FpbiAtIHcvIG5ldyBjb29yZGluYXRlc1xuLy8gICAgICAgICAgICAgYXR0YWNrKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgY29kZW5hbWUsIGF0dGFjaywgd2luczogMH07XG4vLyB9XG4vLyBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuLy8gY29uc3QgZ2FtZWJvYXJkID0gYm9hcmRGYWN0b3J5KCk7XG4vLyBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5jcmVhdGUoMTApO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB0cnVlLCAwLCAwKTtcbi8vIGNvbnN0IHNoaXAyID0gU2hpcEZhY3RvcnkoNSk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAyLCBmYWxzZSwgNCwgNCk7XG4vLyBjb25zdCBzaGlwMyA9IFNoaXBGYWN0b3J5KDMpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwMywgZmFsc2UsIDksIDApO1xuLy8gY29uc29sZS5sb2coYm9hcmQpO1xuLy8gY29uc3QgcGxheWVyID0gcGxheWVyRmFjdG9yeSgnd2hhbW8nKTtcbi8vIGNvbnNvbGUubG9nKHBsYXllcik7XG4vLyBsZXQgYWkgPSBjb21wdXRlcigpO1xuLy8gZXhwb3J0IHsgc2hpcCwgcGxheWVyRmFjdG9yeSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==