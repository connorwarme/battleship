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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Russo';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-style: normal;\n}\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n.headerTitle {\n    grid-column: 2/16;\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.menuBtnContainer {\n    display: none;\n    grid-column: 16/17;\n}\n.menuBtn:hover {\n    cursor: pointer;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    height: 44px;\n    width: 125px;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-area: 1/2/4/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 3px black;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 3px black;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}\n@media (max-width: 950px) {\n    .menuBtn {\n        height: 40px;\n        width: 40px;\n    }\n    .comms {\n        min-width: 0;\n        width: 100%;\n        padding: 1vh 0;\n        font-size: 20px;\n        border-radius: 0;\n        margin-bottom: 5px;\n    }\n    .placeBtnContainer > button {\n        font-size: 18px;\n    }\n    .instructTitle {\n        font-size: 20px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .mainContainer {\n        grid-template-rows: repeat(2, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .initialContent {\n        grid-area: 1/1/4/2;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 2/1/3/2;\n        margin-top: 10px;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/1/2/2;\n        margin-top: 10px;\n    }\n    .legendContainer {\n        display: none;\n        grid-area: 1/1/3/2;\n        width: 450px;\n    }\n}\n@media (max-width: 549px) {\n    .headerTitle {\n        font-size: 36px;\n        padding: 5px 0;\n    }\n    .menuBtn {\n        height: 25px;\n        width: 25px;\n    }\n    .initialContent {\n        padding: 0;\n        gap: 0;\n    }\n    .instructionsContainer {\n        min-width: 260px;\n    }\n    .instructions {\n        font-size: 20px;\n    }\n    .inputContainer > label {\n        font-size: 16px;\n    }\n    .inputField {\n        width: 200px;\n    }\n    .comms {\n        font-size: 16px;\n        text-align: center;\n    }\n    .placeContainer {\n        margin-bottom: 5px;\n    }\n    .placeInstructions {\n        padding: 1vh 2vw;\n    }\n    .instructTitle {\n        font-size: 16px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .cell {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .mainContainer {\n        padding-bottom: 10px;\n    }\n    .legendContainer {\n        width: 90%;\n        justify-self: center;\n        margin-top: 5px;\n    }\n    .objectiveBox,\n    .instructBox,\n    .legendBox {\n        font-size: 16px;\n    }\n    .objectiveText,\n    .instructText,\n    .emojiLi {\n        font-size: 14px;\n    }\n    .emojiBox {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .gitIcon,\n    .linkIcon {\n        height: 25px;\n        width: 25px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAA2D;IAC3D,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,+DAAuE;IACvE,kBAAkB;AACtB;AACA;IACI,wBAAwB;IACxB,+DAA8E;IAC9E,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,SAAS;IACT,4DAA4D;AAChE;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,2CAA2C;IAC3C,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,SAAS;IACT,4BAA4B;IAC5B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,0BAA0B;IAC1B,uCAAuC;IACvC,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,4CAA4C;AAChD;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;;;IAGI,kBAAkB;AACtB;AACA;IACI,8DAA8D;IAC9D,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,+BAA+B;AACnC;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB;AACA;IACI,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,0BAA0B;AAC9B;AACA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,8CAA8C;QAC9C,2BAA2B;QAC3B,mBAAmB;QACnB,YAAY;IAChB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,8BAA8B;QAC9B,+BAA+B;QAC/B,aAAa;QACb,YAAY;QACZ,oBAAoB;IACxB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;AACJ;AACA;IACI;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,YAAY;QACZ,WAAW;QACX,cAAc;QACd,eAAe;QACf,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,kCAAkC;QAClC,0BAA0B;IAC9B;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,aAAa;QACb,kBAAkB;QAClB,YAAY;IAChB;AACJ;AACA;IACI;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,UAAU;QACV,MAAM;IACV;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;IACA;QACI,oBAAoB;IACxB;IACA;QACI,UAAU;QACV,oBAAoB;QACpB,eAAe;IACnB;IACA;;;QAGI,eAAe;IACnB;IACA;;;QAGI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;IACA;;QAEI,YAAY;QACZ,WAAW;IACf;AACJ","sourcesContent":["@font-face {\n    font-family: 'Russo';\n    src: url('./fonts/RussoOne-Regular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url('./fonts/EBGaramond-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url('./fonts/EBGaramond-Italic-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n.headerTitle {\n    grid-column: 2/16;\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.menuBtnContainer {\n    display: none;\n    grid-column: 16/17;\n}\n.menuBtn:hover {\n    cursor: pointer;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    height: 44px;\n    width: 125px;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-area: 1/2/4/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 3px black;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 3px black;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}\n@media (max-width: 950px) {\n    .menuBtn {\n        height: 40px;\n        width: 40px;\n    }\n    .comms {\n        min-width: 0;\n        width: 100%;\n        padding: 1vh 0;\n        font-size: 20px;\n        border-radius: 0;\n        margin-bottom: 5px;\n    }\n    .placeBtnContainer > button {\n        font-size: 18px;\n    }\n    .instructTitle {\n        font-size: 20px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .mainContainer {\n        grid-template-rows: repeat(2, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .initialContent {\n        grid-area: 1/1/4/2;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 2/1/3/2;\n        margin-top: 10px;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/1/2/2;\n        margin-top: 10px;\n    }\n    .legendContainer {\n        display: none;\n        grid-area: 1/1/3/2;\n        width: 450px;\n    }\n}\n@media (max-width: 549px) {\n    .headerTitle {\n        font-size: 36px;\n        padding: 5px 0;\n    }\n    .menuBtn {\n        height: 25px;\n        width: 25px;\n    }\n    .initialContent {\n        padding: 0;\n        gap: 0;\n    }\n    .instructionsContainer {\n        min-width: 260px;\n    }\n    .instructions {\n        font-size: 20px;\n    }\n    .inputContainer > label {\n        font-size: 16px;\n    }\n    .inputField {\n        width: 200px;\n    }\n    .comms {\n        font-size: 16px;\n        text-align: center;\n    }\n    .placeContainer {\n        margin-bottom: 5px;\n    }\n    .placeInstructions {\n        padding: 1vh 2vw;\n    }\n    .instructTitle {\n        font-size: 16px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .cell {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .mainContainer {\n        padding-bottom: 10px;\n    }\n    .legendContainer {\n        width: 90%;\n        justify-self: center;\n        margin-top: 5px;\n    }\n    .objectiveBox,\n    .instructBox,\n    .legendBox {\n        font-size: 16px;\n    }\n    .objectiveText,\n    .instructText,\n    .emojiLi {\n        font-size: 14px;\n    }\n    .emojiBox {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .gitIcon,\n    .linkIcon {\n        height: 25px;\n        width: 25px;\n    }\n}"],"sourceRoot":""}]);
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
    for (let i = 0; i < length; i++) {
      let row = [];
      board.push(row);
      for (let j = 0; j < length; j++) {
        row.push(0);
      }
    }
    return board;
  };
  const shipArray = [];
  const placeShip = (object, axis, x, y) => {
    if (
      checkOnBoard(object.length, axis, x, y) ||
      checkPlace(object.length, axis, x, y)
    ) {
      return false;
    }
    if (axis) {
      for (let i = 0; i < object.length; i++) {
        board[x + i][y] = object.marker;
        object.coords.push([x + i, y]);
      }
    } else {
      for (let i = 0; i < object.length; i++) {
        board[x][y + i] = object.marker;
        object.coords.push([x, y + i]);
      }
    }
    shipArray.push(object);
    return true;
  };
  const checkPlace = (length, axis, x, y) => {
    let array = [];
    let value;
    if (axis) {
      for (let i = 0; i < length; i++) {
        array.push(board[x + i][y] > 0);
      }
    } else {
      for (let i = 0; i < length; i++) {
        array.push(board[x][y + i] > 0);
      }
    }
    value = array.find((index) => {
      return index == true;
    });
    return value;
  };
  const checkMiss = (length, axis, x, y) => {
    let array = [];
    let value;
    if (axis) {
      for (let i = 0; i < length; i++) {
        array.push(board[x + i][y] == -1);
      }
    } else {
      for (let i = 0; i < length; i++) {
        array.push(board[x][y + i] == -1);
      }
    }
    value = array.find((index) => {
      return index == true;
    });
    return value;
  };
  const checkProb = (length, axis, x, y, hitCoordArray) => {
    let weight = 1;
    const shipCoords = [];
    for (let i = 0; i < length; i++) {
      if (axis) {
        shipCoords.push([Number(x) + i, y]);
      } else {
        shipCoords.push([x, Number(y) + i]);
      }
    }
    hitCoordArray.forEach((coord) => {
      // need to compare shipCoordinates with hitCoordinatesArray
      // if yes, increase weight x 50
      // if no, normal weight for cell counter for probMap
      for (let i = 0; i < shipCoords.length; i++) {
        if (coord[0] == shipCoords[i][0]) {
          if (coord[1] == shipCoords[i][1]) {
            weight *= 50;
          }
        }
      }
    });
    return weight;
  };
  const checkOnBoard = (length, axis, x, y) => {
    let value;
    if (axis) {
      value = x + length;
      return value > board.length;
    } else {
      value = y + length;
      return value > board[x].length;
    }
  };
  const whichShip = (input) => {
    return shipArray.find((index) => index.marker === input);
  };
  const allSunk = () => shipArray.every((index) => index.isSunk() === true);
  const missedAttacks = [];
  const _addMiss = (x, y) => missedAttacks.push([x, y]);
  const _updateBoard = (x, y, value) => (board[x][y] = value);
  const _updateMiss = (x, y) => {
    _addMiss(x, y);
    _updateBoard(x, y, -1);
  };
  const _updateHit = (x, y) => {
    const theShip = whichShip(board[x][y]);
    const sunk = theShip.hitPlus();
    _updateBoard(x, y, board[x][y] + 10);
    return sunk;
  };
  const _checkAttack = (x, y) => {
    if (board[x][y] > 10 || board[x][y] == -1) {
      return false;
    }
    return true;
  };
  const _launchAttack = (x, y, obj) => {
    obj.value = board[x][y];
    if (obj.value > 0) {
      // if a hit:
      // -> check which ship it is, add hit (to board & to display)
      // -> see if it sunk and update accordingly
      // -> change return from value to true
      const sunk = _updateHit(x, y);
      if (sunk) {
        obj.sunk = true;
        if (allSunk()) {
          obj.allSunk = true;
        }
      }
      obj.ship = obj.value;
      obj.value = true;
    } else {
      // aka a miss:
      // -> update gameboard w/ -1 (for miss)
      // -> update display
      _updateMiss(x, y);
      obj.value = false;
    }
    return obj;
  };
  const receiveAttack = (x, y) => {
    const obj = {
      sunk: false,
      allSunk: false,
    };
    if (_checkAttack(x, y)) {
      return _launchAttack(x, y, obj);
    }
    // else, user selected ineligible coordinates
    // and new coordinates needed
    obj.value = 0;
    return obj;
  };
  return {
    board,
    create,
    placeShip,
    checkPlace,
    checkMiss,
    checkProb,
    checkOnBoard,
    whichShip,
    receiveAttack,
    allSunk,
  };
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
  element.addEventListener("mouseenter", () => {
    // check if cell has been clicked already
    if (element.classList.value == "cell") {
      element.style.cursor = "crosshair";
      element.style.backgroundColor = "#38B000";
    } else {
      element.style.cursor = "not-allowed";
      element.style.backgroundColor = "#000000";
    }
  });
  element.addEventListener("mouseout", () => {
    const grid = Array.from(element.parentElement.children);
    grid.forEach((cell) => {
      if (cell.classList.length == 1) {
        cell.style.backgroundColor = "white";
      } else if (cell.classList.value == "cell hit") {
        cell.style.backgroundColor = "rgb(208, 0, 0)";
      } else if (cell.classList.value == "cell miss") {
        cell.style.backgroundColor = "rgb(35, 100, 170)";
      } else if (cell.classList.value == "cell sunk") {
        cell.style.backgroundColor = "rgb(208, 0, 0)";
      }
    });
  });
};
// render gameboards on page
const buildBoard = (object, boolean, funct) => {
  const board = object.board;
  const displayBoard = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "displayBoard" });
  for (let i = 0; i < board.length; i++) {
    const gridCol = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: `col`, id: `${i}` });
    displayBoard.appendChild(gridCol);
    for (let j = 0; j < board[i].length; j++) {
      const gridCell = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: `cell`, id: `${i}${j}` });
      if (boolean) {
        // add click listener for gameplay
        // and add attack hover feature
        gridCell.addEventListener("click", (e) => {
          if (_gameloop__WEBPACK_IMPORTED_MODULE_1__["default"].getTurn()) {
            funct([i, j], e);
          }
        });
        attackHover(gridCell);
      }
      gridCol.appendChild(gridCell);
    }
  }
  return displayBoard;
};
const displayShips = (object, boardDOM) => {
  const board = object.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        boardDOM.children[i].children[j].classList.add("ship");
      }
    }
  }
};
const markCell = (x, y, result, gb, boardDOM, emoji) => {
  if (result.sunk) {
    const ship = gb.whichShip(result.ship);
    ship.coords.forEach((coord) => {
      boardDOM.children[coord[0]].children[coord[1]].classList = "cell sunk";
      boardDOM.children[coord[0]].children[coord[1]].textContent = `${emoji}`;
    });
  } else if (result.value) {
    boardDOM.children[x].children[y].classList.add("hit");
    boardDOM.children[x].children[y].textContent = "🔥";
  } else {
    boardDOM.children[x].children[y].classList.add("miss");
    boardDOM.children[x].children[y].textContent = "🌊";
  }
};
const displayLabel = (message) => {
  const labelContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "labelContainer" });
  const label = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "boardLabel" });
  label.textContent = `${message} waters`;
  labelContainer.appendChild(label);
  return labelContainer;
};
const buildBoardAndLabel = (object, boolean, message, funct) => {
  const boardContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "boardContainer" });
  boardContainer.appendChild(displayLabel(message));
  boardContainer.appendChild(buildBoard(object, boolean, funct));
  return boardContainer;
};




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
  const commC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "commContainer" });

  const buildComms = () => {
    const comms = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "comms" });
    comms.textContent = ``;
    comms.style.display = "none";
    commC.appendChild(comms);
    return commC;
  };
  const clear = () => {
    commC.firstChild.textContent = "";
    commC.removeChild(commC.lastChild);
  };
  const instruct = (player, ship) => {
    const comms = commC.firstChild;
    comms.textContent = `${player.codename}: Place your ${ship}.`;
  };
  const message = (player, content) => {
    commC.firstChild.textContent = `${player.codename}: ${content}`;
  };
  const shipArray = [
    "empty",
    "submarine",
    "patrol boat",
    "cruiser",
    "destroyer",
    "battle carrier",
  ];
  const pronounArray = [
    { 0: "you", 1: "their" },
    { 0: "they", 1: "your" },
  ];
  const updateText = (playerName, boolean, hit, sunk, ship, player) => {
    let value = player ? pronounArray[0] : pronounArray[1];
    if (boolean) {
      commC.firstChild.textContent = `Attention ${playerName.codename}: Error! Must select new coordinates.`;
    } else if (sunk === true) {
      commC.firstChild.textContent = `${playerName.codename} fires a shot and ${value[0]} sunk ${value[1]} ${shipArray[ship]}!`;
    } else {
      let strike = hit ? `lands a strike!` : `misses!`;
      commC.firstChild.textContent = `${playerName.codename} attacks and ${strike}`;
    }
  };
  const endGame = (player) => {
    const mainC = commC.nextElementSibling;
    // clear comms and main
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(commC);
    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
    // build 'game over' content
    const endC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "endContainer" });
    const banner = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "banner" });
    banner.textContent = "Game Over!";
    const winner = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "winner" });
    winner.textContent = `Winner: ${player.codename}`;
    const playAgain = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", { class: "playAgain" });
    playAgain.textContent = `Play Again`;
    mainC.appendChild(endC);
    endC.appendChild(banner);
    endC.appendChild(winner);
    endC.appendChild(playAgain);

    // add listener
    playAgain.addEventListener("click", () => {
      // clear content
      mainC.parentElement.removeChild(mainC);
      commC.parentElement.removeChild(commC);
      (0,_initialDOM__WEBPACK_IMPORTED_MODULE_1__.makeInitialLite)();
    });
    // hide info button
    mainC.parentElement.children[0].lastChild.style.display = "none";
  };
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
//
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

  return { player, gb, fleet };
};
const loop = (() => {
  let playerTurn = true;
  let playerOne;
  let playerTwo;
  let playerBoardDOM;
  let compBoardDOM;
  const getTurn = () => {
    return playerTurn;
  };
  const switchTurns = () => (playerTurn = !playerTurn);
  const initialTurn = (board1, board2, parentDOM) => {
    parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoardAndLabel)(board1, false, "friendly"));
    (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(board1, parentDOM.firstChild.lastChild);
    playerBoardDOM = parentDOM.firstChild.lastChild;
    parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoardAndLabel)(board2, true, "enemy", loop.turn));
    compBoardDOM = parentDOM.lastChild.lastChild;
    parentDOM.appendChild((0,_legendDOM__WEBPACK_IMPORTED_MODULE_6__["default"])());
    _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.message(playerOne.player, `launch an attack!`);
  };
  const initializeGame = (callsign, parentDOM) => {
    const p1 = initialize(`${callsign}`);
    const p2 = initialize(false);
    // display comms
    parentDOM.parentElement.parentElement.children[1].firstChild.style.display =
      "flex";
    // have AI place fleet, randomly
    p2.player.placeFleet(p2);
    // prompt user to place ships
    _placeFleetDOM__WEBPACK_IMPORTED_MODULE_5__.place.start(parentDOM, p1, p2);
    playerOne = p1;
    playerTwo = p2;
    // don't think I need this return value..
    return { p1, p2 };
  };
  const launchGame = (parentDOM) => {
    initialTurn(playerOne.gb, playerTwo.gb, parentDOM);
  };
  let currentPlayer = {};
  const turn = (input) => {
    currentPlayer = playerTurn ? playerOne.player : playerTwo.player;
    let result;
    if (playerTurn) {
      result = playerTwo.gb.receiveAttack(input[0], input[1]);
      if (result.value === 0) {
        // aka user clicked on coordinates for a second time
        // prompt user for new coordinates
        _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(currentPlayer, true, "");
      } else {
        // user clicked on valid coordinates
        // update board logic (ai gameboard)
        // display the move, announce result on comms (hit/miss/sunk)
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(input[0], input[1], result, playerTwo.gb, compBoardDOM, "🔱");
        _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(
          currentPlayer,
          false,
          result.value,
          result.sunk,
          result.ship,
          true
        );
        switchTurns();
      }
    } else {
      // ai player makes attack
      // update board logic (user gameboard)
      // display the move, announce result
      result = playerTwo.player.smartAttack(playerOne);
      (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.markCell)(
        result.coord[0],
        result.coord[1],
        result.obj,
        playerOne.gb,
        playerBoardDOM,
        "🏴‍☠️"
      );
      _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.updateText(
        currentPlayer,
        false,
        result.obj.value,
        result.obj.sunk,
        result.obj.ship,
        false
      );
      switchTurns();
      result = result.obj;
    }
    if (!playerTurn && !result.allSunk) {
      // time delay before ai turn
      setTimeout(() => {
        turn(false);
      }, 1500);
    }
    if (result.allSunk) {
      // switch turns (back to winning player)
      switchTurns();
      // run gameover sequence
      console.log("game over");
      _comsDOM__WEBPACK_IMPORTED_MODULE_4__.com.endGame(currentPlayer);
    }
  };
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
/* harmony import */ var _icons_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/info.svg */ "./src/icons/info.svg");
/* harmony import */ var _icons_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/github.svg */ "./src/icons/github.svg");
/* harmony import */ var _icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/linkedin.svg */ "./src/icons/linkedin.svg");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");







