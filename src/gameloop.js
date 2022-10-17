import BoardFactory from "./board";
import { PlayerFactory, computer } from "./players";
import ShipFactory from "./ship";
import { buildBoard, displayShips, markCell } from "./boardDOM";
import { com } from './comsDOM';

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

const p1 = PlayerFactory('Alfredo');
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
gb2.placeShip(ship2a, false, 5, 0);
gb2.placeShip(ship2b, false, 7, 0);
gb2.placeShip(ship2c, false, 9, 0);

const loop = (() => {
    let playerTurn = true;
    let playerBoardDOM;
    let compBoardDOM;
    const switchTurns = () => playerTurn = !playerTurn;
    const initialTurn = (parentDOM) => {
        parentDOM.appendChild(buildBoard(gb1, false));
        displayShips(gb1, parentDOM.firstChild);
        playerBoardDOM = parentDOM.firstChild;
        parentDOM.appendChild(buildBoard(gb2, true));
        displayShips(gb2, parentDOM.lastChild);
        compBoardDOM = parentDOM.lastChild;
    }
    const turn = (input) => {
        const currentPlayer = playerTurn ? p1 : p2;
        // does it need a check?
        if (playerTurn) {
            const hit = gb2.receiveAttack(input[0], input[1]);
            if (hit === 0) {
                // aka user clicked on coordinates for a second time
                console.log('try again dumbass');
                com.updateText(currentPlayer, true);
                // dom function prompting user to try new coordinates
            } else {
                // user clicked on new coordinates, turn can complete
                // display the move on ai gameboard
                markCell(input[0], input[1], hit, compBoardDOM);
                switchTurns();
            }
        } else {
            // ai player makes attack
            // display the move on p1 gameboard
            let y = p2.attack(gb1);
            markCell(y.coord[0], y.coord[1], y.bool, playerBoardDOM);
            switchTurns();
        }
        if (!playerTurn) {
            turn(false);
        }
    }
    return { initialTurn, turn };
})();

export default loop;