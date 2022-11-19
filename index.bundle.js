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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.headerTitle {\n    font-family: Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 20px 0 0 0;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 20px;\n}\n.placeBtnContainer {\n    display: flex;\n    justify-content: center;\n}\n.placeBtnContainer > button {\n    font-size: 24px;\n    font-weight: 600;\n    padding: 10px 25px;\n    margin: 0 2vw;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 28px;\n    font-weight: 600;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-column: 2/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 24px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 18px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n}\n.playAgain:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,qDAAqD;AACzD;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,2CAA2C;IAC3C,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,SAAS;IACT,4BAA4B;IAC5B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,0BAA0B;IAC1B,uCAAuC;IACvC,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,4CAA4C;AAChD;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;;;IAGI,kBAAkB;AACtB;AACA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;AAC3B;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB;AACA;IACI,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,0BAA0B;AAC9B","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.headerTitle {\n    font-family: Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 20px 0 0 0;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 20px;\n}\n.placeBtnContainer {\n    display: flex;\n    justify-content: center;\n}\n.placeBtnContainer > button {\n    font-size: 24px;\n    font-weight: 600;\n    padding: 10px 25px;\n    margin: 0 2vw;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 28px;\n    font-weight: 600;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-column: 2/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 24px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 18px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n}\n.playAgain:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}"],"sourceRoot":""}]);
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
                object.coords.push([x+i, y]);
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = object.marker;
                object.coords.push([x, y+i]);
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
    const checkMiss = (length, axis, x, y) => {
        let array = [];
        let value;
        if (axis) {
            for (let i = 0; i<length; i++) {
                array.push(board[x+i][y] == -1);
            }
        } else {
            for (let i = 0; i<length; i++) {
                array.push(board[x][y+i] == -1);
            }
        }
        value = array.find(index => {
            return index == true;
        });
        return value;
    }
    const checkProb = (length, axis, x, y, hitCoordArray) => {
        let weight = 1;
        const shipCoords = [];
        for (let i=0; i<length; i++) {
            if (axis) {
                shipCoords.push([Number(x)+i, y]);
            } else {
                shipCoords.push([x, Number(y)+i]);
            }
        }
        hitCoordArray.forEach(coord => {
            for (let i=0; i<shipCoords.length; i++) {
                if (coord[0] == shipCoords[i][0]) {
                    if (coord[1] == shipCoords[i][1]) {
                        weight *= 50;
                    }
                }
            }
        })
        return weight;
        // need to compare shipCoordinates with hitCoordinatesArray (needs to be a fn parameter)
        // if yes, increase weight by factor of 5
        // if no, normal weight for cell counter for probMap
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
    const whichShip = (input) => {
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
        const theShip = whichShip(board[x][y]);
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
            // obj.value might need to be "-1" !!!
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
    return { board, create, placeShip, checkPlace, checkMiss, checkProb, checkOnBoard, whichShip, receiveAttack, allSunk };
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
/* harmony export */   "buildBoardAndLabel": () => (/* binding */ buildBoardAndLabel),
/* harmony export */   "displayShips": () => (/* binding */ displayShips),
/* harmony export */   "markCell": () => (/* binding */ markCell)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");



const attackHover = (element) => {
        // on enter, highlight
        element.addEventListener('mouseenter', () => {
            // check if cell has been clicked already
            if (element.classList.value == 'cell') {
                element.style.cursor = "crosshair";
                element.style.backgroundColor = "#38B000";
            } else {
                element.style.cursor = "not-allowed";
                element.style.backgroundColor = "#000000";
            }
        })
        element.addEventListener('mouseout', () => {
            const grid = Array.from(element.parentElement.children);
            // const grid = Array.from(document.querySelectorAll('div.cell'));
            grid.forEach(cell => {
                if (cell.classList.length == 1) {
                    cell.style.backgroundColor = "white";
                } else if (cell.classList.value == "cell hit") {
                    cell.style.backgroundColor = "rgb(208, 0, 0)";
                } else if (cell.classList.value == "cell miss") {
                    cell.style.backgroundColor = "rgb(35, 100, 170)"
                } else if (cell.classList.value == "cell sunk") {
                    cell.style.backgroundColor = "rgb(208, 0, 0)";
                }
            })
        })
    }
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
                gridCell.addEventListener('click', (e) => {
                    if (_gameloop__WEBPACK_IMPORTED_MODULE_1__["default"].getTurn()) {
                        funct([i, j], e);
                    }
                })
                attackHover(gridCell);
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
const markCell = (x, y, result, gb, boardDOM, emoji) => {
    if (result.sunk) {
        const ship = gb.whichShip(result.ship);
        ship.coords.forEach(coord => {
            boardDOM.children[coord[0]].children[coord[1]].classList = 'cell sunk';
            boardDOM.children[coord[0]].children[coord[1]].textContent = `${emoji}`;
        })
    } else if (result.value) {
        boardDOM.children[x].children[y].classList.add('hit');
        boardDOM.children[x].children[y].textContent = "🔥";
    } else {
        boardDOM.children[x].children[y].classList.add('miss');
        boardDOM.children[x].children[y].textContent = "🌊";
    }
}
const displayLabel = (message) => {
    const labelContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "labelContainer"});
    const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'boardLabel'});
    label.textContent = `${message} waters`;
    labelContainer.appendChild(label);
    return labelContainer;
}
const buildBoardAndLabel = (object, boolean, message, funct) => {
    const boardContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "boardContainer"});
    boardContainer.appendChild(displayLabel(message));
    boardContainer.appendChild(buildBoard(object, boolean, funct));
    return boardContainer;
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
        comms.textContent = ``;
        comms.style.display = "none";
        commC.appendChild(comms);
        return commC;
    }
    const clear = () => {
        commC.firstChild.textContent = "";
        commC.removeChild(commC.lastChild);
    }
    const instruct = (player, ship) => {
        const comms = commC.firstChild;
        comms.textContent = `${player.codename}: Place your ${ship}.`;
    }
    const message = (player, content) => {
        commC.firstChild.textContent = `${player.codename}: ${content}`;
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
            commC.parentElement.removeChild(commC);
            //
            restartFn();
            //
            (0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__.makeInitialLite)();
        });
    }
    return { buildComms, clear, instruct, message, updateText, endGame };
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
/* harmony import */ var _placeFleetDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeFleetDOM */ "./src/placeFleetDOM.js");
/* harmony import */ var _legendDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./legendDOM */ "./src/legendDOM.js");








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
    const getTurn = () => {
        return playerTurn;
    }
    const switchTurns = () => playerTurn = !playerTurn;
    const initialTurn = (board1, board2, parentDOM) => {
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoardAndLabel)(board1, false, 'friendly'));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(board1, parentDOM.firstChild.lastChild);
        playerBoardDOM = parentDOM.firstChild.lastChild;
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoardAndLabel)(board2, true, 'enemy', loop.turn));
        // displayShips(board2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild.lastChild;
        parentDOM.appendChild((0,_legendDOM__WEBPACK_IMPORTED_MODULE_6__["default"])());
        _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.message(playerOne.player, `launch an attack!`);
    }
    const initializeGame = (callsign, parentDOM) => {
        const p1 = initialize(`${callsign}`);
        const p2 = initialize(false);
        console.log(p1);
        console.log(p2);
        parentDOM.parentElement.parentElement.children[1].firstChild.style.display = "flex"
        // have AI place fleet, randomly
        // needs to be checked !!!
        p2.player.placeFleet(p2);
        // needs to invoke fn for user to place their ships... !!!
        console.log(parentDOM);
        _placeFleetDOM__WEBPACK_IMPORTED_MODULE_5__.place.start(parentDOM, p1, p2);
;
        // initial turn ?
        // need to pass in p1.board and p2.board (change initial turn fn)
        console.log(p2.gb.board);
    
        playerOne = p1;
        playerTwo = p2;
        // need this return value? !!!
        return { p1, p2 }
    }
    const launchGame = (parentDOM) => {
        initialTurn(playerOne.gb, playerTwo.gb, parentDOM);
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
    const turn = (input) => {
        currentPlayer = playerTurn ? playerOne.player : playerTwo.player;
        let result;
        // does it need a check?
        if (playerTurn) {
            result = playerTwo.gb.receiveAttack(input[0], input[1]);
            if (result.value === 0) {
                // aka user clicked on coordinates for a second time
                _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, true, "");
                // dom function prompting user to try new coordinates
            } else {
                // user clicked on new coordinates, turn can complete
                // display the move on ai gameboard
                console.log(result);
                (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(input[0], input[1], result, playerTwo.gb, compBoardDOM, "🔱");
                _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, false, result.value, result.sunk, result.ship, true);
                // check if sunk
                // display different message...
                switchTurns();
            }
        } else {
            // ai player makes attack
            // display the move on p1 gameboard
            result = playerTwo.player.smartAttack(playerOne);
            console.log(result);
            (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(result.coord[0], result.coord[1], result.obj, playerOne.gb, playerBoardDOM, "🏴‍☠️");
            _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, false, result.obj.value, result.obj.sunk, result.obj.ship, false);
            switchTurns();
            result = result.obj;
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
            _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.endGame(currentPlayer, restartFn);
        }
    }
    return { getTurn, initialTurn, initializeGame, launchGame, turn };
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
    const main = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "main"});
    const mainC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'mainContainer'});
    const initialC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'initialContent'});
    const infoC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructionsContainer'});
    const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructions'});
    instruct.textContent = 'Eliminate the enemy fleet!';
    const inputC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'inputContainer'});
    const input = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {type: 'text', id: 'username', class: 'inputField', placeholder: 'Aquaman 🔱'});
    const inputLabel = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {for: 'username'});
    inputLabel.textContent = 'Enter Player Name:';
    const startC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'startContainer'});
    const start = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'start'});
    start.textContent = 'Start Game!'

    // listener and helpers
    const clearMain = () => (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
    
    const startFn = () => {
        // need a check if input is empty !!!
        
        let callsign = 'Aquaman 🔱';
        if (input.value) {
            callsign = input.value;
        }
        // clear main container -> prep for board display
        clearMain();
        // initialize game loop?
        // loop.initialTurn(mainC);
        _gameloop__WEBPACK_IMPORTED_MODULE_4__["default"].initializeGame(callsign, mainC);
    }
    start.addEventListener('click', () => {
        startFn();
    })

    // append it all together
    main.appendChild(mainC);
    mainC.appendChild(initialC);
    initialC.appendChild(infoC);
    infoC.appendChild(instruct);
    initialC.appendChild(inputC);
    inputC.appendChild(inputLabel);
    inputC.appendChild(input);
    initialC.appendChild(startC);
    startC.appendChild(start);

    return main;
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
    body.insertBefore(_comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.buildComms(), body.children[1]);
    body.insertBefore(mainContent(), body.children[2]);
}


