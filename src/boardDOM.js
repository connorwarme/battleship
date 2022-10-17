import createElement from "./utility";

// render gameboards on page

const buildBoard = (object) => {
    const board = object.board;
    const displayBoard = createElement('div', {class: 'displayBoard'});
    for (let i = 0; i<board.length; i++) {
        const gridCol = createElement('div', {class: `col`, id: `${i}`});
        displayBoard.appendChild(gridCol);
        for (let j = 0; j < board[i].length; j++) {
            const gridCell = createElement('div', {class: `cell`, id: `${i}${j}`});
            gridCol.appendChild(gridCell);
        }
    }
    return displayBoard;
}

export default buildBoard;