// build initial page: header, body, footer

// reveal info btn (for mobile version)
const btnShow = (mainC) => {
  mainC.children[0].style.display = "none";
  mainC.children[1].style.display = "none";
  mainC.children[2].style.display = "grid";
};
const btnHide = (mainC) => {
  mainC.children[0].style.display = "block";
  mainC.children[1].style.display = "block";
  mainC.children[2].style.display = "none";
};
let headerBtn = false;
const headerBtnFn = (mainC) => {
  headerBtn = !headerBtn;
  if (headerBtn) {
    btnShow(mainC);
  } else {
    btnHide(mainC);
  }
};
const header = () => {
  const headC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "headerContainer" });
  const title = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "headerTitle" });
  title.textContent = "BATTLESHIP";
  const menuBtnContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "menuBtnContainer" });
  const menuBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "menuBtn" });
  const menuIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", { class: "menuIcon" });
  menuIcon.src = _icons_info_svg__WEBPACK_IMPORTED_MODULE_1__;
  menuIcon.alt = "Info";
  menuBtn.addEventListener("click", () => {
    headerBtnFn(document.querySelector("div.mainContainer"));
  });
  headC.appendChild(title);
  headC.appendChild(menuBtnContainer);
  menuBtnContainer.appendChild(menuBtn);
  menuBtn.appendChild(menuIcon);
  return headC;
};
const footer = () => {
  const footC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "footerContainer" });
  const footerBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "footerBox" });
  const linkContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "linkContainer" });
  const gitLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://github.com/connorwarme",
    alt: "Github Profile",
    target: "_blank",
  });
  const gitIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", { class: "gitIcon" });
  gitIcon.src = _icons_github_svg__WEBPACK_IMPORTED_MODULE_2__;
  gitIcon.alt = "Github Profile";
  const linkLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.linkedin.com/in/connor-warme-103a09167",
    alt: "LinkedIn Profile",
    target: "_blank",
  });
  const linkIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", { class: "linkIcon" });
  linkIcon.src = _icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__;
  linkIcon.alt = "LinkedIn Profile";
  const textContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "textContainer" });
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
};
//
const mainContent = () => {
  const main = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "main" });
  const mainC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "mainContainer" });
  const initialC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "initialContent" });
  const infoC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructionsContainer" });
  const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructions" });
  instruct.textContent = "Eliminate the enemy fleet!";
  const inputC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "inputContainer" });
  const input = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    id: "username",
    class: "inputField",
    placeholder: "Aquaman 🔱",
  });
  const inputLabel = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", { for: "username" });
  inputLabel.textContent = "Enter Player Name:";
  const startC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "startContainer" });
  const start = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", { class: "start" });
  start.textContent = "Start Game!";

  // listener and helpers
  const clearMain = () => (0,_utility__WEBPACK_IMPORTED_MODULE_0__.clearDiv)(mainC);
  const startFn = () => {
    // check if input is empty
    let callsign = "Aquaman 🔱";
    if (input.value) {
      callsign = input.value;
    }
    // clear main container -> prep for board display
    clearMain();
    // initialize game loop
    _gameloop__WEBPACK_IMPORTED_MODULE_4__["default"].initializeGame(callsign, mainC);
  };
  start.addEventListener("click", () => {
    startFn();
  });
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
};
const makeInitial = () => {
  const page = document.querySelector("body");
  const body = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "body" });
  body.appendChild(header());
  body.appendChild(_comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.buildComms());
  body.appendChild(mainContent());
  body.appendChild(footer());
  page.appendChild(body);
};
const makeInitialLite = () => {
  const body = document.querySelector("div.body");
  body.insertBefore(_comsDOM__WEBPACK_IMPORTED_MODULE_5__.com.buildComms(), body.children[1]);
  body.insertBefore(mainContent(), body.children[2]);
};



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
  class: "ship",
};
const wave = {
  emoji: "🌊",
  text: "attack miss",
  class: "miss",
};
const hit = {
  emoji: "🔥",
  text: "attack hit",
  class: "hit",
};
const sunk = {
  emoji: "🔱",
  text: "you sunk enemy ship",
  class: "sunk",
};
const enemySunk = {
  emoji: "🏴‍☠️",
  text: "enemy sunk friendly ship",
  class: "sunk",
};
const emojiArray = [ship, wave, hit, sunk, enemySunk];
const createLegend = () => {
  const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "legendContainer" });
  const legendBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "legendBox" });
  legendBox.textContent = "Legend:";
  const list = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", { class: "legendList" });
  emojiArray.forEach((emoji) => {
    const li = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", { class: "emojiLi" });
    const box = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: `emojiBox ${emoji.class}` });
    box.textContent = `${emoji.emoji}`;
    const text = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "emojiText" });
    text.textContent = `- ${emoji.text}`;
    li.appendChild(box);
    li.appendChild(text);
    list.appendChild(li);
  });
  legendBox.appendChild(list);
  container.appendChild(legendBox);
  const instructBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructBox" });
  instructBox.textContent = "Instructions:";
  const instructText = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructText" });
  instructText.textContent =
    "Select coordinates in enemy waters to launch an attack. The board will indicate a hit or miss, or if you sunk the enemy ship. Find and eliminate all five enemy ships before they eliminate yours!";
  const objectiveBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "objectiveBox" });
  objectiveBox.textContent = "Objective:";
  const objectiveText = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "objectiveText" });
  objectiveText.textContent = "Sink the enemy fleet!";
  objectiveBox.appendChild(objectiveText);
  container.appendChild(objectiveBox);
  instructBox.appendChild(instructText);
  container.appendChild(instructBox);
  return container;
};
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
  };
  const createDisplay = (opponent) => {
    const container = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "placeContainer" });
    const buttonC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "placeBtnContainer" });
    const axisBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", { class: "axisBtn" });
    axisBtn.textContent = `Rotate`;
    const randomBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", { class: "randomBtn" });
    randomBtn.textContent = "Random";
    const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "placeInstructions" });
    const instructTitle = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructTitle" });
    instructTitle.textContent = "Instructions:";
    const instructText1 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructText" });
    instructText1.textContent = `Select coordinates on board to place current ship.`;
    const instructText2 = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", { class: "instructText" });
    instructText2.textContent = `Use buttons to rotate ship or randomly deploy entire fleet.`;
    // add listeners
    axisBtn.addEventListener("click", () => {
      axis = !axis;
      // delete current board
      currentDOM.removeChild(currentDOM.lastChild);
      // build new board w/ correct listeners
      perShip(currentDOM, currentBoard, currentShip);
    });
    randomBtn.addEventListener("click", () => {
      // place user fleet, finish placeFleet & instantiate next step
      opponent.player.placeFleet(currentObj);
      currentDOM.removeChild(currentDOM.lastChild);
      finish();
    });
    // append it all together
    container.appendChild(buttonC);
    buttonC.appendChild(axisBtn);
    buttonC.appendChild(randomBtn);
    container.appendChild(instruct);
    instruct.appendChild(instructTitle);
    instruct.appendChild(instructText1);
    instruct.appendChild(instructText2);
    return container;
  };
  // check if coordinates yield ship placement on the board
  // or if they conflict with already placed ship
  const checkCell = (gameboard, ship, axis, x, y) => {
    if (
      gameboard.checkOnBoard(ship.length, axis, x, y) ||
      gameboard.checkPlace(ship.length, axis, x, y)
    ) {
      return false;
    }
    return true;
  };
  const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    let newId;
    for (let i = 0; i < length; i++) {
      if (axis) {
        newId = `${Number(coord[0]) + i}${coord[1]}`;
      } else {
        newId = `${coord[0]}${Number(coord[1]) + i}`;
      }
      const cell = document.getElementById(newId);
      cell.style.backgroundColor = "slategray";
    }
  };
  const clickFn = (x, y) => {
    currentObj.gb.placeShip(currentShip, axis, x, y);
    count++;
    currentDOM.removeChild(currentDOM.lastChild);
    nextShip(currentDOM, currentObj);
  };
  const clickAttack = (element, gameboard, ship, x, y) => {
    if (checkCell(gameboard, ship, currentAxis(), x, y)) {
      element.addEventListener("click", () => {
        clickFn(x, y);
      });
    }
  };
  const hover = (element, gameboard, ship, x, y) => {
    // on enter, highlight (gray is valid, red is not-allowed)
    element.addEventListener("mouseenter", () => {
      // could add a class...
      if (checkCell(gameboard, ship, currentAxis(), x, y)) {
        element.style.cursor = "pointer";
        highlightLength(element, ship.length);
      } else {
        element.style.cursor = "not-allowed";
        element.style.backgroundColor = "rgb(208, 0, 0)";
      }
    });
    // on exit, remove hover background color
    element.addEventListener("mouseout", () => {
      const grid = Array.from(document.querySelectorAll("div.cell"));
      grid.forEach((cell) => {
        if (cell.classList.length == 1) {
          cell.style.backgroundColor = "white";
        } else if (cell.classList.length == 2) {
          cell.style.backgroundColor = "slategray";
        }
      });
    });
  };
  const addCellListeners = (gameboard, ship) => {
    const cellArray = Array.from(document.querySelectorAll("div.cell"));
    cellArray.forEach((cell) => {
      const x = Number(cell.id.charAt(0));
      const y = Number(cell.id.charAt(1));
      hover(cell, gameboard, ship, x, y);
      clickAttack(cell, gameboard, ship, x, y);
    });
  };
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
    fleetKeys = Object.keys(object.fleet);
  };
  const updateCurrentShip = (ship) => {
    currentShip = ship;
  };
  const nextShip = (parentDOM, playerObj) => {
    if (count < 5) {
      _comsDOM__WEBPACK_IMPORTED_MODULE_2__.com.instruct(playerObj.player, fleetKeys[count]);
      perShip(parentDOM, playerObj.gb, playerObj.fleet[fleetKeys[count]]);
    } else {
      console.log("Next step of gameloop!");
      finish();
    }
  };
  const perShip = (parentDOM, playerBoard, ship) => {
    updateCurrentShip(ship);
    parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.buildBoard)(playerBoard, false));
    (0,_boardDOM__WEBPACK_IMPORTED_MODULE_1__.displayShips)(currentBoard, currentDOM.children[0]);
    addCellListeners(playerBoard, ship);
  };
  const start = (parentDOM, playerObj, opponentObj) => {
    parentDOM.parentElement.parentElement.children[1].appendChild(
      createDisplay(opponentObj)
    );
    updateAllCurrents(parentDOM, playerObj);
    nextShip(parentDOM, playerObj);
  };
  const finish = () => {
    _comsDOM__WEBPACK_IMPORTED_MODULE_2__.com.clear();
    // invoke next step in gameloop, battle mode
    // how can I smooth this transition? (ease-in)? !!!
    _gameloop__WEBPACK_IMPORTED_MODULE_3__["default"].launchGame(currentDOM);
    if (window.matchMedia("(min-width: 550px)")) {
      currentDOM.parentElement.parentElement.children[0].children[1].style.display =
        "block";
    }
  };
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
  };
  const addWin = () => (wins += 1);
  return { codename, wins, attack, addWin };
};
const computer = () => {
  const ai = PlayerFactory("The Kraken");
  const newProb = () => {
    const prob = (0,_board__WEBPACK_IMPORTED_MODULE_0__["default"])();
    prob.create(10);
    return prob;
  };
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
    for (let i = 0; i < attacksArray.length; i++) {
      if (attacksArray[i][0] === array[0]) {
        if (attacksArray[i][1] === array[1]) {
          value = false;
        }
      }
    }
    return value;
  };
  const _generateCoord = () => {
    let coord = _generateRandomAttack();
    while (!_available(coord)) {
      coord = _generateRandomAttack();
    }
    return coord;
  };
  const randomAttack = (gameboard) => {
    const coord = _generateCoord();
    // add coordinates to attacksArray
    // launch attack on opposition's board
    attacksArray.push(coord);
    const obj = {};
    obj.coord = coord;
    obj.obj = gameboard.receiveAttack(coord[0], coord[1]);
    return obj;
  };
  const _randomAxis = () => {
    const axis = Math.floor(Math.random() * 2);
    if (axis == 0) {
      return true;
    }
    return false;
  };
  const placeFleet = (player) => {
    // for each ship, randomly generate coordinates and axis
    const fleetKeys = Object.keys(player.fleet);
    fleetKeys.forEach((ship) => {
      let axis = _randomAxis();
      let coord = _generateRandomAttack();
      while (
        !player.gb.placeShip(player.fleet[ship], axis, coord[0], coord[1])
      ) {
        axis = _randomAxis();
        coord = _generateRandomAttack();
      }
    });
  };
  const hitCoordsArray = [];
  const _addToHitCoords = (input) => {
    hitCoordsArray.push(input);
  };
  const _clearHitCoords = (ship) => {
    ship.coords.forEach((coord) => {
      let index = hitCoordsArray.findIndex((value) => {
        if (value[0] == coord[0] && value[1] == coord[1]) {
          return value;
        }
      });
      hitCoordsArray.splice(index, 1);
    });
  };
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
  };
  const _addToProbBoard = (gb, probBoard, length, boolean, x, y) => {
    for (let i = 0; i < length; i++) {
      const counterWeight = gb.checkProb(length, boolean, x, y, hitCoordsArray);
      if (boolean) {
        probBoard[Number(x) + i][y] += counterWeight;
      } else {
        probBoard[x][Number(y) + i] += counterWeight;
      }
    }
    _removeHits(gb, probBoard);
  };
  // evaluate how to improve checkPlace for "hunt mode"

  const _removeHits = (gb, probBoard) => {
    for (let i = 0; i < gb.board.length; i++) {
      for (let j = 0; j < gb.board[i].length; j++) {
        if (gb.board[i][j] > 0) {
          probBoard[i][j] = 0;
        }
      }
    }
  };
  const _shipProb = (gb, ship, prob) => {
    for (let i = 0; i < gb.board.length; i++) {
      for (let j = 0; j < gb.board[i].length; j++) {
        if (
          !(
            gb.checkOnBoard(ship.length, true, i, j) ||
            gb.checkMiss(ship.length, true, i, j)
          )
        ) {
          _addToProbBoard(gb, prob.board, ship.length, true, i, j);
        }
      }
    }
    for (let i = 0; i < gb.board.length; i++) {
      for (let j = 0; j < gb.board[i].length; j++) {
        if (
          !(
            gb.checkOnBoard(ship.length, false, i, j) ||
            gb.checkMiss(ship.length, false, i, j)
          )
        ) {
          _addToProbBoard(gb, prob.board, ship.length, false, i, j);
        }
      }
    }
  };
  const _fleetProb = (board, fleet, prob) => {
    const ships = Object.keys(fleet);
    ships.forEach((ship) => {
      if (!fleet[ship].sunk) _shipProb(board, fleet[ship], prob);
    });
  };
  const _getProbCoords = (board) => {
    const currentMax = {
      max: 0,
    };
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] > currentMax.max) {
          currentMax.max = board[i][j];
          currentMax.coords = [i, j];
        }
      }
    }
    return currentMax;
  };
  // build smartAI attack mode:
  const smartAttack = (player) => {
    const prob = newProb();
    // updated probability board; needs access to user's fleet
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
  };
  return Object.assign(
    {},
    ai,
    { randomAttack },
    { smartAttack },
    { placeFleet }
  );
};




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
  };
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => {
    return length <= hits ? (sunk = true) : (sunk = false);
  };
  const hitPlus = () => {
    hit();
    return isSunk();
  };
  return { length, sunk, marker, coords, getHits, hit, isSunk, hitPlus };
};
const buildFleet = () => {
  const submarine = ShipFactory(3, 1);
  const patrol = ShipFactory(2);
  const destroyer = ShipFactory(3);
  const battleship = ShipFactory(4);
  const carrier = ShipFactory(5);
  return { submarine, patrol, destroyer, battleship, carrier };
};



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
};
const setAttributes = (element, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};
const clearDiv = (div) => {
  while (div.children.length > 0) {
    div.removeChild(div.firstChild);
  }
};



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