/***/ }),

/***/ "./src/legendDOM.js":
/*!**************************!*\
  !*** ./src/legendDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


// build legend to explain emojis, provide detailed instructions
const ship = {
    emoji: " ",
    text: "friendly ship",
    class: "ship"
}
const wave = {
    emoji: "🌊",
    text: "attack miss",
    class: "miss"
}
const hit = {
    emoji: "🔥",
    text: "attack hit",
    class: "hit"
}
const sunk = {
    emoji: "🔱",
    text: "you sunk enemy ship",
    class: "sunk"
}
const enemySunk = {
    emoji: "🏴‍☠️",
    text: "enemy sunk friendly ship",
    class: "sunk"
}
const emojiArray = [ship, wave, hit, sunk, enemySunk];

const createLegend = () => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'legendContainer'});
    const legendBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'legendBox'});
    legendBox.textContent = "Legend:";
    const list = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {class: 'legendList'});
    emojiArray.forEach(emoji => {
        const li = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {class: 'emojiLi'});
        const box = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: `emojiBox ${emoji.class}`});
        box.textContent = `${emoji.emoji}`;
        const text = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'emojiText'});
        text.textContent = `- ${emoji.text}`;
        li.appendChild(box);
        li.appendChild(text);
        list.appendChild(li);
    })
    legendBox.appendChild(list);
    container.appendChild(legendBox); 
    const instructBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructBox'});
    instructBox.textContent = "Instructions:";
    const instructText = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructText'});
    instructText.textContent = 'Select coordinates in enemy waters to launch an attack. The board will indicate a hit or miss, or if you sunk the enemy ship. Find and eliminate all five enemy ships before they eliminate yours!'
    const objectiveBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'objectiveBox'});
    objectiveBox.textContent = 'Objective:';
    const objectiveText = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'objectiveText'});
    objectiveText.textContent = 'Sink the enemy fleet!';
    objectiveBox.appendChild(objectiveText);
    container.appendChild(objectiveBox);
    instructBox.appendChild(instructText);
    container.appendChild(instructBox);
    return container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLegend);

/***/ }),

/***/ "./src/placeFleetDOM.js":
/*!******************************!*\
  !*** ./src/placeFleetDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "place": () => (/* binding */ place)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");
/* harmony import */ var _boardDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardDOM */ "./src/boardDOM.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");





