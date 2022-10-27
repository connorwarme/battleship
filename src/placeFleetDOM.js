import { createElement } from "./utility";
import { buildBoard, displayShips } from "./boardDOM";
import { com } from './comsDOM';

let axis = true;
const currentAxis = () => {
    return axis;
}
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
        // delete current board
        currentDOM.removeChild(currentDOM.lastChild);
        // build new board w/ correct listeners
        perShip(currentDOM, currentBoard, currentShip);
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
// 
const checkCell = (gameboard, ship, axis, x, y) => {
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
    console.log(`Place ship at ${[x, y]}`);
    currentObj.gb.placeShip(currentShip, axis, x, y);
    currentDOM.removeChild(currentDOM.lastChild);
    nextShip(currentDOM, currentObj);
    count++;
    console.log(currentObj.gb.board);
}
const click = (element, gameboard, ship, x, y) => {
    if (checkCell(gameboard, ship, currentAxis(), x, y)) {
        element.addEventListener('click', () => {
            clickListener(x, y);
            console.log(currentAxis());
        })
    }
}
const hover = (element, gameboard, ship, x, y) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        if (checkCell(gameboard, ship, currentAxis(), x, y)) {
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
let currentObj;
let currentBoard;
let currentShip;
let fleetKeys;
let currentDOM;
let count = 0;
const updateCurrents = (parent, board, ship) => {
    currentDOM = parent;
    currentBoard = board;
    currentShip = ship;
}
const nextShip = (parentDOM, playerObj) => {
    if (count < 5) {
        com.instruct(playerObj.player, fleetKeys[count]);
        perShip(parentDOM, playerObj.gb, playerObj.fleet[fleetKeys[count]]);
    } else {
        console.log('next step of gameloop!');
    }
}
const perShip = (parentDOM, playerBoard, ship) => {
    updateCurrents(parentDOM, playerBoard, ship);
    parentDOM.appendChild(buildBoard(playerBoard, true));
    console.log(currentDOM);
    displayShips(currentBoard, currentDOM.children[1]);
    addCellListeners(playerBoard, ship);
}
const main = (parentDOM, playerObj) => {
    parentDOM.appendChild(createPlaceDisplay());
    currentObj = playerObj;
    // update all currents? then a smaller one to run on each perShip? !!!
    fleetKeys = Object.keys(playerObj.fleet);
    nextShip(parentDOM, playerObj);
}
export { hover, main };