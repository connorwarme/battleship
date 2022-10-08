import {
    ship,
    board,
    Gameboard,
    ship2,
    ship3
} from './index';

test('shipFactory provides length correctly', () => {
  expect(ship.length).toBe(4);
});
test('ship hit function adds to hits counter', () => {
  expect(ship.getHits()).toBe(3);
}); 
test('isSunk properly assesses ship.sunk', () => {
  expect(ship.isSunk()).toBe(false);
});
test('Gameboard creates a simple board', () => {
  expect(board.length).toBe(10);
  expect(board[3].length).toBe(10);
  expect(board[7].length).toBe(10);
});
test('Gameboard can place ship on x axis', () => {
  expect(board[0][0]).toBe(1);
  expect(board[1][0]).toBe(1);
  expect(board[2][0]).toBe(1);
  expect(board[3][0]).toBe(1);
});
test('Gameboard can place ship on y axis', () => {
  expect(board[4][3]).toBe(0);
  expect(board[4][4]).toBe(1);
  expect(board[4][5]).toBe(1);
  expect(board[4][6]).toBe(1);
  expect(board[4][7]).toBe(1);
  expect(board[4][8]).toBe(1);
  expect(board[4][9]).toBe(0);
});
test('Deny placeShip if coordinates taken', () => {
  expect(Gameboard.placeShip(ship3, false, 0, 0)).toBe(`Denied.`);
  expect(Gameboard.placeShip(ship3, false, 4, 2)).toBe('Denied.');
});
test('Deny placeShip if ship goes off board', () => {
  expect(Gameboard.placeShip(ship3, true, 8, 2)).toBe('Denied.');
  expect(Gameboard.placeShip(ship3, true, 2, 8)).toBe('Denied.');
})

