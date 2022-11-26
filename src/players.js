import BoardFactory from "./board";
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
    const prob = BoardFactory();
    prob.create(10);
    return prob;
  };
  const shot = BoardFactory();
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

export { PlayerFactory, computer };
