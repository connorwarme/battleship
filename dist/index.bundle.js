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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Russo';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-style: normal;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n.headerTitle {\n    grid-column: 2/16;\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.menuBtnContainer {\n    display: none;\n    grid-column: 16/17;\n}\n.menuBtn:hover {\n    cursor: pointer;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    height: 44px;\n    width: 125px;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-area: 1/2/4/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 3px black;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 3px black;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}\n@media (max-width: 950px) {\n    .menuBtn {\n        height: 40px;\n        width: 40px;\n    }\n    .comms {\n        min-width: 0;\n        width: 100%;\n        padding: 1vh 0;\n        font-size: 20px;\n        border-radius: 0;\n        margin-bottom: 5px;\n    }\n    .placeBtnContainer > button {\n        font-size: 18px;\n    }\n    .instructTitle {\n        font-size: 20px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .mainContainer {\n        grid-template-rows: repeat(2, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .initialContent {\n        grid-area: 1/1/4/2;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 2/1/3/2;\n        margin-top: 10px;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/1/2/2;\n        margin-top: 10px;\n    }\n    .legendContainer {\n        display: none;\n        grid-area: 1/1/3/2;\n        width: 450px;\n    }\n}\n@media (max-width: 549px) {\n    .headerTitle {\n        font-size: 36px;\n        padding: 5px 0;\n    }\n    .menuBtn {\n        height: 25px;\n        width: 25px;\n    }\n    .initialContent {\n        padding: 0;\n        gap: 0;\n    }\n    .instructionsContainer {\n        min-width: 260px;\n    }\n    .instructions {\n        font-size: 20px;\n    }\n    .inputContainer > label {\n        font-size: 16px;\n    }\n    .inputField {\n        width: 200px;\n    }\n    .comms {\n        font-size: 16px;\n        text-align: center;\n    }\n    .placeContainer {\n        margin-bottom: 5px;\n    }\n    .placeInstructions {\n        padding: 1vh 2vw;\n    }\n    .instructTitle {\n        font-size: 16px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .cell {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .mainContainer {\n        padding-bottom: 10px;\n    }\n    .legendContainer {\n        width: 90%;\n        justify-self: center;\n        margin-top: 5px;\n    }\n    .objectiveBox,\n    .instructBox,\n    .legendBox {\n        font-size: 16px;\n    }\n    .objectiveText,\n    .instructText,\n    .emojiLi {\n        font-size: 14px;\n    }\n    .emojiBox {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .gitIcon,\n    .linkIcon {\n        height: 25px;\n        width: 25px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,+DAA2D;IAC3D,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,+DAAuE;IACvE,kBAAkB;AACtB;AACA;IACI,wBAAwB;IACxB,+DAA8E;IAC9E,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,4DAA4D;AAChE;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;IACI,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,2CAA2C;IAC3C,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,SAAS;IACT,4BAA4B;IAC5B,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,aAAa;AACjB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,8DAA8D;IAC9D,eAAe;IACf,gBAAgB;IAChB,0BAA0B;IAC1B,uCAAuC;IACvC,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,2BAA2B;AAC/B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,4CAA4C;AAChD;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,4CAA4C;AAChD;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;;;IAGI,kBAAkB;AACtB;AACA;IACI,8DAA8D;IAC9D,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,wBAAwB;IACxB,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,gCAAgC;AACpC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,mCAAmC;AACvC;AACA;IACI,gCAAgC;AACpC;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;AACA;;;IAGI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,+BAA+B;AACnC;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;;IAEI,YAAY;AAChB;AACA;IACI,0BAA0B;IAC1B,uCAAuC;AAC3C;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,8CAA8C;QAC9C,2BAA2B;QAC3B,mBAAmB;QACnB,YAAY;IAChB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,mBAAmB;QACnB,aAAa;QACb,8BAA8B;QAC9B,+BAA+B;QAC/B,aAAa;QACb,YAAY;QACZ,oBAAoB;IACxB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;AACJ;AACA;IACI;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,YAAY;QACZ,WAAW;QACX,cAAc;QACd,eAAe;QACf,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,kCAAkC;QAClC,0BAA0B;IAC9B;IACA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,aAAa;QACb,kBAAkB;QAClB,YAAY;IAChB;AACJ;AACA;IACI;QACI,eAAe;QACf,cAAc;IAClB;IACA;QACI,YAAY;QACZ,WAAW;IACf;IACA;QACI,UAAU;QACV,MAAM;IACV;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;QACf,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;IACA;QACI,oBAAoB;IACxB;IACA;QACI,UAAU;QACV,oBAAoB;QACpB,eAAe;IACnB;IACA;;;QAGI,eAAe;IACnB;IACA;;;QAGI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,WAAW;QACX,eAAe;IACnB;IACA;;QAEI,YAAY;QACZ,WAAW;IACf;AACJ","sourcesContent":["@font-face {\n    font-family: 'Russo';\n    src: url('./fonts/RussoOne-Regular.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'Gar';\n    src: url('./fonts/EBGaramond-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n@font-face {\n    font-family: 'GarItalic';\n    src: url('./fonts/EBGaramond-Italic-VariableFont_wght.ttf') format('truetype');\n    font-style: normal;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Gar', Georgia, 'Times New Roman', Times, serif;\n}\n.body {\n    background-color: #90e0ef;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-width: 100vw;\n}\n.headerContainer {\n    display: grid;\n    grid-template-columns: repeat(16, 1fr);\n    justify-items: center;\n    align-items: center;\n}\n.headerTitle {\n    grid-column: 2/16;\n    font-family: 'Russo', Times, Georgia;\n    font-size: 70px;\n    font-weight: 700;\n    padding: 15px 0 0 0;\n}\n.menuBtnContainer {\n    display: none;\n    grid-column: 16/17;\n}\n.menuBtn:hover {\n    cursor: pointer;\n}\n.commContainer {\n    display: grid;\n    justify-items: center;\n}\n.comms {\n    min-width: 850px;\n    padding: 1vh 3vw;\n    font-size: 32px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n    color:#90e0ef;\n    border-radius: 15px;\n    border: 4px solid #90e0ef;\n    outline: 4px solid black;\n    margin-bottom: 15px;\n}\n.placeContainer {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 15px;\n}\n.placeBtnContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n.placeBtnContainer > button {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 20px;\n    font-weight: 500;\n    height: 44px;\n    width: 125px;\n    text-align: center;\n    background-color: white;\n    border: none;\n    border-radius: 10px;\n    box-shadow: inset 0 0 5px rgb(45, 100, 170);\n    transition-duration: 250ms;\n    transition-timing-function: ease-in-out;\n}\n.placeBtnContainer > button:hover {\n    cursor: pointer;\n    box-shadow: inset 0 0 1px #0077B6;\n}\n.placeBtnContainer > button:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.placeInstructions {\n    padding: 2vh 2vw;\n    text-align: center;\n}\n.instructTitle {\n    font-size: 24px;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    background-color:#90e0ef;\n}\n.mainContainer {\n    display: grid;\n    grid-template-columns: 3fr 2fr 3fr;\n    padding: 0 0 20px 0;\n}\n.initialContent {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-items: center;\n    gap: 20px;\n    padding: 20px 50px 40px 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.instructionsContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-width: 300px;\n}\n.instructions {\n    font-size: 28px;\n    font-style: italic;\n}\n.inputContainer {\n    display: grid;\n    place-items: center;\n}\n.inputContainer > label {\n    font-size: 20px;\n}\n.inputField {\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin: 10px;\n    font-size: 18px;\n    text-align: center;\n}\n.inputField:focus {\n    outline: none;\n}\n.inputField:focus::placeholder {\n    color: transparent;\n}\n.startContainer {\n    display: flex;\n    align-items: center;\n}\n.start {\n    padding: 10px 20px;\n    background-color: white;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    font-size: 24px;\n    font-weight: 500;\n    transition-duration: 300ms;\n    transition-timing-function: ease-in-out;\n    box-shadow: inset 0 0 5px #90e0ef;\n}\n.start:hover {\n    cursor: pointer;\n    box-shadow: 0 0 5px #0077B6;\n}\n.start:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.displayBoard {\n    grid-area: 1/2/4/3;\n    max-height: 418px;\n    max-width: 418px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    gap: 2px;\n    margin: 0 auto;\n    padding: 10px;\n    border: 5px solid  white;\n    border-radius: 10px;\n    box-shadow: inset 0 0 40px rgb(35, 100, 170);\n}\n.mainContainer .boardContainer:nth-child(2) {\n    grid-column: 3/4;\n}\n.legendContainer {\n    display: grid;\n    grid-template-rows: 1fr 2fr 4fr;\n    grid-area: 1/2/2/3;\n    padding: 10px;\n    box-shadow: inset 0 0 10px rgb(45, 100, 170);\n}\n.legendBox {\n    grid-row: 3/4;\n}\n.objectiveBox {\n    grid-row: 1/2;\n}\n.instructBox {\n    grid-row: 2/3;\n}\n.legendBox,\n.objectiveBox,\n.instructBox {\n    text-align: center;\n}\n.boardLabel {\n    font-family: 'Russo', Georgia, 'Times New Roman', Times, serif;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 5px;\n    color: rgb(35, 100, 170);\n    text-shadow: 0.2px 0.2px black;\n}\n.col {\n    display: grid;\n    gap: 2px;\n}\n.cell {\n    height: 40px;\n    width: 40px;\n    background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 32px;\n    border-radius: 5px;\n}\n.ship {\n    background-color: lightslategray;\n}\n.hit {\n    background-color: rgb(208, 0, 0);\n}\n.miss {\n    background-color: rgb(35, 100, 170);\n}\n.sunk {\n    background-color: rgb(208, 0, 0);\n}\n.legendContainer {\n    background-color: white;\n    border-radius: 15px;\n    margin-top: 10px;\n}\n.legendBox {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.emojiLi {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 4px;\n}\n.emojiBox {\n    height: 40px;\n    width: 40px;\n    font-size: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n.legendBox,\n.objectiveBox, \n.instructBox {\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 700;\n    color: #0077B6;\n}\n.emojiLi,\n.objectiveText,\n.instructText {\n    font-style: normal;\n    font-size: 16px;\n    color: black;\n    font-weight: 500;\n}\n.instructText {\n    padding: 0 8px;\n}\n.endContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    padding: 50px;\n    border: 16px double black;\n    border-radius: 25px;\n}\n.banner {\n    text-align: center;\n    font-size: 50px;\n    font-weight: 600;\n}\n.winner {\n    font-size: 38px;\n}\n.playAgain {\n    padding: 10px;\n    border: 4px solid black;\n    border-radius: 10px;\n    font-size: 38px;\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n    background-color: white;\n    box-shadow: inset 0 0 3px black;\n}\n.playAgain:hover {\n    cursor: pointer;\n    box-shadow: 0 0 3px black;\n}\n.playAgain:active {\n    transform: scale(0.98);\n    box-shadow: 2px 2px 5px black;\n}\n.footerContainer {\n    display: flex;\n    justify-content: center;\n}\n.footerBox {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n.linkContainer {\n    display: flex;\n    justify-content: center;\n}\n.gitIcon,\n.linkIcon {\n    height: 40px;\n}\n.linkContainer > a > img {\n    transition-duration: 500ms;\n    transition-timing-function: ease-in-out;\n}\n.linkContainer > a > img:hover {\n    transform: rotateZ(360deg);\n}\n\n@media (min-width: 950px) and (max-width: 1350px) {\n    .initialContent {\n        grid-area: 1/3/3/4;\n    }\n    .comms {\n        min-width: 750px;\n    }\n    .mainContainer {\n        grid-template-columns: 1fr 18fr 0.5fr 18fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        align-items: center;\n        width: 100vw;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 1/2/2/3;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/4/2/5;\n    }\n    .displayBoard {\n        grid-area: 1/3/3/4;\n    }\n    .legendContainer {\n        grid-area: 2/2/3/-2;\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        height: 220px;\n        width: 750px;\n        justify-self: center;\n    }\n    .legendBox {\n        grid-area: 1/2/4/3;\n    }\n    .instructBox {\n        grid-row: 2/4;\n    }\n    .emojiBox {\n        height: 36px;\n        width: 36px;\n        font-size: 28px;\n    }\n}\n@media (max-width: 950px) {\n    .menuBtn {\n        height: 40px;\n        width: 40px;\n    }\n    .comms {\n        min-width: 0;\n        width: 100%;\n        padding: 1vh 0;\n        font-size: 20px;\n        border-radius: 0;\n        margin-bottom: 5px;\n    }\n    .placeBtnContainer > button {\n        font-size: 18px;\n    }\n    .instructTitle {\n        font-size: 20px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .mainContainer {\n        grid-template-rows: repeat(2, 1fr);\n        grid-template-columns: 1fr;\n    }\n    .initialContent {\n        grid-area: 1/1/4/2;\n    }\n    .mainContainer .boardContainer:first-child {\n        grid-area: 2/1/3/2;\n        margin-top: 10px;\n    }\n    .mainContainer .boardContainer:nth-child(2) {\n        grid-area: 1/1/2/2;\n        margin-top: 10px;\n    }\n    .legendContainer {\n        display: none;\n        grid-area: 1/1/3/2;\n        width: 450px;\n    }\n}\n@media (max-width: 549px) {\n    .headerTitle {\n        font-size: 36px;\n        padding: 5px 0;\n    }\n    .menuBtn {\n        height: 25px;\n        width: 25px;\n    }\n    .initialContent {\n        padding: 0;\n        gap: 0;\n    }\n    .instructionsContainer {\n        min-width: 260px;\n    }\n    .instructions {\n        font-size: 20px;\n    }\n    .inputContainer > label {\n        font-size: 16px;\n    }\n    .inputField {\n        width: 200px;\n    }\n    .comms {\n        font-size: 16px;\n        text-align: center;\n    }\n    .placeContainer {\n        margin-bottom: 5px;\n    }\n    .placeInstructions {\n        padding: 1vh 2vw;\n    }\n    .instructTitle {\n        font-size: 16px;\n    }\n    .placeInstructions .instructText {\n        font-size: 14px;\n    }\n    .cell {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .mainContainer {\n        padding-bottom: 10px;\n    }\n    .legendContainer {\n        width: 90%;\n        justify-self: center;\n        margin-top: 5px;\n    }\n    .objectiveBox,\n    .instructBox,\n    .legendBox {\n        font-size: 16px;\n    }\n    .objectiveText,\n    .instructText,\n    .emojiLi {\n        font-size: 14px;\n    }\n    .emojiBox {\n        height: 25px;\n        width: 25px;\n        font-size: 20px;\n    }\n    .gitIcon,\n    .linkIcon {\n        height: 25px;\n        width: 25px;\n    }\n}"],"sourceRoot":""}]);
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
          console.log("Game over");
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
    mainC.parentElement.children[1].firstChild.style.display = "none";
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
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players */ "./src/players.js");
/* harmony import */ var _gameloop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameloop */ "./src/gameloop.js");
/* harmony import */ var _comsDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comsDOM */ "./src/comsDOM.js");







