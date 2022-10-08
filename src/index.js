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

const Gameboard = (length) => {
    const board = [];
    for (let i = 0; i<length; i++) {
        let item = [];
        board.push(item);
        for (let j = 0; j<length; j++) {
            item.push(0);
        }
    }
    return board;
}
const board = Gameboard(10);

export { ship, board };