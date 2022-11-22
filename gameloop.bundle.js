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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmRET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21zRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbml0aWFsRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbGVnZW5kRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxhY2VGbGVldERPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJvYXJkIGxvZ2ljXG5cbmNvbnN0IEJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgY3JlYXRlID0gKGxlbmd0aCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2goMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChvYmplY3QsIGF4aXMsIHgsIHkpID0+IHtcbiAgICBpZiAoXG4gICAgICBjaGVja09uQm9hcmQob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSkgfHxcbiAgICAgIGNoZWNrUGxhY2Uob2JqZWN0Lmxlbmd0aCwgYXhpcywgeCwgeSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGF4aXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9IG9iamVjdC5tYXJrZXI7XG4gICAgICAgIG9iamVjdC5jb29yZHMucHVzaChbeCArIGksIHldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeF1beSArIGldID0gb2JqZWN0Lm1hcmtlcjtcbiAgICAgICAgb2JqZWN0LmNvb3Jkcy5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzaGlwQXJyYXkucHVzaChvYmplY3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBjaGVja1BsYWNlID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3ggKyBpXVt5XSA+IDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5LnB1c2goYm9hcmRbeF1beSArIGldID4gMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gYXJyYXkuZmluZCgoaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBpbmRleCA9PSB0cnVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgY2hlY2tNaXNzID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheS5wdXNoKGJvYXJkW3ggKyBpXVt5XSA9PSAtMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyYXkucHVzaChib2FyZFt4XVt5ICsgaV0gPT0gLTEpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IGFycmF5LmZpbmQoKGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGNoZWNrUHJvYiA9IChsZW5ndGgsIGF4aXMsIHgsIHksIGhpdENvb3JkQXJyYXkpID0+IHtcbiAgICBsZXQgd2VpZ2h0ID0gMTtcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGF4aXMpIHtcbiAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtOdW1iZXIoeCkgKyBpLCB5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3gsIE51bWJlcih5KSArIGldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaGl0Q29vcmRBcnJheS5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgLy8gbmVlZCB0byBjb21wYXJlIHNoaXBDb29yZGluYXRlcyB3aXRoIGhpdENvb3JkaW5hdGVzQXJyYXlcbiAgICAgIC8vIGlmIHllcywgaW5jcmVhc2Ugd2VpZ2h0IHggNTBcbiAgICAgIC8vIGlmIG5vLCBub3JtYWwgd2VpZ2h0IGZvciBjZWxsIGNvdW50ZXIgZm9yIHByb2JNYXBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY29vcmRbMF0gPT0gc2hpcENvb3Jkc1tpXVswXSkge1xuICAgICAgICAgIGlmIChjb29yZFsxXSA9PSBzaGlwQ29vcmRzW2ldWzFdKSB7XG4gICAgICAgICAgICB3ZWlnaHQgKj0gNTA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHdlaWdodDtcbiAgfTtcbiAgY29uc3QgY2hlY2tPbkJvYXJkID0gKGxlbmd0aCwgYXhpcywgeCwgeSkgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoYXhpcykge1xuICAgICAgdmFsdWUgPSB4ICsgbGVuZ3RoO1xuICAgICAgcmV0dXJuIHZhbHVlID4gYm9hcmQubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHkgKyBsZW5ndGg7XG4gICAgICByZXR1cm4gdmFsdWUgPiBib2FyZFt4XS5sZW5ndGg7XG4gICAgfVxuICB9O1xuICBjb25zdCB3aGljaFNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gc2hpcEFycmF5LmZpbmQoKGluZGV4KSA9PiBpbmRleC5tYXJrZXIgPT09IGlucHV0KTtcbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgoaW5kZXgpID0+IGluZGV4LmlzU3VuaygpID09PSB0cnVlKTtcbiAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdO1xuICBjb25zdCBfYWRkTWlzcyA9ICh4LCB5KSA9PiBtaXNzZWRBdHRhY2tzLnB1c2goW3gsIHldKTtcbiAgY29uc3QgX3VwZGF0ZUJvYXJkID0gKHgsIHksIHZhbHVlKSA9PiAoYm9hcmRbeF1beV0gPSB2YWx1ZSk7XG4gIGNvbnN0IF91cGRhdGVNaXNzID0gKHgsIHkpID0+IHtcbiAgICBfYWRkTWlzcyh4LCB5KTtcbiAgICBfdXBkYXRlQm9hcmQoeCwgeSwgLTEpO1xuICB9O1xuICBjb25zdCBfdXBkYXRlSGl0ID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCB0aGVTaGlwID0gd2hpY2hTaGlwKGJvYXJkW3hdW3ldKTtcbiAgICBjb25zdCBzdW5rID0gdGhlU2hpcC5oaXRQbHVzKCk7XG4gICAgX3VwZGF0ZUJvYXJkKHgsIHksIGJvYXJkW3hdW3ldICsgMTApO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuICBjb25zdCBfY2hlY2tBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA+IDEwIHx8IGJvYXJkW3hdW3ldID09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBfbGF1bmNoQXR0YWNrID0gKHgsIHksIG9iaikgPT4ge1xuICAgIG9iai52YWx1ZSA9IGJvYXJkW3hdW3ldO1xuICAgIGlmIChvYmoudmFsdWUgPiAwKSB7XG4gICAgICAvLyBpZiBhIGhpdDpcbiAgICAgIC8vIC0+IGNoZWNrIHdoaWNoIHNoaXAgaXQgaXMsIGFkZCBoaXQgKHRvIGJvYXJkICYgdG8gZGlzcGxheSlcbiAgICAgIC8vIC0+IHNlZSBpZiBpdCBzdW5rIGFuZCB1cGRhdGUgYWNjb3JkaW5nbHlcbiAgICAgIC8vIC0+IGNoYW5nZSByZXR1cm4gZnJvbSB2YWx1ZSB0byB0cnVlXG4gICAgICBjb25zdCBzdW5rID0gX3VwZGF0ZUhpdCh4LCB5KTtcbiAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgIG9iai5zdW5rID0gdHJ1ZTtcbiAgICAgICAgaWYgKGFsbFN1bmsoKSkge1xuICAgICAgICAgIG9iai5hbGxTdW5rID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWUgb3ZlclwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb2JqLnNoaXAgPSBvYmoudmFsdWU7XG4gICAgICBvYmoudmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBha2EgYSBtaXNzOlxuICAgICAgLy8gLT4gdXBkYXRlIGdhbWVib2FyZCB3LyAtMSAoZm9yIG1pc3MpXG4gICAgICAvLyAtPiB1cGRhdGUgZGlzcGxheVxuICAgICAgX3VwZGF0ZU1pc3MoeCwgeSk7XG4gICAgICBvYmoudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICh4LCB5KSA9PiB7XG4gICAgY29uc3Qgb2JqID0ge1xuICAgICAgc3VuazogZmFsc2UsXG4gICAgICBhbGxTdW5rOiBmYWxzZSxcbiAgICB9O1xuICAgIGlmIChfY2hlY2tBdHRhY2soeCwgeSkpIHtcbiAgICAgIHJldHVybiBfbGF1bmNoQXR0YWNrKHgsIHksIG9iaik7XG4gICAgfVxuICAgIC8vIGVsc2UsIHVzZXIgc2VsZWN0ZWQgaW5lbGlnaWJsZSBjb29yZGluYXRlc1xuICAgIC8vIGFuZCBuZXcgY29vcmRpbmF0ZXMgbmVlZGVkXG4gICAgb2JqLnZhbHVlID0gMDtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGNyZWF0ZSxcbiAgICBwbGFjZVNoaXAsXG4gICAgY2hlY2tQbGFjZSxcbiAgICBjaGVja01pc3MsXG4gICAgY2hlY2tQcm9iLFxuICAgIGNoZWNrT25Cb2FyZCxcbiAgICB3aGljaFNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRGYWN0b3J5O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCBsb29wIGZyb20gXCIuL2dhbWVsb29wXCI7XG5cbmNvbnN0IGF0dGFja0hvdmVyID0gKGVsZW1lbnQpID0+IHtcbiAgLy8gb24gZW50ZXIsIGhpZ2hsaWdodFxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAvLyBjaGVjayBpZiBjZWxsIGhhcyBiZWVuIGNsaWNrZWQgYWxyZWFkeVxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGxcIikge1xuICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzOEIwMDBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiO1xuICAgIH1cbiAgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGdyaWQuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC52YWx1ZSA9PSBcImNlbGwgaGl0XCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBtaXNzXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigzNSwgMTAwLCAxNzApXCI7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuY2xhc3NMaXN0LnZhbHVlID09IFwiY2VsbCBzdW5rXCIpIHtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbi8vIHJlbmRlciBnYW1lYm9hcmRzIG9uIHBhZ2VcbmNvbnN0IGJ1aWxkQm9hcmQgPSAob2JqZWN0LCBib29sZWFuLCBmdW5jdCkgPT4ge1xuICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgY29uc3QgZGlzcGxheUJvYXJkID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImRpc3BsYXlCb2FyZFwiIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZ3JpZENvbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogYGNvbGAsIGlkOiBgJHtpfWAgfSk7XG4gICAgZGlzcGxheUJvYXJkLmFwcGVuZENoaWxkKGdyaWRDb2wpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBgY2VsbGAsIGlkOiBgJHtpfSR7an1gIH0pO1xuICAgICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIGZvciBnYW1lcGxheVxuICAgICAgICAvLyBhbmQgYWRkIGF0dGFjayBob3ZlciBmZWF0dXJlXG4gICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmIChsb29wLmdldFR1cm4oKSkge1xuICAgICAgICAgICAgZnVuY3QoW2ksIGpdLCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhdHRhY2tIb3ZlcihncmlkQ2VsbCk7XG4gICAgICB9XG4gICAgICBncmlkQ29sLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BsYXlCb2FyZDtcbn07XG5jb25zdCBkaXNwbGF5U2hpcHMgPSAob2JqZWN0LCBib2FyZERPTSkgPT4ge1xuICBjb25zdCBib2FyZCA9IG9iamVjdC5ib2FyZDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChib2FyZFtpXVtqXSA+IDApIHtcbiAgICAgICAgYm9hcmRET00uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuY29uc3QgbWFya0NlbGwgPSAoeCwgeSwgcmVzdWx0LCBnYiwgYm9hcmRET00sIGVtb2ppKSA9PiB7XG4gIGlmIChyZXN1bHQuc3Vuaykge1xuICAgIGNvbnN0IHNoaXAgPSBnYi53aGljaFNoaXAocmVzdWx0LnNoaXApO1xuICAgIHNoaXAuY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLmNsYXNzTGlzdCA9IFwiY2VsbCBzdW5rXCI7XG4gICAgICBib2FyZERPTS5jaGlsZHJlbltjb29yZFswXV0uY2hpbGRyZW5bY29vcmRbMV1dLnRleHRDb250ZW50ID0gYCR7ZW1vaml9YDtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICBib2FyZERPTS5jaGlsZHJlblt4XS5jaGlsZHJlblt5XS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgIGJvYXJkRE9NLmNoaWxkcmVuW3hdLmNoaWxkcmVuW3ldLnRleHRDb250ZW50ID0gXCLwn5SlXCI7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0uY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgYm9hcmRET00uY2hpbGRyZW5beF0uY2hpbGRyZW5beV0udGV4dENvbnRlbnQgPSBcIvCfjIpcIjtcbiAgfVxufTtcbmNvbnN0IGRpc3BsYXlMYWJlbCA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImxhYmVsQ29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvYXJkTGFiZWxcIiB9KTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHttZXNzYWdlfSB3YXRlcnNgO1xuICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIHJldHVybiBsYWJlbENvbnRhaW5lcjtcbn07XG5jb25zdCBidWlsZEJvYXJkQW5kTGFiZWwgPSAob2JqZWN0LCBib29sZWFuLCBtZXNzYWdlLCBmdW5jdCkgPT4ge1xuICBjb25zdCBib2FyZENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJib2FyZENvbnRhaW5lclwiIH0pO1xuICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5TGFiZWwobWVzc2FnZSkpO1xuICBib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZEJvYXJkKG9iamVjdCwgYm9vbGVhbiwgZnVuY3QpKTtcbiAgcmV0dXJuIGJvYXJkQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgYnVpbGRCb2FyZCwgZGlzcGxheVNoaXBzLCBtYXJrQ2VsbCwgYnVpbGRCb2FyZEFuZExhYmVsIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBjbGVhckRpdiB9IGZyb20gXCIuL3V0aWxpdHlcIjtcbmltcG9ydCB7IG1ha2VJbml0aWFsTGl0ZSB9IGZyb20gXCIuL2luaXRpYWxET01cIjtcblxuLy8gYnVpbGQgY29tbXVuaWNhdGlvbiBkaXYgLSBmb3IgZGlzcGxheWluZyB1cGRhdGVzIC8gcHJvbXB0c1xuY29uc3QgY29tID0gKCgpID0+IHtcbiAgY29uc3QgY29tbUMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29tbUNvbnRhaW5lclwiIH0pO1xuXG4gIGNvbnN0IGJ1aWxkQ29tbXMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tbXMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiY29tbXNcIiB9KTtcbiAgICBjb21tcy50ZXh0Q29udGVudCA9IGBgO1xuICAgIGNvbW1zLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb21tQy5hcHBlbmRDaGlsZChjb21tcyk7XG4gICAgcmV0dXJuIGNvbW1DO1xuICB9O1xuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb21tQy5yZW1vdmVDaGlsZChjb21tQy5sYXN0Q2hpbGQpO1xuICB9O1xuICBjb25zdCBpbnN0cnVjdCA9IChwbGF5ZXIsIHNoaXApID0+IHtcbiAgICBjb25zdCBjb21tcyA9IGNvbW1DLmZpcnN0Q2hpbGQ7XG4gICAgY29tbXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuY29kZW5hbWV9OiBQbGFjZSB5b3VyICR7c2hpcH0uYDtcbiAgfTtcbiAgY29uc3QgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICBjb21tQy5maXJzdENoaWxkLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmNvZGVuYW1lfTogJHtjb250ZW50fWA7XG4gIH07XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtcbiAgICBcImVtcHR5XCIsXG4gICAgXCJzdWJtYXJpbmVcIixcbiAgICBcInBhdHJvbCBib2F0XCIsXG4gICAgXCJjcnVpc2VyXCIsXG4gICAgXCJkZXN0cm95ZXJcIixcbiAgICBcImJhdHRsZSBjYXJyaWVyXCIsXG4gIF07XG4gIGNvbnN0IHByb25vdW5BcnJheSA9IFtcbiAgICB7IDA6IFwieW91XCIsIDE6IFwidGhlaXJcIiB9LFxuICAgIHsgMDogXCJ0aGV5XCIsIDE6IFwieW91clwiIH0sXG4gIF07XG4gIGNvbnN0IHVwZGF0ZVRleHQgPSAocGxheWVyTmFtZSwgYm9vbGVhbiwgaGl0LCBzdW5rLCBzaGlwLCBwbGF5ZXIpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBwbGF5ZXIgPyBwcm9ub3VuQXJyYXlbMF0gOiBwcm9ub3VuQXJyYXlbMV07XG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgQXR0ZW50aW9uICR7cGxheWVyTmFtZS5jb2RlbmFtZX06IEVycm9yISBNdXN0IHNlbGVjdCBuZXcgY29vcmRpbmF0ZXMuYDtcbiAgICB9IGVsc2UgaWYgKHN1bmsgPT09IHRydWUpIHtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBmaXJlcyBhIHNob3QgYW5kICR7dmFsdWVbMF19IHN1bmsgJHt2YWx1ZVsxXX0gJHtzaGlwQXJyYXlbc2hpcF19IWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdHJpa2UgPSBoaXQgPyBgbGFuZHMgYSBzdHJpa2UhYCA6IGBtaXNzZXMhYDtcbiAgICAgIGNvbW1DLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lLmNvZGVuYW1lfSBhdHRhY2tzIGFuZCAke3N0cmlrZX1gO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZW5kR2FtZSA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBtYWluQyA9IGNvbW1DLm5leHRFbGVtZW50U2libGluZztcbiAgICAvLyBjbGVhciBjb21tcyBhbmQgbWFpblxuICAgIGNsZWFyRGl2KGNvbW1DKTtcbiAgICBjbGVhckRpdihtYWluQyk7XG4gICAgLy8gYnVpbGQgJ2dhbWUgb3ZlcicgY29udGVudFxuICAgIGNvbnN0IGVuZEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiZW5kQ29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgYmFubmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJhbm5lclwiIH0pO1xuICAgIGJhbm5lci50ZXh0Q29udGVudCA9IFwiR2FtZSBPdmVyIVwiO1xuICAgIGNvbnN0IHdpbm5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ3aW5uZXJcIiB9KTtcbiAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgV2lubmVyOiAke3BsYXllci5jb2RlbmFtZX1gO1xuICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzczogXCJwbGF5QWdhaW5cIiB9KTtcbiAgICBwbGF5QWdhaW4udGV4dENvbnRlbnQgPSBgUGxheSBBZ2FpbmA7XG4gICAgbWFpbkMuYXBwZW5kQ2hpbGQoZW5kQyk7XG4gICAgZW5kQy5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgIGVuZEMuYXBwZW5kQ2hpbGQod2lubmVyKTtcbiAgICBlbmRDLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJcbiAgICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGNsZWFyIGNvbnRlbnRcbiAgICAgIG1haW5DLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbkMpO1xuICAgICAgY29tbUMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb21tQyk7XG4gICAgICBtYWtlSW5pdGlhbExpdGUoKTtcbiAgICB9KTtcbiAgICAvLyBoaWRlIGluZm8gYnV0dG9uXG4gICAgbWFpbkMucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcbiAgcmV0dXJuIHsgYnVpbGRDb21tcywgY2xlYXIsIGluc3RydWN0LCBtZXNzYWdlLCB1cGRhdGVUZXh0LCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBjb20gfTtcbiIsImltcG9ydCBCb2FyZEZhY3RvcnkgZnJvbSBcIi4vYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllckZhY3RvcnksIGNvbXB1dGVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuaW1wb3J0IHsgYnVpbGRGbGVldCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IGRpc3BsYXlTaGlwcywgbWFya0NlbGwsIGJ1aWxkQm9hcmRBbmRMYWJlbCB9IGZyb20gXCIuL2JvYXJkRE9NXCI7XG5pbXBvcnQgeyBjb20gfSBmcm9tIFwiLi9jb21zRE9NXCI7XG5pbXBvcnQgeyBwbGFjZSB9IGZyb20gXCIuL3BsYWNlRmxlZXRET01cIjtcbmltcG9ydCBjcmVhdGVMZWdlbmQgZnJvbSBcIi4vbGVnZW5kRE9NXCI7XG5cbi8vIGdhbWUgbG9vcFxuLy8gaW5pdGlhbGl6ZSB3LyBwMSBhbmQgZ2FtZWJvYXJkMVxuLy8gcGxhY2Ugc2hpcHNcbi8vIGNyZWF0ZSBwMiBhbmQgZ2FtZWJvYXJkMlxuLy8gcGxhY2Ugc2hpcHNcbi8vIHR1cm4gbG9naWNcbi8vIC0+IHRha2UgY29vcmRpbmF0ZXMsIGNvbmZpcm0gbGVnYWwgcGxheSAobm90IHJlcGVhdClcbi8vIC0+IGxhdW5jaCBhdHRhY2tcbi8vICAgICAgLT4gaGl0XG4vLyAgICAgICAgICAgIC0+IHN1bms/XG4vLyAgICAgICAgICAgICAgICAtPiB5ZXM6IC0+IGFsbCBzdW5rP1xuLy8gICAgICAgICAgICAgICAgICAgIC0+IHllczogZW5kIGdhbWUgKGRpc3BsYXkpXG4vLyAgICAgICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAgICAgICAgICAgLT4gbm86IHN3aXRjaCB0dXJuc1xuLy8gICAgICAtPiBtaXNzXG4vLyAgICAgICAgICAtPiBzd2l0Y2ggdHVybnNcbi8vXG4vLyBjcmVhdGUgcGxheWVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSBnYW1lYm9hcmRcbmNvbnN0IGluaXRpYWxpemUgPSAocGxheWVyTmFtZSkgPT4ge1xuICBsZXQgcGxheWVyO1xuICBpZiAoIXBsYXllck5hbWUpIHtcbiAgICBwbGF5ZXIgPSBjb21wdXRlcigpO1xuICB9IGVsc2Uge1xuICAgIHBsYXllciA9IFBsYXllckZhY3RvcnkoYCR7cGxheWVyTmFtZX1gKTtcbiAgfVxuICBjb25zdCBnYiA9IEJvYXJkRmFjdG9yeSgpO1xuICBnYi5jcmVhdGUoMTApO1xuICBjb25zdCBmbGVldCA9IGJ1aWxkRmxlZXQoKTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGdiLCBmbGVldCB9O1xufTtcbmNvbnN0IGxvb3AgPSAoKCkgPT4ge1xuICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gIGxldCBwbGF5ZXJPbmU7XG4gIGxldCBwbGF5ZXJUd287XG4gIGxldCBwbGF5ZXJCb2FyZERPTTtcbiAgbGV0IGNvbXBCb2FyZERPTTtcbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcbiAgICByZXR1cm4gcGxheWVyVHVybjtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoVHVybnMgPSAoKSA9PiAocGxheWVyVHVybiA9ICFwbGF5ZXJUdXJuKTtcbiAgY29uc3QgaW5pdGlhbFR1cm4gPSAoYm9hcmQxLCBib2FyZDIsIHBhcmVudERPTSkgPT4ge1xuICAgIHBhcmVudERPTS5hcHBlbmRDaGlsZChidWlsZEJvYXJkQW5kTGFiZWwoYm9hcmQxLCBmYWxzZSwgXCJmcmllbmRseVwiKSk7XG4gICAgZGlzcGxheVNoaXBzKGJvYXJkMSwgcGFyZW50RE9NLmZpcnN0Q2hpbGQubGFzdENoaWxkKTtcbiAgICBwbGF5ZXJCb2FyZERPTSA9IHBhcmVudERPTS5maXJzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoYnVpbGRCb2FyZEFuZExhYmVsKGJvYXJkMiwgdHJ1ZSwgXCJlbmVteVwiLCBsb29wLnR1cm4pKTtcbiAgICBjb21wQm9hcmRET00gPSBwYXJlbnRET00ubGFzdENoaWxkLmxhc3RDaGlsZDtcbiAgICBwYXJlbnRET00uYXBwZW5kQ2hpbGQoY3JlYXRlTGVnZW5kKCkpO1xuICAgIGNvbS5tZXNzYWdlKHBsYXllck9uZS5wbGF5ZXIsIGBsYXVuY2ggYW4gYXR0YWNrIWApO1xuICB9O1xuICBjb25zdCBpbml0aWFsaXplR2FtZSA9IChjYWxsc2lnbiwgcGFyZW50RE9NKSA9PiB7XG4gICAgY29uc3QgcDEgPSBpbml0aWFsaXplKGAke2NhbGxzaWdufWApO1xuICAgIGNvbnN0IHAyID0gaW5pdGlhbGl6ZShmYWxzZSk7XG4gICAgLy8gZGlzcGxheSBjb21tc1xuICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uZmlyc3RDaGlsZC5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIFwiZmxleFwiO1xuICAgIC8vIGhhdmUgQUkgcGxhY2UgZmxlZXQsIHJhbmRvbWx5XG4gICAgcDIucGxheWVyLnBsYWNlRmxlZXQocDIpO1xuICAgIC8vIHByb21wdCB1c2VyIHRvIHBsYWNlIHNoaXBzXG4gICAgcGxhY2Uuc3RhcnQocGFyZW50RE9NLCBwMSwgcDIpO1xuICAgIHBsYXllck9uZSA9IHAxO1xuICAgIHBsYXllclR3byA9IHAyO1xuICAgIC8vIGRvbid0IHRoaW5rIEkgbmVlZCB0aGlzIHJldHVybiB2YWx1ZS4uXG4gICAgcmV0dXJuIHsgcDEsIHAyIH07XG4gIH07XG4gIGNvbnN0IGxhdW5jaEdhbWUgPSAocGFyZW50RE9NKSA9PiB7XG4gICAgaW5pdGlhbFR1cm4ocGxheWVyT25lLmdiLCBwbGF5ZXJUd28uZ2IsIHBhcmVudERPTSk7XG4gIH07XG4gIGxldCBjdXJyZW50UGxheWVyID0ge307XG4gIGNvbnN0IHR1cm4gPSAoaW5wdXQpID0+IHtcbiAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHVybiA/IHBsYXllck9uZS5wbGF5ZXIgOiBwbGF5ZXJUd28ucGxheWVyO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKHBsYXllclR1cm4pIHtcbiAgICAgIHJlc3VsdCA9IHBsYXllclR3by5nYi5yZWNlaXZlQXR0YWNrKGlucHV0WzBdLCBpbnB1dFsxXSk7XG4gICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAwKSB7XG4gICAgICAgIC8vIGFrYSB1c2VyIGNsaWNrZWQgb24gY29vcmRpbmF0ZXMgZm9yIGEgc2Vjb25kIHRpbWVcbiAgICAgICAgLy8gcHJvbXB0IHVzZXIgZm9yIG5ldyBjb29yZGluYXRlc1xuICAgICAgICBjb20udXBkYXRlVGV4dChjdXJyZW50UGxheWVyLCB0cnVlLCBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZXIgY2xpY2tlZCBvbiB2YWxpZCBjb29yZGluYXRlc1xuICAgICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKGFpIGdhbWVib2FyZClcbiAgICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0IG9uIGNvbW1zIChoaXQvbWlzcy9zdW5rKVxuICAgICAgICBtYXJrQ2VsbChpbnB1dFswXSwgaW5wdXRbMV0sIHJlc3VsdCwgcGxheWVyVHdvLmdiLCBjb21wQm9hcmRET00sIFwi8J+UsVwiKTtcbiAgICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgICAgY3VycmVudFBsYXllcixcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICByZXN1bHQudmFsdWUsXG4gICAgICAgICAgcmVzdWx0LnN1bmssXG4gICAgICAgICAgcmVzdWx0LnNoaXAsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhaSBwbGF5ZXIgbWFrZXMgYXR0YWNrXG4gICAgICAvLyB1cGRhdGUgYm9hcmQgbG9naWMgKHVzZXIgZ2FtZWJvYXJkKVxuICAgICAgLy8gZGlzcGxheSB0aGUgbW92ZSwgYW5ub3VuY2UgcmVzdWx0XG4gICAgICByZXN1bHQgPSBwbGF5ZXJUd28ucGxheWVyLnNtYXJ0QXR0YWNrKHBsYXllck9uZSk7XG4gICAgICBtYXJrQ2VsbChcbiAgICAgICAgcmVzdWx0LmNvb3JkWzBdLFxuICAgICAgICByZXN1bHQuY29vcmRbMV0sXG4gICAgICAgIHJlc3VsdC5vYmosXG4gICAgICAgIHBsYXllck9uZS5nYixcbiAgICAgICAgcGxheWVyQm9hcmRET00sXG4gICAgICAgIFwi8J+PtOKAjeKYoO+4j1wiXG4gICAgICApO1xuICAgICAgY29tLnVwZGF0ZVRleHQoXG4gICAgICAgIGN1cnJlbnRQbGF5ZXIsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICByZXN1bHQub2JqLnZhbHVlLFxuICAgICAgICByZXN1bHQub2JqLnN1bmssXG4gICAgICAgIHJlc3VsdC5vYmouc2hpcCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBzd2l0Y2hUdXJucygpO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0Lm9iajtcbiAgICB9XG4gICAgaWYgKCFwbGF5ZXJUdXJuICYmICFyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gdGltZSBkZWxheSBiZWZvcmUgYWkgdHVyblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR1cm4oZmFsc2UpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuYWxsU3Vuaykge1xuICAgICAgLy8gc3dpdGNoIHR1cm5zIChiYWNrIHRvIHdpbm5pbmcgcGxheWVyKVxuICAgICAgc3dpdGNoVHVybnMoKTtcbiAgICAgIC8vIHJ1biBnYW1lb3ZlciBzZXF1ZW5jZVxuICAgICAgY29uc29sZS5sb2coXCJnYW1lIG92ZXJcIik7XG4gICAgICBjb20uZW5kR2FtZShjdXJyZW50UGxheWVyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IGdldFR1cm4sIGluaXRpYWxUdXJuLCBpbml0aWFsaXplR2FtZSwgbGF1bmNoR2FtZSwgdHVybiB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9vcDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaWNvbnMvaW5mby5zdmdcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vaWNvbnMvZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IExpbmtlZEluIGZyb20gXCIuL2ljb25zL2xpbmtlZGluLnN2Z1wiO1xuaW1wb3J0IGxvb3AgZnJvbSBcIi4vZ2FtZWxvb3BcIjtcbmltcG9ydCB7IGNvbSB9IGZyb20gXCIuL2NvbXNET01cIjtcblxuLy8gYnVpbGQgaW5pdGlhbCBwYWdlOiBoZWFkZXIsIGJvZHksIGZvb3RlclxuXG4vLyByZXZlYWwgaW5mbyBidG4gKGZvciBtb2JpbGUgdmVyc2lvbilcbmNvbnN0IGJ0blNob3cgPSAobWFpbkMpID0+IHtcbiAgbWFpbkMuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBtYWluQy5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG1haW5DLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbn07XG5jb25zdCBidG5IaWRlID0gKG1haW5DKSA9PiB7XG4gIG1haW5DLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG1haW5DLmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIG1haW5DLmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn07XG5sZXQgaGVhZGVyQnRuID0gZmFsc2U7XG5jb25zdCBoZWFkZXJCdG5GbiA9IChtYWluQykgPT4ge1xuICBoZWFkZXJCdG4gPSAhaGVhZGVyQnRuO1xuICBpZiAoaGVhZGVyQnRuKSB7XG4gICAgYnRuU2hvdyhtYWluQyk7XG4gIH0gZWxzZSB7XG4gICAgYnRuSGlkZShtYWluQyk7XG4gIH1cbn07XG5jb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImhlYWRlckNvbnRhaW5lclwiIH0pO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJoZWFkZXJUaXRsZVwiIH0pO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQkFUVExFU0hJUFwiO1xuICBjb25zdCBtZW51QnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnVCdG5Db250YWluZXJcIiB9KTtcbiAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51QnRuXCIgfSk7XG4gIGNvbnN0IG1lbnVJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcIm1lbnVJY29uXCIgfSk7XG4gIG1lbnVJY29uLnNyYyA9IEluZm87XG4gIG1lbnVJY29uLmFsdCA9IFwiSW5mb1wiO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaGVhZGVyQnRuRm4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5tYWluQ29udGFpbmVyXCIpKTtcbiAgfSk7XG4gIGhlYWRDLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZEMuYXBwZW5kQ2hpbGQobWVudUJ0bkNvbnRhaW5lcik7XG4gIG1lbnVCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIG1lbnVCdG4uYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICByZXR1cm4gaGVhZEM7XG59O1xuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290QyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJmb290ZXJDb250YWluZXJcIiB9KTtcbiAgY29uc3QgZm9vdGVyQm94ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImZvb3RlckJveFwiIH0pO1xuICBjb25zdCBsaW5rQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImxpbmtDb250YWluZXJcIiB9KTtcbiAgY29uc3QgZ2l0TGluayA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jb25ub3J3YXJtZVwiLFxuICAgIGFsdDogXCJHaXRodWIgUHJvZmlsZVwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IGdpdEljb24gPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3M6IFwiZ2l0SWNvblwiIH0pO1xuICBnaXRJY29uLnNyYyA9IEdpdGh1YjtcbiAgZ2l0SWNvbi5hbHQgPSBcIkdpdGh1YiBQcm9maWxlXCI7XG4gIGNvbnN0IGxpbmtMaW5rID0gY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Nvbm5vci13YXJtZS0xMDNhMDkxNjdcIixcbiAgICBhbHQ6IFwiTGlua2VkSW4gUHJvZmlsZVwiLFxuICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgfSk7XG4gIGNvbnN0IGxpbmtJY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzOiBcImxpbmtJY29uXCIgfSk7XG4gIGxpbmtJY29uLnNyYyA9IExpbmtlZEluO1xuICBsaW5rSWNvbi5hbHQgPSBcIkxpbmtlZEluIFByb2ZpbGVcIjtcbiAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJ0ZXh0Q29udGFpbmVyXCIgfSk7XG4gIHRleHRDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlBlcmVncmlubmluZyBQcm9kdWN0aW9uc1wiO1xuICAvLyBhcHBlbmQgaXQgYWxsIHRvZ2V0aGVyXG4gIGZvb3RDLmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gIGZvb3RlckJveC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcbiAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRJY29uKTtcbiAgbGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rTGluayk7XG4gIGxpbmtMaW5rLmFwcGVuZENoaWxkKGxpbmtJY29uKTtcbiAgZm9vdGVyQm94LmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuICByZXR1cm4gZm9vdEM7XG59O1xuLy9cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1haW5cIiB9KTtcbiAgY29uc3QgbWFpbkMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWFpbkNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbml0aWFsQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbml0aWFsQ29udGVudFwiIH0pO1xuICBjb25zdCBpbmZvQyA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJpbnN0cnVjdGlvbnNDb250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5zdHJ1Y3Rpb25zXCIgfSk7XG4gIGluc3RydWN0LnRleHRDb250ZW50ID0gXCJFbGltaW5hdGUgdGhlIGVuZW15IGZsZWV0IVwiO1xuICBjb25zdCBpbnB1dEMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXRDb250YWluZXJcIiB9KTtcbiAgY29uc3QgaW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIGlkOiBcInVzZXJuYW1lXCIsXG4gICAgY2xhc3M6IFwiaW5wdXRGaWVsZFwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIkFxdWFtYW4g8J+UsVwiLFxuICB9KTtcbiAgY29uc3QgaW5wdXRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGZvcjogXCJ1c2VybmFtZVwiIH0pO1xuICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBQbGF5ZXIgTmFtZTpcIjtcbiAgY29uc3Qgc3RhcnRDID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInN0YXJ0Q29udGFpbmVyXCIgfSk7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzOiBcInN0YXJ0XCIgfSk7XG4gIHN0YXJ0LnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lIVwiO1xuXG4gIC8vIGxpc3RlbmVyIGFuZCBoZWxwZXJzXG4gIGNvbnN0IGNsZWFyTWFpbiA9ICgpID0+IGNsZWFyRGl2KG1haW5DKTtcbiAgY29uc3Qgc3RhcnRGbiA9ICgpID0+IHtcbiAgICAvLyBjaGVjayBpZiBpbnB1dCBpcyBlbXB0eVxuICAgIGxldCBjYWxsc2lnbiA9IFwiQXF1YW1hbiDwn5SxXCI7XG4gICAgaWYgKGlucHV0LnZhbHVlKSB7XG4gICAgICBjYWxsc2lnbiA9IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICAvLyBjbGVhciBtYWluIGNvbnRhaW5lciAtPiBwcmVwIGZvciBib2FyZCBkaXNwbGF5XG4gICAgY2xlYXJNYWluKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBnYW1lIGxvb3BcbiAgICBsb29wLmluaXRpYWxpemVHYW1lKGNhbGxzaWduLCBtYWluQyk7XG4gIH07XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc3RhcnRGbigpO1xuICB9KTtcbiAgLy8gYXBwZW5kIGl0IGFsbCB0b2dldGhlclxuICBtYWluLmFwcGVuZENoaWxkKG1haW5DKTtcbiAgbWFpbkMuYXBwZW5kQ2hpbGQoaW5pdGlhbEMpO1xuICBpbml0aWFsQy5hcHBlbmRDaGlsZChpbmZvQyk7XG4gIGluZm9DLmFwcGVuZENoaWxkKGluc3RydWN0KTtcbiAgaW5pdGlhbEMuYXBwZW5kQ2hpbGQoaW5wdXRDKTtcbiAgaW5wdXRDLmFwcGVuZENoaWxkKGlucHV0TGFiZWwpO1xuICBpbnB1dEMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBpbml0aWFsQy5hcHBlbmRDaGlsZChzdGFydEMpO1xuICBzdGFydEMuYXBwZW5kQ2hpbGQoc3RhcnQpO1xuICByZXR1cm4gbWFpbjtcbn07XG5jb25zdCBtYWtlSW5pdGlhbCA9ICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJvZHlcIiB9KTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29tLmJ1aWxkQ29tbXMoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICBwYWdlLmFwcGVuZENoaWxkKGJvZHkpO1xufTtcbmNvbnN0IG1ha2VJbml0aWFsTGl0ZSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuYm9keVwiKTtcbiAgYm9keS5pbnNlcnRCZWZvcmUoY29tLmJ1aWxkQ29tbXMoKSwgYm9keS5jaGlsZHJlblsxXSk7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKG1haW5Db250ZW50KCksIGJvZHkuY2hpbGRyZW5bMl0pO1xufTtcbmV4cG9ydCB7IG1ha2VJbml0aWFsLCBtYWtlSW5pdGlhbExpdGUgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5cbi8vIGJ1aWxkIGxlZ2VuZCB0byBleHBsYWluIGVtb2ppcywgcHJvdmlkZSBkZXRhaWxlZCBpbnN0cnVjdGlvbnNcbmNvbnN0IHNoaXAgPSB7XG4gICAgZW1vamk6IFwiIFwiLFxuICAgIHRleHQ6IFwiZnJpZW5kbHkgc2hpcFwiLFxuICAgIGNsYXNzOiBcInNoaXBcIlxufVxuY29uc3Qgd2F2ZSA9IHtcbiAgICBlbW9qaTogXCLwn4yKXCIsXG4gICAgdGV4dDogXCJhdHRhY2sgbWlzc1wiLFxuICAgIGNsYXNzOiBcIm1pc3NcIlxufVxuY29uc3QgaGl0ID0ge1xuICAgIGVtb2ppOiBcIvCflKVcIixcbiAgICB0ZXh0OiBcImF0dGFjayBoaXRcIixcbiAgICBjbGFzczogXCJoaXRcIlxufVxuY29uc3Qgc3VuayA9IHtcbiAgICBlbW9qaTogXCLwn5SxXCIsXG4gICAgdGV4dDogXCJ5b3Ugc3VuayBlbmVteSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbmVteVN1bmsgPSB7XG4gICAgZW1vamk6IFwi8J+PtOKAjeKYoO+4j1wiLFxuICAgIHRleHQ6IFwiZW5lbXkgc3VuayBmcmllbmRseSBzaGlwXCIsXG4gICAgY2xhc3M6IFwic3Vua1wiXG59XG5jb25zdCBlbW9qaUFycmF5ID0gW3NoaXAsIHdhdmUsIGhpdCwgc3VuaywgZW5lbXlTdW5rXTtcblxuY29uc3QgY3JlYXRlTGVnZW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2xlZ2VuZENvbnRhaW5lcid9KTtcbiAgICBjb25zdCBsZWdlbmRCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsZWdlbmRCb3gnfSk7XG4gICAgbGVnZW5kQm94LnRleHRDb250ZW50ID0gXCJMZWdlbmQ6XCI7XG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywge2NsYXNzOiAnbGVnZW5kTGlzdCd9KTtcbiAgICBlbW9qaUFycmF5LmZvckVhY2goZW1vamkgPT4ge1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywge2NsYXNzOiAnZW1vamlMaSd9KTtcbiAgICAgICAgY29uc3QgYm94ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBgZW1vamlCb3ggJHtlbW9qaS5jbGFzc31gfSk7XG4gICAgICAgIGJveC50ZXh0Q29udGVudCA9IGAke2Vtb2ppLmVtb2ppfWA7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdlbW9qaVRleHQnfSk7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBgLSAke2Vtb2ppLnRleHR9YDtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pXG4gICAgbGVnZW5kQm94LmFwcGVuZENoaWxkKGxpc3QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWdlbmRCb3gpOyBcbiAgICBjb25zdCBpbnN0cnVjdEJveCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0Qm94J30pO1xuICAgIGluc3RydWN0Qm94LnRleHRDb250ZW50ID0gXCJJbnN0cnVjdGlvbnM6XCI7XG4gICAgY29uc3QgaW5zdHJ1Y3RUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnaW5zdHJ1Y3RUZXh0J30pO1xuICAgIGluc3RydWN0VGV4dC50ZXh0Q29udGVudCA9ICdTZWxlY3QgY29vcmRpbmF0ZXMgaW4gZW5lbXkgd2F0ZXJzIHRvIGxhdW5jaCBhbiBhdHRhY2suIFRoZSBib2FyZCB3aWxsIGluZGljYXRlIGEgaGl0IG9yIG1pc3MsIG9yIGlmIHlvdSBzdW5rIHRoZSBlbmVteSBzaGlwLiBGaW5kIGFuZCBlbGltaW5hdGUgYWxsIGZpdmUgZW5lbXkgc2hpcHMgYmVmb3JlIHRoZXkgZWxpbWluYXRlIHlvdXJzISdcbiAgICBjb25zdCBvYmplY3RpdmVCb3ggPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVCb3gnfSk7XG4gICAgb2JqZWN0aXZlQm94LnRleHRDb250ZW50ID0gJ09iamVjdGl2ZTonO1xuICAgIGNvbnN0IG9iamVjdGl2ZVRleHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdvYmplY3RpdmVUZXh0J30pO1xuICAgIG9iamVjdGl2ZVRleHQudGV4dENvbnRlbnQgPSAnU2luayB0aGUgZW5lbXkgZmxlZXQhJztcbiAgICBvYmplY3RpdmVCb3guYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZUJveCk7XG4gICAgaW5zdHJ1Y3RCb3guYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RCb3gpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTGVnZW5kOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXR5XCI7XG5pbXBvcnQgeyBidWlsZEJvYXJkLCBkaXNwbGF5U2hpcHMgfSBmcm9tIFwiLi9ib2FyZERPTVwiO1xuaW1wb3J0IHsgY29tIH0gZnJvbSAnLi9jb21zRE9NJztcbmltcG9ydCBsb29wIGZyb20gJy4vZ2FtZWxvb3AnO1xuXG5jb25zdCBwbGFjZSA9ICgoKSA9PiB7XG4gICAgbGV0IGF4aXMgPSB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnRBeGlzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYXhpcztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlRGlzcGxheSA9IChvcHBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicGxhY2VDb250YWluZXJcIn0pO1xuICAgICAgICBjb25zdCBidXR0b25DID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAncGxhY2VCdG5Db250YWluZXInfSk7XG4gICAgICAgIGNvbnN0IGF4aXNCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7Y2xhc3M6ICdheGlzQnRuJ30pO1xuICAgICAgICBheGlzQnRuLnRleHRDb250ZW50ID0gYFJvdGF0ZWBcbiAgICAgICAgY29uc3QgcmFuZG9tQnRuID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge2NsYXNzOiAncmFuZG9tQnRuJ30pO1xuICAgICAgICByYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9tJztcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdwbGFjZUluc3RydWN0aW9ucyd9KTtcbiAgICAgICAgY29uc3QgaW5zdHJ1Y3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2luc3RydWN0VGl0bGUnfSk7XG4gICAgICAgIGluc3RydWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkluc3RydWN0aW9uczpcIlxuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQxID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDEudGV4dENvbnRlbnQgPSBgU2VsZWN0IGNvb3JkaW5hdGVzIG9uIGJvYXJkIHRvIHBsYWNlIGN1cnJlbnQgc2hpcC5gO1xuICAgICAgICBjb25zdCBpbnN0cnVjdFRleHQyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImluc3RydWN0VGV4dFwifSk7XG4gICAgICAgIGluc3RydWN0VGV4dDIudGV4dENvbnRlbnQgPSBgVXNlIGJ1dHRvbnMgdG8gcm90YXRlIHNoaXAgb3IgcmFuZG9tbHkgZGVwbG95IGVudGlyZSBmbGVldC5gXG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgICAgICBheGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gYXhpcyA9ICFheGlzO1xuICAgICAgICAgICAgLy8gbGV0IHRleHQgPSBheGlzID8gJ1gnIDogJ1knO1xuICAgICAgICAgICAgLy8gYXhpc0J0bi50ZXh0Q29udGVudCA9IGBBeGlzOiAke3RleHR9YDtcbiAgICAgICAgICAgIGF4aXNCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBjdXJyZW50IGJvYXJkXG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIC8vIGJ1aWxkIG5ldyBib2FyZCB3LyBjb3JyZWN0IGxpc3RlbmVyc1xuICAgICAgICAgICAgcGVyU2hpcChjdXJyZW50RE9NLCBjdXJyZW50Qm9hcmQsIGN1cnJlbnRTaGlwKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3Bwb25lbnQucGxheWVyLnBsYWNlRmxlZXQoY3VycmVudE9iaik7XG4gICAgICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFwcGVuZCBpdCBhbGwgdG9nZXRoZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkMpO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKGF4aXNCdG4pO1xuICAgICAgICBidXR0b25DLmFwcGVuZENoaWxkKHJhbmRvbUJ0bik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdCk7XG4gICAgICAgIGluc3RydWN0LmFwcGVuZENoaWxkKGluc3RydWN0VGl0bGUpO1xuICAgICAgICBpbnN0cnVjdC5hcHBlbmRDaGlsZChpbnN0cnVjdFRleHQxKTtcbiAgICAgICAgaW5zdHJ1Y3QuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3RUZXh0Mik7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgLy8gXG4gICAgY29uc3QgY2hlY2tDZWxsID0gKGdhbWVib2FyZCwgc2hpcCwgYXhpcywgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgYXhpcywgeCwgeSkgfHwgXG4gICAgICAgIGdhbWVib2FyZC5jaGVja1BsYWNlKHNoaXAubGVuZ3RoLCBheGlzLCB4LCB5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBoaWdobGlnaHRMZW5ndGggPSAoZWxlbWVudCwgbGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvb3JkID0gQXJyYXkuZnJvbShlbGVtZW50LmlkKTtcbiAgICAgICAgbGV0IG5ld0lkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXhpcykge1xuICAgICAgICAgICAgICAgIG5ld0lkID0gYCR7TnVtYmVyKGNvb3JkWzBdKStpfSR7Y29vcmRbMV19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3SWQgPSBgJHtjb29yZFswXX0ke051bWJlcihjb29yZFsxXSkraX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5ld0lkKTtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJzbGF0ZWdyYXlcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjbGlja0ZuID0gKHgsIHkpID0+IHtcbiAgICAgICAgY3VycmVudE9iai5nYi5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGF4aXMsIHgsIHkpO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBjdXJyZW50RE9NLnJlbW92ZUNoaWxkKGN1cnJlbnRET00ubGFzdENoaWxkKTtcbiAgICAgICAgbmV4dFNoaXAoY3VycmVudERPTSwgY3VycmVudE9iaik7XG4gICAgfVxuICAgIGNvbnN0IGNsaWNrQXR0YWNrID0gKGVsZW1lbnQsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tDZWxsKGdhbWVib2FyZCwgc2hpcCwgY3VycmVudEF4aXMoKSwgeCwgeSkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xpY2tGbih4LCB5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaG92ZXIgPSAoZWxlbWVudCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KSA9PiB7XG4gICAgICAgIC8vIG9uIGVudGVyLCBoaWdobGlnaHRcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY291bGQgYWRkIGEgY2xhc3MuLi5cbiAgICAgICAgICAgIGlmIChjaGVja0NlbGwoZ2FtZWJvYXJkLCBzaGlwLCBjdXJyZW50QXhpcygpLCB4LCB5KSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0TGVuZ3RoKGVsZW1lbnQsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyMDgsIDAsIDApXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncmlkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgICAgIGdyaWQuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwic2xhdGVncmF5XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgYWRkQ2VsbExpc3RlbmVycyA9IChnYW1lYm9hcmQsIHNoaXApID0+IHtcbiAgICAgICAgY29uc3QgY2VsbEFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2VsbCcpKTtcbiAgICAgICAgY2VsbEFycmF5LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuaWQuY2hhckF0KDApKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5pZC5jaGFyQXQoMSkpO1xuICAgICAgICAgICAgaG92ZXIoY2VsbCwgZ2FtZWJvYXJkLCBzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGNsaWNrQXR0YWNrKGNlbGwsIGdhbWVib2FyZCwgc2hpcCwgeCwgeSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGxldCBjdXJyZW50T2JqO1xuICAgIGxldCBjdXJyZW50Qm9hcmQ7XG4gICAgbGV0IGN1cnJlbnRTaGlwO1xuICAgIGxldCBmbGVldEtleXM7XG4gICAgbGV0IGN1cnJlbnRET007XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCB1cGRhdGVBbGxDdXJyZW50cyA9IChwYXJlbnQsIG9iamVjdCkgPT4ge1xuICAgICAgICBjdXJyZW50RE9NID0gcGFyZW50O1xuICAgICAgICBjdXJyZW50T2JqID0gb2JqZWN0O1xuICAgICAgICBjdXJyZW50Qm9hcmQgPSBvYmplY3QuZ2I7XG4gICAgICAgIGZsZWV0S2V5cyA9IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdC5mbGVldCk7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZUN1cnJlbnRTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgY3VycmVudFNoaXAgPSBzaGlwO1xuICAgIH1cbiAgICBjb25zdCBuZXh0U2hpcCA9IChwYXJlbnRET00sIHBsYXllck9iaikgPT4ge1xuICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICBjb20uaW5zdHJ1Y3QocGxheWVyT2JqLnBsYXllciwgZmxlZXRLZXlzW2NvdW50XSk7XG4gICAgICAgICAgICBwZXJTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqLmdiLCBwbGF5ZXJPYmouZmxlZXRbZmxlZXRLZXlzW2NvdW50XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25leHQgc3RlcCBvZiBnYW1lbG9vcCEnKTtcbiAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBlclNoaXAgPSAocGFyZW50RE9NLCBwbGF5ZXJCb2FyZCwgc2hpcCkgPT4ge1xuICAgICAgICB1cGRhdGVDdXJyZW50U2hpcChzaGlwKTtcbiAgICAgICAgcGFyZW50RE9NLmFwcGVuZENoaWxkKGJ1aWxkQm9hcmQocGxheWVyQm9hcmQsIGZhbHNlKSk7XG4gICAgICAgIGRpc3BsYXlTaGlwcyhjdXJyZW50Qm9hcmQsIGN1cnJlbnRET00uY2hpbGRyZW5bMF0pO1xuICAgICAgICBhZGRDZWxsTGlzdGVuZXJzKHBsYXllckJvYXJkLCBzaGlwKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSAocGFyZW50RE9NLCBwbGF5ZXJPYmosIG9wcG9uZW50T2JqKSA9PiB7XG4gICAgICAgIHBhcmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQoY3JlYXRlRGlzcGxheShvcHBvbmVudE9iaikpO1xuICAgICAgICB1cGRhdGVBbGxDdXJyZW50cyhwYXJlbnRET00sIHBsYXllck9iaik7XG4gICAgICAgIG5leHRTaGlwKHBhcmVudERPTSwgcGxheWVyT2JqKTtcbiAgICB9XG4gICAgY29uc3QgZmluaXNoID0gKCkgPT4ge1xuICAgICAgICBjb20uY2xlYXIoKTtcbiAgICAgICAgLy8gaW52b2tlIGdhbWVsb29wIHN0ZXAyIC0+IHdoZXJlIDIgYm9hcmRzIGFyZSBkaXNwbGF5ZWRcbiAgICAgICAgLy8gYSB3YXkgdG8gdHJhbnNpdGlvbiB0aGlzIChlYXNlLWluKT8gISEhXG4gICAgICAgIGxvb3AubGF1bmNoR2FtZShjdXJyZW50RE9NKTtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NTBweCknKSkge1xuICAgICAgICAgICAgY3VycmVudERPTS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBob3Zlciwgc3RhcnQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHBsYWNlIH07IiwiaW1wb3J0IEJvYXJkRmFjdG9yeSBmcm9tIFwiLi9ib2FyZFwiO1xuLy8gcGxheWVyIGZhY3RvcnkgYW5kIEFJIGxvZ2ljXG5cbmNvbnN0IFBsYXllckZhY3RvcnkgPSAoY29kZW5hbWUpID0+IHtcbiAgICBsZXQgd2lucyA9IDA7XG4gICAgY29uc3QgYXR0YWNrID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFdpbiA9ICgpID0+IHdpbnMgKz0gMTtcbiAgICByZXR1cm4geyBjb2RlbmFtZSwgd2lucywgYXR0YWNrLCBhZGRXaW4gfTtcbn1cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFpID0gUGxheWVyRmFjdG9yeSgnVGhlIEtyYWtlbicpO1xuICAgIGNvbnN0IG5ld1Byb2IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2IgPSBCb2FyZEZhY3RvcnkoKTtcbiAgICAgICAgcHJvYi5jcmVhdGUoMTApO1xuICAgICAgICByZXR1cm4gcHJvYjtcbiAgICB9XG4gICAgY29uc3Qgc2hvdCA9IEJvYXJkRmFjdG9yeSgpO1xuICAgIHNob3QuY3JlYXRlKDEwKTtcblxuICAgIGNvbnN0IF9nZW5lcmF0ZSA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBfZ2VuZXJhdGVSYW5kb21BdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIGxldCB5ID0gX2dlbmVyYXRlKCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfTtcbiAgICBjb25zdCBhdHRhY2tzQXJyYXkgPSBbXTtcbiAgICBjb25zdCBfYXZhaWxhYmxlID0gKGFycmF5KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGF0dGFja3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dGFja3NBcnJheVtpXVswXSA9PT0gYXJyYXlbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrc0FycmF5W2ldWzFdID09PSBhcnJheVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IF9nZW5lcmF0ZUNvb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgY29vcmQgPSBfZ2VuZXJhdGVSYW5kb21BdHRhY2soKTtcbiAgICAgICAgd2hpbGUgKCEoX2F2YWlsYWJsZShjb29yZCkpKSB7XG4gICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZDtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGdhbWVib2FyZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmQgPSBfZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgLy8gYWRkIGNvb3JkaW5hdGVzIHRvIGF0dGFja3NBcnJheVxuICAgICAgICAgICAgLy8gbGF1bmNoIGF0dGFjayBvbiBvcHBvc2l0aW9uJ3MgYm9hcmRcbiAgICAgICAgICAgIGF0dGFja3NBcnJheS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmNvb3JkID0gY29vcmQ7XG4gICAgICAgICAgICBvYmoub2JqID0gZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGNvbnN0IF9yYW5kb21BeGlzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGlmIChheGlzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcGxhY2VGbGVldCA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gaSB0aGluayB0aGlzIGNhbiBiZSB1c2VkIGZvciBlaXRoZXIgcGxheWVyLi4ubWF5YmUgbWFrZSBhIGJ1dHRvbiBmb3IgdXNlciAoaW4gaW5pdGlhbCkgISEhXG4gICAgICAgIC8vIGZvciBlYWNoIHNoaXAsIHJhbmRvbWx5IGdlbmVyYXRlIGNvb3JkaW5hdGVzIGFuZCBheGlzXG4gICAgICAgIGNvbnN0IGZsZWV0S2V5cyA9IE9iamVjdC5rZXlzKHBsYXllci5mbGVldCk7XG4gICAgICAgIGZsZWV0S2V5cy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgbGV0IGF4aXMgPSBfcmFuZG9tQXhpcygpO1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gX2dlbmVyYXRlUmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICB3aGlsZSAoIShwbGF5ZXIuZ2IucGxhY2VTaGlwKHBsYXllci5mbGVldFtzaGlwXSwgYXhpcywgY29vcmRbMF0sIGNvb3JkWzFdKSkpIHtcbiAgICAgICAgICAgICAgICBheGlzID0gX3JhbmRvbUF4aXMoKTtcbiAgICAgICAgICAgICAgICBjb29yZCA9IF9nZW5lcmF0ZVJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhpdENvb3Jkc0FycmF5ID0gW107XG4gICAgY29uc3QgX2FkZFRvSGl0Q29vcmRzID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGhpdENvb3Jkc0FycmF5LnB1c2goaW5wdXQpO1xuICAgICAgICAvLyByZXR1cm4gaGl0Q29vcmRzQXJyYXk7ID8/ICEhISBkbyBpIG5lZWQgdGhpcyB0byBiZSByZXR1cm5lZD9cbiAgICB9XG4gICAgY29uc3QgX2NsZWFySGl0Q29vcmRzID0gKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuY29vcmRzLmZvckVhY2goY29vcmQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGhpdENvb3Jkc0FycmF5LmZpbmRJbmRleCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVswXSA9PSBjb29yZFswXSAmJiB2YWx1ZVsxXSA9PSBjb29yZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBoaXRDb29yZHNBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgX3VwZGF0ZVNob3RCb2FyZCA9IChvYmplY3QsIHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCBjb29yZCA9IG9iamVjdC5jb29yZDtcbiAgICAgICAgaWYgKG9iamVjdC5vYmoudmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5vYmouc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHBsYXllci5nYi53aGljaFNoaXAob2JqZWN0Lm9iai5zaGlwKTtcbiAgICAgICAgICAgICAgICBfY2xlYXJIaXRDb29yZHMoc2hpcCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9hZGRUb0hpdENvb3Jkcyhjb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG90LmJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvdC5ib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX2FkZFRvUHJvYkJvYXJkID0gKGdiLCBwcm9iQm9hcmQsIGxlbmd0aCwgYm9vbGVhbiwgeCwgeSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlcldlaWdodCA9IGdiLmNoZWNrUHJvYihsZW5ndGgsIGJvb2xlYW4sIHgsIHksIGhpdENvb3Jkc0FycmF5KTtcbiAgICAgICAgICAgIGlmIChib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgcHJvYkJvYXJkW051bWJlcih4KStpXVt5XSArPSBjb3VudGVyV2VpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9iQm9hcmRbeF1bTnVtYmVyKHkpK2ldICs9IGNvdW50ZXJXZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3JlbW92ZUhpdHMoZ2IsIHByb2JCb2FyZCk7XG4gICAgfVxuICAgIC8vIGV2YWx1YXRlIGhvdyB0byBpbXByb3ZlIGNoZWNrUGxhY2UgZm9yIFwiaHVudCBtb2RlXCJcblxuICAgIGNvbnN0IF9yZW1vdmVIaXRzID0gKGdiLCBwcm9iQm9hcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdiLmJvYXJkW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9iQm9hcmRbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBfc2hpcFByb2IgPSAoZ2IsIHNoaXAsIHByb2IpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Z2IuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqPGdiLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaikpIHx8IFxuICAgICAgICAgICAgICAgIChnYi5jaGVja01pc3Moc2hpcC5sZW5ndGgsIHRydWUsIGksIGopKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2FkZFRvUHJvYkJvYXJkKGdiLCBwcm9iLmJvYXJkLCBzaGlwLmxlbmd0aCwgdHJ1ZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPGdiLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgajxnYi5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICghKGdiLmNoZWNrT25Cb2FyZChzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopIHx8IFxuICAgICAgICAgICAgICAgIGdiLmNoZWNrTWlzcyhzaGlwLmxlbmd0aCwgZmFsc2UsIGksIGopKSkge1xuICAgICAgICAgICAgICAgICAgICBfYWRkVG9Qcm9iQm9hcmQoZ2IsIHByb2IuYm9hcmQsIHNoaXAubGVuZ3RoLCBmYWxzZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9mbGVldFByb2IgPSAoYm9hcmQsIGZsZWV0LCBwcm9iKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gT2JqZWN0LmtleXMoZmxlZXQpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgLy8gZG9lcyB0aGlzIG5lZWQgdG8gcnVuIFwiaXNTdW5rXCIgaW4gb3JkZXIgdG8gZ2V0IHVwZGF0ZWQgc3VuayB2YWx1ZT8gXG4gICAgICAgICAgICBpZiAoIShmbGVldFtzaGlwXS5zdW5rKSlcbiAgICAgICAgICAgIF9zaGlwUHJvYihib2FyZCwgZmxlZXRbc2hpcF0sIHByb2IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBfZ2V0UHJvYkNvb3JkcyA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50TWF4ID0ge1xuICAgICAgICAgICAgbWF4OiAwLFxuICAgICAgICB9O1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8Ym9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtqXSA+IGN1cnJlbnRNYXgubWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXgubWF4ID0gYm9hcmRbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNYXguY29vcmRzID0gW2ksIGpdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudE1heDsgLy8gc2hvdWxkIHRoaXMganVzdCBiZSBjb29yZGluYXRlcyBvciByZXR1cm4gdGhlIHdob2xlIG9iaj8gISEhXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgc21hcnRBSSBhdHRhY2sgbW9kZTpcbiAgICBjb25zdCBzbWFydEF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcHJvYiA9IG5ld1Byb2IoKTtcbiAgICAgICAgLy8gdXBkYXRlZCBwcm9iYWJpbGl0eSBib2FyZDsgbmVlZHMgYWNjZXNzIHRvIHVzZXIncyBmbGVldC4uPyBvciBtYWtlIGEgY29weSBmb3IgdGhlIHByb2JCb2FyZCwgdXBkYXRlIHJlZ3VsYXJseSAhISFcbiAgICAgICAgX2ZsZWV0UHJvYihzaG90LCBwbGF5ZXIuZmxlZXQsIHByb2IpO1xuICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgYmVzdCBjZWxsXG4gICAgICAgIGNvbnN0IGNvb3JkID0gX2dldFByb2JDb29yZHMocHJvYi5ib2FyZCk7XG4gICAgICAgIC8vIGxhdW5jaCBhdHRhY2sgb24gdGhvc2UgY29vcmRzXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBvYmouY29vcmQgPSBjb29yZC5jb29yZHM7XG4gICAgICAgIG9iai5vYmogPSBwbGF5ZXIuZ2IucmVjZWl2ZUF0dGFjayhvYmouY29vcmRbMF0sIG9iai5jb29yZFsxXSk7XG4gICAgICAgIC8vIGNoZWNrIGF0dGFjayBpbnRlbDogaGl0IG9yIG1pc3MsIHN1bms/XG4gICAgICAgIF91cGRhdGVTaG90Qm9hcmQob2JqLCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAvL1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFpLCB7IHJhbmRvbUF0dGFjayB9LCB7IHNtYXJ0QXR0YWNrIH0sIHsgcGxhY2VGbGVldCB9KTtcbn1cblxuZXhwb3J0IHsgUGxheWVyRmFjdG9yeSwgY29tcHV0ZXJ9IiwiLy8gc2hpcCBsb2dpY1xuXG5jb25zdCBTaGlwRmFjdG9yeSA9IChpbnB1dCwgbWFyaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGlucHV0O1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGxldCBtYXJrZXIgPSBsZW5ndGg7XG4gICAgaWYgKG1hcmspIHtcbiAgICAgICAgbWFya2VyID0gbWFyaztcbiAgICB9XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfVxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxO1xuICAgIH1cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsZW5ndGggPD0gaGl0cyA/IHN1bmsgPSB0cnVlIDogc3VuayA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhZGRlZCB0aGlzIC0gY2FuIEkgc2V0IGhpdCBhbmQgaXNTdW5rIHRvIHByaXZhdGUsIGFuZCBvbmx5IGV4cG9ydCB0aGlzIG9uZT8gISEhXG4gICAgY29uc3QgaGl0UGx1cyA9ICgpID0+IHtcbiAgICAgICAgaGl0KCk7XG4gICAgICAgIHJldHVybiBpc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVuZ3RoLCBzdW5rLCBtYXJrZXIsIGNvb3JkcywgZ2V0SGl0cywgaGl0LCBpc1N1bmssIGhpdFBsdXN9XG59O1xuY29uc3QgYnVpbGRGbGVldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBTaGlwRmFjdG9yeSgzLCAxKTtcbiAgICBjb25zdCBwYXRyb2wgPSBTaGlwRmFjdG9yeSgyKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBTaGlwRmFjdG9yeSgzKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gU2hpcEZhY3RvcnkoNCk7XG4gICAgY29uc3QgY2FycmllciA9IFNoaXBGYWN0b3J5KDUpO1xuICAgIHJldHVybiB7IHN1Ym1hcmluZSwgcGF0cm9sLCBkZXN0cm95ZXIsIGJhdHRsZXNoaXAsIGNhcnJpZXIgfVxufVxuXG5leHBvcnQgeyBTaGlwRmFjdG9yeSwgYnVpbGRGbGVldCB9OyIsIi8vIERPTSBoZWxwZXIgZnVuY3Rpb25zXG4vLyAtPiBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKHR5cGUsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuICAgIGlmIChhdHRyaWJ1dGVzID09IG51bGwpIHJldHVybiBuZXdFbGVtZW50O1xuICAgIHNldEF0dHJpYnV0ZXMobmV3RWxlbWVudCwgYXR0cmlidXRlcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNsZWFyRGl2ID0gKGRpdikgPT4ge1xuICAgIHdoaWxlIChkaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyRGl2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZWxvb3AuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=