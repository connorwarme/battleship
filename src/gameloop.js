import BoardFactory from "./board";
import { PlayerFactory, computer } from "./players";
import { ShipFactory, buildFleet } from "./ship";
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

// create players and their respective gameboard
const initialize = (playerName) => {
    let player;
    if (!playerName) {
        player = computer();
    } else {
        player = PlayerFactory(`${playerName}`);
    }
    const gb = BoardFactory();
    gb.create(10);
    const fleet = buildFleet();

    return { player, gb, fleet }
}

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
    const startGame = () => {
        const p1 = initialize('Player 1');
        const p2 = initialize(false);
        // have AI place fleet, randomly
        // needs to be checked !!!
        p2.player.placeFleet(p2);
        return { p1, p2 }
    }
    const restartFn = () => {
        // new players
        // new gameboards
        // new ship locations
        // display ^^these
        // -> go to initial page, need user input
        // -> go to place ships page, need user input
        // -> go to main page, let battle begin
        // what else?
        console.log('restartfn'); 
    }
    let currentPlayer = {};
    // do i need ? !!!
    let currentResult = {};
    const turn = (input) => {
        currentPlayer = playerTurn ? p1 : p2;
        let result;
        // does it need a check?
        if (playerTurn) {
            result = gb2.receiveAttack(input[0], input[1]);
            if (result.value === 0) {
                // aka user clicked on coordinates for a second time
                com.updateText(currentPlayer, true, "");
                // dom function prompting user to try new coordinates
            } else {
                // user clicked on new coordinates, turn can complete
                // display the move on ai gameboard
                markCell(input[0], input[1], result.value, compBoardDOM);
                com.updateText(currentPlayer, false, result.value, result.sunk, result.ship, true);
                // check if sunk
                // display different message...
                switchTurns();
            }
        } else {
            // ai player makes attack
            // display the move on p1 gameboard
            result = p2.attack(gb1);
            markCell(result.coord[0], result.coord[1], result.obj.value, playerBoardDOM);
            com.updateText(currentPlayer, false, result.obj.value, result.obj.sunk, result.obj.ship, false);
            switchTurns();
        }
        if (!playerTurn && (!result.allSunk)) {
            turn(false);
        }
        if (result.allSunk) {
            // switch turns (back to winning player)
            switchTurns();
            // run gameover fn
            console.log('loop throwing game over');
            // needs restartFn !!!
            com.endGame(currentPlayer, restartFn);
        }
    }
    return { initialTurn, turn };
})();

export default loop;