// build initial page
// pt 1 - header and footer 
// pt 2 - body (title, instructions, user name input, start btn)
let headerBtn = false;
//
const btnShow = (mainC) => {
    mainC.children[0].style.display = "none";
    mainC.children[1].style.display = "none";
    mainC.children[2].style.display = "grid";
}
const btnHide = (mainC) => {
    mainC.children[0].style.display = "block";
    mainC.children[1].style.display = "block";
    mainC.children[2].style.display = "none";
}
const headerBtnFn = (mainC) => {
    headerBtn = !headerBtn;
    if (headerBtn) {
        btnShow(mainC);
    } else {
        btnHide(mainC);
    }
}
const header = () => {
    const headC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'headerContainer'});
    const title = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'headerTitle'});
    title.textContent = 'BATTLESHIP';
    const menuBtnContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'menuBtnContainer'});
    const menuBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'menuBtn'});
    const menuIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: 'menuIcon'});
    menuIcon.src = _icons_info_svg__WEBPACK_IMPORTED_MODULE_1__;
    menuIcon.alt = 'Info';

    menuBtn.addEventListener('click', () => {
        headerBtnFn(document.querySelector('div.mainContainer'));
    })
    headC.appendChild(title);
    headC.appendChild(menuBtnContainer);
    menuBtnContainer.appendChild(menuBtn);
    menuBtn.appendChild(menuIcon);
    return headC;
}
//
const footer = () => {
    const footC = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'footerContainer'});
    const footerBox = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "footerBox"});
    const linkContainer = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: "linkContainer"});
    const gitLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: "https://github.com/connorwarme", "alt": "Github Profile", "target": "_blank"});
    const gitIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: 'gitIcon'});;
    gitIcon.src = _icons_github_svg__WEBPACK_IMPORTED_MODULE_2__;
    gitIcon.alt = "Github Profile";
    const linkLink = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: "https://www.linkedin.com/in/connor-warme-103a09167", "alt": "LinkedIn Profile", "target": "_blank"});
    const linkIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {class: 'linkIcon'});
    linkIcon.src = _icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_3__;
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
        _gameloop__WEBPACK_IMPORTED_MODULE_5__["default"].initializeGame(callsign, mainC);
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
    body.appendChild(_comsDOM__WEBPACK_IMPORTED_MODULE_6__.com.buildComms());
    body.appendChild(mainContent());
    body.appendChild(footer());
    page.appendChild(body);
}
const makeInitialLite = () => {
    const body = document.querySelector('div.body');
    body.insertBefore(_comsDOM__WEBPACK_IMPORTED_MODULE_6__.com.buildComms(), body.children[1]);
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
            // axis = !axis;
            // let text = axis ? 'X' : 'Y';
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
        if (window.matchMedia('(min-width: 550px)')) {
            currentDOM.parentElement.parentElement.children[0].children[1].style.display = "block";
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLEtBQUsscUNBQXFDLDJCQUEyQixrRUFBa0UsdUJBQXVCLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLDhFQUE4RSx5QkFBeUIsR0FBRyxjQUFjLCtCQUErQixxRkFBcUYseUJBQXlCLEdBQUcsT0FBTyxpQkFBaUIsZ0JBQWdCLG1FQUFtRSxHQUFHLFNBQVMsZ0NBQWdDLG9CQUFvQiw2QkFBNkIsd0JBQXdCLHVCQUF1QixHQUFHLG9CQUFvQixvQkFBb0IsNkNBQTZDLDRCQUE0QiwwQkFBMEIsR0FBRyxnQkFBZ0Isd0JBQXdCLDJDQUEyQyxzQkFBc0IsdUJBQXVCLDBCQUEwQixHQUFHLHFCQUFxQixvQkFBb0IseUJBQXlCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQixvQkFBb0IsNEJBQTRCLEdBQUcsVUFBVSx1QkFBdUIsdUJBQXVCLHNCQUFzQix1QkFBdUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsOEJBQThCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLCtCQUErQiwwQkFBMEIsR0FBRyxtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRyxzQkFBc0Isb0JBQW9CLDZCQUE2QixvQ0FBb0MsMEJBQTBCLEdBQUcsK0JBQStCLHFFQUFxRSxzQkFBc0IsdUJBQXVCLG1CQUFtQixtQkFBbUIseUJBQXlCLDhCQUE4QixtQkFBbUIsMEJBQTBCLGtEQUFrRCxpQ0FBaUMsOENBQThDLEdBQUcscUNBQXFDLHNCQUFzQix3Q0FBd0MsR0FBRyxzQ0FBc0MsNkJBQTZCLG9DQUFvQyxHQUFHLHNCQUFzQix1QkFBdUIseUJBQXlCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLFNBQVMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLCtCQUErQixHQUFHLGtCQUFrQixvQkFBb0IseUNBQXlDLDBCQUEwQixHQUFHLG1CQUFtQix1QkFBdUIsb0JBQW9CLHNDQUFzQyw0QkFBNEIsZ0JBQWdCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLEdBQUcsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRywyQkFBMkIsc0JBQXNCLEdBQUcsZUFBZSxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsR0FBRyxrQ0FBa0MseUJBQXlCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxVQUFVLHlCQUF5Qiw4QkFBOEIsOEJBQThCLDBCQUEwQixxRUFBcUUsc0JBQXNCLHVCQUF1QixpQ0FBaUMsOENBQThDLHdDQUF3QyxHQUFHLGdCQUFnQixzQkFBc0Isa0NBQWtDLEdBQUcsaUJBQWlCLDZCQUE2QixvQ0FBb0MsR0FBRyxpQkFBaUIseUJBQXlCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLDZDQUE2QyxlQUFlLHFCQUFxQixvQkFBb0IsK0JBQStCLDBCQUEwQixtREFBbUQsR0FBRywrQ0FBK0MsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQixzQ0FBc0MseUJBQXlCLG9CQUFvQixtREFBbUQsR0FBRyxjQUFjLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLGVBQWUscUVBQXFFLGdDQUFnQyx5QkFBeUIsdUJBQXVCLDBCQUEwQiwrQkFBK0IscUNBQXFDLEdBQUcsUUFBUSxvQkFBb0IsZUFBZSxHQUFHLFNBQVMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixHQUFHLFNBQVMsdUNBQXVDLEdBQUcsUUFBUSx1Q0FBdUMsR0FBRyxTQUFTLDBDQUEwQyxHQUFHLFNBQVMsdUNBQXVDLEdBQUcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxZQUFZLHVCQUF1QixvQkFBb0IsMEJBQTBCLGtCQUFrQixHQUFHLGFBQWEsbUJBQW1CLGtCQUFrQixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyw2Q0FBNkMseUJBQXlCLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLGlCQUFpQixvQkFBb0IseUNBQXlDLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLEdBQUcsV0FBVyx5QkFBeUIsc0JBQXNCLHVCQUF1QixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsaUNBQWlDLDhDQUE4Qyw4QkFBOEIsc0NBQXNDLEdBQUcsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsR0FBRyxxQkFBcUIsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLEdBQUcsY0FBYyxvQkFBb0Isa0NBQWtDLEdBQUcsa0JBQWtCLG9CQUFvQiw4QkFBOEIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLGlDQUFpQyw4Q0FBOEMsR0FBRyxrQ0FBa0MsaUNBQWlDLEdBQUcsdURBQXVELHVCQUF1Qiw2QkFBNkIsT0FBTyxjQUFjLDJCQUEyQixPQUFPLHNCQUFzQix5REFBeUQsc0NBQXNDLDhCQUE4Qix1QkFBdUIsT0FBTyxrREFBa0QsNkJBQTZCLE9BQU8sbURBQW1ELDZCQUE2QixPQUFPLHFCQUFxQiw2QkFBNkIsT0FBTyx3QkFBd0IsOEJBQThCLHdCQUF3Qix5Q0FBeUMsMENBQTBDLHdCQUF3Qix1QkFBdUIsK0JBQStCLE9BQU8sa0JBQWtCLDZCQUE2QixPQUFPLG9CQUFvQix3QkFBd0IsT0FBTyxpQkFBaUIsdUJBQXVCLHNCQUFzQiwwQkFBMEIsT0FBTyxHQUFHLDZCQUE2QixnQkFBZ0IsdUJBQXVCLHNCQUFzQixPQUFPLGNBQWMsdUJBQXVCLHNCQUFzQix5QkFBeUIsMEJBQTBCLDJCQUEyQiw2QkFBNkIsT0FBTyxtQ0FBbUMsMEJBQTBCLE9BQU8sc0JBQXNCLDBCQUEwQixPQUFPLHdDQUF3QywwQkFBMEIsT0FBTyxzQkFBc0IsNkNBQTZDLHFDQUFxQyxPQUFPLHVCQUF1Qiw2QkFBNkIsT0FBTyxrREFBa0QsNkJBQTZCLDJCQUEyQixPQUFPLG1EQUFtRCw2QkFBNkIsMkJBQTJCLE9BQU8sd0JBQXdCLHdCQUF3Qiw2QkFBNkIsdUJBQXVCLE9BQU8sR0FBRyw2QkFBNkIsb0JBQW9CLDBCQUEwQix5QkFBeUIsT0FBTyxnQkFBZ0IsdUJBQXVCLHNCQUFzQixPQUFPLHVCQUF1QixxQkFBcUIsaUJBQWlCLE9BQU8sOEJBQThCLDJCQUEyQixPQUFPLHFCQUFxQiwwQkFBMEIsT0FBTywrQkFBK0IsMEJBQTBCLE9BQU8sbUJBQW1CLHVCQUF1QixPQUFPLGNBQWMsMEJBQTBCLDZCQUE2QixPQUFPLHVCQUF1Qiw2QkFBNkIsT0FBTywwQkFBMEIsMkJBQTJCLE9BQU8sc0JBQXNCLDBCQUEwQixPQUFPLHdDQUF3QywwQkFBMEIsT0FBTyxhQUFhLHVCQUF1QixzQkFBc0IsMEJBQTBCLE9BQU8sc0JBQXNCLCtCQUErQixPQUFPLHdCQUF3QixxQkFBcUIsK0JBQStCLDBCQUEwQixPQUFPLHlEQUF5RCwwQkFBMEIsT0FBTyx5REFBeUQsMEJBQTBCLE9BQU8saUJBQWlCLHVCQUF1QixzQkFBc0IsMEJBQTBCLE9BQU8sZ0NBQWdDLHVCQUF1QixzQkFBc0IsT0FBTyxHQUFHLG1CQUFtQjtBQUM1czBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMYztBQUNaOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBYSxVQUFVLHVCQUF1QjtBQUNyRSxrQkFBa0Isa0JBQWtCO0FBQ3BDLG9CQUFvQix1REFBYSxVQUFVLHFCQUFxQixFQUFFLEdBQUc7QUFDckU7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLHVCQUF1Qix1REFBYSxVQUFVLHNCQUFzQixFQUFFLEVBQUUsRUFBRSxHQUFHO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5REFBWTtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEMsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQU07QUFDNUUsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdURBQWEsVUFBVSx5QkFBeUI7QUFDekUsZ0JBQWdCLHVEQUFhLFVBQVUscUJBQXFCO0FBQzVELHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFhLFVBQVUseUJBQXlCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RmQ7QUFDTDs7QUFFL0M7QUFDQTtBQUNBLGdCQUFnQix1REFBYSxVQUFVLHdCQUF3Qjs7QUFFL0Q7QUFDQSxrQkFBa0IsdURBQWEsVUFBVSxnQkFBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsZUFBZSxLQUFLO0FBQy9EO0FBQ0E7QUFDQSxzQ0FBc0MsZ0JBQWdCLElBQUksUUFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0JBQXNCO0FBQzVCLE1BQU0sc0JBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELG9CQUFvQjtBQUN0RSxNQUFNO0FBQ04sd0NBQXdDLHFCQUFxQixtQkFBbUIsVUFBVSxPQUFPLFVBQVUsRUFBRSxnQkFBZ0I7QUFDN0gsTUFBTTtBQUNOO0FBQ0Esd0NBQXdDLHFCQUFxQixjQUFjLE9BQU87QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFRO0FBQ1o7QUFDQSxpQkFBaUIsdURBQWEsVUFBVSx1QkFBdUI7QUFDL0QsbUJBQW1CLHVEQUFhLFVBQVUsaUJBQWlCO0FBQzNEO0FBQ0EsbUJBQW1CLHVEQUFhLFVBQVUsaUJBQWlCO0FBQzNELG9DQUFvQyxnQkFBZ0I7QUFDcEQsc0JBQXNCLHVEQUFhLGFBQWEsb0JBQW9CO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWU7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VvQjtBQUNpQjtBQUNoQjtBQUNvQztBQUN4QztBQUNRO0FBQ0Q7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0RBQVE7QUFDckIsSUFBSTtBQUNKLGFBQWEsdURBQWEsSUFBSSxXQUFXO0FBQ3pDO0FBQ0EsYUFBYSxrREFBWTtBQUN6QjtBQUNBLGdCQUFnQixpREFBVTs7QUFFMUIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2REFBa0I7QUFDNUMsSUFBSSx1REFBWTtBQUNoQjtBQUNBLDBCQUEwQiw2REFBa0I7QUFDNUM7QUFDQSwwQkFBMEIsc0RBQVk7QUFDdEMsSUFBSSxpREFBVztBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFjO0FBQ3RCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFRO0FBQ2hCLFFBQVEsb0RBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVc7QUFDakI7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SWdDO0FBQ2hCO0FBQ0k7QUFDSTtBQUNGO0FBQ1o7QUFDRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBYSxTQUFTLHlCQUF5QjtBQUNqRSxrQkFBa0IsdURBQWEsU0FBUyxxQkFBcUI7QUFDN0Q7QUFDQSw2QkFBNkIsdURBQWEsU0FBUywwQkFBMEI7QUFDN0Usb0JBQW9CLHVEQUFhLFNBQVMsaUJBQWlCO0FBQzNELHFCQUFxQix1REFBYSxTQUFTLGtCQUFrQjtBQUM3RCxtQkFBbUIsNENBQUk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhLFNBQVMseUJBQXlCO0FBQ2pFLHNCQUFzQix1REFBYSxTQUFTLG1CQUFtQjtBQUMvRCwwQkFBMEIsdURBQWEsU0FBUyx1QkFBdUI7QUFDdkUsb0JBQW9CLHVEQUFhLE9BQU8sb0ZBQW9GO0FBQzVILG9CQUFvQix1REFBYSxTQUFTLGlCQUFpQjtBQUMzRCxrQkFBa0IsOENBQU07QUFDeEI7QUFDQSxxQkFBcUIsdURBQWEsT0FBTywwR0FBMEc7QUFDbkoscUJBQXFCLHVEQUFhLFNBQVMsa0JBQWtCO0FBQzdELG1CQUFtQixnREFBUTtBQUMzQjtBQUNBLDBCQUEwQix1REFBYSxTQUFTLHVCQUF1QjtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFhLFNBQVMsY0FBYztBQUNyRCxrQkFBa0IsdURBQWEsU0FBUyx1QkFBdUI7QUFDL0QscUJBQXFCLHVEQUFhLFNBQVMsd0JBQXdCO0FBQ25FLGtCQUFrQix1REFBYSxTQUFTLCtCQUErQjtBQUN2RSxxQkFBcUIsdURBQWEsU0FBUyxzQkFBc0I7QUFDakU7QUFDQSxtQkFBbUIsdURBQWEsU0FBUyx3QkFBd0I7QUFDakUsa0JBQWtCLHVEQUFhLFdBQVcsNkVBQTZFO0FBQ3ZILHVCQUF1Qix1REFBYSxXQUFXLGdCQUFnQjtBQUMvRDtBQUNBLG1CQUFtQix1REFBYSxTQUFTLHdCQUF3QjtBQUNqRSxrQkFBa0IsdURBQWEsWUFBWSxlQUFlO0FBQzFEOztBQUVBO0FBQ0EsNEJBQTRCLGtEQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQWEsU0FBUyxjQUFjO0FBQ3JEO0FBQ0EscUJBQXFCLG9EQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBYztBQUNwQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUkwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHVEQUFhLFNBQVMseUJBQXlCO0FBQ3JFLHNCQUFzQix1REFBYSxTQUFTLG1CQUFtQjtBQUMvRDtBQUNBLGlCQUFpQix1REFBYSxRQUFRLG9CQUFvQjtBQUMxRDtBQUNBLG1CQUFtQix1REFBYSxRQUFRLGlCQUFpQjtBQUN6RCxvQkFBb0IsdURBQWEsU0FBUyxtQkFBbUIsWUFBWSxFQUFFO0FBQzNFLDZCQUE2QixZQUFZO0FBQ3pDLHFCQUFxQix1REFBYSxTQUFTLG1CQUFtQjtBQUM5RCxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix1REFBYSxTQUFTLHFCQUFxQjtBQUNuRTtBQUNBLHlCQUF5Qix1REFBYSxTQUFTLHNCQUFzQjtBQUNyRTtBQUNBLHlCQUF5Qix1REFBYSxTQUFTLHNCQUFzQjtBQUNyRTtBQUNBLDBCQUEwQix1REFBYSxTQUFTLHVCQUF1QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RlO0FBQ1k7QUFDdEI7QUFDRjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUFhLFNBQVMsd0JBQXdCO0FBQ3hFLHdCQUF3Qix1REFBYSxTQUFTLDJCQUEyQjtBQUN6RSx3QkFBd0IsdURBQWEsWUFBWSxpQkFBaUI7QUFDbEU7QUFDQSwwQkFBMEIsdURBQWEsWUFBWSxtQkFBbUI7QUFDdEU7QUFDQSx5QkFBeUIsdURBQWEsU0FBUywyQkFBMkI7QUFDMUUsOEJBQThCLHVEQUFhLFNBQVMsdUJBQXVCO0FBQzNFO0FBQ0EsOEJBQThCLHVEQUFhLFNBQVMsc0JBQXNCO0FBQzFFO0FBQ0EsOEJBQThCLHVEQUFhLFNBQVMsc0JBQXNCO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLEtBQUs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0EsMkJBQTJCLG1CQUFtQixFQUFFLFNBQVM7QUFDekQsY0FBYztBQUNkLDJCQUEyQixTQUFTLEVBQUUsbUJBQW1CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFZO0FBQ3hCO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBVTtBQUN4QyxRQUFRLHVEQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFTO0FBQ2pCO0FBQ0E7QUFDQSxRQUFRLDREQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLa0M7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrREFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQyw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQyw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0MsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEMsMEJBQTBCLG1CQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCLFFBQVEsY0FBYyxJQUFJLGFBQWEsSUFBSSxZQUFZO0FBQ2xGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxLQUFLO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBMkM7QUFDdEI7O0FBRXJCLHdEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sZWdlbmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUZsZWV0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9SdXNzb09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvRUJHYXJhbW9uZC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0VCR2FyYW1vbmQtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhcic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2FySXRhbGljJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0dhcicsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcbi5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBlZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMi8xNjtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIFRpbWVzLCBHZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxufVxcbi5tZW51QnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW46IDE2LzE3O1xcbn1cXG4ubWVudUJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb21tcyB7XFxuICAgIG1pbi13aWR0aDogODUwcHg7XFxuICAgIHBhZGRpbmc6IDF2aCAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjojOTBlMGVmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTBlMGVmO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5wbGFjZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDQ1LCAxMDAsIDE3MCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjMDA3N0I2O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5wbGFjZUluc3RydWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluc3RydWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTBlMGVmO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAzZnI7XFxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggNDBweCA1MHB4O1xcbiAgICBib3JkZXI6IDE2cHggZG91YmxlIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0Q29udGFpbmVyID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pbnB1dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlucHV0RmllbGQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uc3RhcnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3RhcnQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjOTBlMGVmO1xcbn1cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvNC8zO1xcbiAgICBtYXgtaGVpZ2h0OiA0MThweDtcXG4gICAgbWF4LXdpZHRoOiA0MThweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNDBweCByZ2IoMzUsIDEwMCwgMTcwKTtcXG59XFxuLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgNGZyO1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYig0NSwgMTAwLCAxNzApO1xcbn1cXG4ubGVnZW5kQm94IHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuLm9iamVjdGl2ZUJveCB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcbi5sZWdlbmRCb3gsXFxuLm9iamVjdGl2ZUJveCxcXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZExhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4ycHggMC4ycHggYmxhY2s7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW1vamlMaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG4uZW1vamlCb3gge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsIFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwNzdCNjtcXG59XFxuLmVtb2ppTGksXFxuLm9iamVjdGl2ZVRleHQsXFxuLmluc3RydWN0VGV4dCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuLnBsYXlBZ2FpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IGJsYWNrO1xcbn1cXG4ucGxheUFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xcbn1cXG4ucGxheUFnYWluOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJCb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5saW5rQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5naXRJY29uLFxcbi5saW5rSWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmxpbmtDb250YWluZXIgPiBhID4gaW1nIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuLmxpbmtDb250YWluZXIgPiBhID4gaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzMvMy80O1xcbiAgICB9XFxuICAgIC5jb21tcyB7XFxuICAgICAgICBtaW4td2lkdGg6IDc1MHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4ZnIgMC41ZnIgMThmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICAgIH1cXG4gICAgLmRpc3BsYXlCb2FyZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMy8zLzQ7XFxuICAgIH1cXG4gICAgLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLy0yO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmxlZ2VuZEJveCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMi80LzM7XFxuICAgIH1cXG4gICAgLmluc3RydWN0Qm94IHtcXG4gICAgICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIH1cXG4gICAgLmVtb2ppQm94IHtcXG4gICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAubWVudUJ0biB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxdmggMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG4gICAgLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLnBsYWNlSW5zdHJ1Y3Rpb25zIC5pbnN0cnVjdFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICAgICAgICB3aWR0aDogNDUwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU0OXB4KSB7XFxuICAgIC5oZWFkZXJUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgfVxcbiAgICAubWVudUJ0biB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgfVxcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3Rpb25zQ29udGFpbmVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIH1cXG4gICAgLmluc3RydWN0aW9ucyB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmlucHV0Q29udGFpbmVyID4gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5pbnB1dEZpZWxkIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wbGFjZUNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG4gICAgLnBsYWNlSW5zdHJ1Y3Rpb25zIHtcXG4gICAgICAgIHBhZGRpbmc6IDF2aCAydnc7XFxuICAgIH1cXG4gICAgLmluc3RydWN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5wbGFjZUluc3RydWN0aW9ucyAuaW5zdHJ1Y3RUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY2VsbCB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgfVxcbiAgICAub2JqZWN0aXZlQm94LFxcbiAgICAuaW5zdHJ1Y3RCb3gsXFxuICAgIC5sZWdlbmRCb3gge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5vYmplY3RpdmVUZXh0LFxcbiAgICAuaW5zdHJ1Y3RUZXh0LFxcbiAgICAuZW1vamlMaSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmVtb2ppQm94IHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5naXRJY29uLFxcbiAgICAubGlua0ljb24ge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiwrREFBMkQ7SUFDM0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtEQUF1RTtJQUN2RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBOEU7SUFDOUUsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCw0REFBNEQ7QUFDaEU7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9DQUFv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SSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLE1BQU07SUFDVjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsZUFBZTtJQUNuQjtJQUNBOzs7UUFHSSxlQUFlO0lBQ25CO0lBQ0E7OztRQUdJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBOztRQUVJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1J1c3NvT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0VCR2FyYW1vbmQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0dhckl0YWxpYyc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0VCR2FyYW1vbmQtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0dhcicsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxufVxcbi5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwZTBlZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxufVxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaGVhZGVyVGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMi8xNjtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIFRpbWVzLCBHZW9yZ2lhO1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XFxufVxcbi5tZW51QnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW46IDE2LzE3O1xcbn1cXG4ubWVudUJ0bjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb21tcyB7XFxuICAgIG1pbi13aWR0aDogODUwcHg7XFxuICAgIHBhZGRpbmc6IDF2aCAzdnc7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjojOTBlMGVmO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjOTBlMGVmO1xcbiAgICBvdXRsaW5lOiA0cHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbi5wbGFjZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnBsYWNlQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnVzc28nLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGhlaWdodDogNDRweDtcXG4gICAgd2lkdGg6IDEyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDQ1LCAxMDAsIDE3MCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcbi5wbGFjZUJ0bkNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjMDA3N0I2O1xcbn1cXG4ucGxhY2VCdG5Db250YWluZXIgPiBidXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcbi5wbGFjZUluc3RydWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IDJ2aCAydnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmluc3RydWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOTBlMGVmO1xcbn1cXG4ubWFpbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAzZnI7XFxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XFxufVxcbi5pbml0aWFsQ29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHggNDBweCA1MHB4O1xcbiAgICBib3JkZXI6IDE2cHggZG91YmxlIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmlucHV0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLmlucHV0Q29udGFpbmVyID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pbnB1dEZpZWxkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5pbnB1dEZpZWxkOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlucHV0RmllbGQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uc3RhcnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc3RhcnQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjOTBlMGVmO1xcbn1cXG4uc3RhcnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzAwNzdCNjtcXG59XFxuLnN0YXJ0OmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZGlzcGxheUJvYXJkIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvNC8zO1xcbiAgICBtYXgtaGVpZ2h0OiA0MThweDtcXG4gICAgbWF4LXdpZHRoOiA0MThweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMnB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNDBweCByZ2IoMzUsIDEwMCwgMTcwKTtcXG59XFxuLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgNGZyO1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IHJnYig0NSwgMTAwLCAxNzApO1xcbn1cXG4ubGVnZW5kQm94IHtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuLm9iamVjdGl2ZUJveCB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcbi5sZWdlbmRCb3gsXFxuLm9iamVjdGl2ZUJveCxcXG4uaW5zdHJ1Y3RCb3gge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2FyZExhYmVsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdXNzbycsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgY29sb3I6IHJnYigzNSwgMTAwLCAxNzApO1xcbiAgICB0ZXh0LXNoYWRvdzogMC4ycHggMC4ycHggYmxhY2s7XFxufVxcbi5jb2wge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJweDtcXG59XFxuLmNlbGwge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcbn1cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxMDAsIDE3MCk7XFxufVxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgMCwgMCk7XFxufVxcbi5sZWdlbmRDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmxlZ2VuZEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW1vamlMaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNHB4O1xcbn1cXG4uZW1vamlCb3gge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubGVnZW5kQm94LFxcbi5vYmplY3RpdmVCb3gsIFxcbi5pbnN0cnVjdEJveCB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogIzAwNzdCNjtcXG59XFxuLmVtb2ppTGksXFxuLm9iamVjdGl2ZVRleHQsXFxuLmluc3RydWN0VGV4dCB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pbnN0cnVjdFRleHQge1xcbiAgICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmVuZENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIGJvcmRlcjogMTZweCBkb3VibGUgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcbi5iYW5uZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG59XFxuLnBsYXlBZ2FpbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IGJsYWNrO1xcbn1cXG4ucGxheUFnYWluOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xcbn1cXG4ucGxheUFnYWluOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb290ZXJCb3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5saW5rQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5naXRJY29uLFxcbi5saW5rSWNvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuLmxpbmtDb250YWluZXIgPiBhID4gaW1nIHtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuLmxpbmtDb250YWluZXIgPiBhID4gaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5NTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzMvMy80O1xcbiAgICB9XFxuICAgIC5jb21tcyB7XFxuICAgICAgICBtaW4td2lkdGg6IDc1MHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4ZnIgMC41ZnIgMThmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICAgIH1cXG4gICAgLm1haW5Db250YWluZXIgLmJvYXJkQ29udGFpbmVyOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxuICAgIH1cXG4gICAgLmRpc3BsYXlCb2FyZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMy8zLzQ7XFxuICAgIH1cXG4gICAgLmxlZ2VuZENvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMi8zLy0yO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgICAgICBoZWlnaHQ6IDIyMHB4O1xcbiAgICAgICAgd2lkdGg6IDc1MHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmxlZ2VuZEJveCB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMi80LzM7XFxuICAgIH1cXG4gICAgLmluc3RydWN0Qm94IHtcXG4gICAgICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIH1cXG4gICAgLmVtb2ppQm94IHtcXG4gICAgICAgIGhlaWdodDogMzZweDtcXG4gICAgICAgIHdpZHRoOiAzNnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xcbiAgICAubWVudUJ0biB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxdmggMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG4gICAgLnBsYWNlQnRuQ29udGFpbmVyID4gYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3RUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLnBsYWNlSW5zdHJ1Y3Rpb25zIC5pbnN0cnVjdFRleHQge1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgfVxcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvNC8yO1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuICAgIC5tYWluQ29udGFpbmVyIC5ib2FyZENvbnRhaW5lcjpudGgtY2hpbGQoMikge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICAgICAgICB3aWR0aDogNDUwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU0OXB4KSB7XFxuICAgIC5oZWFkZXJUaXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDM2cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgfVxcbiAgICAubWVudUJ0biB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgfVxcbiAgICAuaW5pdGlhbENvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgICAuaW5zdHJ1Y3Rpb25zQ29udGFpbmVyIHtcXG4gICAgICAgIG1pbi13aWR0aDogMjYwcHg7XFxuICAgIH1cXG4gICAgLmluc3RydWN0aW9ucyB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG4gICAgLmlucHV0Q29udGFpbmVyID4gbGFiZWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5pbnB1dEZpZWxkIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcbiAgICAuY29tbXMge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5wbGFjZUNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG4gICAgLnBsYWNlSW5zdHJ1Y3Rpb25zIHtcXG4gICAgICAgIHBhZGRpbmc6IDF2aCAydnc7XFxuICAgIH1cXG4gICAgLmluc3RydWN0VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5wbGFjZUluc3RydWN0aW9ucyAuaW5zdHJ1Y3RUZXh0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbiAgICAuY2VsbCB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcbiAgICAubWFpbkNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAubGVnZW5kQ29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgfVxcbiAgICAub2JqZWN0aXZlQm94LFxcbiAgICAuaW5zdHJ1Y3RCb3gsXFxuICAgIC5sZWdlbmRCb3gge1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgIC5vYmplY3RpdmVUZXh0LFxcbiAgICAuaW5zdHJ1Y3RUZXh0LFxcbiAgICAuZW1vamlMaSB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG4gICAgLmVtb2ppQm94IHtcXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XFxuICAgIC5naXRJY29uLFxcbiAgICAubGlua0ljb24ge1xcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGJvYXJkIGxvZ2ljXG5cbmNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBpZiAoXG4gICAgICBjaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHxcbiAgICAgIGNoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeF1beSArIGldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3ggKyBpXVt5XSA+IDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beSArIGldID4gMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gYXJyYXkuZmluZCgoaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tNaXNzID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3ggKyBpXVt5XSA9PSAtMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5ICsgaV0gPT0gLTEpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IGFycmF5LmZpbmQoKGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrUHJvYiA9IChsZW5ndGgsIGF4aXMsIHgsIHksIGhpdENvb3JkQXJyYXkpID0+IHtcbiAgICBsZXQgd2VpZ2h0ID0gMTtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtOdW1iZXIoeCkgKyBpLCB5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3gsIE51bWJlcih5KSArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaGl0Q29vcmRBcnJheS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgLy8gbmVlZCB0byBjb21wYXJlIHNoaXBDb29yZGluYXRlcyB3aXRoIGhpdENvb3JkaW5hdGVzQXJyYXlcbiAgICAgIC8vIGlmIHllcywgaW5jcmVhc2Ugd2VpZ2h0IHggNTBcbiAgICAgIC8vIGlmIG5vLCBub3JtYWwgd2VpZ2h0IGZvciBjZWxsIGNvdW50ZXIgZm9yIHByb2JNYXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY29vcmRbMF0gPT0gc2hpcENvb3Jkc1tpXVswXSkge1xuICAgICAgICAgIGlmIChjb29yZFsxXSA9PSBzaGlwQ29vcmRzW2ldWzFdKSB7XG4gICAgICAgICAgICB3ZWlnaHQgKj0gNTA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdlaWdodDtcbiAgfTtcbiAgY29uc3QgY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgfVxuICB9O1xuICBjb25zdCB3aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoKGluZGV4KSA9PiBpbmRleC5tYXJrZXIgPT09IGlucHV0KTtcbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgoaW5kZXgpID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiAoYm9hcmRbeF1beV0gPSB2YWx1ZSk7XG4gIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICBfdXBkYXRlQm9hcmQoeCwgeSwgLTEpO1xuICB9O1xuICBjb25zdCBfdXBkYXRlSGl0ID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCB0aGVTaGlwID0gd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4gICAgX3VwZGF0ZUJvYXJkKHgsIHksIGJvYXJkW3hdW3ldICsgMTApO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHksIG9iaikgPT4ge1xuICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgIGlmIChvYmoudmFsdWUgPiAwKSB7XG4gICAgICAvLyBpZiBhIGhpdDpcbiAgICAgIC8vIC0+IGNoZWNrIHdoaWNoIHNoaXAgaXQgaXMsIGFkZCBoaXQgKHRvIGJvYXJkICYgdG8gZGlzcGxheSlcbiAgICAgIC8vIC0+IHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHlcbiAgICAgIC8vIC0+IGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbiAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgb3ZlclwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICBvYmoudmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBha2EgYSBtaXNzOlxuICAgICAgLy8gLT4gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAvLyAtPiB1cGRhdGUgZGlzcGxheVxuICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4gICAgICBvYmoudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc3VuazogZmFsc2UsXG4gICAgICBhbGxTdW5rOiBmYWxzZSxcbiAgICB9O1xuICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbiAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHksIG9iaik7XG4gICAgfVxuICAgIC8vIGVsc2UsIHVzZXIgc2VsZWN0ZWQgaW5lbGlnaWJsZSBjb29yZGluYXRlc1xuICAgIC8vIGFuZCBuZXcgY29vcmRpbmF0ZXMgbmVlZGVkXG4gICAgb2JqLnZhbHVlID0gMDtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGNyZWF0ZSxcbiAgICBwbGFjZVNoaXAsXG4gICAgY2hlY2tQbGFjZSxcbiAgICBjaGVja01pc3MsXG4gICAgY2hlY2tQcm9iLFxuICAgIGNoZWNrT25Cb2FyZCxcbiAgICB3aGljaFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRGYWN0b3J5O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbmNvbnN0IGF0dGFja0hvdmVyID0gKGVsZW1lbnQpID0+IHtcbiAgLy8gb24gZW50ZXIsIGhpZ2hsaWdodFxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAvLyBjaGVjayBpZiBjZWxsIGhhcyBiZWVuIGNsaWNrZWQgYWxyZWFkeVxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGxcIikge1xuICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzOEIwMDBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgIH1cbiAgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGdyaWQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgaGl0XCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBtaXNzXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgMTAwLCAxNzApXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBzdW5rXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuLCBmdW5jdCkgPT4ge1xuICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRpc3BsYXlCb2FyZFwiIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZ3JpZENvbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogYGNvbGAsIGlkOiBgJHtpfWAgfSk7XG4gICAgZGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKGdyaWRDb2wpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gIH0pO1xuICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIGZvciBnYW1lcGxheVxuICAgICAgICAvLyBhbmQgYWRkIGF0dGFjayBob3ZlciBmZWF0dXJlXG4gICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChsb29wLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgZnVuY3QoW2ksIGpdLCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2tIb3ZlcihncmlkQ2VsbCk7XG4gICAgICB9XG4gICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BsYXlCb2FyZDtcbn07XG5jb25zdCBkaXNwbGF5U2hpcHMgPSAob2JqZWN0LCBib2FyZERPTSkgPT4ge1xuICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgbWFya0NlbGwgPSAoeCwgeSwgcmVzdWx0LCBnYiwgYm9hcmRET00sIGVtb2ppKSA9PiB7XG4gIGlmIChyZXN1bHQuc3Vuaykge1xuICAgIGNvbnN0IHNoaXAgPSBnYi53aGljaFNoaXAocmVzdWx0LnNoaXApO1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLmNsYXNzTGlzdCA9IFwiY2VsbCBzdW5rXCI7XG4gICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLnRleHRDb250ZW50ID0gYCR7ZW1vaml9YDtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn5SlXCI7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCfjIpcIjtcbiAgfVxufTtcbmNvbnN0IGRpc3BsYXlMYWJlbCA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImxhYmVsQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkTGFiZWxcIiB9KTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfSB3YXRlcnNgO1xuICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIHJldHVybiBsYWJlbENvbnRhaW5lcjtcbn07XG5jb25zdCBidWlsZEJvYXJkQW5kTGFiZWwgPSAob2JqZWN0LCBib29sZWFuLCBtZXNzYWdlLCBmdW5jdCkgPT4ge1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZENvbnRhaW5lclwiIH0pO1xuICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5TGFiZWwobWVzc2FnZSkpO1xuICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpKTtcbiAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCwgYnVpbGRCb2FyZEFuZExhYmVsIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IG1ha2VJbml0aWFsTGl0ZSB9IGZyb20gXCIuL2luaXRpYWxET01cIjtcblxuLy8gYnVpbGQgY29tbXVuaWNhdGlvbiBkaXYgLSBmb3IgZGlzcGxheWluZyB1cGRhdGVzIC8gcHJvbXB0c1xuY29uc3QgY29tID0gKCgpID0+IHtcbiAgY29uc3QgY29tbUMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29tbUNvbnRhaW5lclwiIH0pO1xuXG4gIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tbXMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29tbXNcIiB9KTtcbiAgICBjb21tcy50ZXh0Q29udGVudCA9IGBgO1xuICAgIGNvbW1zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgcmV0dXJuIGNvbW1DO1xuICB9O1xuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb21tQy5yZW1vdmVDaGlsZChjb21tQy5sYXN0Q2hpbGQpO1xuICB9O1xuICBjb25zdCBpbnN0cnVjdCA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICBjb25zdCBjb21tcyA9IGNvbW1DLmZpcnN0Q2hpbGQ7XG4gICAgY29tbXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiBQbGFjZSB5b3VyICR7c2hpcH0uYDtcbiAgfTtcbiAgY29uc3QgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogJHtjb250ZW50fWA7XG4gIH07XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtcbiAgICBcImVtcHR5XCIsXG4gICAgXCJzdWJtYXJpbmVcIixcbiAgICBcInBhdHJvbCBib2F0XCIsXG4gICAgXCJjcnVpc2VyXCIsXG4gICAgXCJkZXN0cm95ZXJcIixcbiAgICBcImJhdHRsZSBjYXJyaWVyXCIsXG4gIF07XG4gIGNvbnN0IHByb25vdW5BcnJheSA9IFtcbiAgICB7IDA6IFwieW91XCIsIDE6IFwidGhlaXJcIiB9LFxuICAgIHsgMDogXCJ0aGV5XCIsIDE6IFwieW91clwiIH0sXG4gIF07XG4gIGNvbnN0IHVwZGF0ZVRleHQgPSAocGxheWVyTmFtZSwgYm9vbGVhbiwgaGl0LCBzdW5rLCBzaGlwLCBwbGF5ZXIpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgQXR0ZW50aW9uICR7cGxheWVyTmFtZS5jb2RlbmFtZX06IEVycm9yISBNdXN0IHNlbGVjdCBuZXcgY29vcmRpbmF0ZXMuYDtcbiAgICB9IGVsc2UgaWYgKHN1bmsgPT09IHRydWUpIHtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBmaXJlcyBhIHNob3QgYW5kICR7dmFsdWVbMF19IHN1bmsgJHt2YWx1ZVsxXX0gJHtzaGlwQXJyYXlbc2hpcF19IWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdHJpa2UgPSBoaXQgPyBgbGFuZHMgYSBzdHJpa2UhYCA6IGBtaXNzZXMhYDtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZW5kR2FtZSA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBtYWluQyA9IGNvbW1DLm5leHRFbGVtZW50U2libGluZztcbiAgICAvLyBjbGVhciBjb21tcyBhbmQgbWFpblxuICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICBjbGVhckRpdihtYWluQyk7XG4gICAgLy8gYnVpbGQgJ2dhbWUgb3ZlcicgY29udGVudFxuICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZW5kQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgYmFubmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJhbm5lclwiIH0pO1xuICAgIGJhbm5lci50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyIVwiO1xuICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5uZXJcIiB9KTtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3BsYXllci5jb2RlbmFtZX1gO1xuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5QWdhaW5cIiB9KTtcbiAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgbWFpbkMuYXBwZW5kQ2hpbGQoZW5kQyk7XG4gICAgZW5kQy5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJcbiAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGNsZWFyIGNvbnRlbnRcbiAgICAgIG1haW5DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbkMpO1xuICAgICAgY29tbUMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb21tQyk7XG4gICAgICBtYWtlSW5pdGlhbExpdGUoKTtcbiAgICB9KTtcbiAgICAvLyBoaWRlIGluZm8gYnV0dG9uXG4gICAgbWFpbkMucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgYnVpbGRDb21tcywgY2xlYXIsIGluc3RydWN0LCBtZXNzYWdlLCB1cGRhdGVUZXh0LCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb20gfTtcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5pbXBvcnQgeyBwbGFjZSB9IGZyb20gXCIuL3BsYWNlRmxlZXRET01cIjtcbmltcG9ydCBjcmVhdGVMZWdlbmQgZnJvbSBcIi4vbGVnZW5kRE9NXCI7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcbi8vXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICBsZXQgcGxheWVyO1xuICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICBwbGF5ZXIgPSBjb21wdXRlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllciA9IFBsYXllckZhY3RvcnkoYCR7cGxheWVyTmFtZX1gKTtcbiAgfVxuICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICBnYi5jcmVhdGUoMTApO1xuICBjb25zdCBmbGVldCA9IGJ1aWxkRmxlZXQoKTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9O1xufTtcbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJCb2FyZERPTTtcbiAgbGV0IGNvbXBCb2FyZERPTTtcbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiAocGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuKTtcbiAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQxLCBib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkQW5kTGFiZWwoYm9hcmQxLCBmYWxzZSwgXCJmcmllbmRseVwiKSk7XG4gICAgZGlzcGxheVNoaXBzKGJvYXJkMSwgcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkKTtcbiAgICBwbGF5ZXJCb2FyZERPTSA9IHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMiwgdHJ1ZSwgXCJlbmVteVwiLCBsb29wLnR1cm4pKTtcbiAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKCkpO1xuICAgIGNvbS5tZXNzYWdlKHBsYXllck9uZS5wbGF5ZXIsIGBsYXVuY2ggYW4gYXR0YWNrIWApO1xuICB9O1xuICBjb25zdCBpbml0aWFsaXplR2FtZSA9IChjYWxsc2lnbiwgcGFyZW50RE9NKSA9PiB7XG4gICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG4gICAgLy8gZGlzcGxheSBjb21tc1xuICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIFwiZmxleFwiO1xuICAgIC8vIGhhdmUgQUkgcGxhY2UgZmxlZXQsIHJhbmRvbWx5XG4gICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgIC8vIHByb21wdCB1c2VyIHRvIHBsYWNlIHNoaXBzXG4gICAgcGxhY2Uuc3RhcnQocGFyZW50RE9NLCBwMSwgcDIpO1xuICAgIHBsYXllck9uZSA9IHAxO1xuICAgIHBsYXllclR3byA9IHAyO1xuICAgIC8vIGRvbid0IHRoaW5rIEkgbmVlZCB0aGlzIHJldHVybiB2YWx1ZS4uXG4gICAgcmV0dXJuIHsgcDEsIHAyIH07XG4gIH07XG4gIGNvbnN0IGxhdW5jaEdhbWUgPSAocGFyZW50RE9NKSA9PiB7XG4gICAgaW5pdGlhbFR1cm4ocGxheWVyT25lLmdiLCBwbGF5ZXJUd28uZ2IsIHBhcmVudERPTSk7XG4gIH07XG4gIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gIGNvbnN0IHR1cm4gPSAoaW5wdXQpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgIC8vIGFrYSB1c2VyIGNsaWNrZWQgb24gY29vcmRpbmF0ZXMgZm9yIGEgc2Vjb25kIHRpbWVcbiAgICAgICAgLy8gcHJvbXB0IHVzZXIgZm9yIG5ldyBjb29yZGluYXRlc1xuICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCB0cnVlLCBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiB2YWxpZCBjb29yZGluYXRlc1xuICAgICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKGFpIGdhbWVib2FyZClcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0IG9uIGNvbW1zIChoaXQvbWlzcy9zdW5rKVxuICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdCwgcGxheWVyVHdvLmdiLCBjb21wQm9hcmRET00sIFwi8J+UsVwiKTtcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICByZXN1bHQudmFsdWUsXG4gICAgICAgICAgcmVzdWx0LnN1bmssXG4gICAgICAgICAgcmVzdWx0LnNoaXAsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhaSBwbGF5ZXIgbWFrZXMgYXR0YWNrXG4gICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKHVzZXIgZ2FtZWJvYXJkKVxuICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLnNtYXJ0QXR0YWNrKHBsYXllck9uZSk7XG4gICAgICBtYXJrQ2VsbChcbiAgICAgICAgcmVzdWx0LmNvb3JkWzBdLFxuICAgICAgICByZXN1bHQuY29vcmRbMV0sXG4gICAgICAgIHJlc3VsdC5vYmosXG4gICAgICAgIHBsYXllck9uZS5nYixcbiAgICAgICAgcGxheWVyQm9hcmRET00sXG4gICAgICAgIFwi8J+PtOKAjeKYoO+4j1wiXG4gICAgICApO1xuICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICByZXN1bHQub2JqLnZhbHVlLFxuICAgICAgICByZXN1bHQub2JqLnN1bmssXG4gICAgICAgIHJlc3VsdC5vYmouc2hpcCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm9iajtcbiAgICB9XG4gICAgaWYgKCFwbGF5ZXJUdXJuICYmICFyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gdGltZSBkZWxheSBiZWZvcmUgYWkgdHVyblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR1cm4oZmFsc2UpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIC8vIHJ1biBnYW1lb3ZlciBzZXF1ZW5jZVxuICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGdldFR1cm4sIGluaXRpYWxUdXJuLCBpbml0aWFsaXplR2FtZSwgbGF1bmNoR2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEluZm8gZnJvbSAnLi9pY29ucy9pbmZvLnN2Zyc7XG5pbXBvcnQgR2l0aHViIGZyb20gJy4vaWNvbnMvZ2l0aHViLnN2Zyc7XG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi9pY29ucy9saW5rZWRpbi5zdmcnO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG4vLyBidWlsZCBpbml0aWFsIHBhZ2Vcbi8vIHB0IDEgLSBoZWFkZXIgYW5kIGZvb3RlciBcbi8vIHB0IDIgLSBib2R5ICh0aXRsZSwgaW5zdHJ1Y3Rpb25zLCB1c2VyIG5hbWUgaW5wdXQsIHN0YXJ0IGJ0bilcbmxldCBoZWFkZXJCdG4gPSBmYWxzZTtcbi8vXG5jb25zdCBidG5TaG93ID0gKG1haW5DKSA9PiB7XG4gICAgbWFpbkMuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG1haW5DLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG59XG5jb25zdCBidG5IaWRlID0gKG1haW5DKSA9PiB7XG4gICAgbWFpbkMuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG1haW5DLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmNvbnN0IGhlYWRlckJ0bkZuID0gKG1haW5DKSA9PiB7XG4gICAgaGVhZGVyQnRuID0gIWhlYWRlckJ0bjtcbiAgICBpZiAoaGVhZGVyQnRuKSB7XG4gICAgICAgIGJ0blNob3cobWFpbkMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bkhpZGUobWFpbkMpO1xuICAgIH1cbn1cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2hlYWRlclRpdGxlJ30pO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0JBVFRMRVNISVAnO1xuICAgIGNvbnN0IG1lbnVCdG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtZW51QnRuQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtZW51QnRuJ30pO1xuICAgIGNvbnN0IG1lbnVJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnbWVudUljb24nfSk7XG4gICAgbWVudUljb24uc3JjID0gSW5mbztcbiAgICBtZW51SWNvbi5hbHQgPSAnSW5mbyc7XG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBoZWFkZXJCdG5Gbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubWFpbkNvbnRhaW5lcicpKTtcbiAgICB9KVxuICAgIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkQy5hcHBlbmRDaGlsZChtZW51QnRuQ29udGFpbmVyKTtcbiAgICBtZW51QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIG1lbnVCdG4uYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgIHJldHVybiBoZWFkQztcbn1cbi8vXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdmb290ZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvb3RlckJveFwifSk7XG4gICAgY29uc3QgbGlua0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJsaW5rQ29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBnaXRMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb25ub3J3YXJtZVwiLCBcImFsdFwiOiBcIkdpdGh1YiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnZ2l0SWNvbid9KTs7XG4gICAgZ2l0SWNvbi5zcmMgPSBHaXRodWI7XG4gICAgZ2l0SWNvbi5hbHQgPSBcIkdpdGh1YiBQcm9maWxlXCI7XG4gICAgY29uc3QgbGlua0xpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci13YXJtZS0xMDNhMDkxNjdcIiwgXCJhbHRcIjogXCJMaW5rZWRJbiBQcm9maWxlXCIsIFwidGFyZ2V0XCI6IFwiX2JsYW5rXCJ9KTtcbiAgICBjb25zdCBsaW5rSWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2xpbmtJY29uJ30pO1xuICAgIGxpbmtJY29uLnNyYyA9IExpbmtlZEluO1xuICAgIGxpbmtJY29uLmFsdCA9IFwiTGlua2VkSW4gUHJvZmlsZVwiO1xuICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwidGV4dENvbnRhaW5lclwifSk7XG4gICAgdGV4dENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUGVyZWdyaW5uaW5nIFByb2R1Y3Rpb25zXCI7XG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgZm9vdEMuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEljb24pO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0xpbmspO1xuICAgIGxpbmtMaW5rLmFwcGVuZENoaWxkKGxpbmtJY29uKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gZm9vdEM7XG59XG4vLyBcbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibWFpblwifSk7XG4gICAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtYWluQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluaXRpYWxDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5pdGlhbENvbnRlbnQnfSk7XG4gICAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnNDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnMnfSk7XG4gICAgaW5zdHJ1Y3QudGV4dENvbnRlbnQgPSAnRWxpbWluYXRlIHRoZSBlbmVteSBmbGVldCEnO1xuICAgIGNvbnN0IGlucHV0QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2lucHV0Q29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7dHlwZTogJ3RleHQnLCBpZDogJ3VzZXJuYW1lJywgY2xhc3M6ICdpbnB1dEZpZWxkJywgcGxhY2Vob2xkZXI6ICdBcXVhbWFuIPCflLEnfSk7XG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2ZvcjogJ3VzZXJuYW1lJ30pO1xuICAgIGlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnRW50ZXIgUGxheWVyIE5hbWU6JztcbiAgICBjb25zdCBzdGFydEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdzdGFydENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3N0YXJ0J30pO1xuICAgIHN0YXJ0LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUhJ1xuXG4gICAgLy8gbGlzdGVuZXIgYW5kIGhlbHBlcnNcbiAgICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmVlZCBhIGNoZWNrIGlmIGlucHV0IGlzIGVtcHR5ICEhIVxuICAgICAgICBcbiAgICAgICAgbGV0IGNhbGxzaWduID0gJ0FxdWFtYW4g8J+UsSc7XG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgY2FsbHNpZ24gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICAvLyBpbml0aWFsaXplIGdhbWUgbG9vcD9cbiAgICAgICAgLy8gbG9vcC5pbml0aWFsVHVybihtYWluQyk7XG4gICAgICAgIGxvb3AuaW5pdGlhbGl6ZUdhbWUoY2FsbHNpZ24sIG1haW5DKTtcbiAgICB9XG4gICAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN0YXJ0Rm4oKTtcbiAgICB9KVxuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkMpO1xuICAgIG1haW5DLmFwcGVuZENoaWxkKGluaXRpYWxDKTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbmZvQyk7XG4gICAgaW5mb0MuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGlucHV0Qyk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoc3RhcnRDKTtcbiAgICBzdGFydEMuYXBwZW5kQ2hpbGQoc3RhcnQpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8vXG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2R5J30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCgpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufVxuY29uc3QgbWFrZUluaXRpYWxMaXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuYm9keScpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGNvbS5idWlsZENvbW1zKCksIGJvZHkuY2hpbGRyZW5bMV0pO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5Db250ZW50KCksIGJvZHkuY2hpbGRyZW5bMl0pO1xufVxuZXhwb3J0IHsgbWFrZUluaXRpYWwsIG1ha2VJbml0aWFsTGl0ZSB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIGJ1aWxkIGxlZ2VuZCB0byBleHBsYWluIGVtb2ppcywgcHJvdmlkZSBkZXRhaWxlZCBpbnN0cnVjdGlvbnNcbmNvbnN0IHNoaXAgPSB7XG4gICAgZW1vamk6IFwiIFwiLFxuICAgIHRleHQ6IFwiZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInNoaXBcIlxufVxuY29uc3Qgd2F2ZSA9IHtcbiAgICBlbW9qaTogXCLwn4yKXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgbWlzc1wiLFxuICAgIGNsYXNzOiBcIm1pc3NcIlxufVxuY29uc3QgaGl0ID0ge1xuICAgIGVtb2ppOiBcIvCflKVcIixcbiAgICB0ZXh0OiBcImF0dGFjayBoaXRcIixcbiAgICBjbGFzczogXCJoaXRcIlxufVxuY29uc3Qgc3VuayA9IHtcbiAgICBlbW9qaTogXCLwn5SxXCIsXG4gICAgdGV4dDogXCJ5b3Ugc3VuayBlbmVteSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbmVteVN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+PtOKAjeKYoO+4j1wiLFxuICAgIHRleHQ6IFwiZW5lbXkgc3VuayBmcmllbmRseSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbW9qaUFycmF5ID0gW3NoaXAsIHdhdmUsIGhpdCwgc3VuaywgZW5lbXlTdW5rXTtcblxuY29uc3QgY3JlYXRlTGVnZW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2xlZ2VuZENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBsZWdlbmRCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRCb3gnfSk7XG4gICAgbGVnZW5kQm94LnRleHRDb250ZW50ID0gXCJMZWdlbmQ6XCI7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywge2NsYXNzOiAnbGVnZW5kTGlzdCd9KTtcbiAgICBlbW9qaUFycmF5LmZvckVhY2goZW1vamkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywge2NsYXNzOiAnZW1vamlMaSd9KTtcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgZW1vamlCb3ggJHtlbW9qaS5jbGFzc31gfSk7XG4gICAgICAgIGJveC50ZXh0Q29udGVudCA9IGAke2Vtb2ppLmVtb2ppfWA7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbW9qaVRleHQnfSk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgLSAke2Vtb2ppLnRleHR9YDtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG4gICAgbGVnZW5kQm94LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRCb3gpOyBcbiAgICBjb25zdCBpbnN0cnVjdEJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0Qm94J30pO1xuICAgIGluc3RydWN0Qm94LnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCI7XG4gICAgY29uc3QgaW5zdHJ1Y3RUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3RUZXh0J30pO1xuICAgIGluc3RydWN0VGV4dC50ZXh0Q29udGVudCA9ICdTZWxlY3QgY29vcmRpbmF0ZXMgaW4gZW5lbXkgd2F0ZXJzIHRvIGxhdW5jaCBhbiBhdHRhY2suIFRoZSBib2FyZCB3aWxsIGluZGljYXRlIGEgaGl0IG9yIG1pc3MsIG9yIGlmIHlvdSBzdW5rIHRoZSBlbmVteSBzaGlwLiBGaW5kIGFuZCBlbGltaW5hdGUgYWxsIGZpdmUgZW5lbXkgc2hpcHMgYmVmb3JlIHRoZXkgZWxpbWluYXRlIHlvdXJzISdcbiAgICBjb25zdCBvYmplY3RpdmVCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVCb3gnfSk7XG4gICAgb2JqZWN0aXZlQm94LnRleHRDb250ZW50ID0gJ09iamVjdGl2ZTonO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVUZXh0J30pO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSAnU2luayB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBvYmplY3RpdmVCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZUJveCk7XG4gICAgaW5zdHJ1Y3RCb3guYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RCb3gpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGVnZW5kOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCBsb29wIGZyb20gJy4vZ2FtZWxvb3AnO1xuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gICAgbGV0IGF4aXMgPSB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlRGlzcGxheSA9IChvcHBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicGxhY2VDb250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBidXR0b25DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VCdG5Db250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdheGlzQnRuJ30pO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYFJvdGF0ZWBcbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgICAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUluc3RydWN0aW9ucyd9KTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGl0bGUnfSk7XG4gICAgICAgIGluc3RydWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIlxuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQxID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDEudGV4dENvbnRlbnQgPSBgU2VsZWN0IGNvb3JkaW5hdGVzIG9uIGJvYXJkIHRvIHBsYWNlIGN1cnJlbnQgc2hpcC5gO1xuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDIudGV4dENvbnRlbnQgPSBgVXNlIGJ1dHRvbnMgdG8gcm90YXRlIHNoaXAgb3IgcmFuZG9tbHkgZGVwbG95IGVudGlyZSBmbGVldC5gXG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgICAgICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gYXhpcyA9ICFheGlzO1xuICAgICAgICAgICAgLy8gbGV0IHRleHQgPSBheGlzID8gJ1gnIDogJ1knO1xuICAgICAgICAgICAgLy8gYXhpc0J0bi50ZXh0Q29udGVudCA9IGBBeGlzOiAke3RleHR9YDtcbiAgICAgICAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IGJvYXJkXG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIC8vIGJ1aWxkIG5ldyBib2FyZCB3LyBjb3JyZWN0IGxpc3RlbmVyc1xuICAgICAgICAgICAgcGVyU2hpcChjdXJyZW50RE9NLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRTaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Bwb25lbnQucGxheWVyLnBsYWNlRmxlZXQoY3VycmVudE9iaik7XG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkMpO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGl0bGUpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQxKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0Mik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gXG4gICAgY29uc3QgY2hlY2tDZWxsID0gKGdhbWVib2FyZCwgc2hpcCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIGdhbWVib2FyZC5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gQXJyYXkuZnJvbShlbGVtZW50LmlkKTtcbiAgICAgICAgbGV0IG5ld0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7TnVtYmVyKGNvb3JkWzBdKStpfSR7Y29vcmRbMV19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSBgJHtjb29yZFswXX0ke051bWJlcihjb29yZFsxXSkraX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGlja0ZuID0gKHgsIHkpID0+IHtcbiAgICAgICAgY3VycmVudE9iai5nYi5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGF4aXMsIHgsIHkpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgbmV4dFNoaXAoY3VycmVudERPTSwgY3VycmVudE9iaik7XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrQXR0YWNrID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xpY2tGbih4LCB5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaG92ZXIgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY291bGQgYWRkIGEgY2xhc3MuLi5cbiAgICAgICAgICAgIGlmIChjaGVja0NlbGwoZ2FtZWJvYXJkLCBzaGlwLCBjdXJyZW50QXhpcygpLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0TGVuZ3RoKGVsZW1lbnQsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgICAgIGdyaWQuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgYWRkQ2VsbExpc3RlbmVycyA9IChnYW1lYm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgY2VsbEFycmF5LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDApKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgICAgICAgaG92ZXIoY2VsbCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGNsaWNrQXR0YWNrKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxldCBjdXJyZW50T2JqO1xuICAgIGxldCBjdXJyZW50Qm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRTaGlwO1xuICAgIGxldCBmbGVldEtleXM7XG4gICAgbGV0IGN1cnJlbnRET007XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCB1cGRhdGVBbGxDdXJyZW50cyA9IChwYXJlbnQsIG9iamVjdCkgPT4ge1xuICAgICAgICBjdXJyZW50RE9NID0gcGFyZW50O1xuICAgICAgICBjdXJyZW50T2JqID0gb2JqZWN0O1xuICAgICAgICBjdXJyZW50Qm9hcmQgPSBvYmplY3QuZ2I7XG4gICAgICAgIGZsZWV0S2V5cyA9IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5mbGVldCk7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZUN1cnJlbnRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2hpcCA9IChwYXJlbnRET00sIHBsYXllck9iaikgPT4ge1xuICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICBjb20uaW5zdHJ1Y3QocGxheWVyT2JqLnBsYXllciwgZmxlZXRLZXlzW2NvdW50XSk7XG4gICAgICAgICAgICBwZXJTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqLmdiLCBwbGF5ZXJPYmouZmxlZXRbZmxlZXRLZXlzW2NvdW50XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHQgc3RlcCBvZiBnYW1lbG9vcCEnKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBlclNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJCb2FyZCwgc2hpcCkgPT4ge1xuICAgICAgICB1cGRhdGVDdXJyZW50U2hpcChzaGlwKTtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQocGxheWVyQm9hcmQsIGZhbHNlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhjdXJyZW50Qm9hcmQsIGN1cnJlbnRET00uY2hpbGRyZW5bMF0pO1xuICAgICAgICBhZGRDZWxsTGlzdGVuZXJzKHBsYXllckJvYXJkLCBzaGlwKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmosIG9wcG9uZW50T2JqKSA9PiB7XG4gICAgICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheShvcHBvbmVudE9iaikpO1xuICAgICAgICB1cGRhdGVBbGxDdXJyZW50cyhwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgICAgIG5leHRTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqKTtcbiAgICB9XG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBjb20uY2xlYXIoKTtcbiAgICAgICAgLy8gaW52b2tlIGdhbWVsb29wIHN0ZXAyIC0+IHdoZXJlIDIgYm9hcmRzIGFyZSBkaXNwbGF5ZWRcbiAgICAgICAgLy8gYSB3YXkgdG8gdHJhbnNpdGlvbiB0aGlzIChlYXNlLWluKT8gISEhXG4gICAgICAgIGxvb3AubGF1bmNoR2FtZShjdXJyZW50RE9NKTtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NTBweCknKSkge1xuICAgICAgICAgICAgY3VycmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBob3Zlciwgc3RhcnQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBsYWNlIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5cbmNvbnN0IFBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFdpbiA9ICgpID0+IHdpbnMgKz0gMTtcbiAgICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn1cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFpID0gUGxheWVyRmFjdG9yeSgnVGhlIEtyYWtlbicpO1xuICAgIGNvbnN0IG5ld1Byb2IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgcHJvYi5jcmVhdGUoMTApO1xuICAgICAgICByZXR1cm4gcHJvYjtcbiAgICB9XG4gICAgY29uc3Qgc2hvdCA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIHNob3QuY3JlYXRlKDEwKTtcblxuICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IF9nZW5lcmF0ZUNvb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgd2hpbGUgKCEoX2F2YWlsYWJsZShjb29yZCkpKSB7XG4gICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZDtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbiAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGlmIChheGlzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gaSB0aGluayB0aGlzIGNhbiBiZSB1c2VkIGZvciBlaXRoZXIgcGxheWVyLi4ubWF5YmUgbWFrZSBhIGJ1dHRvbiBmb3IgdXNlciAoaW4gaW5pdGlhbCkgISEhXG4gICAgICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgICAgIGZsZWV0S2V5cy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB3aGlsZSAoIShwbGF5ZXIuZ2IucGxhY2VTaGlwKHBsYXllci5mbGVldFtzaGlwXSwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpdENvb3Jkc0FycmF5ID0gW107XG4gICAgY29uc3QgX2FkZFRvSGl0Q29vcmRzID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGhpdENvb3Jkc0FycmF5LnB1c2goaW5wdXQpO1xuICAgICAgICAvLyByZXR1cm4gaGl0Q29vcmRzQXJyYXk7ID8/ICEhISBkbyBpIG5lZWQgdGhpcyB0byBiZSByZXR1cm5lZD9cbiAgICB9XG4gICAgY29uc3QgX2NsZWFySGl0Q29vcmRzID0gKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGhpdENvb3Jkc0FycmF5LmZpbmRJbmRleCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVswXSA9PSBjb29yZFswXSAmJiB2YWx1ZVsxXSA9PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBoaXRDb29yZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZVNob3RCb2FyZCA9IChvYmplY3QsIHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IG9iamVjdC5jb29yZDtcbiAgICAgICAgaWYgKG9iamVjdC5vYmoudmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmouc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5nYi53aGljaFNoaXAob2JqZWN0Lm9iai5zaGlwKTtcbiAgICAgICAgICAgICAgICBfY2xlYXJIaXRDb29yZHMoc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9hZGRUb0hpdENvb3Jkcyhjb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG90LmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX2FkZFRvUHJvYkJvYXJkID0gKGdiLCBwcm9iQm9hcmQsIGxlbmd0aCwgYm9vbGVhbiwgeCwgeSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlcldlaWdodCA9IGdiLmNoZWNrUHJvYihsZW5ndGgsIGJvb2xlYW4sIHgsIHksIGhpdENvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW051bWJlcih4KStpXVt5XSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9iQm9hcmRbeF1bTnVtYmVyKHkpK2ldICs9IGNvdW50ZXJXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3JlbW92ZUhpdHMoZ2IsIHByb2JCb2FyZCk7XG4gICAgfVxuICAgIC8vIGV2YWx1YXRlIGhvdyB0byBpbXByb3ZlIGNoZWNrUGxhY2UgZm9yIFwiaHVudCBtb2RlXCJcblxuICAgIGNvbnN0IF9yZW1vdmVIaXRzID0gKGdiLCBwcm9iQm9hcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdiLmJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9iQm9hcmRbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfc2hpcFByb2IgPSAoZ2IsIHNoaXAsIHByb2IpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaikpIHx8IFxuICAgICAgICAgICAgICAgIChnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopIHx8IFxuICAgICAgICAgICAgICAgIGdiLmNoZWNrTWlzcyhzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopKSkge1xuICAgICAgICAgICAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9mbGVldFByb2IgPSAoYm9hcmQsIGZsZWV0LCBwcm9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZmxlZXQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgLy8gZG9lcyB0aGlzIG5lZWQgdG8gcnVuIFwiaXNTdW5rXCIgaW4gb3JkZXIgdG8gZ2V0IHVwZGF0ZWQgc3VuayB2YWx1ZT8gXG4gICAgICAgICAgICBpZiAoIShmbGVldFtzaGlwXS5zdW5rKSlcbiAgICAgICAgICAgIF9zaGlwUHJvYihib2FyZCwgZmxlZXRbc2hpcF0sIHByb2IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2V0UHJvYkNvb3JkcyA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50TWF4ID0ge1xuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA+IGN1cnJlbnRNYXgubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXgubWF4ID0gYm9hcmRbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXguY29vcmRzID0gW2ksIGpdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudE1heDsgLy8gc2hvdWxkIHRoaXMganVzdCBiZSBjb29yZGluYXRlcyBvciByZXR1cm4gdGhlIHdob2xlIG9iaj8gISEhXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgc21hcnRBSSBhdHRhY2sgbW9kZTpcbiAgICBjb25zdCBzbWFydEF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvYiA9IG5ld1Byb2IoKTtcbiAgICAgICAgLy8gdXBkYXRlZCBwcm9iYWJpbGl0eSBib2FyZDsgbmVlZHMgYWNjZXNzIHRvIHVzZXIncyBmbGVldC4uPyBvciBtYWtlIGEgY29weSBmb3IgdGhlIHByb2JCb2FyZCwgdXBkYXRlIHJlZ3VsYXJseSAhISFcbiAgICAgICAgX2ZsZWV0UHJvYihzaG90LCBwbGF5ZXIuZmxlZXQsIHByb2IpO1xuICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgYmVzdCBjZWxsXG4gICAgICAgIGNvbnN0IGNvb3JkID0gX2dldFByb2JDb29yZHMocHJvYi5ib2FyZCk7XG4gICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gdGhvc2UgY29vcmRzXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBvYmouY29vcmQgPSBjb29yZC5jb29yZHM7XG4gICAgICAgIG9iai5vYmogPSBwbGF5ZXIuZ2IucmVjZWl2ZUF0dGFjayhvYmouY29vcmRbMF0sIG9iai5jb29yZFsxXSk7XG4gICAgICAgIC8vIGNoZWNrIGF0dGFjayBpbnRlbDogaGl0IG9yIG1pc3MsIHN1bms/XG4gICAgICAgIF91cGRhdGVTaG90Qm9hcmQob2JqLCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAvL1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFpLCB7IHJhbmRvbUF0dGFjayB9LCB7IHNtYXJ0QXR0YWNrIH0sIHsgcGxhY2VGbGVldCB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBtYXJrZXIgPSBsZW5ndGg7XG4gICAgaWYgKG1hcmspIHtcbiAgICAgICAgbWFya2VyID0gbWFyaztcbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4gICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbiAgICAgICAgaGl0KCk7XG4gICAgICAgIHJldHVybiBpc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGNvb3JkcywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG59O1xuY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICAgIHJldHVybiB7IHN1Ym1hcmluZSwgcGF0cm9sLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfVxufVxuXG5leHBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9OyIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBtYWtlSW5pdGlhbCB9IGZyb20gJy4vaW5pdGlhbERPTSc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubWFrZUluaXRpYWwoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=