/***/ "./src/icons/info.svg":
/*!****************************!*\
  !*** ./src/icons/info.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c37a8ed9a593aab5b65c.svg";

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
/* harmony import */ var _initialDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialDOM */ "./src/initialDOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_initialDOM__WEBPACK_IMPORTED_MODULE_0__.makeInitial)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxN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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJDO0FBQ3RCOztBQUVyQix3REFBVyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21zRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbGVnZW5kRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VGbGVldERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUnVzc29PbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0VCR2FyYW1vbmQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9FQkdhcmFtb25kLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdHYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhckl0YWxpYyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdHYXInLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG4uYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGUwZWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbn1cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTYsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhlYWRlclRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMTY7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBUaW1lcywgR2VvcmdpYTtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xcbn1cXG4ubWVudUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uOiAxNi8xNztcXG59XFxuLm1lbnVCdG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21tQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uY29tbXMge1xcbiAgICBtaW4td2lkdGg6IDg1MHB4O1xcbiAgICBwYWRkaW5nOiAxdmggM3Z3O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IzkwZTBlZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzkwZTBlZjtcXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ucGxhY2VDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBoZWlnaHQ6IDQ0cHg7XFxuICAgIHdpZHRoOiAxMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYig0NSwgMTAwLCAxNzApO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzAwNzdCNjtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4ucGxhY2VJbnN0cnVjdGlvbnMge1xcbiAgICBwYWRkaW5nOiAydmggMnZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnN0cnVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzkwZTBlZjtcXG59XFxuLm1haW5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgM2ZyO1xcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xcbn1cXG4uaW5pdGlhbENvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweCA1MHB4IDQwcHggNTBweDtcXG4gICAgYm9yZGVyOiAxNnB4IGRvdWJsZSBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuLmluc3RydWN0aW9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5pbnB1dENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbnB1dENvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uaW5wdXRGaWVsZCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5wdXRGaWVsZDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnN0YXJ0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzkwZTBlZjtcXG59XFxuLnN0YXJ0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICMwMDc3QjY7XFxufVxcbi5zdGFydDphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuLmRpc3BsYXlCb2FyZCB7XFxuICAgIGdyaWQtYXJlYTogMS8yLzQvMztcXG4gICAgbWF4LWhlaWdodDogNDE4cHg7XFxuICAgIG1heC13aWR0aDogNDE4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDQwcHggcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDRmcjtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxufVxcbi5vYmplY3RpdmVCb3gge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsXFxuLmluc3RydWN0Qm94IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYm9hcmRMYWJlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGNvbG9yOiByZ2IoMzUsIDEwMCwgMTcwKTtcXG4gICAgdGV4dC1zaGFkb3c6IDAuMnB4IDAuMnB4IGJsYWNrO1xcbn1cXG4uY29sIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycHg7XFxufVxcbi5jZWxsIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNsYXRlZ3JheTtcXG59XFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDAsIDApO1xcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbn1cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDAsIDApO1xcbn1cXG4ubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5sZWdlbmRCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmVtb2ppTGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDRweDtcXG59XFxuLmVtb2ppQm94IHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmxlZ2VuZEJveCxcXG4ub2JqZWN0aXZlQm94LCBcXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgY29sb3I6ICMwMDc3QjY7XFxufVxcbi5lbW9qaUxpLFxcbi5vYmplY3RpdmVUZXh0LFxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uaW5zdHJ1Y3RUZXh0IHtcXG4gICAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5lbmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBib3JkZXI6IDE2cHggZG91YmxlIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4uYmFubmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi53aW5uZXIge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxufVxcbi5wbGF5QWdhaW4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCBibGFjaztcXG59XFxuLnBsYXlBZ2Fpbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCBibGFjaztcXG59XFxuLnBsYXlBZ2FpbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9vdGVyQm94IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ubGlua0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZ2l0SWNvbixcXG4ubGlua0ljb24ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5saW5rQ29udGFpbmVyID4gYSA+IGltZyB7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5saW5rQ29udGFpbmVyID4gYSA+IGltZzpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTUwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcXG4gICAgLmluaXRpYWxDb250ZW50IHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8zLzMvNDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgbWluLXdpZHRoOiA3NTBweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDAuNWZyIDE4ZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbiAgICB9XFxuICAgIC5kaXNwbGF5Qm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzMvMy80O1xcbiAgICB9XFxuICAgIC5sZWdlbmRDb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzIvMy8tMjtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgICAgIHdpZHRoOiA3NTBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5sZWdlbmRCb3gge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzIvNC8zO1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdEJveCB7XFxuICAgICAgICBncmlkLXJvdzogMi80O1xcbiAgICB9XFxuICAgIC5lbW9qaUJveCB7XFxuICAgICAgICBoZWlnaHQ6IDM2cHg7XFxuICAgICAgICB3aWR0aDogMzZweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcXG4gICAgLm1lbnVCdG4ge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgIH1cXG4gICAgLmNvbW1zIHtcXG4gICAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMXZoIDA7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuICAgIC5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG4gICAgLmluc3RydWN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5wbGFjZUluc3RydWN0aW9ucyAuaW5zdHJ1Y3RUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIH1cXG4gICAgLmluaXRpYWxDb250ZW50IHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzQvMjtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG4gICAgLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDlweCkge1xcbiAgICAuaGVhZGVyVGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XFxuICAgIH1cXG4gICAgLm1lbnVCdG4ge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgIH1cXG4gICAgLmluaXRpYWxDb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBnYXA6IDA7XFxuICAgIH1cXG4gICAgLmluc3RydWN0aW9uc0NvbnRhaW5lciB7XFxuICAgICAgICBtaW4td2lkdGg6IDI2MHB4O1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdGlvbnMge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5pbnB1dENvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAuaW5wdXRGaWVsZCB7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG4gICAgLmNvbW1zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAucGxhY2VDb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuICAgIC5wbGFjZUluc3RydWN0aW9ucyB7XFxuICAgICAgICBwYWRkaW5nOiAxdmggMnZ3O1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdFRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAucGxhY2VJbnN0cnVjdGlvbnMgLmluc3RydWN0VGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmNlbGwge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIH1cXG4gICAgLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIH1cXG4gICAgLm9iamVjdGl2ZUJveCxcXG4gICAgLmluc3RydWN0Qm94LFxcbiAgICAubGVnZW5kQm94IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgfVxcbiAgICAub2JqZWN0aXZlVGV4dCxcXG4gICAgLmluc3RydWN0VGV4dCxcXG4gICAgLmVtb2ppTGkge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5lbW9qaUJveCB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuZ2l0SWNvbixcXG4gICAgLmxpbmtJY29uIHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsK0RBQTJEO0lBQzNELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwrREFBdUU7SUFDdkUsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQThFO0lBQzlFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCw0REFBNEQ7QUFDaEU7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLG1C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QUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsTUFBTTtJQUNWO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLG9CQUFvQjtRQUNwQixlQUFlO0lBQ25CO0lBQ0E7OztRQUdJLGVBQWU7SUFDbkI7SUFDQTs7O1FBR0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7O1FBRUksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUnVzc29PbmUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2FyJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvRUJHYXJhbW9uZC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2FySXRhbGljJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvRUJHYXJhbW9uZC1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2FyJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuLmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBlMGVmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG59XFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE2LCAxZnIpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXJUaXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzE2O1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgVGltZXMsIEdlb3JnaWE7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZzogMTVweCAwIDAgMDtcXG59XFxuLm1lbnVCdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBncmlkLWNvbHVtbjogMTYvMTc7XFxufVxcbi5tZW51QnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbW1zIHtcXG4gICAgbWluLXdpZHRoOiA4NTBweDtcXG4gICAgcGFkZGluZzogMXZoIDN2dztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiM5MGUwZWY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICM5MGUwZWY7XFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnBsYWNlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgaGVpZ2h0OiA0NHB4O1xcbiAgICB3aWR0aDogMTI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoNDUsIDEwMCwgMTcwKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICMwMDc3QjY7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuLnBsYWNlSW5zdHJ1Y3Rpb25zIHtcXG4gICAgcGFkZGluZzogMnZoIDJ2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaW5zdHJ1Y3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5MGUwZWY7XFxufVxcbi5tYWluQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyIDNmcjtcXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcXG59XFxuLmluaXRpYWxDb250ZW50IHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweCA0MHB4IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5pbnN0cnVjdGlvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uaW5wdXRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4uaW5wdXRDb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmlucHV0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmlucHV0RmllbGQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG4uaW5wdXRGaWVsZDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5zdGFydENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zdGFydCB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICM5MGUwZWY7XFxufVxcbi5zdGFydDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMDA3N0I2O1xcbn1cXG4uc3RhcnQ6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5kaXNwbGF5Qm9hcmQge1xcbiAgICBncmlkLWFyZWE6IDEvMi80LzM7XFxuICAgIG1heC1oZWlnaHQ6IDQxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDQxOHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAycHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA0MHB4IHJnYigzNSwgMTAwLCAxNzApO1xcbn1cXG4ubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciA0ZnI7XFxuICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiKDQ1LCAxMDAsIDE3MCk7XFxufVxcbi5sZWdlbmRCb3gge1xcbiAgICBncmlkLXJvdzogMy80O1xcbn1cXG4ub2JqZWN0aXZlQm94IHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLmluc3RydWN0Qm94IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG59XFxuLmxlZ2VuZEJveCxcXG4ub2JqZWN0aXZlQm94LFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJvYXJkTGFiZWwge1xcbiAgICBmb250LWZhbWlseTogJ1J1c3NvJywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBjb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxuICAgIHRleHQtc2hhZG93OiAwLjJweCAwLjJweCBibGFjaztcXG59XFxuLmNvbCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnB4O1xcbn1cXG4uY2VsbCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzbGF0ZWdyYXk7XFxufVxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAwLCAwKTtcXG59XFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDEwMCwgMTcwKTtcXG59XFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCAwLCAwKTtcXG59XFxuLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ubGVnZW5kQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5lbW9qaUxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA0cHg7XFxufVxcbi5lbW9qaUJveCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5sZWdlbmRCb3gsXFxuLm9iamVjdGl2ZUJveCwgXFxuLmluc3RydWN0Qm94IHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiAjMDA3N0I2O1xcbn1cXG4uZW1vamlMaSxcXG4ub2JqZWN0aXZlVGV4dCxcXG4uaW5zdHJ1Y3RUZXh0IHtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmluc3RydWN0VGV4dCB7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbn1cXG4uZW5kQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgYm9yZGVyOiAxNnB4IGRvdWJsZSBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuLmJhbm5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbn1cXG4ucGxheUFnYWluIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggYmxhY2s7XFxufVxcbi5wbGF5QWdhaW46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XFxufVxcbi5wbGF5QWdhaW46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvb3RlckJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLmxpbmtDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmdpdEljb24sXFxuLmxpbmtJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWcge1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG4ubGlua0NvbnRhaW5lciA+IGEgPiBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk1MHB4KSBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XFxuICAgIC5pbml0aWFsQ29udGVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMy8zLzQ7XFxuICAgIH1cXG4gICAgLmNvbW1zIHtcXG4gICAgICAgIG1pbi13aWR0aDogNzUwcHg7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMThmciAwLjVmciAxOGZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciAuYm9hcmRDb250YWluZXI6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS80LzIvNTtcXG4gICAgfVxcbiAgICAuZGlzcGxheUJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8zLzMvNDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8yLzMvLTI7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGhlaWdodDogMjIwcHg7XFxuICAgICAgICB3aWR0aDogNzUwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubGVnZW5kQm94IHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8yLzQvMztcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3RCb3gge1xcbiAgICAgICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgfVxcbiAgICAuZW1vamlCb3gge1xcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xcbiAgICAgICAgd2lkdGg6IDM2cHg7XFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1MHB4KSB7XFxuICAgIC5tZW51QnRuIHtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICB9XFxuICAgIC5jb21tcyB7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDF2aCAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcbiAgICAucGxhY2VCdG5Db250YWluZXIgPiBidXR0b24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdFRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAucGxhY2VJbnN0cnVjdGlvbnMgLmluc3RydWN0VGV4dCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB9XFxuICAgIC5pbml0aWFsQ29udGVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS80LzI7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC5sZWdlbmRDb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzMvMjtcXG4gICAgICAgIHdpZHRoOiA0NTBweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTQ5cHgpIHtcXG4gICAgLmhlYWRlclRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICB9XFxuICAgIC5tZW51QnRuIHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICB9XFxuICAgIC5pbml0aWFsQ29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgZ2FwOiAwO1xcbiAgICB9XFxuICAgIC5pbnN0cnVjdGlvbnNDb250YWluZXIge1xcbiAgICAgICAgbWluLXdpZHRoOiAyNjBweDtcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3Rpb25zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAuaW5wdXRDb250YWluZXIgPiBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLmlucHV0RmllbGQge1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICB9XFxuICAgIC5jb21tcyB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnBsYWNlQ29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcbiAgICAucGxhY2VJbnN0cnVjdGlvbnMge1xcbiAgICAgICAgcGFkZGluZzogMXZoIDJ2dztcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLnBsYWNlSW5zdHJ1Y3Rpb25zIC5pbnN0cnVjdFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5jZWxsIHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgIC5sZWdlbmRDb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICB9XFxuICAgIC5vYmplY3RpdmVCb3gsXFxuICAgIC5pbnN0cnVjdEJveCxcXG4gICAgLmxlZ2VuZEJveCB7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIH1cXG4gICAgLm9iamVjdGl2ZVRleHQsXFxuICAgIC5pbnN0cnVjdFRleHQsXFxuICAgIC5lbW9qaUxpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuZW1vamlCb3gge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmdpdEljb24sXFxuICAgIC5saW5rSWNvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGNoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fFxuICAgICAgY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeCArIGldW3ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCArIGldW3ldID4gMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5ICsgaV0gPiAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSBhcnJheS5maW5kKChpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBjaGVja01pc3MgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCArIGldW3ldID09IC0xKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kgKyBpXSA9PSAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gYXJyYXkuZmluZCgoaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tQcm9iID0gKGxlbmd0aCwgYXhpcywgeCwgeSwgaGl0Q29vcmRBcnJheSkgPT4ge1xuICAgIGxldCB3ZWlnaHQgPSAxO1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXhpcykge1xuICAgICAgICBzaGlwQ29vcmRzLnB1c2goW051bWJlcih4KSArIGksIHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBDb29yZHMucHVzaChbeCwgTnVtYmVyKHkpICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBoaXRDb29yZEFycmF5LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAvLyBuZWVkIHRvIGNvbXBhcmUgc2hpcENvb3JkaW5hdGVzIHdpdGggaGl0Q29vcmRpbmF0ZXNBcnJheVxuICAgICAgLy8gaWYgeWVzLCBpbmNyZWFzZSB3ZWlnaHQgeCA1MFxuICAgICAgLy8gaWYgbm8sIG5vcm1hbCB3ZWlnaHQgZm9yIGNlbGwgY291bnRlciBmb3IgcHJvYk1hcFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb29yZFswXSA9PSBzaGlwQ29vcmRzW2ldWzBdKSB7XG4gICAgICAgICAgaWYgKGNvb3JkWzFdID09IHNoaXBDb29yZHNbaV1bMV0pIHtcbiAgICAgICAgICAgIHdlaWdodCAqPSA1MDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd2VpZ2h0O1xuICB9O1xuICBjb25zdCBjaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHdoaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXkuZmluZCgoaW5kZXgpID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICB9O1xuICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KChpbmRleCkgPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGNvbnN0IF9hZGRNaXNzID0gKHgsIHkpID0+IG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IChib2FyZFt4XVt5XSA9IHZhbHVlKTtcbiAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgIF9hZGRNaXNzKHgsIHkpO1xuICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gIH07XG4gIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHRoZVNoaXAgPSB3aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbiAgICBfdXBkYXRlQm9hcmQoeCwgeSwgYm9hcmRbeF1beV0gKyAxMCk7XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG4gIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgb2JqLnZhbHVlID0gYm9hcmRbeF1beV07XG4gICAgaWYgKG9iai52YWx1ZSA+IDApIHtcbiAgICAgIC8vIGlmIGEgaGl0OlxuICAgICAgLy8gLT4gY2hlY2sgd2hpY2ggc2hpcCBpdCBpcywgYWRkIGhpdCAodG8gYm9hcmQgJiB0byBkaXNwbGF5KVxuICAgICAgLy8gLT4gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseVxuICAgICAgLy8gLT4gY2hhbmdlIHJldHVybiBmcm9tIHZhbHVlIHRvIHRydWVcbiAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgb2JqLmFsbFN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvYmouc2hpcCA9IG9iai52YWx1ZTtcbiAgICAgIG9iai52YWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFrYSBhIG1pc3M6XG4gICAgICAvLyAtPiB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbiAgICAgIC8vIC0+IHVwZGF0ZSBkaXNwbGF5XG4gICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzdW5rOiBmYWxzZSxcbiAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgIH07XG4gICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSwgb2JqKTtcbiAgICB9XG4gICAgLy8gZWxzZSwgdXNlciBzZWxlY3RlZCBpbmVsaWdpYmxlIGNvb3JkaW5hdGVzXG4gICAgLy8gYW5kIG5ldyBjb29yZGluYXRlcyBuZWVkZWRcbiAgICBvYmoudmFsdWUgPSAwO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgY3JlYXRlLFxuICAgIHBsYWNlU2hpcCxcbiAgICBjaGVja1BsYWNlLFxuICAgIGNoZWNrTWlzcyxcbiAgICBjaGVja1Byb2IsXG4gICAgY2hlY2tPbkJvYXJkLFxuICAgIHdoaWNoU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgYXR0YWNrSG92ZXIgPSAoZWxlbWVudCkgPT4ge1xuICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbFwiKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzM4QjAwMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgfVxuICB9KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgZ3JpZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBoaXRcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIG1pc3NcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCAxMDAsIDE3MClcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIHN1bmtcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuLy8gcmVuZGVyIGdhbWVib2FyZHMgb24gcGFnZVxuY29uc3QgYnVpbGRCb2FyZCA9IChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGlzcGxheUJvYXJkXCIgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBgY29sYCwgaWQ6IGAke2l9YCB9KTtcbiAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWAgfSk7XG4gICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgZm9yIGdhbWVwbGF5XG4gICAgICAgIC8vIGFuZCBhZGQgYXR0YWNrIGhvdmVyIGZlYXR1cmVcbiAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGxvb3AuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICBmdW5jdChbaSwgal0sIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF0dGFja0hvdmVyKGdyaWRDZWxsKTtcbiAgICAgIH1cbiAgICAgIGdyaWRDb2wuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGxheUJvYXJkO1xufTtcbmNvbnN0IGRpc3BsYXlTaGlwcyA9IChvYmplY3QsIGJvYXJkRE9NKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5jb25zdCBtYXJrQ2VsbCA9ICh4LCB5LCByZXN1bHQsIGdiLCBib2FyZERPTSwgZW1vamkpID0+IHtcbiAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgY29uc3Qgc2hpcCA9IGdiLndoaWNoU2hpcChyZXN1bHQuc2hpcCk7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0uY2xhc3NMaXN0ID0gXCJjZWxsIHN1bmtcIjtcbiAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0udGV4dENvbnRlbnQgPSBgJHtlbW9qaX1gO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCflKVcIjtcbiAgfSBlbHNlIHtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+MilwiO1xuICB9XG59O1xuY29uc3QgZGlzcGxheUxhYmVsID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgbGFiZWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibGFiZWxDb250YWluZXJcIiB9KTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmRMYWJlbFwiIH0pO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9IHdhdGVyc2A7XG4gIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgcmV0dXJuIGxhYmVsQ29udGFpbmVyO1xufTtcbmNvbnN0IGJ1aWxkQm9hcmRBbmRMYWJlbCA9IChvYmplY3QsIGJvb2xlYW4sIG1lc3NhZ2UsIGZ1bmN0KSA9PiB7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkQ29udGFpbmVyXCIgfSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlMYWJlbChtZXNzYWdlKSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQob2JqZWN0LCBib29sZWFuLCBmdW5jdCkpO1xuICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxMaXRlIH0gZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICBjb25zdCBjb21tQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb21tQ29udGFpbmVyXCIgfSk7XG5cbiAgY29uc3QgYnVpbGRDb21tcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb21tcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb21tc1wiIH0pO1xuICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGA7XG4gICAgY29tbXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbW1DLmFwcGVuZENoaWxkKGNvbW1zKTtcbiAgICByZXR1cm4gY29tbUM7XG4gIH07XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbW1DLnJlbW92ZUNoaWxkKGNvbW1DLmxhc3RDaGlsZCk7XG4gIH07XG4gIGNvbnN0IGluc3RydWN0ID0gKHBsYXllciwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGNvbW1zID0gY29tbUMuZmlyc3RDaGlsZDtcbiAgICBjb21tcy50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06IFBsYWNlIHlvdXIgJHtzaGlwfS5gO1xuICB9O1xuICBjb25zdCBtZXNzYWdlID0gKHBsYXllciwgY29udGVudCkgPT4ge1xuICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiAke2NvbnRlbnR9YDtcbiAgfTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW1xuICAgIFwiZW1wdHlcIixcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIFwicGF0cm9sIGJvYXRcIixcbiAgICBcImNydWlzZXJcIixcbiAgICBcImRlc3Ryb3llclwiLFxuICAgIFwiYmF0dGxlIGNhcnJpZXJcIixcbiAgXTtcbiAgY29uc3QgcHJvbm91bkFycmF5ID0gW1xuICAgIHsgMDogXCJ5b3VcIiwgMTogXCJ0aGVpclwiIH0sXG4gICAgeyAwOiBcInRoZXlcIiwgMTogXCJ5b3VyXCIgfSxcbiAgXTtcbiAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHBsYXllciA/IHByb25vdW5BcnJheVswXSA6IHByb25vdW5BcnJheVsxXTtcbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGBBdHRlbnRpb24gJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfTogRXJyb3IhIE11c3Qgc2VsZWN0IG5ldyBjb29yZGluYXRlcy5gO1xuICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGZpcmVzIGEgc2hvdCBhbmQgJHt2YWx1ZVswXX0gc3VuayAke3ZhbHVlWzFdfSAke3NoaXBBcnJheVtzaGlwXX0hYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgIDogYG1pc3NlcyFgO1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGF0dGFja3MgYW5kICR7c3RyaWtlfWA7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IG1haW5DID0gY29tbUMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgY2xlYXJEaXYoY29tbUMpO1xuICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAvLyBidWlsZCAnZ2FtZSBvdmVyJyBjb250ZW50XG4gICAgY29uc3QgZW5kQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJlbmRDb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYmFubmVyXCIgfSk7XG4gICAgYmFubmVyLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIhXCI7XG4gICAgY29uc3Qgd2lubmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndpbm5lclwiIH0pO1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7cGxheWVyLmNvZGVuYW1lfWA7XG4gICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXlBZ2FpblwiIH0pO1xuICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IGBQbGF5IEFnYWluYDtcbiAgICBtYWluQy5hcHBlbmRDaGlsZChlbmRDKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgZW5kQy5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gY2xlYXIgY29udGVudFxuICAgICAgbWFpbkMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtYWluQyk7XG4gICAgICBjb21tQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbW1DKTtcbiAgICAgIG1ha2VJbml0aWFsTGl0ZSgpO1xuICAgIH0pO1xuICAgIC8vIGhpZGUgaW5mbyBidXR0b25cbiAgICBtYWluQy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG4gIHJldHVybiB7IGJ1aWxkQ29tbXMsIGNsZWFyLCBpbnN0cnVjdCwgbWVzc2FnZSwgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07XG4iLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuaW1wb3J0IHsgcGxhY2UgfSBmcm9tIFwiLi9wbGFjZUZsZWV0RE9NXCI7XG5pbXBvcnQgY3JlYXRlTGVnZW5kIGZyb20gXCIuL2xlZ2VuZERPTVwiO1xuXG4vLyBnYW1lIGxvb3Bcbi8vIGluaXRpYWxpemUgdy8gcDEgYW5kIGdhbWVib2FyZDFcbi8vIHBsYWNlIHNoaXBzXG4vLyBjcmVhdGUgcDIgYW5kIGdhbWVib2FyZDJcbi8vIHBsYWNlIHNoaXBzXG4vLyB0dXJuIGxvZ2ljXG4vLyAtPiB0YWtlIGNvb3JkaW5hdGVzLCBjb25maXJtIGxlZ2FsIHBsYXkgKG5vdCByZXBlYXQpXG4vLyAtPiBsYXVuY2ggYXR0YWNrXG4vLyAgICAgIC0+IGhpdFxuLy8gICAgICAgICAgICAtPiBzdW5rP1xuLy8gICAgICAgICAgICAgICAgLT4geWVzOiAtPiBhbGwgc3Vuaz9cbi8vICAgICAgICAgICAgICAgICAgICAtPiB5ZXM6IGVuZCBnYW1lIChkaXNwbGF5KVxuLy8gICAgICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgLT4gbWlzc1xuLy8gICAgICAgICAgLT4gc3dpdGNoIHR1cm5zXG4vL1xuLy8gY3JlYXRlIHBsYXllcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZ2FtZWJvYXJkXG5jb25zdCBpbml0aWFsaXplID0gKHBsYXllck5hbWUpID0+IHtcbiAgbGV0IHBsYXllcjtcbiAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgcGxheWVyID0gY29tcHV0ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIgPSBQbGF5ZXJGYWN0b3J5KGAke3BsYXllck5hbWV9YCk7XG4gIH1cbiAgY29uc3QgZ2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgZ2IuY3JlYXRlKDEwKTtcbiAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBnYiwgZmxlZXQgfTtcbn07XG5jb25zdCBsb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICBsZXQgcGxheWVyT25lO1xuICBsZXQgcGxheWVyVHdvO1xuICBsZXQgcGxheWVyQm9hcmRET007XG4gIGxldCBjb21wQm9hcmRET007XG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllclR1cm47XG4gIH07XG4gIGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4gKHBsYXllclR1cm4gPSAhcGxheWVyVHVybik7XG4gIGNvbnN0IGluaXRpYWxUdXJuID0gKGJvYXJkMSwgYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMSwgZmFsc2UsIFwiZnJpZW5kbHlcIikpO1xuICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZCk7XG4gICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDIsIHRydWUsIFwiZW5lbXlcIiwgbG9vcC50dXJuKSk7XG4gICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCgpKTtcbiAgICBjb20ubWVzc2FnZShwbGF5ZXJPbmUucGxheWVyLCBgbGF1bmNoIGFuIGF0dGFjayFgKTtcbiAgfTtcbiAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoY2FsbHNpZ24sIHBhcmVudERPTSkgPT4ge1xuICAgIGNvbnN0IHAxID0gaW5pdGlhbGl6ZShgJHtjYWxsc2lnbn1gKTtcbiAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgIC8vIGRpc3BsYXkgY29tbXNcbiAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9XG4gICAgICBcImZsZXhcIjtcbiAgICAvLyBoYXZlIEFJIHBsYWNlIGZsZWV0LCByYW5kb21seVxuICAgIHAyLnBsYXllci5wbGFjZUZsZWV0KHAyKTtcbiAgICAvLyBwcm9tcHQgdXNlciB0byBwbGFjZSBzaGlwc1xuICAgIHBsYWNlLnN0YXJ0KHBhcmVudERPTSwgcDEsIHAyKTtcbiAgICBwbGF5ZXJPbmUgPSBwMTtcbiAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAvLyBkb24ndCB0aGluayBJIG5lZWQgdGhpcyByZXR1cm4gdmFsdWUuLlxuICAgIHJldHVybiB7IHAxLCBwMiB9O1xuICB9O1xuICBjb25zdCBsYXVuY2hHYW1lID0gKHBhcmVudERPTSkgPT4ge1xuICAgIGluaXRpYWxUdXJuKHBsYXllck9uZS5nYiwgcGxheWVyVHdvLmdiLCBwYXJlbnRET00pO1xuICB9O1xuICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICBjb25zdCB0dXJuID0gKGlucHV0KSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR1cm4gPyBwbGF5ZXJPbmUucGxheWVyIDogcGxheWVyVHdvLnBsYXllcjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28uZ2IucmVjZWl2ZUF0dGFjayhpbnB1dFswXSwgaW5wdXRbMV0pO1xuICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAvLyBha2EgdXNlciBjbGlja2VkIG9uIGNvb3JkaW5hdGVzIGZvciBhIHNlY29uZCB0aW1lXG4gICAgICAgIC8vIHByb21wdCB1c2VyIGZvciBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgdHJ1ZSwgXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb24gdmFsaWQgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljIChhaSBnYW1lYm9hcmQpXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdCBvbiBjb21tcyAoaGl0L21pc3Mvc3VuaylcbiAgICAgICAgbWFya0NlbGwoaW5wdXRbMF0sIGlucHV0WzFdLCByZXN1bHQsIHBsYXllclR3by5nYiwgY29tcEJvYXJkRE9NLCBcIvCflLFcIik7XG4gICAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICAgIHJlc3VsdC5zdW5rLFxuICAgICAgICAgIHJlc3VsdC5zaGlwLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljICh1c2VyIGdhbWVib2FyZClcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdFxuICAgICAgcmVzdWx0ID0gcGxheWVyVHdvLnBsYXllci5zbWFydEF0dGFjayhwbGF5ZXJPbmUpO1xuICAgICAgbWFya0NlbGwoXG4gICAgICAgIHJlc3VsdC5jb29yZFswXSxcbiAgICAgICAgcmVzdWx0LmNvb3JkWzFdLFxuICAgICAgICByZXN1bHQub2JqLFxuICAgICAgICBwbGF5ZXJPbmUuZ2IsXG4gICAgICAgIHBsYXllckJvYXJkRE9NLFxuICAgICAgICBcIvCfj7TigI3imKDvuI9cIlxuICAgICAgKTtcbiAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgcmVzdWx0Lm9iai52YWx1ZSxcbiAgICAgICAgcmVzdWx0Lm9iai5zdW5rLFxuICAgICAgICByZXN1bHQub2JqLnNoaXAsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5vYmo7XG4gICAgfVxuICAgIGlmICghcGxheWVyVHVybiAmJiAhcmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHRpbWUgZGVsYXkgYmVmb3JlIGFpIHR1cm5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXJuKGZhbHNlKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHN3aXRjaCB0dXJucyAoYmFjayB0byB3aW5uaW5nIHBsYXllcilcbiAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAvLyBydW4gZ2FtZW92ZXIgc2VxdWVuY2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAgICAgY29tLmVuZEdhbWUoY3VycmVudFBsYXllcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRUdXJuLCBpbml0aWFsVHVybiwgaW5pdGlhbGl6ZUdhbWUsIGxhdW5jaEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuL2ljb25zL2luZm8uc3ZnXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCIuL2ljb25zL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBMaW5rZWRJbiBmcm9tIFwiLi9pY29ucy9saW5rZWRpbi5zdmdcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5cbi8vIGJ1aWxkIGluaXRpYWwgcGFnZTogaGVhZGVyLCBib2R5LCBmb290ZXJcblxuLy8gcmV2ZWFsIGluZm8gYnRuIChmb3IgbW9iaWxlIHZlcnNpb24pXG5jb25zdCBidG5TaG93ID0gKG1haW5DKSA9PiB7XG4gIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbWFpbkMuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG59O1xuY29uc3QgYnRuSGlkZSA9IChtYWluQykgPT4ge1xuICBtYWluQy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xubGV0IGhlYWRlckJ0biA9IGZhbHNlO1xuY29uc3QgaGVhZGVyQnRuRm4gPSAobWFpbkMpID0+IHtcbiAgaGVhZGVyQnRuID0gIWhlYWRlckJ0bjtcbiAgaWYgKGhlYWRlckJ0bikge1xuICAgIGJ0blNob3cobWFpbkMpO1xuICB9IGVsc2Uge1xuICAgIGJ0bkhpZGUobWFpbkMpO1xuICB9XG59O1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJDb250YWluZXJcIiB9KTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGVyVGl0bGVcIiB9KTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcbiAgY29uc3QgbWVudUJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51QnRuQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudUJ0blwiIH0pO1xuICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJtZW51SWNvblwiIH0pO1xuICBtZW51SWNvbi5zcmMgPSBJbmZvO1xuICBtZW51SWNvbi5hbHQgPSBcIkluZm9cIjtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhlYWRlckJ0bkZuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubWFpbkNvbnRhaW5lclwiKSk7XG4gIH0pO1xuICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRDLmFwcGVuZENoaWxkKG1lbnVCdG5Db250YWluZXIpO1xuICBtZW51QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgcmV0dXJuIGhlYWRDO1xufTtcbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZm9vdGVyQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJmb290ZXJCb3hcIiB9KTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsaW5rQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIixcbiAgICBhbHQ6IFwiR2l0aHViIFByb2ZpbGVcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImdpdEljb25cIiB9KTtcbiAgZ2l0SWNvbi5zcmMgPSBHaXRodWI7XG4gIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICBjb25zdCBsaW5rTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsXG4gICAgYWx0OiBcIkxpbmtlZEluIFByb2ZpbGVcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rSWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJsaW5rSWNvblwiIH0pO1xuICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgbGlua0ljb24uYWx0ID0gXCJMaW5rZWRJbiBQcm9maWxlXCI7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGV4dENvbnRhaW5lclwiIH0pO1xuICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQZXJlZ3Jpbm5pbmcgUHJvZHVjdGlvbnNcIjtcbiAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICBmb290Qy5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICBmb290ZXJCb3guYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XG4gIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0xpbmspO1xuICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gIGZvb3RlckJveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgcmV0dXJuIGZvb3RDO1xufTtcbi8vXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluXCIgfSk7XG4gIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5pdGlhbEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5pdGlhbENvbnRlbnRcIiB9KTtcbiAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb25zQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0aW9uc1wiIH0pO1xuICBpbnN0cnVjdC50ZXh0Q29udGVudCA9IFwiRWxpbWluYXRlIHRoZSBlbmVteSBmbGVldCFcIjtcbiAgY29uc3QgaW5wdXRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0Q29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJ1c2VybmFtZVwiLFxuICAgIGNsYXNzOiBcImlucHV0RmllbGRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJBcXVhbWFuIPCflLFcIixcbiAgfSk7XG4gIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBmb3I6IFwidXNlcm5hbWVcIiB9KTtcbiAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgUGxheWVyIE5hbWU6XCI7XG4gIGNvbnN0IHN0YXJ0QyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJzdGFydENvbnRhaW5lclwiIH0pO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJzdGFydFwiIH0pO1xuICBzdGFydC50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZSFcIjtcblxuICAvLyBsaXN0ZW5lciBhbmQgaGVscGVyc1xuICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgaWYgaW5wdXQgaXMgZW1wdHlcbiAgICBsZXQgY2FsbHNpZ24gPSBcIkFxdWFtYW4g8J+UsVwiO1xuICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgY2FsbHNpZ24gPSBpbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgIGNsZWFyTWFpbigpO1xuICAgIC8vIGluaXRpYWxpemUgZ2FtZSBsb29wXG4gICAgbG9vcC5pbml0aWFsaXplR2FtZShjYWxsc2lnbiwgbWFpbkMpO1xuICB9O1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0YXJ0Rm4oKTtcbiAgfSk7XG4gIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQyk7XG4gIG1haW5DLmFwcGVuZENoaWxkKGluaXRpYWxDKTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICBpbmZvQy5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gIGluaXRpYWxDLmFwcGVuZENoaWxkKGlucHV0Qyk7XG4gIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoc3RhcnRDKTtcbiAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcbiAgcmV0dXJuIG1haW47XG59O1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2R5XCIgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5jb25zdCBtYWtlSW5pdGlhbExpdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmJvZHlcIik7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKGNvbS5idWlsZENvbW1zKCksIGJvZHkuY2hpbGRyZW5bMV0pO1xuICBib2R5Lmluc2VydEJlZm9yZShtYWluQ29udGVudCgpLCBib2R5LmNoaWxkcmVuWzJdKTtcbn07XG5leHBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBidWlsZCBsZWdlbmQgdG8gZXhwbGFpbiBlbW9qaXMsIHByb3ZpZGUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zXG5jb25zdCBzaGlwID0ge1xuICBlbW9qaTogXCIgXCIsXG4gIHRleHQ6IFwiZnJpZW5kbHkgc2hpcFwiLFxuICBjbGFzczogXCJzaGlwXCIsXG59O1xuY29uc3Qgd2F2ZSA9IHtcbiAgZW1vamk6IFwi8J+MilwiLFxuICB0ZXh0OiBcImF0dGFjayBtaXNzXCIsXG4gIGNsYXNzOiBcIm1pc3NcIixcbn07XG5jb25zdCBoaXQgPSB7XG4gIGVtb2ppOiBcIvCflKVcIixcbiAgdGV4dDogXCJhdHRhY2sgaGl0XCIsXG4gIGNsYXNzOiBcImhpdFwiLFxufTtcbmNvbnN0IHN1bmsgPSB7XG4gIGVtb2ppOiBcIvCflLFcIixcbiAgdGV4dDogXCJ5b3Ugc3VuayBlbmVteSBzaGlwXCIsXG4gIGNsYXNzOiBcInN1bmtcIixcbn07XG5jb25zdCBlbmVteVN1bmsgPSB7XG4gIGVtb2ppOiBcIvCfj7TigI3imKDvuI9cIixcbiAgdGV4dDogXCJlbmVteSBzdW5rIGZyaWVuZGx5IHNoaXBcIixcbiAgY2xhc3M6IFwic3Vua1wiLFxufTtcbmNvbnN0IGVtb2ppQXJyYXkgPSBbc2hpcCwgd2F2ZSwgaGl0LCBzdW5rLCBlbmVteVN1bmtdO1xuY29uc3QgY3JlYXRlTGVnZW5kID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibGVnZW5kQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGxlZ2VuZEJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsZWdlbmRCb3hcIiB9KTtcbiAgbGVnZW5kQm94LnRleHRDb250ZW50ID0gXCJMZWdlbmQ6XCI7XG4gIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzczogXCJsZWdlbmRMaXN0XCIgfSk7XG4gIGVtb2ppQXJyYXkuZm9yRWFjaCgoZW1vamkpID0+IHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImVtb2ppTGlcIiB9KTtcbiAgICBjb25zdCBib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBlbW9qaUJveCAke2Vtb2ppLmNsYXNzfWAgfSk7XG4gICAgYm94LnRleHRDb250ZW50ID0gYCR7ZW1vamkuZW1vaml9YDtcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImVtb2ppVGV4dFwiIH0pO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgLSAke2Vtb2ppLnRleHR9YDtcbiAgICBsaS5hcHBlbmRDaGlsZChib3gpO1xuICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgbGVnZW5kQm94LmFwcGVuZENoaWxkKGxpc3QpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kQm94KTtcbiAgY29uc3QgaW5zdHJ1Y3RCb3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RCb3hcIiB9KTtcbiAgaW5zdHJ1Y3RCb3gudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIjtcbiAgY29uc3QgaW5zdHJ1Y3RUZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0VGV4dFwiIH0pO1xuICBpbnN0cnVjdFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiU2VsZWN0IGNvb3JkaW5hdGVzIGluIGVuZW15IHdhdGVycyB0byBsYXVuY2ggYW4gYXR0YWNrLiBUaGUgYm9hcmQgd2lsbCBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLCBvciBpZiB5b3Ugc3VuayB0aGUgZW5lbXkgc2hpcC4gRmluZCBhbmQgZWxpbWluYXRlIGFsbCBmaXZlIGVuZW15IHNoaXBzIGJlZm9yZSB0aGV5IGVsaW1pbmF0ZSB5b3VycyFcIjtcbiAgY29uc3Qgb2JqZWN0aXZlQm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm9iamVjdGl2ZUJveFwiIH0pO1xuICBvYmplY3RpdmVCb3gudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZTpcIjtcbiAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJvYmplY3RpdmVUZXh0XCIgfSk7XG4gIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBcIlNpbmsgdGhlIGVuZW15IGZsZWV0IVwiO1xuICBvYmplY3RpdmVCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVCb3gpO1xuICBpbnN0cnVjdEJveC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RCb3gpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgcGxhY2UgPSAoKCkgPT4ge1xuICBsZXQgYXhpcyA9IHRydWU7XG4gIGNvbnN0IGN1cnJlbnRBeGlzID0gKCkgPT4ge1xuICAgIHJldHVybiBheGlzO1xuICB9O1xuICBjb25zdCBjcmVhdGVEaXNwbGF5ID0gKG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInBsYWNlQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgYnV0dG9uQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwbGFjZUJ0bkNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYXhpc0J0blwiIH0pO1xuICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgUm90YXRlYDtcbiAgICBjb25zdCByYW5kb21CdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicmFuZG9tQnRuXCIgfSk7XG4gICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcbiAgICBjb25zdCBpbnN0cnVjdCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwbGFjZUluc3RydWN0aW9uc1wiIH0pO1xuICAgIGNvbnN0IGluc3RydWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUaXRsZVwiIH0pO1xuICAgIGluc3RydWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIjtcbiAgICBjb25zdCBpbnN0cnVjdFRleHQxID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0VGV4dFwiIH0pO1xuICAgIGluc3RydWN0VGV4dDEudGV4dENvbnRlbnQgPSBgU2VsZWN0IGNvb3JkaW5hdGVzIG9uIGJvYXJkIHRvIHBsYWNlIGN1cnJlbnQgc2hpcC5gO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dDIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUZXh0XCIgfSk7XG4gICAgaW5zdHJ1Y3RUZXh0Mi50ZXh0Q29udGVudCA9IGBVc2UgYnV0dG9ucyB0byByb3RhdGUgc2hpcCBvciByYW5kb21seSBkZXBsb3kgZW50aXJlIGZsZWV0LmA7XG4gICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGF4aXMgPSAhYXhpcztcbiAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IGJvYXJkXG4gICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgIC8vIGJ1aWxkIG5ldyBib2FyZCB3LyBjb3JyZWN0IGxpc3RlbmVyc1xuICAgICAgcGVyU2hpcChjdXJyZW50RE9NLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRTaGlwKTtcbiAgICB9KTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIHBsYWNlIHVzZXIgZmxlZXQsIGZpbmlzaCBwbGFjZUZsZWV0ICYgaW5zdGFudGlhdGUgbmV4dCBzdGVwXG4gICAgICBvcHBvbmVudC5wbGF5ZXIucGxhY2VGbGVldChjdXJyZW50T2JqKTtcbiAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGl0bGUpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDEpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG4gIC8vIGNoZWNrIGlmIGNvb3JkaW5hdGVzIHlpZWxkIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZFxuICAvLyBvciBpZiB0aGV5IGNvbmZsaWN0IHdpdGggYWxyZWFkeSBwbGFjZWQgc2hpcFxuICBjb25zdCBjaGVja0NlbGwgPSAoZ2FtZWJvYXJkLCBzaGlwLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHxcbiAgICAgIGdhbWVib2FyZC5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaGlnaGxpZ2h0TGVuZ3RoID0gKGVsZW1lbnQsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGNvb3JkID0gQXJyYXkuZnJvbShlbGVtZW50LmlkKTtcbiAgICBsZXQgbmV3SWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgbmV3SWQgPSBgJHtOdW1iZXIoY29vcmRbMF0pICsgaX0ke2Nvb3JkWzFdfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJZCA9IGAke2Nvb3JkWzBdfSR7TnVtYmVyKGNvb3JkWzFdKSArIGl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJZCk7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGlja0ZuID0gKHgsIHkpID0+IHtcbiAgICBjdXJyZW50T2JqLmdiLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgYXhpcywgeCwgeSk7XG4gICAgY291bnQrKztcbiAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICBuZXh0U2hpcChjdXJyZW50RE9NLCBjdXJyZW50T2JqKTtcbiAgfTtcbiAgY29uc3QgY2xpY2tBdHRhY2sgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsaWNrRm4oeCwgeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhvdmVyID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHQgKGdyYXkgaXMgdmFsaWQsIHJlZCBpcyBub3QtYWxsb3dlZClcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIC8vIGNvdWxkIGFkZCBhIGNsYXNzLi4uXG4gICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgaGlnaGxpZ2h0TGVuZ3RoKGVsZW1lbnQsIHNoaXAubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBvbiBleGl0LCByZW1vdmUgaG92ZXIgYmFja2dyb3VuZCBjb2xvclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuY2VsbFwiKSk7XG4gICAgICBncmlkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBhZGRDZWxsTGlzdGVuZXJzID0gKGdhbWVib2FyZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGNlbGxBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5jZWxsXCIpKTtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgIGhvdmVyKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICBjbGlja0F0dGFjayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgIH0pO1xuICB9O1xuICBsZXQgY3VycmVudE9iajtcbiAgbGV0IGN1cnJlbnRCb2FyZDtcbiAgbGV0IGN1cnJlbnRTaGlwO1xuICBsZXQgZmxlZXRLZXlzO1xuICBsZXQgY3VycmVudERPTTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3QgdXBkYXRlQWxsQ3VycmVudHMgPSAocGFyZW50LCBvYmplY3QpID0+IHtcbiAgICBjdXJyZW50RE9NID0gcGFyZW50O1xuICAgIGN1cnJlbnRPYmogPSBvYmplY3Q7XG4gICAgY3VycmVudEJvYXJkID0gb2JqZWN0LmdiO1xuICAgIGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5mbGVldCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRTaGlwID0gKHNoaXApID0+IHtcbiAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG4gIH07XG4gIGNvbnN0IG5leHRTaGlwID0gKHBhcmVudERPTSwgcGxheWVyT2JqKSA9PiB7XG4gICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgY29tLmluc3RydWN0KHBsYXllck9iai5wbGF5ZXIsIGZsZWV0S2V5c1tjb3VudF0pO1xuICAgICAgcGVyU2hpcChwYXJlbnRET00sIHBsYXllck9iai5nYiwgcGxheWVyT2JqLmZsZWV0W2ZsZWV0S2V5c1tjb3VudF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJOZXh0IHN0ZXAgb2YgZ2FtZWxvb3AhXCIpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICB1cGRhdGVDdXJyZW50U2hpcChzaGlwKTtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXJCb2FyZCwgZmFsc2UpKTtcbiAgICBkaXNwbGF5U2hpcHMoY3VycmVudEJvYXJkLCBjdXJyZW50RE9NLmNoaWxkcmVuWzBdKTtcbiAgICBhZGRDZWxsTGlzdGVuZXJzKHBsYXllckJvYXJkLCBzaGlwKTtcbiAgfTtcbiAgY29uc3Qgc3RhcnQgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmosIG9wcG9uZW50T2JqKSA9PiB7XG4gICAgcGFyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZURpc3BsYXkob3Bwb25lbnRPYmopXG4gICAgKTtcbiAgICB1cGRhdGVBbGxDdXJyZW50cyhwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgbmV4dFNoaXAocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICB9O1xuICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgY29tLmNsZWFyKCk7XG4gICAgLy8gaW52b2tlIG5leHQgc3RlcCBpbiBnYW1lbG9vcCwgYmF0dGxlIG1vZGVcbiAgICAvLyBob3cgY2FuIEkgc21vb3RoIHRoaXMgdHJhbnNpdGlvbj8gKGVhc2UtaW4pPyAhISFcbiAgICBsb29wLmxhdW5jaEdhbWUoY3VycmVudERPTSk7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTUwcHgpXCIpKSB7XG4gICAgICBjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgXCJibG9ja1wiO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgaG92ZXIsIHN0YXJ0IH07XG59KSgpO1xuZXhwb3J0IHsgcGxhY2UgfTtcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuY29uc3QgUGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuICBsZXQgd2lucyA9IDA7XG4gIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gIH07XG4gIGNvbnN0IGFkZFdpbiA9ICgpID0+ICh3aW5zICs9IDEpO1xuICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn07XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgY29uc3QgYWkgPSBQbGF5ZXJGYWN0b3J5KFwiVGhlIEtyYWtlblwiKTtcbiAgY29uc3QgbmV3UHJvYiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9iID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgcHJvYi5jcmVhdGUoMTApO1xuICAgIHJldHVybiBwcm9iO1xuICB9O1xuICBjb25zdCBzaG90ID0gQm9hcmRGYWN0b3J5KCk7XG4gIHNob3QuY3JlYXRlKDEwKTtcbiAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbiAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG4gIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgX2dlbmVyYXRlQ29vcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgd2hpbGUgKCFfYXZhaWxhYmxlKGNvb3JkKSkge1xuICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkO1xuICB9O1xuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmouY29vcmQgPSBjb29yZDtcbiAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKGF4aXMgPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgZmxlZXRLZXlzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgd2hpbGUgKFxuICAgICAgICAhcGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSlcbiAgICAgICkge1xuICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGl0Q29vcmRzQXJyYXkgPSBbXTtcbiAgY29uc3QgX2FkZFRvSGl0Q29vcmRzID0gKGlucHV0KSA9PiB7XG4gICAgaGl0Q29vcmRzQXJyYXkucHVzaChpbnB1dCk7XG4gIH07XG4gIGNvbnN0IF9jbGVhckhpdENvb3JkcyA9IChzaGlwKSA9PiB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGhpdENvb3Jkc0FycmF5LmZpbmRJbmRleCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09IGNvb3JkWzBdICYmIHZhbHVlWzFdID09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGhpdENvb3Jkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IF91cGRhdGVTaG90Qm9hcmQgPSAob2JqZWN0LCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBjb29yZCA9IG9iamVjdC5jb29yZDtcbiAgICBpZiAob2JqZWN0Lm9iai52YWx1ZSA9PSB0cnVlKSB7XG4gICAgICBpZiAob2JqZWN0Lm9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5nYi53aGljaFNoaXAob2JqZWN0Lm9iai5zaGlwKTtcbiAgICAgICAgX2NsZWFySGl0Q29vcmRzKHNoaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2FkZFRvSGl0Q29vcmRzKGNvb3JkKTtcbiAgICAgIH1cbiAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX2FkZFRvUHJvYkJvYXJkID0gKGdiLCBwcm9iQm9hcmQsIGxlbmd0aCwgYm9vbGVhbiwgeCwgeSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvdW50ZXJXZWlnaHQgPSBnYi5jaGVja1Byb2IobGVuZ3RoLCBib29sZWFuLCB4LCB5LCBoaXRDb29yZHNBcnJheSk7XG4gICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICBwcm9iQm9hcmRbTnVtYmVyKHgpICsgaV1beV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2JCb2FyZFt4XVtOdW1iZXIoeSkgKyBpXSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVtb3ZlSGl0cyhnYiwgcHJvYkJvYXJkKTtcbiAgfTtcbiAgLy8gZXZhbHVhdGUgaG93IHRvIGltcHJvdmUgY2hlY2tQbGFjZSBmb3IgXCJodW50IG1vZGVcIlxuXG4gIGNvbnN0IF9yZW1vdmVIaXRzID0gKGdiLCBwcm9iQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChnYi5ib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICBwcm9iQm9hcmRbaV1bal0gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBfc2hpcFByb2IgPSAoZ2IsIHNoaXAsIHByb2IpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgZ2IuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSB8fFxuICAgICAgICAgICAgZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopIHx8XG4gICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBfZmxlZXRQcm9iID0gKGJvYXJkLCBmbGVldCwgcHJvYikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZmxlZXQpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghZmxlZXRbc2hpcF0uc3VuaykgX3NoaXBQcm9iKGJvYXJkLCBmbGVldFtzaGlwXSwgcHJvYik7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IF9nZXRQcm9iQ29vcmRzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1heCA9IHtcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gY3VycmVudE1heC5tYXgpIHtcbiAgICAgICAgICBjdXJyZW50TWF4Lm1heCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgIGN1cnJlbnRNYXguY29vcmRzID0gW2ksIGpdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TWF4O1xuICB9O1xuICAvLyBidWlsZCBzbWFydEFJIGF0dGFjayBtb2RlOlxuICBjb25zdCBzbWFydEF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwcm9iID0gbmV3UHJvYigpO1xuICAgIC8vIHVwZGF0ZWQgcHJvYmFiaWxpdHkgYm9hcmQ7IG5lZWRzIGFjY2VzcyB0byB1c2VyJ3MgZmxlZXRcbiAgICBfZmxlZXRQcm9iKHNob3QsIHBsYXllci5mbGVldCwgcHJvYik7XG4gICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGJlc3QgY2VsbFxuICAgIGNvbnN0IGNvb3JkID0gX2dldFByb2JDb29yZHMocHJvYi5ib2FyZCk7XG4gICAgLy8gbGF1bmNoIGF0dGFjayBvbiB0aG9zZSBjb29yZHNcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmouY29vcmQgPSBjb29yZC5jb29yZHM7XG4gICAgb2JqLm9iaiA9IHBsYXllci5nYi5yZWNlaXZlQXR0YWNrKG9iai5jb29yZFswXSwgb2JqLmNvb3JkWzFdKTtcbiAgICAvLyBjaGVjayBhdHRhY2sgaW50ZWw6IGhpdCBvciBtaXNzLCBzdW5rP1xuICAgIF91cGRhdGVTaG90Qm9hcmQob2JqLCBwbGF5ZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGFpLFxuICAgIHsgcmFuZG9tQXR0YWNrIH0sXG4gICAgeyBzbWFydEF0dGFjayB9LFxuICAgIHsgcGxhY2VGbGVldCB9XG4gICk7XG59O1xuXG5leHBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9O1xuIiwiLy8gc2hpcCBsb2dpY1xuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IG1hcmtlciA9IGxlbmd0aDtcbiAgaWYgKG1hcmspIHtcbiAgICBtYXJrZXIgPSBtYXJrO1xuICB9XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gKHN1bmsgPSB0cnVlKSA6IChzdW5rID0gZmFsc2UpO1xuICB9O1xuICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuICAgIGhpdCgpO1xuICAgIHJldHVybiBpc1N1bmsoKTtcbiAgfTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGNvb3JkcywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXMgfTtcbn07XG5jb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDMpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgcmV0dXJuIHsgc3VibWFyaW5lLCBwYXRyb2wsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2FycmllciB9O1xufTtcbmV4cG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH07XG4iLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufTtcbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbWFrZUluaXRpYWwgfSBmcm9tICcuL2luaXRpYWxET00nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbm1ha2VJbml0aWFsKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9