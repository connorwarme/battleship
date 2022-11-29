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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tc0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVsb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5pdGlhbERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2xlZ2VuZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYWNlRmxlZXRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2FyZCBsb2dpY1xuXG5jb25zdCBCb2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IGNyZWF0ZSA9IChsZW5ndGgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gW107XG4gICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICBjb25zdCBwbGFjZVNoaXAgPSAob2JqZWN0LCBheGlzLCB4LCB5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgY2hlY2tPbkJvYXJkKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpIHx8XG4gICAgICBjaGVja1BsYWNlKG9iamVjdC5sZW5ndGgsIGF4aXMsIHgsIHkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4ICsgaV1beV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2hpcEFycmF5LnB1c2gob2JqZWN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tQbGFjZSA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4ICsgaV1beV0gPiAwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kgKyBpXSA+IDApO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IGFycmF5LmZpbmQoKGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrTWlzcyA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4ICsgaV1beV0gPT0gLTEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beSArIGldID09IC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSBhcnJheS5maW5kKChpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBjaGVja1Byb2IgPSAobGVuZ3RoLCBheGlzLCB4LCB5LCBoaXRDb29yZEFycmF5KSA9PiB7XG4gICAgbGV0IHdlaWdodCA9IDE7XG4gICAgY29uc3Qgc2hpcENvb3JkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChheGlzKSB7XG4gICAgICAgIHNoaXBDb29yZHMucHVzaChbTnVtYmVyKHgpICsgaSwgeV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFt4LCBOdW1iZXIoeSkgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGhpdENvb3JkQXJyYXkuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIC8vIG5lZWQgdG8gY29tcGFyZSBzaGlwQ29vcmRpbmF0ZXMgd2l0aCBoaXRDb29yZGluYXRlc0FycmF5XG4gICAgICAvLyBpZiB5ZXMsIGluY3JlYXNlIHdlaWdodCB4IDUwXG4gICAgICAvLyBpZiBubywgbm9ybWFsIHdlaWdodCBmb3IgY2VsbCBjb3VudGVyIGZvciBwcm9iTWFwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNvb3JkWzBdID09IHNoaXBDb29yZHNbaV1bMF0pIHtcbiAgICAgICAgICBpZiAoY29vcmRbMV0gPT0gc2hpcENvb3Jkc1tpXVsxXSkge1xuICAgICAgICAgICAgd2VpZ2h0ICo9IDUwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB3ZWlnaHQ7XG4gIH07XG4gIGNvbnN0IGNoZWNrT25Cb2FyZCA9IChsZW5ndGgsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIHZhbHVlID0geCArIGxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB5ICsgbGVuZ3RoO1xuICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmRbeF0ubGVuZ3RoO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgd2hpY2hTaGlwID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIHNoaXBBcnJheS5maW5kKChpbmRleCkgPT4gaW5kZXgubWFya2VyID09PSBpbnB1dCk7XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoKGluZGV4KSA9PiBpbmRleC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgY29uc3QgX2FkZE1pc3MgPSAoeCwgeSkgPT4gbWlzc2VkQXR0YWNrcy5wdXNoKFt4LCB5XSk7XG4gIGNvbnN0IF91cGRhdGVCb2FyZCA9ICh4LCB5LCB2YWx1ZSkgPT4gKGJvYXJkW3hdW3ldID0gdmFsdWUpO1xuICBjb25zdCBfdXBkYXRlTWlzcyA9ICh4LCB5KSA9PiB7XG4gICAgX2FkZE1pc3MoeCwgeSk7XG4gICAgX3VwZGF0ZUJvYXJkKHgsIHksIC0xKTtcbiAgfTtcbiAgY29uc3QgX3VwZGF0ZUhpdCA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3QgdGhlU2hpcCA9IHdoaWNoU2hpcChib2FyZFt4XVt5XSk7XG4gICAgY29uc3Qgc3VuayA9IHRoZVNoaXAuaGl0UGx1cygpO1xuICAgIF91cGRhdGVCb2FyZCh4LCB5LCBib2FyZFt4XVt5XSArIDEwKTtcbiAgICByZXR1cm4gc3VuaztcbiAgfTtcbiAgY29uc3QgX2NoZWNrQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPiAxMCB8fCBib2FyZFt4XVt5XSA9PSAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgX2xhdW5jaEF0dGFjayA9ICh4LCB5LCBvYmopID0+IHtcbiAgICBvYmoudmFsdWUgPSBib2FyZFt4XVt5XTtcbiAgICBpZiAob2JqLnZhbHVlID4gMCkge1xuICAgICAgLy8gaWYgYSBoaXQ6XG4gICAgICAvLyAtPiBjaGVjayB3aGljaCBzaGlwIGl0IGlzLCBhZGQgaGl0ICh0byBib2FyZCAmIHRvIGRpc3BsYXkpXG4gICAgICAvLyAtPiBzZWUgaWYgaXQgc3VuayBhbmQgdXBkYXRlIGFjY29yZGluZ2x5XG4gICAgICAvLyAtPiBjaGFuZ2UgcmV0dXJuIGZyb20gdmFsdWUgdG8gdHJ1ZVxuICAgICAgY29uc3Qgc3VuayA9IF91cGRhdGVIaXQoeCwgeSk7XG4gICAgICBpZiAoc3Vuaykge1xuICAgICAgICBvYmouc3VuayA9IHRydWU7XG4gICAgICAgIGlmIChhbGxTdW5rKCkpIHtcbiAgICAgICAgICBvYmouYWxsU3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9iai5zaGlwID0gb2JqLnZhbHVlO1xuICAgICAgb2JqLnZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWthIGEgbWlzczpcbiAgICAgIC8vIC0+IHVwZGF0ZSBnYW1lYm9hcmQgdy8gLTEgKGZvciBtaXNzKVxuICAgICAgLy8gLT4gdXBkYXRlIGRpc3BsYXlcbiAgICAgIF91cGRhdGVNaXNzKHgsIHkpO1xuICAgICAgb2JqLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBpZiAoX2NoZWNrQXR0YWNrKHgsIHkpKSB7XG4gICAgICByZXR1cm4gX2xhdW5jaEF0dGFjayh4LCB5LCBvYmopO1xuICAgIH1cbiAgICAvLyBlbHNlLCB1c2VyIHNlbGVjdGVkIGluZWxpZ2libGUgY29vcmRpbmF0ZXNcbiAgICAvLyBhbmQgbmV3IGNvb3JkaW5hdGVzIG5lZWRlZFxuICAgIG9iai52YWx1ZSA9IDA7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBjcmVhdGUsXG4gICAgcGxhY2VTaGlwLFxuICAgIGNoZWNrUGxhY2UsXG4gICAgY2hlY2tNaXNzLFxuICAgIGNoZWNrUHJvYixcbiAgICBjaGVja09uQm9hcmQsXG4gICAgd2hpY2hTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkRmFjdG9yeTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG5jb25zdCBhdHRhY2tIb3ZlciA9IChlbGVtZW50KSA9PiB7XG4gIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgLy8gY2hlY2sgaWYgY2VsbCBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsXCIpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMzhCMDAwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAwMDBcIjtcbiAgICB9XG4gIH0pO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICBncmlkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIGhpdFwiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgbWlzc1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMzUsIDEwMCwgMTcwKVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgc3Vua1wiKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG4vLyByZW5kZXIgZ2FtZWJvYXJkcyBvbiBwYWdlXG5jb25zdCBidWlsZEJvYXJkID0gKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gIGNvbnN0IGRpc3BsYXlCb2FyZCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJkaXNwbGF5Qm9hcmRcIiB9KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGdyaWRDb2wgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBjb2xgLCBpZDogYCR7aX1gIH0pO1xuICAgIGRpc3BsYXlCb2FyZC5hcHBlbmRDaGlsZChncmlkQ29sKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkQ2VsbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogYGNlbGxgLCBpZDogYCR7aX0ke2p9YCB9KTtcbiAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciBmb3IgZ2FtZXBsYXlcbiAgICAgICAgLy8gYW5kIGFkZCBhdHRhY2sgaG92ZXIgZmVhdHVyZVxuICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBpZiAobG9vcC5nZXRUdXJuKCkpIHtcbiAgICAgICAgICAgIGZ1bmN0KFtpLCBqXSwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXR0YWNrSG92ZXIoZ3JpZENlbGwpO1xuICAgICAgfVxuICAgICAgZ3JpZENvbC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkaXNwbGF5Qm9hcmQ7XG59O1xuY29uc3QgZGlzcGxheVNoaXBzID0gKG9iamVjdCwgYm9hcmRET00pID0+IHtcbiAgY29uc3QgYm9hcmQgPSBvYmplY3QuYm9hcmQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoYm9hcmRbaV1bal0gPiAwKSB7XG4gICAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbmNvbnN0IG1hcmtDZWxsID0gKHgsIHksIHJlc3VsdCwgZ2IsIGJvYXJkRE9NLCBlbW9qaSkgPT4ge1xuICBpZiAocmVzdWx0LnN1bmspIHtcbiAgICBjb25zdCBzaGlwID0gZ2Iud2hpY2hTaGlwKHJlc3VsdC5zaGlwKTtcbiAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS5jbGFzc0xpc3QgPSBcImNlbGwgc3Vua1wiO1xuICAgICAgYm9hcmRET00uY2hpbGRyZW5bY29vcmRbMF1dLmNoaWxkcmVuW2Nvb3JkWzFdXS50ZXh0Q29udGVudCA9IGAke2Vtb2ppfWA7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+UpVwiO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn4yKXCI7XG4gIH1cbn07XG5jb25zdCBkaXNwbGF5TGFiZWwgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zdCBsYWJlbENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsYWJlbENvbnRhaW5lclwiIH0pO1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZExhYmVsXCIgfSk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX0gd2F0ZXJzYDtcbiAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICByZXR1cm4gbGFiZWxDb250YWluZXI7XG59O1xuY29uc3QgYnVpbGRCb2FyZEFuZExhYmVsID0gKG9iamVjdCwgYm9vbGVhbiwgbWVzc2FnZSwgZnVuY3QpID0+IHtcbiAgY29uc3QgYm9hcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmRDb250YWluZXJcIiB9KTtcbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUxhYmVsKG1lc3NhZ2UpKTtcbiAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSk7XG4gIHJldHVybiBib2FyZENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbExpdGUgfSBmcm9tIFwiLi9pbml0aWFsRE9NXCI7XG5cbi8vIGJ1aWxkIGNvbW11bmljYXRpb24gZGl2IC0gZm9yIGRpc3BsYXlpbmcgdXBkYXRlcyAvIHByb21wdHNcbmNvbnN0IGNvbSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbW1DID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbW1Db250YWluZXJcIiB9KTtcblxuICBjb25zdCBidWlsZENvbW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbW1zID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImNvbW1zXCIgfSk7XG4gICAgY29tbXMudGV4dENvbnRlbnQgPSBgYDtcbiAgICBjb21tcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29tbUMuYXBwZW5kQ2hpbGQoY29tbXMpO1xuICAgIHJldHVybiBjb21tQztcbiAgfTtcbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29tbUMucmVtb3ZlQ2hpbGQoY29tbUMubGFzdENoaWxkKTtcbiAgfTtcbiAgY29uc3QgaW5zdHJ1Y3QgPSAocGxheWVyLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgY29tbXMgPSBjb21tQy5maXJzdENoaWxkO1xuICAgIGNvbW1zLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogUGxhY2UgeW91ciAke3NoaXB9LmA7XG4gIH07XG4gIGNvbnN0IG1lc3NhZ2UgPSAocGxheWVyLCBjb250ZW50KSA9PiB7XG4gICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06ICR7Y29udGVudH1gO1xuICB9O1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXG4gICAgXCJlbXB0eVwiLFxuICAgIFwic3VibWFyaW5lXCIsXG4gICAgXCJwYXRyb2wgYm9hdFwiLFxuICAgIFwiY3J1aXNlclwiLFxuICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXCJiYXR0bGUgY2FycmllclwiLFxuICBdO1xuICBjb25zdCBwcm9ub3VuQXJyYXkgPSBbXG4gICAgeyAwOiBcInlvdVwiLCAxOiBcInRoZWlyXCIgfSxcbiAgICB7IDA6IFwidGhleVwiLCAxOiBcInlvdXJcIiB9LFxuICBdO1xuICBjb25zdCB1cGRhdGVUZXh0ID0gKHBsYXllck5hbWUsIGJvb2xlYW4sIGhpdCwgc3Vuaywgc2hpcCwgcGxheWVyKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gcGxheWVyID8gcHJvbm91bkFycmF5WzBdIDogcHJvbm91bkFycmF5WzFdO1xuICAgIGlmIChib29sZWFuKSB7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYEF0dGVudGlvbiAke3BsYXllck5hbWUuY29kZW5hbWV9OiBFcnJvciEgTXVzdCBzZWxlY3QgbmV3IGNvb3JkaW5hdGVzLmA7XG4gICAgfSBlbHNlIGlmIChzdW5rID09PSB0cnVlKSB7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gZmlyZXMgYSBzaG90IGFuZCAke3ZhbHVlWzBdfSBzdW5rICR7dmFsdWVbMV19ICR7c2hpcEFycmF5W3NoaXBdfSFgO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3RyaWtlID0gaGl0ID8gYGxhbmRzIGEgc3RyaWtlIWAgOiBgbWlzc2VzIWA7XG4gICAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZS5jb2RlbmFtZX0gYXR0YWNrcyBhbmQgJHtzdHJpa2V9YDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGVuZEdhbWUgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgbWFpbkMgPSBjb21tQy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgLy8gY2xlYXIgY29tbXMgYW5kIG1haW5cbiAgICBjbGVhckRpdihjb21tQyk7XG4gICAgY2xlYXJEaXYobWFpbkMpO1xuICAgIC8vIGJ1aWxkICdnYW1lIG92ZXInIGNvbnRlbnRcbiAgICBjb25zdCBlbmRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImVuZENvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGJhbm5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJiYW5uZXJcIiB9KTtcbiAgICBiYW5uZXIudGV4dENvbnRlbnQgPSBcIkdhbWUgT3ZlciFcIjtcbiAgICBjb25zdCB3aW5uZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwid2lubmVyXCIgfSk7XG4gICAgd2lubmVyLnRleHRDb250ZW50ID0gYFdpbm5lcjogJHtwbGF5ZXIuY29kZW5hbWV9YDtcbiAgICBjb25zdCBwbGF5QWdhaW4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicGxheUFnYWluXCIgfSk7XG4gICAgcGxheUFnYWluLnRleHRDb250ZW50ID0gYFBsYXkgQWdhaW5gO1xuICAgIG1haW5DLmFwcGVuZENoaWxkKGVuZEMpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKHdpbm5lcik7XG4gICAgZW5kQy5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyXG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBjbGVhciBjb250ZW50XG4gICAgICBtYWluQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1haW5DKTtcbiAgICAgIGNvbW1DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29tbUMpO1xuICAgICAgbWFrZUluaXRpYWxMaXRlKCk7XG4gICAgfSk7XG4gICAgLy8gaGlkZSBpbmZvIGJ1dHRvblxuICAgIG1haW5DLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgYnVpbGRDb21tcywgY2xlYXIsIGluc3RydWN0LCBtZXNzYWdlLCB1cGRhdGVUZXh0LCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb20gfTtcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5pbXBvcnQgeyBwbGFjZSB9IGZyb20gXCIuL3BsYWNlRmxlZXRET01cIjtcbmltcG9ydCBjcmVhdGVMZWdlbmQgZnJvbSBcIi4vbGVnZW5kRE9NXCI7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcbi8vXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICBsZXQgcGxheWVyO1xuICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICBwbGF5ZXIgPSBjb21wdXRlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllciA9IFBsYXllckZhY3RvcnkoYCR7cGxheWVyTmFtZX1gKTtcbiAgfVxuICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICBnYi5jcmVhdGUoMTApO1xuICBjb25zdCBmbGVldCA9IGJ1aWxkRmxlZXQoKTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9O1xufTtcbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJCb2FyZERPTTtcbiAgbGV0IGNvbXBCb2FyZERPTTtcbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiAocGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuKTtcbiAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQxLCBib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkQW5kTGFiZWwoYm9hcmQxLCBmYWxzZSwgXCJmcmllbmRseVwiKSk7XG4gICAgZGlzcGxheVNoaXBzKGJvYXJkMSwgcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkKTtcbiAgICBwbGF5ZXJCb2FyZERPTSA9IHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMiwgdHJ1ZSwgXCJlbmVteVwiLCBsb29wLnR1cm4pKTtcbiAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKCkpO1xuICAgIGNvbS5tZXNzYWdlKHBsYXllck9uZS5wbGF5ZXIsIGBsYXVuY2ggYW4gYXR0YWNrIWApO1xuICB9O1xuICBjb25zdCBpbml0aWFsaXplR2FtZSA9IChjYWxsc2lnbiwgcGFyZW50RE9NKSA9PiB7XG4gICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG4gICAgLy8gZGlzcGxheSBjb21tc1xuICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIFwiZmxleFwiO1xuICAgIC8vIGhhdmUgQUkgcGxhY2UgZmxlZXQsIHJhbmRvbWx5XG4gICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgIC8vIHByb21wdCB1c2VyIHRvIHBsYWNlIHNoaXBzXG4gICAgcGxhY2Uuc3RhcnQocGFyZW50RE9NLCBwMSwgcDIpO1xuICAgIHBsYXllck9uZSA9IHAxO1xuICAgIHBsYXllclR3byA9IHAyO1xuICAgIC8vIGRvbid0IHRoaW5rIEkgbmVlZCB0aGlzIHJldHVybiB2YWx1ZS4uXG4gICAgcmV0dXJuIHsgcDEsIHAyIH07XG4gIH07XG4gIGNvbnN0IGxhdW5jaEdhbWUgPSAocGFyZW50RE9NKSA9PiB7XG4gICAgaW5pdGlhbFR1cm4ocGxheWVyT25lLmdiLCBwbGF5ZXJUd28uZ2IsIHBhcmVudERPTSk7XG4gIH07XG4gIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gIGNvbnN0IHR1cm4gPSAoaW5wdXQpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgIC8vIGFrYSB1c2VyIGNsaWNrZWQgb24gY29vcmRpbmF0ZXMgZm9yIGEgc2Vjb25kIHRpbWVcbiAgICAgICAgLy8gcHJvbXB0IHVzZXIgZm9yIG5ldyBjb29yZGluYXRlc1xuICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCB0cnVlLCBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiB2YWxpZCBjb29yZGluYXRlc1xuICAgICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKGFpIGdhbWVib2FyZClcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0IG9uIGNvbW1zIChoaXQvbWlzcy9zdW5rKVxuICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdCwgcGxheWVyVHdvLmdiLCBjb21wQm9hcmRET00sIFwi8J+UsVwiKTtcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICByZXN1bHQudmFsdWUsXG4gICAgICAgICAgcmVzdWx0LnN1bmssXG4gICAgICAgICAgcmVzdWx0LnNoaXAsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhaSBwbGF5ZXIgbWFrZXMgYXR0YWNrXG4gICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKHVzZXIgZ2FtZWJvYXJkKVxuICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLnNtYXJ0QXR0YWNrKHBsYXllck9uZSk7XG4gICAgICBtYXJrQ2VsbChcbiAgICAgICAgcmVzdWx0LmNvb3JkWzBdLFxuICAgICAgICByZXN1bHQuY29vcmRbMV0sXG4gICAgICAgIHJlc3VsdC5vYmosXG4gICAgICAgIHBsYXllck9uZS5nYixcbiAgICAgICAgcGxheWVyQm9hcmRET00sXG4gICAgICAgIFwi8J+PtOKAjeKYoO+4j1wiXG4gICAgICApO1xuICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICByZXN1bHQub2JqLnZhbHVlLFxuICAgICAgICByZXN1bHQub2JqLnN1bmssXG4gICAgICAgIHJlc3VsdC5vYmouc2hpcCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm9iajtcbiAgICB9XG4gICAgaWYgKCFwbGF5ZXJUdXJuICYmICFyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gdGltZSBkZWxheSBiZWZvcmUgYWkgdHVyblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR1cm4oZmFsc2UpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIC8vIHJ1biBnYW1lb3ZlciBzZXF1ZW5jZVxuICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGdldFR1cm4sIGluaXRpYWxUdXJuLCBpbml0aWFsaXplR2FtZSwgbGF1bmNoR2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaWNvbnMvaW5mby5zdmdcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vaWNvbnMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IExpbmtlZEluIGZyb20gXCIuL2ljb25zL2xpbmtlZGluLnN2Z1wiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gXCIuL2NvbXNET01cIjtcblxuLy8gYnVpbGQgaW5pdGlhbCBwYWdlOiBoZWFkZXIsIGJvZHksIGZvb3RlclxuXG4vLyByZXZlYWwgaW5mbyBidG4gKGZvciBtb2JpbGUgdmVyc2lvbilcbmNvbnN0IGJ0blNob3cgPSAobWFpbkMpID0+IHtcbiAgbWFpbkMuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG1haW5DLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbn07XG5jb25zdCBidG5IaWRlID0gKG1haW5DKSA9PiB7XG4gIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG1haW5DLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG1haW5DLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5sZXQgaGVhZGVyQnRuID0gZmFsc2U7XG5jb25zdCBoZWFkZXJCdG5GbiA9IChtYWluQykgPT4ge1xuICBoZWFkZXJCdG4gPSAhaGVhZGVyQnRuO1xuICBpZiAoaGVhZGVyQnRuKSB7XG4gICAgYnRuU2hvdyhtYWluQyk7XG4gIH0gZWxzZSB7XG4gICAgYnRuSGlkZShtYWluQyk7XG4gIH1cbn07XG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImhlYWRlckNvbnRhaW5lclwiIH0pO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJUaXRsZVwiIH0pO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICBjb25zdCBtZW51QnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnVCdG5Db250YWluZXJcIiB9KTtcbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51QnRuXCIgfSk7XG4gIGNvbnN0IG1lbnVJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcIm1lbnVJY29uXCIgfSk7XG4gIG1lbnVJY29uLnNyYyA9IEluZm87XG4gIG1lbnVJY29uLmFsdCA9IFwiSW5mb1wiO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGVhZGVyQnRuRm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tYWluQ29udGFpbmVyXCIpKTtcbiAgfSk7XG4gIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZEMuYXBwZW5kQ2hpbGQobWVudUJ0bkNvbnRhaW5lcik7XG4gIG1lbnVCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIG1lbnVCdG4uYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICByZXR1cm4gaGVhZEM7XG59O1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290QyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJmb290ZXJDb250YWluZXJcIiB9KTtcbiAgY29uc3QgZm9vdGVyQm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImZvb3RlckJveFwiIH0pO1xuICBjb25zdCBsaW5rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImxpbmtDb250YWluZXJcIiB9KTtcbiAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb25ub3J3YXJtZVwiLFxuICAgIGFsdDogXCJHaXRodWIgUHJvZmlsZVwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZ2l0SWNvblwiIH0pO1xuICBnaXRJY29uLnNyYyA9IEdpdGh1YjtcbiAgZ2l0SWNvbi5hbHQgPSBcIkdpdGh1YiBQcm9maWxlXCI7XG4gIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci13YXJtZS0xMDNhMDkxNjdcIixcbiAgICBhbHQ6IFwiTGlua2VkSW4gUHJvZmlsZVwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IGxpbmtJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImxpbmtJY29uXCIgfSk7XG4gIGxpbmtJY29uLnNyYyA9IExpbmtlZEluO1xuICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZXh0Q29udGFpbmVyXCIgfSk7XG4gIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gIGZvb3RlckJveC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rTGluayk7XG4gIGxpbmtMaW5rLmFwcGVuZENoaWxkKGxpbmtJY29uKTtcbiAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuICByZXR1cm4gZm9vdEM7XG59O1xuLy9cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcbiAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbml0aWFsQ29udGVudFwiIH0pO1xuICBjb25zdCBpbmZvQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnN0cnVjdGlvbnNDb250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb25zXCIgfSk7XG4gIGluc3RydWN0LnRleHRDb250ZW50ID0gXCJFbGltaW5hdGUgdGhlIGVuZW15IGZsZWV0IVwiO1xuICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXRDb250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIGlkOiBcInVzZXJuYW1lXCIsXG4gICAgY2xhc3M6IFwiaW5wdXRGaWVsZFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkFxdWFtYW4g8J+UsVwiLFxuICB9KTtcbiAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGZvcjogXCJ1c2VybmFtZVwiIH0pO1xuICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBQbGF5ZXIgTmFtZTpcIjtcbiAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInN0YXJ0Q29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInN0YXJ0XCIgfSk7XG4gIHN0YXJ0LnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lIVwiO1xuXG4gIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+IGNsZWFyRGl2KG1haW5DKTtcbiAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAvLyBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eVxuICAgIGxldCBjYWxsc2lnbiA9IFwiQXF1YW1hbiDwn5SxXCI7XG4gICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICBjYWxsc2lnbiA9IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgY2xlYXJNYWluKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3BcbiAgICBsb29wLmluaXRpYWxpemVHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gIH07XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3RhcnRGbigpO1xuICB9KTtcbiAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICBtYWluLmFwcGVuZENoaWxkKG1haW5DKTtcbiAgbWFpbkMuYXBwZW5kQ2hpbGQoaW5pdGlhbEMpO1xuICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbmZvQyk7XG4gIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5wdXRDKTtcbiAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbml0aWFsQy5hcHBlbmRDaGlsZChzdGFydEMpO1xuICBzdGFydEMuYXBwZW5kQ2hpbGQoc3RhcnQpO1xuICByZXR1cm4gbWFpbjtcbn07XG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvZHlcIiB9KTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufTtcbmNvbnN0IG1ha2VJbml0aWFsTGl0ZSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuYm9keVwiKTtcbiAgYm9keS5pbnNlcnRCZWZvcmUoY29tLmJ1aWxkQ29tbXMoKSwgYm9keS5jaGlsZHJlblsxXSk7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5Db250ZW50KCksIGJvZHkuY2hpbGRyZW5bMl0pO1xufTtcbmV4cG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIGJ1aWxkIGxlZ2VuZCB0byBleHBsYWluIGVtb2ppcywgcHJvdmlkZSBkZXRhaWxlZCBpbnN0cnVjdGlvbnNcbmNvbnN0IHNoaXAgPSB7XG4gIGVtb2ppOiBcIiBcIixcbiAgdGV4dDogXCJmcmllbmRseSBzaGlwXCIsXG4gIGNsYXNzOiBcInNoaXBcIixcbn07XG5jb25zdCB3YXZlID0ge1xuICBlbW9qaTogXCLwn4yKXCIsXG4gIHRleHQ6IFwiYXR0YWNrIG1pc3NcIixcbiAgY2xhc3M6IFwibWlzc1wiLFxufTtcbmNvbnN0IGhpdCA9IHtcbiAgZW1vamk6IFwi8J+UpVwiLFxuICB0ZXh0OiBcImF0dGFjayBoaXRcIixcbiAgY2xhc3M6IFwiaGl0XCIsXG59O1xuY29uc3Qgc3VuayA9IHtcbiAgZW1vamk6IFwi8J+UsVwiLFxuICB0ZXh0OiBcInlvdSBzdW5rIGVuZW15IHNoaXBcIixcbiAgY2xhc3M6IFwic3Vua1wiLFxufTtcbmNvbnN0IGVuZW15U3VuayA9IHtcbiAgZW1vamk6IFwi8J+PtOKAjeKYoO+4j1wiLFxuICB0ZXh0OiBcImVuZW15IHN1bmsgZnJpZW5kbHkgc2hpcFwiLFxuICBjbGFzczogXCJzdW5rXCIsXG59O1xuY29uc3QgZW1vamlBcnJheSA9IFtzaGlwLCB3YXZlLCBoaXQsIHN1bmssIGVuZW15U3Vua107XG5jb25zdCBjcmVhdGVMZWdlbmQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsZWdlbmRDb250YWluZXJcIiB9KTtcbiAgY29uc3QgbGVnZW5kQm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImxlZ2VuZEJveFwiIH0pO1xuICBsZWdlbmRCb3gudGV4dENvbnRlbnQgPSBcIkxlZ2VuZDpcIjtcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzOiBcImxlZ2VuZExpc3RcIiB9KTtcbiAgZW1vamlBcnJheS5mb3JFYWNoKChlbW9qaSkgPT4ge1xuICAgIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwiZW1vamlMaVwiIH0pO1xuICAgIGNvbnN0IGJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogYGVtb2ppQm94ICR7ZW1vamkuY2xhc3N9YCB9KTtcbiAgICBib3gudGV4dENvbnRlbnQgPSBgJHtlbW9qaS5lbW9qaX1gO1xuICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZW1vamlUZXh0XCIgfSk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGAtICR7ZW1vamkudGV4dH1gO1xuICAgIGxpLmFwcGVuZENoaWxkKGJveCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuICBsZWdlbmRCb3guYXBwZW5kQ2hpbGQobGlzdCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRCb3gpO1xuICBjb25zdCBpbnN0cnVjdEJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnN0cnVjdEJveFwiIH0pO1xuICBpbnN0cnVjdEJveC50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zOlwiO1xuICBjb25zdCBpbnN0cnVjdFRleHQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUZXh0XCIgfSk7XG4gIGluc3RydWN0VGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJTZWxlY3QgY29vcmRpbmF0ZXMgaW4gZW5lbXkgd2F0ZXJzIHRvIGxhdW5jaCBhbiBhdHRhY2suIFRoZSBib2FyZCB3aWxsIGluZGljYXRlIGEgaGl0IG9yIG1pc3MsIG9yIGlmIHlvdSBzdW5rIHRoZSBlbmVteSBzaGlwLiBGaW5kIGFuZCBlbGltaW5hdGUgYWxsIGZpdmUgZW5lbXkgc2hpcHMgYmVmb3JlIHRoZXkgZWxpbWluYXRlIHlvdXJzIVwiO1xuICBjb25zdCBvYmplY3RpdmVCb3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwib2JqZWN0aXZlQm94XCIgfSk7XG4gIG9iamVjdGl2ZUJveC50ZXh0Q29udGVudCA9IFwiT2JqZWN0aXZlOlwiO1xuICBjb25zdCBvYmplY3RpdmVUZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm9iamVjdGl2ZVRleHRcIiB9KTtcbiAgb2JqZWN0aXZlVGV4dC50ZXh0Q29udGVudCA9IFwiU2luayB0aGUgZW5lbXkgZmxlZXQhXCI7XG4gIG9iamVjdGl2ZUJveC5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZUJveCk7XG4gIGluc3RydWN0Qm94LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdEJveCk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGVnZW5kO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IGJ1aWxkQm9hcmQsIGRpc3BsYXlTaGlwcyB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5pbXBvcnQgbG9vcCBmcm9tIFwiLi9nYW1lbG9vcFwiO1xuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gIGxldCBheGlzID0gdHJ1ZTtcbiAgY29uc3QgY3VycmVudEF4aXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aXM7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZURpc3BsYXkgPSAob3Bwb25lbnQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwicGxhY2VDb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBidXR0b25DID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInBsYWNlQnRuQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgYXhpc0J0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJheGlzQnRuXCIgfSk7XG4gICAgYXhpc0J0bi50ZXh0Q29udGVudCA9IGBSb3RhdGVgO1xuICAgIGNvbnN0IHJhbmRvbUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJyYW5kb21CdG5cIiB9KTtcbiAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSBcIlJhbmRvbVwiO1xuICAgIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInBsYWNlSW5zdHJ1Y3Rpb25zXCIgfSk7XG4gICAgY29uc3QgaW5zdHJ1Y3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnN0cnVjdFRpdGxlXCIgfSk7XG4gICAgaW5zdHJ1Y3RUaXRsZS50ZXh0Q29udGVudCA9IFwiSW5zdHJ1Y3Rpb25zOlwiO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dDEgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUZXh0XCIgfSk7XG4gICAgaW5zdHJ1Y3RUZXh0MS50ZXh0Q29udGVudCA9IGBTZWxlY3QgY29vcmRpbmF0ZXMgb24gYm9hcmQgdG8gcGxhY2UgY3VycmVudCBzaGlwLmA7XG4gICAgY29uc3QgaW5zdHJ1Y3RUZXh0MiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnN0cnVjdFRleHRcIiB9KTtcbiAgICBpbnN0cnVjdFRleHQyLnRleHRDb250ZW50ID0gYFVzZSBidXR0b25zIHRvIHJvdGF0ZSBzaGlwIG9yIHJhbmRvbWx5IGRlcGxveSBlbnRpcmUgZmxlZXQuYDtcbiAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgYXhpc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYXhpcyA9ICFheGlzO1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnQgYm9hcmRcbiAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgLy8gYnVpbGQgbmV3IGJvYXJkIHcvIGNvcnJlY3QgbGlzdGVuZXJzXG4gICAgICBwZXJTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRCb2FyZCwgY3VycmVudFNoaXApO1xuICAgIH0pO1xuICAgIHJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gcGxhY2UgdXNlciBmbGVldCwgZmluaXNoIHBsYWNlRmxlZXQgJiBpbnN0YW50aWF0ZSBuZXh0IHN0ZXBcbiAgICAgIG9wcG9uZW50LnBsYXllci5wbGFjZUZsZWV0KGN1cnJlbnRPYmopO1xuICAgICAgY3VycmVudERPTS5yZW1vdmVDaGlsZChjdXJyZW50RE9NLmxhc3RDaGlsZCk7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KTtcbiAgICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkMpO1xuICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQoYXhpc0J0bik7XG4gICAgYnV0dG9uQy5hcHBlbmRDaGlsZChyYW5kb21CdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUaXRsZSk7XG4gICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0MSk7XG4gICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0Mik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfTtcbiAgLy8gY2hlY2sgaWYgY29vcmRpbmF0ZXMgeWllbGQgc2hpcCBwbGFjZW1lbnQgb24gdGhlIGJvYXJkXG4gIC8vIG9yIGlmIHRoZXkgY29uZmxpY3Qgd2l0aCBhbHJlYWR5IHBsYWNlZCBzaGlwXG4gIGNvbnN0IGNoZWNrQ2VsbCA9IChnYW1lYm9hcmQsIHNoaXAsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBpZiAoXG4gICAgICBnYW1lYm9hcmQuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KSB8fFxuICAgICAgZ2FtZWJvYXJkLmNoZWNrUGxhY2Uoc2hpcC5sZW5ndGgsIGF4aXMsIHgsIHkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBBcnJheS5mcm9tKGVsZW1lbnQuaWQpO1xuICAgIGxldCBuZXdJZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXhpcykge1xuICAgICAgICBuZXdJZCA9IGAke051bWJlcihjb29yZFswXSkgKyBpfSR7Y29vcmRbMV19YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0lkID0gYCR7Y29vcmRbMF19JHtOdW1iZXIoY29vcmRbMV0pICsgaX1gO1xuICAgICAgfVxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsaWNrRm4gPSAoeCwgeSkgPT4ge1xuICAgIGN1cnJlbnRPYmouZ2IucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBheGlzLCB4LCB5KTtcbiAgICBjb3VudCsrO1xuICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgIG5leHRTaGlwKGN1cnJlbnRET00sIGN1cnJlbnRPYmopO1xuICB9O1xuICBjb25zdCBjbGlja0F0dGFjayA9IChlbGVtZW50LCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY2xpY2tGbih4LCB5KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaG92ZXIgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgLy8gb24gZW50ZXIsIGhpZ2hsaWdodCAoZ3JheSBpcyB2YWxpZCwgcmVkIGlzIG5vdC1hbGxvd2VkKVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgICAgLy8gY291bGQgYWRkIGEgY2xhc3MuLi5cbiAgICAgIGlmIChjaGVja0NlbGwoZ2FtZWJvYXJkLCBzaGlwLCBjdXJyZW50QXhpcygpLCB4LCB5KSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgICBoaWdobGlnaHRMZW5ndGgoZWxlbWVudCwgc2hpcC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjA4LCAwLCAwKVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIG9uIGV4aXQsIHJlbW92ZSBob3ZlciBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZ3JpZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5jZWxsXCIpKTtcbiAgICAgIGdyaWQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFkZENlbGxMaXN0ZW5lcnMgPSAoZ2FtZWJvYXJkLCBzaGlwKSA9PiB7XG4gICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2LmNlbGxcIikpO1xuICAgIGNlbGxBcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDApKTtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgaG92ZXIoY2VsbCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KTtcbiAgICAgIGNsaWNrQXR0YWNrKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgfSk7XG4gIH07XG4gIGxldCBjdXJyZW50T2JqO1xuICBsZXQgY3VycmVudEJvYXJkO1xuICBsZXQgY3VycmVudFNoaXA7XG4gIGxldCBmbGVldEtleXM7XG4gIGxldCBjdXJyZW50RE9NO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCB1cGRhdGVBbGxDdXJyZW50cyA9IChwYXJlbnQsIG9iamVjdCkgPT4ge1xuICAgIGN1cnJlbnRET00gPSBwYXJlbnQ7XG4gICAgY3VycmVudE9iaiA9IG9iamVjdDtcbiAgICBjdXJyZW50Qm9hcmQgPSBvYmplY3QuZ2I7XG4gICAgZmxlZXRLZXlzID0gT2JqZWN0LmtleXMob2JqZWN0LmZsZWV0KTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlQ3VycmVudFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgIGN1cnJlbnRTaGlwID0gc2hpcDtcbiAgfTtcbiAgY29uc3QgbmV4dFNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmopID0+IHtcbiAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICBjb20uaW5zdHJ1Y3QocGxheWVyT2JqLnBsYXllciwgZmxlZXRLZXlzW2NvdW50XSk7XG4gICAgICBwZXJTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqLmdiLCBwbGF5ZXJPYmouZmxlZXRbZmxlZXRLZXlzW2NvdW50XV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5leHQgc3RlcCBvZiBnYW1lbG9vcCFcIik7XG4gICAgICBmaW5pc2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBlclNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJCb2FyZCwgc2hpcCkgPT4ge1xuICAgIHVwZGF0ZUN1cnJlbnRTaGlwKHNoaXApO1xuICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkKHBsYXllckJvYXJkLCBmYWxzZSkpO1xuICAgIGRpc3BsYXlTaGlwcyhjdXJyZW50Qm9hcmQsIGN1cnJlbnRET00uY2hpbGRyZW5bMF0pO1xuICAgIGFkZENlbGxMaXN0ZW5lcnMocGxheWVyQm9hcmQsIHNoaXApO1xuICB9O1xuICBjb25zdCBzdGFydCA9IChwYXJlbnRET00sIHBsYXllck9iaiwgb3Bwb25lbnRPYmopID0+IHtcbiAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKFxuICAgICAgY3JlYXRlRGlzcGxheShvcHBvbmVudE9iailcbiAgICApO1xuICAgIHVwZGF0ZUFsbEN1cnJlbnRzKHBhcmVudERPTSwgcGxheWVyT2JqKTtcbiAgICBuZXh0U2hpcChwYXJlbnRET00sIHBsYXllck9iaik7XG4gIH07XG4gIGNvbnN0IGZpbmlzaCA9ICgpID0+IHtcbiAgICBjb20uY2xlYXIoKTtcbiAgICAvLyBpbnZva2UgbmV4dCBzdGVwIGluIGdhbWVsb29wLCBiYXR0bGUgbW9kZVxuICAgIC8vIGhvdyBjYW4gSSBzbW9vdGggdGhpcyB0cmFuc2l0aW9uPyAoZWFzZS1pbik/ICEhIVxuICAgIGxvb3AubGF1bmNoR2FtZShjdXJyZW50RE9NKTtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA1NTBweClcIikpIHtcbiAgICAgIGN1cnJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICBcImJsb2NrXCI7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBob3Zlciwgc3RhcnQgfTtcbn0pKCk7XG5leHBvcnQgeyBwbGFjZSB9O1xuIiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5jb25zdCBQbGF5ZXJGYWN0b3J5ID0gKGNvZGVuYW1lKSA9PiB7XG4gIGxldCB3aW5zID0gMDtcbiAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICByZXR1cm4gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdKTtcbiAgfTtcbiAgY29uc3QgYWRkV2luID0gKCkgPT4gKHdpbnMgKz0gMSk7XG4gIHJldHVybiB7IGNvZGVuYW1lLCB3aW5zLCBhdHRhY2ssIGFkZFdpbiB9O1xufTtcbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICBjb25zdCBhaSA9IFBsYXllckZhY3RvcnkoXCJUaGUgS3Jha2VuXCIpO1xuICBjb25zdCBuZXdQcm9iID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICBwcm9iLmNyZWF0ZSgxMCk7XG4gICAgcmV0dXJuIHByb2I7XG4gIH07XG4gIGNvbnN0IHNob3QgPSBCb2FyZEZhY3RvcnkoKTtcbiAgc2hvdC5jcmVhdGUoMTApO1xuICBjb25zdCBfZ2VuZXJhdGUgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gIGNvbnN0IF9nZW5lcmF0ZVJhbmRvbUF0dGFjayA9ICgpID0+IHtcbiAgICBsZXQgeCA9IF9nZW5lcmF0ZSgpO1xuICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcbiAgY29uc3QgYXR0YWNrc0FycmF5ID0gW107XG4gIGNvbnN0IF9hdmFpbGFibGUgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0YWNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzBdID09PSBhcnJheVswXSkge1xuICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBfZ2VuZXJhdGVDb29yZCA9ICgpID0+IHtcbiAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICB3aGlsZSAoIV9hdmFpbGFibGUoY29vcmQpKSB7XG4gICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmQ7XG4gIH07XG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBjb29yZCA9IF9nZW5lcmF0ZUNvb3JkKCk7XG4gICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gb3Bwb3NpdGlvbidzIGJvYXJkXG4gICAgYXR0YWNrc0FycmF5LnB1c2goY29vcmQpO1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9iai5jb29yZCA9IGNvb3JkO1xuICAgIG9iai5vYmogPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAoYXhpcyA9PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBjb25zdCBwbGFjZUZsZWV0ID0gKHBsYXllcikgPT4ge1xuICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgY29uc3QgZmxlZXRLZXlzID0gT2JqZWN0LmtleXMocGxheWVyLmZsZWV0KTtcbiAgICBmbGVldEtleXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICB3aGlsZSAoXG4gICAgICAgICFwbGF5ZXIuZ2IucGxhY2VTaGlwKHBsYXllci5mbGVldFtzaGlwXSwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKVxuICAgICAgKSB7XG4gICAgICAgIGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBoaXRDb29yZHNBcnJheSA9IFtdO1xuICBjb25zdCBfYWRkVG9IaXRDb29yZHMgPSAoaW5wdXQpID0+IHtcbiAgICBoaXRDb29yZHNBcnJheS5wdXNoKGlucHV0KTtcbiAgfTtcbiAgY29uc3QgX2NsZWFySGl0Q29vcmRzID0gKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gaGl0Q29vcmRzQXJyYXkuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWVbMF0gPT0gY29vcmRbMF0gJiYgdmFsdWVbMV0gPT0gY29vcmRbMV0pIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaGl0Q29vcmRzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgX3VwZGF0ZVNob3RCb2FyZCA9IChvYmplY3QsIHBsYXllcikgPT4ge1xuICAgIGNvbnN0IGNvb3JkID0gb2JqZWN0LmNvb3JkO1xuICAgIGlmIChvYmplY3Qub2JqLnZhbHVlID09IHRydWUpIHtcbiAgICAgIGlmIChvYmplY3Qub2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyLmdiLndoaWNoU2hpcChvYmplY3Qub2JqLnNoaXApO1xuICAgICAgICBfY2xlYXJIaXRDb29yZHMoc2hpcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfYWRkVG9IaXRDb29yZHMoY29vcmQpO1xuICAgICAgfVxuICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gLTE7XG4gICAgfVxuICB9O1xuICBjb25zdCBfYWRkVG9Qcm9iQm9hcmQgPSAoZ2IsIHByb2JCb2FyZCwgbGVuZ3RoLCBib29sZWFuLCB4LCB5KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY291bnRlcldlaWdodCA9IGdiLmNoZWNrUHJvYihsZW5ndGgsIGJvb2xlYW4sIHgsIHksIGhpdENvb3Jkc0FycmF5KTtcbiAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgIHByb2JCb2FyZFtOdW1iZXIoeCkgKyBpXVt5XSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvYkJvYXJkW3hdW051bWJlcih5KSArIGldICs9IGNvdW50ZXJXZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIF9yZW1vdmVIaXRzKGdiLCBwcm9iQm9hcmQpO1xuICB9O1xuICAvLyBldmFsdWF0ZSBob3cgdG8gaW1wcm92ZSBjaGVja1BsYWNlIGZvciBcImh1bnQgbW9kZVwiXG5cbiAgY29uc3QgX3JlbW92ZUhpdHMgPSAoZ2IsIHByb2JCb2FyZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGdiLmJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgIHByb2JCb2FyZFtpXVtqXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IF9zaGlwUHJvYiA9IChnYiwgc2hpcCwgcHJvYikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2IuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICEoXG4gICAgICAgICAgICBnYi5jaGVja09uQm9hcmQoc2hpcC5sZW5ndGgsIHRydWUsIGksIGopIHx8XG4gICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIHRydWUsIGksIGopXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgZ2IuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaikgfHxcbiAgICAgICAgICAgIGdiLmNoZWNrTWlzcyhzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IF9mbGVldFByb2IgPSAoYm9hcmQsIGZsZWV0LCBwcm9iKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBPYmplY3Qua2V5cyhmbGVldCk7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFmbGVldFtzaGlwXS5zdW5rKSBfc2hpcFByb2IoYm9hcmQsIGZsZWV0W3NoaXBdLCBwcm9iKTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgX2dldFByb2JDb29yZHMgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50TWF4ID0ge1xuICAgICAgbWF4OiAwLFxuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoYm9hcmRbaV1bal0gPiBjdXJyZW50TWF4Lm1heCkge1xuICAgICAgICAgIGN1cnJlbnRNYXgubWF4ID0gYm9hcmRbaV1bal07XG4gICAgICAgICAgY3VycmVudE1heC5jb29yZHMgPSBbaSwgal07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRNYXg7XG4gIH07XG4gIC8vIGJ1aWxkIHNtYXJ0QUkgYXR0YWNrIG1vZGU6XG4gIGNvbnN0IHNtYXJ0QXR0YWNrID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IHByb2IgPSBuZXdQcm9iKCk7XG4gICAgLy8gdXBkYXRlZCBwcm9iYWJpbGl0eSBib2FyZDsgbmVlZHMgYWNjZXNzIHRvIHVzZXIncyBmbGVldFxuICAgIF9mbGVldFByb2Ioc2hvdCwgcGxheWVyLmZsZWV0LCBwcm9iKTtcbiAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgYmVzdCBjZWxsXG4gICAgY29uc3QgY29vcmQgPSBfZ2V0UHJvYkNvb3Jkcyhwcm9iLmJvYXJkKTtcbiAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIHRob3NlIGNvb3Jkc1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9iai5jb29yZCA9IGNvb3JkLmNvb3JkcztcbiAgICBvYmoub2JqID0gcGxheWVyLmdiLnJlY2VpdmVBdHRhY2sob2JqLmNvb3JkWzBdLCBvYmouY29vcmRbMV0pO1xuICAgIC8vIGNoZWNrIGF0dGFjayBpbnRlbDogaGl0IG9yIG1pc3MsIHN1bms/XG4gICAgX3VwZGF0ZVNob3RCb2FyZChvYmosIHBsYXllcik7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAgYWksXG4gICAgeyByYW5kb21BdHRhY2sgfSxcbiAgICB7IHNtYXJ0QXR0YWNrIH0sXG4gICAgeyBwbGFjZUZsZWV0IH1cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH07XG4iLCIvLyBzaGlwIGxvZ2ljXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICBjb25zdCBsZW5ndGggPSBpbnB1dDtcbiAgbGV0IGhpdHMgPSAwO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgbWFya2VyID0gbGVuZ3RoO1xuICBpZiAobWFyaykge1xuICAgIG1hcmtlciA9IG1hcms7XG4gIH1cbiAgY29uc3QgY29vcmRzID0gW107XG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH07XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gbGVuZ3RoIDw9IGhpdHMgPyAoc3VuayA9IHRydWUpIDogKHN1bmsgPSBmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGhpdFBsdXMgPSAoKSA9PiB7XG4gICAgaGl0KCk7XG4gICAgcmV0dXJuIGlzU3VuaygpO1xuICB9O1xuICByZXR1cm4geyBsZW5ndGgsIHN1bmssIG1hcmtlciwgY29vcmRzLCBnZXRIaXRzLCBoaXQsIGlzU3VuaywgaGl0UGx1cyB9O1xufTtcbmNvbnN0IGJ1aWxkRmxlZXQgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXBGYWN0b3J5KDMsIDEpO1xuICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcEZhY3RvcnkoMyk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwRmFjdG9yeSg0KTtcbiAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICByZXR1cm4geyBzdWJtYXJpbmUsIHBhdHJvbCwgZGVzdHJveWVyLCBiYXR0bGVzaGlwLCBjYXJyaWVyIH07XG59O1xuZXhwb3J0IHsgU2hpcEZhY3RvcnksIGJ1aWxkRmxlZXQgfTtcbiIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufTtcbmNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWxlbWVudCwgYXR0cmlidXRlcykgPT4ge1xuICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuY29uc3QgY2xlYXJEaXYgPSAoZGl2KSA9PiB7XG4gIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5pdGlhbERPTS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==