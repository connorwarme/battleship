import { createElement } from "./utility";
import { buildBoard } from "./boardDOM";

// right now, checkCell has hardcode values for length and axis !!!
const checkCell = (gameboard, x, y) => {
    if (gameboard.checkOnBoard(5, true, x, y) || 
    gameboard.checkPlace(5, true, x, y)) {
        return false;
    }
    return true;
}
const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    for (let i = 0; i < length; i++) {
        const newId = `${Number(coord[0])+i}${coord[1]}`;
        const cell = document.getElementById(newId);
        cell.style.backgroundColor = "lightgray";
    }
}

const clickListener = (x, y) => {
    console.log([x, y]);
}
const click = (element, gameboard, x, y) => {
    if (checkCell(gameboard, x, y)) {
        element.addEventListener('click', () => {
            clickListener(x, y);
        })
    }
}
const hover = (element, gameboard, x, y) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        if (checkCell(gameboard, x, y)) {
            highlightLength(element, 5);
        };
    })
    element.addEventListener('mouseout', () => {
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}
const addCellListeners = (gameboard) => {
    const cellArray = Array.from(document.querySelectorAll('div.cell'));
    cellArray.forEach(cell => {
        const x = Number(cell.id.charAt(0));
        const y = Number(cell.id.charAt(1));
        hover(cell, gameboard, x, y);
        click(cell, gameboard, x, y);
    })
}
const main = (parentDOM, playerBoard) => {
    parentDOM.appendChild(buildBoard(playerBoard, true));
    addCellListeners(playerBoard);

}
export { hover, main };