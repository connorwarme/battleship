import { createElement } from "./utility";
import { buildBoard } from "./boardDOM";

const createPlaceDisplay = () => {
    const container = createElement('div', {class: "placeContainer"});
    const instructions = createElement('div', {class: 'placeInstructions'});
    const buttonC = createElement('div', {class: 'placeBtnContainer'});
    const axisBtn = createElement('button', {class: 'axisBtn'});
    axisBtn.textContent = 'Change Axis';
    const randomBtn = createElement('button', {class: 'randomBtn'});
    randomBtn.textContent = 'Random';

    // add listeners
    axisBtn.addEventListener('click', () => {
        console.log('shift axis!');
    })
    randomBtn.addEventListener('click', () => {
        console.log('place fleet randomly!');
    })

    // append it all together
    container.appendChild(instructions);
    container.appendChild(buttonC);
    buttonC.appendChild(axisBtn);
    buttonC.appendChild(randomBtn);

    return container;
}
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
    parentDOM.appendChild(createPlaceDisplay());
    parentDOM.appendChild(buildBoard(playerBoard, true));
    addCellListeners(playerBoard);

}
export { hover, main };