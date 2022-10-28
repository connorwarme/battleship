import BoardFactory from "./board";
import { computer } from "./players";
// implement improved tactics for AI player

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
const target = (x, y) => {
    
}

// hunt mode (random) improved: only attack every other square (while patrol boat exists)
// -> then every 3rd, etc.
// utilizing math concept of parity, based on (shortest) ship's length 

// probability / heat map

export { neighborCells, target, checkCoordsArray };