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
        (0,_placeFleetDOM__WEBPACK_IMPORTED_MODULE_6__.main)(parentDOM, p1.gb, p1.fleet.destroyer);
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



let axis = true;
const currentAxis = () => {
    return axis;
}
const createPlaceDisplay = () => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "placeContainer"});
    const instructions = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'placeInstructions'});
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
    container.appendChild(instructions);
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
        cell.style.backgroundColor = "lightgray";
    }
}
const clickListener = (x, y) => {
    console.log([x, y]);
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
            highlightLength(element, ship.length);
        };
    })
    element.addEventListener('mouseout', () => {
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
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
let currentBoard;
let currentShip;
let currentDOM;
const updateCurrents = (parent, board, ship) => {
    currentDOM = parent;
    currentBoard = board;
    currentShip = ship;
}
const perShip = (parentDOM, playerBoard, ship) => {
    parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.buildBoard)(playerBoard, true));
    addCellListeners(playerBoard, ship);
    updateCurrents(parentDOM, playerBoard, ship);
}
const main = (parentDOM, playerBoard, ship) => {
    parentDOM.appendChild(createPlaceDisplay());
    perShip(parentDOM, playerBoard, ship);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsaUJBQWlCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsOEJBQThCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0Isc0NBQXNDLDRCQUE0QixnQkFBZ0IsR0FBRyxpQkFBaUIsb0JBQW9CLDZDQUE2QyxlQUFlLHFCQUFxQixHQUFHLFFBQVEsb0JBQW9CLGVBQWUsR0FBRyxTQUFTLG1CQUFtQixrQkFBa0IsOEJBQThCLEdBQUcsU0FBUyxrQ0FBa0MsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLFNBQVMsbUNBQW1DLEdBQUcsb0JBQW9CLG9CQUFvQiw4QkFBOEIsR0FBRyxjQUFjLG9CQUFvQixrQ0FBa0MsR0FBRyxrQkFBa0Isb0JBQW9CLDhCQUE4QixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSw2QkFBNkIsaUJBQWlCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGtCQUFrQixvQkFBb0IsOEJBQThCLHNCQUFzQixHQUFHLG1CQUFtQixvQkFBb0Isc0NBQXNDLDRCQUE0QixnQkFBZ0IsR0FBRyxpQkFBaUIsb0JBQW9CLDZDQUE2QyxlQUFlLHFCQUFxQixHQUFHLFFBQVEsb0JBQW9CLGVBQWUsR0FBRyxTQUFTLG1CQUFtQixrQkFBa0IsOEJBQThCLEdBQUcsU0FBUyxrQ0FBa0MsR0FBRyxRQUFRLGdDQUFnQyxHQUFHLFNBQVMsbUNBQW1DLEdBQUcsb0JBQW9CLG9CQUFvQiw4QkFBOEIsR0FBRyxjQUFjLG9CQUFvQixrQ0FBa0MsR0FBRyxrQkFBa0Isb0JBQW9CLDhCQUE4QixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyxtQkFBbUI7QUFDNWxGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JZTtBQUNaO0FBQ1U7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBYSxTQUFTLHNCQUFzQjtBQUNyRSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHdCQUF3Qix1REFBYSxTQUFTLHFCQUFxQixFQUFFLEVBQUU7QUFDdkU7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDLDZCQUE2Qix1REFBYSxTQUFTLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNvRDtBQUNROztBQUU1RDtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhLFNBQVMsdUJBQXVCOztBQUUvRDtBQUNBLHNCQUFzQix1REFBYSxTQUFTLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELG9CQUFvQjtBQUM1RSxVQUFVO0FBQ1YsOENBQThDLHFCQUFxQixtQkFBbUIsVUFBVSxPQUFPLFVBQVUsRUFBRSxnQkFBZ0I7QUFDbkk7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixjQUFjLE9BQU87QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsUUFBUSxrREFBUTtBQUNoQjtBQUNBLHFCQUFxQix1REFBYSxTQUFTLHNCQUFzQjtBQUNqRSx1QkFBdUIsdURBQWEsU0FBUyxnQkFBZ0I7QUFDN0Q7QUFDQSx1QkFBdUIsdURBQWEsU0FBUyxnQkFBZ0I7QUFDN0Qsd0NBQXdDLGdCQUFnQjtBQUN4RCwwQkFBMEIsdURBQWEsWUFBWSxtQkFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RGtDO0FBQ2lCO0FBQ0g7QUFDaEI7QUFDK0I7QUFDaEM7QUFDd0I7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsdURBQWE7QUFDeEIsWUFBWSxrREFBWTtBQUN4QjtBQUNBLGVBQWUsa0RBQVc7QUFDMUIsZUFBZSxrREFBVztBQUMxQixlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtEQUFRO0FBQ25CLFlBQVksa0RBQVk7QUFDeEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCLGVBQWUsa0RBQVc7QUFDMUIsZUFBZSxrREFBVztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQVE7QUFDekIsTUFBTTtBQUNOLGlCQUFpQix1REFBYSxJQUFJLFdBQVc7QUFDN0M7QUFDQSxlQUFlLGtEQUFZO0FBQzNCO0FBQ0Esa0JBQWtCLGlEQUFVOztBQUU1QixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBVTtBQUN4QyxRQUFRLHVEQUFZO0FBQ3BCO0FBQ0EsOEJBQThCLHFEQUFVO0FBQ3hDLFFBQVEsdURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGdCQUFnQixtREFBUTtBQUN4QixnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBUTtBQUNwQixZQUFZLG9EQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSmlDO0FBQ1o7QUFDSTtBQUNGO0FBQ1o7QUFDRTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1REFBYSxTQUFTLHlCQUF5QjtBQUNqRSxrQkFBa0IsdURBQWEsU0FBUyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhLFNBQVMseUJBQXlCO0FBQ2pFLHNCQUFzQix1REFBYSxTQUFTLG1CQUFtQjtBQUMvRCwwQkFBMEIsdURBQWEsU0FBUyx1QkFBdUI7QUFDdkUsb0JBQW9CLHVEQUFhLE9BQU8sb0ZBQW9GO0FBQzVILG9CQUFvQix1REFBYSxTQUFTLGlCQUFpQjtBQUMzRCxrQkFBa0IsOENBQU07QUFDeEI7QUFDQSxxQkFBcUIsdURBQWEsT0FBTywwR0FBMEc7QUFDbkoscUJBQXFCLHVEQUFhLFNBQVMsa0JBQWtCO0FBQzdELG1CQUFtQixnREFBUTtBQUMzQjtBQUNBLDBCQUEwQix1REFBYSxTQUFTLHVCQUF1QjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhLFNBQVMsdUJBQXVCO0FBQy9ELHFCQUFxQix1REFBYSxTQUFTLHdCQUF3QjtBQUNuRSxrQkFBa0IsdURBQWEsU0FBUywrQkFBK0I7QUFDdkUscUJBQXFCLHVEQUFhLFNBQVMsc0JBQXNCO0FBQ2pFO0FBQ0EsbUJBQW1CLHVEQUFhLFNBQVMsd0JBQXdCO0FBQ2pFLGtCQUFrQix1REFBYSxXQUFXLDJFQUEyRTtBQUNySCx1QkFBdUIsdURBQWEsV0FBVyxnQkFBZ0I7QUFDL0Q7QUFDQSxtQkFBbUIsdURBQWEsU0FBUyx3QkFBd0I7QUFDakUsa0JBQWtCLHVEQUFhLFlBQVksZUFBZTtBQUMxRDs7QUFFQTtBQUNBLDRCQUE0QixrREFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBYSxTQUFTLGNBQWM7QUFDckQ7QUFDQSxxQkFBcUIsb0RBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQSxhQUFhOztBQUViLENBQUM7O0FBRUQsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3NCO0FBQ0Y7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWEsU0FBUyx3QkFBd0I7QUFDcEUseUJBQXlCLHVEQUFhLFNBQVMsMkJBQTJCO0FBQzFFLG9CQUFvQix1REFBYSxTQUFTLDJCQUEyQjtBQUNyRSxvQkFBb0IsdURBQWEsWUFBWSxpQkFBaUI7QUFDOUQ7QUFDQSxzQkFBc0IsdURBQWEsWUFBWSxtQkFBbUI7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQSx1QkFBdUIsbUJBQW1CLEVBQUUsU0FBUztBQUNyRCxVQUFVO0FBQ1YsdUJBQXVCLFNBQVMsRUFBRSxtQkFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tc0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlRmxlZXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUZsZWV0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTAwcHggMDtcXG59XFxuLmluaXRpYWxDb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5kaXNwbGF5Qm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uY29sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycHg7XFxufVxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICB3aWR0aDogNDhweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJCb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5saW5rQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5naXRJY29uLFxcbi5saW5rSWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmRpc3BsYXlCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGJvYXJkIGxvZ2ljXG5cbmNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmIChjaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIGNoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIH19IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF93aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICAgIH1cbiAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVTaGlwID0gX3doaWNoU2hpcChib2FyZFt4XVt5XSk7XG4gICAgICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIChib2FyZFt4XVt5XSArIDEwKSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHksIG9iaikgPT4ge1xuICAgICAgICBvYmoudmFsdWUgPSBib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKG9iai52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuICAgICAgICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgICAgICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmouYWxsU3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBmaXJlIGdhbWVPdmVyIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgYWxsIGlzIG5lZWRlZCBpbnNpZGU/XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5zaGlwID0gb2JqLnZhbHVlO1xuICAgICAgICAgICAgLy8gY2hlY2sgd2hpY2ggc2hpcCBpdCBpc1xuICAgICAgICAgICAgLy8gcnVuIGhpdCgpIG9uIHRoYXQgc2hpcFxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSAtIHNlbmQgdG8gRE9NIGZuIHRvIHVwZGF0ZSBkaXNwbGF5P1xuICAgICAgICAgICAgLy8gdGhpbmtpbmcgdGhhdCB5b3UgY2FsbCBhIERPTSBmbiB3aXRoIFwic3Vua1wiIGJvb2xlYW4uLiAhISFcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIHRvIHVwZGF0ZSBncmlkIHdpdGggaGl0IG1hcmsgISEhXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4gICAgICAgICAgICAvLyBjaGFuZ2UgcmV0dXJuIGZyb20gdmFsdWUgdG8gdHJ1ZVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkIG1pc3MgdG8gYXJyYXlcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuICAgICAgICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4gICAgICAgICAgICBvYmoudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSBmdW5jdGlvbiB0byB1cGRhdGUgZ3JpZCB3aXRoIG1pc3MgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICBhbGxTdW5rOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSwgb2JqKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gbmVlZCB0byBsb29wIGJhY2sgLT4gbmVlZCB1c2VyIHRvIGdpdmUgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgIG9iai52YWx1ZSA9IDA7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSAgIFxuICAgIHJldHVybiB7IGJvYXJkLCBjcmVhdGUsIHBsYWNlU2hpcCwgY2hlY2tQbGFjZSwgY2hlY2tPbkJvYXJkLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBob3ZlciB9IGZyb20gJy4vcGxhY2VGbGVldERPTSc7XG5cbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuLCBmdW5jdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Rpc3BsYXlCb2FyZCd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY29sYCwgaWQ6IGAke2l9YH0pO1xuICAgICAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gfSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYmUgYWJsZSB0byBkZWxpbmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIHBsYWNlIHNoaXBzIGFuZCBvdGhlciBmb3IgYWN0dWFsIGdhbWVwbGF5XG4gICAgICAgICAgICAgICAgLy8gaG92ZXIoZ3JpZENlbGwsIG9iamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBmdW5jdChbaSwgal0sIGUpO1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheUJvYXJkO1xufVxuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIGJvb2xlYW4sIGJvYXJkRE9NKSA9PiB7XG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsIH07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH0gZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbUNvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbXMnfSk7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGNvbW1zIGdvIGhlcmVgO1xuICAgICAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgICAgIHJldHVybiBjb21tQztcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gWydlbXB0eScsICdzdWJtYXJpbmUnLCAncGF0cm9sIGJvYXQnLCAnY3J1aXNlcicsICdkZXN0cm95ZXInLCAnYmF0dGxlIGNhcnJpZXInXTtcbiAgICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbezA6ICd5b3UnLCAxOiAndGhlaXInfSwgezA6ICd0aGV5JywgMTogJ3lvdXInfV07XG4gICAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmBcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgOiBgbWlzc2VzIWBcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyLCByZXN0YXJ0Rm4pID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICAgICAgY2xlYXJEaXYobWFpbkMpO1xuICAgICAgICAvLyBidWlsZCBjb250ZW50XG4gICAgICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbmRDb250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Jhbm5lcid9KTtcbiAgICAgICAgYmFubmVyLnRleHRDb250ZW50ID0gJ0dhbWUgT3ZlciEnXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dpbm5lcid9KTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICAgICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncGxheUFnYWluJ30pO1xuICAgICAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgICAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhciBjb250ZW50XG4gICAgICAgICAgICAvLyBjbGVhckRpdihtYWluQy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgbWFpbkMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtYWluQyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmVzdGFydEZuKCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbWFrZUluaXRpYWxMaXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBidWlsZENvbW1zLCB1cGRhdGVUZXh0LCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb20gfTsiLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHBsYWNlIGZyb20gXCIuL3BsYWNlRmxlZXRcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCB7IGhvdmVyLCBhZGRIb3ZlciwgbWFpbiB9IGZyb20gJy4vcGxhY2VGbGVldERPTSc7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcblxuY29uc3QgcDEgPSBQbGF5ZXJGYWN0b3J5KCdBbGZyZWRvJyk7XG5jb25zdCBnYjEgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMS5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDFhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMWIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAxYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWEsIGZhbHNlLCAwLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFiLCBmYWxzZSwgMiwgMCk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYywgZmFsc2UsIDQsIDApO1xuXG5jb25zdCBwMiA9IGNvbXB1dGVyKCk7XG5jb25zdCBnYjIgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMi5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDJhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMmIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAyYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmEsIGZhbHNlLCA1LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJiLCBmYWxzZSwgNywgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYywgZmFsc2UsIDksIDApO1xuXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgIHBsYXllciA9IGNvbXB1dGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyID0gUGxheWVyRmFjdG9yeShgJHtwbGF5ZXJOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIGdiLmNyZWF0ZSgxMCk7XG4gICAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9XG59XG5cbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT25lO1xuICAgIGxldCBwbGF5ZXJUd287XG4gICAgbGV0IHBsYXllckJvYXJkRE9NO1xuICAgIGxldCBjb21wQm9hcmRET007XG4gICAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQxLCBib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChib2FyZDEsIGZhbHNlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkKTtcbiAgICAgICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZDtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQoYm9hcmQyLCB0cnVlLCBsb29wLnR1cm4pKTtcbiAgICAgICAgZGlzcGxheVNoaXBzKGJvYXJkMiwgcGFyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgIGNvbXBCb2FyZERPTSA9IHBhcmVudERPTS5sYXN0Q2hpbGQ7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IChjYWxsc2lnbiwgcGFyZW50RE9NKSA9PiB7XG4gICAgICAgIGNvbnN0IHAxID0gaW5pdGlhbGl6ZShgJHtjYWxsc2lnbn1gKTtcbiAgICAgICAgY29uc3QgcDIgPSBpbml0aWFsaXplKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMik7XG4gICAgICAgIC8vIGhhdmUgQUkgcGxhY2UgZmxlZXQsIHJhbmRvbWx5XG4gICAgICAgIC8vIG5lZWRzIHRvIGJlIGNoZWNrZWQgISEhXG4gICAgICAgIC8vIHAyLnBsYXllci5wbGFjZUZsZWV0KHAxKTtcbiAgICAgICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgICAgICAvLyBuZWVkcyB0byBpbnZva2UgZm4gZm9yIHVzZXIgdG8gcGxhY2UgdGhlaXIgc2hpcHMuLi4gISEhXG4gICAgICAgIG1haW4ocGFyZW50RE9NLCBwMS5nYiwgcDEuZmxlZXQuZGVzdHJveWVyKTtcbiAgICAgICAgLy8gcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQocDEuZ2IsIHRydWUsICgoeCwgZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIC8vICAgICBob3ZlcihlLnRhcmdldCwgcDEuZ2IpO1xuICAgICAgICAvLyB9KSkpO1xuICAgICAgICAvLyBhZGRIb3ZlcihwMS5nYik7XG4gICAgICAgIC8vIGluaXRpYWwgdHVybiA/XG4gICAgICAgIC8vIG5lZWQgdG8gcGFzcyBpbiBwMS5ib2FyZCBhbmQgcDIuYm9hcmQgKGNoYW5nZSBpbml0aWFsIHR1cm4gZm4pXG4gICAgICAgIGNvbnNvbGUubG9nKHAyLmdiLmJvYXJkKTtcbiAgICAgICAgLy8gaW5pdGlhbFR1cm4ocDEuZ2IsIHAyLmdiLCBwYXJlbnRET00pXG4gICAgICAgIHBsYXllck9uZSA9IHAxO1xuICAgICAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAgICAgcmV0dXJuIHsgcDEsIHAyIH1cbiAgICB9XG4gICAgY29uc3QgcmVzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZXcgcGxheWVyc1xuICAgICAgICAvLyBuZXcgZ2FtZWJvYXJkc1xuICAgICAgICAvLyBuZXcgc2hpcCBsb2NhdGlvbnNcbiAgICAgICAgLy8gZGlzcGxheSBeXnRoZXNlXG4gICAgICAgIC8vIC0+IGdvIHRvIGluaXRpYWwgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIHBsYWNlIHNoaXBzIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBtYWluIHBhZ2UsIGxldCBiYXR0bGUgYmVnaW5cbiAgICAgICAgLy8gd2hhdCBlbHNlP1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydGZuJyk7IFxuICAgIH1cbiAgICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICAgIC8vIGRvIGkgbmVlZCA/ICEhIVxuICAgIGxldCBjdXJyZW50UmVzdWx0ID0ge307XG4gICAgY29uc3QgdHVybiA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAvLyBkb2VzIGl0IG5lZWQgYSBjaGVjaz9cbiAgICAgICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWthIHVzZXIgY2xpY2tlZCBvbiBjb29yZGluYXRlcyBmb3IgYSBzZWNvbmQgdGltZVxuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIHRydWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIGRvbSBmdW5jdGlvbiBwcm9tcHRpbmcgdXNlciB0byB0cnkgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiBuZXcgY29vcmRpbmF0ZXMsIHR1cm4gY2FuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBhaSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdC52YWx1ZSwgY29tcEJvYXJkRE9NKTtcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0LnZhbHVlLCByZXN1bHQuc3VuaywgcmVzdWx0LnNoaXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHN1bmtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGRpZmZlcmVudCBtZXNzYWdlLi4uXG4gICAgICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFpIHBsYXllciBtYWtlcyBhdHRhY2tcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gcDEgZ2FtZWJvYXJkXG4gICAgICAgICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLmF0dGFjayhwbGF5ZXJPbmUuZ2IpO1xuICAgICAgICAgICAgbWFya0NlbGwocmVzdWx0LmNvb3JkWzBdLCByZXN1bHQuY29vcmRbMV0sIHJlc3VsdC5vYmoudmFsdWUsIHBsYXllckJvYXJkRE9NKTtcbiAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQub2JqLnZhbHVlLCByZXN1bHQub2JqLnN1bmssIHJlc3VsdC5vYmouc2hpcCwgZmFsc2UpO1xuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYXllclR1cm4gJiYgKCFyZXN1bHQuYWxsU3VuaykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1cm4oZmFsc2UpOyBcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIC8vIHJ1biBnYW1lb3ZlciBmblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgdGhyb3dpbmcgZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAvLyBuZWVkcyByZXN0YXJ0Rm4gISEhXG4gICAgICAgICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyLCByZXN0YXJ0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxUdXJuLCBzdGFydEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgR2l0aHViIGZyb20gJy4vaWNvbnMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi9pY29ucy9saW5rZWRpbi5zdmcnO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG4vLyBidWlsZCBpbml0aWFsIHBhZ2Vcbi8vIHB0IDEgLSBoZWFkZXIgYW5kIGZvb3RlciBcbi8vIHB0IDIgLSBib2R5ICh0aXRsZSwgaW5zdHJ1Y3Rpb25zLCB1c2VyIG5hbWUgaW5wdXQsIHN0YXJ0IGJ0bilcblxuLy9cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlclRpdGxlJ30pO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZEM7XG59XG4vL1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9vdGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb290ZXJCb3hcIn0pO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGlua0NvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIiwgXCJhbHRcIjogXCJHaXRodWIgUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2dpdEljb24nfSk7O1xuICAgIGdpdEljb24uc3JjID0gR2l0aHViO1xuICAgIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICAgIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsIFwiYWx0XCI6IFwiTGlua2VkSW4gUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgbGlua0ljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdsaW5rSWNvbid9KTtcbiAgICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRleHRDb250YWluZXJcIn0pO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtMaW5rKTtcbiAgICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RDO1xufVxuLy8gXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ21haW5Db250YWluZXInfSk7XG4gICAgY29uc3QgaW5pdGlhbEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbml0aWFsQ29udGVudCd9KTtcbiAgICBjb25zdCBpbmZvQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9uc0NvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnN0cnVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9ucyd9KTtcbiAgICBpbnN0cnVjdC50ZXh0Q29udGVudCA9ICdFbGltaW5hdGUgdGhlIGVuZW15JztcbiAgICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnB1dENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6ICd0ZXh0JywgaWQ6ICd1c2VybmFtZScsIGNsYXNzOiAnaW5wdXRGaWVsZCcsIHBsYWNlaG9sZGVyOiAnUGxheWVyIDEnfSk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2ZvcjogJ3VzZXJuYW1lJ30pO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnVXNlcm5hbWU6JztcbiAgICBjb25zdCBzdGFydEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdzdGFydENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3N0YXJ0J30pO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUhJ1xuXG4gICAgLy8gbGlzdGVuZXIgYW5kIGhlbHBlcnNcbiAgICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmVlZCBhIGNoZWNrIGlmIGlucHV0IGlzIGVtcHR5ICEhIVxuICAgICAgICBjb25zdCBjYWxsc2lnbiA9IGlucHV0LnZhbHVlO1xuICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICAvLyBpbml0aWFsaXplIGdhbWUgbG9vcD9cbiAgICAgICAgLy8gbG9vcC5pbml0aWFsVHVybihtYWluQyk7XG4gICAgICAgIGxvb3Auc3RhcnRHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gICAgfVxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEZuKCk7XG4gICAgfSlcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluQy5hcHBlbmRDaGlsZChpbml0aWFsQyk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICAgIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbnB1dEMpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKHN0YXJ0Qyk7XG4gICAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgIHJldHVybiBtYWluQztcbn1cblxuLy9cbmNvbnN0IG1ha2VJbml0aWFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2JvZHknfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb20uYnVpbGRDb21tcygpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYm9keSk7XG59XG5jb25zdCBtYWtlSW5pdGlhbExpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ib2R5Jyk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbkNvbnRlbnQoKSwgYm9keS5jaGlsZHJlblsyXSk7XG59XG5leHBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiOyBcblxuLy8gZnJvbSBpbml0aWFsLCBnbyB0byAxIGJvYXJkIChlbXB0eSlcbi8vIGFib3ZlLCBhIGJ1dHRvbiB0byBzd2l0Y2ggYXhpc1xuLy8gYWJvdmUsIGEgY29tbXVuaWNhdGlvbiBiYXIgKGUuZy4gXCJQbGFjZSB5b3VyIGNhcnJpZXJcIilcbi8vXG4vLyBob3ZlciBvdmVyIGJvYXJkLCBzaGFkb3cgb3V0bGluZSBvZiBzaGlwIHNpemUsIHJvdGF0ZXMgd2hlbiBheGlzIGJ0biBjbGlja2VkXG4vLyBjbGljayBvbiBib2FyZCwgcGxhY2VzIHNoaXAgYWNjb3JkaW5nIHRvIHRob3NlIGNvb3JkaW5hdGVzXG4vLyBnb2VzIHRocm91Z2ggZWFjaCBzaGlwXG4vLyBhZnRlciBsYXN0IHNoaXAsIHRha2VzIGJvYXJkIGFuZCBtYWtlcyBpdCBwMS5nYi5ib2FyZFxuLy8gcGFnZSBmYWRlcyBvdXQsIHRoZW4gbG9hZCBsb29wLmluaXRpYWx0dXJuIFxuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRW1wdHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZSgxMCk7XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IChib2FyZCwgc2hpcCwgaW5wdXQpID0+IHtcbiAgICAgICAgLy8gY2FsbCBkb20gZnVuY3Rpb24gLT4gZGlzcGxheSBpbnN0cnVjdGlvbjogJ3BsYWNlIHlvdXIgc2hpcCdcbiAgICAgICAgaWYgKCEoYm9hcmQucGxhY2VTaGlwKHNoaXAsIHRydWUsIGlucHV0WzBdLCBpbnB1dFsxXSkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHZhbGlkIGVzZSEnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhhdCB3ZW50Li4/Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYm9hcmQpO1xuXG4gICAgfVxuICAgIGNvbnN0IGZsZWV0ID0gKHBsYXllciwgaW5wdXQpID0+IHtcbiAgICAgICAgLy8gbmVlZCB0byBvbmx5IGNyZWF0ZSBPTkUgbmV3IGJvYXJkLCBhbmQgZ2V0IGFsbCB0aGUgc2hpcHMgcGxhY2VkIG9uIGl0LlxuICAgICAgICBjb25zdCBib2FyZCA9IGNyZWF0ZUVtcHR5KCk7XG4gICAgICAgIHNoaXAoYm9hcmQsIHBsYXllci5mbGVldC5jYXJyaWVyLCBpbnB1dClcbiAgICAgICAgLy8gY29uc3Qgc2hpcEFycmF5ID0gT2JqZWN0LmtleXMocGxheWVyLmZsZWV0KTtcbiAgICAgICAgLy8gc2hpcEFycmF5LmZvckVhY2goc2hpcCA9PiB7XG5cbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcCwgZmxlZXQgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2U7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuXG5sZXQgYXhpcyA9IHRydWU7XG5jb25zdCBjdXJyZW50QXhpcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXhpcztcbn1cbmNvbnN0IGNyZWF0ZVBsYWNlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicGxhY2VDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3BsYWNlSW5zdHJ1Y3Rpb25zJ30pO1xuICAgIGNvbnN0IGJ1dHRvbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUJ0bkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBheGlzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYXhpc0J0bid9KTtcbiAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYEF4aXM6IFhgXG4gICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgIHJhbmRvbUJ0bi50ZXh0Q29udGVudCA9ICdSYW5kb20nO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGF4aXMgPSAhYXhpcztcbiAgICAgICAgbGV0IHRleHQgPSBheGlzID8gJ1gnIDogJ1knO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYEF4aXM6ICR7dGV4dH1gO1xuICAgICAgICAvLyBkZWxldGUgY3VycmVudCBib2FyZFxuICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgLy8gYnVpbGQgbmV3IGJvYXJkIHcvIGNvcnJlY3QgbGlzdGVuZXJzXG4gICAgICAgIHBlclNoaXAoY3VycmVudERPTSwgY3VycmVudEJvYXJkLCBjdXJyZW50U2hpcCk7XG4gICAgfSlcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGFjZSBmbGVldCByYW5kb21seSEnKTtcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG4vLyBcbmNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgZ2FtZWJvYXJkLmNoZWNrUGxhY2Uoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5jb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuaWQpO1xuICAgIGxldCBuZXdJZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkraX0ke2Nvb3JkWzFdfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJZCA9IGAke2Nvb3JkWzBdfSR7TnVtYmVyKGNvb3JkWzFdKStpfWA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JheVwiO1xuICAgIH1cbn1cbmNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFt4LCB5XSk7XG59XG5jb25zdCBjbGljayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrTGlzdGVuZXIoeCwgeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50QXhpcygpKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5jb25zdCBob3ZlciA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyBjb3VsZCBhZGQgYSBjbGFzcy4uLlxuICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodExlbmd0aChlbGVtZW50LCBzaGlwLmxlbmd0aCk7XG4gICAgICAgIH07XG4gICAgfSlcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgZ3JpZC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbmNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgICBob3ZlcihjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICBjbGljayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgIH0pXG59XG5sZXQgY3VycmVudEJvYXJkO1xubGV0IGN1cnJlbnRTaGlwO1xubGV0IGN1cnJlbnRET007XG5jb25zdCB1cGRhdGVDdXJyZW50cyA9IChwYXJlbnQsIGJvYXJkLCBzaGlwKSA9PiB7XG4gICAgY3VycmVudERPTSA9IHBhcmVudDtcbiAgICBjdXJyZW50Qm9hcmQgPSBib2FyZDtcbiAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG59XG5jb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXJCb2FyZCwgdHJ1ZSkpO1xuICAgIGFkZENlbGxMaXN0ZW5lcnMocGxheWVyQm9hcmQsIHNoaXApO1xuICAgIHVwZGF0ZUN1cnJlbnRzKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApO1xufVxuY29uc3QgbWFpbiA9IChwYXJlbnRET00sIHBsYXllckJvYXJkLCBzaGlwKSA9PiB7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZVBsYWNlRGlzcGxheSgpKTtcbiAgICBwZXJTaGlwKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApO1xufVxuZXhwb3J0IHsgaG92ZXIsIG1haW4gfTsiLCIvLyBwbGF5ZXIgZmFjdG9yeSBhbmQgQUkgbG9naWNcblxuY29uc3QgUGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuICAgIGxldCB3aW5zID0gMDtcbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbiAgICB9XG4gICAgY29uc3QgYWRkV2luID0gKCkgPT4gd2lucyArPSAxO1xuICAgIHJldHVybiB7IGNvZGVuYW1lLCB3aW5zLCBhdHRhY2ssIGFkZFdpbiB9O1xufVxuY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWkgPSBQbGF5ZXJGYWN0b3J5KCdBSSBQbGF5ZXInKTtcbiAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4gICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfZ2VuZXJhdGVDb29yZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIHdoaWxlICghKF9hdmFpbGFibGUoY29vcmQpKSkge1xuICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICAgIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gX2dlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4gICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIG9iai5jb29yZCA9IGNvb3JkO1xuICAgICAgICAgICAgb2JqLm9iaiA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlRmxlZXQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIC8vIGkgdGhpbmsgdGhpcyBjYW4gYmUgdXNlZCBmb3IgZWl0aGVyIHBsYXllci4uLm1heWJlIG1ha2UgYSBidXR0b24gZm9yIHVzZXIgKGluIGluaXRpYWwpICEhIVxuICAgICAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgICAgICBjb25zdCBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhwbGF5ZXIuZmxlZXQpO1xuICAgICAgICBmbGVldEtleXMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgd2hpbGUgKCEocGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSkpKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IF9yYW5kb21BeGlzKCk7XG4gICAgICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFpLCB7IGF0dGFjayB9LCB7IHBsYWNlRmxlZXQgfSk7XG59XG5cbmV4cG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyfSIsIi8vIHNoaXAgbG9naWNcblxuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBsZXQgbWFya2VyID0gbGVuZ3RoO1xuICAgIGlmIChtYXJrKSB7XG4gICAgICAgIG1hcmtlciA9IG1hcms7XG4gICAgfVxuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgICAgIGhpdCgpO1xuICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgbWFya2VyLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1c31cbn07XG5jb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1YiA9IFNoaXBGYWN0b3J5KDMsIDEpO1xuICAgIGNvbnN0IHBhdHJvbCA9IFNoaXBGYWN0b3J5KDIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDMpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcEZhY3RvcnkoNSk7XG4gICAgcmV0dXJuIHsgc3ViLCBwYXRyb2wsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2FycmllciB9XG59XG5cbmV4cG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH07IiwiLy8gRE9NIGhlbHBlciBmdW5jdGlvbnNcbi8vIC0+IGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY2xlYXJEaXYgPSAoZGl2KSA9PiB7XG4gICAgd2hpbGUgKGRpdi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IG1ha2VJbml0aWFsIH0gZnJvbSAnLi9pbml0aWFsRE9NJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5tYWtlSW5pdGlhbCgpO1xuXG4vLyBsb29wLnR1cm4oWzUsIDVdKTtcbi8vIGxvb3AudHVybihbMCwgMF0pO1xuXG5cbi8vIGNvbnN0IFNoaXBGYWN0b3J5ID0gKGlucHV0KSA9PiB7XG4vLyAgICAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4vLyAgICAgbGV0IGhpdHMgPSAwO1xuLy8gICAgIGxldCBzdW5rID0gZmFsc2U7XG4vLyAgICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGhpdHM7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbi8vICAgICAgICAgaGl0cyArPSAxO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4vLyAgICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbi8vICAgICAgICAgaGl0KCk7XG4vLyAgICAgICAgIHJldHVybiBpc1N1bmsoKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1c31cbi8vICAgICB9O1xuLy8gY29uc3Qgc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuXG4vLyBjb25zdCBib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgYm9hcmQgPSBbXTtcbi8vICAgICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBsZXQgcm93ID0gW107XG4vLyAgICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxsZW5ndGg7IGorKykge1xuLy8gICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBib2FyZDtcbi8vICAgICB9XG4vLyAgICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4vLyAgICAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoX2NoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbi8vICAgICAgICAgX2NoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBgRGVuaWVkLmA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGJvYXJkW3graV1beV0gPSBvYmplY3QubGVuZ3RoO1xuLy8gICAgICAgICB9fSBlbHNlIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kraV0gPSBvYmplY3QubGVuZ3RoO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4vLyAgICAgICAgIHJldHVybiBgUGxhY2VkLmBcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgICAgICBsZXQgdmFsdWU7XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA+IDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPiAwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZTtcbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb25zdCBfd2hpY2hTaGlwID0gKGlucHV0KSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBzaGlwQXJyYXkuZmluZChpbmRleCA9PiBpbmRleC5sZW5ndGggPT09IGlucHV0KTtcbi8vICAgICB9XG4vLyAgICAgLy8gcHJldHR5IHN1cmUgYWxsU3VuayBpcyB3b3JraW5nLCBcbi8vICAgICAvLyBidXQgSSBkaWRuJ3QgbWFuaXB1bGF0ZSB0aGUgYm9hcmQgdG8gaGF2ZSBhbGwgdGhlIHNoaXBzIHN1bmsgdG8gdGVzdCBpdCBmeWkgISEhXG4vLyAgICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeShpbmRleCA9PiBpbmRleC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4vLyAgICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuLy8gICAgIGNvbnN0IF9hZGRNaXNzID0gKHgsIHkpID0+IG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuLy8gICAgIGNvbnN0IF91cGRhdGVCb2FyZCA9ICh4LCB5LCB2YWx1ZSkgPT4gYm9hcmRbeF1beV0gPSB2YWx1ZTtcbi8vICAgICBjb25zdCBfdXBkYXRlTWlzcyA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIF9hZGRNaXNzKHgsIHkpO1xuLy8gICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgLTEpO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfdXBkYXRlSGl0ID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgY29uc3QgdGhlU2hpcCA9IF93aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuLy8gICAgICAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4vLyAgICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAoYm9hcmRbeF1beV0gKyAxMCkpO1xuLy8gICAgICAgICByZXR1cm4gc3Vuaztcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZSA9IGJvYXJkW3hdW3ldO1xuLy8gICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbi8vICAgICAgICAgICAgIGlmIChzdW5rKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBvdmVyJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmlyZSBnYW1lT3ZlciBmdW5jdGlvblxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB3aGF0IGFsbCBpcyBuZWVkZWQgaW5zaWRlP1xuLy8gICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4vLyAgICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4vLyAgICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4vLyAgICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuLy8gICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4vLyAgICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbi8vICAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vIGFkZCBtaXNzIHRvIGFycmF5XG4vLyAgICAgICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbi8vICAgICAgICAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuLy8gICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuLy8gICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuLy8gICAgICAgICAgICAgcmV0dXJuICdNaXNzJztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSk7XG4vLyAgICAgICAgIH0gXG4vLyAgICAgICAgIC8vIG5lZWQgdG8gbG9vcCBiYWNrIC0+IG5lZWQgdXNlciB0byBnaXZlIG5ldyBjb29yZGluYXRlc1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfSAgIFxuLy8gICAgIHJldHVybiB7IGNyZWF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG4vLyB9O1xuLy8gY29uc3QgcGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuLy8gICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBjb2RlbmFtZSwgd2luczogMCwgYXR0YWNrIH07XG4vLyB9XG4vLyBjb25zdCBjb21wdXRlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCB7Y29kZW5hbWV9ID0gcGxheWVyRmFjdG9yeSgnRWFzeSBBSScpLmNvZGVuYW1lO1xuLy8gICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbi8vICAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4vLyAgICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4vLyAgICAgICAgIHJldHVybiBbeCwgeV07XG4vLyAgICAgfTtcbi8vICAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbi8vICAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbi8vICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4vLyAgICAgICAgIGlmIChfYXZhaWxhYmxlKGNvb3JkKSkge1xuLy8gICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuLy8gICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbi8vICAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbi8vICAgICAgICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgLy8gdHJ5IGFnYWluIC0gdy8gbmV3IGNvb3JkaW5hdGVzXG4vLyAgICAgICAgICAgICBhdHRhY2soKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBjb2RlbmFtZSwgYXR0YWNrLCB3aW5zOiAwfTtcbi8vIH1cbi8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4vLyBjb25zdCBnYW1lYm9hcmQgPSBib2FyZEZhY3RvcnkoKTtcbi8vIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkLmNyZWF0ZSgxMCk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHRydWUsIDAsIDApO1xuLy8gY29uc3Qgc2hpcDIgPSBTaGlwRmFjdG9yeSg1KTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDIsIGZhbHNlLCA0LCA0KTtcbi8vIGNvbnN0IHNoaXAzID0gU2hpcEZhY3RvcnkoMyk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAzLCBmYWxzZSwgOSwgMCk7XG4vLyBjb25zb2xlLmxvZyhib2FyZCk7XG4vLyBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCd3aGFtbycpO1xuLy8gY29uc29sZS5sb2cocGxheWVyKTtcbi8vIGxldCBhaSA9IGNvbXB1dGVyKCk7XG4vLyBleHBvcnQgeyBzaGlwLCBwbGF5ZXJGYWN0b3J5IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9