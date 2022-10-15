import BoardFactory from "./board";
import { PlayerFactory, computer } from "./players";
import ShipFactory from "./ship";

const p1 = PlayerFactory('p1');
const gb1 = BoardFactory();
gb1.create(10);
const ship1a = ShipFactory(5);
const ship1b = ShipFactory(4);
const ship1c = ShipFactory(3);
gb1.placeShip(ship1a, false, 0, 0);
gb1.placeShip(ship1b, false, 2, 0);
gb1.placeShip(ship1c, false, 4, 0);

test('not sure about this', () => {
  console.log(gb1.board);
});