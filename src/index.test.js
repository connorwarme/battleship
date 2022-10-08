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
test('does isSunk properly assess ship.sunk?', () => {
  expect(ship.isSunk()).toBe(false);
});
test('does gameboard create a simple board', () => {
  expect(board.length).toBe(10);
});
test('does gameboard create a simple board', () => {
  expect(board[3].length).toBe(10);
});
test('does gameboard create a simple board', () => {
  expect(board[7].length).toBe(10);
});

