// import './style.css';
// import printme from './sec';

console.log(`hello, world!`);

const ShipFactory = (input) => {
    const length = input;
    let hits = 0;
    let sunk = false;
    const getHits = () => {
        return hits;
    }
    const hit = () => {
        hits += 1;
    }
    const isSunk = () => {
        return length <= hits ? sunk = true : sunk = false;
        }
    return { length, sunk, getHits, hit, isSunk}
    };
const ship = ShipFactory(4);
ship.hit();
ship.hit();
ship.hit();

const Gameboard = (() => {
    const board = [];
    const create = (length) => {
        for (let i = 0; i<length; i++) {
            let row = [];
            board.push(row);
            for (let j = 0; j<length; j++) {
                row.push(0);
            }
        }
        return board;
    }
    const placeShip = (object, axis, x, y) => {
        if (checkPlace(object.length, axis, x, y)) {
            return `Denied.`;
        }
        if (axis) {
            for (let i = 0; i<object.length; i++) {
                board[x+i][y] = 1;
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = 1;
            }
        }
        return `Placed.`
    }
    const checkPlace = (length, axis, x, y) => {
        let array = [];
        let value;
        if (axis) {
            for (let i = 0; i<length; i++) {
                array.push(board[x+i][y] == 1);
            }
        } else {
            for (let i = 0; i<length; i++) {
                array.push(board[x][y+i] == 1);
            }
        }
        value = array.find(index => {
            return index == true;
        });
        return value;
    }
    // const receiveAttack = (x, y) => {

    // }
    return { create, placeShip };
})();
const board = Gameboard.create(10);
Gameboard.placeShip(ship, true, 0, 0);
const ship2 = ShipFactory(5);
Gameboard.placeShip(ship2, false, 4, 4);
const ship3 = ShipFactory(3);
console.log(Gameboard.placeShip(ship3, false, 4, 2));
console.log(board);
export { ship, board, ship2, Gameboard, ship3 };