import BoardFactory from "./board";
import { PlayerFactory, computer } from "./players";
import ShipFactory from "./ship";
import { buildBoard, displayShips } from "./boardDOM";

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

const loop = (() => {
    let playerTurn = true;
    const switchTurns = () => playerTurn = !playerTurn;
    const initialTurn = (parentDOM) => {
        parentDOM.appendChild(buildBoard(gb1));
        displayShips(gb1, parentDOM.firstChild);
        parentDOM.appendChild(buildBoard(gb2));
        displayShips(gb2, parentDOM.lastChild);
    }
    const turn = (input) => {
        console.log(input);
        const currentPlayer = playerTurn ? p1 : p2;
        // does it need a check?
        if (playerTurn) {
            let x = gb2.receiveAttack(input[0], input[1]);
            console.log(x);
        } else {
            let y = p2.attack(gb1);
            console.log(y)
        }
        switchTurns();
        if (!playerTurn) {
            turn(false);
        }
    }
    return { initialTurn, turn };
})();

export default loop;