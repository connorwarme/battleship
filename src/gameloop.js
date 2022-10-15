import BoardFactory from "./board";
import { PlayerFactory, computer } from "./players";
import ShipFactory from "./ship";

// game loop
// initialize w/ p1 and gameboard1
// place ships
// create p2 and gameboard2
// place ships
// turn logic
// -> take coordinates, confirm legal play (not repeat)
// -> launch attack
//      -> hit
//            -> sunk?
//                -> yes: -> all sunk?
//                    -> yes: end game (display)
//                    -> no: switch turns
//                -> no: switch turns
//      -> miss
//          -> switch turns

const p1 = PlayerFactory('p1');
const gb1 = BoardFactory();
gb1.create(10);
const ship1a = ShipFactory(5);
const ship1b = ShipFactory(4);
const ship1c = ShipFactory(3);
gb1.placeShip(ship1a, false, 0, 0);
gb1.placeShip(ship1b, false, 2, 0);
gb1.placeShip(ship1c, false, 4, 0);
console.log(gb1.board);

const p2 = computer();
const gb2 = BoardFactory();
gb2.create(10);
const ship2a = ShipFactory(5);
const ship2b = ShipFactory(4);
const ship2c = ShipFactory(3);
gb2.placeShip(ship2a, false, 0, 0);
gb2.placeShip(ship2b, false, 2, 0);
gb2.placeShip(ship2c, false, 4, 0);


export default function printMe()  {
    console.log('yo!');
};