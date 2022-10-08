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
        // run check
        if (axis) {
            for (let i = 0; i<object.length; i++) {
                board[x+i][y] = 1;
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = 1;
            }
        }
    }
    // const _put = (length, )
    // const receiveAttack = (x, y) => {

    // }
    return { create, placeShip };
})();
const board = Gameboard.create(10);
Gameboard.placeShip(ship, true, 0, 0);
console.log(board);
const newShip = ShipFactory(5);
Gameboard.placeShip(newShip, false, 4,4);
console.log(board);
export { ship, board, newShip };