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
        axisBtn.textContent = `Axis: X`
        const randomBtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {class: 'randomBtn'});
        randomBtn.textContent = 'Random';
        const instruct = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'placeInstructions'});
        instruct.textContent = "Intel: rotate current ship or randomly deploy entire fleet."

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
            opponent.player.placeFleet(currentObj);
            currentDOM.removeChild(currentDOM.lastChild);
            finish();
        })

        // append it all together
        container.appendChild(buttonC);
        buttonC.appendChild(axisBtn);
        buttonC.appendChild(randomBtn);
        container.appendChild(instruct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDN0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21zRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbGVnZW5kRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VGbGVldERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJvYXJkIGxvZ2ljXG5cbmNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmIChjaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIGNoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgICAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4K2ksIHldKTtcbiAgICAgICAgfX0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFt4XVt5K2ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3gsIHkraV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBjaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBjaGVja01pc3MgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCtpXVt5XSA9PSAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beStpXSA9PSAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBjaGVja1Byb2IgPSAobGVuZ3RoLCBheGlzLCB4LCB5LCBoaXRDb29yZEFycmF5KSA9PiB7XG4gICAgICAgIGxldCB3ZWlnaHQgPSAxO1xuICAgICAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW051bWJlcih4KStpLCB5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbeCwgTnVtYmVyKHkpK2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoaXRDb29yZEFycmF5LmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29vcmRbMF0gPT0gc2hpcENvb3Jkc1tpXVswXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29vcmRbMV0gPT0gc2hpcENvb3Jkc1tpXVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ICo9IDUwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gd2VpZ2h0O1xuICAgICAgICAvLyBuZWVkIHRvIGNvbXBhcmUgc2hpcENvb3JkaW5hdGVzIHdpdGggaGl0Q29vcmRpbmF0ZXNBcnJheSAobmVlZHMgdG8gYmUgYSBmbiBwYXJhbWV0ZXIpXG4gICAgICAgIC8vIGlmIHllcywgaW5jcmVhc2Ugd2VpZ2h0IGJ5IGZhY3RvciBvZiA1XG4gICAgICAgIC8vIGlmIG5vLCBub3JtYWwgd2VpZ2h0IGZvciBjZWxsIGNvdW50ZXIgZm9yIHByb2JNYXBcbiAgICB9XG4gICAgY29uc3QgY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgd2hpY2hTaGlwID0gKGlucHV0KSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwQXJyYXkuZmluZChpbmRleCA9PiBpbmRleC5tYXJrZXIgPT09IGlucHV0KTtcbiAgICB9XG4gICAgLy8gcHJldHR5IHN1cmUgYWxsU3VuayBpcyB3b3JraW5nLCBcbiAgICAvLyBidXQgSSBkaWRuJ3QgbWFuaXB1bGF0ZSB0aGUgYm9hcmQgdG8gaGF2ZSBhbGwgdGhlIHNoaXBzIHN1bmsgdG8gdGVzdCBpdCBmeWkgISEhXG4gICAgY29uc3QgYWxsU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeShpbmRleCA9PiBpbmRleC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICAgIGNvbnN0IF9hZGRNaXNzID0gKHgsIHkpID0+IG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuICAgIGNvbnN0IF91cGRhdGVCb2FyZCA9ICh4LCB5LCB2YWx1ZSkgPT4gYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICBjb25zdCBfdXBkYXRlTWlzcyA9ICh4LCB5KSA9PiB7XG4gICAgICAgIF9hZGRNaXNzKHgsIHkpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgLTEpO1xuICAgIH1cbiAgICBjb25zdCBfdXBkYXRlSGl0ID0gKHgsIHkpID0+IHtcbiAgICAgICAgY29uc3QgdGhlU2hpcCA9IHdoaWNoU2hpcChib2FyZFt4XVt5XSk7XG4gICAgICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIChib2FyZFt4XVt5XSArIDEwKSk7XG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHksIG9iaikgPT4ge1xuICAgICAgICBvYmoudmFsdWUgPSBib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKG9iai52YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuICAgICAgICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgICAgICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmouYWxsU3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIG92ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBmaXJlIGdhbWVPdmVyIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgYWxsIGlzIG5lZWRlZCBpbnNpZGU/XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5zaGlwID0gb2JqLnZhbHVlO1xuICAgICAgICAgICAgLy8gY2hlY2sgd2hpY2ggc2hpcCBpdCBpc1xuICAgICAgICAgICAgLy8gcnVuIGhpdCgpIG9uIHRoYXQgc2hpcFxuICAgICAgICAgICAgLy8gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSAtIHNlbmQgdG8gRE9NIGZuIHRvIHVwZGF0ZSBkaXNwbGF5P1xuICAgICAgICAgICAgLy8gdGhpbmtpbmcgdGhhdCB5b3UgY2FsbCBhIERPTSBmbiB3aXRoIFwic3Vua1wiIGJvb2xlYW4uLiAhISFcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBib2FyZFxuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIHRvIHVwZGF0ZSBncmlkIHdpdGggaGl0IG1hcmsgISEhXG4gICAgICAgICAgICAvLyBuZWVkcyB0byBzd2l0Y2ggdHVybnMgISEhXG4gICAgICAgICAgICAvLyBjaGFuZ2UgcmV0dXJuIGZyb20gdmFsdWUgdG8gdHJ1ZVxuICAgICAgICAgICAgb2JqLnZhbHVlID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYWRkIG1pc3MgdG8gYXJyYXlcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuICAgICAgICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4gICAgICAgICAgICAvLyBvYmoudmFsdWUgbWlnaHQgbmVlZCB0byBiZSBcIi0xXCIgISEhXG4gICAgICAgICAgICBvYmoudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIHRvIERPTSBmdW5jdGlvbiB0byB1cGRhdGUgZ3JpZCB3aXRoIG1pc3MgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICBhbGxTdW5rOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSwgb2JqKTtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gbmVlZCB0byBsb29wIGJhY2sgLT4gbmVlZCB1c2VyIHRvIGdpdmUgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgIG9iai52YWx1ZSA9IDA7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSAgIFxuICAgIHJldHVybiB7IGJvYXJkLCBjcmVhdGUsIHBsYWNlU2hpcCwgY2hlY2tQbGFjZSwgY2hlY2tNaXNzLCBjaGVja1Byb2IsIGNoZWNrT25Cb2FyZCwgd2hpY2hTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbmNvbnN0IGF0dGFja0hvdmVyID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy8gb24gZW50ZXIsIGhpZ2hsaWdodFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBjZWxsIGhhcyBiZWVuIGNsaWNrZWQgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09ICdjZWxsJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzM4QjAwMFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jZWxsJykpO1xuICAgICAgICAgICAgZ3JpZC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBoaXRcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBtaXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgMTAwLCAxNzApXCJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBzdW5rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4vLyByZW5kZXIgZ2FtZWJvYXJkcyBvbiBwYWdlXG5jb25zdCBidWlsZEJvYXJkID0gKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdkaXNwbGF5Qm9hcmQnfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZ3JpZENvbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogYGNvbGAsIGlkOiBgJHtpfWB9KTtcbiAgICAgICAgZGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKGdyaWRDb2wpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkQ2VsbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogYGNlbGxgLCBpZDogYCR7aX0ke2p9YH0pO1xuICAgICAgICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGJlIGFibGUgdG8gZGVsaW5lYXRlIGV2ZW50IGxpc3RlbmVyIGZvciBwbGFjZSBzaGlwcyBhbmQgb3RoZXIgZm9yIGFjdHVhbCBnYW1lcGxheVxuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb3AuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdChbaSwgal0sIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBhdHRhY2tIb3ZlcihncmlkQ2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheUJvYXJkO1xufVxuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIHJlc3VsdCwgZ2IsIGJvYXJkRE9NLCBlbW9qaSkgPT4ge1xuICAgIGlmIChyZXN1bHQuc3Vuaykge1xuICAgICAgICBjb25zdCBzaGlwID0gZ2Iud2hpY2hTaGlwKHJlc3VsdC5zaGlwKTtcbiAgICAgICAgc2hpcC5jb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XG4gICAgICAgICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLmNsYXNzTGlzdCA9ICdjZWxsIHN1bmsnO1xuICAgICAgICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS50ZXh0Q29udGVudCA9IGAke2Vtb2ppfWA7XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn5SlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+MilwiO1xuICAgIH1cbn1cbmNvbnN0IGRpc3BsYXlMYWJlbCA9IChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGFiZWxDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYm9hcmRMYWJlbCd9KTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9IHdhdGVyc2A7XG4gICAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHJldHVybiBsYWJlbENvbnRhaW5lcjtcbn1cbmNvbnN0IGJ1aWxkQm9hcmRBbmRMYWJlbCA9IChvYmplY3QsIGJvb2xlYW4sIG1lc3NhZ2UsIGZ1bmN0KSA9PiB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiYm9hcmRDb250YWluZXJcIn0pO1xuICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlMYWJlbChtZXNzYWdlKSk7XG4gICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSk7XG4gICAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IG1ha2VJbml0aWFsTGl0ZSB9IGZyb20gXCIuL2luaXRpYWxET01cIjtcblxuLy8gYnVpbGQgY29tbXVuaWNhdGlvbiBkaXYgLSBmb3IgZGlzcGxheWluZyB1cGRhdGVzIC8gcHJvbXB0c1xuY29uc3QgY29tID0gKCgpID0+IHtcbiAgICBjb25zdCBjb21tQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2NvbW1Db250YWluZXInfSk7XG5cbiAgICBjb25zdCBidWlsZENvbW1zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tcyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2NvbW1zJ30pO1xuICAgICAgICBjb21tcy50ZXh0Q29udGVudCA9IGBgO1xuICAgICAgICBjb21tcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbW1DLmFwcGVuZENoaWxkKGNvbW1zKTtcbiAgICAgICAgcmV0dXJuIGNvbW1DO1xuICAgIH1cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNvbW1DLnJlbW92ZUNoaWxkKGNvbW1DLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGluc3RydWN0ID0gKHBsYXllciwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tcyA9IGNvbW1DLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogUGxhY2UgeW91ciAke3NoaXB9LmA7XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2UgPSAocGxheWVyLCBjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiAke2NvbnRlbnR9YDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gWydlbXB0eScsICdzdWJtYXJpbmUnLCAncGF0cm9sIGJvYXQnLCAnY3J1aXNlcicsICdkZXN0cm95ZXInLCAnYmF0dGxlIGNhcnJpZXInXTtcbiAgICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbezA6ICd5b3UnLCAxOiAndGhlaXInfSwgezA6ICd0aGV5JywgMTogJ3lvdXInfV07XG4gICAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmBcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgOiBgbWlzc2VzIWBcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyLCByZXN0YXJ0Rm4pID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICAgICAgY2xlYXJEaXYobWFpbkMpO1xuICAgICAgICAvLyBidWlsZCBjb250ZW50XG4gICAgICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbmRDb250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Jhbm5lcid9KTtcbiAgICAgICAgYmFubmVyLnRleHRDb250ZW50ID0gJ0dhbWUgT3ZlciEnXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dpbm5lcid9KTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICAgICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncGxheUFnYWluJ30pO1xuICAgICAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgICAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhciBjb250ZW50XG4gICAgICAgICAgICAvLyBjbGVhckRpdihtYWluQy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgbWFpbkMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtYWluQyk7XG4gICAgICAgICAgICBjb21tQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbW1DKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXN0YXJ0Rm4oKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBtYWtlSW5pdGlhbExpdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGJ1aWxkQ29tbXMsIGNsZWFyLCBpbnN0cnVjdCwgbWVzc2FnZSwgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tICcuL2NvbXNET00nO1xuaW1wb3J0IHsgcGxhY2UgfSBmcm9tICcuL3BsYWNlRmxlZXRET00nO1xuaW1wb3J0IGNyZWF0ZUxlZ2VuZCBmcm9tIFwiLi9sZWdlbmRET01cIjtcblxuLy8gZ2FtZSBsb29wXG4vLyBpbml0aWFsaXplIHcvIHAxIGFuZCBnYW1lYm9hcmQxXG4vLyBwbGFjZSBzaGlwc1xuLy8gY3JlYXRlIHAyIGFuZCBnYW1lYm9hcmQyXG4vLyBwbGFjZSBzaGlwc1xuLy8gdHVybiBsb2dpY1xuLy8gLT4gdGFrZSBjb29yZGluYXRlcywgY29uZmlybSBsZWdhbCBwbGF5IChub3QgcmVwZWF0KVxuLy8gLT4gbGF1bmNoIGF0dGFja1xuLy8gICAgICAtPiBoaXRcbi8vICAgICAgICAgICAgLT4gc3Vuaz9cbi8vICAgICAgICAgICAgICAgIC0+IHllczogLT4gYWxsIHN1bms/XG4vLyAgICAgICAgICAgICAgICAgICAgLT4geWVzOiBlbmQgZ2FtZSAoZGlzcGxheSlcbi8vICAgICAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgIC0+IG1pc3Ncbi8vICAgICAgICAgIC0+IHN3aXRjaCB0dXJuc1xuXG5jb25zdCBwMSA9IFBsYXllckZhY3RvcnkoJ0FsZnJlZG8nKTtcbmNvbnN0IGdiMSA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IxLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMWEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAxYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDFjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYSwgZmFsc2UsIDAsIDApO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWIsIGZhbHNlLCAyLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFjLCBmYWxzZSwgNCwgMCk7XG5cbmNvbnN0IHAyID0gY29tcHV0ZXIoKTtcbmNvbnN0IGdiMiA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IyLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMmEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAyYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDJjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYSwgZmFsc2UsIDUsIDApO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmIsIGZhbHNlLCA3LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJjLCBmYWxzZSwgOSwgMCk7XG5cbi8vIGNyZWF0ZSBwbGF5ZXJzIGFuZCB0aGVpciByZXNwZWN0aXZlIGdhbWVib2FyZFxuY29uc3QgaW5pdGlhbGl6ZSA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gICAgbGV0IHBsYXllcjtcbiAgICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICAgICAgcGxheWVyID0gY29tcHV0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIgPSBQbGF5ZXJGYWN0b3J5KGAke3BsYXllck5hbWV9YCk7XG4gICAgfVxuICAgIGNvbnN0IGdiID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgZ2IuY3JlYXRlKDEwKTtcbiAgICBjb25zdCBmbGVldCA9IGJ1aWxkRmxlZXQoKTtcblxuICAgIHJldHVybiB7IHBsYXllciwgZ2IsIGZsZWV0IH1cbn1cblxuY29uc3QgbG9vcCA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICAgIGxldCBwbGF5ZXJPbmU7XG4gICAgbGV0IHBsYXllclR3bztcbiAgICBsZXQgcGxheWVyQm9hcmRET007XG4gICAgbGV0IGNvbXBCb2FyZERPTTtcbiAgICBjb25zdCBnZXRUdXJuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiBwbGF5ZXJUdXJuID0gIXBsYXllclR1cm47XG4gICAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQxLCBib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMSwgZmFsc2UsICdmcmllbmRseScpKTtcbiAgICAgICAgZGlzcGxheVNoaXBzKGJvYXJkMSwgcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkKTtcbiAgICAgICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkQW5kTGFiZWwoYm9hcmQyLCB0cnVlLCAnZW5lbXknLCBsb29wLnR1cm4pKTtcbiAgICAgICAgLy8gZGlzcGxheVNoaXBzKGJvYXJkMiwgcGFyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgIGNvbXBCb2FyZERPTSA9IHBhcmVudERPTS5sYXN0Q2hpbGQubGFzdENoaWxkO1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKCkpO1xuICAgICAgICBjb20ubWVzc2FnZShwbGF5ZXJPbmUucGxheWVyLCBgbGF1bmNoIGFuIGF0dGFjayFgKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoY2FsbHNpZ24sIHBhcmVudERPTSkgPT4ge1xuICAgICAgICBjb25zdCBwMSA9IGluaXRpYWxpemUoYCR7Y2FsbHNpZ259YCk7XG4gICAgICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAxKTtcbiAgICAgICAgY29uc29sZS5sb2cocDIpO1xuICAgICAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG4gICAgICAgIC8vIGhhdmUgQUkgcGxhY2UgZmxlZXQsIHJhbmRvbWx5XG4gICAgICAgIC8vIG5lZWRzIHRvIGJlIGNoZWNrZWQgISEhXG4gICAgICAgIHAyLnBsYXllci5wbGFjZUZsZWV0KHAyKTtcbiAgICAgICAgLy8gbmVlZHMgdG8gaW52b2tlIGZuIGZvciB1c2VyIHRvIHBsYWNlIHRoZWlyIHNoaXBzLi4uICEhIVxuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRET00pO1xuICAgICAgICBwbGFjZS5zdGFydChwYXJlbnRET00sIHAxLCBwMik7XG47XG4gICAgICAgIC8vIGluaXRpYWwgdHVybiA/XG4gICAgICAgIC8vIG5lZWQgdG8gcGFzcyBpbiBwMS5ib2FyZCBhbmQgcDIuYm9hcmQgKGNoYW5nZSBpbml0aWFsIHR1cm4gZm4pXG4gICAgICAgIGNvbnNvbGUubG9nKHAyLmdiLmJvYXJkKTtcbiAgICBcbiAgICAgICAgcGxheWVyT25lID0gcDE7XG4gICAgICAgIHBsYXllclR3byA9IHAyO1xuICAgICAgICAvLyBuZWVkIHRoaXMgcmV0dXJuIHZhbHVlPyAhISFcbiAgICAgICAgcmV0dXJuIHsgcDEsIHAyIH1cbiAgICB9XG4gICAgY29uc3QgbGF1bmNoR2FtZSA9IChwYXJlbnRET00pID0+IHtcbiAgICAgICAgaW5pdGlhbFR1cm4ocGxheWVyT25lLmdiLCBwbGF5ZXJUd28uZ2IsIHBhcmVudERPTSk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmV3IHBsYXllcnNcbiAgICAgICAgLy8gbmV3IGdhbWVib2FyZHNcbiAgICAgICAgLy8gbmV3IHNoaXAgbG9jYXRpb25zXG4gICAgICAgIC8vIGRpc3BsYXkgXl50aGVzZVxuICAgICAgICAvLyAtPiBnbyB0byBpbml0aWFsIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBwbGFjZSBzaGlwcyBwYWdlLCBuZWVkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gLT4gZ28gdG8gbWFpbiBwYWdlLCBsZXQgYmF0dGxlIGJlZ2luXG4gICAgICAgIC8vIHdoYXQgZWxzZT9cbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnRmbicpOyBcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB7fTtcbiAgICAvLyBkbyBpIG5lZWQgPyAhISFcbiAgICBjb25zdCB0dXJuID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJUdXJuID8gcGxheWVyT25lLnBsYXllciA6IHBsYXllclR3by5wbGF5ZXI7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIC8vIGRvZXMgaXQgbmVlZCBhIGNoZWNrP1xuICAgICAgICBpZiAocGxheWVyVHVybikge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGxheWVyVHdvLmdiLnJlY2VpdmVBdHRhY2soaW5wdXRbMF0sIGlucHV0WzFdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBha2EgdXNlciBjbGlja2VkIG9uIGNvb3JkaW5hdGVzIGZvciBhIHNlY29uZCB0aW1lXG4gICAgICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgdHJ1ZSwgXCJcIik7XG4gICAgICAgICAgICAgICAgLy8gZG9tIGZ1bmN0aW9uIHByb21wdGluZyB1c2VyIHRvIHRyeSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXNlciBjbGlja2VkIG9uIG5ldyBjb29yZGluYXRlcywgdHVybiBjYW4gY29tcGxldGVcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBtb3ZlIG9uIGFpIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgbWFya0NlbGwoaW5wdXRbMF0sIGlucHV0WzFdLCByZXN1bHQsIHBsYXllclR3by5nYiwgY29tcEJvYXJkRE9NLCBcIvCflLFcIik7XG4gICAgICAgICAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgZmFsc2UsIHJlc3VsdC52YWx1ZSwgcmVzdWx0LnN1bmssIHJlc3VsdC5zaGlwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBzdW5rXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBkaWZmZXJlbnQgbWVzc2FnZS4uLlxuICAgICAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhaSBwbGF5ZXIgbWFrZXMgYXR0YWNrXG4gICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBtb3ZlIG9uIHAxIGdhbWVib2FyZFxuICAgICAgICAgICAgcmVzdWx0ID0gcGxheWVyVHdvLnBsYXllci5zbWFydEF0dGFjayhwbGF5ZXJPbmUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIG1hcmtDZWxsKHJlc3VsdC5jb29yZFswXSwgcmVzdWx0LmNvb3JkWzFdLCByZXN1bHQub2JqLCBwbGF5ZXJPbmUuZ2IsIHBsYXllckJvYXJkRE9NLCBcIvCfj7TigI3imKDvuI9cIik7XG4gICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0Lm9iai52YWx1ZSwgcmVzdWx0Lm9iai5zdW5rLCByZXN1bHQub2JqLnNoaXAsIGZhbHNlKTtcbiAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQub2JqO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGxheWVyVHVybiAmJiAoIXJlc3VsdC5hbGxTdW5rKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHVybihmYWxzZSk7IFxuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5hbGxTdW5rKSB7XG4gICAgICAgICAgICAvLyBzd2l0Y2ggdHVybnMgKGJhY2sgdG8gd2lubmluZyBwbGF5ZXIpXG4gICAgICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgICAgICAgLy8gcnVuIGdhbWVvdmVyIGZuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9vcCB0aHJvd2luZyBnYW1lIG92ZXInKTtcbiAgICAgICAgICAgIC8vIG5lZWRzIHJlc3RhcnRGbiAhISFcbiAgICAgICAgICAgIGNvbS5lbmRHYW1lKGN1cnJlbnRQbGF5ZXIsIHJlc3RhcnRGbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2V0VHVybiwgaW5pdGlhbFR1cm4sIGluaXRpYWxpemVHYW1lLCBsYXVuY2hHYW1lLCB0dXJuIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb29wOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tICcuL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vaWNvbnMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCB7IFBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuLy8gYnVpbGQgaW5pdGlhbCBwYWdlXG4vLyBwdCAxIC0gaGVhZGVyIGFuZCBmb290ZXIgXG4vLyBwdCAyIC0gYm9keSAodGl0bGUsIGluc3RydWN0aW9ucywgdXNlciBuYW1lIGlucHV0LCBzdGFydCBidG4pXG5cbi8vXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJUaXRsZSd9KTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRDO1xufVxuLy9cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvb3RlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBmb290ZXJCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9vdGVyQm94XCJ9KTtcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImxpbmtDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nvbm5vcndhcm1lXCIsIFwiYWx0XCI6IFwiR2l0aHViIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdnaXRJY29uJ30pOztcbiAgICBnaXRJY29uLnNyYyA9IEdpdGh1YjtcbiAgICBnaXRJY29uLmFsdCA9IFwiR2l0aHViIFByb2ZpbGVcIjtcbiAgICBjb25zdCBsaW5rTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY29ubm9yLXdhcm1lLTEwM2EwOTE2N1wiLCBcImFsdFwiOiBcIkxpbmtlZEluIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGxpbmtJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnbGlua0ljb24nfSk7XG4gICAgbGlua0ljb24uc3JjID0gTGlua2VkSW47XG4gICAgbGlua0ljb24uYWx0ID0gXCJMaW5rZWRJbiBQcm9maWxlXCI7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0ZXh0Q29udGFpbmVyXCJ9KTtcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQZXJlZ3Jpbm5pbmcgUHJvZHVjdGlvbnNcIjtcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBmb290Qy5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rTGluayk7XG4gICAgbGlua0xpbmsuYXBwZW5kQ2hpbGQobGlua0ljb24pO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBmb290Qztcbn1cbi8vIFxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJtYWluXCJ9KTtcbiAgICBjb25zdCBtYWluQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ21haW5Db250YWluZXInfSk7XG4gICAgY29uc3QgaW5pdGlhbEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbml0aWFsQ29udGVudCd9KTtcbiAgICBjb25zdCBpbmZvQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9uc0NvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnN0cnVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0aW9ucyd9KTtcbiAgICBpbnN0cnVjdC50ZXh0Q29udGVudCA9ICdFbGltaW5hdGUgdGhlIGVuZW15IGZsZWV0ISc7XG4gICAgY29uc3QgaW5wdXRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5wdXRDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHt0eXBlOiAndGV4dCcsIGlkOiAndXNlcm5hbWUnLCBjbGFzczogJ2lucHV0RmllbGQnLCBwbGFjZWhvbGRlcjogJ0FxdWFtYW4g8J+UsSd9KTtcbiAgICBjb25zdCBpbnB1dExhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAndXNlcm5hbWUnfSk7XG4gICAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBQbGF5ZXIgTmFtZTonO1xuICAgIGNvbnN0IHN0YXJ0QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3N0YXJ0Q29udGFpbmVyJ30pO1xuICAgIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnc3RhcnQnfSk7XG4gICAgc3RhcnQudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSEnXG5cbiAgICAvLyBsaXN0ZW5lciBhbmQgaGVscGVyc1xuICAgIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+IGNsZWFyRGl2KG1haW5DKTtcbiAgICBcbiAgICBjb25zdCBzdGFydEZuID0gKCkgPT4ge1xuICAgICAgICAvLyBuZWVkIGEgY2hlY2sgaWYgaW5wdXQgaXMgZW1wdHkgISEhXG4gICAgICAgIFxuICAgICAgICBsZXQgY2FsbHNpZ24gPSAnQXF1YW1hbiDwn5SxJztcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBjYWxsc2lnbiA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIG1haW4gY29udGFpbmVyIC0+IHByZXAgZm9yIGJvYXJkIGRpc3BsYXlcbiAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgZ2FtZSBsb29wP1xuICAgICAgICAvLyBsb29wLmluaXRpYWxUdXJuKG1haW5DKTtcbiAgICAgICAgbG9vcC5pbml0aWFsaXplR2FtZShjYWxsc2lnbiwgbWFpbkMpO1xuICAgIH1cbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRGbigpO1xuICAgIH0pXG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQyk7XG4gICAgbWFpbkMuYXBwZW5kQ2hpbGQoaW5pdGlhbEMpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGluZm9DKTtcbiAgICBpbmZvQy5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5wdXRDKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChzdGFydEMpO1xuICAgIHN0YXJ0Qy5hcHBlbmRDaGlsZChzdGFydCk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuLy9cbmNvbnN0IG1ha2VJbml0aWFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2JvZHknfSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChjb20uYnVpbGRDb21tcygpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYm9keSk7XG59XG5jb25zdCBtYWtlSW5pdGlhbExpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ib2R5Jyk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUoY29tLmJ1aWxkQ29tbXMoKSwgYm9keS5jaGlsZHJlblsxXSk7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUobWFpbkNvbnRlbnQoKSwgYm9keS5jaGlsZHJlblsyXSk7XG59XG5leHBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcblxuLy8gYnVpbGQgbGVnZW5kIHRvIGV4cGxhaW4gZW1vamlzLCBwcm92aWRlIGRldGFpbGVkIGluc3RydWN0aW9uc1xuY29uc3Qgc2hpcCA9IHtcbiAgICBlbW9qaTogXCIgXCIsXG4gICAgdGV4dDogXCJmcmllbmRseSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic2hpcFwiXG59XG5jb25zdCB3YXZlID0ge1xuICAgIGVtb2ppOiBcIvCfjIpcIixcbiAgICB0ZXh0OiBcImF0dGFjayBtaXNzXCIsXG4gICAgY2xhc3M6IFwibWlzc1wiXG59XG5jb25zdCBoaXQgPSB7XG4gICAgZW1vamk6IFwi8J+UpVwiLFxuICAgIHRleHQ6IFwiYXR0YWNrIGhpdFwiLFxuICAgIGNsYXNzOiBcImhpdFwiXG59XG5jb25zdCBzdW5rID0ge1xuICAgIGVtb2ppOiBcIvCflLFcIixcbiAgICB0ZXh0OiBcInlvdSBzdW5rIGVuZW15IHNoaXBcIixcbiAgICBjbGFzczogXCJzdW5rXCJcbn1cbmNvbnN0IGVuZW15U3VuayA9IHtcbiAgICBlbW9qaTogXCLwn4+04oCN4pig77iPXCIsXG4gICAgdGV4dDogXCJlbmVteSBzdW5rIGZyaWVuZGx5IHNoaXBcIixcbiAgICBjbGFzczogXCJzdW5rXCJcbn1cbmNvbnN0IGVtb2ppQXJyYXkgPSBbc2hpcCwgd2F2ZSwgaGl0LCBzdW5rLCBlbmVteVN1bmtdO1xuXG5jb25zdCBjcmVhdGVMZWdlbmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbGVnZW5kQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGxlZ2VuZEJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2xlZ2VuZEJveCd9KTtcbiAgICBsZWdlbmRCb3gudGV4dENvbnRlbnQgPSBcIkxlZ2VuZDpcIjtcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlRWxlbWVudCgndWwnLCB7Y2xhc3M6ICdsZWdlbmRMaXN0J30pO1xuICAgIGVtb2ppQXJyYXkuZm9yRWFjaChlbW9qaSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudCgnbGknLCB7Y2xhc3M6ICdlbW9qaUxpJ30pO1xuICAgICAgICBjb25zdCBib3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBlbW9qaUJveCAke2Vtb2ppLmNsYXNzfWB9KTtcbiAgICAgICAgYm94LnRleHRDb250ZW50ID0gYCR7ZW1vamkuZW1vaml9YDtcbiAgICAgICAgY29uc3QgdGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Vtb2ppVGV4dCd9KTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGAtICR7ZW1vamkudGV4dH1gO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSlcbiAgICBsZWdlbmRCb3guYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxlZ2VuZEJveCk7IFxuICAgIGNvbnN0IGluc3RydWN0Qm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3RCb3gnfSk7XG4gICAgaW5zdHJ1Y3RCb3gudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIjtcbiAgICBjb25zdCBpbnN0cnVjdFRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdFRleHQnfSk7XG4gICAgaW5zdHJ1Y3RUZXh0LnRleHRDb250ZW50ID0gJ1NlbGVjdCBjb29yZGluYXRlcyBpbiBlbmVteSB3YXRlcnMgdG8gbGF1bmNoIGFuIGF0dGFjay4gVGhlIGJvYXJkIHdpbGwgaW5kaWNhdGUgYSBoaXQgb3IgbWlzcywgb3IgaWYgeW91IHN1bmsgdGhlIGVuZW15IHNoaXAuIEZpbmQgYW5kIGVsaW1pbmF0ZSBhbGwgZml2ZSBlbmVteSBzaGlwcyBiZWZvcmUgdGhleSBlbGltaW5hdGUgeW91cnMhJ1xuICAgIGNvbnN0IG9iamVjdGl2ZUJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ29iamVjdGl2ZUJveCd9KTtcbiAgICBvYmplY3RpdmVCb3gudGV4dENvbnRlbnQgPSAnT2JqZWN0aXZlOic7XG4gICAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ29iamVjdGl2ZVRleHQnfSk7XG4gICAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9ICdTaW5rIHRoZSBlbmVteSBmbGVldCEnO1xuICAgIG9iamVjdGl2ZUJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQm94KTtcbiAgICBpbnN0cnVjdEJveC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdEJveCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMZWdlbmQ7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcyB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tICcuL2NvbXNET00nO1xuaW1wb3J0IGxvb3AgZnJvbSAnLi9nYW1lbG9vcCc7XG5cbmNvbnN0IHBsYWNlID0gKCgpID0+IHtcbiAgICBsZXQgYXhpcyA9IHRydWU7XG4gICAgY29uc3QgY3VycmVudEF4aXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBheGlzO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVEaXNwbGF5ID0gKG9wcG9uZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJwbGFjZUNvbnRhaW5lclwifSk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUJ0bkNvbnRhaW5lcid9KTtcbiAgICAgICAgY29uc3QgYXhpc0J0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ2F4aXNCdG4nfSk7XG4gICAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgQXhpczogWGBcbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgICAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUluc3RydWN0aW9ucyd9KTtcbiAgICAgICAgaW5zdHJ1Y3QudGV4dENvbnRlbnQgPSBcIkludGVsOiByb3RhdGUgY3VycmVudCBzaGlwIG9yIHJhbmRvbWx5IGRlcGxveSBlbnRpcmUgZmxlZXQuXCJcblxuICAgICAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBheGlzID0gIWF4aXM7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGF4aXMgPyAnWCcgOiAnWSc7XG4gICAgICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYEF4aXM6ICR7dGV4dH1gO1xuICAgICAgICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgYm9hcmRcbiAgICAgICAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgLy8gYnVpbGQgbmV3IGJvYXJkIHcvIGNvcnJlY3QgbGlzdGVuZXJzXG4gICAgICAgICAgICBwZXJTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRCb2FyZCwgY3VycmVudFNoaXApO1xuICAgICAgICB9KVxuICAgICAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBvcHBvbmVudC5wbGF5ZXIucGxhY2VGbGVldChjdXJyZW50T2JqKTtcbiAgICAgICAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQyk7XG4gICAgICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQoYXhpc0J0bik7XG4gICAgICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBcbiAgICBjb25zdCBjaGVja0NlbGwgPSAoZ2FtZWJvYXJkLCBzaGlwLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbiAgICAgICAgZ2FtZWJvYXJkLmNoZWNrUGxhY2Uoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGhpZ2hsaWdodExlbmd0aCA9IChlbGVtZW50LCBsZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuaWQpO1xuICAgICAgICBsZXQgbmV3SWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSBgJHtOdW1iZXIoY29vcmRbMF0pK2l9JHtjb29yZFsxXX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGAke2Nvb3JkWzBdfSR7TnVtYmVyKGNvb3JkWzFdKStpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmV3SWQpO1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNsYXRlZ3JheVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrRm4gPSAoeCwgeSkgPT4ge1xuICAgICAgICBjdXJyZW50T2JqLmdiLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgYXhpcywgeCwgeSk7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICBuZXh0U2hpcChjdXJyZW50RE9NLCBjdXJyZW50T2JqKTtcbiAgICB9XG4gICAgY29uc3QgY2xpY2tBdHRhY2sgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgICAgIGlmIChjaGVja0NlbGwoZ2FtZWJvYXJkLCBzaGlwLCBjdXJyZW50QXhpcygpLCB4LCB5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGlja0ZuKHgsIHkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBob3ZlciA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAgICAgLy8gb24gZW50ZXIsIGhpZ2hsaWdodFxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb3VsZCBhZGQgYSBjbGFzcy4uLlxuICAgICAgICAgICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRMZW5ndGgoZWxlbWVudCwgc2hpcC5sZW5ndGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jZWxsJykpO1xuICAgICAgICAgICAgZ3JpZC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBhZGRDZWxsTGlzdGVuZXJzID0gKGdhbWVib2FyZCwgc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jZWxsJykpO1xuICAgICAgICBjZWxsQXJyYXkuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMCkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgxKSk7XG4gICAgICAgICAgICBob3ZlcihjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICAgICAgY2xpY2tBdHRhY2soY2VsbCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRPYmo7XG4gICAgbGV0IGN1cnJlbnRCb2FyZDtcbiAgICBsZXQgY3VycmVudFNoaXA7XG4gICAgbGV0IGZsZWV0S2V5cztcbiAgICBsZXQgY3VycmVudERPTTtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IHVwZGF0ZUFsbEN1cnJlbnRzID0gKHBhcmVudCwgb2JqZWN0KSA9PiB7XG4gICAgICAgIGN1cnJlbnRET00gPSBwYXJlbnQ7XG4gICAgICAgIGN1cnJlbnRPYmogPSBvYmplY3Q7XG4gICAgICAgIGN1cnJlbnRCb2FyZCA9IG9iamVjdC5nYjtcbiAgICAgICAgZmxlZXRLZXlzID0gZmxlZXRLZXlzID0gT2JqZWN0LmtleXMob2JqZWN0LmZsZWV0KTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlQ3VycmVudFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG4gICAgfVxuICAgIGNvbnN0IG5leHRTaGlwID0gKHBhcmVudERPTSwgcGxheWVyT2JqKSA9PiB7XG4gICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgIGNvbS5pbnN0cnVjdChwbGF5ZXJPYmoucGxheWVyLCBmbGVldEtleXNbY291bnRdKTtcbiAgICAgICAgICAgIHBlclNoaXAocGFyZW50RE9NLCBwbGF5ZXJPYmouZ2IsIHBsYXllck9iai5mbGVldFtmbGVldEtleXNbY291bnRdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbmV4dCBzdGVwIG9mIGdhbWVsb29wIScpO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGVyU2hpcCA9IChwYXJlbnRET00sIHBsYXllckJvYXJkLCBzaGlwKSA9PiB7XG4gICAgICAgIHVwZGF0ZUN1cnJlbnRTaGlwKHNoaXApO1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXJCb2FyZCwgZmFsc2UpKTtcbiAgICAgICAgZGlzcGxheVNoaXBzKGN1cnJlbnRCb2FyZCwgY3VycmVudERPTS5jaGlsZHJlblswXSk7XG4gICAgICAgIGFkZENlbGxMaXN0ZW5lcnMocGxheWVyQm9hcmQsIHNoaXApO1xuICAgIH1cbiAgICBjb25zdCBzdGFydCA9IChwYXJlbnRET00sIHBsYXllck9iaiwgb3Bwb25lbnRPYmopID0+IHtcbiAgICAgICAgcGFyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChjcmVhdGVEaXNwbGF5KG9wcG9uZW50T2JqKSk7XG4gICAgICAgIHVwZGF0ZUFsbEN1cnJlbnRzKHBhcmVudERPTSwgcGxheWVyT2JqKTtcbiAgICAgICAgbmV4dFNoaXAocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICAgIH1cbiAgICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgICAgIGNvbS5jbGVhcigpO1xuICAgICAgICAvLyBpbnZva2UgZ2FtZWxvb3Agc3RlcDIgLT4gd2hlcmUgMiBib2FyZHMgYXJlIGRpc3BsYXllZFxuICAgICAgICAvLyBhIHdheSB0byB0cmFuc2l0aW9uIHRoaXMgKGVhc2UtaW4pPyAhISFcbiAgICAgICAgbG9vcC5sYXVuY2hHYW1lKGN1cnJlbnRET00pO1xuICAgIH1cbiAgICByZXR1cm4geyBob3Zlciwgc3RhcnQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBsYWNlIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5cbmNvbnN0IFBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFdpbiA9ICgpID0+IHdpbnMgKz0gMTtcbiAgICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn1cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFpID0gUGxheWVyRmFjdG9yeSgnVGhlIEtyYWtlbicpO1xuICAgIGNvbnN0IG5ld1Byb2IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgcHJvYi5jcmVhdGUoMTApO1xuICAgICAgICByZXR1cm4gcHJvYjtcbiAgICB9XG4gICAgY29uc3Qgc2hvdCA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIHNob3QuY3JlYXRlKDEwKTtcblxuICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IF9nZW5lcmF0ZUNvb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgd2hpbGUgKCEoX2F2YWlsYWJsZShjb29yZCkpKSB7XG4gICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZDtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbiAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGlmIChheGlzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gaSB0aGluayB0aGlzIGNhbiBiZSB1c2VkIGZvciBlaXRoZXIgcGxheWVyLi4ubWF5YmUgbWFrZSBhIGJ1dHRvbiBmb3IgdXNlciAoaW4gaW5pdGlhbCkgISEhXG4gICAgICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgICAgIGZsZWV0S2V5cy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB3aGlsZSAoIShwbGF5ZXIuZ2IucGxhY2VTaGlwKHBsYXllci5mbGVldFtzaGlwXSwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpdENvb3Jkc0FycmF5ID0gW107XG4gICAgY29uc3QgX2FkZFRvSGl0Q29vcmRzID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGhpdENvb3Jkc0FycmF5LnB1c2goaW5wdXQpO1xuICAgICAgICAvLyByZXR1cm4gaGl0Q29vcmRzQXJyYXk7ID8/ICEhISBkbyBpIG5lZWQgdGhpcyB0byBiZSByZXR1cm5lZD9cbiAgICB9XG4gICAgY29uc3QgX2NsZWFySGl0Q29vcmRzID0gKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGhpdENvb3Jkc0FycmF5LmZpbmRJbmRleCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVswXSA9PSBjb29yZFswXSAmJiB2YWx1ZVsxXSA9PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBoaXRDb29yZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZVNob3RCb2FyZCA9IChvYmplY3QsIHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IG9iamVjdC5jb29yZDtcbiAgICAgICAgaWYgKG9iamVjdC5vYmoudmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmouc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5nYi53aGljaFNoaXAob2JqZWN0Lm9iai5zaGlwKTtcbiAgICAgICAgICAgICAgICBfY2xlYXJIaXRDb29yZHMoc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9hZGRUb0hpdENvb3Jkcyhjb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG90LmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX2FkZFRvUHJvYkJvYXJkID0gKGdiLCBwcm9iQm9hcmQsIGxlbmd0aCwgYm9vbGVhbiwgeCwgeSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlcldlaWdodCA9IGdiLmNoZWNrUHJvYihsZW5ndGgsIGJvb2xlYW4sIHgsIHksIGhpdENvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW051bWJlcih4KStpXVt5XSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9iQm9hcmRbeF1bTnVtYmVyKHkpK2ldICs9IGNvdW50ZXJXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3JlbW92ZUhpdHMoZ2IsIHByb2JCb2FyZCk7XG4gICAgfVxuICAgIC8vIGV2YWx1YXRlIGhvdyB0byBpbXByb3ZlIGNoZWNrUGxhY2UgZm9yIFwiaHVudCBtb2RlXCJcblxuICAgIGNvbnN0IF9yZW1vdmVIaXRzID0gKGdiLCBwcm9iQm9hcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdiLmJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9iQm9hcmRbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfc2hpcFByb2IgPSAoZ2IsIHNoaXAsIHByb2IpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaikpIHx8IFxuICAgICAgICAgICAgICAgIChnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopIHx8IFxuICAgICAgICAgICAgICAgIGdiLmNoZWNrTWlzcyhzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopKSkge1xuICAgICAgICAgICAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9mbGVldFByb2IgPSAoYm9hcmQsIGZsZWV0LCBwcm9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZmxlZXQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgLy8gZG9lcyB0aGlzIG5lZWQgdG8gcnVuIFwiaXNTdW5rXCIgaW4gb3JkZXIgdG8gZ2V0IHVwZGF0ZWQgc3VuayB2YWx1ZT8gXG4gICAgICAgICAgICBpZiAoIShmbGVldFtzaGlwXS5zdW5rKSlcbiAgICAgICAgICAgIF9zaGlwUHJvYihib2FyZCwgZmxlZXRbc2hpcF0sIHByb2IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2V0UHJvYkNvb3JkcyA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50TWF4ID0ge1xuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA+IGN1cnJlbnRNYXgubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXgubWF4ID0gYm9hcmRbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXguY29vcmRzID0gW2ksIGpdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudE1heDsgLy8gc2hvdWxkIHRoaXMganVzdCBiZSBjb29yZGluYXRlcyBvciByZXR1cm4gdGhlIHdob2xlIG9iaj8gISEhXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgc21hcnRBSSBhdHRhY2sgbW9kZTpcbiAgICBjb25zdCBzbWFydEF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvYiA9IG5ld1Byb2IoKTtcbiAgICAgICAgLy8gdXBkYXRlZCBwcm9iYWJpbGl0eSBib2FyZDsgbmVlZHMgYWNjZXNzIHRvIHVzZXIncyBmbGVldC4uPyBvciBtYWtlIGEgY29weSBmb3IgdGhlIHByb2JCb2FyZCwgdXBkYXRlIHJlZ3VsYXJseSAhISFcbiAgICAgICAgX2ZsZWV0UHJvYihzaG90LCBwbGF5ZXIuZmxlZXQsIHByb2IpO1xuICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgYmVzdCBjZWxsXG4gICAgICAgIGNvbnN0IGNvb3JkID0gX2dldFByb2JDb29yZHMocHJvYi5ib2FyZCk7XG4gICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gdGhvc2UgY29vcmRzXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBvYmouY29vcmQgPSBjb29yZC5jb29yZHM7XG4gICAgICAgIG9iai5vYmogPSBwbGF5ZXIuZ2IucmVjZWl2ZUF0dGFjayhvYmouY29vcmRbMF0sIG9iai5jb29yZFsxXSk7XG4gICAgICAgIC8vIGNoZWNrIGF0dGFjayBpbnRlbDogaGl0IG9yIG1pc3MsIHN1bms/XG4gICAgICAgIF91cGRhdGVTaG90Qm9hcmQob2JqLCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAvL1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFpLCB7IHJhbmRvbUF0dGFjayB9LCB7IHNtYXJ0QXR0YWNrIH0sIHsgcGxhY2VGbGVldCB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBtYXJrZXIgPSBsZW5ndGg7XG4gICAgaWYgKG1hcmspIHtcbiAgICAgICAgbWFya2VyID0gbWFyaztcbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4gICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbiAgICAgICAgaGl0KCk7XG4gICAgICAgIHJldHVybiBpc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGNvb3JkcywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG59O1xuY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICAgIHJldHVybiB7IHN1Ym1hcmluZSwgcGF0cm9sLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfVxufVxuXG5leHBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9OyIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5pdGlhbERPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==