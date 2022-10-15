import { PlayerFactory, computer } from './players';
import BoardFactory from './board';
import ShipFactory from './ship';

const blamo = PlayerFactory('Blamo');
blamo.wins = blamo.addWin();
console.log(blamo.wins);
const gameboard = BoardFactory();
gameboard.create(10);
const ship1 = ShipFactory(4);
const ship2 = ShipFactory(5);
const ship3 = ShipFactory(3);
gameboard.placeShip(ship1, true, 0, 0);
gameboard.placeShip(ship2, false, 4, 4);
gameboard.placeShip(ship3, false, 9, 0);
const ai = computer();
console.log(ai);

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
});
test('Create ai player', () => {
    expect(ai.codename).toBe('Easy AI');
    expect(ai.wins).toBe(0);
});
test('AI creates legal attack', () => {
    const coord = ai.attack(gameboard);
    expect(coord.length).toBe(2);
    expect(coord[0]).toBeGreaterThan(-1);
    expect(coord[0]).toBeLessThan(10);
    expect(coord[1]).toBeGreaterThan(-1);
    expect(coord[1]).toBeLessThan(10);
    console.log(coord);
    console.log(gameboard.board);
})