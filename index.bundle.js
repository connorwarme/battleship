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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/RussoOne-Regular.ttf */ "./src/fonts/RussoOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/EBGaramond-VariableFont_wght.ttf */ "./src/fonts/EBGaramond-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/EBGaramond-Italic-VariableFont_wght.ttf */ "./src/fonts/EBGaramond-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Russo';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-style: normal;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.headerTitle {\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    padding: 10px 25px;\n    margin: 0 2vw;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-column: 2/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 5px #0077B6;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAA2D;IAC3D,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,+DAAuE;IACvE,kBAAkB;AACtB;AACA;IACI,wBAAwB;IACxB,+DAA8E;IAC9E,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,4DAA4D;AAChE;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,2CAA2C;IAC3C,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,SAAS;IACT,4BAA4B;IAC5B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,0BAA0B;IAC1B,uCAAuC;IACvC,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,4CAA4C;AAChD;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;;;IAGI,kBAAkB;AACtB;AACA;IACI,8DAA8D;IAC9D,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB;AACA;IACI,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,8CAA8C;QAC9C,2BAA2B;QAC3B,mBAAmB;QACnB,YAAY;IAChB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,8BAA8B;QAC9B,+BAA+B;QAC/B,aAAa;QACb,YAAY;QACZ,oBAAoB;IACxB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;AACJ","sourcesContent":["@font-face {\n    font-family: 'Russo';\n    src: url('./fonts/RussoOne-Regular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url('./fonts/EBGaramond-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url('./fonts/EBGaramond-Italic-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.headerTitle {\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    padding: 10px 25px;\n    margin: 0 2vw;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-column: 2/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 5px #0077B6;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/fonts/EBGaramond-Italic-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/fonts/EBGaramond-Italic-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d561b81d4fd1bf7188a.ttf";

/***/ }),

/***/ "./src/fonts/EBGaramond-VariableFont_wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/EBGaramond-VariableFont_wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baa0e0cf79395becf7d7.ttf";

/***/ }),

