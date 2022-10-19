import { createElement } from "./utility";
import loop from "./gameloop";

// render gameboards on page
const buildBoard = (object, boolean, funct) => {
    const board = object.board;
    const displayBoard = createElement('div', {class: 'displayBoard'});
    for (let i = 0; i<board.length; i++) {
        const gridCol = createElement('div', {class: `col`, id: `${i}`});
        displayBoard.appendChild(gridCol);
        for (let j = 0; j < board[i].length; j++) {
            const gridCell = createElement('div', {class: `cell`, id: `${i}${j}`});
            if (boolean) {
                gridCell.addEventListener('click', () => {
                    funct([i, j]);
                })
            }
            gridCol.appendChild(gridCell);
        }
    }
    return displayBoard;
}
const displayShips = (object, boardDOM) => {
    const board = object.board;
    for (let i = 0; i<board.length; i++) {
        for (let j = 0; j<board[i].length; j++) {
            if (board[i][j] > 0) {
                boardDOM.children[i].children[j].classList.add('ship');
            }
        }
    }
}
const markCell = (x, y, boolean, boardDOM) => {
    if (boolean) {
        boardDOM.children[x].children[y].classList.add('hit');
    } else {
        boardDOM.children[x].children[y].classList.add('miss');
    }
}


export { buildBoard, displayShips, markCell };