import { createElement } from "./utility";
import { buildBoard } from "./boardDOM";

let axis = true;
const createPlaceDisplay = () => {
    const container = createElement('div', {class: "placeContainer"});
    const instructions = createElement('div', {class: 'placeInstructions'});
    const buttonC = createElement('div', {class: 'placeBtnContainer'});
    const axisBtn = createElement('button', {class: 'axisBtn'});
    axisBtn.textContent = `Axis: X`
    const randomBtn = createElement('button', {class: 'randomBtn'});
    randomBtn.textContent = 'Random';

    // add listeners
    axisBtn.addEventListener('click', () => {
        axis = !axis;
        let text = axis ? 'X' : 'Y';
        axisBtn.textContent = `Axis: ${text}`;
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
const checkCell = (gameboard, ship, x, y) => {
    if (gameboard.checkOnBoard(ship.length, axis, x, y) || 
    gameboard.checkPlace(ship.length, axis, x, y)) {
        return false;
    }
    return true;
}
const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    let newId;
    for (let i = 0; i < length; i++) {
        if (axis) {
            newId = `${Number(coord[0])+i}${coord[1]}`;
        } else {
            newId = `${coord[0]}${Number(coord[1])+i}`;
        }
        const cell = document.getElementById(newId);
        cell.style.backgroundColor = "lightgray";
    }
}

const clickListener = (x, y) => {
    console.log([x, y]);
}
const click = (element, gameboard, ship, x, y) => {
    if (checkCell(gameboard, ship, x, y)) {
        element.addEventListener('click', () => {
            clickListener(x, y);
        })
    }
}
const hover = (element, gameboard, ship, x, y) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        if (checkCell(gameboard, ship, x, y)) {
            highlightLength(element, ship.length);
        };
    })
    element.addEventListener('mouseout', () => {
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}
const addCellListeners = (gameboard, ship) => {
    const cellArray = Array.from(document.querySelectorAll('div.cell'));
    cellArray.forEach(cell => {
        const x = Number(cell.id.charAt(0));
        const y = Number(cell.id.charAt(1));
        hover(cell, gameboard, ship, x, y);
        click(cell, gameboard, ship, x, y);
    })
}
const perShip = (parentDOM, playerBoard, ship) => {
    parentDOM.appendChild(buildBoard(playerBoard, true));
    addCellListeners(playerBoard, ship);
}
const main = (parentDOM, playerBoard, ship) => {
    parentDOM.appendChild(createPlaceDisplay());
    perShip(parentDOM, playerBoard, ship);

}
export { hover, main };