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
    return { player, gb, fleet }
}
const aiP = ai();
const probBoard = BoardFactory();
probBoard.create(10);
const addToProbBoard = (gb, probBoard, length, boolean, x, y) => {
    for (let i = 0; i<length; i++) {
        const hit = gb.checkPlace(length, boolean, x, y);
        if (boolean) {
            if (hit) {
                probBoard[Number(x)+i][y] += 5;
            }
            probBoard[Number(x)+i][y] += 1;
        } else {
            if (hit) {
                probBoard[x][Number(y)+i] += 5;
            }
            probBoard[x][Number(y)+i] += 1;
        }
    }
    removeHits(gb, probBoard);
}
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
fleetProb(aiP.gb, aiP.fleet);
// shipProb(aiP.gb, aiP.fleet.carrier);
console.log(probBoard.board);



export { target };