const place = (() => {
    let axis = true;
    const currentAxis = () => {
        return axis;
    }
    const createDisplay = (opponent) => {
        const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "placeContainer"});
        const buttonC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'placeBtnContainer'});
        const axisBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'axisBtn'});
        axisBtn.textContent = `Rotate`
        const randomBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'randomBtn'});
        randomBtn.textContent = 'Random';
        const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'placeInstructions'});
        const instructTitle = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'instructTitle'});
        instructTitle.textContent = "Instructions:"
        const instructText1 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "instructText"});
        instructText1.textContent = `Select coordinates on board to place current ship.`;
        const instructText2 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "instructText"});
        instructText2.textContent = `Use buttons to rotate ship or randomly deploy entire fleet.`

        // add listeners
        axisBtn.addEventListener('click', () => {
            axis = !axis;
            let text = axis ? 'X' : 'Y';
            // axisBtn.textContent = `Axis: ${text}`;
            axisBtn.textContent = 'Rotate';
            // delete current board
            currentDOM.removeChild(currentDOM.lastChild);
            // build new board w/ correct listeners
            perShip(currentDOM, currentBoard, currentShip);
        })
        randomBtn.addEventListener('click', () => {
            opponent.player.placeFleet(currentObj);
            currentDOM.removeChild(currentDOM.lastChild);
            finish();
        })

        // append it all together
        container.appendChild(buttonC);
        buttonC.appendChild(axisBtn);
        buttonC.appendChild(randomBtn);
        container.appendChild(instruct);
        instruct.appendChild(instructTitle);
        instruct.appendChild(instructText1);
        instruct.appendChild(instructText2);

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
    const clickFn = (x, y) => {
        currentObj.gb.placeShip(currentShip, axis, x, y);
        count++;
        currentDOM.removeChild(currentDOM.lastChild);
        nextShip(currentDOM, currentObj);
    }
    const clickAttack = (element, gameboard, ship, x, y) => {
        if (checkCell(gameboard, ship, currentAxis(), x, y)) {
            element.addEventListener('click', () => {
                clickFn(x, y);
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
                element.style.backgroundColor = "rgb(208, 0, 0)";
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
            clickAttack(cell, gameboard, ship, x, y);
        })
    }
    let currentObj;
    let currentBoard;
    let currentShip;
    let fleetKeys;
    let currentDOM;
    let count = 0;
    const updateAllCurrents = (parent, object) => {
        currentDOM = parent;
        currentObj = object;
        currentBoard = object.gb;
        fleetKeys = fleetKeys = Object.keys(object.fleet);
    }
    const updateCurrentShip = (ship) => {
        currentShip = ship;
    }
    const nextShip = (parentDOM, playerObj) => {
        if (count < 5) {
            _comsDOM__WEBPACK_IMPORTED_MODULE_2__.com.instruct(playerObj.player, fleetKeys[count]);
            perShip(parentDOM, playerObj.gb, playerObj.fleet[fleetKeys[count]]);
        } else {
            console.log('next step of gameloop!');
            finish();
        }
    }
    const perShip = (parentDOM, playerBoard, ship) => {
        updateCurrentShip(ship);
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.buildBoard)(playerBoard, false));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.displayShips)(currentBoard, currentDOM.children[0]);
        addCellListeners(playerBoard, ship);
    }
    const start = (parentDOM, playerObj, opponentObj) => {
        parentDOM.parentElement.parentElement.children[1].appendChild(createDisplay(opponentObj));
        updateAllCurrents(parentDOM, playerObj);
        nextShip(parentDOM, playerObj);
    }
    const finish = () => {
        _comsDOM__WEBPACK_IMPORTED_MODULE_2__.com.clear();
        // invoke gameloop step2 -> where 2 boards are displayed
        // a way to transition this (ease-in)? !!!
        _gameloop__WEBPACK_IMPORTED_MODULE_3__["default"].launchGame(currentDOM);
    }
    return { hover, start };
})();



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
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");

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
    const ai = PlayerFactory('The Kraken');
    const newProb = () => {
        const prob = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
        prob.create(10);
        return prob;
    }
    const shot = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
    shot.create(10);

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
    const randomAttack = (gameboard) => {
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

    const hitCoordsArray = [];
    const _addToHitCoords = (input) => {
        hitCoordsArray.push(input);
        // return hitCoordsArray; ?? !!! do i need this to be returned?
    }
    const _clearHitCoords = (ship) => {
            ship.coords.forEach(coord => {
                let index = hitCoordsArray.findIndex(value => {
                    if (value[0] == coord[0] && value[1] == coord[1]) {
                        return value;
                    }
                })
                hitCoordsArray.splice(index, 1);
            })
    }
    const _updateShotBoard = (object, player) => {
        const coord = object.coord;
        if (object.obj.value == true) {
            if (object.obj.sunk == true) {
                const ship = player.gb.whichShip(object.obj.ship);
                _clearHitCoords(ship);
            } else {
                _addToHitCoords(coord);
            }
            shot.board[coord[0]][coord[1]] = 1;
        } else {
            shot.board[coord[0]][coord[1]] = -1;
        }
    }
    const _addToProbBoard = (gb, probBoard, length, boolean, x, y) => {
        for (let i = 0; i<length; i++) {
            const counterWeight = gb.checkProb(length, boolean, x, y, hitCoordsArray);
            if (boolean) {
                probBoard[Number(x)+i][y] += counterWeight;
            } else {
                probBoard[x][Number(y)+i] += counterWeight;
            }
        }
        _removeHits(gb, probBoard);
    }
    // evaluate how to improve checkPlace for "hunt mode"

    const _removeHits = (gb, probBoard) => {
        for (let i = 0; i<gb.board.length; i++) {
            for (let j = 0; j<gb.board[i].length; j++) {
                if (gb.board[i][j] > 0) {
                    probBoard[i][j] = 0;
                }
            }
        }
    }
    const _shipProb = (gb, ship, prob) => {
        for (let i = 0; i<gb.board.length; i++) {
            for (let j = 0; j<gb.board[i].length; j++) {
                if (!((gb.checkOnBoard(ship.length, true, i, j)) || 
                (gb.checkMiss(ship.length, true, i, j)))) {
                    _addToProbBoard(gb, prob.board, ship.length, true, i, j);
                }
            }
        }
        for (let i = 0; i<gb.board.length; i++) {
            for (let j = 0; j<gb.board[i].length; j++) {
                if (!(gb.checkOnBoard(ship.length, false, i, j) || 
                gb.checkMiss(ship.length, false, i, j))) {
                    _addToProbBoard(gb, prob.board, ship.length, false, i, j);
                }
            }
        }
    }
    const _fleetProb = (board, fleet, prob) => {
        const ships = Object.keys(fleet);
        ships.forEach(ship => {
            // does this need to run "isSunk" in order to get updated sunk value? 
            if (!(fleet[ship].sunk))
            _shipProb(board, fleet[ship], prob);
        });
    }

    const _getProbCoords = (board) => {
        const currentMax = {
            max: 0,
        };
        for (let i=0; i<board.length; i++) {
            for (let j=0; j<board[i].length; j++) {
                if (board[i][j] > currentMax.max) {
                    currentMax.max = board[i][j];
                    currentMax.coords = [i, j];
                }
            }
        }
        return currentMax; // should this just be coordinates or return the whole obj? !!!
    }

    // build smartAI attack mode:
    const smartAttack = (player) => {
        const prob = newProb();
        // updated probability board; needs access to user's fleet..? or make a copy for the probBoard, update regularly !!!
        _fleetProb(shot, player.fleet, prob);
        // get coordinates of best cell
        const coord = _getProbCoords(prob.board);
        // launch attack on those coords
        const obj = {};
        obj.coord = coord.coords;
        obj.obj = player.gb.receiveAttack(obj.coord[0], obj.coord[1]);
        // check attack intel: hit or miss, sunk?
        _updateShotBoard(obj, player);
        return obj;
        //

    }

    return Object.assign({}, ai, { randomAttack }, { smartAttack }, { placeFleet });
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
    const coords = [];
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
    return { length, sunk, marker, coords, getHits, hit, isSunk, hitPlus}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsaUJBQWlCLGdCQUFnQiw0REFBNEQsR0FBRyxTQUFTLGdDQUFnQyxvQkFBb0IsNkJBQTZCLHdCQUF3Qix1QkFBdUIsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxnQkFBZ0Isa0NBQWtDLHNCQUFzQix1QkFBdUIsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQiw0QkFBNEIsR0FBRyxVQUFVLHVCQUF1Qix1QkFBdUIsc0JBQXNCLHVCQUF1QixvQkFBb0IsOEJBQThCLDBCQUEwQiw4QkFBOEIsb0JBQW9CLDBCQUEwQixnQ0FBZ0MsK0JBQStCLDBCQUEwQixHQUFHLHNCQUFzQixvQkFBb0IsOEJBQThCLEdBQUcsK0JBQStCLHNCQUFzQix1QkFBdUIseUJBQXlCLG9CQUFvQix5QkFBeUIsOEJBQThCLG1CQUFtQiwwQkFBMEIsa0RBQWtELGlDQUFpQyw4Q0FBOEMsR0FBRyxxQ0FBcUMsc0JBQXNCLHdDQUF3QyxHQUFHLHNDQUFzQyw2QkFBNkIsb0NBQW9DLEdBQUcsc0JBQXNCLHVCQUF1Qix5QkFBeUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsU0FBUyxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsK0JBQStCLEdBQUcsa0JBQWtCLG9CQUFvQix5Q0FBeUMsMEJBQTBCLEdBQUcsbUJBQW1CLHVCQUF1QixvQkFBb0Isc0NBQXNDLDRCQUE0QixnQkFBZ0IsbUNBQW1DLGdDQUFnQywwQkFBMEIsR0FBRywwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQix5QkFBeUIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixHQUFHLDJCQUEyQixzQkFBc0IsR0FBRyxlQUFlLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixzQkFBc0IseUJBQXlCLEdBQUcscUJBQXFCLG9CQUFvQixHQUFHLGtDQUFrQyx5QkFBeUIsR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixHQUFHLFVBQVUseUJBQXlCLDhCQUE4Qiw4QkFBOEIsMEJBQTBCLHNCQUFzQix1QkFBdUIsaUNBQWlDLDhDQUE4Qyx3Q0FBd0MsR0FBRyxnQkFBZ0Isc0JBQXNCLGtDQUFrQyxHQUFHLGlCQUFpQiw2QkFBNkIsb0NBQW9DLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLG9CQUFvQiw2Q0FBNkMsZUFBZSxxQkFBcUIsb0JBQW9CLCtCQUErQiwwQkFBMEIsbURBQW1ELEdBQUcsK0NBQStDLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0Isc0NBQXNDLHlCQUF5QixvQkFBb0IsbURBQW1ELEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyxlQUFlLGdDQUFnQyx5QkFBeUIsdUJBQXVCLDBCQUEwQiwrQkFBK0IscUNBQXFDLEdBQUcsUUFBUSxvQkFBb0IsZUFBZSxHQUFHLFNBQVMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixHQUFHLFNBQVMsdUNBQXVDLEdBQUcsUUFBUSx1Q0FBdUMsR0FBRyxTQUFTLDBDQUEwQyxHQUFHLFNBQVMsdUNBQXVDLEdBQUcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixHQUFHLFlBQVksdUJBQXVCLG9CQUFvQiwwQkFBMEIsa0JBQWtCLEdBQUcsYUFBYSxtQkFBbUIsa0JBQWtCLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IseUJBQXlCLEdBQUcsOENBQThDLHlCQUF5QixzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLDZDQUE2Qyx5QkFBeUIsc0JBQXNCLG1CQUFtQix1QkFBdUIsR0FBRyxpQkFBaUIscUJBQXFCLEdBQUcsaUJBQWlCLG9CQUFvQix5Q0FBeUMsb0JBQW9CLGdDQUFnQywwQkFBMEIsR0FBRyxXQUFXLHlCQUF5QixzQkFBc0IsdUJBQXVCLEdBQUcsV0FBVyxzQkFBc0IsR0FBRyxjQUFjLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixpQ0FBaUMsOENBQThDLDhCQUE4QixHQUFHLG9CQUFvQixzQkFBc0IsNEJBQTRCLEdBQUcscUJBQXFCLDZCQUE2QixvQ0FBb0MsR0FBRyxvQkFBb0Isb0JBQW9CLDhCQUE4QixHQUFHLGNBQWMsb0JBQW9CLGtDQUFrQyxHQUFHLGtCQUFrQixvQkFBb0IsOEJBQThCLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLDRCQUE0QixpQ0FBaUMsOENBQThDLEdBQUcsa0NBQWtDLGlDQUFpQyxHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFV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VUFBVTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sZWdlbmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUZsZWV0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGVmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBmb250LWZhbWlseTogVGltZXMsIEdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcXG59XFxuLmNvbW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb21tcyB7XFxuICAgIG1pbi13aWR0aDogODUwcHg7XFxuICAgIHBhZGRpbmc6IDF2aCAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjojOTBlMGVmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTBlMGVmO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgbWFyZ2luOiAwIDJ2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYig0NSwgMTAwLCAxNzApO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwNzdCNjtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4ucGxhY2VJbnN0cnVjdGlvbnMge1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnN0cnVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzkwZTBlZjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgM2ZyO1xcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDQwcHggNTBweDtcXG4gICAgYm9yZGVyOiAxNnB4IGRvdWJsZSBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuLmluc3RydWN0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dENvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaW5wdXRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5wdXRGaWVsZDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnN0YXJ0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjOTBlMGVmO1xcbn1cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWF4LWhlaWdodDogNDE4cHg7XFxuICAgIG1heC13aWR0aDogNDE4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDQwcHggcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDRmcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5vYmplY3RpdmVCb3gge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsXFxuLmluc3RydWN0Qm94IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmRMYWJlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4ycHggMC4ycHggYmxhY2s7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW1vamlMaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG4uZW1vamlCb3gge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsIFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwNzdCNjtcXG59XFxuLmVtb2ppTGksXFxuLm9iamVjdGl2ZVRleHQsXFxuLmluc3RydWN0VGV4dCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuLnBsYXlBZ2FpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ucGxheUFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5wbGF5QWdhaW46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWcge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQix1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJ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QUNwQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBOztJQUVJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix1Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGVmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBmb250LWZhbWlseTogVGltZXMsIEdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcXG59XFxuLmNvbW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb21tcyB7XFxuICAgIG1pbi13aWR0aDogODUwcHg7XFxuICAgIHBhZGRpbmc6IDF2aCAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjojOTBlMGVmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTBlMGVmO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG4gICAgbWFyZ2luOiAwIDJ2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYig0NSwgMTAwLCAxNzApO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwNzdCNjtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4ucGxhY2VJbnN0cnVjdGlvbnMge1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnN0cnVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzkwZTBlZjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgM2ZyO1xcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDQwcHggNTBweDtcXG4gICAgYm9yZGVyOiAxNnB4IGRvdWJsZSBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuLmluc3RydWN0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dENvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaW5wdXRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5wdXRGaWVsZDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnN0YXJ0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjOTBlMGVmO1xcbn1cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWF4LWhlaWdodDogNDE4cHg7XFxuICAgIG1heC13aWR0aDogNDE4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDQwcHggcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDRmcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5vYmplY3RpdmVCb3gge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsXFxuLmluc3RydWN0Qm94IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmRMYWJlbCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4ycHggMC4ycHggYmxhY2s7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW1vamlMaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG4uZW1vamlCb3gge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsIFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwNzdCNjtcXG59XFxuLmVtb2ppTGksXFxuLm9iamVjdGl2ZVRleHQsXFxuLmluc3RydWN0VGV4dCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuLnBsYXlBZ2FpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ucGxheUFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5wbGF5QWdhaW46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWcge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBib2FyZCBsb2dpY1xuXG5jb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuICAgICAgICBjaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3graV1beV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCtpLCB5XSk7XG4gICAgICAgIH19IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4LCB5K2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tNaXNzID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tQcm9iID0gKGxlbmd0aCwgYXhpcywgeCwgeSwgaGl0Q29vcmRBcnJheSkgPT4ge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gMTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtOdW1iZXIoeCkraSwgeV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3gsIE51bWJlcih5KStpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGl0Q29vcmRBcnJheS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkWzBdID09IHNoaXBDb29yZHNbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkWzFdID09IHNoaXBDb29yZHNbaV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCAqPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHdlaWdodDtcbiAgICAgICAgLy8gbmVlZCB0byBjb21wYXJlIHNoaXBDb29yZGluYXRlcyB3aXRoIGhpdENvb3JkaW5hdGVzQXJyYXkgKG5lZWRzIHRvIGJlIGEgZm4gcGFyYW1ldGVyKVxuICAgICAgICAvLyBpZiB5ZXMsIGluY3JlYXNlIHdlaWdodCBieSBmYWN0b3Igb2YgNVxuICAgICAgICAvLyBpZiBubywgbm9ybWFsIHdlaWdodCBmb3IgY2VsbCBjb3VudGVyIGZvciBwcm9iTWFwXG4gICAgfVxuICAgIGNvbnN0IGNoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHdoaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gICAgfVxuICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4gICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSB3aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuICAgICAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAoYm9hcmRbeF1beV0gKyAxMCkpO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5LCBvYmopID0+IHtcbiAgICAgICAgb2JqLnZhbHVlID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChvYmoudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgICAgICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmFsbFN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmlyZSBnYW1lT3ZlciBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGF0IGFsbCBpcyBuZWVkZWQgaW5zaWRlP1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmouc2hpcCA9IG9iai52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoaWNoIHNoaXAgaXQgaXNcbiAgICAgICAgICAgIC8vIHJ1biBoaXQoKSBvbiB0aGF0IHNoaXBcbiAgICAgICAgICAgIC8vIHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgLSBzZW5kIHRvIERPTSBmbiB0byB1cGRhdGUgZGlzcGxheT9cbiAgICAgICAgICAgIC8vIHRoaW5raW5nIHRoYXQgeW91IGNhbGwgYSBET00gZm4gd2l0aCBcInN1bmtcIiBib29sZWFuLi4gISEhXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9hcmRcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSB0byB1cGRhdGUgZ3JpZCB3aXRoIGhpdCBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICAgICAgLy8gY2hhbmdlIHJldHVybiBmcm9tIHZhbHVlIHRvIHRydWVcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZCBtaXNzIHRvIGFycmF5XG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbiAgICAgICAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuICAgICAgICAgICAgLy8gb2JqLnZhbHVlIG1pZ2h0IG5lZWQgdG8gYmUgXCItMVwiICEhIVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gZnVuY3Rpb24gdG8gdXBkYXRlIGdyaWQgd2l0aCBtaXNzIG1hcmsgISEhXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHksIG9iaik7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIG5lZWQgdG8gbG9vcCBiYWNrIC0+IG5lZWQgdXNlciB0byBnaXZlIG5ldyBjb29yZGluYXRlc1xuICAgICAgICBvYmoudmFsdWUgPSAwO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gICBcbiAgICByZXR1cm4geyBib2FyZCwgY3JlYXRlLCBwbGFjZVNoaXAsIGNoZWNrUGxhY2UsIGNoZWNrTWlzcywgY2hlY2tQcm9iLCBjaGVja09uQm9hcmQsIHdoaWNoU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRGYWN0b3J5OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG5jb25zdCBhdHRhY2tIb3ZlciA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgY2VsbCBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PSAnY2VsbCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzOEIwMDBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgICAgICAvLyBjb25zdCBncmlkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgICAgIGdyaWQuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgaGl0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgbWlzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDEwMCwgMTcwKVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgc3Vua1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuLy8gcmVuZGVyIGdhbWVib2FyZHMgb24gcGFnZVxuY29uc3QgYnVpbGRCb2FyZCA9IChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGlzcGxheUJvYXJkJ30pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gfSk7XG4gICAgICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWB9KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBiZSBhYmxlIHRvIGRlbGluZWF0ZSBldmVudCBsaXN0ZW5lciBmb3IgcGxhY2Ugc2hpcHMgYW5kIG90aGVyIGZvciBhY3R1YWwgZ2FtZXBsYXlcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29wLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3QoW2ksIGpdLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYXR0YWNrSG92ZXIoZ3JpZENlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZENvbC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpc3BsYXlCb2FyZDtcbn1cbmNvbnN0IGRpc3BsYXlTaGlwcyA9IChvYmplY3QsIGJvYXJkRE9NKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICAgICAgICBib2FyZERPTS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBtYXJrQ2VsbCA9ICh4LCB5LCByZXN1bHQsIGdiLCBib2FyZERPTSwgZW1vamkpID0+IHtcbiAgICBpZiAocmVzdWx0LnN1bmspIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGdiLndoaWNoU2hpcChyZXN1bHQuc2hpcCk7XG4gICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS5jbGFzc0xpc3QgPSAnY2VsbCBzdW5rJztcbiAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0udGV4dENvbnRlbnQgPSBgJHtlbW9qaX1gO1xuICAgICAgICB9KVxuICAgIH0gZWxzZSBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+UpVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCfjIpcIjtcbiAgICB9XG59XG5jb25zdCBkaXNwbGF5TGFiZWwgPSAobWVzc2FnZSkgPT4ge1xuICAgIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImxhYmVsQ29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2JvYXJkTGFiZWwnfSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfSB3YXRlcnNgO1xuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICByZXR1cm4gbGFiZWxDb250YWluZXI7XG59XG5jb25zdCBidWlsZEJvYXJkQW5kTGFiZWwgPSAob2JqZWN0LCBib29sZWFuLCBtZXNzYWdlLCBmdW5jdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImJvYXJkQ29udGFpbmVyXCJ9KTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5TGFiZWwobWVzc2FnZSkpO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQob2JqZWN0LCBib29sZWFuLCBmdW5jdCkpO1xuICAgIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCwgYnVpbGRCb2FyZEFuZExhYmVsIH07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbExpdGUgfSBmcm9tIFwiLi9pbml0aWFsRE9NXCI7XG5cbi8vIGJ1aWxkIGNvbW11bmljYXRpb24gZGl2IC0gZm9yIGRpc3BsYXlpbmcgdXBkYXRlcyAvIHByb21wdHNcbmNvbnN0IGNvbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29tbUMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdjb21tQ29udGFpbmVyJ30pO1xuXG4gICAgY29uc3QgYnVpbGRDb21tcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29tbXMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdjb21tcyd9KTtcbiAgICAgICAgY29tbXMudGV4dENvbnRlbnQgPSBgYDtcbiAgICAgICAgY29tbXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgICAgIHJldHVybiBjb21tQztcbiAgICB9XG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBjb21tQy5yZW1vdmVDaGlsZChjb21tQy5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBpbnN0cnVjdCA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY29tbXMgPSBjb21tQy5maXJzdENoaWxkO1xuICAgICAgICBjb21tcy50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06IFBsYWNlIHlvdXIgJHtzaGlwfS5gO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0gKHBsYXllciwgY29udGVudCkgPT4ge1xuICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogJHtjb250ZW50fWA7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFsnZW1wdHknLCAnc3VibWFyaW5lJywgJ3BhdHJvbCBib2F0JywgJ2NydWlzZXInLCAnZGVzdHJveWVyJywgJ2JhdHRsZSBjYXJyaWVyJ107XG4gICAgY29uc3QgcHJvbm91bkFycmF5ID0gW3swOiAneW91JywgMTogJ3RoZWlyJ30sIHswOiAndGhleScsIDE6ICd5b3VyJ31dO1xuICAgIGNvbnN0IHVwZGF0ZVRleHQgPSAocGxheWVyTmFtZSwgYm9vbGVhbiwgaGl0LCBzdW5rLCBzaGlwLCBwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gcGxheWVyID8gcHJvbm91bkFycmF5WzBdIDogcHJvbm91bkFycmF5WzFdO1xuICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGBBdHRlbnRpb24gJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfTogRXJyb3IhIE11c3Qgc2VsZWN0IG5ldyBjb29yZGluYXRlcy5gXG4gICAgICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGZpcmVzIGEgc2hvdCBhbmQgJHt2YWx1ZVswXX0gc3VuayAke3ZhbHVlWzFdfSAke3NoaXBBcnJheVtzaGlwXX0hYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzdHJpa2UgPSBoaXQgPyBgbGFuZHMgYSBzdHJpa2UhYDogYG1pc3NlcyFgXG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gYXR0YWNrcyBhbmQgJHtzdHJpa2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBlbmRHYW1lID0gKHBsYXllciwgcmVzdGFydEZuKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5DID0gY29tbUMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAvLyBjbGVhciBjb21tcyBhbmQgbWFpblxuICAgICAgICBjbGVhckRpdihjb21tQyk7XG4gICAgICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAgICAgLy8gYnVpbGQgY29udGVudFxuICAgICAgICBjb25zdCBlbmRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW5kQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdiYW5uZXInfSk7XG4gICAgICAgIGJhbm5lci50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhJ1xuICAgICAgICBjb25zdCB3aW5uZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICd3aW5uZXInfSk7XG4gICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7cGxheWVyLmNvZGVuYW1lfWA7XG4gICAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3BsYXlBZ2Fpbid9KTtcbiAgICAgICAgcGxheUFnYWluLnRleHRDb250ZW50ID0gYFBsYXkgQWdhaW5gO1xuICAgICAgICBtYWluQy5hcHBlbmRDaGlsZChlbmRDKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJcbiAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2xlYXIgY29udGVudFxuICAgICAgICAgICAgLy8gY2xlYXJEaXYobWFpbkMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIG1haW5DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbkMpO1xuICAgICAgICAgICAgY29tbUMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb21tQyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmVzdGFydEZuKCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgbWFrZUluaXRpYWxMaXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBidWlsZENvbW1zLCBjbGVhciwgaW5zdHJ1Y3QsIG1lc3NhZ2UsIHVwZGF0ZVRleHQsIGVuZEdhbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCB7IHBsYWNlIH0gZnJvbSAnLi9wbGFjZUZsZWV0RE9NJztcbmltcG9ydCBjcmVhdGVMZWdlbmQgZnJvbSBcIi4vbGVnZW5kRE9NXCI7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcblxuY29uc3QgcDEgPSBQbGF5ZXJGYWN0b3J5KCdBbGZyZWRvJyk7XG5jb25zdCBnYjEgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMS5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDFhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMWIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAxYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWEsIGZhbHNlLCAwLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFiLCBmYWxzZSwgMiwgMCk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYywgZmFsc2UsIDQsIDApO1xuXG5jb25zdCBwMiA9IGNvbXB1dGVyKCk7XG5jb25zdCBnYjIgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMi5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDJhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMmIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAyYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmEsIGZhbHNlLCA1LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJiLCBmYWxzZSwgNywgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYywgZmFsc2UsIDksIDApO1xuXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgIHBsYXllciA9IGNvbXB1dGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyID0gUGxheWVyRmFjdG9yeShgJHtwbGF5ZXJOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIGdiLmNyZWF0ZSgxMCk7XG4gICAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9XG59XG5cbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT25lO1xuICAgIGxldCBwbGF5ZXJUd287XG4gICAgbGV0IHBsYXllckJvYXJkRE9NO1xuICAgIGxldCBjb21wQm9hcmRET007XG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllclR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4gcGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuO1xuICAgIGNvbnN0IGluaXRpYWxUdXJuID0gKGJvYXJkMSwgYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDEsIGZhbHNlLCAnZnJpZW5kbHknKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZCk7XG4gICAgICAgIHBsYXllckJvYXJkRE9NID0gcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMiwgdHJ1ZSwgJ2VuZW15JywgbG9vcC50dXJuKSk7XG4gICAgICAgIC8vIGRpc3BsYXlTaGlwcyhib2FyZDIsIHBhcmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCgpKTtcbiAgICAgICAgY29tLm1lc3NhZ2UocGxheWVyT25lLnBsYXllciwgYGxhdW5jaCBhbiBhdHRhY2shYCk7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVHYW1lID0gKGNhbGxzaWduLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgICAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAyKTtcbiAgICAgICAgcGFyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICAvLyBoYXZlIEFJIHBsYWNlIGZsZWV0LCByYW5kb21seVxuICAgICAgICAvLyBuZWVkcyB0byBiZSBjaGVja2VkICEhIVxuICAgICAgICBwMi5wbGF5ZXIucGxhY2VGbGVldChwMik7XG4gICAgICAgIC8vIG5lZWRzIHRvIGludm9rZSBmbiBmb3IgdXNlciB0byBwbGFjZSB0aGVpciBzaGlwcy4uLiAhISFcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50RE9NKTtcbiAgICAgICAgcGxhY2Uuc3RhcnQocGFyZW50RE9NLCBwMSwgcDIpO1xuO1xuICAgICAgICAvLyBpbml0aWFsIHR1cm4gP1xuICAgICAgICAvLyBuZWVkIHRvIHBhc3MgaW4gcDEuYm9hcmQgYW5kIHAyLmJvYXJkIChjaGFuZ2UgaW5pdGlhbCB0dXJuIGZuKVxuICAgICAgICBjb25zb2xlLmxvZyhwMi5nYi5ib2FyZCk7XG4gICAgXG4gICAgICAgIHBsYXllck9uZSA9IHAxO1xuICAgICAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAgICAgLy8gbmVlZCB0aGlzIHJldHVybiB2YWx1ZT8gISEhXG4gICAgICAgIHJldHVybiB7IHAxLCBwMiB9XG4gICAgfVxuICAgIGNvbnN0IGxhdW5jaEdhbWUgPSAocGFyZW50RE9NKSA9PiB7XG4gICAgICAgIGluaXRpYWxUdXJuKHBsYXllck9uZS5nYiwgcGxheWVyVHdvLmdiLCBwYXJlbnRET00pO1xuICAgIH1cbiAgICBjb25zdCByZXN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5ldyBwbGF5ZXJzXG4gICAgICAgIC8vIG5ldyBnYW1lYm9hcmRzXG4gICAgICAgIC8vIG5ldyBzaGlwIGxvY2F0aW9uc1xuICAgICAgICAvLyBkaXNwbGF5IF5edGhlc2VcbiAgICAgICAgLy8gLT4gZ28gdG8gaW5pdGlhbCBwYWdlLCBuZWVkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gLT4gZ28gdG8gcGxhY2Ugc2hpcHMgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIG1haW4gcGFnZSwgbGV0IGJhdHRsZSBiZWdpblxuICAgICAgICAvLyB3aGF0IGVsc2U/XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0Zm4nKTsgXG4gICAgfVxuICAgIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gICAgLy8gZG8gaSBuZWVkID8gISEhXG4gICAgY29uc3QgdHVybiA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAvLyBkb2VzIGl0IG5lZWQgYSBjaGVjaz9cbiAgICAgICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWthIHVzZXIgY2xpY2tlZCBvbiBjb29yZGluYXRlcyBmb3IgYSBzZWNvbmQgdGltZVxuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIHRydWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIGRvbSBmdW5jdGlvbiBwcm9tcHRpbmcgdXNlciB0byB0cnkgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiBuZXcgY29vcmRpbmF0ZXMsIHR1cm4gY2FuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBhaSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIG1hcmtDZWxsKGlucHV0WzBdLCBpbnB1dFsxXSwgcmVzdWx0LCBwbGF5ZXJUd28uZ2IsIGNvbXBCb2FyZERPTSwgXCLwn5SxXCIpO1xuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQudmFsdWUsIHJlc3VsdC5zdW5rLCByZXN1bHQuc2hpcCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc3Vua1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgZGlmZmVyZW50IG1lc3NhZ2UuLi5cbiAgICAgICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBwMSBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5wbGF5ZXIuc21hcnRBdHRhY2socGxheWVyT25lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICBtYXJrQ2VsbChyZXN1bHQuY29vcmRbMF0sIHJlc3VsdC5jb29yZFsxXSwgcmVzdWx0Lm9iaiwgcGxheWVyT25lLmdiLCBwbGF5ZXJCb2FyZERPTSwgXCLwn4+04oCN4pig77iPXCIpO1xuICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgZmFsc2UsIHJlc3VsdC5vYmoudmFsdWUsIHJlc3VsdC5vYmouc3VuaywgcmVzdWx0Lm9iai5zaGlwLCBmYWxzZSk7XG4gICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm9iajtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYXllclR1cm4gJiYgKCFyZXN1bHQuYWxsU3VuaykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1cm4oZmFsc2UpOyBcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIC8vIHJ1biBnYW1lb3ZlciBmblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgdGhyb3dpbmcgZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAvLyBuZWVkcyByZXN0YXJ0Rm4gISEhXG4gICAgICAgICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyLCByZXN0YXJ0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdldFR1cm4sIGluaXRpYWxUdXJuLCBpbml0aWFsaXplR2FtZSwgbGF1bmNoR2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBHaXRodWIgZnJvbSAnLi9pY29ucy9naXRodWIuc3ZnJztcbmltcG9ydCBMaW5rZWRJbiBmcm9tICcuL2ljb25zL2xpbmtlZGluLnN2Zyc7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5IH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gXCIuL2NvbXNET01cIjtcbi8vIGJ1aWxkIGluaXRpYWwgcGFnZVxuLy8gcHQgMSAtIGhlYWRlciBhbmQgZm9vdGVyIFxuLy8gcHQgMiAtIGJvZHkgKHRpdGxlLCBpbnN0cnVjdGlvbnMsIHVzZXIgbmFtZSBpbnB1dCwgc3RhcnQgYnRuKVxuXG4vL1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaGVhZGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaGVhZGVyVGl0bGUnfSk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQkFUVExFU0hJUCc7XG4gICAgaGVhZEMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBoZWFkQztcbn1cbi8vXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb290ZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvb3RlckJveFwifSk7XG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJsaW5rQ29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBnaXRMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb25ub3J3YXJtZVwiLCBcImFsdFwiOiBcIkdpdGh1YiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnZ2l0SWNvbid9KTs7XG4gICAgZ2l0SWNvbi5zcmMgPSBHaXRodWI7XG4gICAgZ2l0SWNvbi5hbHQgPSBcIkdpdGh1YiBQcm9maWxlXCI7XG4gICAgY29uc3QgbGlua0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci13YXJtZS0xMDNhMDkxNjdcIiwgXCJhbHRcIjogXCJMaW5rZWRJbiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBsaW5rSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2xpbmtJY29uJ30pO1xuICAgIGxpbmtJY29uLnNyYyA9IExpbmtlZEluO1xuICAgIGxpbmtJY29uLmFsdCA9IFwiTGlua2VkSW4gUHJvZmlsZVwiO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGV4dENvbnRhaW5lclwifSk7XG4gICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUGVyZWdyaW5uaW5nIFByb2R1Y3Rpb25zXCI7XG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgZm9vdEMuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEljb24pO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0xpbmspO1xuICAgIGxpbmtMaW5rLmFwcGVuZENoaWxkKGxpbmtJY29uKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZm9vdEM7XG59XG4vLyBcbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibWFpblwifSk7XG4gICAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtYWluQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluaXRpYWxDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5pdGlhbENvbnRlbnQnfSk7XG4gICAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnNDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnMnfSk7XG4gICAgaW5zdHJ1Y3QudGV4dENvbnRlbnQgPSAnRWxpbWluYXRlIHRoZSBlbmVteSBmbGVldCEnO1xuICAgIGNvbnN0IGlucHV0QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2lucHV0Q29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dHlwZTogJ3RleHQnLCBpZDogJ3VzZXJuYW1lJywgY2xhc3M6ICdpbnB1dEZpZWxkJywgcGxhY2Vob2xkZXI6ICdBcXVhbWFuIPCflLEnfSk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2ZvcjogJ3VzZXJuYW1lJ30pO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgUGxheWVyIE5hbWU6JztcbiAgICBjb25zdCBzdGFydEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdzdGFydENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3N0YXJ0J30pO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUhJ1xuXG4gICAgLy8gbGlzdGVuZXIgYW5kIGhlbHBlcnNcbiAgICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmVlZCBhIGNoZWNrIGlmIGlucHV0IGlzIGVtcHR5ICEhIVxuICAgICAgICBcbiAgICAgICAgbGV0IGNhbGxzaWduID0gJ0FxdWFtYW4g8J+UsSc7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgY2FsbHNpZ24gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICAvLyBpbml0aWFsaXplIGdhbWUgbG9vcD9cbiAgICAgICAgLy8gbG9vcC5pbml0aWFsVHVybihtYWluQyk7XG4gICAgICAgIGxvb3AuaW5pdGlhbGl6ZUdhbWUoY2FsbHNpZ24sIG1haW5DKTtcbiAgICB9XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0Rm4oKTtcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkMpO1xuICAgIG1haW5DLmFwcGVuZENoaWxkKGluaXRpYWxDKTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbmZvQyk7XG4gICAgaW5mb0MuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGlucHV0Qyk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoc3RhcnRDKTtcbiAgICBzdGFydEMuYXBwZW5kQ2hpbGQoc3RhcnQpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8vXG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2R5J30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCgpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufVxuY29uc3QgbWFrZUluaXRpYWxMaXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYm9keScpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGNvbS5idWlsZENvbW1zKCksIGJvZHkuY2hpbGRyZW5bMV0pO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5Db250ZW50KCksIGJvZHkuY2hpbGRyZW5bMl0pO1xufVxuZXhwb3J0IHsgbWFrZUluaXRpYWwsIG1ha2VJbml0aWFsTGl0ZSB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIGJ1aWxkIGxlZ2VuZCB0byBleHBsYWluIGVtb2ppcywgcHJvdmlkZSBkZXRhaWxlZCBpbnN0cnVjdGlvbnNcbmNvbnN0IHNoaXAgPSB7XG4gICAgZW1vamk6IFwiIFwiLFxuICAgIHRleHQ6IFwiZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInNoaXBcIlxufVxuY29uc3Qgd2F2ZSA9IHtcbiAgICBlbW9qaTogXCLwn4yKXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgbWlzc1wiLFxuICAgIGNsYXNzOiBcIm1pc3NcIlxufVxuY29uc3QgaGl0ID0ge1xuICAgIGVtb2ppOiBcIvCflKVcIixcbiAgICB0ZXh0OiBcImF0dGFjayBoaXRcIixcbiAgICBjbGFzczogXCJoaXRcIlxufVxuY29uc3Qgc3VuayA9IHtcbiAgICBlbW9qaTogXCLwn5SxXCIsXG4gICAgdGV4dDogXCJ5b3Ugc3VuayBlbmVteSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbmVteVN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+PtOKAjeKYoO+4j1wiLFxuICAgIHRleHQ6IFwiZW5lbXkgc3VuayBmcmllbmRseSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbW9qaUFycmF5ID0gW3NoaXAsIHdhdmUsIGhpdCwgc3VuaywgZW5lbXlTdW5rXTtcblxuY29uc3QgY3JlYXRlTGVnZW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2xlZ2VuZENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBsZWdlbmRCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRCb3gnfSk7XG4gICAgbGVnZW5kQm94LnRleHRDb250ZW50ID0gXCJMZWdlbmQ6XCI7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywge2NsYXNzOiAnbGVnZW5kTGlzdCd9KTtcbiAgICBlbW9qaUFycmF5LmZvckVhY2goZW1vamkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywge2NsYXNzOiAnZW1vamlMaSd9KTtcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgZW1vamlCb3ggJHtlbW9qaS5jbGFzc31gfSk7XG4gICAgICAgIGJveC50ZXh0Q29udGVudCA9IGAke2Vtb2ppLmVtb2ppfWA7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbW9qaVRleHQnfSk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgLSAke2Vtb2ppLnRleHR9YDtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG4gICAgbGVnZW5kQm94LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRCb3gpOyBcbiAgICBjb25zdCBpbnN0cnVjdEJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0Qm94J30pO1xuICAgIGluc3RydWN0Qm94LnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCI7XG4gICAgY29uc3QgaW5zdHJ1Y3RUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3RUZXh0J30pO1xuICAgIGluc3RydWN0VGV4dC50ZXh0Q29udGVudCA9ICdTZWxlY3QgY29vcmRpbmF0ZXMgaW4gZW5lbXkgd2F0ZXJzIHRvIGxhdW5jaCBhbiBhdHRhY2suIFRoZSBib2FyZCB3aWxsIGluZGljYXRlIGEgaGl0IG9yIG1pc3MsIG9yIGlmIHlvdSBzdW5rIHRoZSBlbmVteSBzaGlwLiBGaW5kIGFuZCBlbGltaW5hdGUgYWxsIGZpdmUgZW5lbXkgc2hpcHMgYmVmb3JlIHRoZXkgZWxpbWluYXRlIHlvdXJzISdcbiAgICBjb25zdCBvYmplY3RpdmVCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVCb3gnfSk7XG4gICAgb2JqZWN0aXZlQm94LnRleHRDb250ZW50ID0gJ09iamVjdGl2ZTonO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVUZXh0J30pO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSAnU2luayB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBvYmplY3RpdmVCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZUJveCk7XG4gICAgaW5zdHJ1Y3RCb3guYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RCb3gpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGVnZW5kOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCBsb29wIGZyb20gJy4vZ2FtZWxvb3AnO1xuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gICAgbGV0IGF4aXMgPSB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlRGlzcGxheSA9IChvcHBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicGxhY2VDb250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBidXR0b25DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VCdG5Db250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdheGlzQnRuJ30pO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYFJvdGF0ZWBcbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgICAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUluc3RydWN0aW9ucyd9KTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGl0bGUnfSk7XG4gICAgICAgIGluc3RydWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIlxuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQxID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDEudGV4dENvbnRlbnQgPSBgU2VsZWN0IGNvb3JkaW5hdGVzIG9uIGJvYXJkIHRvIHBsYWNlIGN1cnJlbnQgc2hpcC5gO1xuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDIudGV4dENvbnRlbnQgPSBgVXNlIGJ1dHRvbnMgdG8gcm90YXRlIHNoaXAgb3IgcmFuZG9tbHkgZGVwbG95IGVudGlyZSBmbGVldC5gXG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgICAgICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXhpcyA9ICFheGlzO1xuICAgICAgICAgICAgbGV0IHRleHQgPSBheGlzID8gJ1gnIDogJ1knO1xuICAgICAgICAgICAgLy8gYXhpc0J0bi50ZXh0Q29udGVudCA9IGBBeGlzOiAke3RleHR9YDtcbiAgICAgICAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IGJvYXJkXG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIC8vIGJ1aWxkIG5ldyBib2FyZCB3LyBjb3JyZWN0IGxpc3RlbmVyc1xuICAgICAgICAgICAgcGVyU2hpcChjdXJyZW50RE9NLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRTaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Bwb25lbnQucGxheWVyLnBsYWNlRmxlZXQoY3VycmVudE9iaik7XG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkMpO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGl0bGUpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQxKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0Mik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gXG4gICAgY29uc3QgY2hlY2tDZWxsID0gKGdhbWVib2FyZCwgc2hpcCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIGdhbWVib2FyZC5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gQXJyYXkuZnJvbShlbGVtZW50LmlkKTtcbiAgICAgICAgbGV0IG5ld0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7TnVtYmVyKGNvb3JkWzBdKStpfSR7Y29vcmRbMV19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSBgJHtjb29yZFswXX0ke051bWJlcihjb29yZFsxXSkraX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGlja0ZuID0gKHgsIHkpID0+IHtcbiAgICAgICAgY3VycmVudE9iai5nYi5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGF4aXMsIHgsIHkpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgbmV4dFNoaXAoY3VycmVudERPTSwgY3VycmVudE9iaik7XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrQXR0YWNrID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xpY2tGbih4LCB5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaG92ZXIgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY291bGQgYWRkIGEgY2xhc3MuLi5cbiAgICAgICAgICAgIGlmIChjaGVja0NlbGwoZ2FtZWJvYXJkLCBzaGlwLCBjdXJyZW50QXhpcygpLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0TGVuZ3RoKGVsZW1lbnQsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgICAgIGdyaWQuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgYWRkQ2VsbExpc3RlbmVycyA9IChnYW1lYm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgY2VsbEFycmF5LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDApKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgICAgICAgaG92ZXIoY2VsbCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGNsaWNrQXR0YWNrKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxldCBjdXJyZW50T2JqO1xuICAgIGxldCBjdXJyZW50Qm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRTaGlwO1xuICAgIGxldCBmbGVldEtleXM7XG4gICAgbGV0IGN1cnJlbnRET007XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCB1cGRhdGVBbGxDdXJyZW50cyA9IChwYXJlbnQsIG9iamVjdCkgPT4ge1xuICAgICAgICBjdXJyZW50RE9NID0gcGFyZW50O1xuICAgICAgICBjdXJyZW50T2JqID0gb2JqZWN0O1xuICAgICAgICBjdXJyZW50Qm9hcmQgPSBvYmplY3QuZ2I7XG4gICAgICAgIGZsZWV0S2V5cyA9IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5mbGVldCk7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZUN1cnJlbnRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2hpcCA9IChwYXJlbnRET00sIHBsYXllck9iaikgPT4ge1xuICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICBjb20uaW5zdHJ1Y3QocGxheWVyT2JqLnBsYXllciwgZmxlZXRLZXlzW2NvdW50XSk7XG4gICAgICAgICAgICBwZXJTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqLmdiLCBwbGF5ZXJPYmouZmxlZXRbZmxlZXRLZXlzW2NvdW50XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHQgc3RlcCBvZiBnYW1lbG9vcCEnKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBlclNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJCb2FyZCwgc2hpcCkgPT4ge1xuICAgICAgICB1cGRhdGVDdXJyZW50U2hpcChzaGlwKTtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQocGxheWVyQm9hcmQsIGZhbHNlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhjdXJyZW50Qm9hcmQsIGN1cnJlbnRET00uY2hpbGRyZW5bMF0pO1xuICAgICAgICBhZGRDZWxsTGlzdGVuZXJzKHBsYXllckJvYXJkLCBzaGlwKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmosIG9wcG9uZW50T2JqKSA9PiB7XG4gICAgICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheShvcHBvbmVudE9iaikpO1xuICAgICAgICB1cGRhdGVBbGxDdXJyZW50cyhwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgICAgIG5leHRTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqKTtcbiAgICB9XG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBjb20uY2xlYXIoKTtcbiAgICAgICAgLy8gaW52b2tlIGdhbWVsb29wIHN0ZXAyIC0+IHdoZXJlIDIgYm9hcmRzIGFyZSBkaXNwbGF5ZWRcbiAgICAgICAgLy8gYSB3YXkgdG8gdHJhbnNpdGlvbiB0aGlzIChlYXNlLWluKT8gISEhXG4gICAgICAgIGxvb3AubGF1bmNoR2FtZShjdXJyZW50RE9NKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaG92ZXIsIHN0YXJ0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwbGFjZSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gICAgbGV0IHdpbnMgPSAwO1xuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgIH1cbiAgICBjb25zdCBhZGRXaW4gPSAoKSA9PiB3aW5zICs9IDE7XG4gICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnMsIGF0dGFjaywgYWRkV2luIH07XG59XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoJ1RoZSBLcmFrZW4nKTtcbiAgICBjb25zdCBuZXdQcm9iID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9iID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIHByb2IuY3JlYXRlKDEwKTtcbiAgICAgICAgcmV0dXJuIHByb2I7XG4gICAgfVxuICAgIGNvbnN0IHNob3QgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBzaG90LmNyZWF0ZSgxMCk7XG5cbiAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4gICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfZ2VuZXJhdGVDb29yZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIHdoaWxlICghKF9hdmFpbGFibGUoY29vcmQpKSkge1xuICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gX2dlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4gICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIG9iai5jb29yZCA9IGNvb3JkO1xuICAgICAgICAgICAgb2JqLm9iaiA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlRmxlZXQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIC8vIGkgdGhpbmsgdGhpcyBjYW4gYmUgdXNlZCBmb3IgZWl0aGVyIHBsYXllci4uLm1heWJlIG1ha2UgYSBidXR0b24gZm9yIHVzZXIgKGluIGluaXRpYWwpICEhIVxuICAgICAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgICAgICBjb25zdCBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhwbGF5ZXIuZmxlZXQpO1xuICAgICAgICBmbGVldEtleXMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgd2hpbGUgKCEocGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSkpKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IF9yYW5kb21BeGlzKCk7XG4gICAgICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoaXRDb29yZHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hZGRUb0hpdENvb3JkcyA9IChpbnB1dCkgPT4ge1xuICAgICAgICBoaXRDb29yZHNBcnJheS5wdXNoKGlucHV0KTtcbiAgICAgICAgLy8gcmV0dXJuIGhpdENvb3Jkc0FycmF5OyA/PyAhISEgZG8gaSBuZWVkIHRoaXMgdG8gYmUgcmV0dXJuZWQ/XG4gICAgfVxuICAgIGNvbnN0IF9jbGVhckhpdENvb3JkcyA9IChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBoaXRDb29yZHNBcnJheS5maW5kSW5kZXgodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMF0gPT0gY29vcmRbMF0gJiYgdmFsdWVbMV0gPT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGl0Q29vcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVTaG90Qm9hcmQgPSAob2JqZWN0LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBvYmplY3QuY29vcmQ7XG4gICAgICAgIGlmIChvYmplY3Qub2JqLnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3Qub2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuZ2Iud2hpY2hTaGlwKG9iamVjdC5vYmouc2hpcCk7XG4gICAgICAgICAgICAgICAgX2NsZWFySGl0Q29vcmRzKHNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYWRkVG9IaXRDb29yZHMoY29vcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9hZGRUb1Byb2JCb2FyZCA9IChnYiwgcHJvYkJvYXJkLCBsZW5ndGgsIGJvb2xlYW4sIHgsIHkpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJXZWlnaHQgPSBnYi5jaGVja1Byb2IobGVuZ3RoLCBib29sZWFuLCB4LCB5LCBoaXRDb29yZHNBcnJheSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIHByb2JCb2FyZFtOdW1iZXIoeCkraV1beV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW3hdW051bWJlcih5KStpXSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZW1vdmVIaXRzKGdiLCBwcm9iQm9hcmQpO1xuICAgIH1cbiAgICAvLyBldmFsdWF0ZSBob3cgdG8gaW1wcm92ZSBjaGVja1BsYWNlIGZvciBcImh1bnQgbW9kZVwiXG5cbiAgICBjb25zdCBfcmVtb3ZlSGl0cyA9IChnYiwgcHJvYkJvYXJkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChnYi5ib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvYkJvYXJkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3NoaXBQcm9iID0gKGdiLCBzaGlwLCBwcm9iKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKChnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSB8fCBcbiAgICAgICAgICAgICAgICAoZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9hZGRUb1Byb2JCb2FyZChnYiwgcHJvYi5ib2FyZCwgc2hpcC5sZW5ndGgsIHRydWUsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Z2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIShnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSB8fCBcbiAgICAgICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfZmxlZXRQcm9iID0gKGJvYXJkLCBmbGVldCwgcHJvYikgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC5rZXlzKGZsZWV0KTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIC8vIGRvZXMgdGhpcyBuZWVkIHRvIHJ1biBcImlzU3Vua1wiIGluIG9yZGVyIHRvIGdldCB1cGRhdGVkIHN1bmsgdmFsdWU/IFxuICAgICAgICAgICAgaWYgKCEoZmxlZXRbc2hpcF0uc3VuaykpXG4gICAgICAgICAgICBfc2hpcFByb2IoYm9hcmQsIGZsZWV0W3NoaXBdLCBwcm9iKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2dldFByb2JDb29yZHMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudE1heCA9IHtcbiAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiBjdXJyZW50TWF4Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4Lm1heCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4LmNvb3JkcyA9IFtpLCBqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNYXg7IC8vIHNob3VsZCB0aGlzIGp1c3QgYmUgY29vcmRpbmF0ZXMgb3IgcmV0dXJuIHRoZSB3aG9sZSBvYmo/ICEhIVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHNtYXJ0QUkgYXR0YWNrIG1vZGU6XG4gICAgY29uc3Qgc21hcnRBdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBuZXdQcm9iKCk7XG4gICAgICAgIC8vIHVwZGF0ZWQgcHJvYmFiaWxpdHkgYm9hcmQ7IG5lZWRzIGFjY2VzcyB0byB1c2VyJ3MgZmxlZXQuLj8gb3IgbWFrZSBhIGNvcHkgZm9yIHRoZSBwcm9iQm9hcmQsIHVwZGF0ZSByZWd1bGFybHkgISEhXG4gICAgICAgIF9mbGVldFByb2Ioc2hvdCwgcGxheWVyLmZsZWV0LCBwcm9iKTtcbiAgICAgICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGJlc3QgY2VsbFxuICAgICAgICBjb25zdCBjb29yZCA9IF9nZXRQcm9iQ29vcmRzKHByb2IuYm9hcmQpO1xuICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIHRob3NlIGNvb3Jkc1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvb3JkID0gY29vcmQuY29vcmRzO1xuICAgICAgICBvYmoub2JqID0gcGxheWVyLmdiLnJlY2VpdmVBdHRhY2sob2JqLmNvb3JkWzBdLCBvYmouY29vcmRbMV0pO1xuICAgICAgICAvLyBjaGVjayBhdHRhY2sgaW50ZWw6IGhpdCBvciBtaXNzLCBzdW5rP1xuICAgICAgICBfdXBkYXRlU2hvdEJvYXJkKG9iaiwgcGxheWVyKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgLy9cblxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhaSwgeyByYW5kb21BdHRhY2sgfSwgeyBzbWFydEF0dGFjayB9LCB7IHBsYWNlRmxlZXQgfSk7XG59XG5cbmV4cG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyfSIsIi8vIHNoaXAgbG9naWNcblxuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBsZXQgbWFya2VyID0gbGVuZ3RoO1xuICAgIGlmIChtYXJrKSB7XG4gICAgICAgIG1hcmtlciA9IG1hcms7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgICAgIGhpdCgpO1xuICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgbWFya2VyLCBjb29yZHMsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMywgMSk7XG4gICAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICByZXR1cm4geyBzdWJtYXJpbmUsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH1cbn1cblxuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTsiLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWwgfSBmcm9tICcuL2luaXRpYWxET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbm1ha2VJbml0aWFsKCk7XG5cbi8vIGxvb3AudHVybihbNSwgNV0pO1xuLy8gbG9vcC50dXJuKFswLCAwXSk7XG5cblxuLy8gY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQpID0+IHtcbi8vICAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbi8vICAgICBsZXQgaGl0cyA9IDA7XG4vLyAgICAgbGV0IHN1bmsgPSBmYWxzZTtcbi8vICAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gaGl0cztcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuLy8gICAgICAgICBoaXRzICs9IDE7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7XG4vLyAgICAgfVxuLy8gICAgIC8vIGFkZGVkIHRoaXMgLSBjYW4gSSBzZXQgaGl0IGFuZCBpc1N1bmsgdG8gcHJpdmF0ZSwgYW5kIG9ubHkgZXhwb3J0IHRoaXMgb25lPyAhISFcbi8vICAgICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuLy8gICAgICAgICBoaXQoKTtcbi8vICAgICAgICAgcmV0dXJuIGlzU3VuaygpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4geyBsZW5ndGgsIHN1bmssIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxuLy8gICAgIH07XG4vLyBjb25zdCBzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG5cbi8vIGNvbnN0IGJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbi8vICAgICBjb25zdCBib2FyZCA9IFtdO1xuLy8gICAgIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbi8vICAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICAgICAgcm93LnB1c2goMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGJvYXJkO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbi8vICAgICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChfY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuLy8gICAgICAgICBfY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGBEZW5pZWQuYDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XSA9IG9iamVjdC5sZW5ndGg7XG4vLyAgICAgICAgIH19IGVsc2Uge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5sZW5ndGg7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbi8vICAgICAgICAgcmV0dXJuIGBQbGFjZWQuYFxuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IGFycmF5ID0gW107XG4vLyAgICAgICAgIGxldCB2YWx1ZTtcbi8vICAgICAgICAgaWYgKGF4aXMpIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX2NoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlO1xuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF93aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lmxlbmd0aCA9PT0gaW5wdXQpO1xuLy8gICAgIH1cbi8vICAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuLy8gICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbi8vICAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbi8vICAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4vLyAgICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4vLyAgICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuLy8gICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4vLyAgICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0aGVTaGlwID0gX3doaWNoU2hpcChib2FyZFt4XVt5XSk7XG4vLyAgICAgICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbi8vICAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIChib2FyZFt4XVt5XSArIDEwKSk7XG4vLyAgICAgICAgIHJldHVybiBzdW5rO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlID0gYm9hcmRbeF1beV07XG4vLyAgICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuLy8gICAgICAgICAgICAgaWYgKHN1bmspIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBmaXJlIGdhbWVPdmVyIGZ1bmN0aW9uXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgYWxsIGlzIG5lZWRlZCBpbnNpZGU/XG4vLyAgICAgICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC8vIGNoZWNrIHdoaWNoIHNoaXAgaXQgaXNcbi8vICAgICAgICAgICAgIC8vIHJ1biBoaXQoKSBvbiB0aGF0IHNoaXBcbi8vICAgICAgICAgICAgIC8vIHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgLSBzZW5kIHRvIERPTSBmbiB0byB1cGRhdGUgZGlzcGxheT9cbi8vICAgICAgICAgICAgIC8vIHRoaW5raW5nIHRoYXQgeW91IGNhbGwgYSBET00gZm4gd2l0aCBcInN1bmtcIiBib29sZWFuLi4gISEhXG4vLyAgICAgICAgICAgICAvLyB1cGRhdGUgYm9hcmRcbi8vICAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSB0byB1cGRhdGUgZ3JpZCB3aXRoIGhpdCBtYXJrICEhIVxuLy8gICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgLy8gYWRkIG1pc3MgdG8gYXJyYXlcbi8vICAgICAgICAgICAgIC8vIHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuLy8gICAgICAgICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4vLyAgICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gZnVuY3Rpb24gdG8gdXBkYXRlIGdyaWQgd2l0aCBtaXNzIG1hcmsgISEhXG4vLyAgICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4vLyAgICAgICAgICAgICByZXR1cm4gJ01pc3MnO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5KTtcbi8vICAgICAgICAgfSBcbi8vICAgICAgICAgLy8gbmVlZCB0byBsb29wIGJhY2sgLT4gbmVlZCB1c2VyIHRvIGdpdmUgbmV3IGNvb3JkaW5hdGVzXG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICB9ICAgXG4vLyAgICAgcmV0dXJuIHsgY3JlYXRlLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbi8vIH07XG4vLyBjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4vLyAgICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNvZGVuYW1lLCB3aW5zOiAwLCBhdHRhY2sgfTtcbi8vIH1cbi8vIGNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHtjb2RlbmFtZX0gPSBwbGF5ZXJGYWN0b3J5KCdFYXN5IEFJJykuY29kZW5hbWU7XG4vLyAgICAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuLy8gICAgIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbi8vICAgICAgICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbi8vICAgICAgICAgbGV0IHkgPSBfZ2VuZXJhdGUoKTtcbi8vICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbi8vICAgICB9O1xuLy8gICAgIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuLy8gICAgIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbi8vICAgICAgICAgbGV0IHZhbHVlID0gdHJ1ZTtcbi8vICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8YXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMV0gPT09IGFycmF5WzFdKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiB2YWx1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgYXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuLy8gICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbi8vICAgICAgICAgaWYgKF9hdmFpbGFibGUoY29vcmQpKSB7XG4vLyAgICAgICAgICAgICAvLyBhZGQgY29vcmRpbmF0ZXMgdG8gYXR0YWNrc0FycmF5XG4vLyAgICAgICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuLy8gICAgICAgICAgICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAvLyB0cnkgYWdhaW4gLSB3LyBuZXcgY29vcmRpbmF0ZXNcbi8vICAgICAgICAgICAgIGF0dGFjaygpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGNvZGVuYW1lLCBhdHRhY2ssIHdpbnM6IDB9O1xuLy8gfVxuLy8gZm9yIHRlc3RpbmcgcHVycG9zZXNcbi8vIGNvbnN0IGdhbWVib2FyZCA9IGJvYXJkRmFjdG9yeSgpO1xuLy8gY29uc3QgYm9hcmQgPSBnYW1lYm9hcmQuY3JlYXRlKDEwKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgdHJ1ZSwgMCwgMCk7XG4vLyBjb25zdCBzaGlwMiA9IFNoaXBGYWN0b3J5KDUpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwMiwgZmFsc2UsIDQsIDQpO1xuLy8gY29uc3Qgc2hpcDMgPSBTaGlwRmFjdG9yeSgzKTtcbi8vIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcDMsIGZhbHNlLCA5LCAwKTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkKTtcbi8vIGNvbnN0IHBsYXllciA9IHBsYXllckZhY3RvcnkoJ3doYW1vJyk7XG4vLyBjb25zb2xlLmxvZyhwbGF5ZXIpO1xuLy8gbGV0IGFpID0gY29tcHV0ZXIoKTtcbi8vIGV4cG9ydCB7IHNoaXAsIHBsYXllckZhY3RvcnkgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=