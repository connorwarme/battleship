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
            return `Denied.`;
        }
        if (axis) {
            for (let i = 0; i<object.length; i++) {
                board[x+i][y] = object.length;
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = object.length;
            }
        }
        shipArray.push(object);
        return `Placed.`
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
        return shipArray.find(index => index.length === input);
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
    const initialTurn = (parentDOM) => {
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(gb1, false));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(gb1, parentDOM.firstChild);
        playerBoardDOM = parentDOM.firstChild;
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(gb2, true));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(gb2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild;
    }
    const startGame = () => {
        const p1 = initialize('Player 1');
        const p2 = initialize(false);

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
    return { initialTurn, turn };
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
        const p1 = (0,_players__WEBPACK_IMPORTED_MODULE_3__.PlayerFactory)(input.value);
        // clear main container -> prep for board display
        clearMain();
        // initialize game loop?
        _gameloop__WEBPACK_IMPORTED_MODULE_4__["default"].initialTurn(mainC);
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
    return Object.assign({}, ai, { attack });
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

const ShipFactory = (input) => {
    const length = input;
    let hits = 0;
    let sunk = false;
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
    return { length, sunk, getHits, hit, isSunk, hitPlus}
};
const buildFleet = () => {
    const sub = ShipFactory(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGNBQWMsVUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMDBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmRpc3BsYXlCb2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIHdpZHRoOiA0OHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLFFBQVE7SUFDUixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuLmNvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgd2lkdGg6IDQ4cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2l0SWNvbixcXG4ubGlua0ljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKF9jaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIF9jaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYERlbmllZC5gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lmxlbmd0aDtcbiAgICAgICAgfX0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5K2ldID0gb2JqZWN0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgICAgICByZXR1cm4gYFBsYWNlZC5gXG4gICAgfVxuICAgIGNvbnN0IF9jaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3doaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubGVuZ3RoID09PSBpbnB1dCk7XG4gICAgfVxuICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4gICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSBfd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoc3Vuaykge1xuICAgICAgICAgICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4gICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4gICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgICAgIC8vIGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgICAgICB9IFxuICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgb2JqLnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9ICAgXG4gICAgcmV0dXJuIHsgYm9hcmQsIGNyZWF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGlzcGxheUJvYXJkJ30pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gfSk7XG4gICAgICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWB9KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvb3AudHVybihbaSwgal0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheUJvYXJkO1xufVxuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIGJvb2xlYW4sIGJvYXJkRE9NKSA9PiB7XG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsIH07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbWFrZUluaXRpYWwgZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbUNvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbXMnfSk7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGNvbW1zIGdvIGhlcmVgO1xuICAgICAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgICAgIHJldHVybiBjb21tQztcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gWydlbXB0eScsICdzdWJtYXJpbmUnLCAncGF0cm9sIGJvYXQnLCAnY3J1aXNlcicsICdkZXN0cm95ZXInLCAnYmF0dGxlIGNhcnJpZXInXTtcbiAgICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbezA6ICd5b3UnLCAxOiAndGhlaXInfSwgezA6ICd0aGV5JywgMTogJ3lvdXInfV07XG4gICAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmBcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgOiBgbWlzc2VzIWBcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyLCByZXN0YXJ0Rm4pID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICAgICAgY2xlYXJEaXYobWFpbkMpO1xuICAgICAgICAvLyBidWlsZCBjb250ZW50XG4gICAgICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbmRDb250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Jhbm5lcid9KTtcbiAgICAgICAgYmFubmVyLnRleHRDb250ZW50ID0gJ0dhbWUgT3ZlciEnXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dpbm5lcid9KTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICAgICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncGxheUFnYWluJ30pO1xuICAgICAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgICAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRlbnRcbiAgICAgICAgICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXN0YXJ0Rm4oKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBtYWtlSW5pdGlhbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnVpbGRDb21tcywgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcblxuLy8gZ2FtZSBsb29wXG4vLyBpbml0aWFsaXplIHcvIHAxIGFuZCBnYW1lYm9hcmQxXG4vLyBwbGFjZSBzaGlwc1xuLy8gY3JlYXRlIHAyIGFuZCBnYW1lYm9hcmQyXG4vLyBwbGFjZSBzaGlwc1xuLy8gdHVybiBsb2dpY1xuLy8gLT4gdGFrZSBjb29yZGluYXRlcywgY29uZmlybSBsZWdhbCBwbGF5IChub3QgcmVwZWF0KVxuLy8gLT4gbGF1bmNoIGF0dGFja1xuLy8gICAgICAtPiBoaXRcbi8vICAgICAgICAgICAgLT4gc3Vuaz9cbi8vICAgICAgICAgICAgICAgIC0+IHllczogLT4gYWxsIHN1bms/XG4vLyAgICAgICAgICAgICAgICAgICAgLT4geWVzOiBlbmQgZ2FtZSAoZGlzcGxheSlcbi8vICAgICAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgIC0+IG1pc3Ncbi8vICAgICAgICAgIC0+IHN3aXRjaCB0dXJuc1xuXG5jb25zdCBwMSA9IFBsYXllckZhY3RvcnkoJ0FsZnJlZG8nKTtcbmNvbnN0IGdiMSA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IxLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMWEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAxYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDFjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYSwgZmFsc2UsIDAsIDApO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWIsIGZhbHNlLCAyLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFjLCBmYWxzZSwgNCwgMCk7XG5jb25zb2xlLmxvZyhnYjEuYm9hcmQpO1xuXG5jb25zdCBwMiA9IGNvbXB1dGVyKCk7XG5jb25zdCBnYjIgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMi5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDJhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMmIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAyYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmEsIGZhbHNlLCA1LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJiLCBmYWxzZSwgNywgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYywgZmFsc2UsIDksIDApO1xuXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgIHBsYXllciA9IGNvbXB1dGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyID0gUGxheWVyRmFjdG9yeShgJHtwbGF5ZXJOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIGdiLmNyZWF0ZSgxMCk7XG4gICAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9XG59XG5cbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyQm9hcmRET007XG4gICAgbGV0IGNvbXBCb2FyZERPTTtcbiAgICBjb25zdCBzd2l0Y2hUdXJucyA9ICgpID0+IHBsYXllclR1cm4gPSAhcGxheWVyVHVybjtcbiAgICBjb25zdCBpbml0aWFsVHVybiA9IChwYXJlbnRET00pID0+IHtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQoZ2IxLCBmYWxzZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoZ2IxLCBwYXJlbnRET00uZmlyc3RDaGlsZCk7XG4gICAgICAgIHBsYXllckJvYXJkRE9NID0gcGFyZW50RE9NLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKGdiMiwgdHJ1ZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoZ2IyLCBwYXJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZDtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwMSA9IGluaXRpYWxpemUoJ1BsYXllciAxJyk7XG4gICAgICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG5cbiAgICB9XG4gICAgY29uc3QgcmVzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZXcgcGxheWVyc1xuICAgICAgICAvLyBuZXcgZ2FtZWJvYXJkc1xuICAgICAgICAvLyBuZXcgc2hpcCBsb2NhdGlvbnNcbiAgICAgICAgLy8gZGlzcGxheSBeXnRoZXNlXG4gICAgICAgIC8vIC0+IGdvIHRvIGluaXRpYWwgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIHBsYWNlIHNoaXBzIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBtYWluIHBhZ2UsIGxldCBiYXR0bGUgYmVnaW5cbiAgICAgICAgLy8gd2hhdCBlbHNlP1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydGZuJyk7IFxuICAgIH1cbiAgICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICAgIC8vIGRvIGkgbmVlZCA/ICEhIVxuICAgIGxldCBjdXJyZW50UmVzdWx0ID0ge307XG4gICAgY29uc3QgdHVybiA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHAxIDogcDI7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIC8vIGRvZXMgaXQgbmVlZCBhIGNoZWNrP1xuICAgICAgICBpZiAocGxheWVyVHVybikge1xuICAgICAgICAgICAgcmVzdWx0ID0gZ2IyLnJlY2VpdmVBdHRhY2soaW5wdXRbMF0sIGlucHV0WzFdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBha2EgdXNlciBjbGlja2VkIG9uIGNvb3JkaW5hdGVzIGZvciBhIHNlY29uZCB0aW1lXG4gICAgICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgdHJ1ZSwgXCJcIik7XG4gICAgICAgICAgICAgICAgLy8gZG9tIGZ1bmN0aW9uIHByb21wdGluZyB1c2VyIHRvIHRyeSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlciBjbGlja2VkIG9uIG5ldyBjb29yZGluYXRlcywgdHVybiBjYW4gY29tcGxldGVcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBtb3ZlIG9uIGFpIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgIG1hcmtDZWxsKGlucHV0WzBdLCBpbnB1dFsxXSwgcmVzdWx0LnZhbHVlLCBjb21wQm9hcmRET00pO1xuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQudmFsdWUsIHJlc3VsdC5zdW5rLCByZXN1bHQuc2hpcCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc3Vua1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgZGlmZmVyZW50IG1lc3NhZ2UuLi5cbiAgICAgICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBwMSBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJlc3VsdCA9IHAyLmF0dGFjayhnYjEpO1xuICAgICAgICAgICAgbWFya0NlbGwocmVzdWx0LmNvb3JkWzBdLCByZXN1bHQuY29vcmRbMV0sIHJlc3VsdC5vYmoudmFsdWUsIHBsYXllckJvYXJkRE9NKTtcbiAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQub2JqLnZhbHVlLCByZXN1bHQub2JqLnN1bmssIHJlc3VsdC5vYmouc2hpcCwgZmFsc2UpO1xuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYXllclR1cm4gJiYgKCFyZXN1bHQuYWxsU3VuaykpIHtcbiAgICAgICAgICAgIHR1cm4oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIC8vIHJ1biBnYW1lb3ZlciBmblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgdGhyb3dpbmcgZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAvLyBuZWVkcyByZXN0YXJ0Rm4gISEhXG4gICAgICAgICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyLCByZXN0YXJ0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGluaXRpYWxUdXJuLCB0dXJuIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb29wOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tICcuL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vaWNvbnMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCB7IFBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuLy8gYnVpbGQgaW5pdGlhbCBwYWdlXG4vLyBwdCAxIC0gaGVhZGVyIGFuZCBmb290ZXIgXG4vLyBwdCAyIC0gYm9keSAodGl0bGUsIGluc3RydWN0aW9ucywgdXNlciBuYW1lIGlucHV0LCBzdGFydCBidG4pXG5cbi8vXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJUaXRsZSd9KTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRDO1xufVxuLy9cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvb3RlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBmb290ZXJCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9vdGVyQm94XCJ9KTtcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImxpbmtDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nvbm5vcndhcm1lXCIsIFwiYWx0XCI6IFwiR2l0aHViIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdnaXRJY29uJ30pOztcbiAgICBnaXRJY29uLnNyYyA9IEdpdGh1YjtcbiAgICBnaXRJY29uLmFsdCA9IFwiR2l0aHViIFByb2ZpbGVcIjtcbiAgICBjb25zdCBsaW5rTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY29ubm9yLXdhcm1lLTEwM2EwOTE2N1wiLCBcImFsdFwiOiBcIkxpbmtlZEluIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGxpbmtJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnbGlua0ljb24nfSk7XG4gICAgbGlua0ljb24uc3JjID0gTGlua2VkSW47XG4gICAgbGlua0ljb24uYWx0ID0gXCJMaW5rZWRJbiBQcm9maWxlXCI7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0ZXh0Q29udGFpbmVyXCJ9KTtcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQZXJlZ3Jpbm5pbmcgUHJvZHVjdGlvbnNcIjtcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBmb290Qy5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rTGluayk7XG4gICAgbGlua0xpbmsuYXBwZW5kQ2hpbGQobGlua0ljb24pO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBmb290Qztcbn1cbi8vIFxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtYWluQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluaXRpYWxDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5pdGlhbENvbnRlbnQnfSk7XG4gICAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnNDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnMnfSk7XG4gICAgaW5zdHJ1Y3QudGV4dENvbnRlbnQgPSAnRWxpbWluYXRlIHRoZSBlbmVteSc7XG4gICAgY29uc3QgaW5wdXRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5wdXRDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHt0eXBlOiAndGV4dCcsIGlkOiAndXNlcm5hbWUnLCBjbGFzczogJ2lucHV0RmllbGQnLCBwbGFjZWhvbGRlcjogJ1BsYXllciAxJ30pO1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICd1c2VybmFtZSd9KTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ1VzZXJuYW1lOic7XG4gICAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnc3RhcnRDb250YWluZXInfSk7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdzdGFydCd9KTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lISdcblxuICAgIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4gY2xlYXJEaXYobWFpbkMpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgYSBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eSAhISFcbiAgICAgICAgY29uc3QgcDEgPSBQbGF5ZXJGYWN0b3J5KGlucHV0LnZhbHVlKTtcbiAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3A/XG4gICAgICAgIGxvb3AuaW5pdGlhbFR1cm4obWFpbkMpO1xuICAgIH1cbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRGbigpO1xuICAgIH0pXG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgbWFpbkMuYXBwZW5kQ2hpbGQoaW5pdGlhbEMpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGluZm9DKTtcbiAgICBpbmZvQy5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5wdXRDKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChzdGFydEMpO1xuICAgIHN0YXJ0Qy5hcHBlbmRDaGlsZChzdGFydCk7XG5cbiAgICByZXR1cm4gbWFpbkM7XG59XG5cbi8vXG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2R5J30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCgpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbWFrZUluaXRpYWw7IiwiLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5cbmNvbnN0IFBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFdpbiA9ICgpID0+IHdpbnMgKz0gMTtcbiAgICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn1cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFpID0gUGxheWVyRmFjdG9yeSgnQUkgUGxheWVyJyk7XG4gICAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgbGV0IHkgPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuICAgIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8YXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMV0gPT09IGFycmF5WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgX2dlbmVyYXRlQ29vcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB3aGlsZSAoIShfYXZhaWxhYmxlKGNvb3JkKSkpIHtcbiAgICAgICAgICAgIGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cbiAgICBjb25zdCBhdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZCA9IF9nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgICAgICAvLyBhZGQgY29vcmRpbmF0ZXMgdG8gYXR0YWNrc0FycmF5XG4gICAgICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuICAgICAgICAgICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBvYmouY29vcmQgPSBjb29yZDtcbiAgICAgICAgICAgIG9iai5vYmogPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFpLCB7IGF0dGFjayB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgICAgIGhpdCgpO1xuICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG59O1xuY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICAgIHJldHVybiB7IHN1YiwgcGF0cm9sLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfVxufVxuXG5leHBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9OyIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgbWFrZUluaXRpYWwgZnJvbSAnLi9pbml0aWFsRE9NJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5tYWtlSW5pdGlhbCgpO1xuXG4vLyBsb29wLnR1cm4oWzUsIDVdKTtcbi8vIGxvb3AudHVybihbMCwgMF0pO1xuXG5cbi8vIGNvbnN0IFNoaXBGYWN0b3J5ID0gKGlucHV0KSA9PiB7XG4vLyAgICAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4vLyAgICAgbGV0IGhpdHMgPSAwO1xuLy8gICAgIGxldCBzdW5rID0gZmFsc2U7XG4vLyAgICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGhpdHM7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbi8vICAgICAgICAgaGl0cyArPSAxO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4vLyAgICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbi8vICAgICAgICAgaGl0KCk7XG4vLyAgICAgICAgIHJldHVybiBpc1N1bmsoKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1c31cbi8vICAgICB9O1xuLy8gY29uc3Qgc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuXG4vLyBjb25zdCBib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgYm9hcmQgPSBbXTtcbi8vICAgICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBsZXQgcm93ID0gW107XG4vLyAgICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxsZW5ndGg7IGorKykge1xuLy8gICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBib2FyZDtcbi8vICAgICB9XG4vLyAgICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4vLyAgICAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoX2NoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbi8vICAgICAgICAgX2NoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBgRGVuaWVkLmA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGJvYXJkW3graV1beV0gPSBvYmplY3QubGVuZ3RoO1xuLy8gICAgICAgICB9fSBlbHNlIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kraV0gPSBvYmplY3QubGVuZ3RoO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4vLyAgICAgICAgIHJldHVybiBgUGxhY2VkLmBcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCBhcnJheSA9IFtdO1xuLy8gICAgICAgICBsZXQgdmFsdWU7XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA+IDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPiAwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZTtcbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb25zdCBfd2hpY2hTaGlwID0gKGlucHV0KSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBzaGlwQXJyYXkuZmluZChpbmRleCA9PiBpbmRleC5sZW5ndGggPT09IGlucHV0KTtcbi8vICAgICB9XG4vLyAgICAgLy8gcHJldHR5IHN1cmUgYWxsU3VuayBpcyB3b3JraW5nLCBcbi8vICAgICAvLyBidXQgSSBkaWRuJ3QgbWFuaXB1bGF0ZSB0aGUgYm9hcmQgdG8gaGF2ZSBhbGwgdGhlIHNoaXBzIHN1bmsgdG8gdGVzdCBpdCBmeWkgISEhXG4vLyAgICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeShpbmRleCA9PiBpbmRleC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4vLyAgICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuLy8gICAgIGNvbnN0IF9hZGRNaXNzID0gKHgsIHkpID0+IG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuLy8gICAgIGNvbnN0IF91cGRhdGVCb2FyZCA9ICh4LCB5LCB2YWx1ZSkgPT4gYm9hcmRbeF1beV0gPSB2YWx1ZTtcbi8vICAgICBjb25zdCBfdXBkYXRlTWlzcyA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIF9hZGRNaXNzKHgsIHkpO1xuLy8gICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgLTEpO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfdXBkYXRlSGl0ID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgY29uc3QgdGhlU2hpcCA9IF93aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuLy8gICAgICAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4vLyAgICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAoYm9hcmRbeF1beV0gKyAxMCkpO1xuLy8gICAgICAgICByZXR1cm4gc3Vuaztcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZSA9IGJvYXJkW3hdW3ldO1xuLy8gICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4vLyAgICAgICAgICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbi8vICAgICAgICAgICAgIGlmIChzdW5rKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBvdmVyJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmlyZSBnYW1lT3ZlciBmdW5jdGlvblxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB3aGF0IGFsbCBpcyBuZWVkZWQgaW5zaWRlP1xuLy8gICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4vLyAgICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4vLyAgICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4vLyAgICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuLy8gICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4vLyAgICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbi8vICAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbi8vICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vIGFkZCBtaXNzIHRvIGFycmF5XG4vLyAgICAgICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbi8vICAgICAgICAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuLy8gICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuLy8gICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuLy8gICAgICAgICAgICAgcmV0dXJuICdNaXNzJztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSk7XG4vLyAgICAgICAgIH0gXG4vLyAgICAgICAgIC8vIG5lZWQgdG8gbG9vcCBiYWNrIC0+IG5lZWQgdXNlciB0byBnaXZlIG5ldyBjb29yZGluYXRlc1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfSAgIFxuLy8gICAgIHJldHVybiB7IGNyZWF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG4vLyB9O1xuLy8gY29uc3QgcGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuLy8gICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBjb2RlbmFtZSwgd2luczogMCwgYXR0YWNrIH07XG4vLyB9XG4vLyBjb25zdCBjb21wdXRlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCB7Y29kZW5hbWV9ID0gcGxheWVyRmFjdG9yeSgnRWFzeSBBSScpLmNvZGVuYW1lO1xuLy8gICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbi8vICAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4vLyAgICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4vLyAgICAgICAgIHJldHVybiBbeCwgeV07XG4vLyAgICAgfTtcbi8vICAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbi8vICAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4vLyAgICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuLy8gICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbi8vICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4vLyAgICAgICAgIGlmIChfYXZhaWxhYmxlKGNvb3JkKSkge1xuLy8gICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuLy8gICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbi8vICAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbi8vICAgICAgICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgLy8gdHJ5IGFnYWluIC0gdy8gbmV3IGNvb3JkaW5hdGVzXG4vLyAgICAgICAgICAgICBhdHRhY2soKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBjb2RlbmFtZSwgYXR0YWNrLCB3aW5zOiAwfTtcbi8vIH1cbi8vIGZvciB0ZXN0aW5nIHB1cnBvc2VzXG4vLyBjb25zdCBnYW1lYm9hcmQgPSBib2FyZEZhY3RvcnkoKTtcbi8vIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkLmNyZWF0ZSgxMCk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHRydWUsIDAsIDApO1xuLy8gY29uc3Qgc2hpcDIgPSBTaGlwRmFjdG9yeSg1KTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDIsIGZhbHNlLCA0LCA0KTtcbi8vIGNvbnN0IHNoaXAzID0gU2hpcEZhY3RvcnkoMyk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAzLCBmYWxzZSwgOSwgMCk7XG4vLyBjb25zb2xlLmxvZyhib2FyZCk7XG4vLyBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCd3aGFtbycpO1xuLy8gY29uc29sZS5sb2cocGxheWVyKTtcbi8vIGxldCBhaSA9IGNvbXB1dGVyKCk7XG4vLyBleHBvcnQgeyBzaGlwLCBwbGF5ZXJGYWN0b3J5IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9