import {
    ship,
    board,
    gameboard,
    ship2,
    ship3,
    playerFactory
} from './index';

test('shipFactory provides length correctly', () => {
  expect(ship.length).toBe(4);
});
test('ship hit function adds to hits counter', () => {
  expect(ship.getHits()).toBe(0);
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
  expect(board[0][0]).toBe(4);
  expect(board[1][0]).toBe(4);
  expect(board[2][0]).toBe(4);
  expect(board[3][0]).toBe(4);
});
test('Gameboard can place ship on y axis', () => {
  expect(board[4][3]).toBe(0);
  expect(board[4][4]).toBe(5);
  expect(board[4][5]).toBe(5);
  expect(board[4][6]).toBe(5);
  expect(board[4][7]).toBe(5);
  expect(board[4][8]).toBe(5);
  expect(board[4][9]).toBe(0);
});
test('Deny placeShip if coordinates taken', () => {
  expect(gameboard.placeShip(ship3, false, 0, 0)).toBe(`Denied.`);
  expect(gameboard.placeShip(ship3, false, 4, 2)).toBe('Denied.');
});
test('Deny placeShip if ship goes off board', () => {
  expect(gameboard.placeShip(ship3, true, 8, 2)).toBe('Denied.');
  expect(gameboard.placeShip(ship3, true, 2, 8)).toBe('Denied.');
});
test('Announce if attack missed or hit a ship & which one', () => {
  expect(gameboard.receiveAttack(0,0)).toBe(4);
  expect(gameboard.receiveAttack(0,1)).toBe('Miss');
  expect(gameboard.receiveAttack(4,4)).toBe(5);
});
test('Update board grid if attack hits or misses', () => {
  expect(board[0][0]).toBe(14);
  expect(board[0][1]).toBe(-1);
  expect(board[4][4]).toBe(15);
});
test('Reject attack if grid has been previously selected', () => {
  expect(gameboard.receiveAttack(0,0)).toBe('Try again');
  expect(gameboard.receiveAttack(4,4)).toBe('Try again');
});
test('Board can announce if all ships are sunk', () => {
  expect(gameboard.allSunk()).toBe(false);
});
test('Player factory creates a player', () => {
  expect(playerFactory('Blamo').codename).toBe('Blamo');
})