/***/ "./src/fonts/RussoOne-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/RussoOne-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2f5b287ccb8fd446eae.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxpQkFBaUIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsT0FBTyxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0scUNBQXFDLDJCQUEyQixrRUFBa0UsdUJBQXVCLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLDhFQUE4RSx5QkFBeUIsR0FBRyxjQUFjLCtCQUErQixxRkFBcUYseUJBQXlCLEdBQUcsT0FBTyxpQkFBaUIsZ0JBQWdCLG1FQUFtRSxHQUFHLFNBQVMsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsd0JBQXdCLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGdCQUFnQiwyQ0FBMkMsc0JBQXNCLHVCQUF1QiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLDRCQUE0QixHQUFHLFVBQVUsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDhCQUE4QixvQkFBb0IsMEJBQTBCLGdDQUFnQywrQkFBK0IsMEJBQTBCLEdBQUcsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsc0JBQXNCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcsK0JBQStCLHFFQUFxRSxzQkFBc0IsdUJBQXVCLHlCQUF5QixvQkFBb0IseUJBQXlCLDhCQUE4QixtQkFBbUIsMEJBQTBCLGtEQUFrRCxpQ0FBaUMsOENBQThDLEdBQUcscUNBQXFDLHNCQUFzQix3Q0FBd0MsR0FBRyxzQ0FBc0MsNkJBQTZCLG9DQUFvQyxHQUFHLHNCQUFzQix1QkFBdUIseUJBQXlCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLFNBQVMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLCtCQUErQixHQUFHLGtCQUFrQixvQkFBb0IseUNBQXlDLDBCQUEwQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLHNDQUFzQyw0QkFBNEIsZ0JBQWdCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLEdBQUcsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRywyQkFBMkIsc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxrQ0FBa0MseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxVQUFVLHlCQUF5Qiw4QkFBOEIsOEJBQThCLDBCQUEwQixxRUFBcUUsc0JBQXNCLHVCQUF1QixpQ0FBaUMsOENBQThDLHdDQUF3QyxHQUFHLGdCQUFnQixzQkFBc0Isa0NBQWtDLEdBQUcsaUJBQWlCLDZCQUE2QixvQ0FBb0MsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDZDQUE2QyxlQUFlLHFCQUFxQixvQkFBb0IsK0JBQStCLDBCQUEwQixtREFBbUQsR0FBRywrQ0FBK0MsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQixzQ0FBc0MseUJBQXlCLG9CQUFvQixtREFBbUQsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLGVBQWUscUVBQXFFLGdDQUFnQyx5QkFBeUIsdUJBQXVCLDBCQUEwQiwrQkFBK0IscUNBQXFDLEdBQUcsUUFBUSxvQkFBb0IsZUFBZSxHQUFHLFNBQVMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixHQUFHLFNBQVMsdUNBQXVDLEdBQUcsUUFBUSx1Q0FBdUMsR0FBRyxTQUFTLDBDQUEwQyxHQUFHLFNBQVMsdUNBQXVDLEdBQUcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxZQUFZLHVCQUF1QixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLGFBQWEsbUJBQW1CLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyw2Q0FBNkMseUJBQXlCLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLGlCQUFpQixvQkFBb0IseUNBQXlDLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLEdBQUcsV0FBVyx5QkFBeUIsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsaUNBQWlDLDhDQUE4Qyw4QkFBOEIsd0NBQXdDLEdBQUcsb0JBQW9CLHNCQUFzQixrQ0FBa0MsR0FBRyxxQkFBcUIsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLEdBQUcsY0FBYyxvQkFBb0Isa0NBQWtDLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLGlDQUFpQyw4Q0FBOEMsR0FBRyxrQ0FBa0MsaUNBQWlDLEdBQUcsdURBQXVELHVCQUF1Qiw2QkFBNkIsT0FBTyxjQUFjLDJCQUEyQixPQUFPLHNCQUFzQix5REFBeUQsc0NBQXNDLDhCQUE4Qix1QkFBdUIsT0FBTyxrREFBa0QsNkJBQTZCLE9BQU8sbURBQW1ELDZCQUE2QixPQUFPLHFCQUFxQiw2QkFBNkIsT0FBTyx3QkFBd0IsOEJBQThCLHdCQUF3Qix5Q0FBeUMsMENBQTBDLHdCQUF3Qix1QkFBdUIsK0JBQStCLE9BQU8sa0JBQWtCLDZCQUE2QixPQUFPLG9CQUFvQix3QkFBd0IsT0FBTyxpQkFBaUIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsT0FBTyxHQUFHLG1CQUFtQjtBQUNsc29CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS2U7QUFDWjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1REFBYSxTQUFTLHNCQUFzQjtBQUNyRSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLHdCQUF3Qix1REFBYSxTQUFTLHFCQUFxQixFQUFFLEVBQUU7QUFDdkU7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDLDZCQUE2Qix1REFBYSxTQUFTLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5REFBWTtBQUNwQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEMsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLE1BQU07QUFDbEYsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWEsU0FBUyx3QkFBd0I7QUFDekUsa0JBQWtCLHVEQUFhLFNBQVMsb0JBQW9CO0FBQzVELDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFhLFNBQVMsd0JBQXdCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRm9EO0FBQ0w7O0FBRS9DO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWEsU0FBUyx1QkFBdUI7O0FBRS9EO0FBQ0Esc0JBQXNCLHVEQUFhLFNBQVMsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQixlQUFlLEtBQUs7QUFDbkU7QUFDQTtBQUNBLDBDQUEwQyxnQkFBZ0IsSUFBSSxRQUFRO0FBQ3RFO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxvQkFBb0I7QUFDNUUsVUFBVTtBQUNWLDhDQUE4QyxxQkFBcUIsbUJBQW1CLFVBQVUsT0FBTyxVQUFVLEVBQUUsZ0JBQWdCO0FBQ25JO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxxQkFBcUIsY0FBYyxPQUFPO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLFFBQVEsa0RBQVE7QUFDaEI7QUFDQSxxQkFBcUIsdURBQWEsU0FBUyxzQkFBc0I7QUFDakUsdUJBQXVCLHVEQUFhLFNBQVMsZ0JBQWdCO0FBQzdEO0FBQ0EsdUJBQXVCLHVEQUFhLFNBQVMsZ0JBQWdCO0FBQzdELHdDQUF3QyxnQkFBZ0I7QUFDeEQsMEJBQTBCLHVEQUFhLFlBQVksbUJBQW1CO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RWtDO0FBQ2lCO0FBQ0g7QUFDbUM7QUFDcEQ7QUFDUTtBQUNEOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHVEQUFhO0FBQ3hCLFlBQVksa0RBQVk7QUFDeEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCLGVBQWUsa0RBQVc7QUFDMUIsZUFBZSxrREFBVztBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrREFBUTtBQUNuQixZQUFZLGtEQUFZO0FBQ3hCO0FBQ0EsZUFBZSxrREFBVztBQUMxQixlQUFlLGtEQUFXO0FBQzFCLGVBQWUsa0RBQVc7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFRO0FBQ3pCLE1BQU07QUFDTixpQkFBaUIsdURBQWEsSUFBSSxXQUFXO0FBQzdDO0FBQ0EsZUFBZSxrREFBWTtBQUMzQjtBQUNBLGtCQUFrQixpREFBVTs7QUFFNUIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQWtCO0FBQ2hELFFBQVEsdURBQVk7QUFDcEI7QUFDQSw4QkFBOEIsNkRBQWtCO0FBQ2hEO0FBQ0E7QUFDQSw4QkFBOEIsc0RBQVk7QUFDMUMsUUFBUSxpREFBVztBQUNuQjtBQUNBO0FBQ0EsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFjO0FBQzlCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtREFBUTtBQUN4QixnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFRO0FBQ3BCLFlBQVksb0RBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVztBQUN2QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktpQztBQUNaO0FBQ0k7QUFDRjtBQUNaO0FBQ0U7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWEsU0FBUyx5QkFBeUI7QUFDakUsa0JBQWtCLHVEQUFhLFNBQVMscUJBQXFCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBYSxTQUFTLHlCQUF5QjtBQUNqRSxzQkFBc0IsdURBQWEsU0FBUyxtQkFBbUI7QUFDL0QsMEJBQTBCLHVEQUFhLFNBQVMsdUJBQXVCO0FBQ3ZFLG9CQUFvQix1REFBYSxPQUFPLG9GQUFvRjtBQUM1SCxvQkFBb0IsdURBQWEsU0FBUyxpQkFBaUI7QUFDM0Qsa0JBQWtCLDhDQUFNO0FBQ3hCO0FBQ0EscUJBQXFCLHVEQUFhLE9BQU8sMEdBQTBHO0FBQ25KLHFCQUFxQix1REFBYSxTQUFTLGtCQUFrQjtBQUM3RCxtQkFBbUIsZ0RBQVE7QUFDM0I7QUFDQSwwQkFBMEIsdURBQWEsU0FBUyx1QkFBdUI7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBYSxTQUFTLGNBQWM7QUFDckQsa0JBQWtCLHVEQUFhLFNBQVMsdUJBQXVCO0FBQy9ELHFCQUFxQix1REFBYSxTQUFTLHdCQUF3QjtBQUNuRSxrQkFBa0IsdURBQWEsU0FBUywrQkFBK0I7QUFDdkUscUJBQXFCLHVEQUFhLFNBQVMsc0JBQXNCO0FBQ2pFO0FBQ0EsbUJBQW1CLHVEQUFhLFNBQVMsd0JBQXdCO0FBQ2pFLGtCQUFrQix1REFBYSxXQUFXLDZFQUE2RTtBQUN2SCx1QkFBdUIsdURBQWEsV0FBVyxnQkFBZ0I7QUFDL0Q7QUFDQSxtQkFBbUIsdURBQWEsU0FBUyx3QkFBd0I7QUFDakUsa0JBQWtCLHVEQUFhLFlBQVksZUFBZTtBQUMxRDs7QUFFQTtBQUNBLDRCQUE0QixrREFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFhLFNBQVMsY0FBYztBQUNyRDtBQUNBLHFCQUFxQixvREFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQWM7QUFDcEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdHMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix1REFBYSxTQUFTLHlCQUF5QjtBQUNyRSxzQkFBc0IsdURBQWEsU0FBUyxtQkFBbUI7QUFDL0Q7QUFDQSxpQkFBaUIsdURBQWEsUUFBUSxvQkFBb0I7QUFDMUQ7QUFDQSxtQkFBbUIsdURBQWEsUUFBUSxpQkFBaUI7QUFDekQsb0JBQW9CLHVEQUFhLFNBQVMsbUJBQW1CLFlBQVksRUFBRTtBQUMzRSw2QkFBNkIsWUFBWTtBQUN6QyxxQkFBcUIsdURBQWEsU0FBUyxtQkFBbUI7QUFDOUQsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWEsU0FBUyxxQkFBcUI7QUFDbkU7QUFDQSx5QkFBeUIsdURBQWEsU0FBUyxzQkFBc0I7QUFDckU7QUFDQSx5QkFBeUIsdURBQWEsU0FBUyxzQkFBc0I7QUFDckU7QUFDQSwwQkFBMEIsdURBQWEsU0FBUyx1QkFBdUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZTtBQUNZO0FBQ3RCO0FBQ0Y7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1REFBYSxTQUFTLHdCQUF3QjtBQUN4RSx3QkFBd0IsdURBQWEsU0FBUywyQkFBMkI7QUFDekUsd0JBQXdCLHVEQUFhLFlBQVksaUJBQWlCO0FBQ2xFO0FBQ0EsMEJBQTBCLHVEQUFhLFlBQVksbUJBQW1CO0FBQ3RFO0FBQ0EseUJBQXlCLHVEQUFhLFNBQVMsMkJBQTJCO0FBQzFFLDhCQUE4Qix1REFBYSxTQUFTLHVCQUF1QjtBQUMzRTtBQUNBLDhCQUE4Qix1REFBYSxTQUFTLHNCQUFzQjtBQUMxRTtBQUNBLDhCQUE4Qix1REFBYSxTQUFTLHNCQUFzQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxLQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDJCQUEyQixtQkFBbUIsRUFBRSxTQUFTO0FBQ3pELGNBQWM7QUFDZCwyQkFBMkIsU0FBUyxFQUFFLG1CQUFtQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBWTtBQUN4QjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQVU7QUFDeEMsUUFBUSx1REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw0REFBZTtBQUN2QjtBQUNBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2tDO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0RBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCO0FBQ3RDLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQixRQUFRLGNBQWMsSUFBSSxhQUFhLElBQUksWUFBWTtBQUNsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQThCO0FBQ2E7QUFDdEI7O0FBRXJCLHdEQUFXOztBQUVYO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0EsY0FBYztBQUNkLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0EsYUFBYTtBQUNiLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21zRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbGVnZW5kRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VGbGVldERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUnVzc29PbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0VCR2FyYW1vbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9FQkdhcmFtb25kLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhckl0YWxpYyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdHYXInLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG4uYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBUaW1lcywgR2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xcbn1cXG4uY29tbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbW1zIHtcXG4gICAgbWluLXdpZHRoOiA4NTBweDtcXG4gICAgcGFkZGluZzogMXZoIDN2dztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiM5MGUwZWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICM5MGUwZWY7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnBsYWNlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICBtYXJnaW46IDAgMnZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDQ1LCAxMDAsIDE3MCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjMDA3N0I2O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5wbGFjZUluc3RydWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluc3RydWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTBlMGVmO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAzZnI7XFxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggNDBweCA1MHB4O1xcbiAgICBib3JkZXI6IDE2cHggZG91YmxlIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0Q29udGFpbmVyID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pbnB1dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlucHV0RmllbGQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uc3RhcnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3RhcnQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjOTBlMGVmO1xcbn1cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgbWF4LWhlaWdodDogNDE4cHg7XFxuICAgIG1heC13aWR0aDogNDE4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDQwcHggcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDRmcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5vYmplY3RpdmVCb3gge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsXFxuLmluc3RydWN0Qm94IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmRMYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoMzUsIDEwMCwgMTcwKTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMnB4IDAuMnB4IGJsYWNrO1xcbn1cXG4uY29sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycHg7XFxufVxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDAsIDApO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbn1cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDAsIDApO1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5sZWdlbmRCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmVtb2ppTGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDRweDtcXG59XFxuLmVtb2ppQm94IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmxlZ2VuZEJveCxcXG4ub2JqZWN0aXZlQm94LCBcXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICMwMDc3QjY7XFxufVxcbi5lbW9qaUxpLFxcbi5vYmplY3RpdmVUZXh0LFxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uaW5zdHJ1Y3RUZXh0IHtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5lbmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBib3JkZXI6IDE2cHggZG91YmxlIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4uYmFubmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxufVxcbi5wbGF5QWdhaW4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjMDA3N0I2O1xcbn1cXG4ucGxheUFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDc3QjY7XFxufVxcbi5wbGF5QWdhaW46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWcge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XFxuICAgIC5pbml0aWFsQ29udGVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMy8zLzQ7XFxuICAgIH1cXG4gICAgLmNvbW1zIHtcXG4gICAgICAgIG1pbi13aWR0aDogNzUwcHg7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMThmciAwLjVmciAxOGZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG4gICAgfVxcbiAgICAuZGlzcGxheUJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8zLzMvNDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8yLzMvLTI7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGhlaWdodDogMjIwcHg7XFxuICAgICAgICB3aWR0aDogNzUwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubGVnZW5kQm94IHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzQvMztcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3RCb3gge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgfVxcbiAgICAuZW1vamlCb3gge1xcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiwrREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtEQUF1RTtJQUN2RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBOEU7SUFDOUUsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCw0REFBNEQ7QUFDaEU7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFD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LFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixhQUFhO1FBQ2IsWUFBWTtRQUNaLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1J1c3NvT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0VCR2FyYW1vbmQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhckl0YWxpYyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0VCR2FyYW1vbmQtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0dhcicsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcbi5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBlZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIFRpbWVzLCBHZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxufVxcbi5jb21tQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uY29tbXMge1xcbiAgICBtaW4td2lkdGg6IDg1MHB4O1xcbiAgICBwYWRkaW5nOiAxdmggM3Z3O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IzkwZTBlZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzkwZTBlZjtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ucGxhY2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuICAgIG1hcmdpbjogMCAydnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDc3QjY7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuLnBsYWNlSW5zdHJ1Y3Rpb25zIHtcXG4gICAgcGFkZGluZzogMnZoIDJ2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5zdHJ1Y3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5MGUwZWY7XFxufVxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyIDNmcjtcXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcXG59XFxuLmluaXRpYWxDb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCA0MHB4IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5pbnN0cnVjdGlvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uaW5wdXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXRDb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmlucHV0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmlucHV0RmllbGQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uaW5wdXRGaWVsZDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5zdGFydENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFydCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICM5MGUwZWY7XFxufVxcbi5zdGFydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDA3N0I2O1xcbn1cXG4uc3RhcnQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5kaXNwbGF5Qm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBtYXgtaGVpZ2h0OiA0MThweDtcXG4gICAgbWF4LXdpZHRoOiA0MThweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNDBweCByZ2IoMzUsIDEwMCwgMTcwKTtcXG59XFxuLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgNGZyO1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYig0NSwgMTAwLCAxNzApO1xcbn1cXG4ubGVnZW5kQm94IHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuLm9iamVjdGl2ZUJveCB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcbi5sZWdlbmRCb3gsXFxuLm9iamVjdGl2ZUJveCxcXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZExhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4ycHggMC4ycHggYmxhY2s7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW1vamlMaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG4uZW1vamlCb3gge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsIFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwNzdCNjtcXG59XFxuLmVtb2ppTGksXFxuLm9iamVjdGl2ZVRleHQsXFxuLmluc3RydWN0VGV4dCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuLnBsYXlBZ2FpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMDc3QjY7XFxufVxcbi5wbGF5QWdhaW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnBsYXlBZ2FpbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2l0SWNvbixcXG4ubGlua0ljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5saW5rQ29udGFpbmVyID4gYSA+IGltZyB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5saW5rQ29udGFpbmVyID4gYSA+IGltZzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcXG4gICAgLmluaXRpYWxDb250ZW50IHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8zLzMvNDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgbWluLXdpZHRoOiA3NTBweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDAuNWZyIDE4ZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICB9XFxuICAgIC5kaXNwbGF5Qm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzMvMy80O1xcbiAgICB9XFxuICAgIC5sZWdlbmRDb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8tMjtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NTBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5sZWdlbmRCb3gge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzIvNC8zO1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdEJveCB7XFxuICAgICAgICBncmlkLXJvdzogMi80O1xcbiAgICB9XFxuICAgIC5lbW9qaUJveCB7XFxuICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICB3aWR0aDogMzZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbiAgICAgICAgY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3graSwgeV0pO1xuICAgICAgICB9fSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kraV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCwgeStpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrTWlzcyA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID09IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID09IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrUHJvYiA9IChsZW5ndGgsIGF4aXMsIHgsIHksIGhpdENvb3JkQXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHdlaWdodCA9IDE7XG4gICAgICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbTnVtYmVyKHgpK2ksIHldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFt4LCBOdW1iZXIoeSkraV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhpdENvb3JkQXJyYXkuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZFswXSA9PSBzaGlwQ29vcmRzW2ldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZFsxXSA9PSBzaGlwQ29vcmRzW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQgKj0gNTA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB3ZWlnaHQ7XG4gICAgICAgIC8vIG5lZWQgdG8gY29tcGFyZSBzaGlwQ29vcmRpbmF0ZXMgd2l0aCBoaXRDb29yZGluYXRlc0FycmF5IChuZWVkcyB0byBiZSBhIGZuIHBhcmFtZXRlcilcbiAgICAgICAgLy8gaWYgeWVzLCBpbmNyZWFzZSB3ZWlnaHQgYnkgZmFjdG9yIG9mIDVcbiAgICAgICAgLy8gaWYgbm8sIG5vcm1hbCB3ZWlnaHQgZm9yIGNlbGwgY291bnRlciBmb3IgcHJvYk1hcFxuICAgIH1cbiAgICBjb25zdCBjaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICAgIH1cbiAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVTaGlwID0gd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoc3Vuaykge1xuICAgICAgICAgICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4gICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4gICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgICAgIC8vIGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgICAgICAgIC8vIG9iai52YWx1ZSBtaWdodCBuZWVkIHRvIGJlIFwiLTFcIiAhISFcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgICAgICB9IFxuICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgb2JqLnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9ICAgXG4gICAgcmV0dXJuIHsgYm9hcmQsIGNyZWF0ZSwgcGxhY2VTaGlwLCBjaGVja1BsYWNlLCBjaGVja01pc3MsIGNoZWNrUHJvYiwgY2hlY2tPbkJvYXJkLCB3aGljaFNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRmFjdG9yeTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgYXR0YWNrSG92ZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QudmFsdWUgPT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzhCMDAwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgLy8gY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIGhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIG1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCAxMDAsIDE3MClcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIHN1bmtcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuLCBmdW5jdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Rpc3BsYXlCb2FyZCd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY29sYCwgaWQ6IGAke2l9YH0pO1xuICAgICAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gfSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYmUgYWJsZSB0byBkZWxpbmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIHBsYWNlIHNoaXBzIGFuZCBvdGhlciBmb3IgYWN0dWFsIGdhbWVwbGF5XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9vcC5nZXRUdXJuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0KFtpLCBqXSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF0dGFja0hvdmVyKGdyaWRDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWRDb2wuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Qm9hcmQ7XG59XG5jb25zdCBkaXNwbGF5U2hpcHMgPSAob2JqZWN0LCBib2FyZERPTSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRET00uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgbWFya0NlbGwgPSAoeCwgeSwgcmVzdWx0LCBnYiwgYm9hcmRET00sIGVtb2ppKSA9PiB7XG4gICAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnYi53aGljaFNoaXAocmVzdWx0LnNoaXApO1xuICAgICAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0uY2xhc3NMaXN0ID0gJ2NlbGwgc3Vuayc7XG4gICAgICAgICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLnRleHRDb250ZW50ID0gYCR7ZW1vaml9YDtcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCflKVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn4yKXCI7XG4gICAgfVxufVxuY29uc3QgZGlzcGxheUxhYmVsID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJsYWJlbENvbnRhaW5lclwifSk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2FyZExhYmVsJ30pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX0gd2F0ZXJzYDtcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGxhYmVsQ29udGFpbmVyO1xufVxuY29uc3QgYnVpbGRCb2FyZEFuZExhYmVsID0gKG9iamVjdCwgYm9vbGVhbiwgbWVzc2FnZSwgZnVuY3QpID0+IHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJib2FyZENvbnRhaW5lclwifSk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUxhYmVsKG1lc3NhZ2UpKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpKTtcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxMaXRlIH0gZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbUNvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbXMnfSk7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIGNvbW1zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29tbUMuYXBwZW5kQ2hpbGQoY29tbXMpO1xuICAgICAgICByZXR1cm4gY29tbUM7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29tbUMucmVtb3ZlQ2hpbGQoY29tbUMubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY29tbUMuZmlyc3RDaGlsZDtcbiAgICAgICAgY29tbXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiBQbGFjZSB5b3VyICR7c2hpcH0uYDtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06ICR7Y29udGVudH1gO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbJ2VtcHR5JywgJ3N1Ym1hcmluZScsICdwYXRyb2wgYm9hdCcsICdjcnVpc2VyJywgJ2Rlc3Ryb3llcicsICdiYXR0bGUgY2FycmllciddO1xuICAgIGNvbnN0IHByb25vdW5BcnJheSA9IFt7MDogJ3lvdScsIDE6ICd0aGVpcid9LCB7MDogJ3RoZXknLCAxOiAneW91cid9XTtcbiAgICBjb25zdCB1cGRhdGVUZXh0ID0gKHBsYXllck5hbWUsIGJvb2xlYW4sIGhpdCwgc3Vuaywgc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBsYXllciA/IHByb25vdW5BcnJheVswXSA6IHByb25vdW5BcnJheVsxXTtcbiAgICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgQXR0ZW50aW9uICR7cGxheWVyTmFtZS5jb2RlbmFtZX06IEVycm9yISBNdXN0IHNlbGVjdCBuZXcgY29vcmRpbmF0ZXMuYFxuICAgICAgICB9IGVsc2UgaWYgKHN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBmaXJlcyBhIHNob3QgYW5kICR7dmFsdWVbMF19IHN1bmsgJHt2YWx1ZVsxXX0gJHtzaGlwQXJyYXlbc2hpcF19IWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RyaWtlID0gaGl0ID8gYGxhbmRzIGEgc3RyaWtlIWA6IGBtaXNzZXMhYFxuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGF0dGFja3MgYW5kICR7c3RyaWtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZW5kR2FtZSA9IChwbGF5ZXIsIHJlc3RhcnRGbikgPT4ge1xuICAgICAgICBjb25zdCBtYWluQyA9IGNvbW1DLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgLy8gY2xlYXIgY29tbXMgYW5kIG1haW5cbiAgICAgICAgY2xlYXJEaXYoY29tbUMpO1xuICAgICAgICBjbGVhckRpdihtYWluQyk7XG4gICAgICAgIC8vIGJ1aWxkIGNvbnRlbnRcbiAgICAgICAgY29uc3QgZW5kQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2VuZENvbnRhaW5lcid9KTtcbiAgICAgICAgY29uc3QgYmFubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYmFubmVyJ30pO1xuICAgICAgICBiYW5uZXIudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISdcbiAgICAgICAgY29uc3Qgd2lubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnd2lubmVyJ30pO1xuICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3BsYXllci5jb2RlbmFtZX1gO1xuICAgICAgICBjb25zdCBwbGF5QWdhaW4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdwbGF5QWdhaW4nfSk7XG4gICAgICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IGBQbGF5IEFnYWluYDtcbiAgICAgICAgbWFpbkMuYXBwZW5kQ2hpbGQoZW5kQyk7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyXG4gICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGNvbnRlbnRcbiAgICAgICAgICAgIC8vIGNsZWFyRGl2KG1haW5DLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBtYWluQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1haW5DKTtcbiAgICAgICAgICAgIGNvbW1DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29tbUMpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJlc3RhcnRGbigpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIG1ha2VJbml0aWFsTGl0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnVpbGRDb21tcywgY2xlYXIsIGluc3RydWN0LCBtZXNzYWdlLCB1cGRhdGVUZXh0LCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb20gfTsiLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCwgYnVpbGRCb2FyZEFuZExhYmVsIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gJy4vY29tc0RPTSc7XG5pbXBvcnQgeyBwbGFjZSB9IGZyb20gJy4vcGxhY2VGbGVldERPTSc7XG5pbXBvcnQgY3JlYXRlTGVnZW5kIGZyb20gXCIuL2xlZ2VuZERPTVwiO1xuXG4vLyBnYW1lIGxvb3Bcbi8vIGluaXRpYWxpemUgdy8gcDEgYW5kIGdhbWVib2FyZDFcbi8vIHBsYWNlIHNoaXBzXG4vLyBjcmVhdGUgcDIgYW5kIGdhbWVib2FyZDJcbi8vIHBsYWNlIHNoaXBzXG4vLyB0dXJuIGxvZ2ljXG4vLyAtPiB0YWtlIGNvb3JkaW5hdGVzLCBjb25maXJtIGxlZ2FsIHBsYXkgKG5vdCByZXBlYXQpXG4vLyAtPiBsYXVuY2ggYXR0YWNrXG4vLyAgICAgIC0+IGhpdFxuLy8gICAgICAgICAgICAtPiBzdW5rP1xuLy8gICAgICAgICAgICAgICAgLT4geWVzOiAtPiBhbGwgc3Vuaz9cbi8vICAgICAgICAgICAgICAgICAgICAtPiB5ZXM6IGVuZCBnYW1lIChkaXNwbGF5KVxuLy8gICAgICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgLT4gbWlzc1xuLy8gICAgICAgICAgLT4gc3dpdGNoIHR1cm5zXG5cbmNvbnN0IHAxID0gUGxheWVyRmFjdG9yeSgnQWxmcmVkbycpO1xuY29uc3QgZ2IxID0gQm9hcmRGYWN0b3J5KCk7XG5nYjEuY3JlYXRlKDEwKTtcbmNvbnN0IHNoaXAxYSA9IFNoaXBGYWN0b3J5KDUpO1xuY29uc3Qgc2hpcDFiID0gU2hpcEZhY3RvcnkoNCk7XG5jb25zdCBzaGlwMWMgPSBTaGlwRmFjdG9yeSgzKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFhLCBmYWxzZSwgMCwgMCk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYiwgZmFsc2UsIDIsIDApO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWMsIGZhbHNlLCA0LCAwKTtcblxuY29uc3QgcDIgPSBjb21wdXRlcigpO1xuY29uc3QgZ2IyID0gQm9hcmRGYWN0b3J5KCk7XG5nYjIuY3JlYXRlKDEwKTtcbmNvbnN0IHNoaXAyYSA9IFNoaXBGYWN0b3J5KDUpO1xuY29uc3Qgc2hpcDJiID0gU2hpcEZhY3RvcnkoNCk7XG5jb25zdCBzaGlwMmMgPSBTaGlwRmFjdG9yeSgzKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJhLCBmYWxzZSwgNSwgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYiwgZmFsc2UsIDcsIDApO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmMsIGZhbHNlLCA5LCAwKTtcblxuLy8gY3JlYXRlIHBsYXllcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZ2FtZWJvYXJkXG5jb25zdCBpbml0aWFsaXplID0gKHBsYXllck5hbWUpID0+IHtcbiAgICBsZXQgcGxheWVyO1xuICAgIGlmICghcGxheWVyTmFtZSkge1xuICAgICAgICBwbGF5ZXIgPSBjb21wdXRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllciA9IFBsYXllckZhY3RvcnkoYCR7cGxheWVyTmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgZ2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBnYi5jcmVhdGUoMTApO1xuICAgIGNvbnN0IGZsZWV0ID0gYnVpbGRGbGVldCgpO1xuXG4gICAgcmV0dXJuIHsgcGxheWVyLCBnYiwgZmxlZXQgfVxufVxuXG5jb25zdCBsb29wID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gICAgbGV0IHBsYXllck9uZTtcbiAgICBsZXQgcGxheWVyVHdvO1xuICAgIGxldCBwbGF5ZXJCb2FyZERPTTtcbiAgICBsZXQgY29tcEJvYXJkRE9NO1xuICAgIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwbGF5ZXJUdXJuO1xuICAgIH1cbiAgICBjb25zdCBzd2l0Y2hUdXJucyA9ICgpID0+IHBsYXllclR1cm4gPSAhcGxheWVyVHVybjtcbiAgICBjb25zdCBpbml0aWFsVHVybiA9IChib2FyZDEsIGJvYXJkMiwgcGFyZW50RE9NKSA9PiB7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkQW5kTGFiZWwoYm9hcmQxLCBmYWxzZSwgJ2ZyaWVuZGx5JykpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoYm9hcmQxLCBwYXJlbnRET00uZmlyc3RDaGlsZC5sYXN0Q2hpbGQpO1xuICAgICAgICBwbGF5ZXJCb2FyZERPTSA9IHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZDtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDIsIHRydWUsICdlbmVteScsIGxvb3AudHVybikpO1xuICAgICAgICAvLyBkaXNwbGF5U2hpcHMoYm9hcmQyLCBwYXJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChjcmVhdGVMZWdlbmQoKSk7XG4gICAgICAgIGNvbS5tZXNzYWdlKHBsYXllck9uZS5wbGF5ZXIsIGBsYXVuY2ggYW4gYXR0YWNrIWApO1xuICAgIH1cbiAgICBjb25zdCBpbml0aWFsaXplR2FtZSA9IChjYWxsc2lnbiwgcGFyZW50RE9NKSA9PiB7XG4gICAgICAgIGNvbnN0IHAxID0gaW5pdGlhbGl6ZShgJHtjYWxsc2lnbn1gKTtcbiAgICAgICAgY29uc3QgcDIgPSBpbml0aWFsaXplKGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMik7XG4gICAgICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgLy8gaGF2ZSBBSSBwbGFjZSBmbGVldCwgcmFuZG9tbHlcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgY2hlY2tlZCAhISFcbiAgICAgICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgICAgICAvLyBuZWVkcyB0byBpbnZva2UgZm4gZm9yIHVzZXIgdG8gcGxhY2UgdGhlaXIgc2hpcHMuLi4gISEhXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudERPTSk7XG4gICAgICAgIHBsYWNlLnN0YXJ0KHBhcmVudERPTSwgcDEsIHAyKTtcbjtcbiAgICAgICAgLy8gaW5pdGlhbCB0dXJuID9cbiAgICAgICAgLy8gbmVlZCB0byBwYXNzIGluIHAxLmJvYXJkIGFuZCBwMi5ib2FyZCAoY2hhbmdlIGluaXRpYWwgdHVybiBmbilcbiAgICAgICAgY29uc29sZS5sb2cocDIuZ2IuYm9hcmQpO1xuICAgIFxuICAgICAgICBwbGF5ZXJPbmUgPSBwMTtcbiAgICAgICAgcGxheWVyVHdvID0gcDI7XG4gICAgICAgIC8vIG5lZWQgdGhpcyByZXR1cm4gdmFsdWU/ICEhIVxuICAgICAgICByZXR1cm4geyBwMSwgcDIgfVxuICAgIH1cbiAgICBjb25zdCBsYXVuY2hHYW1lID0gKHBhcmVudERPTSkgPT4ge1xuICAgICAgICBpbml0aWFsVHVybihwbGF5ZXJPbmUuZ2IsIHBsYXllclR3by5nYiwgcGFyZW50RE9NKTtcbiAgICB9XG4gICAgY29uc3QgcmVzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZXcgcGxheWVyc1xuICAgICAgICAvLyBuZXcgZ2FtZWJvYXJkc1xuICAgICAgICAvLyBuZXcgc2hpcCBsb2NhdGlvbnNcbiAgICAgICAgLy8gZGlzcGxheSBeXnRoZXNlXG4gICAgICAgIC8vIC0+IGdvIHRvIGluaXRpYWwgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIHBsYWNlIHNoaXBzIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBtYWluIHBhZ2UsIGxldCBiYXR0bGUgYmVnaW5cbiAgICAgICAgLy8gd2hhdCBlbHNlP1xuICAgICAgICBjb25zb2xlLmxvZygncmVzdGFydGZuJyk7IFxuICAgIH1cbiAgICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICAgIC8vIGRvIGkgbmVlZCA/ICEhIVxuICAgIGNvbnN0IHR1cm4gPSAoaW5wdXQpID0+IHtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllclR1cm4gPyBwbGF5ZXJPbmUucGxheWVyIDogcGxheWVyVHdvLnBsYXllcjtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgLy8gZG9lcyBpdCBuZWVkIGEgY2hlY2s/XG4gICAgICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwbGF5ZXJUd28uZ2IucmVjZWl2ZUF0dGFjayhpbnB1dFswXSwgaW5wdXRbMV0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFrYSB1c2VyIGNsaWNrZWQgb24gY29vcmRpbmF0ZXMgZm9yIGEgc2Vjb25kIHRpbWVcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCB0cnVlLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAvLyBkb20gZnVuY3Rpb24gcHJvbXB0aW5nIHVzZXIgdG8gdHJ5IG5ldyBjb29yZGluYXRlc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb24gbmV3IGNvb3JkaW5hdGVzLCB0dXJuIGNhbiBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gYWkgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdCwgcGxheWVyVHdvLmdiLCBjb21wQm9hcmRET00sIFwi8J+UsVwiKTtcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0LnZhbHVlLCByZXN1bHQuc3VuaywgcmVzdWx0LnNoaXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHN1bmtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGRpZmZlcmVudCBtZXNzYWdlLi4uXG4gICAgICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFpIHBsYXllciBtYWtlcyBhdHRhY2tcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gcDEgZ2FtZWJvYXJkXG4gICAgICAgICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLnNtYXJ0QXR0YWNrKHBsYXllck9uZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgbWFya0NlbGwocmVzdWx0LmNvb3JkWzBdLCByZXN1bHQuY29vcmRbMV0sIHJlc3VsdC5vYmosIHBsYXllck9uZS5nYiwgcGxheWVyQm9hcmRET00sIFwi8J+PtOKAjeKYoO+4j1wiKTtcbiAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQub2JqLnZhbHVlLCByZXN1bHQub2JqLnN1bmssIHJlc3VsdC5vYmouc2hpcCwgZmFsc2UpO1xuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5vYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbGF5ZXJUdXJuICYmICghcmVzdWx0LmFsbFN1bmspKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0dXJuKGZhbHNlKTsgXG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmFsbFN1bmspIHtcbiAgICAgICAgICAgIC8vIHN3aXRjaCB0dXJucyAoYmFjayB0byB3aW5uaW5nIHBsYXllcilcbiAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICAvLyBydW4gZ2FtZW92ZXIgZm5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29wIHRocm93aW5nIGdhbWUgb3ZlcicpO1xuICAgICAgICAgICAgLy8gbmVlZHMgcmVzdGFydEZuICEhIVxuICAgICAgICAgICAgY29tLmVuZEdhbWUoY3VycmVudFBsYXllciwgcmVzdGFydEZuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBnZXRUdXJuLCBpbml0aWFsVHVybiwgaW5pdGlhbGl6ZUdhbWUsIGxhdW5jaEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgR2l0aHViIGZyb20gJy4vaWNvbnMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi9pY29ucy9saW5rZWRpbi5zdmcnO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG4vLyBidWlsZCBpbml0aWFsIHBhZ2Vcbi8vIHB0IDEgLSBoZWFkZXIgYW5kIGZvb3RlciBcbi8vIHB0IDIgLSBib2R5ICh0aXRsZSwgaW5zdHJ1Y3Rpb25zLCB1c2VyIG5hbWUgaW5wdXQsIHN0YXJ0IGJ0bilcblxuLy9cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlclRpdGxlJ30pO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICByZXR1cm4gaGVhZEM7XG59XG4vL1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9vdGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb290ZXJCb3hcIn0pO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGlua0NvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIiwgXCJhbHRcIjogXCJHaXRodWIgUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2dpdEljb24nfSk7O1xuICAgIGdpdEljb24uc3JjID0gR2l0aHViO1xuICAgIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICAgIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsIFwiYWx0XCI6IFwiTGlua2VkSW4gUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgbGlua0ljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdsaW5rSWNvbid9KTtcbiAgICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRleHRDb250YWluZXJcIn0pO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtMaW5rKTtcbiAgICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RDO1xufVxuLy8gXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcIm1haW5cIn0pO1xuICAgIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWFpbkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luaXRpYWxDb250ZW50J30pO1xuICAgIGNvbnN0IGluZm9DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zJ30pO1xuICAgIGluc3RydWN0LnRleHRDb250ZW50ID0gJ0VsaW1pbmF0ZSB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnB1dENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6ICd0ZXh0JywgaWQ6ICd1c2VybmFtZScsIGNsYXNzOiAnaW5wdXRGaWVsZCcsIHBsYWNlaG9sZGVyOiAnQXF1YW1hbiDwn5SxJ30pO1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICd1c2VybmFtZSd9KTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIFBsYXllciBOYW1lOic7XG4gICAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnc3RhcnRDb250YWluZXInfSk7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdzdGFydCd9KTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lISdcblxuICAgIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4gY2xlYXJEaXYobWFpbkMpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgYSBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eSAhISFcbiAgICAgICAgXG4gICAgICAgIGxldCBjYWxsc2lnbiA9ICdBcXVhbWFuIPCflLEnO1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxzaWduID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3A/XG4gICAgICAgIC8vIGxvb3AuaW5pdGlhbFR1cm4obWFpbkMpO1xuICAgICAgICBsb29wLmluaXRpYWxpemVHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gICAgfVxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEZuKCk7XG4gICAgfSlcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DKTtcbiAgICBtYWluQy5hcHBlbmRDaGlsZChpbml0aWFsQyk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICAgIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbnB1dEMpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKHN0YXJ0Qyk7XG4gICAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG4vL1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYm9keSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn1cbmNvbnN0IG1ha2VJbml0aWFsTGl0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmJvZHknKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShjb20uYnVpbGRDb21tcygpLCBib2R5LmNoaWxkcmVuWzFdKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShtYWluQ29udGVudCgpLCBib2R5LmNoaWxkcmVuWzJdKTtcbn1cbmV4cG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBidWlsZCBsZWdlbmQgdG8gZXhwbGFpbiBlbW9qaXMsIHByb3ZpZGUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zXG5jb25zdCBzaGlwID0ge1xuICAgIGVtb2ppOiBcIiBcIixcbiAgICB0ZXh0OiBcImZyaWVuZGx5IHNoaXBcIixcbiAgICBjbGFzczogXCJzaGlwXCJcbn1cbmNvbnN0IHdhdmUgPSB7XG4gICAgZW1vamk6IFwi8J+MilwiLFxuICAgIHRleHQ6IFwiYXR0YWNrIG1pc3NcIixcbiAgICBjbGFzczogXCJtaXNzXCJcbn1cbmNvbnN0IGhpdCA9IHtcbiAgICBlbW9qaTogXCLwn5SlXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgaGl0XCIsXG4gICAgY2xhc3M6IFwiaGl0XCJcbn1cbmNvbnN0IHN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+UsVwiLFxuICAgIHRleHQ6IFwieW91IHN1bmsgZW5lbXkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW5lbXlTdW5rID0ge1xuICAgIGVtb2ppOiBcIvCfj7TigI3imKDvuI9cIixcbiAgICB0ZXh0OiBcImVuZW15IHN1bmsgZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW1vamlBcnJheSA9IFtzaGlwLCB3YXZlLCBoaXQsIHN1bmssIGVuZW15U3Vua107XG5cbmNvbnN0IGNyZWF0ZUxlZ2VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRDb250YWluZXInfSk7XG4gICAgY29uc3QgbGVnZW5kQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbGVnZW5kQm94J30pO1xuICAgIGxlZ2VuZEJveC50ZXh0Q29udGVudCA9IFwiTGVnZW5kOlwiO1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsIHtjbGFzczogJ2xlZ2VuZExpc3QnfSk7XG4gICAgZW1vamlBcnJheS5mb3JFYWNoKGVtb2ppID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScsIHtjbGFzczogJ2Vtb2ppTGknfSk7XG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogYGVtb2ppQm94ICR7ZW1vamkuY2xhc3N9YH0pO1xuICAgICAgICBib3gudGV4dENvbnRlbnQgPSBgJHtlbW9qaS5lbW9qaX1gO1xuICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW1vamlUZXh0J30pO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYC0gJHtlbW9qaS50ZXh0fWA7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KVxuICAgIGxlZ2VuZEJveC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kQm94KTsgXG4gICAgY29uc3QgaW5zdHJ1Y3RCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdEJveCd9KTtcbiAgICBpbnN0cnVjdEJveC50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zOlwiO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGV4dCd9KTtcbiAgICBpbnN0cnVjdFRleHQudGV4dENvbnRlbnQgPSAnU2VsZWN0IGNvb3JkaW5hdGVzIGluIGVuZW15IHdhdGVycyB0byBsYXVuY2ggYW4gYXR0YWNrLiBUaGUgYm9hcmQgd2lsbCBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLCBvciBpZiB5b3Ugc3VuayB0aGUgZW5lbXkgc2hpcC4gRmluZCBhbmQgZWxpbWluYXRlIGFsbCBmaXZlIGVuZW15IHNoaXBzIGJlZm9yZSB0aGV5IGVsaW1pbmF0ZSB5b3VycyEnXG4gICAgY29uc3Qgb2JqZWN0aXZlQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlQm94J30pO1xuICAgIG9iamVjdGl2ZUJveC50ZXh0Q29udGVudCA9ICdPYmplY3RpdmU6JztcbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlVGV4dCd9KTtcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gJ1NpbmsgdGhlIGVuZW15IGZsZWV0ISc7XG4gICAgb2JqZWN0aXZlQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVCb3gpO1xuICAgIGluc3RydWN0Qm94LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0Qm94KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gJy4vY29tc0RPTSc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2dhbWVsb29wJztcblxuY29uc3QgcGxhY2UgPSAoKCkgPT4ge1xuICAgIGxldCBheGlzID0gdHJ1ZTtcbiAgICBjb25zdCBjdXJyZW50QXhpcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZURpc3BsYXkgPSAob3Bwb25lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInBsYWNlQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3BsYWNlQnRuQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBheGlzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYXhpc0J0bid9KTtcbiAgICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGBSb3RhdGVgXG4gICAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3JhbmRvbUJ0bid9KTtcbiAgICAgICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG4gICAgICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VJbnN0cnVjdGlvbnMnfSk7XG4gICAgICAgIGNvbnN0IGluc3RydWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdFRpdGxlJ30pO1xuICAgICAgICBpbnN0cnVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCJcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQxLnRleHRDb250ZW50ID0gYFNlbGVjdCBjb29yZGluYXRlcyBvbiBib2FyZCB0byBwbGFjZSBjdXJyZW50IHNoaXAuYDtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQyLnRleHRDb250ZW50ID0gYFVzZSBidXR0b25zIHRvIHJvdGF0ZSBzaGlwIG9yIHJhbmRvbWx5IGRlcGxveSBlbnRpcmUgZmxlZXQuYFxuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAgICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGF4aXMgPSAhYXhpcztcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gYXhpcyA/ICdYJyA6ICdZJztcbiAgICAgICAgICAgIC8vIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgQXhpczogJHt0ZXh0fWA7XG4gICAgICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgICAgICAvLyBkZWxldGUgY3VycmVudCBib2FyZFxuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAvLyBidWlsZCBuZXcgYm9hcmQgdy8gY29ycmVjdCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHBlclNoaXAoY3VycmVudERPTSwgY3VycmVudEJvYXJkLCBjdXJyZW50U2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wcG9uZW50LnBsYXllci5wbGFjZUZsZWV0KGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChheGlzQnRuKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRpdGxlKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0MSk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIC8vIFxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuICAgICAgICBnYW1lYm9hcmQuY2hlY2tQbGFjZShzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGlnaGxpZ2h0TGVuZ3RoID0gKGVsZW1lbnQsIGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IEFycmF5LmZyb20oZWxlbWVudC5pZCk7XG4gICAgICAgIGxldCBuZXdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkraX0ke2Nvb3JkWzFdfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7Y29vcmRbMF19JHtOdW1iZXIoY29vcmRbMV0pK2l9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJZCk7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2xpY2tGbiA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGN1cnJlbnRPYmouZ2IucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBheGlzLCB4LCB5KTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgIG5leHRTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRPYmopO1xuICAgIH1cbiAgICBjb25zdCBjbGlja0F0dGFjayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsaWNrRm4oeCwgeSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhvdmVyID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvdWxkIGFkZCBhIGNsYXNzLi4uXG4gICAgICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodExlbmd0aChlbGVtZW50LCBzaGlwLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNsYXRlZ3JheVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgIGNlbGxBcnJheS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgICAgIGhvdmVyKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICBjbGlja0F0dGFjayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgY3VycmVudE9iajtcbiAgICBsZXQgY3VycmVudEJvYXJkO1xuICAgIGxldCBjdXJyZW50U2hpcDtcbiAgICBsZXQgZmxlZXRLZXlzO1xuICAgIGxldCBjdXJyZW50RE9NO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgdXBkYXRlQWxsQ3VycmVudHMgPSAocGFyZW50LCBvYmplY3QpID0+IHtcbiAgICAgICAgY3VycmVudERPTSA9IHBhcmVudDtcbiAgICAgICAgY3VycmVudE9iaiA9IG9iamVjdDtcbiAgICAgICAgY3VycmVudEJvYXJkID0gb2JqZWN0LmdiO1xuICAgICAgICBmbGVldEtleXMgPSBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QuZmxlZXQpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGVDdXJyZW50U2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDtcbiAgICB9XG4gICAgY29uc3QgbmV4dFNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmopID0+IHtcbiAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgY29tLmluc3RydWN0KHBsYXllck9iai5wbGF5ZXIsIGZsZWV0S2V5c1tjb3VudF0pO1xuICAgICAgICAgICAgcGVyU2hpcChwYXJlbnRET00sIHBsYXllck9iai5nYiwgcGxheWVyT2JqLmZsZWV0W2ZsZWV0S2V5c1tjb3VudF1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAgb2YgZ2FtZWxvb3AhJyk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgdXBkYXRlQ3VycmVudFNoaXAoc2hpcCk7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKHBsYXllckJvYXJkLCBmYWxzZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoY3VycmVudEJvYXJkLCBjdXJyZW50RE9NLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgYWRkQ2VsbExpc3RlbmVycyhwbGF5ZXJCb2FyZCwgc2hpcCk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ID0gKHBhcmVudERPTSwgcGxheWVyT2JqLCBvcHBvbmVudE9iaikgPT4ge1xuICAgICAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZURpc3BsYXkob3Bwb25lbnRPYmopKTtcbiAgICAgICAgdXBkYXRlQWxsQ3VycmVudHMocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICAgICAgICBuZXh0U2hpcChwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgfVxuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgY29tLmNsZWFyKCk7XG4gICAgICAgIC8vIGludm9rZSBnYW1lbG9vcCBzdGVwMiAtPiB3aGVyZSAyIGJvYXJkcyBhcmUgZGlzcGxheWVkXG4gICAgICAgIC8vIGEgd2F5IHRvIHRyYW5zaXRpb24gdGhpcyAoZWFzZS1pbik/ICEhIVxuICAgICAgICBsb29wLmxhdW5jaEdhbWUoY3VycmVudERPTSk7XG4gICAgfVxuICAgIHJldHVybiB7IGhvdmVyLCBzdGFydCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcGxhY2UgfTsiLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG4vLyBwbGF5ZXIgZmFjdG9yeSBhbmQgQUkgbG9naWNcblxuY29uc3QgUGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuICAgIGxldCB3aW5zID0gMDtcbiAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbiAgICB9XG4gICAgY29uc3QgYWRkV2luID0gKCkgPT4gd2lucyArPSAxO1xuICAgIHJldHVybiB7IGNvZGVuYW1lLCB3aW5zLCBhdHRhY2ssIGFkZFdpbiB9O1xufVxuY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWkgPSBQbGF5ZXJGYWN0b3J5KCdUaGUgS3Jha2VuJyk7XG4gICAgY29uc3QgbmV3UHJvYiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgICAgICBwcm9iLmNyZWF0ZSgxMCk7XG4gICAgICAgIHJldHVybiBwcm9iO1xuICAgIH1cbiAgICBjb25zdCBzaG90ID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgc2hvdC5jcmVhdGUoMTApO1xuXG4gICAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgbGV0IHkgPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuICAgIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8YXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMV0gPT09IGFycmF5WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgX2dlbmVyYXRlQ29vcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB3aGlsZSAoIShfYXZhaWxhYmxlKGNvb3JkKSkpIHtcbiAgICAgICAgICAgIGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cbiAgICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZCA9IF9nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgICAgICAvLyBhZGQgY29vcmRpbmF0ZXMgdG8gYXR0YWNrc0FycmF5XG4gICAgICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuICAgICAgICAgICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBvYmouY29vcmQgPSBjb29yZDtcbiAgICAgICAgICAgIG9iai5vYmogPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgY29uc3QgX3JhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgaWYgKGF4aXMgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBwbGFjZUZsZWV0ID0gKHBsYXllcikgPT4ge1xuICAgICAgICAvLyBpIHRoaW5rIHRoaXMgY2FuIGJlIHVzZWQgZm9yIGVpdGhlciBwbGF5ZXIuLi5tYXliZSBtYWtlIGEgYnV0dG9uIGZvciB1c2VyIChpbiBpbml0aWFsKSAhISFcbiAgICAgICAgLy8gZm9yIGVhY2ggc2hpcCwgcmFuZG9tbHkgZ2VuZXJhdGUgY29vcmRpbmF0ZXMgYW5kIGF4aXNcbiAgICAgICAgY29uc3QgZmxlZXRLZXlzID0gT2JqZWN0LmtleXMocGxheWVyLmZsZWV0KTtcbiAgICAgICAgZmxlZXRLZXlzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBsZXQgYXhpcyA9IF9yYW5kb21BeGlzKCk7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIHdoaWxlICghKHBsYXllci5nYi5wbGFjZVNoaXAocGxheWVyLmZsZWV0W3NoaXBdLCBheGlzLCBjb29yZFswXSwgY29vcmRbMV0pKSkge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgICAgIGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGl0Q29vcmRzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYWRkVG9IaXRDb29yZHMgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgaGl0Q29vcmRzQXJyYXkucHVzaChpbnB1dCk7XG4gICAgICAgIC8vIHJldHVybiBoaXRDb29yZHNBcnJheTsgPz8gISEhIGRvIGkgbmVlZCB0aGlzIHRvIGJlIHJldHVybmVkP1xuICAgIH1cbiAgICBjb25zdCBfY2xlYXJIaXRDb29yZHMgPSAoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5jb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaGl0Q29vcmRzQXJyYXkuZmluZEluZGV4KHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlWzBdID09IGNvb3JkWzBdICYmIHZhbHVlWzFdID09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGhpdENvb3Jkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBfdXBkYXRlU2hvdEJvYXJkID0gKG9iamVjdCwgcGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gb2JqZWN0LmNvb3JkO1xuICAgICAgICBpZiAob2JqZWN0Lm9iai52YWx1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAob2JqZWN0Lm9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLmdiLndoaWNoU2hpcChvYmplY3Qub2JqLnNoaXApO1xuICAgICAgICAgICAgICAgIF9jbGVhckhpdENvb3JkcyhzaGlwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2FkZFRvSGl0Q29vcmRzKGNvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG90LmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAtMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfYWRkVG9Qcm9iQm9hcmQgPSAoZ2IsIHByb2JCb2FyZCwgbGVuZ3RoLCBib29sZWFuLCB4LCB5KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyV2VpZ2h0ID0gZ2IuY2hlY2tQcm9iKGxlbmd0aCwgYm9vbGVhbiwgeCwgeSwgaGl0Q29vcmRzQXJyYXkpO1xuICAgICAgICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICBwcm9iQm9hcmRbTnVtYmVyKHgpK2ldW3ldICs9IGNvdW50ZXJXZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2JCb2FyZFt4XVtOdW1iZXIoeSkraV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfcmVtb3ZlSGl0cyhnYiwgcHJvYkJvYXJkKTtcbiAgICB9XG4gICAgLy8gZXZhbHVhdGUgaG93IHRvIGltcHJvdmUgY2hlY2tQbGFjZSBmb3IgXCJodW50IG1vZGVcIlxuXG4gICAgY29uc3QgX3JlbW92ZUhpdHMgPSAoZ2IsIHByb2JCb2FyZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Z2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2IuYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2JCb2FyZFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9zaGlwUHJvYiA9IChnYiwgc2hpcCwgcHJvYikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Z2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoISgoZ2IuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSkgfHwgXG4gICAgICAgICAgICAgICAgKGdiLmNoZWNrTWlzcyhzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaikpKSkge1xuICAgICAgICAgICAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZ2IuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaikgfHwgXG4gICAgICAgICAgICAgICAgZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaikpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9hZGRUb1Byb2JCb2FyZChnYiwgcHJvYi5ib2FyZCwgc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX2ZsZWV0UHJvYiA9IChib2FyZCwgZmxlZXQsIHByb2IpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBPYmplY3Qua2V5cyhmbGVldCk7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICAvLyBkb2VzIHRoaXMgbmVlZCB0byBydW4gXCJpc1N1bmtcIiBpbiBvcmRlciB0byBnZXQgdXBkYXRlZCBzdW5rIHZhbHVlPyBcbiAgICAgICAgICAgIGlmICghKGZsZWV0W3NoaXBdLnN1bmspKVxuICAgICAgICAgICAgX3NoaXBQcm9iKGJvYXJkLCBmbGVldFtzaGlwXSwgcHJvYik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IF9nZXRQcm9iQ29vcmRzID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRNYXggPSB7XG4gICAgICAgICAgICBtYXg6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gY3VycmVudE1heC5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1heC5tYXggPSBib2FyZFtpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1heC5jb29yZHMgPSBbaSwgal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50TWF4OyAvLyBzaG91bGQgdGhpcyBqdXN0IGJlIGNvb3JkaW5hdGVzIG9yIHJldHVybiB0aGUgd2hvbGUgb2JqPyAhISFcbiAgICB9XG5cbiAgICAvLyBidWlsZCBzbWFydEFJIGF0dGFjayBtb2RlOlxuICAgIGNvbnN0IHNtYXJ0QXR0YWNrID0gKHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBwcm9iID0gbmV3UHJvYigpO1xuICAgICAgICAvLyB1cGRhdGVkIHByb2JhYmlsaXR5IGJvYXJkOyBuZWVkcyBhY2Nlc3MgdG8gdXNlcidzIGZsZWV0Li4/IG9yIG1ha2UgYSBjb3B5IGZvciB0aGUgcHJvYkJvYXJkLCB1cGRhdGUgcmVndWxhcmx5ICEhIVxuICAgICAgICBfZmxlZXRQcm9iKHNob3QsIHBsYXllci5mbGVldCwgcHJvYik7XG4gICAgICAgIC8vIGdldCBjb29yZGluYXRlcyBvZiBiZXN0IGNlbGxcbiAgICAgICAgY29uc3QgY29vcmQgPSBfZ2V0UHJvYkNvb3Jkcyhwcm9iLmJvYXJkKTtcbiAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiB0aG9zZSBjb29yZHNcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIG9iai5jb29yZCA9IGNvb3JkLmNvb3JkcztcbiAgICAgICAgb2JqLm9iaiA9IHBsYXllci5nYi5yZWNlaXZlQXR0YWNrKG9iai5jb29yZFswXSwgb2JqLmNvb3JkWzFdKTtcbiAgICAgICAgLy8gY2hlY2sgYXR0YWNrIGludGVsOiBoaXQgb3IgbWlzcywgc3Vuaz9cbiAgICAgICAgX3VwZGF0ZVNob3RCb2FyZChvYmosIHBsYXllcik7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIC8vXG5cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWksIHsgcmFuZG9tQXR0YWNrIH0sIHsgc21hcnRBdHRhY2sgfSwgeyBwbGFjZUZsZWV0IH0pO1xufVxuXG5leHBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlcn0iLCIvLyBzaGlwIGxvZ2ljXG5cbmNvbnN0IFNoaXBGYWN0b3J5ID0gKGlucHV0LCBtYXJrKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IG1hcmtlciA9IGxlbmd0aDtcbiAgICBpZiAobWFyaykge1xuICAgICAgICBtYXJrZXIgPSBtYXJrO1xuICAgIH1cbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cztcbiAgICB9XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFkZGVkIHRoaXMgLSBjYW4gSSBzZXQgaGl0IGFuZCBpc1N1bmsgdG8gcHJpdmF0ZSwgYW5kIG9ubHkgZXhwb3J0IHRoaXMgb25lPyAhISFcbiAgICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuICAgICAgICBoaXQoKTtcbiAgICAgICAgcmV0dXJuIGlzU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4geyBsZW5ndGgsIHN1bmssIG1hcmtlciwgY29vcmRzLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1c31cbn07XG5jb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMsIDEpO1xuICAgIGNvbnN0IHBhdHJvbCA9IFNoaXBGYWN0b3J5KDIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDMpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcEZhY3RvcnkoNSk7XG4gICAgcmV0dXJuIHsgc3VibWFyaW5lLCBwYXRyb2wsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2FycmllciB9XG59XG5cbmV4cG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH07IiwiLy8gRE9NIGhlbHBlciBmdW5jdGlvbnNcbi8vIC0+IGNyZWF0ZSBET00gZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXNcbi8vIGlzIHRoZXJlIGEgbW9yZSBlZmZlY3RpdmUvZWZmaWNpZW50IHdheSB0byBkbyB0aGlzPyFcbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9KVxufVxuY29uc3QgY2xlYXJEaXYgPSAoZGl2KSA9PiB7XG4gICAgd2hpbGUgKGRpdi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbCB9IGZyb20gJy4vaW5pdGlhbERPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubWFrZUluaXRpYWwoKTtcblxuLy8gbG9vcC50dXJuKFs1LCA1XSk7XG4vLyBsb29wLnR1cm4oWzAsIDBdKTtcblxuXG4vLyBjb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCkgPT4ge1xuLy8gICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuLy8gICAgIGxldCBoaXRzID0gMDtcbi8vICAgICBsZXQgc3VuayA9IGZhbHNlO1xuLy8gICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBoaXRzO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4vLyAgICAgICAgIGhpdHMgKz0gMTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuLy8gICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4vLyAgICAgICAgIGhpdCgpO1xuLy8gICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG4vLyAgICAgfTtcbi8vIGNvbnN0IHNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcblxuLy8gY29uc3QgYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGJvYXJkID0gW107XG4vLyAgICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuLy8gICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gYm9hcmQ7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuLy8gICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbi8vICAgICAgICAgaWYgKF9jaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4vLyAgICAgICAgIF9jaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gYERlbmllZC5gO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lmxlbmd0aDtcbi8vICAgICAgICAgfX0gZWxzZSB7XG4vLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBib2FyZFt4XVt5K2ldID0gb2JqZWN0Lmxlbmd0aDtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuLy8gICAgICAgICByZXR1cm4gYFBsYWNlZC5gXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbi8vICAgICAgICAgbGV0IHZhbHVlO1xuLy8gICAgICAgICBpZiAoYXhpcykge1xuLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPiAwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID4gMCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbi8vICAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBfY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWU7XG4vLyAgICAgICAgIGlmIChheGlzKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgX3doaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubGVuZ3RoID09PSBpbnB1dCk7XG4vLyAgICAgfVxuLy8gICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4vLyAgICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuLy8gICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuLy8gICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbi8vICAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbi8vICAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4vLyAgICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbi8vICAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbi8vICAgICB9XG4vLyAgICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IHRoZVNoaXAgPSBfd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbi8vICAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuLy8gICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbi8vICAgICAgICAgcmV0dXJuIHN1bms7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWUgPSBib2FyZFt4XVt5XTtcbi8vICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuLy8gICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4vLyAgICAgICAgICAgICBpZiAoc3Vuaykge1xuLy8gICAgICAgICAgICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbi8vICAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbi8vICAgICAgICAgICAgICAgICB9O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLy8gY2hlY2sgd2hpY2ggc2hpcCBpdCBpc1xuLy8gICAgICAgICAgICAgLy8gcnVuIGhpdCgpIG9uIHRoYXQgc2hpcFxuLy8gICAgICAgICAgICAgLy8gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSAtIHNlbmQgdG8gRE9NIGZuIHRvIHVwZGF0ZSBkaXNwbGF5P1xuLy8gICAgICAgICAgICAgLy8gdGhpbmtpbmcgdGhhdCB5b3UgY2FsbCBhIERPTSBmbiB3aXRoIFwic3Vua1wiIGJvb2xlYW4uLiAhISFcbi8vICAgICAgICAgICAgIC8vIHVwZGF0ZSBib2FyZFxuLy8gICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIHRvIHVwZGF0ZSBncmlkIHdpdGggaGl0IG1hcmsgISEhXG4vLyAgICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuLy8gICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4vLyAgICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbi8vICAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSBmdW5jdGlvbiB0byB1cGRhdGUgZ3JpZCB3aXRoIG1pc3MgbWFyayAhISFcbi8vICAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbi8vICAgICAgICAgICAgIHJldHVybiAnTWlzcyc7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4vLyAgICAgICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHkpO1xuLy8gICAgICAgICB9IFxuLy8gICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH0gICBcbi8vICAgICByZXR1cm4geyBjcmVhdGUsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xuLy8gfTtcbi8vIGNvbnN0IHBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbi8vICAgICBjb25zdCBhdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGdhbWVib2FyZCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnM6IDAsIGF0dGFjayB9O1xuLy8gfVxuLy8gY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3Qge2NvZGVuYW1lfSA9IHBsYXllckZhY3RvcnkoJ0Vhc3kgQUknKS5jb2RlbmFtZTtcbi8vICAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4vLyAgICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuLy8gICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuLy8gICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuLy8gICAgICAgICByZXR1cm4gW3gsIHldO1xuLy8gICAgIH07XG4vLyAgICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4vLyAgICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuLy8gICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4vLyAgICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHZhbHVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBhdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4vLyAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuLy8gICAgICAgICBpZiAoX2F2YWlsYWJsZShjb29yZCkpIHtcbi8vICAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbi8vICAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4vLyAgICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4vLyAgICAgICAgICAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIC8vIHRyeSBhZ2FpbiAtIHcvIG5ldyBjb29yZGluYXRlc1xuLy8gICAgICAgICAgICAgYXR0YWNrKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHsgY29kZW5hbWUsIGF0dGFjaywgd2luczogMH07XG4vLyB9XG4vLyBmb3IgdGVzdGluZyBwdXJwb3Nlc1xuLy8gY29uc3QgZ2FtZWJvYXJkID0gYm9hcmRGYWN0b3J5KCk7XG4vLyBjb25zdCBib2FyZCA9IGdhbWVib2FyZC5jcmVhdGUoMTApO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCB0cnVlLCAwLCAwKTtcbi8vIGNvbnN0IHNoaXAyID0gU2hpcEZhY3RvcnkoNSk7XG4vLyBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAyLCBmYWxzZSwgNCwgNCk7XG4vLyBjb25zdCBzaGlwMyA9IFNoaXBGYWN0b3J5KDMpO1xuLy8gZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwMywgZmFsc2UsIDksIDApO1xuLy8gY29uc29sZS5sb2coYm9hcmQpO1xuLy8gY29uc3QgcGxheWVyID0gcGxheWVyRmFjdG9yeSgnd2hhbW8nKTtcbi8vIGNvbnNvbGUubG9nKHBsYXllcik7XG4vLyBsZXQgYWkgPSBjb21wdXRlcigpO1xuLy8gZXhwb3J0IHsgc2hpcCwgcGxheWVyRmFjdG9yeSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==