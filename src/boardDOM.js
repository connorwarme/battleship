import createElement from "./utility";

// render gameboards on page

const buildBoard = (object, parentDOM) => {
    const board = object.board;
    for (let i = 0; i<board.length; i++) {
        const gridCol = createElement('div', {class: `col${i}`});
        parentDOM.appendChild(gridCol);
        for (let j = 0; j < board[i].length; j++) {
            const gridCell = createElement('div', {class: `cell`, id: `${i} ${j}`});
            gridCol.appendChild(gridCell);
        }
    }
}

export default buildBoard;