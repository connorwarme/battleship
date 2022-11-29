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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gameloop.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXNET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luaXRpYWxET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sZWdlbmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGFjZUZsZWV0RE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYm9hcmQgbG9naWNcblxuY29uc3QgQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBjcmVhdGUgPSAobGVuZ3RoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICByb3cucHVzaCgwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgY29uc3QgcGxhY2VTaGlwID0gKG9iamVjdCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGNoZWNrT25Cb2FyZChvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KSB8fFxuICAgICAgY2hlY2tQbGFjZShvYmplY3QubGVuZ3RoLCBheGlzLCB4LCB5KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeCArIGldW3ldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4ICsgaSwgeV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSBvYmplY3QubWFya2VyO1xuICAgICAgICBvYmplY3QuY29vcmRzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNoaXBBcnJheS5wdXNoKG9iamVjdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrUGxhY2UgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCArIGldW3ldID4gMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5ICsgaV0gPiAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSBhcnJheS5maW5kKChpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIGluZGV4ID09IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBjaGVja01pc3MgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeCArIGldW3ldID09IC0xKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3hdW3kgKyBpXSA9PSAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gYXJyYXkuZmluZCgoaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tQcm9iID0gKGxlbmd0aCwgYXhpcywgeCwgeSwgaGl0Q29vcmRBcnJheSkgPT4ge1xuICAgIGxldCB3ZWlnaHQgPSAxO1xuICAgIGNvbnN0IHNoaXBDb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXhpcykge1xuICAgICAgICBzaGlwQ29vcmRzLnB1c2goW051bWJlcih4KSArIGksIHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBDb29yZHMucHVzaChbeCwgTnVtYmVyKHkpICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBoaXRDb29yZEFycmF5LmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAvLyBuZWVkIHRvIGNvbXBhcmUgc2hpcENvb3JkaW5hdGVzIHdpdGggaGl0Q29vcmRpbmF0ZXNBcnJheVxuICAgICAgLy8gaWYgeWVzLCBpbmNyZWFzZSB3ZWlnaHQgeCA1MFxuICAgICAgLy8gaWYgbm8sIG5vcm1hbCB3ZWlnaHQgZm9yIGNlbGwgY291bnRlciBmb3IgcHJvYk1hcFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjb29yZFswXSA9PSBzaGlwQ29vcmRzW2ldWzBdKSB7XG4gICAgICAgICAgaWYgKGNvb3JkWzFdID09IHNoaXBDb29yZHNbaV1bMV0pIHtcbiAgICAgICAgICAgIHdlaWdodCAqPSA1MDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gd2VpZ2h0O1xuICB9O1xuICBjb25zdCBjaGVja09uQm9hcmQgPSAobGVuZ3RoLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChheGlzKSB7XG4gICAgICB2YWx1ZSA9IHggKyBsZW5ndGg7XG4gICAgICByZXR1cm4gdmFsdWUgPiBib2FyZC5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0geSArIGxlbmd0aDtcbiAgICAgIHJldHVybiB2YWx1ZSA+IGJvYXJkW3hdLmxlbmd0aDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHdoaWNoU2hpcCA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiBzaGlwQXJyYXkuZmluZCgoaW5kZXgpID0+IGluZGV4Lm1hcmtlciA9PT0gaW5wdXQpO1xuICB9O1xuICBjb25zdCBhbGxTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KChpbmRleCkgPT4gaW5kZXguaXNTdW5rKCkgPT09IHRydWUpO1xuICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gIGNvbnN0IF9hZGRNaXNzID0gKHgsIHkpID0+IG1pc3NlZEF0dGFja3MucHVzaChbeCwgeV0pO1xuICBjb25zdCBfdXBkYXRlQm9hcmQgPSAoeCwgeSwgdmFsdWUpID0+IChib2FyZFt4XVt5XSA9IHZhbHVlKTtcbiAgY29uc3QgX3VwZGF0ZU1pc3MgPSAoeCwgeSkgPT4ge1xuICAgIF9hZGRNaXNzKHgsIHkpO1xuICAgIF91cGRhdGVCb2FyZCh4LCB5LCAtMSk7XG4gIH07XG4gIGNvbnN0IF91cGRhdGVIaXQgPSAoeCwgeSkgPT4ge1xuICAgIGNvbnN0IHRoZVNoaXAgPSB3aGljaFNoaXAoYm9hcmRbeF1beV0pO1xuICAgIGNvbnN0IHN1bmsgPSB0aGVTaGlwLmhpdFBsdXMoKTtcbiAgICBfdXBkYXRlQm9hcmQoeCwgeSwgYm9hcmRbeF1beV0gKyAxMCk7XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG4gIGNvbnN0IF9jaGVja0F0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldID4gMTAgfHwgYm9hcmRbeF1beV0gPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IF9sYXVuY2hBdHRhY2sgPSAoeCwgeSwgb2JqKSA9PiB7XG4gICAgb2JqLnZhbHVlID0gYm9hcmRbeF1beV07XG4gICAgaWYgKG9iai52YWx1ZSA+IDApIHtcbiAgICAgIC8vIGlmIGEgaGl0OlxuICAgICAgLy8gLT4gY2hlY2sgd2hpY2ggc2hpcCBpdCBpcywgYWRkIGhpdCAodG8gYm9hcmQgJiB0byBkaXNwbGF5KVxuICAgICAgLy8gLT4gc2VlIGlmIGl0IHN1bmsgYW5kIHVwZGF0ZSBhY2NvcmRpbmdseVxuICAgICAgLy8gLT4gY2hhbmdlIHJldHVybiBmcm9tIHZhbHVlIHRvIHRydWVcbiAgICAgIGNvbnN0IHN1bmsgPSBfdXBkYXRlSGl0KHgsIHkpO1xuICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgb2JqLnN1bmsgPSB0cnVlO1xuICAgICAgICBpZiAoYWxsU3VuaygpKSB7XG4gICAgICAgICAgb2JqLmFsbFN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvYmouc2hpcCA9IG9iai52YWx1ZTtcbiAgICAgIG9iai52YWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGFrYSBhIG1pc3M6XG4gICAgICAvLyAtPiB1cGRhdGUgZ2FtZWJvYXJkIHcvIC0xIChmb3IgbWlzcylcbiAgICAgIC8vIC0+IHVwZGF0ZSBkaXNwbGF5XG4gICAgICBfdXBkYXRlTWlzcyh4LCB5KTtcbiAgICAgIG9iai52YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICBzdW5rOiBmYWxzZSxcbiAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgIH07XG4gICAgaWYgKF9jaGVja0F0dGFjayh4LCB5KSkge1xuICAgICAgcmV0dXJuIF9sYXVuY2hBdHRhY2soeCwgeSwgb2JqKTtcbiAgICB9XG4gICAgLy8gZWxzZSwgdXNlciBzZWxlY3RlZCBpbmVsaWdpYmxlIGNvb3JkaW5hdGVzXG4gICAgLy8gYW5kIG5ldyBjb29yZGluYXRlcyBuZWVkZWRcbiAgICBvYmoudmFsdWUgPSAwO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgY3JlYXRlLFxuICAgIHBsYWNlU2hpcCxcbiAgICBjaGVja1BsYWNlLFxuICAgIGNoZWNrTWlzcyxcbiAgICBjaGVja1Byb2IsXG4gICAgY2hlY2tPbkJvYXJkLFxuICAgIHdoaWNoU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2FyZEZhY3Rvcnk7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgYXR0YWNrSG92ZXIgPSAoZWxlbWVudCkgPT4ge1xuICAvLyBvbiBlbnRlciwgaGlnaGxpZ2h0XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIGNlbGwgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbFwiKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiY3Jvc3NoYWlyXCI7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzM4QjAwMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgfVxuICB9KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XG4gICAgZ3JpZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBoaXRcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIG1pc3NcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDM1LCAxMDAsIDE3MClcIjtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QudmFsdWUgPT0gXCJjZWxsIHN1bmtcIikge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuLy8gcmVuZGVyIGdhbWVib2FyZHMgb24gcGFnZVxuY29uc3QgYnVpbGRCb2FyZCA9IChvYmplY3QsIGJvb2xlYW4sIGZ1bmN0KSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICBjb25zdCBkaXNwbGF5Qm9hcmQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZGlzcGxheUJvYXJkXCIgfSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBncmlkQ29sID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBgY29sYCwgaWQ6IGAke2l9YCB9KTtcbiAgICBkaXNwbGF5Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZENvbCk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgZ3JpZENlbGwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBjZWxsYCwgaWQ6IGAke2l9JHtqfWAgfSk7XG4gICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgZm9yIGdhbWVwbGF5XG4gICAgICAgIC8vIGFuZCBhZGQgYXR0YWNrIGhvdmVyIGZlYXR1cmVcbiAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGxvb3AuZ2V0VHVybigpKSB7XG4gICAgICAgICAgICBmdW5jdChbaSwgal0sIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF0dGFja0hvdmVyKGdyaWRDZWxsKTtcbiAgICAgIH1cbiAgICAgIGdyaWRDb2wuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGlzcGxheUJvYXJkO1xufTtcbmNvbnN0IGRpc3BsYXlTaGlwcyA9IChvYmplY3QsIGJvYXJkRE9NKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gb2JqZWN0LmJvYXJkO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICBib2FyZERPTS5jaGlsZHJlbltpXS5jaGlsZHJlbltqXS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5jb25zdCBtYXJrQ2VsbCA9ICh4LCB5LCByZXN1bHQsIGdiLCBib2FyZERPTSwgZW1vamkpID0+IHtcbiAgaWYgKHJlc3VsdC5zdW5rKSB7XG4gICAgY29uc3Qgc2hpcCA9IGdiLndoaWNoU2hpcChyZXN1bHQuc2hpcCk7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0uY2xhc3NMaXN0ID0gXCJjZWxsIHN1bmtcIjtcbiAgICAgIGJvYXJkRE9NLmNoaWxkcmVuW2Nvb3JkWzBdXS5jaGlsZHJlbltjb29yZFsxXV0udGV4dENvbnRlbnQgPSBgJHtlbW9qaX1gO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCflKVcIjtcbiAgfSBlbHNlIHtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS50ZXh0Q29udGVudCA9IFwi8J+MilwiO1xuICB9XG59O1xuY29uc3QgZGlzcGxheUxhYmVsID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgbGFiZWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibGFiZWxDb250YWluZXJcIiB9KTtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9hcmRMYWJlbFwiIH0pO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9IHdhdGVyc2A7XG4gIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgcmV0dXJuIGxhYmVsQ29udGFpbmVyO1xufTtcbmNvbnN0IGJ1aWxkQm9hcmRBbmRMYWJlbCA9IChvYmplY3QsIGJvb2xlYW4sIG1lc3NhZ2UsIGZ1bmN0KSA9PiB7XG4gIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkQ29udGFpbmVyXCIgfSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlMYWJlbChtZXNzYWdlKSk7XG4gIGJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQob2JqZWN0LCBib29sZWFuLCBmdW5jdCkpO1xuICByZXR1cm4gYm9hcmRDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IHsgbWFrZUluaXRpYWxMaXRlIH0gZnJvbSBcIi4vaW5pdGlhbERPTVwiO1xuXG4vLyBidWlsZCBjb21tdW5pY2F0aW9uIGRpdiAtIGZvciBkaXNwbGF5aW5nIHVwZGF0ZXMgLyBwcm9tcHRzXG5jb25zdCBjb20gPSAoKCkgPT4ge1xuICBjb25zdCBjb21tQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb21tQ29udGFpbmVyXCIgfSk7XG5cbiAgY29uc3QgYnVpbGRDb21tcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb21tcyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJjb21tc1wiIH0pO1xuICAgIGNvbW1zLnRleHRDb250ZW50ID0gYGA7XG4gICAgY29tbXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbW1DLmFwcGVuZENoaWxkKGNvbW1zKTtcbiAgICByZXR1cm4gY29tbUM7XG4gIH07XG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbW1DLnJlbW92ZUNoaWxkKGNvbW1DLmxhc3RDaGlsZCk7XG4gIH07XG4gIGNvbnN0IGluc3RydWN0ID0gKHBsYXllciwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGNvbW1zID0gY29tbUMuZmlyc3RDaGlsZDtcbiAgICBjb21tcy50ZXh0Q29udGVudCA9IGAke3BsYXllci5jb2RlbmFtZX06IFBsYWNlIHlvdXIgJHtzaGlwfS5gO1xuICB9O1xuICBjb25zdCBtZXNzYWdlID0gKHBsYXllciwgY29udGVudCkgPT4ge1xuICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiAke2NvbnRlbnR9YDtcbiAgfTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW1xuICAgIFwiZW1wdHlcIixcbiAgICBcInN1Ym1hcmluZVwiLFxuICAgIFwicGF0cm9sIGJvYXRcIixcbiAgICBcImNydWlzZXJcIixcbiAgICBcImRlc3Ryb3llclwiLFxuICAgIFwiYmF0dGxlIGNhcnJpZXJcIixcbiAgXTtcbiAgY29uc3QgcHJvbm91bkFycmF5ID0gW1xuICAgIHsgMDogXCJ5b3VcIiwgMTogXCJ0aGVpclwiIH0sXG4gICAgeyAwOiBcInRoZXlcIiwgMTogXCJ5b3VyXCIgfSxcbiAgXTtcbiAgY29uc3QgdXBkYXRlVGV4dCA9IChwbGF5ZXJOYW1lLCBib29sZWFuLCBoaXQsIHN1bmssIHNoaXAsIHBsYXllcikgPT4ge1xuICAgIGxldCB2YWx1ZSA9IHBsYXllciA/IHByb25vdW5BcnJheVswXSA6IHByb25vdW5BcnJheVsxXTtcbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGBBdHRlbnRpb24gJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfTogRXJyb3IhIE11c3Qgc2VsZWN0IG5ldyBjb29yZGluYXRlcy5gO1xuICAgIH0gZWxzZSBpZiAoc3VuayA9PT0gdHJ1ZSkge1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGZpcmVzIGEgc2hvdCBhbmQgJHt2YWx1ZVswXX0gc3VuayAke3ZhbHVlWzFdfSAke3NoaXBBcnJheVtzaGlwXX0hYDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN0cmlrZSA9IGhpdCA/IGBsYW5kcyBhIHN0cmlrZSFgIDogYG1pc3NlcyFgO1xuICAgICAgY29tbUMuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWUuY29kZW5hbWV9IGF0dGFja3MgYW5kICR7c3RyaWtlfWA7XG4gICAgfVxuICB9O1xuICBjb25zdCBlbmRHYW1lID0gKHBsYXllcikgPT4ge1xuICAgIGNvbnN0IG1haW5DID0gY29tbUMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIC8vIGNsZWFyIGNvbW1zIGFuZCBtYWluXG4gICAgY2xlYXJEaXYoY29tbUMpO1xuICAgIGNsZWFyRGl2KG1haW5DKTtcbiAgICAvLyBidWlsZCAnZ2FtZSBvdmVyJyBjb250ZW50XG4gICAgY29uc3QgZW5kQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJlbmRDb250YWluZXJcIiB9KTtcbiAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiYmFubmVyXCIgfSk7XG4gICAgYmFubmVyLnRleHRDb250ZW50ID0gXCJHYW1lIE92ZXIhXCI7XG4gICAgY29uc3Qgd2lubmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIndpbm5lclwiIH0pO1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGBXaW5uZXI6ICR7cGxheWVyLmNvZGVuYW1lfWA7XG4gICAgY29uc3QgcGxheUFnYWluID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInBsYXlBZ2FpblwiIH0pO1xuICAgIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IGBQbGF5IEFnYWluYDtcbiAgICBtYWluQy5hcHBlbmRDaGlsZChlbmRDKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgZW5kQy5hcHBlbmRDaGlsZCh3aW5uZXIpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQocGxheUFnYWluKTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lclxuICAgIHBsYXlBZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gY2xlYXIgY29udGVudFxuICAgICAgbWFpbkMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChtYWluQyk7XG4gICAgICBjb21tQy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNvbW1DKTtcbiAgICAgIG1ha2VJbml0aWFsTGl0ZSgpO1xuICAgIH0pO1xuICAgIC8vIGhpZGUgaW5mbyBidXR0b25cbiAgICBtYWluQy5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH07XG4gIHJldHVybiB7IGJ1aWxkQ29tbXMsIGNsZWFyLCBpbnN0cnVjdCwgbWVzc2FnZSwgdXBkYXRlVGV4dCwgZW5kR2FtZSB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29tIH07XG4iLCJpbXBvcnQgQm9hcmRGYWN0b3J5IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IGJ1aWxkRmxlZXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBkaXNwbGF5U2hpcHMsIG1hcmtDZWxsLCBidWlsZEJvYXJkQW5kTGFiZWwgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuaW1wb3J0IHsgcGxhY2UgfSBmcm9tIFwiLi9wbGFjZUZsZWV0RE9NXCI7XG5pbXBvcnQgY3JlYXRlTGVnZW5kIGZyb20gXCIuL2xlZ2VuZERPTVwiO1xuXG4vLyBnYW1lIGxvb3Bcbi8vIGluaXRpYWxpemUgdy8gcDEgYW5kIGdhbWVib2FyZDFcbi8vIHBsYWNlIHNoaXBzXG4vLyBjcmVhdGUgcDIgYW5kIGdhbWVib2FyZDJcbi8vIHBsYWNlIHNoaXBzXG4vLyB0dXJuIGxvZ2ljXG4vLyAtPiB0YWtlIGNvb3JkaW5hdGVzLCBjb25maXJtIGxlZ2FsIHBsYXkgKG5vdCByZXBlYXQpXG4vLyAtPiBsYXVuY2ggYXR0YWNrXG4vLyAgICAgIC0+IGhpdFxuLy8gICAgICAgICAgICAtPiBzdW5rP1xuLy8gICAgICAgICAgICAgICAgLT4geWVzOiAtPiBhbGwgc3Vuaz9cbi8vICAgICAgICAgICAgICAgICAgICAtPiB5ZXM6IGVuZCBnYW1lIChkaXNwbGF5KVxuLy8gICAgICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgICAgICAgICAgIC0+IG5vOiBzd2l0Y2ggdHVybnNcbi8vICAgICAgLT4gbWlzc1xuLy8gICAgICAgICAgLT4gc3dpdGNoIHR1cm5zXG4vL1xuLy8gY3JlYXRlIHBsYXllcnMgYW5kIHRoZWlyIHJlc3BlY3RpdmUgZ2FtZWJvYXJkXG5jb25zdCBpbml0aWFsaXplID0gKHBsYXllck5hbWUpID0+IHtcbiAgbGV0IHBsYXllcjtcbiAgaWYgKCFwbGF5ZXJOYW1lKSB7XG4gICAgcGxheWVyID0gY29tcHV0ZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXIgPSBQbGF5ZXJGYWN0b3J5KGAke3BsYXllck5hbWV9YCk7XG4gIH1cbiAgY29uc3QgZ2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgZ2IuY3JlYXRlKDEwKTtcbiAgY29uc3QgZmxlZXQgPSBidWlsZEZsZWV0KCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBnYiwgZmxlZXQgfTtcbn07XG5jb25zdCBsb29wID0gKCgpID0+IHtcbiAgbGV0IHBsYXllclR1cm4gPSB0cnVlO1xuICBsZXQgcGxheWVyT25lO1xuICBsZXQgcGxheWVyVHdvO1xuICBsZXQgcGxheWVyQm9hcmRET007XG4gIGxldCBjb21wQm9hcmRET007XG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBsYXllclR1cm47XG4gIH07XG4gIGNvbnN0IHN3aXRjaFR1cm5zID0gKCkgPT4gKHBsYXllclR1cm4gPSAhcGxheWVyVHVybik7XG4gIGNvbnN0IGluaXRpYWxUdXJuID0gKGJvYXJkMSwgYm9hcmQyLCBwYXJlbnRET00pID0+IHtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMSwgZmFsc2UsIFwiZnJpZW5kbHlcIikpO1xuICAgIGRpc3BsYXlTaGlwcyhib2FyZDEsIHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZCk7XG4gICAgcGxheWVyQm9hcmRET00gPSBwYXJlbnRET00uZmlyc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmRBbmRMYWJlbChib2FyZDIsIHRydWUsIFwiZW5lbXlcIiwgbG9vcC50dXJuKSk7XG4gICAgY29tcEJvYXJkRE9NID0gcGFyZW50RE9NLmxhc3RDaGlsZC5sYXN0Q2hpbGQ7XG4gICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGNyZWF0ZUxlZ2VuZCgpKTtcbiAgICBjb20ubWVzc2FnZShwbGF5ZXJPbmUucGxheWVyLCBgbGF1bmNoIGFuIGF0dGFjayFgKTtcbiAgfTtcbiAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoY2FsbHNpZ24sIHBhcmVudERPTSkgPT4ge1xuICAgIGNvbnN0IHAxID0gaW5pdGlhbGl6ZShgJHtjYWxsc2lnbn1gKTtcbiAgICBjb25zdCBwMiA9IGluaXRpYWxpemUoZmFsc2UpO1xuICAgIC8vIGRpc3BsYXkgY29tbXNcbiAgICBwYXJlbnRET00ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLmZpcnN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9XG4gICAgICBcImZsZXhcIjtcbiAgICAvLyBoYXZlIEFJIHBsYWNlIGZsZWV0LCByYW5kb21seVxuICAgIHAyLnBsYXllci5wbGFjZUZsZWV0KHAyKTtcbiAgICAvLyBwcm9tcHQgdXNlciB0byBwbGFjZSBzaGlwc1xuICAgIHBsYWNlLnN0YXJ0KHBhcmVudERPTSwgcDEsIHAyKTtcbiAgICBwbGF5ZXJPbmUgPSBwMTtcbiAgICBwbGF5ZXJUd28gPSBwMjtcbiAgICAvLyBkb24ndCB0aGluayBJIG5lZWQgdGhpcyByZXR1cm4gdmFsdWUuLlxuICAgIHJldHVybiB7IHAxLCBwMiB9O1xuICB9O1xuICBjb25zdCBsYXVuY2hHYW1lID0gKHBhcmVudERPTSkgPT4ge1xuICAgIGluaXRpYWxUdXJuKHBsYXllck9uZS5nYiwgcGxheWVyVHdvLmdiLCBwYXJlbnRET00pO1xuICB9O1xuICBsZXQgY3VycmVudFBsYXllciA9IHt9O1xuICBjb25zdCB0dXJuID0gKGlucHV0KSA9PiB7XG4gICAgY3VycmVudFBsYXllciA9IHBsYXllclR1cm4gPyBwbGF5ZXJPbmUucGxheWVyIDogcGxheWVyVHdvLnBsYXllcjtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChwbGF5ZXJUdXJuKSB7XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28uZ2IucmVjZWl2ZUF0dGFjayhpbnB1dFswXSwgaW5wdXRbMV0pO1xuICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICAvLyBha2EgdXNlciBjbGlja2VkIG9uIGNvb3JkaW5hdGVzIGZvciBhIHNlY29uZCB0aW1lXG4gICAgICAgIC8vIHByb21wdCB1c2VyIGZvciBuZXcgY29vcmRpbmF0ZXNcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoY3VycmVudFBsYXllciwgdHJ1ZSwgXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2VyIGNsaWNrZWQgb24gdmFsaWQgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljIChhaSBnYW1lYm9hcmQpXG4gICAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdCBvbiBjb21tcyAoaGl0L21pc3Mvc3VuaylcbiAgICAgICAgbWFya0NlbGwoaW5wdXRbMF0sIGlucHV0WzFdLCByZXN1bHQsIHBsYXllclR3by5nYiwgY29tcEJvYXJkRE9NLCBcIvCflLFcIik7XG4gICAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgcmVzdWx0LnZhbHVlLFxuICAgICAgICAgIHJlc3VsdC5zdW5rLFxuICAgICAgICAgIHJlc3VsdC5zaGlwLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWkgcGxheWVyIG1ha2VzIGF0dGFja1xuICAgICAgLy8gdXBkYXRlIGJvYXJkIGxvZ2ljICh1c2VyIGdhbWVib2FyZClcbiAgICAgIC8vIGRpc3BsYXkgdGhlIG1vdmUsIGFubm91bmNlIHJlc3VsdFxuICAgICAgcmVzdWx0ID0gcGxheWVyVHdvLnBsYXllci5zbWFydEF0dGFjayhwbGF5ZXJPbmUpO1xuICAgICAgbWFya0NlbGwoXG4gICAgICAgIHJlc3VsdC5jb29yZFswXSxcbiAgICAgICAgcmVzdWx0LmNvb3JkWzFdLFxuICAgICAgICByZXN1bHQub2JqLFxuICAgICAgICBwbGF5ZXJPbmUuZ2IsXG4gICAgICAgIHBsYXllckJvYXJkRE9NLFxuICAgICAgICBcIvCfj7TigI3imKDvuI9cIlxuICAgICAgKTtcbiAgICAgIGNvbS51cGRhdGVUZXh0KFxuICAgICAgICBjdXJyZW50UGxheWVyLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgcmVzdWx0Lm9iai52YWx1ZSxcbiAgICAgICAgcmVzdWx0Lm9iai5zdW5rLFxuICAgICAgICByZXN1bHQub2JqLnNoaXAsXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5vYmo7XG4gICAgfVxuICAgIGlmICghcGxheWVyVHVybiAmJiAhcmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHRpbWUgZGVsYXkgYmVmb3JlIGFpIHR1cm5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0dXJuKGZhbHNlKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmFsbFN1bmspIHtcbiAgICAgIC8vIHN3aXRjaCB0dXJucyAoYmFjayB0byB3aW5uaW5nIHBsYXllcilcbiAgICAgIHN3aXRjaFR1cm5zKCk7XG4gICAgICAvLyBydW4gZ2FtZW92ZXIgc2VxdWVuY2VcbiAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xuICAgICAgY29tLmVuZEdhbWUoY3VycmVudFBsYXllcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBnZXRUdXJuLCBpbml0aWFsVHVybiwgaW5pdGlhbGl6ZUdhbWUsIGxhdW5jaEdhbWUsIHR1cm4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvb3A7XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuL2ljb25zL2luZm8uc3ZnXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCIuL2ljb25zL2dpdGh1Yi5zdmdcIjtcbmltcG9ydCBMaW5rZWRJbiBmcm9tIFwiLi9pY29ucy9saW5rZWRpbi5zdmdcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5cbi8vIGJ1aWxkIGluaXRpYWwgcGFnZTogaGVhZGVyLCBib2R5LCBmb290ZXJcblxuLy8gcmV2ZWFsIGluZm8gYnRuIChmb3IgbW9iaWxlIHZlcnNpb24pXG5jb25zdCBidG5TaG93ID0gKG1haW5DKSA9PiB7XG4gIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbWFpbkMuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG59O1xuY29uc3QgYnRuSGlkZSA9IChtYWluQykgPT4ge1xuICBtYWluQy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBtYWluQy5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xubGV0IGhlYWRlckJ0biA9IGZhbHNlO1xuY29uc3QgaGVhZGVyQnRuRm4gPSAobWFpbkMpID0+IHtcbiAgaGVhZGVyQnRuID0gIWhlYWRlckJ0bjtcbiAgaWYgKGhlYWRlckJ0bikge1xuICAgIGJ0blNob3cobWFpbkMpO1xuICB9IGVsc2Uge1xuICAgIGJ0bkhpZGUobWFpbkMpO1xuICB9XG59O1xuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJDb250YWluZXJcIiB9KTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGVyVGl0bGVcIiB9KTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcbiAgY29uc3QgbWVudUJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51QnRuQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudUJ0blwiIH0pO1xuICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJtZW51SWNvblwiIH0pO1xuICBtZW51SWNvbi5zcmMgPSBJbmZvO1xuICBtZW51SWNvbi5hbHQgPSBcIkluZm9cIjtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGhlYWRlckJ0bkZuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYubWFpbkNvbnRhaW5lclwiKSk7XG4gIH0pO1xuICBoZWFkQy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRDLmFwcGVuZENoaWxkKG1lbnVCdG5Db250YWluZXIpO1xuICBtZW51QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBtZW51QnRuLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgcmV0dXJuIGhlYWRDO1xufTtcbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZm9vdGVyQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGZvb3RlckJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJmb290ZXJCb3hcIiB9KTtcbiAgY29uc3QgbGlua0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsaW5rQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGdpdExpbmsgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY29ubm9yd2FybWVcIixcbiAgICBhbHQ6IFwiR2l0aHViIFByb2ZpbGVcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBnaXRJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImdpdEljb25cIiB9KTtcbiAgZ2l0SWNvbi5zcmMgPSBHaXRodWI7XG4gIGdpdEljb24uYWx0ID0gXCJHaXRodWIgUHJvZmlsZVwiO1xuICBjb25zdCBsaW5rTGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jb25ub3Itd2FybWUtMTAzYTA5MTY3XCIsXG4gICAgYWx0OiBcIkxpbmtlZEluIFByb2ZpbGVcIixcbiAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gIH0pO1xuICBjb25zdCBsaW5rSWNvbiA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzczogXCJsaW5rSWNvblwiIH0pO1xuICBsaW5rSWNvbi5zcmMgPSBMaW5rZWRJbjtcbiAgbGlua0ljb24uYWx0ID0gXCJMaW5rZWRJbiBQcm9maWxlXCI7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwidGV4dENvbnRhaW5lclwiIH0pO1xuICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQZXJlZ3Jpbm5pbmcgUHJvZHVjdGlvbnNcIjtcbiAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICBmb290Qy5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICBmb290ZXJCb3guYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XG4gIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG4gIGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0xpbmspO1xuICBsaW5rTGluay5hcHBlbmRDaGlsZChsaW5rSWNvbik7XG4gIGZvb3RlckJveC5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbiAgcmV0dXJuIGZvb3RDO1xufTtcbi8vXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYWluXCIgfSk7XG4gIGNvbnN0IG1haW5DID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5Db250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5pdGlhbEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5pdGlhbENvbnRlbnRcIiB9KTtcbiAgY29uc3QgaW5mb0MgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb25zQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGluc3RydWN0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0aW9uc1wiIH0pO1xuICBpbnN0cnVjdC50ZXh0Q29udGVudCA9IFwiRWxpbWluYXRlIHRoZSBlbmVteSBmbGVldCFcIjtcbiAgY29uc3QgaW5wdXRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImlucHV0Q29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBpZDogXCJ1c2VybmFtZVwiLFxuICAgIGNsYXNzOiBcImlucHV0RmllbGRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJBcXVhbWFuIPCflLFcIixcbiAgfSk7XG4gIGNvbnN0IGlucHV0TGFiZWwgPSBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBmb3I6IFwidXNlcm5hbWVcIiB9KTtcbiAgaW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgUGxheWVyIE5hbWU6XCI7XG4gIGNvbnN0IHN0YXJ0QyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJzdGFydENvbnRhaW5lclwiIH0pO1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJzdGFydFwiIH0pO1xuICBzdGFydC50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZSFcIjtcblxuICAvLyBsaXN0ZW5lciBhbmQgaGVscGVyc1xuICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiBjbGVhckRpdihtYWluQyk7XG4gIGNvbnN0IHN0YXJ0Rm4gPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgaWYgaW5wdXQgaXMgZW1wdHlcbiAgICBsZXQgY2FsbHNpZ24gPSBcIkFxdWFtYW4g8J+UsVwiO1xuICAgIGlmIChpbnB1dC52YWx1ZSkge1xuICAgICAgY2FsbHNpZ24gPSBpbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgLy8gY2xlYXIgbWFpbiBjb250YWluZXIgLT4gcHJlcCBmb3IgYm9hcmQgZGlzcGxheVxuICAgIGNsZWFyTWFpbigpO1xuICAgIC8vIGluaXRpYWxpemUgZ2FtZSBsb29wXG4gICAgbG9vcC5pbml0aWFsaXplR2FtZShjYWxsc2lnbiwgbWFpbkMpO1xuICB9O1xuICBzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN0YXJ0Rm4oKTtcbiAgfSk7XG4gIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQyk7XG4gIG1haW5DLmFwcGVuZENoaWxkKGluaXRpYWxDKTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5mb0MpO1xuICBpbmZvQy5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gIGluaXRpYWxDLmFwcGVuZENoaWxkKGlucHV0Qyk7XG4gIGlucHV0Qy5hcHBlbmRDaGlsZChpbnB1dExhYmVsKTtcbiAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoc3RhcnRDKTtcbiAgc3RhcnRDLmFwcGVuZENoaWxkKHN0YXJ0KTtcbiAgcmV0dXJuIG1haW47XG59O1xuY29uc3QgbWFrZUluaXRpYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2R5XCIgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbS5idWlsZENvbW1zKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW5Db250ZW50KCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgcGFnZS5hcHBlbmRDaGlsZChib2R5KTtcbn07XG5jb25zdCBtYWtlSW5pdGlhbExpdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LmJvZHlcIik7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKGNvbS5idWlsZENvbW1zKCksIGJvZHkuY2hpbGRyZW5bMV0pO1xuICBib2R5Lmluc2VydEJlZm9yZShtYWluQ29udGVudCgpLCBib2R5LmNoaWxkcmVuWzJdKTtcbn07XG5leHBvcnQgeyBtYWtlSW5pdGlhbCwgbWFrZUluaXRpYWxMaXRlIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuXG4vLyBidWlsZCBsZWdlbmQgdG8gZXhwbGFpbiBlbW9qaXMsIHByb3ZpZGUgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zXG5jb25zdCBzaGlwID0ge1xuICBlbW9qaTogXCIgXCIsXG4gIHRleHQ6IFwiZnJpZW5kbHkgc2hpcFwiLFxuICBjbGFzczogXCJzaGlwXCIsXG59O1xuY29uc3Qgd2F2ZSA9IHtcbiAgZW1vamk6IFwi8J+MilwiLFxuICB0ZXh0OiBcImF0dGFjayBtaXNzXCIsXG4gIGNsYXNzOiBcIm1pc3NcIixcbn07XG5jb25zdCBoaXQgPSB7XG4gIGVtb2ppOiBcIvCflKVcIixcbiAgdGV4dDogXCJhdHRhY2sgaGl0XCIsXG4gIGNsYXNzOiBcImhpdFwiLFxufTtcbmNvbnN0IHN1bmsgPSB7XG4gIGVtb2ppOiBcIvCflLFcIixcbiAgdGV4dDogXCJ5b3Ugc3VuayBlbmVteSBzaGlwXCIsXG4gIGNsYXNzOiBcInN1bmtcIixcbn07XG5jb25zdCBlbmVteVN1bmsgPSB7XG4gIGVtb2ppOiBcIvCfj7TigI3imKDvuI9cIixcbiAgdGV4dDogXCJlbmVteSBzdW5rIGZyaWVuZGx5IHNoaXBcIixcbiAgY2xhc3M6IFwic3Vua1wiLFxufTtcbmNvbnN0IGVtb2ppQXJyYXkgPSBbc2hpcCwgd2F2ZSwgaGl0LCBzdW5rLCBlbmVteVN1bmtdO1xuY29uc3QgY3JlYXRlTGVnZW5kID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibGVnZW5kQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGxlZ2VuZEJveCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJsZWdlbmRCb3hcIiB9KTtcbiAgbGVnZW5kQm94LnRleHRDb250ZW50ID0gXCJMZWdlbmQ6XCI7XG4gIGNvbnN0IGxpc3QgPSBjcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzczogXCJsZWdlbmRMaXN0XCIgfSk7XG4gIGVtb2ppQXJyYXkuZm9yRWFjaCgoZW1vamkpID0+IHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcImVtb2ppTGlcIiB9KTtcbiAgICBjb25zdCBib3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IGBlbW9qaUJveCAke2Vtb2ppLmNsYXNzfWAgfSk7XG4gICAgYm94LnRleHRDb250ZW50ID0gYCR7ZW1vamkuZW1vaml9YDtcbiAgICBjb25zdCB0ZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImVtb2ppVGV4dFwiIH0pO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgLSAke2Vtb2ppLnRleHR9YDtcbiAgICBsaS5hcHBlbmRDaGlsZChib3gpO1xuICAgIGxpLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbiAgbGVnZW5kQm94LmFwcGVuZENoaWxkKGxpc3QpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGVnZW5kQm94KTtcbiAgY29uc3QgaW5zdHJ1Y3RCb3ggPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RCb3hcIiB9KTtcbiAgaW5zdHJ1Y3RCb3gudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIjtcbiAgY29uc3QgaW5zdHJ1Y3RUZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0VGV4dFwiIH0pO1xuICBpbnN0cnVjdFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiU2VsZWN0IGNvb3JkaW5hdGVzIGluIGVuZW15IHdhdGVycyB0byBsYXVuY2ggYW4gYXR0YWNrLiBUaGUgYm9hcmQgd2lsbCBpbmRpY2F0ZSBhIGhpdCBvciBtaXNzLCBvciBpZiB5b3Ugc3VuayB0aGUgZW5lbXkgc2hpcC4gRmluZCBhbmQgZWxpbWluYXRlIGFsbCBmaXZlIGVuZW15IHNoaXBzIGJlZm9yZSB0aGV5IGVsaW1pbmF0ZSB5b3VycyFcIjtcbiAgY29uc3Qgb2JqZWN0aXZlQm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm9iamVjdGl2ZUJveFwiIH0pO1xuICBvYmplY3RpdmVCb3gudGV4dENvbnRlbnQgPSBcIk9iamVjdGl2ZTpcIjtcbiAgY29uc3Qgb2JqZWN0aXZlVGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJvYmplY3RpdmVUZXh0XCIgfSk7XG4gIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSBcIlNpbmsgdGhlIGVuZW15IGZsZWV0IVwiO1xuICBvYmplY3RpdmVCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVCb3gpO1xuICBpbnN0cnVjdEJveC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RCb3gpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUxlZ2VuZDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSBcIi4vY29tc0RPTVwiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcblxuY29uc3QgcGxhY2UgPSAoKCkgPT4ge1xuICBsZXQgYXhpcyA9IHRydWU7XG4gIGNvbnN0IGN1cnJlbnRBeGlzID0gKCkgPT4ge1xuICAgIHJldHVybiBheGlzO1xuICB9O1xuICBjb25zdCBjcmVhdGVEaXNwbGF5ID0gKG9wcG9uZW50KSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInBsYWNlQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgYnV0dG9uQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwbGFjZUJ0bkNvbnRhaW5lclwiIH0pO1xuICAgIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwiYXhpc0J0blwiIH0pO1xuICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSBgUm90YXRlYDtcbiAgICBjb25zdCByYW5kb21CdG4gPSBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3M6IFwicmFuZG9tQnRuXCIgfSk7XG4gICAgcmFuZG9tQnRuLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcbiAgICBjb25zdCBpbnN0cnVjdCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJwbGFjZUluc3RydWN0aW9uc1wiIH0pO1xuICAgIGNvbnN0IGluc3RydWN0VGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUaXRsZVwiIH0pO1xuICAgIGluc3RydWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIjtcbiAgICBjb25zdCBpbnN0cnVjdFRleHQxID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImluc3RydWN0VGV4dFwiIH0pO1xuICAgIGluc3RydWN0VGV4dDEudGV4dENvbnRlbnQgPSBgU2VsZWN0IGNvb3JkaW5hdGVzIG9uIGJvYXJkIHRvIHBsYWNlIGN1cnJlbnQgc2hpcC5gO1xuICAgIGNvbnN0IGluc3RydWN0VGV4dDIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3RUZXh0XCIgfSk7XG4gICAgaW5zdHJ1Y3RUZXh0Mi50ZXh0Q29udGVudCA9IGBVc2UgYnV0dG9ucyB0byByb3RhdGUgc2hpcCBvciByYW5kb21seSBkZXBsb3kgZW50aXJlIGZsZWV0LmA7XG4gICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgIGF4aXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGF4aXMgPSAhYXhpcztcbiAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IGJvYXJkXG4gICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgIC8vIGJ1aWxkIG5ldyBib2FyZCB3LyBjb3JyZWN0IGxpc3RlbmVyc1xuICAgICAgcGVyU2hpcChjdXJyZW50RE9NLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRTaGlwKTtcbiAgICB9KTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIHBsYWNlIHVzZXIgZmxlZXQsIGZpbmlzaCBwbGFjZUZsZWV0ICYgaW5zdGFudGlhdGUgbmV4dCBzdGVwXG4gICAgICBvcHBvbmVudC5wbGF5ZXIucGxhY2VGbGVldChjdXJyZW50T2JqKTtcbiAgICAgIGN1cnJlbnRET00ucmVtb3ZlQ2hpbGQoY3VycmVudERPTS5sYXN0Q2hpbGQpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfSk7XG4gICAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25DKTtcbiAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgIGJ1dHRvbkMuYXBwZW5kQ2hpbGQocmFuZG9tQnRuKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3QpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGl0bGUpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDEpO1xuICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGV4dDIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG4gIC8vIGNoZWNrIGlmIGNvb3JkaW5hdGVzIHlpZWxkIHNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZFxuICAvLyBvciBpZiB0aGV5IGNvbmZsaWN0IHdpdGggYWxyZWFkeSBwbGFjZWQgc2hpcFxuICBjb25zdCBjaGVja0NlbGwgPSAoZ2FtZWJvYXJkLCBzaGlwLCBheGlzLCB4LCB5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHxcbiAgICAgIGdhbWVib2FyZC5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgY29uc3QgaGlnaGxpZ2h0TGVuZ3RoID0gKGVsZW1lbnQsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IGNvb3JkID0gQXJyYXkuZnJvbShlbGVtZW50LmlkKTtcbiAgICBsZXQgbmV3SWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgbmV3SWQgPSBgJHtOdW1iZXIoY29vcmRbMF0pICsgaX0ke2Nvb3JkWzFdfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJZCA9IGAke2Nvb3JkWzBdfSR7TnVtYmVyKGNvb3JkWzFdKSArIGl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuZXdJZCk7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGlja0ZuID0gKHgsIHkpID0+IHtcbiAgICBjdXJyZW50T2JqLmdiLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgYXhpcywgeCwgeSk7XG4gICAgY291bnQrKztcbiAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICBuZXh0U2hpcChjdXJyZW50RE9NLCBjdXJyZW50T2JqKTtcbiAgfTtcbiAgY29uc3QgY2xpY2tBdHRhY2sgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKGNoZWNrQ2VsbChnYW1lYm9hcmQsIHNoaXAsIGN1cnJlbnRBeGlzKCksIHgsIHkpKSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsaWNrRm4oeCwgeSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhvdmVyID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHQgKGdyYXkgaXMgdmFsaWQsIHJlZCBpcyBub3QtYWxsb3dlZClcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIC8vIGNvdWxkIGFkZCBhIGNsYXNzLi4uXG4gICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgaGlnaGxpZ2h0TGVuZ3RoKGVsZW1lbnQsIHNoaXAubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDIwOCwgMCwgMClcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBvbiBleGl0LCByZW1vdmUgaG92ZXIgYmFja2dyb3VuZCBjb2xvclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGdyaWQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuY2VsbFwiKSk7XG4gICAgICBncmlkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBhZGRDZWxsTGlzdGVuZXJzID0gKGdhbWVib2FyZCwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IGNlbGxBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi5jZWxsXCIpKTtcbiAgICBjZWxsQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmlkLmNoYXJBdCgwKSk7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDEpKTtcbiAgICAgIGhvdmVyKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICBjbGlja0F0dGFjayhjZWxsLCBnYW1lYm9hcmQsIHNoaXAsIHgsIHkpO1xuICAgIH0pO1xuICB9O1xuICBsZXQgY3VycmVudE9iajtcbiAgbGV0IGN1cnJlbnRCb2FyZDtcbiAgbGV0IGN1cnJlbnRTaGlwO1xuICBsZXQgZmxlZXRLZXlzO1xuICBsZXQgY3VycmVudERPTTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3QgdXBkYXRlQWxsQ3VycmVudHMgPSAocGFyZW50LCBvYmplY3QpID0+IHtcbiAgICBjdXJyZW50RE9NID0gcGFyZW50O1xuICAgIGN1cnJlbnRPYmogPSBvYmplY3Q7XG4gICAgY3VycmVudEJvYXJkID0gb2JqZWN0LmdiO1xuICAgIGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5mbGVldCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnRTaGlwID0gKHNoaXApID0+IHtcbiAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG4gIH07XG4gIGNvbnN0IG5leHRTaGlwID0gKHBhcmVudERPTSwgcGxheWVyT2JqKSA9PiB7XG4gICAgaWYgKGNvdW50IDwgNSkge1xuICAgICAgY29tLmluc3RydWN0KHBsYXllck9iai5wbGF5ZXIsIGZsZWV0S2V5c1tjb3VudF0pO1xuICAgICAgcGVyU2hpcChwYXJlbnRET00sIHBsYXllck9iai5nYiwgcGxheWVyT2JqLmZsZWV0W2ZsZWV0S2V5c1tjb3VudF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJOZXh0IHN0ZXAgb2YgZ2FtZWxvb3AhXCIpO1xuICAgICAgZmluaXNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwZXJTaGlwID0gKHBhcmVudERPTSwgcGxheWVyQm9hcmQsIHNoaXApID0+IHtcbiAgICB1cGRhdGVDdXJyZW50U2hpcChzaGlwKTtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZChwbGF5ZXJCb2FyZCwgZmFsc2UpKTtcbiAgICBkaXNwbGF5U2hpcHMoY3VycmVudEJvYXJkLCBjdXJyZW50RE9NLmNoaWxkcmVuWzBdKTtcbiAgICBhZGRDZWxsTGlzdGVuZXJzKHBsYXllckJvYXJkLCBzaGlwKTtcbiAgfTtcbiAgY29uc3Qgc3RhcnQgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmosIG9wcG9uZW50T2JqKSA9PiB7XG4gICAgcGFyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChcbiAgICAgIGNyZWF0ZURpc3BsYXkob3Bwb25lbnRPYmopXG4gICAgKTtcbiAgICB1cGRhdGVBbGxDdXJyZW50cyhwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgbmV4dFNoaXAocGFyZW50RE9NLCBwbGF5ZXJPYmopO1xuICB9O1xuICBjb25zdCBmaW5pc2ggPSAoKSA9PiB7XG4gICAgY29tLmNsZWFyKCk7XG4gICAgLy8gaW52b2tlIG5leHQgc3RlcCBpbiBnYW1lbG9vcCwgYmF0dGxlIG1vZGVcbiAgICAvLyBob3cgY2FuIEkgc21vb3RoIHRoaXMgdHJhbnNpdGlvbj8gKGVhc2UtaW4pPyAhISFcbiAgICBsb29wLmxhdW5jaEdhbWUoY3VycmVudERPTSk7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTUwcHgpXCIpKSB7XG4gICAgICBjdXJyZW50RE9NLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgXCJibG9ja1wiO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgaG92ZXIsIHN0YXJ0IH07XG59KSgpO1xuZXhwb3J0IHsgcGxhY2UgfTtcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbi8vIHBsYXllciBmYWN0b3J5IGFuZCBBSSBsb2dpY1xuY29uc3QgUGxheWVyRmFjdG9yeSA9IChjb2RlbmFtZSkgPT4ge1xuICBsZXQgd2lucyA9IDA7XG4gIGNvbnN0IGF0dGFjayA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gIH07XG4gIGNvbnN0IGFkZFdpbiA9ICgpID0+ICh3aW5zICs9IDEpO1xuICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn07XG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgY29uc3QgYWkgPSBQbGF5ZXJGYWN0b3J5KFwiVGhlIEtyYWtlblwiKTtcbiAgY29uc3QgbmV3UHJvYiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9iID0gQm9hcmRGYWN0b3J5KCk7XG4gICAgcHJvYi5jcmVhdGUoMTApO1xuICAgIHJldHVybiBwcm9iO1xuICB9O1xuICBjb25zdCBzaG90ID0gQm9hcmRGYWN0b3J5KCk7XG4gIHNob3QuY3JlYXRlKDEwKTtcbiAgY29uc3QgX2dlbmVyYXRlID0gKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBfZ2VuZXJhdGUoKTtcbiAgICBsZXQgeSA9IF9nZW5lcmF0ZSgpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH07XG4gIGNvbnN0IGF0dGFja3NBcnJheSA9IFtdO1xuICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVsxXSA9PT0gYXJyYXlbMV0pIHtcbiAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgX2dlbmVyYXRlQ29vcmQgPSAoKSA9PiB7XG4gICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgd2hpbGUgKCFfYXZhaWxhYmxlKGNvb3JkKSkge1xuICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkO1xuICB9O1xuICBjb25zdCByYW5kb21BdHRhY2sgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgIC8vIGFkZCBjb29yZGluYXRlcyB0byBhdHRhY2tzQXJyYXlcbiAgICAvLyBsYXVuY2ggYXR0YWNrIG9uIG9wcG9zaXRpb24ncyBib2FyZFxuICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmouY29vcmQgPSBjb29yZDtcbiAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICBjb25zdCBfcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKGF4aXMgPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAvLyBmb3IgZWFjaCBzaGlwLCByYW5kb21seSBnZW5lcmF0ZSBjb29yZGluYXRlcyBhbmQgYXhpc1xuICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgZmxlZXRLZXlzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGxldCBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgIGxldCBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgd2hpbGUgKFxuICAgICAgICAhcGxheWVyLmdiLnBsYWNlU2hpcChwbGF5ZXIuZmxlZXRbc2hpcF0sIGF4aXMsIGNvb3JkWzBdLCBjb29yZFsxXSlcbiAgICAgICkge1xuICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgaGl0Q29vcmRzQXJyYXkgPSBbXTtcbiAgY29uc3QgX2FkZFRvSGl0Q29vcmRzID0gKGlucHV0KSA9PiB7XG4gICAgaGl0Q29vcmRzQXJyYXkucHVzaChpbnB1dCk7XG4gIH07XG4gIGNvbnN0IF9jbGVhckhpdENvb3JkcyA9IChzaGlwKSA9PiB7XG4gICAgc2hpcC5jb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IGhpdENvb3Jkc0FycmF5LmZpbmRJbmRleCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlWzBdID09IGNvb3JkWzBdICYmIHZhbHVlWzFdID09IGNvb3JkWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGhpdENvb3Jkc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IF91cGRhdGVTaG90Qm9hcmQgPSAob2JqZWN0LCBwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBjb29yZCA9IG9iamVjdC5jb29yZDtcbiAgICBpZiAob2JqZWN0Lm9iai52YWx1ZSA9PSB0cnVlKSB7XG4gICAgICBpZiAob2JqZWN0Lm9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5nYi53aGljaFNoaXAob2JqZWN0Lm9iai5zaGlwKTtcbiAgICAgICAgX2NsZWFySGl0Q29vcmRzKHNoaXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2FkZFRvSGl0Q29vcmRzKGNvb3JkKTtcbiAgICAgIH1cbiAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3QuYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9IC0xO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX2FkZFRvUHJvYkJvYXJkID0gKGdiLCBwcm9iQm9hcmQsIGxlbmd0aCwgYm9vbGVhbiwgeCwgeSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvdW50ZXJXZWlnaHQgPSBnYi5jaGVja1Byb2IobGVuZ3RoLCBib29sZWFuLCB4LCB5LCBoaXRDb29yZHNBcnJheSk7XG4gICAgICBpZiAoYm9vbGVhbikge1xuICAgICAgICBwcm9iQm9hcmRbTnVtYmVyKHgpICsgaV1beV0gKz0gY291bnRlcldlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2JCb2FyZFt4XVtOdW1iZXIoeSkgKyBpXSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVtb3ZlSGl0cyhnYiwgcHJvYkJvYXJkKTtcbiAgfTtcbiAgLy8gZXZhbHVhdGUgaG93IHRvIGltcHJvdmUgY2hlY2tQbGFjZSBmb3IgXCJodW50IG1vZGVcIlxuXG4gIGNvbnN0IF9yZW1vdmVIaXRzID0gKGdiLCBwcm9iQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChnYi5ib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgICBwcm9iQm9hcmRbaV1bal0gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBfc2hpcFByb2IgPSAoZ2IsIHNoaXAsIHByb2IpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgZ2IuY2hlY2tPbkJvYXJkKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKSB8fFxuICAgICAgICAgICAgZ2IuY2hlY2tNaXNzKHNoaXAubGVuZ3RoLCB0cnVlLCBpLCBqKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYi5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIShcbiAgICAgICAgICAgIGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopIHx8XG4gICAgICAgICAgICBnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIGZhbHNlLCBpLCBqKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBfZmxlZXRQcm9iID0gKGJvYXJkLCBmbGVldCwgcHJvYikgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZmxlZXQpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghZmxlZXRbc2hpcF0uc3VuaykgX3NoaXBQcm9iKGJvYXJkLCBmbGVldFtzaGlwXSwgcHJvYik7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IF9nZXRQcm9iQ29vcmRzID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudE1heCA9IHtcbiAgICAgIG1heDogMCxcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2pdID4gY3VycmVudE1heC5tYXgpIHtcbiAgICAgICAgICBjdXJyZW50TWF4Lm1heCA9IGJvYXJkW2ldW2pdO1xuICAgICAgICAgIGN1cnJlbnRNYXguY29vcmRzID0gW2ksIGpdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50TWF4O1xuICB9O1xuICAvLyBidWlsZCBzbWFydEFJIGF0dGFjayBtb2RlOlxuICBjb25zdCBzbWFydEF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwcm9iID0gbmV3UHJvYigpO1xuICAgIC8vIHVwZGF0ZWQgcHJvYmFiaWxpdHkgYm9hcmQ7IG5lZWRzIGFjY2VzcyB0byB1c2VyJ3MgZmxlZXRcbiAgICBfZmxlZXRQcm9iKHNob3QsIHBsYXllci5mbGVldCwgcHJvYik7XG4gICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGJlc3QgY2VsbFxuICAgIGNvbnN0IGNvb3JkID0gX2dldFByb2JDb29yZHMocHJvYi5ib2FyZCk7XG4gICAgLy8gbGF1bmNoIGF0dGFjayBvbiB0aG9zZSBjb29yZHNcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBvYmouY29vcmQgPSBjb29yZC5jb29yZHM7XG4gICAgb2JqLm9iaiA9IHBsYXllci5nYi5yZWNlaXZlQXR0YWNrKG9iai5jb29yZFswXSwgb2JqLmNvb3JkWzFdKTtcbiAgICAvLyBjaGVjayBhdHRhY2sgaW50ZWw6IGhpdCBvciBtaXNzLCBzdW5rP1xuICAgIF91cGRhdGVTaG90Qm9hcmQob2JqLCBwbGF5ZXIpO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGFpLFxuICAgIHsgcmFuZG9tQXR0YWNrIH0sXG4gICAgeyBzbWFydEF0dGFjayB9LFxuICAgIHsgcGxhY2VGbGVldCB9XG4gICk7XG59O1xuXG5leHBvcnQgeyBQbGF5ZXJGYWN0b3J5LCBjb21wdXRlciB9O1xuIiwiLy8gc2hpcCBsb2dpY1xuY29uc3QgU2hpcEZhY3RvcnkgPSAoaW5wdXQsIG1hcmspID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQ7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgbGV0IG1hcmtlciA9IGxlbmd0aDtcbiAgaWYgKG1hcmspIHtcbiAgICBtYXJrZXIgPSBtYXJrO1xuICB9XG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBjb25zdCBnZXRIaXRzID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzO1xuICB9O1xuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxlbmd0aCA8PSBoaXRzID8gKHN1bmsgPSB0cnVlKSA6IChzdW5rID0gZmFsc2UpO1xuICB9O1xuICBjb25zdCBoaXRQbHVzID0gKCkgPT4ge1xuICAgIGhpdCgpO1xuICAgIHJldHVybiBpc1N1bmsoKTtcbiAgfTtcbiAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGNvb3JkcywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXMgfTtcbn07XG5jb25zdCBidWlsZEZsZWV0ID0gKCkgPT4ge1xuICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgY29uc3QgcGF0cm9sID0gU2hpcEZhY3RvcnkoMik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXBGYWN0b3J5KDMpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gIGNvbnN0IGNhcnJpZXIgPSBTaGlwRmFjdG9yeSg1KTtcbiAgcmV0dXJuIHsgc3VibWFyaW5lLCBwYXRyb2wsIGRlc3Ryb3llciwgYmF0dGxlc2hpcCwgY2FycmllciB9O1xufTtcbmV4cG9ydCB7IFNoaXBGYWN0b3J5LCBidWlsZEZsZWV0IH07XG4iLCIvLyBET00gaGVscGVyIGZ1bmN0aW9uc1xuLy8gLT4gY3JlYXRlIERPTSBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlc1xuLy8gaXMgdGhlcmUgYSBtb3JlIGVmZmVjdGl2ZS9lZmZpY2llbnQgd2F5IHRvIGRvIHRoaXM/IVxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn07XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufTtcbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICB3aGlsZSAoZGl2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXJEaXYgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWVsb29wLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9