import BoardFactory from "./board";
import { ShipFactory } from "./ship";

const gameboard = BoardFactory();
const board = gameboard.create(10);

const ship = ShipFactory(4);
const ship1 = ShipFactory(3);
const ship2 = ShipFactory(5);
gameboard.placeShip(ship, true, 0, 0);
gameboard.placeShip(ship2, false, 4, 4);

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
    expect(gameboard.placeShip(ship1, false, 0, 0)).toBe(false);
    expect(gameboard.placeShip(ship1, false, 4, 2)).toBe(false);
  });
  test('Deny placeShip if ship goes off board', () => {
    expect(gameboard.placeShip(ship1, true, 8, 2)).toBe(false);
    expect(gameboard.placeShip(ship1, true, 2, 8)).toBe(false);
  });
  test('Announce if attack missed or hit a ship & which one', () => {
    expect(gameboard.receiveAttack(0,0).value).toBe(true);
    expect(gameboard.receiveAttack(0,1).value).toBe(false);
    expect(gameboard.receiveAttack(4,4).value).toBe(true);
  });
  test('Update board grid if attack hits or misses', () => {
    expect(board[0][0]).toBe(14);
    expect(board[0][1]).toBe(-1);
    expect(board[4][4]).toBe(15);
  });
  test('Reject attack if grid has been previously selected', () => {
    expect(gameboard.receiveAttack(0,0).value).toBe(0);
    expect(gameboard.receiveAttack(4,4).value).toBe(0);
  });
  test('Board can announce if all ships are sunk', () => {
    expect(gameboard.allSunk()).toBe(false);
  });