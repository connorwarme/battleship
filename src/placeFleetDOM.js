import { createElement } from "./utility";


const checkCell = (gameboard, x, y) => {
    if (gameboard.checkOnBoard(5, true, x, y) || 
    gameboard.checkPlace(5, true, x, y)) {
        return false;
    }
    return true;
}
const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    for (let i = 1; i < length; i++) {
        const newId = `${Number(coord[0])+i}${coord[1]}`;
        const cell = document.getElementById(newId);
        cell.style.backgroundColor = "lightgray";
    }


}
const hover = (element, gameboard) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        const x = Number(Array.from(element.id)[0]);
        const y = Number(Array.from(element.id)[1]);
        // could add a class...
        if (checkCell(gameboard, x, y)) {
            element.style.backgroundColor = "lightgray";
            highlightLength(element, 5);
        };
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "white";
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}

export { hover };