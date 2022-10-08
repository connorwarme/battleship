import {
    ship,
    board
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
test('Gameboard can place ship', () => {
  expect(board[0][0]).toBe(1);
  expect(board[1][0]).toBe(1);
  expect(board[2][0]).toBe(1);
  expect(board[3][0]).toBe(1);
});

