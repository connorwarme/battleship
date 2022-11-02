/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzaGlwIGxvZ2ljXG5cbmNvbnN0IFNoaXBGYWN0b3J5ID0gKGlucHV0LCBtYXJrKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IG1hcmtlciA9IGxlbmd0aDtcbiAgICBpZiAobWFyaykge1xuICAgICAgICBtYXJrZXIgPSBtYXJrO1xuICAgIH1cbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cztcbiAgICB9XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFkZGVkIHRoaXMgLSBjYW4gSSBzZXQgaGl0IGFuZCBpc1N1bmsgdG8gcHJpdmF0ZSwgYW5kIG9ubHkgZXhwb3J0IHRoaXMgb25lPyAhISFcbiAgICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuICAgICAgICBoaXQoKTtcbiAgICAgICAgcmV0dXJuIGlzU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4geyBsZW5ndGgsIHN1bmssIG1hcmtlciwgY29vcmRzLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1c31cbn07XG5jb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMsIDEpO1xuICAgIGNvbnN0IHBhdHJvbCA9IFNoaXBGYWN0b3J5KDIpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDMpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcbiAgICBjb25zdCBjYXJyaWVyID0gU2hpcEZhY3RvcnkoNSk7XG4gICAgcmV0dXJuIHsgc3VibWFyaW5lLCBwYXRyb2wsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2FycmllciB9XG59XG5cbmV4cG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9