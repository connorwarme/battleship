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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameloop.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tc0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xlZ2VuZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlRmxlZXRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2FyZCBsb2dpY1xuXG5jb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8XG4gICAgICBjaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4ICsgaV1beV0gPiAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kgKyBpXSA+IDApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IGFycmF5LmZpbmQoKGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrTWlzcyA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4ICsgaV1beV0gPT0gLTEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beSArIGldID09IC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSBhcnJheS5maW5kKChpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBjaGVja1Byb2IgPSAobGVuZ3RoLCBheGlzLCB4LCB5LCBoaXRDb29yZEFycmF5KSA9PiB7XG4gICAgbGV0IHdlaWdodCA9IDE7XG4gICAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChheGlzKSB7XG4gICAgICAgIHNoaXBDb29yZHMucHVzaChbTnVtYmVyKHgpICsgaSwgeV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFt4LCBOdW1iZXIoeSkgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGhpdENvb3JkQXJyYXkuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIC8vIG5lZWQgdG8gY29tcGFyZSBzaGlwQ29vcmRpbmF0ZXMgd2l0aCBoaXRDb29yZGluYXRlc0FycmF5XG4gICAgICAvLyBpZiB5ZXMsIGluY3JlYXNlIHdlaWdodCB4IDUwXG4gICAgICAvLyBpZiBubywgbm9ybWFsIHdlaWdodCBmb3IgY2VsbCBjb3VudGVyIGZvciBwcm9iTWFwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvb3JkWzBdID09IHNoaXBDb29yZHNbaV1bMF0pIHtcbiAgICAgICAgICBpZiAoY29vcmRbMV0gPT0gc2hpcENvb3Jkc1tpXVsxXSkge1xuICAgICAgICAgICAgd2VpZ2h0ICo9IDUwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3ZWlnaHQ7XG4gIH07XG4gIGNvbnN0IGNoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgd2hpY2hTaGlwID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKChpbmRleCkgPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoKGluZGV4KSA9PiBpbmRleC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gIGNvbnN0IF91cGRhdGVCb2FyZCA9ICh4LCB5LCB2YWx1ZSkgPT4gKGJvYXJkW3hdW3ldID0gdmFsdWUpO1xuICBjb25zdCBfdXBkYXRlTWlzcyA9ICh4LCB5KSA9PiB7XG4gICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgfTtcbiAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgdGhlU2hpcCA9IHdoaWNoU2hpcChib2FyZFt4XVt5XSk7XG4gICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgIF91cGRhdGVCb2FyZCh4LCB5LCBib2FyZFt4XVt5XSArIDEwKTtcbiAgICByZXR1cm4gc3VuaztcbiAgfTtcbiAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5LCBvYmopID0+IHtcbiAgICBvYmoudmFsdWUgPSBib2FyZFt4XVt5XTtcbiAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgLy8gaWYgYSBoaXQ6XG4gICAgICAvLyAtPiBjaGVjayB3aGljaCBzaGlwIGl0IGlzLCBhZGQgaGl0ICh0byBib2FyZCAmIHRvIGRpc3BsYXkpXG4gICAgICAvLyAtPiBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5XG4gICAgICAvLyAtPiBjaGFuZ2UgcmV0dXJuIGZyb20gdmFsdWUgdG8gdHJ1ZVxuICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICBpZiAoc3Vuaykge1xuICAgICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbiAgICAgICAgICBvYmouYWxsU3VuayA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIG92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9iai5zaGlwID0gb2JqLnZhbHVlO1xuICAgICAgb2JqLnZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWthIGEgbWlzczpcbiAgICAgIC8vIC0+IHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuICAgICAgLy8gLT4gdXBkYXRlIGRpc3BsYXlcbiAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuICAgICAgb2JqLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgIH1cbiAgICAvLyBlbHNlLCB1c2VyIHNlbGVjdGVkIGluZWxpZ2libGUgY29vcmRpbmF0ZXNcbiAgICAvLyBhbmQgbmV3IGNvb3JkaW5hdGVzIG5lZWRlZFxuICAgIG9iai52YWx1ZSA9IDA7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBjcmVhdGUsXG4gICAgcGxhY2VTaGlwLFxuICAgIGNoZWNrUGxhY2UsXG4gICAgY2hlY2tNaXNzLFxuICAgIGNoZWNrUHJvYixcbiAgICBjaGVja09uQm9hcmQsXG4gICAgd2hpY2hTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRmFjdG9yeTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG5jb25zdCBhdHRhY2tIb3ZlciA9IChlbGVtZW50KSA9PiB7XG4gIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgLy8gY2hlY2sgaWYgY2VsbCBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsXCIpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzhCMDAwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICB9XG4gIH0pO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICBncmlkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIGhpdFwiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgbWlzc1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDEwMCwgMTcwKVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgc3Vua1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG4vLyByZW5kZXIgZ2FtZWJvYXJkcyBvbiBwYWdlXG5jb25zdCBidWlsZEJvYXJkID0gKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkaXNwbGF5Qm9hcmRcIiB9KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gIH0pO1xuICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkQ2VsbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogYGNlbGxgLCBpZDogYCR7aX0ke2p9YCB9KTtcbiAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciBmb3IgZ2FtZXBsYXlcbiAgICAgICAgLy8gYW5kIGFkZCBhdHRhY2sgaG92ZXIgZmVhdHVyZVxuICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAobG9vcC5nZXRUdXJuKCkpIHtcbiAgICAgICAgICAgIGZ1bmN0KFtpLCBqXSwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXR0YWNrSG92ZXIoZ3JpZENlbGwpO1xuICAgICAgfVxuICAgICAgZ3JpZENvbC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaXNwbGF5Qm9hcmQ7XG59O1xuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIHJlc3VsdCwgZ2IsIGJvYXJkRE9NLCBlbW9qaSkgPT4ge1xuICBpZiAocmVzdWx0LnN1bmspIHtcbiAgICBjb25zdCBzaGlwID0gZ2Iud2hpY2hTaGlwKHJlc3VsdC5zaGlwKTtcbiAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS5jbGFzc0xpc3QgPSBcImNlbGwgc3Vua1wiO1xuICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS50ZXh0Q29udGVudCA9IGAke2Vtb2ppfWA7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+UpVwiO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn4yKXCI7XG4gIH1cbn07XG5jb25zdCBkaXNwbGF5TGFiZWwgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsYWJlbENvbnRhaW5lclwiIH0pO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZExhYmVsXCIgfSk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX0gd2F0ZXJzYDtcbiAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICByZXR1cm4gbGFiZWxDb250YWluZXI7XG59O1xuY29uc3QgYnVpbGRCb2FyZEFuZExhYmVsID0gKG9iamVjdCwgYm9vbGVhbiwgbWVzc2FnZSwgZnVuY3QpID0+IHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmRDb250YWluZXJcIiB9KTtcbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUxhYmVsKG1lc3NhZ2UpKTtcbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSk7XG4gIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbExpdGUgfSBmcm9tIFwiLi9pbml0aWFsRE9NXCI7XG5cbi8vIGJ1aWxkIGNvbW11bmljYXRpb24gZGl2IC0gZm9yIGRpc3BsYXlpbmcgdXBkYXRlcyAvIHByb21wdHNcbmNvbnN0IGNvbSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbW1Db250YWluZXJcIiB9KTtcblxuICBjb25zdCBidWlsZENvbW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbW1zXCIgfSk7XG4gICAgY29tbXMudGV4dENvbnRlbnQgPSBgYDtcbiAgICBjb21tcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29tbUMuYXBwZW5kQ2hpbGQoY29tbXMpO1xuICAgIHJldHVybiBjb21tQztcbiAgfTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29tbUMucmVtb3ZlQ2hpbGQoY29tbUMubGFzdENoaWxkKTtcbiAgfTtcbiAgY29uc3QgaW5zdHJ1Y3QgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgY29tbXMgPSBjb21tQy5maXJzdENoaWxkO1xuICAgIGNvbW1zLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogUGxhY2UgeW91ciAke3NoaXB9LmA7XG4gIH07XG4gIGNvbnN0IG1lc3NhZ2UgPSAocGxheWVyLCBjb250ZW50KSA9PiB7XG4gICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06ICR7Y29udGVudH1gO1xuICB9O1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXG4gICAgXCJlbXB0eVwiLFxuICAgIFwic3VibWFyaW5lXCIsXG4gICAgXCJwYXRyb2wgYm9hdFwiLFxuICAgIFwiY3J1aXNlclwiLFxuICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXCJiYXR0bGUgY2FycmllclwiLFxuICBdO1xuICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbXG4gICAgeyAwOiBcInlvdVwiLCAxOiBcInRoZWlyXCIgfSxcbiAgICB7IDA6IFwidGhleVwiLCAxOiBcInlvdXJcIiB9LFxuICBdO1xuICBjb25zdCB1cGRhdGVUZXh0ID0gKHBsYXllck5hbWUsIGJvb2xlYW4sIGhpdCwgc3Vuaywgc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gcGxheWVyID8gcHJvbm91bkFycmF5WzBdIDogcHJvbm91bkFycmF5WzFdO1xuICAgIGlmIChib29sZWFuKSB7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmA7XG4gICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RyaWtlID0gaGl0ID8gYGxhbmRzIGEgc3RyaWtlIWAgOiBgbWlzc2VzIWA7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gYXR0YWNrcyBhbmQgJHtzdHJpa2V9YDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgLy8gY2xlYXIgY29tbXMgYW5kIG1haW5cbiAgICBjbGVhckRpdihjb21tQyk7XG4gICAgY2xlYXJEaXYobWFpbkMpO1xuICAgIC8vIGJ1aWxkICdnYW1lIG92ZXInIGNvbnRlbnRcbiAgICBjb25zdCBlbmRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImVuZENvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJiYW5uZXJcIiB9KTtcbiAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBcIkdhbWUgT3ZlciFcIjtcbiAgICBjb25zdCB3aW5uZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2lubmVyXCIgfSk7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICBjb25zdCBwbGF5QWdhaW4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicGxheUFnYWluXCIgfSk7XG4gICAgcGxheUFnYWluLnRleHRDb250ZW50ID0gYFBsYXkgQWdhaW5gO1xuICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyXG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBjbGVhciBjb250ZW50XG4gICAgICBtYWluQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1haW5DKTtcbiAgICAgIGNvbW1DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29tbUMpO1xuICAgICAgbWFrZUluaXRpYWxMaXRlKCk7XG4gICAgfSk7XG4gICAgLy8gaGlkZSBpbmZvIGJ1dHRvblxuICAgIG1haW5DLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG4gIHJldHVybiB7IGJ1aWxkQ29tbXMsIGNsZWFyLCBpbnN0cnVjdCwgbWVzc2FnZSwgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07XG4iLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuaW1wb3J0IHsgcGxhY2UgfSBmcm9tIFwiLi9wbGFjZUZsZWV0RE9NXCI7XG5pbXBvcnQgY3JlYXRlTGVnZW5kIGZyb20gXCIuL2xlZ2VuZERPTVwiO1xuXG4vLyBnYW1lIGxvb3Bcbi8vIGluaXRpYWxpemUgdy8gcDEgYW5kIGdhbWVib2FyZDFcbi8vIHBsYWNlIHNoaXBzXG4vLyBjcmVhdGUgcDIgYW5kIGdhbWVib2FyZDJcbi8vIHBsYWNlIHNoaXBzXG4vLyB0dXJuIGxvZ2ljXG4vLyAtPiB0YWtlIGNvb3JkaW5hdGVzLCBjb25maXJtIGxlZ2FsIHBsYXkgKG5vdCByZXBlYXQpXG4vLyAtPiBsYXVuY2ggYXR0YWNrXG4vLyAgICAgIC0+IGhpdFxuLy8gICAgICAgICAgICAtPiBzdW5rP1xuLy8gICAgICAgICAgICAgICAgLT4geWVzOiAtPiBhbGwgc3Vuaz9cbi8vICAgICAgICAgICAgICAgICAgICAtPiB5ZXM6IGVuZCBnYW1lIChkaXNwbGF5KVxuLy8gICAgICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgLT4gbWlzc1xuLy8gICAgICAgICAgLT4gc3dpdGNoIHR1cm5zXG4vL1xuLy8gY3JlYXRlIHBsYXllcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZ2FtZWJvYXJkXG5jb25zdCBpbml0aWFsaXplID0gKHBsYXllck5hbWUpID0+IHtcbiAgbGV0IHBsYXllcjtcbiAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgcGxheWVyID0gY29tcHV0ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIgPSBQbGF5ZXJGYWN0b3J5KGAke3BsYXllck5hbWV9YCk7XG4gIH1cbiAgY29uc3QgZ2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgZ2IuY3JlYXRlKDEwKTtcbiAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBnYiwgZmxlZXQgfTtcbn07XG5jb25zdCBsb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICBsZXQgcGxheWVyT25lO1xuICBsZXQgcGxheWVyVHdvO1xuICBsZXQgcGxheWVyQm9hcmRET007XG4gIGxldCBjb21wQm9hcmRET007XG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllclR1cm47XG4gIH07XG4gIGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4gKHBsYXllclR1cm4gPSAhcGxheWVyVHVybik7XG4gIGNvbnN0IGluaXRpYWxUdXJuID0gKGJvYXJkMSwgYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMSwgZmFsc2UsIFwiZnJpZW5kbHlcIikpO1xuICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZCk7XG4gICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDIsIHRydWUsIFwiZW5lbXlcIiwgbG9vcC50dXJuKSk7XG4gICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCgpKTtcbiAgICBjb20ubWVzc2FnZShwbGF5ZXJPbmUucGxheWVyLCBgbGF1bmNoIGFuIGF0dGFjayFgKTtcbiAgfTtcbiAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoY2FsbHNpZ24sIHBhcmVudERPTSkgPT4ge1xuICAgIGNvbnN0IHAxID0gaW5pdGlhbGl6ZShgJHtjYWxsc2lnbn1gKTtcbiAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgIC8vIGRpc3BsYXkgY29tbXNcbiAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9XG4gICAgICBcImZsZXhcIjtcbiAgICAvLyBoYXZlIEFJIHBsYWNlIGZsZWV0LCByYW5kb21seVxuICAgIHAyLnBsYXllci5wbGFjZUZsZWV0KHAyKTtcbiAgICAvLyBwcm9tcHQgdXNlciB0byBwbGFjZSBzaGlwc1xuICAgIHBsYWNlLnN0YXJ0KHBhcmVudERPTSwgcDEsIHAyKTtcbiAgICBwbGF5ZXJPbmUgPSBwMTtcbiAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAvLyBkb24ndCB0aGluayBJIG5lZWQgdGhpcyByZXR1cm4gdmFsdWUuLlxuICAgIHJldHVybiB7IHAxLCBwMiB9O1xuICB9O1xuICBjb25zdCBsYXVuY2hHYW1lID0gKHBhcmVudERPTSkgPT4ge1xuICAgIGluaXRpYWxUdXJuKHBsYXllck9uZS5nYiwgcGxheWVyVHdvLmdiLCBwYXJlbnRET00pO1xuICB9O1xuICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICBjb25zdCB0dXJuID0gKGlucHV0KSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR1cm4gPyBwbGF5ZXJPbmUucGxheWVyIDogcGxheWVyVHdvLnBsYXllcjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28uZ2IucmVjZWl2ZUF0dGFjayhpbnB1dFswXSwgaW5wdXRbMV0pO1xuICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAvLyBha2EgdXNlciBjbGlja2VkIG9uIGNvb3JkaW5hdGVzIGZvciBhIHNlY29uZCB0aW1lXG4gICAgICAgIC8vIHByb21wdCB1c2VyIGZvciBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgdHJ1ZSwgXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb24gdmFsaWQgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljIChhaSBnYW1lYm9hcmQpXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdCBvbiBjb21tcyAoaGl0L21pc3Mvc3VuaylcbiAgICAgICAgbWFya0NlbGwoaW5wdXRbMF0sIGlucHV0WzFdLCByZXN1bHQsIHBsYXllclR3by5nYiwgY29tcEJvYXJkRE9NLCBcIvCflLFcIik7XG4gICAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICAgIHJlc3VsdC5zdW5rLFxuICAgICAgICAgIHJlc3VsdC5zaGlwLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljICh1c2VyIGdhbWVib2FyZClcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdFxuICAgICAgcmVzdWx0ID0gcGxheWVyVHdvLnBsYXllci5zbWFydEF0dGFjayhwbGF5ZXJPbmUpO1xuICAgICAgbWFya0NlbGwoXG4gICAgICAgIHJlc3VsdC5jb29yZFswXSxcbiAgICAgICAgcmVzdWx0LmNvb3JkWzFdLFxuICAgICAgICByZXN1bHQub2JqLFxuICAgICAgICBwbGF5ZXJPbmUuZ2IsXG4gICAgICAgIHBsYXllckJvYXJkRE9NLFxuICAgICAgICBcIvCfj7TigI3imKDvuI9cIlxuICAgICAgKTtcbiAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgcmVzdWx0Lm9iai52YWx1ZSxcbiAgICAgICAgcmVzdWx0Lm9iai5zdW5rLFxuICAgICAgICByZXN1bHQub2JqLnNoaXAsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5vYmo7XG4gICAgfVxuICAgIGlmICghcGxheWVyVHVybiAmJiAhcmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHRpbWUgZGVsYXkgYmVmb3JlIGFpIHR1cm5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXJuKGZhbHNlKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHN3aXRjaCB0dXJucyAoYmFjayB0byB3aW5uaW5nIHBsYXllcilcbiAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAvLyBydW4gZ2FtZW92ZXIgc2VxdWVuY2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAgICAgY29tLmVuZEdhbWUoY3VycmVudFBsYXllcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRUdXJuLCBpbml0aWFsVHVybiwgaW5pdGlhbGl6ZUdhbWUsIGxhdW5jaEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBJbmZvIGZyb20gJy4vaWNvbnMvaW5mby5zdmcnO1xuaW1wb3J0IEdpdGh1YiBmcm9tICcuL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IExpbmtlZEluIGZyb20gJy4vaWNvbnMvbGlua2VkaW4uc3ZnJztcbmltcG9ydCB7IFBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuLy8gYnVpbGQgaW5pdGlhbCBwYWdlXG4vLyBwdCAxIC0gaGVhZGVyIGFuZCBmb290ZXIgXG4vLyBwdCAyIC0gYm9keSAodGl0bGUsIGluc3RydWN0aW9ucywgdXNlciBuYW1lIGlucHV0LCBzdGFydCBidG4pXG5sZXQgaGVhZGVyQnRuID0gZmFsc2U7XG4vL1xuY29uc3QgYnRuU2hvdyA9IChtYWluQykgPT4ge1xuICAgIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgbWFpbkMuY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xufVxuY29uc3QgYnRuSGlkZSA9IChtYWluQykgPT4ge1xuICAgIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbWFpbkMuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5jb25zdCBoZWFkZXJCdG5GbiA9IChtYWluQykgPT4ge1xuICAgIGhlYWRlckJ0biA9ICFoZWFkZXJCdG47XG4gICAgaWYgKGhlYWRlckJ0bikge1xuICAgICAgICBidG5TaG93KG1haW5DKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG5IaWRlKG1haW5DKTtcbiAgICB9XG59XG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJDb250YWluZXInfSk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdoZWFkZXJUaXRsZSd9KTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgICBjb25zdCBtZW51QnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWVudUJ0bkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWVudUJ0bid9KTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ21lbnVJY29uJ30pO1xuICAgIG1lbnVJY29uLnNyYyA9IEluZm87XG4gICAgbWVudUljb24uYWx0ID0gJ0luZm8nO1xuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaGVhZGVyQnRuRm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lm1haW5Db250YWluZXInKSk7XG4gICAgfSlcbiAgICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZEMuYXBwZW5kQ2hpbGQobWVudUJ0bkNvbnRhaW5lcik7XG4gICAgbWVudUJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICByZXR1cm4gaGVhZEM7XG59XG4vL1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZm9vdGVyQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJmb290ZXJCb3hcIn0pO1xuICAgIGNvbnN0IGxpbmtDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwibGlua0NvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIiwgXCJhbHRcIjogXCJHaXRodWIgUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgZ2l0SWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogJ2dpdEljb24nfSk7O1xuICAgIGdpdEljb24uc3JjID0gR2l0aHViO1xuICAgIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICAgIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsIFwiYWx0XCI6IFwiTGlua2VkSW4gUHJvZmlsZVwiLCBcInRhcmdldFwiOiBcIl9ibGFua1wifSk7XG4gICAgY29uc3QgbGlua0ljb24gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7Y2xhc3M6ICdsaW5rSWNvbid9KTtcbiAgICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRleHRDb250YWluZXJcIn0pO1xuICAgIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuXG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xuICAgIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgICBsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmtMaW5rKTtcbiAgICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGZvb3RDO1xufVxuLy8gXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcIm1haW5cIn0pO1xuICAgIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbWFpbkNvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luaXRpYWxDb250ZW50J30pO1xuICAgIGNvbnN0IGluZm9DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zQ29udGFpbmVyJ30pO1xuICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3Rpb25zJ30pO1xuICAgIGluc3RydWN0LnRleHRDb250ZW50ID0gJ0VsaW1pbmF0ZSB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnB1dENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge3R5cGU6ICd0ZXh0JywgaWQ6ICd1c2VybmFtZScsIGNsYXNzOiAnaW5wdXRGaWVsZCcsIHBsYWNlaG9sZGVyOiAnQXF1YW1hbiDwn5SxJ30pO1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICd1c2VybmFtZSd9KTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0VudGVyIFBsYXllciBOYW1lOic7XG4gICAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnc3RhcnRDb250YWluZXInfSk7XG4gICAgY29uc3Qgc3RhcnQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdzdGFydCd9KTtcbiAgICBzdGFydC50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lISdcblxuICAgIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4gY2xlYXJEaXYobWFpbkMpO1xuICAgIFxuICAgIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgYSBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eSAhISFcbiAgICAgICAgXG4gICAgICAgIGxldCBjYWxsc2lnbiA9ICdBcXVhbWFuIPCflLEnO1xuICAgICAgICBpZiAoaW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxzaWduID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgICAgICBjbGVhck1haW4oKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3A/XG4gICAgICAgIC8vIGxvb3AuaW5pdGlhbFR1cm4obWFpbkMpO1xuICAgICAgICBsb29wLmluaXRpYWxpemVHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gICAgfVxuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdGFydEZuKCk7XG4gICAgfSlcblxuICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5DKTtcbiAgICBtYWluQy5hcHBlbmRDaGlsZChpbml0aWFsQyk7XG4gICAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICAgIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbnB1dEMpO1xuICAgIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGluaXRpYWxDLmFwcGVuZENoaWxkKHN0YXJ0Qyk7XG4gICAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG4vL1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnYm9keSd9KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn1cbmNvbnN0IG1ha2VJbml0aWFsTGl0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmJvZHknKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShjb20uYnVpbGRDb21tcygpLCBib2R5LmNoaWxkcmVuWzFdKTtcbiAgICBib2R5Lmluc2VydEJlZm9yZShtYWluQ29udGVudCgpLCBib2R5LmNoaWxkcmVuWzJdKTtcbn1cbmV4cG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBidWlsZCBsZWdlbmQgdG8gZXhwbGFpbiBlbW9qaXMsIHByb3ZpZGUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zXG5jb25zdCBzaGlwID0ge1xuICAgIGVtb2ppOiBcIiBcIixcbiAgICB0ZXh0OiBcImZyaWVuZGx5IHNoaXBcIixcbiAgICBjbGFzczogXCJzaGlwXCJcbn1cbmNvbnN0IHdhdmUgPSB7XG4gICAgZW1vamk6IFwi8J+MilwiLFxuICAgIHRleHQ6IFwiYXR0YWNrIG1pc3NcIixcbiAgICBjbGFzczogXCJtaXNzXCJcbn1cbmNvbnN0IGhpdCA9IHtcbiAgICBlbW9qaTogXCLwn5SlXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgaGl0XCIsXG4gICAgY2xhc3M6IFwiaGl0XCJcbn1cbmNvbnN0IHN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+UsVwiLFxuICAgIHRleHQ6IFwieW91IHN1bmsgZW5lbXkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW5lbXlTdW5rID0ge1xuICAgIGVtb2ppOiBcIvCfj7TigI3imKDvuI9cIixcbiAgICB0ZXh0OiBcImVuZW15IHN1bmsgZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInN1bmtcIlxufVxuY29uc3QgZW1vamlBcnJheSA9IFtzaGlwLCB3YXZlLCBoaXQsIHN1bmssIGVuZW15U3Vua107XG5cbmNvbnN0IGNyZWF0ZUxlZ2VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRDb250YWluZXInfSk7XG4gICAgY29uc3QgbGVnZW5kQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnbGVnZW5kQm94J30pO1xuICAgIGxlZ2VuZEJveC50ZXh0Q29udGVudCA9IFwiTGVnZW5kOlwiO1xuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcsIHtjbGFzczogJ2xlZ2VuZExpc3QnfSk7XG4gICAgZW1vamlBcnJheS5mb3JFYWNoKGVtb2ppID0+IHtcbiAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScsIHtjbGFzczogJ2Vtb2ppTGknfSk7XG4gICAgICAgIGNvbnN0IGJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogYGVtb2ppQm94ICR7ZW1vamkuY2xhc3N9YH0pO1xuICAgICAgICBib3gudGV4dENvbnRlbnQgPSBgJHtlbW9qaS5lbW9qaX1gO1xuICAgICAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZW1vamlUZXh0J30pO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYC0gJHtlbW9qaS50ZXh0fWA7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9KVxuICAgIGxlZ2VuZEJveC5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kQm94KTsgXG4gICAgY29uc3QgaW5zdHJ1Y3RCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdEJveCd9KTtcbiAgICBpbnN0cnVjdEJveC50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zOlwiO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGV4dCd9KTtcbiAgICBpbnN0cnVjdFRleHQudGV4dENvbnRlbnQgPSAnU2VsZWN0IGNvb3JkaW5hdGVzIGluIGVuZW15IHdhdGVycyB0byBsYXVuY2ggYW4gYXR0YWNrLiBUaGUgYm9hcmQgd2lsbCBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLCBvciBpZiB5b3Ugc3VuayB0aGUgZW5lbXkgc2hpcC4gRmluZCBhbmQgZWxpbWluYXRlIGFsbCBmaXZlIGVuZW15IHNoaXBzIGJlZm9yZSB0aGV5IGVsaW1pbmF0ZSB5b3VycyEnXG4gICAgY29uc3Qgb2JqZWN0aXZlQm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlQm94J30pO1xuICAgIG9iamVjdGl2ZUJveC50ZXh0Q29udGVudCA9ICdPYmplY3RpdmU6JztcbiAgICBjb25zdCBvYmplY3RpdmVUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnb2JqZWN0aXZlVGV4dCd9KTtcbiAgICBvYmplY3RpdmVUZXh0LnRleHRDb250ZW50ID0gJ1NpbmsgdGhlIGVuZW15IGZsZWV0ISc7XG4gICAgb2JqZWN0aXZlQm94LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVCb3gpO1xuICAgIGluc3RydWN0Qm94LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0Qm94KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzIH0gZnJvbSBcIi4vYm9hcmRET01cIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gJy4vY29tc0RPTSc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2dhbWVsb29wJztcblxuY29uc3QgcGxhY2UgPSAoKCkgPT4ge1xuICAgIGxldCBheGlzID0gdHJ1ZTtcbiAgICBjb25zdCBjdXJyZW50QXhpcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aXM7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZURpc3BsYXkgPSAob3Bwb25lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInBsYWNlQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgYnV0dG9uQyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ3BsYWNlQnRuQ29udGFpbmVyJ30pO1xuICAgICAgICBjb25zdCBheGlzQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAnYXhpc0J0bid9KTtcbiAgICAgICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGBSb3RhdGVgXG4gICAgICAgIGNvbnN0IHJhbmRvbUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtjbGFzczogJ3JhbmRvbUJ0bid9KTtcbiAgICAgICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gJ1JhbmRvbSc7XG4gICAgICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VJbnN0cnVjdGlvbnMnfSk7XG4gICAgICAgIGNvbnN0IGluc3RydWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdpbnN0cnVjdFRpdGxlJ30pO1xuICAgICAgICBpbnN0cnVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCJcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQxLnRleHRDb250ZW50ID0gYFNlbGVjdCBjb29yZGluYXRlcyBvbiBib2FyZCB0byBwbGFjZSBjdXJyZW50IHNoaXAuYDtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUZXh0MiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJpbnN0cnVjdFRleHRcIn0pO1xuICAgICAgICBpbnN0cnVjdFRleHQyLnRleHRDb250ZW50ID0gYFVzZSBidXR0b25zIHRvIHJvdGF0ZSBzaGlwIG9yIHJhbmRvbWx5IGRlcGxveSBlbnRpcmUgZmxlZXQuYFxuXG4gICAgICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAgICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGF4aXMgPSAhYXhpcztcbiAgICAgICAgICAgIC8vIGxldCB0ZXh0ID0gYXhpcyA/ICdYJyA6ICdZJztcbiAgICAgICAgICAgIC8vIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgQXhpczogJHt0ZXh0fWA7XG4gICAgICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gJ1JvdGF0ZSc7XG4gICAgICAgICAgICAvLyBkZWxldGUgY3VycmVudCBib2FyZFxuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAvLyBidWlsZCBuZXcgYm9hcmQgdy8gY29ycmVjdCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHBlclNoaXAoY3VycmVudERPTSwgY3VycmVudEJvYXJkLCBjdXJyZW50U2hpcCk7XG4gICAgICAgIH0pXG4gICAgICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG9wcG9uZW50LnBsYXllci5wbGFjZUZsZWV0KGN1cnJlbnRPYmopO1xuICAgICAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChheGlzQnRuKTtcbiAgICAgICAgYnV0dG9uQy5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRpdGxlKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0MSk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDIpO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIC8vIFxuICAgIGNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8IFxuICAgICAgICBnYW1lYm9hcmQuY2hlY2tQbGFjZShzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGlnaGxpZ2h0TGVuZ3RoID0gKGVsZW1lbnQsIGxlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IEFycmF5LmZyb20oZWxlbWVudC5pZCk7XG4gICAgICAgIGxldCBuZXdJZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkraX0ke2Nvb3JkWzFdfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7Y29vcmRbMF19JHtOdW1iZXIoY29vcmRbMV0pK2l9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJZCk7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2xpY2tGbiA9ICh4LCB5KSA9PiB7XG4gICAgICAgIGN1cnJlbnRPYmouZ2IucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBheGlzLCB4LCB5KTtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICAgIG5leHRTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRPYmopO1xuICAgIH1cbiAgICBjb25zdCBjbGlja0F0dGFjayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsaWNrRm4oeCwgeSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhvdmVyID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvdWxkIGFkZCBhIGNsYXNzLi4uXG4gICAgICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICAgICAgICAgIGhpZ2hsaWdodExlbmd0aChlbGVtZW50LCBzaGlwLmxlbmd0aCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgICAgICBncmlkLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInNsYXRlZ3JheVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNlbGwnKSk7XG4gICAgICAgIGNlbGxBcnJheS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgICAgICAgIGhvdmVyKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICBjbGlja0F0dGFjayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgY3VycmVudE9iajtcbiAgICBsZXQgY3VycmVudEJvYXJkO1xuICAgIGxldCBjdXJyZW50U2hpcDtcbiAgICBsZXQgZmxlZXRLZXlzO1xuICAgIGxldCBjdXJyZW50RE9NO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgdXBkYXRlQWxsQ3VycmVudHMgPSAocGFyZW50LCBvYmplY3QpID0+IHtcbiAgICAgICAgY3VycmVudERPTSA9IHBhcmVudDtcbiAgICAgICAgY3VycmVudE9iaiA9IG9iamVjdDtcbiAgICAgICAgY3VycmVudEJvYXJkID0gb2JqZWN0LmdiO1xuICAgICAgICBmbGVldEtleXMgPSBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QuZmxlZXQpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGVDdXJyZW50U2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDtcbiAgICB9XG4gICAgY29uc3QgbmV4dFNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmopID0+IHtcbiAgICAgICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgICAgICAgY29tLmluc3RydWN0KHBsYXllck9iai5wbGF5ZXIsIGZsZWV0S2V5c1tjb3VudF0pO1xuICAgICAgICAgICAgcGVyU2hpcChwYXJlbnRET00sIHBsYXllck9iai5nYiwgcGxheWVyT2JqLmZsZWV0W2ZsZWV0S2V5c1tjb3VudF1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXh0IHN0ZXAgb2YgZ2FtZWxvb3AhJyk7XG4gICAgICAgICAgICBmaW5pc2goKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgdXBkYXRlQ3VycmVudFNoaXAoc2hpcCk7XG4gICAgICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKHBsYXllckJvYXJkLCBmYWxzZSkpO1xuICAgICAgICBkaXNwbGF5U2hpcHMoY3VycmVudEJvYXJkLCBjdXJyZW50RE9NLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgYWRkQ2VsbExpc3RlbmVycyhwbGF5ZXJCb2FyZCwgc2hpcCk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ID0gKHBhcmVudERPTSwgcGxheWVyT2JqLCBvcHBvbmVudE9iaikgPT4ge1xuICAgICAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGNyZWF0ZURpc3BsYXkob3Bwb25lbnRPYmopKTtcbiAgICAgICAgdXBkYXRlQWxsQ3VycmVudHMocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICAgICAgICBuZXh0U2hpcChwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgfVxuICAgIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgY29tLmNsZWFyKCk7XG4gICAgICAgIC8vIGludm9rZSBnYW1lbG9vcCBzdGVwMiAtPiB3aGVyZSAyIGJvYXJkcyBhcmUgZGlzcGxheWVkXG4gICAgICAgIC8vIGEgd2F5IHRvIHRyYW5zaXRpb24gdGhpcyAoZWFzZS1pbik/ICEhIVxuICAgICAgICBsb29wLmxhdW5jaEdhbWUoY3VycmVudERPTSk7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNTUwcHgpJykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgaG92ZXIsIHN0YXJ0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwbGFjZSB9OyIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gICAgbGV0IHdpbnMgPSAwO1xuICAgIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlc1swXSwgY29vcmRpbmF0ZXNbMV0pO1xuICAgIH1cbiAgICBjb25zdCBhZGRXaW4gPSAoKSA9PiB3aW5zICs9IDE7XG4gICAgcmV0dXJuIHsgY29kZW5hbWUsIHdpbnMsIGF0dGFjaywgYWRkV2luIH07XG59XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoJ1RoZSBLcmFrZW4nKTtcbiAgICBjb25zdCBuZXdQcm9iID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9iID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgICAgIHByb2IuY3JlYXRlKDEwKTtcbiAgICAgICAgcmV0dXJuIHByb2I7XG4gICAgfVxuICAgIGNvbnN0IHNob3QgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBzaG90LmNyZWF0ZSgxMCk7XG5cbiAgICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgX2dlbmVyYXRlUmFuZG9tQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG4gICAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4gICAgY29uc3QgX2F2YWlsYWJsZSA9IChhcnJheSkgPT4ge1xuICAgICAgICBsZXQgdmFsdWUgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxhdHRhY2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tzQXJyYXlbaV1bMF0gPT09IGFycmF5WzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBfZ2VuZXJhdGVDb29yZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgIHdoaWxlICghKF9hdmFpbGFibGUoY29vcmQpKSkge1xuICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmQ7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkID0gX2dlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAgICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4gICAgICAgICAgICBhdHRhY2tzQXJyYXkucHVzaChjb29yZCk7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIG9iai5jb29yZCA9IGNvb3JkO1xuICAgICAgICAgICAgb2JqLm9iaiA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXhpcyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHBsYWNlRmxlZXQgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIC8vIGkgdGhpbmsgdGhpcyBjYW4gYmUgdXNlZCBmb3IgZWl0aGVyIHBsYXllci4uLm1heWJlIG1ha2UgYSBidXR0b24gZm9yIHVzZXIgKGluIGluaXRpYWwpICEhIVxuICAgICAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgICAgICBjb25zdCBmbGVldEtleXMgPSBPYmplY3Qua2V5cyhwbGF5ZXIuZmxlZXQpO1xuICAgICAgICBmbGVldEtleXMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgd2hpbGUgKCEocGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSkpKSB7XG4gICAgICAgICAgICAgICAgYXhpcyA9IF9yYW5kb21BeGlzKCk7XG4gICAgICAgICAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoaXRDb29yZHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IF9hZGRUb0hpdENvb3JkcyA9IChpbnB1dCkgPT4ge1xuICAgICAgICBoaXRDb29yZHNBcnJheS5wdXNoKGlucHV0KTtcbiAgICAgICAgLy8gcmV0dXJuIGhpdENvb3Jkc0FycmF5OyA/PyAhISEgZG8gaSBuZWVkIHRoaXMgdG8gYmUgcmV0dXJuZWQ/XG4gICAgfVxuICAgIGNvbnN0IF9jbGVhckhpdENvb3JkcyA9IChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKGNvb3JkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBoaXRDb29yZHNBcnJheS5maW5kSW5kZXgodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVbMF0gPT0gY29vcmRbMF0gJiYgdmFsdWVbMV0gPT0gY29vcmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaGl0Q29vcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IF91cGRhdGVTaG90Qm9hcmQgPSAob2JqZWN0LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29vcmQgPSBvYmplY3QuY29vcmQ7XG4gICAgICAgIGlmIChvYmplY3Qub2JqLnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3Qub2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXIuZ2Iud2hpY2hTaGlwKG9iamVjdC5vYmouc2hpcCk7XG4gICAgICAgICAgICAgICAgX2NsZWFySGl0Q29vcmRzKHNoaXApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfYWRkVG9IaXRDb29yZHMoY29vcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9hZGRUb1Byb2JCb2FyZCA9IChnYiwgcHJvYkJvYXJkLCBsZW5ndGgsIGJvb2xlYW4sIHgsIHkpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXJXZWlnaHQgPSBnYi5jaGVja1Byb2IobGVuZ3RoLCBib29sZWFuLCB4LCB5LCBoaXRDb29yZHNBcnJheSk7XG4gICAgICAgICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAgICAgICAgIHByb2JCb2FyZFtOdW1iZXIoeCkraV1beV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW3hdW051bWJlcih5KStpXSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZW1vdmVIaXRzKGdiLCBwcm9iQm9hcmQpO1xuICAgIH1cbiAgICAvLyBldmFsdWF0ZSBob3cgdG8gaW1wcm92ZSBjaGVja1BsYWNlIGZvciBcImh1bnQgbW9kZVwiXG5cbiAgICBjb25zdCBfcmVtb3ZlSGl0cyA9IChnYiwgcHJvYkJvYXJkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChnYi5ib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvYkJvYXJkW2ldW2pdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3NoaXBQcm9iID0gKGdiLCBzaGlwLCBwcm9iKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKChnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSB8fCBcbiAgICAgICAgICAgICAgICAoZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9hZGRUb1Byb2JCb2FyZChnYiwgcHJvYi5ib2FyZCwgc2hpcC5sZW5ndGgsIHRydWUsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGo8Z2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIShnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSB8fCBcbiAgICAgICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfZmxlZXRQcm9iID0gKGJvYXJkLCBmbGVldCwgcHJvYikgPT4ge1xuICAgICAgICBjb25zdCBzaGlwcyA9IE9iamVjdC5rZXlzKGZsZWV0KTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIC8vIGRvZXMgdGhpcyBuZWVkIHRvIHJ1biBcImlzU3Vua1wiIGluIG9yZGVyIHRvIGdldCB1cGRhdGVkIHN1bmsgdmFsdWU/IFxuICAgICAgICAgICAgaWYgKCEoZmxlZXRbc2hpcF0uc3VuaykpXG4gICAgICAgICAgICBfc2hpcFByb2IoYm9hcmQsIGZsZWV0W3NoaXBdLCBwcm9iKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2dldFByb2JDb29yZHMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudE1heCA9IHtcbiAgICAgICAgICAgIG1heDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8Ym9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiBjdXJyZW50TWF4Lm1heCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4Lm1heCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TWF4LmNvb3JkcyA9IFtpLCBqXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRNYXg7IC8vIHNob3VsZCB0aGlzIGp1c3QgYmUgY29vcmRpbmF0ZXMgb3IgcmV0dXJuIHRoZSB3aG9sZSBvYmo/ICEhIVxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHNtYXJ0QUkgYXR0YWNrIG1vZGU6XG4gICAgY29uc3Qgc21hcnRBdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBuZXdQcm9iKCk7XG4gICAgICAgIC8vIHVwZGF0ZWQgcHJvYmFiaWxpdHkgYm9hcmQ7IG5lZWRzIGFjY2VzcyB0byB1c2VyJ3MgZmxlZXQuLj8gb3IgbWFrZSBhIGNvcHkgZm9yIHRoZSBwcm9iQm9hcmQsIHVwZGF0ZSByZWd1bGFybHkgISEhXG4gICAgICAgIF9mbGVldFByb2Ioc2hvdCwgcGxheWVyLmZsZWV0LCBwcm9iKTtcbiAgICAgICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGJlc3QgY2VsbFxuICAgICAgICBjb25zdCBjb29yZCA9IF9nZXRQcm9iQ29vcmRzKHByb2IuYm9hcmQpO1xuICAgICAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIHRob3NlIGNvb3Jkc1xuICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgb2JqLmNvb3JkID0gY29vcmQuY29vcmRzO1xuICAgICAgICBvYmoub2JqID0gcGxheWVyLmdiLnJlY2VpdmVBdHRhY2sob2JqLmNvb3JkWzBdLCBvYmouY29vcmRbMV0pO1xuICAgICAgICAvLyBjaGVjayBhdHRhY2sgaW50ZWw6IGhpdCBvciBtaXNzLCBzdW5rP1xuICAgICAgICBfdXBkYXRlU2hvdEJvYXJkKG9iaiwgcGxheWVyKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgLy9cblxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhaSwgeyByYW5kb21BdHRhY2sgfSwgeyBzbWFydEF0dGFjayB9LCB7IHBsYWNlRmxlZXQgfSk7XG59XG5cbmV4cG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyfSIsIi8vIHNoaXAgbG9naWNcblxuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBsZXQgbWFya2VyID0gbGVuZ3RoO1xuICAgIGlmIChtYXJrKSB7XG4gICAgICAgIG1hcmtlciA9IG1hcms7XG4gICAgfVxuICAgIGNvbnN0IGNvb3JkcyA9IFtdO1xuICAgIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMTtcbiAgICB9XG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyBzdW5rID0gdHJ1ZSA6IHN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWRkZWQgdGhpcyAtIGNhbiBJIHNldCBoaXQgYW5kIGlzU3VuayB0byBwcml2YXRlLCBhbmQgb25seSBleHBvcnQgdGhpcyBvbmU/ICEhIVxuICAgIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgICAgIGhpdCgpO1xuICAgICAgICByZXR1cm4gaXNTdW5rKCk7XG4gICAgfVxuICAgIHJldHVybiB7IGxlbmd0aCwgc3VuaywgbWFya2VyLCBjb29yZHMsIGdldEhpdHMsIGhpdCwgaXNTdW5rLCBoaXRQbHVzfVxufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gU2hpcEZhY3RvcnkoMywgMSk7XG4gICAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gICAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gICAgY29uc3QgYmF0dGxlc2hpcCA9IFNoaXBGYWN0b3J5KDQpO1xuICAgIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgICByZXR1cm4geyBzdWJtYXJpbmUsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH1cbn1cblxuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTsiLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuY29uc3Qgc2V0QXR0cmlidXRlcyA9IChlbGVtZW50LCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pXG59XG5jb25zdCBjbGVhckRpdiA9IChkaXYpID0+IHtcbiAgICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcbiAgICB9XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWVsb29wLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9