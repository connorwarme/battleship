import { createElement } from "./utility";
import loop from "./gameloop";

const attackHover = (element) => {
        // on enter, highlight
        element.addEventListener('mouseenter', () => {
            // check if cell has been clicked already
            if (element.classList.value == 'cell') {
                element.style.cursor = "crosshair";
                element.style.backgroundColor = "#38B000";
            } else {
                element.style.cursor = "not-allowed";
                element.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            }
        })
        element.addEventListener('mouseout', () => {
            const grid = Array.from(element.parentElement.children);
            // const grid = Array.from(document.querySelectorAll('div.cell'));
            grid.forEach(cell => {
                if (cell.classList.length == 1) {
                    cell.style.backgroundColor = "white";
                } else if (cell.classList.value == "cell hit") {
                    cell.style.backgroundColor = "#DA2C38";
                } else if (cell.classList.value == "cell miss") {
                    cell.style.backgroundColor = "#2364AA"
                }
            })
        })
    }
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
                // need to be able to delineate event listener for place ships and other for actual gameplay
                gridCell.addEventListener('click', (e) => {
                    if (loop.getTurn()) {
                        funct([i, j], e);
                    }
                })
                attackHover(gridCell);
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
        boardDOM.children[x].children[y].textContent = "🔥";
    } else {
        boardDOM.children[x].children[y].classList.add('miss');
        boardDOM.children[x].children[y].textContent = "🌊";
    }
}


export { buildBoard, displayShips, markCell };