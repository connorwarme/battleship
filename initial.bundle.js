/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        // hide info button
        mainC.parentElement.children[1].firstChild.style.display = "none";
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
        parentDOM.parentElement.parentElement.children[1].firstChild.style.display = "flex";
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
        console.log(parentDOM)
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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/initialDOM.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sZWdlbmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUZsZWV0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8bGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbiAgICAgICAgY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4K2ldW3ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3graSwgeV0pO1xuICAgICAgICB9fSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW3hdW3kraV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICAgICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCwgeStpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA+IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kraV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrTWlzcyA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4K2ldW3ldID09IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID09IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFycmF5LmZpbmQoaW5kZXggPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGNoZWNrUHJvYiA9IChsZW5ndGgsIGF4aXMsIHgsIHksIGhpdENvb3JkQXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHdlaWdodCA9IDE7XG4gICAgICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbTnVtYmVyKHgpK2ksIHldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFt4LCBOdW1iZXIoeSkraV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhpdENvb3JkQXJyYXkuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb29yZFswXSA9PSBzaGlwQ29vcmRzW2ldWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb29yZFsxXSA9PSBzaGlwQ29vcmRzW2ldWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQgKj0gNTA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB3ZWlnaHQ7XG4gICAgICAgIC8vIG5lZWQgdG8gY29tcGFyZSBzaGlwQ29vcmRpbmF0ZXMgd2l0aCBoaXRDb29yZGluYXRlc0FycmF5IChuZWVkcyB0byBiZSBhIGZuIHBhcmFtZXRlcilcbiAgICAgICAgLy8gaWYgeWVzLCBpbmNyZWFzZSB3ZWlnaHQgYnkgZmFjdG9yIG9mIDVcbiAgICAgICAgLy8gaWYgbm8sIG5vcm1hbCB3ZWlnaHQgZm9yIGNlbGwgY291bnRlciBmb3IgcHJvYk1hcFxuICAgIH1cbiAgICBjb25zdCBjaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKGluZGV4ID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICAgIH1cbiAgICAvLyBwcmV0dHkgc3VyZSBhbGxTdW5rIGlzIHdvcmtpbmcsIFxuICAgIC8vIGJ1dCBJIGRpZG4ndCBtYW5pcHVsYXRlIHRoZSBib2FyZCB0byBoYXZlIGFsbCB0aGUgc2hpcHMgc3VuayB0byB0ZXN0IGl0IGZ5aSAhISFcbiAgICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KGluZGV4ID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gICAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gICAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiBib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICAgICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVTaGlwID0gd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoc3Vuaykge1xuICAgICAgICAgICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4gICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4gICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgICAgIC8vIGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgICAgICAgIC8vIG9iai52YWx1ZSBtaWdodCBuZWVkIHRvIGJlIFwiLTFcIiAhISFcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgICAgICB9IFxuICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgb2JqLnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9ICAgXG4gICAgcmV0dXJuIHsgYm9hcmQsIGNyZWF0ZSwgcGxhY2VTaGlwLCBjaGVja1BsYWNlLCBjaGVja01pc3MsIGNoZWNrUHJvYiwgY2hlY2tPbkJvYXJkLCB3aGljaFNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmsgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRmFjdG9yeTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgYXR0YWNrSG92ZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QudmFsdWUgPT0gJ2NlbGwnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzhCMDAwXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICAgICAgLy8gY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIGhpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIG1pc3NcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCAxMDAsIDE3MClcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIHN1bmtcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuLCBmdW5jdCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Rpc3BsYXlCb2FyZCd9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY29sYCwgaWQ6IGAke2l9YH0pO1xuICAgICAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gfSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gYmUgYWJsZSB0byBkZWxpbmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIHBsYWNlIHNoaXBzIGFuZCBvdGhlciBmb3IgYWN0dWFsIGdhbWVwbGF5XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9vcC5nZXRUdXJuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0KFtpLCBqXSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF0dGFja0hvdmVyKGdyaWRDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWRDb2wuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkaXNwbGF5Qm9hcmQ7XG59XG5jb25zdCBkaXNwbGF5U2hpcHMgPSAob2JqZWN0LCBib2FyZERPTSkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqPGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRET00uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgbWFya0NlbGwgPSAoeCwgeSwgcmVzdWx0LCBnYiwgYm9hcmRET00sIGVtb2ppKSA9PiB7XG4gICAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnYi53aGljaFNoaXAocmVzdWx0LnNoaXApO1xuICAgICAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0uY2xhc3NMaXN0ID0gJ2NlbGwgc3Vuayc7XG4gICAgICAgICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLnRleHRDb250ZW50ID0gYCR7ZW1vaml9YDtcbiAgICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCflKVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn4yKXCI7XG4gICAgfVxufVxuY29uc3QgZGlzcGxheUxhYmVsID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJsYWJlbENvbnRhaW5lclwifSk7XG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2FyZExhYmVsJ30pO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX0gd2F0ZXJzYDtcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgcmV0dXJuIGxhYmVsQ29udGFpbmVyO1xufVxuY29uc3QgYnVpbGRCb2FyZEFuZExhYmVsID0gKG9iamVjdCwgYm9vbGVhbiwgbWVzc2FnZSwgZnVuY3QpID0+IHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJib2FyZENvbnRhaW5lclwifSk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUxhYmVsKG1lc3NhZ2UpKTtcbiAgICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpKTtcbiAgICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9OyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxMaXRlIH0gZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbUNvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbXMnfSk7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGA7XG4gICAgICAgIGNvbW1zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29tbUMuYXBwZW5kQ2hpbGQoY29tbXMpO1xuICAgICAgICByZXR1cm4gY29tbUM7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgY29tbUMucmVtb3ZlQ2hpbGQoY29tbUMubGFzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY29tbUMuZmlyc3RDaGlsZDtcbiAgICAgICAgY29tbXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiBQbGFjZSB5b3VyICR7c2hpcH0uYDtcbiAgICB9XG4gICAgY29uc3QgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06ICR7Y29udGVudH1gO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbJ2VtcHR5JywgJ3N1Ym1hcmluZScsICdwYXRyb2wgYm9hdCcsICdjcnVpc2VyJywgJ2Rlc3Ryb3llcicsICdiYXR0bGUgY2FycmllciddO1xuICAgIGNvbnN0IHByb25vdW5BcnJheSA9IFt7MDogJ3lvdScsIDE6ICd0aGVpcid9LCB7MDogJ3RoZXknLCAxOiAneW91cid9XTtcbiAgICBjb25zdCB1cGRhdGVUZXh0ID0gKHBsYXllck5hbWUsIGJvb2xlYW4sIGhpdCwgc3Vuaywgc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHBsYXllciA/IHByb25vdW5BcnJheVswXSA6IHByb25vdW5BcnJheVsxXTtcbiAgICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgQXR0ZW50aW9uICR7cGxheWVyTmFtZS5jb2RlbmFtZX06IEVycm9yISBNdXN0IHNlbGVjdCBuZXcgY29vcmRpbmF0ZXMuYFxuICAgICAgICB9IGVsc2UgaWYgKHN1bmsgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBmaXJlcyBhIHNob3QgYW5kICR7dmFsdWVbMF19IHN1bmsgJHt2YWx1ZVsxXX0gJHtzaGlwQXJyYXlbc2hpcF19IWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RyaWtlID0gaGl0ID8gYGxhbmRzIGEgc3RyaWtlIWA6IGBtaXNzZXMhYFxuICAgICAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGF0dGFja3MgYW5kICR7c3RyaWtlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZW5kR2FtZSA9IChwbGF5ZXIsIHJlc3RhcnRGbikgPT4ge1xuICAgICAgICBjb25zdCBtYWluQyA9IGNvbW1DLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgLy8gY2xlYXIgY29tbXMgYW5kIG1haW5cbiAgICAgICAgY2xlYXJEaXYoY29tbUMpO1xuICAgICAgICBjbGVhckRpdihtYWluQyk7XG4gICAgICAgIC8vIGJ1aWxkIGNvbnRlbnRcbiAgICAgICAgY29uc3QgZW5kQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2VuZENvbnRhaW5lcid9KTtcbiAgICAgICAgY29uc3QgYmFubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYmFubmVyJ30pO1xuICAgICAgICBiYW5uZXIudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISdcbiAgICAgICAgY29uc3Qgd2lubmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnd2lubmVyJ30pO1xuICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3BsYXllci5jb2RlbmFtZX1gO1xuICAgICAgICBjb25zdCBwbGF5QWdhaW4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdwbGF5QWdhaW4nfSk7XG4gICAgICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IGBQbGF5IEFnYWluYDtcbiAgICAgICAgbWFpbkMuYXBwZW5kQ2hpbGQoZW5kQyk7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyXG4gICAgICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNsZWFyIGNvbnRlbnRcbiAgICAgICAgICAgIC8vIGNsZWFyRGl2KG1haW5DLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBtYWluQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1haW5DKTtcbiAgICAgICAgICAgIGNvbW1DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29tbUMpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJlc3RhcnRGbigpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIG1ha2VJbml0aWFsTGl0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gaGlkZSBpbmZvIGJ1dHRvblxuICAgICAgICBtYWluQy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4geyBidWlsZENvbW1zLCBjbGVhciwgaW5zdHJ1Y3QsIG1lc3NhZ2UsIHVwZGF0ZVRleHQsIGVuZEdhbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGNvbSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCB7IHBsYWNlIH0gZnJvbSAnLi9wbGFjZUZsZWV0RE9NJztcbmltcG9ydCBjcmVhdGVMZWdlbmQgZnJvbSBcIi4vbGVnZW5kRE9NXCI7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcblxuY29uc3QgcDEgPSBQbGF5ZXJGYWN0b3J5KCdBbGZyZWRvJyk7XG5jb25zdCBnYjEgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMS5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDFhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMWIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAxYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWEsIGZhbHNlLCAwLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFiLCBmYWxzZSwgMiwgMCk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYywgZmFsc2UsIDQsIDApO1xuXG5jb25zdCBwMiA9IGNvbXB1dGVyKCk7XG5jb25zdCBnYjIgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMi5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDJhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMmIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAyYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmEsIGZhbHNlLCA1LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJiLCBmYWxzZSwgNywgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYywgZmFsc2UsIDksIDApO1xuXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgIHBsYXllciA9IGNvbXB1dGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyID0gUGxheWVyRmFjdG9yeShgJHtwbGF5ZXJOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIGdiLmNyZWF0ZSgxMCk7XG4gICAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9XG59XG5cbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyT25lO1xuICAgIGxldCBwbGF5ZXJUd287XG4gICAgbGV0IHBsYXllckJvYXJkRE9NO1xuICAgIGxldCBjb21wQm9hcmRET007XG4gICAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHBsYXllclR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4gcGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuO1xuICAgIGNvbnN0IGluaXRpYWxUdXJuID0gKGJvYXJkMSwgYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDEsIGZhbHNlLCAnZnJpZW5kbHknKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZCk7XG4gICAgICAgIHBsYXllckJvYXJkRE9NID0gcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkO1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMiwgdHJ1ZSwgJ2VuZW15JywgbG9vcC50dXJuKSk7XG4gICAgICAgIC8vIGRpc3BsYXlTaGlwcyhib2FyZDIsIHBhcmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCgpKTtcbiAgICAgICAgY29tLm1lc3NhZ2UocGxheWVyT25lLnBsYXllciwgYGxhdW5jaCBhbiBhdHRhY2shYCk7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxpemVHYW1lID0gKGNhbGxzaWduLCBwYXJlbnRET00pID0+IHtcbiAgICAgICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgICAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhwMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAyKTtcbiAgICAgICAgcGFyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgLy8gaGF2ZSBBSSBwbGFjZSBmbGVldCwgcmFuZG9tbHlcbiAgICAgICAgLy8gbmVlZHMgdG8gYmUgY2hlY2tlZCAhISFcbiAgICAgICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgICAgICAvLyBuZWVkcyB0byBpbnZva2UgZm4gZm9yIHVzZXIgdG8gcGxhY2UgdGhlaXIgc2hpcHMuLi4gISEhXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudERPTSk7XG4gICAgICAgIHBsYWNlLnN0YXJ0KHBhcmVudERPTSwgcDEsIHAyKTtcbjtcbiAgICAgICAgLy8gaW5pdGlhbCB0dXJuID9cbiAgICAgICAgLy8gbmVlZCB0byBwYXNzIGluIHAxLmJvYXJkIGFuZCBwMi5ib2FyZCAoY2hhbmdlIGluaXRpYWwgdHVybiBmbilcbiAgICAgICAgY29uc29sZS5sb2cocDIuZ2IuYm9hcmQpO1xuICAgIFxuICAgICAgICBwbGF5ZXJPbmUgPSBwMTtcbiAgICAgICAgcGxheWVyVHdvID0gcDI7XG4gICAgICAgIC8vIG5lZWQgdGhpcyByZXR1cm4gdmFsdWU/ICEhIVxuICAgICAgICByZXR1cm4geyBwMSwgcDIgfVxuICAgIH1cbiAgICBjb25zdCBsYXVuY2hHYW1lID0gKHBhcmVudERPTSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRET00pXG4gICAgICAgIGluaXRpYWxUdXJuKHBsYXllck9uZS5nYiwgcGxheWVyVHdvLmdiLCBwYXJlbnRET00pO1xuICAgIH1cbiAgICBjb25zdCByZXN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5ldyBwbGF5ZXJzXG4gICAgICAgIC8vIG5ldyBnYW1lYm9hcmRzXG4gICAgICAgIC8vIG5ldyBzaGlwIGxvY2F0aW9uc1xuICAgICAgICAvLyBkaXNwbGF5IF5edGhlc2VcbiAgICAgICAgLy8gLT4gZ28gdG8gaW5pdGlhbCBwYWdlLCBuZWVkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gLT4gZ28gdG8gcGxhY2Ugc2hpcHMgcGFnZSwgbmVlZCB1c2VyIGlucHV0XG4gICAgICAgIC8vIC0+IGdvIHRvIG1haW4gcGFnZSwgbGV0IGJhdHRsZSBiZWdpblxuICAgICAgICAvLyB3aGF0IGVsc2U/XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN0YXJ0Zm4nKTsgXG4gICAgfVxuICAgIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gICAgLy8gZG8gaSBuZWVkID8gISEhXG4gICAgY29uc3QgdHVybiA9IChpbnB1dCkgPT4ge1xuICAgICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAvLyBkb2VzIGl0IG5lZWQgYSBjaGVjaz9cbiAgICAgICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWthIHVzZXIgY2xpY2tlZCBvbiBjb29yZGluYXRlcyBmb3IgYSBzZWNvbmQgdGltZVxuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIHRydWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIGRvbSBmdW5jdGlvbiBwcm9tcHRpbmcgdXNlciB0byB0cnkgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiBuZXcgY29vcmRpbmF0ZXMsIHR1cm4gY2FuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBhaSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIG1hcmtDZWxsKGlucHV0WzBdLCBpbnB1dFsxXSwgcmVzdWx0LCBwbGF5ZXJUd28uZ2IsIGNvbXBCb2FyZERPTSwgXCLwn5SxXCIpO1xuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIGZhbHNlLCByZXN1bHQudmFsdWUsIHJlc3VsdC5zdW5rLCByZXN1bHQuc2hpcCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgc3Vua1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgZGlmZmVyZW50IG1lc3NhZ2UuLi5cbiAgICAgICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBwMSBnYW1lYm9hcmRcbiAgICAgICAgICAgIHJlc3VsdCA9IHBsYXllclR3by5wbGF5ZXIuc21hcnRBdHRhY2socGxheWVyT25lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICBtYXJrQ2VsbChyZXN1bHQuY29vcmRbMF0sIHJlc3VsdC5jb29yZFsxXSwgcmVzdWx0Lm9iaiwgcGxheWVyT25lLmdiLCBwbGF5ZXJCb2FyZERPTSwgXCLwn4+04oCN4pig77iPXCIpO1xuICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgZmFsc2UsIHJlc3VsdC5vYmoudmFsdWUsIHJlc3VsdC5vYmouc3VuaywgcmVzdWx0Lm9iai5zaGlwLCBmYWxzZSk7XG4gICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm9iajtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBsYXllclR1cm4gJiYgKCFyZXN1bHQuYWxsU3VuaykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR1cm4oZmFsc2UpOyBcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIC8vIHJ1biBnYW1lb3ZlciBmblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3AgdGhyb3dpbmcgZ2FtZSBvdmVyJyk7XG4gICAgICAgICAgICAvLyBuZWVkcyByZXN0YXJ0Rm4gISEhXG4gICAgICAgICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyLCByZXN0YXJ0Rm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdldFR1cm4sIGluaXRpYWxUdXJuLCBpbml0aWFsaXplR2FtZSwgbGF1bmNoR2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBJbmZvIGZyb20gJy4vaWNvbnMvaW5mby5zdmcnO1xuaW1wb3J0IEdpdGh1YiBmcm9tICcuL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vaWNvbnMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCB7IFBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuLy8gYnVpbGQgaW5pdGlhbCBwYWdlXG4vLyBwdCAxIC0gaGVhZGVyIGFuZCBmb290ZXIgXG4vLyBwdCAyIC0gYm9keSAodGl0bGUsIGluc3RydWN0aW9ucywgdXNlciBuYW1lIGlucHV0LCBzdGFydCBidG4pXG5sZXQgaGVhZGVyQnRuID0gZmFsc2U7XG4vL1xuY29uc3QgYnRuU2hvdyA9IChtYWluQykgPT4ge1xuICAgIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbWFpbkMuY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xufVxuY29uc3QgYnRuSGlkZSA9IChtYWluQykgPT4ge1xuICAgIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbWFpbkMuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5jb25zdCBoZWFkZXJCdG5GbiA9IChtYWluQykgPT4ge1xuICAgIGhlYWRlckJ0biA9ICFoZWFkZXJCdG47XG4gICAgaWYgKGhlYWRlckJ0bikge1xuICAgICAgICBidG5TaG93KG1haW5DKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG5IaWRlKG1haW5DKTtcbiAgICB9XG59XG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJUaXRsZSd9KTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBjb25zdCBtZW51QnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWVudUJ0bkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWVudUJ0bid9KTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ21lbnVJY29uJ30pO1xuICAgIG1lbnVJY29uLnNyYyA9IEluZm87XG4gICAgbWVudUljb24uYWx0ID0gJ0luZm8nO1xuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGVhZGVyQnRuRm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1haW5Db250YWluZXInKSk7XG4gICAgfSlcbiAgICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZEMuYXBwZW5kQ2hpbGQobWVudUJ0bkNvbnRhaW5lcik7XG4gICAgbWVudUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICByZXR1cm4gaGVhZEM7XG59XG4vL1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9vdGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb290ZXJCb3hcIn0pO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGlua0NvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIiwgXCJhbHRcIjogXCJHaXRodWIgUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2dpdEljb24nfSk7O1xuICAgIGdpdEljb24uc3JjID0gR2l0aHViO1xuICAgIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICAgIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsIFwiYWx0XCI6IFwiTGlua2VkSW4gUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgbGlua0ljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdsaW5rSWNvbid9KTtcbiAgICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRleHRDb250YWluZXJcIn0pO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtMaW5rKTtcbiAgICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RDO1xufVxuLy8gXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcIm1haW5cIn0pO1xuICAgIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWFpbkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luaXRpYWxDb250ZW50J30pO1xuICAgIGNvbnN0IGluZm9DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zJ30pO1xuICAgIGluc3RydWN0LnRleHRDb250ZW50ID0gJ0VsaW1pbmF0ZSB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnB1dENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6ICd0ZXh0JywgaWQ6ICd1c2VybmFtZScsIGNsYXNzOiAnaW5wdXRGaWVsZCcsIHBsYWNlaG9sZGVyOiAnQXF1YW1hbiDwn5SxJ30pO1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICd1c2VybmFtZSd9KTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIFBsYXllciBOYW1lOic7XG4gICAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnc3RhcnRDb250YWluZXInfSk7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdzdGFydCd9KTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lISdcblxuICAgIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4gY2xlYXJEaXYobWFpbkMpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgYSBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eSAhISFcbiAgICAgICAgXG4gICAgICAgIGxldCBjYWxsc2lnbiA9ICdBcXVhbWFuIPCflLEnO1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxzaWduID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3A/XG4gICAgICAgIC8vIGxvb3AuaW5pdGlhbFR1cm4obWFpbkMpO1xuICAgICAgICBsb29wLmluaXRpYWxpemVHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gICAgfVxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEZuKCk7XG4gICAgfSlcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DKTtcbiAgICBtYWluQy5hcHBlbmRDaGlsZChpbml0aWFsQyk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICAgIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbnB1dEMpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKHN0YXJ0Qyk7XG4gICAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG4vL1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYm9keSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn1cbmNvbnN0IG1ha2VJbml0aWFsTGl0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmJvZHknKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShjb20uYnVpbGRDb21tcygpLCBib2R5LmNoaWxkcmVuWzFdKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShtYWluQ29udGVudCgpLCBib2R5LmNoaWxkcmVuWzJdKTtcbn1cbmV4cG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBidWlsZCBsZWdlbmQgdG8gZXhwbGFpbiBlbW9qaXMsIHByb3ZpZGUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zXG5jb25zdCBzaGlwID0ge1xuICAgIGVtb2ppOiBcIiBcIixcbiAgICB0ZXh0OiBcImZyaWVuZGx5IHNoaXBcIixcbiAgICBjbGFzczogXCJzaGlwXCJcbn1cbmNvbnN0IHdhdmUgPSB7XG4gICAgZW1vamk6IFwi8J+MilwiLFxuICAgIHRleHQ6IFwiYXR0YWNrIG1pc3NcIixcbiAgICBjbGFzczogXCJtaXNzXCJcbn1cbmNvbnN0IGhpdCA9IHtcbiAgICBlbW9qaTogXCLwn5SlXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgaGl0XCIsXG4gICAgY2xhc3M6IFwiaGl0XCJcbn1cbmNvbnN0IHN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+UsVwiLFxuICAgIHRleHQ6IFwieW91IHN1bmsgZW5lbXkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW5lbXlTdW5rID0ge1xuICAgIGVtb2ppOiBcIvCfj7TigI3imKDvuI9cIixcbiAgICB0ZXh0OiBcImVuZW15IHN1bmsgZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW1vamlBcnJheSA9IFtzaGlwLCB3YXZlLCBoaXQsIHN1bmssIGVuZW15U3Vua107XG5cbmNvbnN0IGNyZWF0ZUxlZ2VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRDb250YWluZXInfSk7XG4gICAgY29uc3QgbGVnZW5kQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbGVnZW5kQm94J30pO1xuICAgIGxlZ2VuZEJveC50ZXh0Q29udGVudCA9IFwiTGVnZW5kOlwiO1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsIHtjbGFzczogJ2xlZ2VuZExpc3QnfSk7XG4gICAgZW1vamlBcnJheS5mb3JFYWNoKGVtb2ppID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScsIHtjbGFzczogJ2Vtb2ppTGknfSk7XG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogYGVtb2ppQm94ICR7ZW1vamkuY2xhc3N9YH0pO1xuICAgICAgICBib3gudGV4dENvbnRlbnQgPSBgJHtlbW9qaS5lbW9qaX1gO1xuICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW1vamlUZXh0J30pO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYC0gJHtlbW9qaS50ZXh0fWA7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KVxuICAgIGxlZ2VuZEJveC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kQm94KTsgXG4gICAgY29uc3QgaW5zdHJ1Y3RCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdEJveCd9KTtcbiAgICBpbnN0cnVjdEJveC50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zOlwiO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGV4dCd9KTtcbiAgICBpbnN0cnVjdFRleHQudGV4dENvbnRlbnQgPSAnU2VsZWN0IGNvb3JkaW5hdGVzIGluIGVuZW15IHdhdGVycyB0byBsYXVuY2ggYW4gYXR0YWNrLiBUaGUgYm9hcmQgd2lsbCBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLCBvciBpZiB5b3Ugc3VuayB0aGUgZW5lbXkgc2hpcC4gRmluZCBhbmQgZWxpbWluYXRlIGFsbCBmaXZlIGVuZW15IHNoaXBzIGJlZm9yZSB0aGV5IGVsaW1pbmF0ZSB5b3VycyEnXG4gICAgY29uc3Qgb2JqZWN0aXZlQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlQm94J30pO1xuICAgIG9iamVjdGl2ZUJveC50ZXh0Q29udGVudCA9ICdPYmplY3RpdmU6JztcbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlVGV4dCd9KTtcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gJ1NpbmsgdGhlIGVuZW15IGZsZWV0ISc7XG4gICAgb2JqZWN0aXZlQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVCb3gpO1xuICAgIGluc3RydWN0Qm94LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0Qm94KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gJy4vY29tc0RPTSc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2dhbWVsb29wJztcblxuY29uc3QgcGxhY2UgPSAoKCkgPT4ge1xuICAgIGxldCBheGlzID0gdHJ1ZTtcbiAgICBjb25zdCBjdXJyZW50QXhpcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZURpc3BsYXkgPSAob3Bwb25lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInBsYWNlQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3BsYWNlQnRuQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBheGlzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYXhpc0J0bid9KTtcbiAgICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGBSb3RhdGVgXG4gICAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3JhbmRvbUJ0bid9KTtcbiAgICAgICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG4gICAgICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VJbnN0cnVjdGlvbnMnfSk7XG4gICAgICAgIGNvbnN0IGluc3RydWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdFRpdGxlJ30pO1xuICAgICAgICBpbnN0cnVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCJcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQxLnRleHRDb250ZW50ID0gYFNlbGVjdCBjb29yZGluYXRlcyBvbiBib2FyZCB0byBwbGFjZSBjdXJyZW50IHNoaXAuYDtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQyLnRleHRDb250ZW50ID0gYFVzZSBidXR0b25zIHRvIHJvdGF0ZSBzaGlwIG9yIHJhbmRvbWx5IGRlcGxveSBlbnRpcmUgZmxlZXQuYFxuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAgICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGF4aXMgPSAhYXhpcztcbiAgICAgICAgICAgIC8vIGxldCB0ZXh0ID0gYXhpcyA/ICdYJyA6ICdZJztcbiAgICAgICAgICAgIC8vIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgQXhpczogJHt0ZXh0fWA7XG4gICAgICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgICAgICAvLyBkZWxldGUgY3VycmVudCBib2FyZFxuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAvLyBidWlsZCBuZXcgYm9hcmQgdy8gY29ycmVjdCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHBlclNoaXAoY3VycmVudERPTSwgY3VycmVudEJvYXJkLCBjdXJyZW50U2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wcG9uZW50LnBsYXllci5wbGFjZUZsZWV0KGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChheGlzQnRuKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRpdGxlKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0MSk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIC8vIFxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuICAgICAgICBnYW1lYm9hcmQuY2hlY2tQbGFjZShzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGlnaGxpZ2h0TGVuZ3RoID0gKGVsZW1lbnQsIGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IEFycmF5LmZyb20oZWxlbWVudC5pZCk7XG4gICAgICAgIGxldCBuZXdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkraX0ke2Nvb3JkWzFdfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7Y29vcmRbMF19JHtOdW1iZXIoY29vcmRbMV0pK2l9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJZCk7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2xpY2tGbiA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGN1cnJlbnRPYmouZ2IucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBheGlzLCB4LCB5KTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgIG5leHRTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRPYmopO1xuICAgIH1cbiAgICBjb25zdCBjbGlja0F0dGFjayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsaWNrRm4oeCwgeSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhvdmVyID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvdWxkIGFkZCBhIGNsYXNzLi4uXG4gICAgICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodExlbmd0aChlbGVtZW50LCBzaGlwLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNsYXRlZ3JheVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgIGNlbGxBcnJheS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgICAgIGhvdmVyKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICBjbGlja0F0dGFjayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgY3VycmVudE9iajtcbiAgICBsZXQgY3VycmVudEJvYXJkO1xuICAgIGxldCBjdXJyZW50U2hpcDtcbiAgICBsZXQgZmxlZXRLZXlzO1xuICAgIGxldCBjdXJyZW50RE9NO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgdXBkYXRlQWxsQ3VycmVudHMgPSAocGFyZW50LCBvYmplY3QpID0+IHtcbiAgICAgICAgY3VycmVudERPTSA9IHBhcmVudDtcbiAgICAgICAgY3VycmVudE9iaiA9IG9iamVjdDtcbiAgICAgICAgY3VycmVudEJvYXJkID0gb2JqZWN0LmdiO1xuICAgICAgICBmbGVldEtleXMgPSBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QuZmxlZXQpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGVDdXJyZW50U2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDtcbiAgICB9XG4gICAgY29uc3QgbmV4dFNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmopID0+IHtcbiAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgY29tLmluc3RydWN0KHBsYXllck9iai5wbGF5ZXIsIGZsZWV0S2V5c1tjb3VudF0pO1xuICAgICAgICAgICAgcGVyU2hpcChwYXJlbnRET00sIHBsYXllck9iai5nYiwgcGxheWVyT2JqLmZsZWV0W2ZsZWV0S2V5c1tjb3VudF1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAgb2YgZ2FtZWxvb3AhJyk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgdXBkYXRlQ3VycmVudFNoaXAoc2hpcCk7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKHBsYXllckJvYXJkLCBmYWxzZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoY3VycmVudEJvYXJkLCBjdXJyZW50RE9NLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgYWRkQ2VsbExpc3RlbmVycyhwbGF5ZXJCb2FyZCwgc2hpcCk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ID0gKHBhcmVudERPTSwgcGxheWVyT2JqLCBvcHBvbmVudE9iaikgPT4ge1xuICAgICAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZURpc3BsYXkob3Bwb25lbnRPYmopKTtcbiAgICAgICAgdXBkYXRlQWxsQ3VycmVudHMocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICAgICAgICBuZXh0U2hpcChwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgfVxuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgY29tLmNsZWFyKCk7XG4gICAgICAgIC8vIGludm9rZSBnYW1lbG9vcCBzdGVwMiAtPiB3aGVyZSAyIGJvYXJkcyBhcmUgZGlzcGxheWVkXG4gICAgICAgIC8vIGEgd2F5IHRvIHRyYW5zaXRpb24gdGhpcyAoZWFzZS1pbik/ICEhIVxuICAgICAgICBsb29wLmxhdW5jaEdhbWUoY3VycmVudERPTSk7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNTUwcHgpJykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgaG92ZXIsIHN0YXJ0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwbGFjZSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gICAgbGV0IHdpbnMgPSAwO1xuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgIH1cbiAgICBjb25zdCBhZGRXaW4gPSAoKSA9PiB3aW5zICs9IDE7XG4gICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnMsIGF0dGFjaywgYWRkV2luIH07XG59XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoJ1RoZSBLcmFrZW4nKTtcbiAgICBjb25zdCBuZXdQcm9iID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9iID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIHByb2IuY3JlYXRlKDEwKTtcbiAgICAgICAgcmV0dXJuIHByb2I7XG4gICAgfVxuICAgIGNvbnN0IHNob3QgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBzaG90LmNyZWF0ZSgxMCk7XG5cbiAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4gICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfZ2VuZXJhdGVDb29yZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIHdoaWxlICghKF9hdmFpbGFibGUoY29vcmQpKSkge1xuICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gX2dlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4gICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIG9iai5jb29yZCA9IGNvb3JkO1xuICAgICAgICAgICAgb2JqLm9iaiA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlRmxlZXQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIC8vIGkgdGhpbmsgdGhpcyBjYW4gYmUgdXNlZCBmb3IgZWl0aGVyIHBsYXllci4uLm1heWJlIG1ha2UgYSBidXR0b24gZm9yIHVzZXIgKGluIGluaXRpYWwpICEhIVxuICAgICAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgICAgICBjb25zdCBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhwbGF5ZXIuZmxlZXQpO1xuICAgICAgICBmbGVldEtleXMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgd2hpbGUgKCEocGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSkpKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IF9yYW5kb21BeGlzKCk7XG4gICAgICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoaXRDb29yZHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hZGRUb0hpdENvb3JkcyA9IChpbnB1dCkgPT4ge1xuICAgICAgICBoaXRDb29yZHNBcnJheS5wdXNoKGlucHV0KTtcbiAgICAgICAgLy8gcmV0dXJuIGhpdENvb3Jkc0FycmF5OyA/PyAhISEgZG8gaSBuZWVkIHRoaXMgdG8gYmUgcmV0dXJuZWQ/XG4gICAgfVxuICAgIGNvbnN0IF9jbGVhckhpdENvb3JkcyA9IChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBoaXRDb29yZHNBcnJheS5maW5kSW5kZXgodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMF0gPT0gY29vcmRbMF0gJiYgdmFsdWVbMV0gPT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGl0Q29vcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVTaG90Qm9hcmQgPSAob2JqZWN0LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBvYmplY3QuY29vcmQ7XG4gICAgICAgIGlmIChvYmplY3Qub2JqLnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3Qub2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuZ2Iud2hpY2hTaGlwKG9iamVjdC5vYmouc2hpcCk7XG4gICAgICAgICAgICAgICAgX2NsZWFySGl0Q29vcmRzKHNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYWRkVG9IaXRDb29yZHMoY29vcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9hZGRUb1Byb2JCb2FyZCA9IChnYiwgcHJvYkJvYXJkLCBsZW5ndGgsIGJvb2xlYW4sIHgsIHkpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJXZWlnaHQgPSBnYi5jaGVja1Byb2IobGVuZ3RoLCBib29sZWFuLCB4LCB5LCBoaXRDb29yZHNBcnJheSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIHByb2JCb2FyZFtOdW1iZXIoeCkraV1beV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW3hdW051bWJlcih5KStpXSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZW1vdmVIaXRzKGdiLCBwcm9iQm9hcmQpO1xuICAgIH1cbiAgICAvLyBldmFsdWF0ZSBob3cgdG8gaW1wcm92ZSBjaGVja1BsYWNlIGZvciBcImh1bnQgbW9kZVwiXG5cbiAgICBjb25zdCBfcmVtb3ZlSGl0cyA9IChnYiwgcHJvYkJvYXJkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChnYi5ib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvYkJvYXJkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3NoaXBQcm9iID0gKGdiLCBzaGlwLCBwcm9iKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKChnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSB8fCBcbiAgICAgICAgICAgICAgICAoZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9hZGRUb1Byb2JCb2FyZChnYiwgcHJvYi5ib2FyZCwgc2hpcC5sZW5ndGgsIHRydWUsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Z2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIShnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSB8fCBcbiAgICAgICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfZmxlZXRQcm9iID0gKGJvYXJkLCBmbGVldCwgcHJvYikgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC5rZXlzKGZsZWV0KTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIC8vIGRvZXMgdGhpcyBuZWVkIHRvIHJ1biBcImlzU3Vua1wiIGluIG9yZGVyIHRvIGdldCB1cGRhdGVkIHN1bmsgdmFsdWU/IFxuICAgICAgICAgICAgaWYgKCEoZmxlZXRbc2hpcF0uc3VuaykpXG4gICAgICAgICAgICBfc2hpcFByb2IoYm9hcmQsIGZsZWV0W3NoaXBdLCBwcm9iKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2dldFByb2JDb29yZHMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudE1heCA9IHtcbiAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiBjdXJyZW50TWF4Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4Lm1heCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4LmNvb3JkcyA9IFtpLCBqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNYXg7IC8vIHNob3VsZCB0aGlzIGp1c3QgYmUgY29vcmRpbmF0ZXMgb3IgcmV0dXJuIHRoZSB3aG9sZSBvYmo/ICEhIVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHNtYXJ0QUkgYXR0YWNrIG1vZGU6XG4gICAgY29uc3Qgc21hcnRBdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBuZXdQcm9iKCk7XG4gICAgICAgIC8vIHVwZGF0ZWQgcHJvYmFiaWxpdHkgYm9hcmQ7IG5lZWRzIGFjY2VzcyB0byB1c2VyJ3MgZmxlZXQuLj8gb3IgbWFrZSBhIGNvcHkgZm9yIHRoZSBwcm9iQm9hcmQsIHVwZGF0ZSByZWd1bGFybHkgISEhXG4gICAgICAgIF9mbGVldFByb2Ioc2hvdCwgcGxheWVyLmZsZWV0LCBwcm9iKTtcbiAgICAgICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGJlc3QgY2VsbFxuICAgICAgICBjb25zdCBjb29yZCA9IF9nZXRQcm9iQ29vcmRzKHByb2IuYm9hcmQpO1xuICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIHRob3NlIGNvb3Jkc1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvb3JkID0gY29vcmQuY29vcmRzO1xuICAgICAgICBvYmoub2JqID0gcGxheWVyLmdiLnJlY2VpdmVBdHRhY2sob2JqLmNvb3JkWzBdLCBvYmouY29vcmRbMV0pO1xuICAgICAgICAvLyBjaGVjayBhdHRhY2sgaW50ZWw6IGhpdCBvciBtaXNzLCBzdW5rP1xuICAgICAgICBfdXBkYXRlU2hvdEJvYXJkKG9iaiwgcGxheWVyKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgLy9cblxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhaSwgeyByYW5kb21BdHRhY2sgfSwgeyBzbWFydEF0dGFjayB9LCB7IHBsYWNlRmxlZXQgfSk7XG59XG5cbmV4cG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyfSIsIi8vIHNoaXAgbG9naWNcblxuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBsZXQgbWFya2VyID0gbGVuZ3RoO1xuICAgIGlmIChtYXJrKSB7XG4gICAgICAgIG1hcmtlciA9IG1hcms7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgICAgIGhpdCgpO1xuICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgbWFya2VyLCBjb29yZHMsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMywgMSk7XG4gICAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICByZXR1cm4geyBzdWJtYXJpbmUsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH1cbn1cblxuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTsiLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luaXRpYWxET00uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=