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
        if (_checkOnBoard(object.length, axis, x, y) || 
        _checkPlace(object.length, axis, x, y)) {
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
    const initialTurn = (board2, parentDOM) => {
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(gb1, false));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(gb1, parentDOM.firstChild);
        playerBoardDOM = parentDOM.firstChild;
        parentDOM.appendChild((0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.buildBoard)(board2, true));
        (0,_boardDOM__WEBPACK_IMPORTED_MODULE_3__.displayShips)(board2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild;
    }
    const startGame = (callsign, parentDOM) => {
        const p1 = initialize(`${callsign}`);
        const p2 = initialize(false);
        console.log(p1);
        console.log(p2);
        // have AI place fleet, randomly
        // needs to be checked !!!
        p2.player.placeFleet(p2);
        // needs to invoke fn for user to place their ships...
        // initial turn ?
        // need to pass in p1.board and p2.board (change initial turn fn)
        console.log(p2.gb.board);
        initialTurn(p2.gb, parentDOM)
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
    const _randomAxis = () => {
        const axis = Math.floor(Math.random * 2);
        if (axis == 0) {
            return true;
        }
        return false;
    }
    const placeFleet = (player) => {
        let axis = _randomAxis();
        let coord = _generateRandomAttack();
        // for each ship, randomly generate coordinates and axis
        const fleetArray = Array.from(player.fleet);
        fleetArray.forEach(ship => {
            while (!(player.gb.placeShip(ship, axis, coord[0], coord[1]))) {
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameloop.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ25FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2FyZCBsb2dpY1xuXG5jb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoX2NoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fCBcbiAgICAgICAgX2NoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeCtpXVt5XSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIH19IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8b2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbeF1beStpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3graV1beV0gPiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5K2ldID4gMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcnJheS5maW5kKGluZGV4ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChheGlzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3doaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoaW5kZXggPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gICAgfVxuICAgIC8vIHByZXR0eSBzdXJlIGFsbFN1bmsgaXMgd29ya2luZywgXG4gICAgLy8gYnV0IEkgZGlkbid0IG1hbmlwdWxhdGUgdGhlIGJvYXJkIHRvIGhhdmUgYWxsIHRoZSBzaGlwcyBzdW5rIHRvIHRlc3QgaXQgZnlpICEhIVxuICAgIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoaW5kZXggPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IGJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgICAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICAgICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZVNoaXAgPSBfd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICAgICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgICAgICBfdXBkYXRlQm9hcmQoeCwgeSwgKGJvYXJkW3hdW3ldICsgMTApKTtcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAoc3Vuaykge1xuICAgICAgICAgICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgb3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGZpcmUgZ2FtZU92ZXIgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hhdCBhbGwgaXMgbmVlZGVkIGluc2lkZT9cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICAgICAgICAvLyBjaGVjayB3aGljaCBzaGlwIGl0IGlzXG4gICAgICAgICAgICAvLyBydW4gaGl0KCkgb24gdGhhdCBzaGlwXG4gICAgICAgICAgICAvLyBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IC0gc2VuZCB0byBET00gZm4gdG8gdXBkYXRlIGRpc3BsYXk/XG4gICAgICAgICAgICAvLyB0aGlua2luZyB0aGF0IHlvdSBjYWxsIGEgRE9NIGZuIHdpdGggXCJzdW5rXCIgYm9vbGVhbi4uICEhIVxuICAgICAgICAgICAgLy8gdXBkYXRlIGJvYXJkXG4gICAgICAgICAgICAvLyBzZW5kIHNpZ25hbCB0byBET00gdG8gdXBkYXRlIGdyaWQgd2l0aCBoaXQgbWFyayAhISFcbiAgICAgICAgICAgIC8vIG5lZWRzIHRvIHN3aXRjaCB0dXJucyAhISFcbiAgICAgICAgICAgIC8vIGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICAgICAgICBvYmoudmFsdWUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhZGQgbWlzcyB0byBhcnJheVxuICAgICAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAgICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgICAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gc2VuZCBzaWduYWwgdG8gRE9NIGZ1bmN0aW9uIHRvIHVwZGF0ZSBncmlkIHdpdGggbWlzcyBtYXJrICEhIVxuICAgICAgICAgICAgLy8gbmVlZHMgdG8gc3dpdGNoIHR1cm5zICEhIVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgICAgICB9IFxuICAgICAgICAvLyBuZWVkIHRvIGxvb3AgYmFjayAtPiBuZWVkIHVzZXIgdG8gZ2l2ZSBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgb2JqLnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9ICAgXG4gICAgcmV0dXJuIHsgYm9hcmQsIGNyZWF0ZSwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gICAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGlzcGxheUJvYXJkJ30pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gfSk7XG4gICAgICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWB9KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvb3AudHVybihbaSwgal0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzcGxheUJvYXJkO1xufVxuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaTxib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIGJvb2xlYW4sIGJvYXJkRE9NKSA9PiB7XG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsIH07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbWFrZUluaXRpYWwgZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbUNvbnRhaW5lcid9KTtcblxuICAgIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnY29tbXMnfSk7XG4gICAgICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGNvbW1zIGdvIGhlcmVgO1xuICAgICAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgICAgIHJldHVybiBjb21tQztcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gWydlbXB0eScsICdzdWJtYXJpbmUnLCAncGF0cm9sIGJvYXQnLCAnY3J1aXNlcicsICdkZXN0cm95ZXInLCAnYmF0dGxlIGNhcnJpZXInXTtcbiAgICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbezA6ICd5b3UnLCAxOiAndGhlaXInfSwgezA6ICd0aGV5JywgMTogJ3lvdXInfV07XG4gICAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmBcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgOiBgbWlzc2VzIWBcbiAgICAgICAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyLCByZXN0YXJ0Rm4pID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICAgICAgY2xlYXJEaXYobWFpbkMpO1xuICAgICAgICAvLyBidWlsZCBjb250ZW50XG4gICAgICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbmRDb250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Jhbm5lcid9KTtcbiAgICAgICAgYmFubmVyLnRleHRDb250ZW50ID0gJ0dhbWUgT3ZlciEnXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3dpbm5lcid9KTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICAgICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncGxheUFnYWluJ30pO1xuICAgICAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgICAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICAgICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgICAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjbGVhciBtYWluIGNvbnRlbnRcbiAgICAgICAgICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXN0YXJ0Rm4oKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBtYWtlSW5pdGlhbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnVpbGRDb21tcywgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcblxuLy8gZ2FtZSBsb29wXG4vLyBpbml0aWFsaXplIHcvIHAxIGFuZCBnYW1lYm9hcmQxXG4vLyBwbGFjZSBzaGlwc1xuLy8gY3JlYXRlIHAyIGFuZCBnYW1lYm9hcmQyXG4vLyBwbGFjZSBzaGlwc1xuLy8gdHVybiBsb2dpY1xuLy8gLT4gdGFrZSBjb29yZGluYXRlcywgY29uZmlybSBsZWdhbCBwbGF5IChub3QgcmVwZWF0KVxuLy8gLT4gbGF1bmNoIGF0dGFja1xuLy8gICAgICAtPiBoaXRcbi8vICAgICAgICAgICAgLT4gc3Vuaz9cbi8vICAgICAgICAgICAgICAgIC0+IHllczogLT4gYWxsIHN1bms/XG4vLyAgICAgICAgICAgICAgICAgICAgLT4geWVzOiBlbmQgZ2FtZSAoZGlzcGxheSlcbi8vICAgICAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgICAgICAgICAgICAtPiBubzogc3dpdGNoIHR1cm5zXG4vLyAgICAgIC0+IG1pc3Ncbi8vICAgICAgICAgIC0+IHN3aXRjaCB0dXJuc1xuXG5jb25zdCBwMSA9IFBsYXllckZhY3RvcnkoJ0FsZnJlZG8nKTtcbmNvbnN0IGdiMSA9IEJvYXJkRmFjdG9yeSgpO1xuZ2IxLmNyZWF0ZSgxMCk7XG5jb25zdCBzaGlwMWEgPSBTaGlwRmFjdG9yeSg1KTtcbmNvbnN0IHNoaXAxYiA9IFNoaXBGYWN0b3J5KDQpO1xuY29uc3Qgc2hpcDFjID0gU2hpcEZhY3RvcnkoMyk7XG5nYjEucGxhY2VTaGlwKHNoaXAxYSwgZmFsc2UsIDAsIDApO1xuZ2IxLnBsYWNlU2hpcChzaGlwMWIsIGZhbHNlLCAyLCAwKTtcbmdiMS5wbGFjZVNoaXAoc2hpcDFjLCBmYWxzZSwgNCwgMCk7XG5jb25zb2xlLmxvZyhnYjEuYm9hcmQpO1xuXG5jb25zdCBwMiA9IGNvbXB1dGVyKCk7XG5jb25zdCBnYjIgPSBCb2FyZEZhY3RvcnkoKTtcbmdiMi5jcmVhdGUoMTApO1xuY29uc3Qgc2hpcDJhID0gU2hpcEZhY3RvcnkoNSk7XG5jb25zdCBzaGlwMmIgPSBTaGlwRmFjdG9yeSg0KTtcbmNvbnN0IHNoaXAyYyA9IFNoaXBGYWN0b3J5KDMpO1xuZ2IyLnBsYWNlU2hpcChzaGlwMmEsIGZhbHNlLCA1LCAwKTtcbmdiMi5wbGFjZVNoaXAoc2hpcDJiLCBmYWxzZSwgNywgMCk7XG5nYjIucGxhY2VTaGlwKHNoaXAyYywgZmFsc2UsIDksIDApO1xuXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICAgIGxldCBwbGF5ZXI7XG4gICAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgICAgIHBsYXllciA9IGNvbXB1dGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyID0gUGxheWVyRmFjdG9yeShgJHtwbGF5ZXJOYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIGdiLmNyZWF0ZSgxMCk7XG4gICAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9XG59XG5cbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBsZXQgcGxheWVyQm9hcmRET007XG4gICAgbGV0IGNvbXBCb2FyZERPTTtcbiAgICBjb25zdCBzd2l0Y2hUdXJucyA9ICgpID0+IHBsYXllclR1cm4gPSAhcGxheWVyVHVybjtcbiAgICBjb25zdCBpbml0aWFsVHVybiA9IChib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgICAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChnYjEsIGZhbHNlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhnYjEsIHBhcmVudERPTS5maXJzdENoaWxkKTtcbiAgICAgICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZDtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQoYm9hcmQyLCB0cnVlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhib2FyZDIsIHBhcmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkO1xuICAgIH1cbiAgICBjb25zdCBzdGFydEdhbWUgPSAoY2FsbHNpZ24sIHBhcmVudERPTSkgPT4ge1xuICAgICAgICBjb25zdCBwMSA9IGluaXRpYWxpemUoYCR7Y2FsbHNpZ259YCk7XG4gICAgICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHAxKTtcbiAgICAgICAgY29uc29sZS5sb2cocDIpO1xuICAgICAgICAvLyBoYXZlIEFJIHBsYWNlIGZsZWV0LCByYW5kb21seVxuICAgICAgICAvLyBuZWVkcyB0byBiZSBjaGVja2VkICEhIVxuICAgICAgICBwMi5wbGF5ZXIucGxhY2VGbGVldChwMik7XG4gICAgICAgIC8vIG5lZWRzIHRvIGludm9rZSBmbiBmb3IgdXNlciB0byBwbGFjZSB0aGVpciBzaGlwcy4uLlxuICAgICAgICAvLyBpbml0aWFsIHR1cm4gP1xuICAgICAgICAvLyBuZWVkIHRvIHBhc3MgaW4gcDEuYm9hcmQgYW5kIHAyLmJvYXJkIChjaGFuZ2UgaW5pdGlhbCB0dXJuIGZuKVxuICAgICAgICBjb25zb2xlLmxvZyhwMi5nYi5ib2FyZCk7XG4gICAgICAgIGluaXRpYWxUdXJuKHAyLmdiLCBwYXJlbnRET00pXG4gICAgICAgIHJldHVybiB7IHAxLCBwMiB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3RhcnRGbiA9ICgpID0+IHtcbiAgICAgICAgLy8gbmV3IHBsYXllcnNcbiAgICAgICAgLy8gbmV3IGdhbWVib2FyZHNcbiAgICAgICAgLy8gbmV3IHNoaXAgbG9jYXRpb25zXG4gICAgICAgIC8vIGRpc3BsYXkgXl50aGVzZVxuICAgICAgICAvLyAtPiBnbyB0byBpbml0aWFsIHBhZ2UsIG5lZWQgdXNlciBpbnB1dFxuICAgICAgICAvLyAtPiBnbyB0byBwbGFjZSBzaGlwcyBwYWdlLCBuZWVkIHVzZXIgaW5wdXRcbiAgICAgICAgLy8gLT4gZ28gdG8gbWFpbiBwYWdlLCBsZXQgYmF0dGxlIGJlZ2luXG4gICAgICAgIC8vIHdoYXQgZWxzZT9cbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RhcnRmbicpOyBcbiAgICB9XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB7fTtcbiAgICAvLyBkbyBpIG5lZWQgPyAhISFcbiAgICBsZXQgY3VycmVudFJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHR1cm4gPSAoaW5wdXQpID0+IHtcbiAgICAgICAgY3VycmVudFBsYXllciA9IHBsYXllclR1cm4gPyBwMSA6IHAyO1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAvLyBkb2VzIGl0IG5lZWQgYSBjaGVjaz9cbiAgICAgICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGdiMi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWthIHVzZXIgY2xpY2tlZCBvbiBjb29yZGluYXRlcyBmb3IgYSBzZWNvbmQgdGltZVxuICAgICAgICAgICAgICAgIGNvbS51cGRhdGVUZXh0KGN1cnJlbnRQbGF5ZXIsIHRydWUsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIGRvbSBmdW5jdGlvbiBwcm9tcHRpbmcgdXNlciB0byB0cnkgbmV3IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiBuZXcgY29vcmRpbmF0ZXMsIHR1cm4gY2FuIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSBvbiBhaSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdC52YWx1ZSwgY29tcEJvYXJkRE9NKTtcbiAgICAgICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0LnZhbHVlLCByZXN1bHQuc3VuaywgcmVzdWx0LnNoaXAsIHRydWUpO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHN1bmtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGRpZmZlcmVudCBtZXNzYWdlLi4uXG4gICAgICAgICAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGFpIHBsYXllciBtYWtlcyBhdHRhY2tcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUgb24gcDEgZ2FtZWJvYXJkXG4gICAgICAgICAgICByZXN1bHQgPSBwMi5hdHRhY2soZ2IxKTtcbiAgICAgICAgICAgIG1hcmtDZWxsKHJlc3VsdC5jb29yZFswXSwgcmVzdWx0LmNvb3JkWzFdLCByZXN1bHQub2JqLnZhbHVlLCBwbGF5ZXJCb2FyZERPTSk7XG4gICAgICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCBmYWxzZSwgcmVzdWx0Lm9iai52YWx1ZSwgcmVzdWx0Lm9iai5zdW5rLCByZXN1bHQub2JqLnNoaXAsIGZhbHNlKTtcbiAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwbGF5ZXJUdXJuICYmICghcmVzdWx0LmFsbFN1bmspKSB7XG4gICAgICAgICAgICB0dXJuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmFsbFN1bmspIHtcbiAgICAgICAgICAgIC8vIHN3aXRjaCB0dXJucyAoYmFjayB0byB3aW5uaW5nIHBsYXllcilcbiAgICAgICAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAgICAgICAvLyBydW4gZ2FtZW92ZXIgZm5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29wIHRocm93aW5nIGdhbWUgb3ZlcicpO1xuICAgICAgICAgICAgLy8gbmVlZHMgcmVzdGFydEZuICEhIVxuICAgICAgICAgICAgY29tLmVuZEdhbWUoY3VycmVudFBsYXllciwgcmVzdGFydEZuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBpbml0aWFsVHVybiwgc3RhcnRHYW1lLCB0dXJuIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBsb29wOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tICcuL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vaWNvbnMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCB7IFBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuLy8gYnVpbGQgaW5pdGlhbCBwYWdlXG4vLyBwdCAxIC0gaGVhZGVyIGFuZCBmb290ZXIgXG4vLyBwdCAyIC0gYm9keSAodGl0bGUsIGluc3RydWN0aW9ucywgdXNlciBuYW1lIGlucHV0LCBzdGFydCBidG4pXG5cbi8vXG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJUaXRsZSd9KTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRDO1xufVxuLy9cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290QyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2Zvb3RlckNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBmb290ZXJCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9vdGVyQm94XCJ9KTtcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImxpbmtDb250YWluZXJcIn0pO1xuICAgIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nvbm5vcndhcm1lXCIsIFwiYWx0XCI6IFwiR2l0aHViIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdnaXRJY29uJ30pOztcbiAgICBnaXRJY29uLnNyYyA9IEdpdGh1YjtcbiAgICBnaXRJY29uLmFsdCA9IFwiR2l0aHViIFByb2ZpbGVcIjtcbiAgICBjb25zdCBsaW5rTGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vY29ubm9yLXdhcm1lLTEwM2EwOTE2N1wiLCBcImFsdFwiOiBcIkxpbmtlZEluIFByb2ZpbGVcIiwgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIn0pO1xuICAgIGNvbnN0IGxpbmtJY29uID0gY3JlYXRlRWxlbWVudCgnaW1nJywge2NsYXNzOiAnbGlua0ljb24nfSk7XG4gICAgbGlua0ljb24uc3JjID0gTGlua2VkSW47XG4gICAgbGlua0ljb24uYWx0ID0gXCJMaW5rZWRJbiBQcm9maWxlXCI7XG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0ZXh0Q29udGFpbmVyXCJ9KTtcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQZXJlZ3Jpbm5pbmcgUHJvZHVjdGlvbnNcIjtcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBmb290Qy5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gICAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rTGluayk7XG4gICAgbGlua0xpbmsuYXBwZW5kQ2hpbGQobGlua0ljb24pO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBmb290Qztcbn1cbi8vIFxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdtYWluQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluaXRpYWxDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5pdGlhbENvbnRlbnQnfSk7XG4gICAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnNDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdGlvbnMnfSk7XG4gICAgaW5zdHJ1Y3QudGV4dENvbnRlbnQgPSAnRWxpbWluYXRlIHRoZSBlbmVteSc7XG4gICAgY29uc3QgaW5wdXRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5wdXRDb250YWluZXInfSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHt0eXBlOiAndGV4dCcsIGlkOiAndXNlcm5hbWUnLCBjbGFzczogJ2lucHV0RmllbGQnLCBwbGFjZWhvbGRlcjogJ1BsYXllciAxJ30pO1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICd1c2VybmFtZSd9KTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ1VzZXJuYW1lOic7XG4gICAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnc3RhcnRDb250YWluZXInfSk7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdzdGFydCd9KTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lISdcblxuICAgIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4gY2xlYXJEaXYobWFpbkMpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgYSBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eSAhISFcbiAgICAgICAgY29uc3QgY2FsbHNpZ24gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3A/XG4gICAgICAgIC8vIGxvb3AuaW5pdGlhbFR1cm4obWFpbkMpO1xuICAgICAgICBsb29wLnN0YXJ0R2FtZShjYWxsc2lnbiwgbWFpbkMpO1xuICAgIH1cbiAgICBzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc3RhcnRGbigpO1xuICAgIH0pXG5cbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgbWFpbkMuYXBwZW5kQ2hpbGQoaW5pdGlhbEMpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKGluZm9DKTtcbiAgICBpbmZvQy5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5wdXRDKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG4gICAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChzdGFydEMpO1xuICAgIHN0YXJ0Qy5hcHBlbmRDaGlsZChzdGFydCk7XG5cbiAgICByZXR1cm4gbWFpbkM7XG59XG5cbi8vXG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IGJvZHkgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdib2R5J30pO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGVudCgpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufVxuZXhwb3J0IGRlZmF1bHQgbWFrZUluaXRpYWw7IiwiLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5cbmNvbnN0IFBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFdpbiA9ICgpID0+IHdpbnMgKz0gMTtcbiAgICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn1cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFpID0gUGxheWVyRmFjdG9yeSgnQUkgUGxheWVyJyk7XG4gICAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgbGV0IHkgPSBfZ2VuZXJhdGUoKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuICAgIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbiAgICAgICAgbGV0IHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8YXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMV0gPT09IGFycmF5WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgX2dlbmVyYXRlQ29vcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB3aGlsZSAoIShfYXZhaWxhYmxlKGNvb3JkKSkpIHtcbiAgICAgICAgICAgIGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cbiAgICBjb25zdCBhdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZCA9IF9nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgICAgICAvLyBhZGQgY29vcmRpbmF0ZXMgdG8gYXR0YWNrc0FycmF5XG4gICAgICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuICAgICAgICAgICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBvYmouY29vcmQgPSBjb29yZDtcbiAgICAgICAgICAgIG9iai5vYmogPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgY29uc3QgX3JhbmRvbUF4aXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tICogMik7XG4gICAgICAgIGlmIChheGlzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgLy8gZm9yIGVhY2ggc2hpcCwgcmFuZG9tbHkgZ2VuZXJhdGUgY29vcmRpbmF0ZXMgYW5kIGF4aXNcbiAgICAgICAgY29uc3QgZmxlZXRBcnJheSA9IEFycmF5LmZyb20ocGxheWVyLmZsZWV0KTtcbiAgICAgICAgZmxlZXRBcnJheS5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKCEocGxheWVyLmdiLnBsYWNlU2hpcChzaGlwLCBheGlzLCBjb29yZFswXSwgY29vcmRbMV0pKSkge1xuICAgICAgICAgICAgICAgIGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgICAgIGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhaSwgeyBhdHRhY2sgfSwgeyBwbGFjZUZsZWV0IH0pO1xufVxuXG5leHBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlcn0iLCIvLyBzaGlwIGxvZ2ljXG5cbmNvbnN0IFNoaXBGYWN0b3J5ID0gKGlucHV0LCBtYXJrKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgbGV0IG1hcmtlciA9IGxlbmd0aDtcbiAgICBpZiAobWFyaykge1xuICAgICAgICBtYXJrZXIgPSBtYXJrO1xuICAgIH1cbiAgICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cztcbiAgICB9XG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzICs9IDE7XG4gICAgfVxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gc3VuayA9IHRydWUgOiBzdW5rID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFkZGVkIHRoaXMgLSBjYW4gSSBzZXQgaGl0IGFuZCBpc1N1bmsgdG8gcHJpdmF0ZSwgYW5kIG9ubHkgZXhwb3J0IHRoaXMgb25lPyAhISFcbiAgICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuICAgICAgICBoaXQoKTtcbiAgICAgICAgcmV0dXJuIGlzU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4geyBsZW5ndGgsIHN1bmssIG1hcmtlciwgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG59O1xuY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWIgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICAgIHJldHVybiB7IHN1YiwgcGF0cm9sLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfVxufVxuXG5leHBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9OyIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZWxvb3AuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=