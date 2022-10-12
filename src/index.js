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
    // added this - can I set hit and isSunk to private, and only export this one? !!!
    const hitPlus = () => {
        hit();
        return isSunk();
    }
    return { length, sunk, getHits, hit, isSunk, hitPlus}
    };
const ship = ShipFactory(4);

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
    const shipArray = [];
    const placeShip = (object, axis, x, y) => {
        if (_checkOnBoard(object.length, axis, x, y) || 
        _checkPlace(object.length, axis, x, y)) {
            return `Denied.`;
        }
        if (axis) {
            for (let i = 0; i<object.length; i++) {
                board[x+i][y] = object.length;
        }} else {
            for (let i = 0; i<object.length; i++) {
                board[x][y+i] = object.length;
            }
        }
        shipArray.push(object);
        return `Placed.`
    }
    const _checkPlace = (length, axis, x, y) => {
        let array = [];
        let value;
        if (axis) {
            for (let i = 0; i<length; i++) {
                array.push(board[x+i][y] > 0);
            }
        } else {
            for (let i = 0; i<length; i++) {
                array.push(board[x][y+i] > 0);
            }
        }
        value = array.find(index => {
            return index == true;
        });
        return value;
    }
    const _checkOnBoard = (length, axis, x, y) => {
        let value;
        if (axis) {
            value = x + length;
            return value > board.length;
        } else {
            value = y + length;
            return value > board[x].length;
        }
    }
    const _whichShip = (input) => {
        return shipArray.find(index => index.length === input);
    }
    const missedAttacks = [];
    const _updateMiss = (x, y) => missedAttacks.push([x, y]);
    const receiveAttack = (x, y) => {
        let value = board[x][y];
        // check if board coordinates have previously been selected -> reject that attack
        if (value > 10 || value == -1) {
            return 'Try again';
        }
        if (value > 0) {
            // check which ship it is
            // run hit() on that ship
            // see if it sunk and update accordingly - send to DOM fn to update display?
            const theShip = _whichShip(value);
            const sunk = theShip.hitPlus();
            console.log(sunk);
            // update board
            board[x][y] = value + 10;
            // send signal to DOM to update grid with hit mark !!!
            // needs to switch turns !!!
            return theShip.length;
        } else {
            // update board: -1 for miss
            board[x][y] = -1;
            // add miss to array
            _updateMiss(x, y);
            console.log(missedAttacks);
            // send signal to DOM function to update grid with miss mark !!!
            // needs to switch turns !!!
            return 'Miss';
        }
    }
    // pretty sure allSunk is working, but I didn't manipulate the board to have all the ships sunk to test it fyi !!!
    const allSunk = () => shipArray.every(index => index.isSunk() === true);
        
    return { create, placeShip, receiveAttack, allSunk };
})();
const board = Gameboard.create(10);
Gameboard.placeShip(ship, true, 0, 0);
const ship2 = ShipFactory(5);
Gameboard.placeShip(ship2, false, 4, 4);
const ship3 = ShipFactory(3);
Gameboard.placeShip(ship3, false, 9, 0);
console.log(board);
export { ship, board, ship2, Gameboard, ship3 };