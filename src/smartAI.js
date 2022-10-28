import BoardFactory from "./board";
import { computer } from "./players";
// implement improved tactics for AI player

// target mode: after hit, return adjacent squares and attack those
// target improved: if multiple hits are horizontal, prefer continued attacks along horizontal until sunk
const target = (i, j) => {
    const x = Number(i);
    const y = Number(j);
    const a = [x-1, y];
    const b = [x+1, y];
    const c = [x, y-1];
    const d = [x, y+1];
    return [a, b, c, d];
}

// hunt mode (random) improved: only attack every other square (while patrol boat exists)
// -> then every 3rd, etc.
// utilizing math concept of parity, based on (shortest) ship's length 

// probability / heat map

export { target };