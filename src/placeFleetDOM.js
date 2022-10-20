import { createElement } from "./utility";

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
const hover = (element, gameboard) => {
    let appliedListener = false;
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        const x = Number(element.id.charAt(0));
        const y = Number(element.id.charAt(1));
        // could add a class...
        if (checkCell(gameboard, x, y)) {
            highlightLength(element, 5);
            // add click listener to allow placement...
            appliedListener = true;
        };
    })
    element.addEventListener('mouseout', () => {
        if (appliedListener) {
            // remove click listener for ship placement
            appliedListener = false;
        }
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}

export { hover };