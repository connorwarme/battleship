import { PlayerFactory, computer } from './players';
import BoardFactory from './board';
import ShipFactory from './ship';

const blamo = PlayerFactory('Blamo');
blamo.wins = blamo.addWin();
console.log(blamo.wins);
const gameboard = BoardFactory();
const board = gameboard.create(10);
const ship1 = ShipFactory(4);
const ship2 = ShipFactory(5);
const ship3 = ShipFactory(3);
gameboard.placeShip(ship1, true, 0, 0);
gameboard.placeShip(ship2, false, 4, 4);
gameboard.placeShip(ship3, false, 9, 0);

test('Player factory creates a player', () => {
    expect(blamo.codename).toBe('Blamo');
});
test('Add to wins tally on player object', () => {
    expect(blamo.wins).toBe(1);
});
test('Test player can launch attack', () => {
    expect(blamo.attack([9,1], gameboard)).toBe(3);
    expect(blamo.attack([0,0], gameboard)).toBe(4);
    expect(blamo.attack([0,1], gameboard)).toBe('Miss');
    console.log(gameboard.board);
});