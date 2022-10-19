import BoardFactory from "./board"; 

// from initial, go to 1 board (empty)
// above, a button to switch axis
// above, a communication bar (e.g. "Place your carrier")
//
// hover over board, shadow outline of ship size, rotates when axis btn clicked
// click on board, places ship according to those coordinates
// goes through each ship
// after last ship, takes board and makes it p1.gb.board
// page fades out, then load loop.initialturn 

const place = () => {
    const createEmpty = () => {
        const board = BoardFactory();
        board.create(10);
        return board;
    }
    const ship = () => {
        // call dom function -> display instruction: 'place your ship'
        
    }
    const fleet = (player) => {
        const board = createEmpty().board;
        const shipArray = Object.keys(player.fleet);
        shipArray.forEach(ship => {

        })
    }


}