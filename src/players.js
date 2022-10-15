// player factory and AI logic

const PlayerFactory = (codename) => {
    let wins = 0;
    const attack = (coordinates, gameboard) => {
        return gameboard.receiveAttack(coordinates[0], coordinates[1]);
    }
    const addWin = () => wins += 1;
    return { codename, wins, attack, addWin };
}
const computer = () => {
    const {codename} = PlayerFactory('Easy AI').codename;
    const _generate = () => Math.floor(Math.random() * 10);
    const _generateRandomAttack = () => {
        let x = _generate();
        let y = _generate();
        return [x, y];
    };
    const attacksArray = [];
    const _available = (array) => {
        let value = true;
        for (let i = 0; i<attacksArray.length; i++) {
            if (attacksArray[i][0] === array[0]) {
                if (attacksArray[i][1] === array[1]) {
                    value = false;
                }
            }
        }
        return value;
    }
    const attack = (gameboard) => {
        let coord = _generateRandomAttack();
        if (_available(coord)) {
            // add coordinates to attacksArray
            // launch attack on opposition's board
            attacksArray.push(coord);
            return gameboard.receiveAttack(coord[0], coord[1]);
        } else {
            // try again - w/ new coordinates
            attack();
        }
    }
    return { codename, attack, wins: 0};
}

export { PlayerFactory, computer}