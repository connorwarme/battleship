import BoardFactory from "./board";
import { computer } from "./players";
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

target.main([0, 0]);
console.log(target.getStack());
console.log(target.launchAttack());
console.log(target.getStack());
// hunt mode (random) improved: only attack every other square (while patrol boat exists)
// -> then every 3rd, etc.
// utilizing math concept of parity, based on (shortest) ship's length 

// probability / heat map

export { target };