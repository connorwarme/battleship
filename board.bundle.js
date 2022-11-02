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
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBLFdBQVc7QUFDWCw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsaUVBQWUsWUFBWSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBib2FyZCBsb2dpY1xuXG5jb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuICAgICAgICBjaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3graV1beV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCtpLCB5XSk7XG4gICAgICAgIH19IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4LCB5K2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tNaXNzID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPT0gLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gYXJyYXkuZmluZChpbmRleCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY2hlY2tQcm9iID0gKGxlbmd0aCwgYXhpcywgeCwgeSwgaGl0Q29vcmRBcnJheSkgPT4ge1xuICAgICAgICBsZXQgd2VpZ2h0ID0gMTtcbiAgICAgICAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtOdW1iZXIoeCkraSwgeV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3gsIE51bWJlcih5KStpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGl0Q29vcmRBcnJheS5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvb3JkWzBdID09IHNoaXBDb29yZHNbaV1bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvb3JkWzFdID09IHNoaXBDb29yZHNbaV1bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCAqPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHdlaWdodDtcbiAgICAgICAgLy8gbmVlZCB0byBjb21wYXJlIHNoaXBDb29yZGluYXRlcyB3aXRoIGhpdENvb3JkaW5hdGVzQXJyYXkgKG5lZWRzIHRvIGJlIGEgZm4gcGFyYW1ldGVyKVxuICAgICAgICAvLyBpZiB5ZXMsIGluY3JlYXNlIHdlaWdodCBieSBmYWN0b3Igb2YgNVxuICAgICAgICAvLyBpZiBubywgbm9ybWFsIHdlaWdodCBmb3IgY2VsbCBjb3VudGVyIGZvciBwcm9iTWFwXG4gICAgfVxuICAgIGNvbnN0IGNoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHdoaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gICAgfVxuICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4gICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSB3aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuICAgICAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAoYm9hcmRbeF1beV0gKyAxMCkpO1xuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5LCBvYmopID0+IHtcbiAgICAgICAgb2JqLnZhbHVlID0gYm9hcmRbeF1beV07XG4gICAgICAgIGlmIChvYmoudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbiAgICAgICAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgICAgICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmFsbFN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gZmlyZSBnYW1lT3ZlciBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGF0IGFsbCBpcyBuZWVkZWQgaW5zaWRlP1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmouc2hpcCA9IG9iai52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoaWNoIHNoaXAgaXQgaXNcbiAgICAgICAgICAgIC8vIHJ1biBoaXQoKSBvbiB0aGF0IHNoaXBcbiAgICAgICAgICAgIC8vIHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHkgLSBzZW5kIHRvIERPTSBmbiB0byB1cGRhdGUgZGlzcGxheT9cbiAgICAgICAgICAgIC8vIHRoaW5raW5nIHRoYXQgeW91IGNhbGwgYSBET00gZm4gd2l0aCBcInN1bmtcIiBib29sZWFuLi4gISEhXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm9hcmRcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSB0byB1cGRhdGUgZ3JpZCB3aXRoIGhpdCBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICAgICAgLy8gY2hhbmdlIHJldHVybiBmcm9tIHZhbHVlIHRvIHRydWVcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFkZCBtaXNzIHRvIGFycmF5XG4gICAgICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbiAgICAgICAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuICAgICAgICAgICAgLy8gb2JqLnZhbHVlIG1pZ2h0IG5lZWQgdG8gYmUgXCItMVwiICEhIVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gZnVuY3Rpb24gdG8gdXBkYXRlIGdyaWQgd2l0aCBtaXNzIG1hcmsgISEhXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHksIG9iaik7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIG5lZWQgdG8gbG9vcCBiYWNrIC0+IG5lZWQgdXNlciB0byBnaXZlIG5ldyBjb29yZGluYXRlc1xuICAgICAgICBvYmoudmFsdWUgPSAwO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gICBcbiAgICByZXR1cm4geyBib2FyZCwgY3JlYXRlLCBwbGFjZVNoaXAsIGNoZWNrUGxhY2UsIGNoZWNrTWlzcywgY2hlY2tQcm9iLCBjaGVja09uQm9hcmQsIHdoaWNoU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRGYWN0b3J5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==