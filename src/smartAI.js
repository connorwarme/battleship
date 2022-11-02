import BoardFactory from "./board";
import { computer } from "./players";
import { buildFleet } from "./ship";
// implement improved tactics for AI player

const target = (() => {
    // target mode: after hit, return adjacent squares and attack those
    // target improved: if multiple hits are horizontal, prefer continued attacks along horizontal until sunk
    const neighborCells = (x, y) => {
        const a = [x-1, y];
        const b = [x+1, y];
        const c = [x, y-1];
        const d = [x, y+1];
        return [a, b, c, d];
    }
    const checkCoords = (input) => {
        if (input[0] >= 0 && input[0] <= 9 && input[1] >= 0 && input[1] <= 9) {
            return input;
        }
        // also needs to check if the coords are an already selected cell...
        return false;
    }
    const checkCoordsArray = (input) => {
        const returnValue = [];
        for (let i = 0; i<input.length; i++) {
            let value = checkCoords(input[i]);
            if (value) {
                returnValue.push(value);
            }
        }
        return returnValue;
    }
    // if random attack lands a hit, run target instead of another random attack
    // might need an array/stack that exists within AI player (outside of target);
    // e.g. if (stack.length > 0) { ...run attack from stack coordinates... }
    const attackStack = [];
    const getStack = () => { 
        return attackStack; 
    };
    const launchAttack = () => {
        return attackStack.shift();
    }
    const afterHit = (hitCoord) => {
        const surroundCells = neighborCells(hitCoord[0], hitCoord[1]);
        const neighbors = checkCoordsArray(surroundCells);
        neighbors.forEach(cell => {
            attackStack.push(cell);
        })
        console.log(attackStack);
    }
    return { neighborCells, checkCoordsArray, getStack, launchAttack, afterHit };
})();

// target.afterHit([0, 0]);
// hunt mode (random) improved: only attack every other square (while patrol boat exists)
// -> then every 3rd, etc.
// utilizing math concept of parity, based on (shortest) ship's length 

// probability / heat map
const ai = () => {
    const gb = BoardFactory();
    gb.create(10);
    const player = computer();
    const fleet = buildFleet();
    const prob = BoardFactory();
    prob.create(10);
    const shot = BoardFactory();
    shot.create(10);
    return { player, gb, fleet, prob, shot }
}
const aiP = ai();

// extras, for testing
const probBoard = BoardFactory();
probBoard.create(10);
const shotBoard = BoardFactory();
shotBoard.create(10);

// const hitCoordsArray = [];
const addToHitCoords = (input) => {
    hitCoordsArray.push(input);
    // return hitCoordsArray; ?? !!! do i need this to be returned?
}
const clearHitCoords = () => {
    while (hitCoordsArray.length > 0) {
        hitCoordsArray.pop();
    }
}
const updateShotBoard = (object) => {
    if (object.value == true) {
        if (object.obj.isSunk == true) {
            clearHitCoords();
        } else {
            addToHitCoords(object.coord);
        }
        // needs access to shotBoard !!!
        shotBoard[object.coord[0]][object.coord[1]] = 1;
    } else {
        shotBoard[object.coord[0]][object.coord[1]] = -1;
    }
}
const addToProbBoard = (gb, probBoard, length, boolean, x, y) => {
    for (let i = 0; i<length; i++) {
        // comments are older method, didn't differentiate for multiple hits in a row..
        // const hit = gb.checkPlace(length, boolean, x, y);
        const weight = gb.checkProb(length, boolean, x, y, [[5, 5], [5, 6]]);
        if (boolean) {
            // if (hit) {
            //     probBoard[Number(x)+i][y] += 5;
            // }
            probBoard[Number(x)+i][y] += weight;
        } else {
            // if (hit) {
            //     probBoard[x][Number(y)+i] += 5;
            // }
            probBoard[x][Number(y)+i] += weight;
        }
    }
    removeHits(gb, probBoard);
}
// evaluate how to improve checkPlace for "hunt mode"

const removeHits = (gb, probBoard) => {
    for (let i = 0; i<gb.board.length; i++) {
        for (let j = 0; j<gb.board[i].length; j++) {
            if (gb.board[i][j] > 0) {
                probBoard[i][j] = 0;
            }
        }
    }
}
const shipProb = (gb, ship) => {
    for (let i = 0; i<gb.board.length; i++) {
        for (let j = 0; j<gb.board[i].length; j++) {
            if (!((gb.checkOnBoard(ship.length, true, i, j)) || 
            (gb.checkMiss(ship.length, true, i, j)))) {
                addToProbBoard(gb, probBoard.board, ship.length, true, i, j);
            }
        }
    }
    for (let i = 0; i<gb.board.length; i++) {
        for (let j = 0; j<gb.board[i].length; j++) {
            if (!(gb.checkOnBoard(ship.length, false, i, j) || 
            gb.checkMiss(ship.length, false, i, j))) {
                addToProbBoard(gb, probBoard.board, ship.length, false, i, j);
            }
        }
    }
}
const fleetProb = (board, fleet) => {
    const ships = Object.keys(fleet);
    ships.forEach(ship => {
        shipProb(board, fleet[ship]);
    });
}



aiP.gb.board[4][4] = -1;
aiP.gb.board[5][5] = 1;
aiP.gb.board[5][6] = 1;

shotBoard.board[4][4] = -1;
shotBoard.board[5][5] = 1;
shotBoard.board[5][6] = 1;
shotBoard.board[5][7] = -1;
shotBoard.board[6][5] = -1;


fleetProb(shotBoard, aiP.fleet);
// shipProb(aiP.gb, aiP.fleet.carrier);
console.log(probBoard.board);

const getProbCoords = (board) => {
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
const attack = (gameboard) => {
    // updated probability board; needs access to user's fleet..? or make a copy for the probBoard, update regularly !!!
    const heatMap = fleetProb(shotBoard, p1.fleet);
    // get coordinates of best cell
    const coord = getProbCoords(heatMap);
    // launch attack on those coords
    const obj = {};
    obj.coord = coord;
    obj.obj = gameboard.receiveAttack(coord[0], coord[1]);

    // check attack intel: hit or miss, sunk?
    updateShotBoard(obj);
    return obj;
    //

}
let hitCoordsArray = [[0,0], [0,1], [0,2], [0,3], [0,5]];
const tryIt = (ship) => {
    const collection = [];
    hitCoordsArray.forEach(coord => {
        console.log(coord);
        for (let i=0; i<ship.coords.length; i++) {
            if (coord[0] != ship.coords[i][0] || coord[1] != ship.coords[i][1]) {
                return coord;
            }
        }
        console.log(coord);
    })
    return collection;
}
const ship1 = {
    coords: [[0,2], [0,3]],
}
const anotherTry = (ship) => {
    ship.coords.forEach(coord => {
        let index = hitCoordsArray.findIndex(value => {
            if (value[0] == coord[0] && value[1] == coord[1]) {
                return value;
            }
        });
        console.log(index);
        hitCoordsArray.splice(index, 1);
    })
    return hitCoordsArray;
}
console.log(anotherTry(ship1));
// console.log(getProbCoords(probBoard.board));
export { target };