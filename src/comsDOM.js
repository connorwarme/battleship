import { createElement, clearDiv } from "./utility";
import makeInitial from "./initialDOM";

// build communication div - for displaying updates / prompts
const com = (() => {
    const commC = createElement('div', {class: 'commContainer'});

    const buildComms = () => {
        const comms = createElement('div', {class: 'comms'});
        comms.textContent = `comms go here`;
        commC.appendChild(comms);
        return commC;
    }
    const shipArray = ['empty', 'submarine', 'patrol boat', 'cruiser', 'destroyer', 'battle carrier'];
    const pronounArray = [{0: 'you', 1: 'their'}, {0: 'they', 1: 'your'}];
    const updateText = (playerName, boolean, hit, sunk, ship, player) => {
        let value = player ? pronounArray[0] : pronounArray[1];
        if (boolean) {
            commC.firstChild.textContent = `Attention ${playerName.codename}: Error! Must select new coordinates.`
        } else if (sunk === true) {
            commC.firstChild.textContent = `${playerName.codename} fires a shot and ${value[0]} sunk ${value[1]} ${shipArray[ship]}!`;
        }
        else {
            let strike = hit ? `lands a strike!`: `misses!`
            commC.firstChild.textContent = `${playerName.codename} attacks and ${strike}`;
        }
    }
    const endGame = (player, restartFn) => {
        const mainC = commC.nextElementSibling;
        // clear comms and main
        clearDiv(commC);
        clearDiv(mainC);
        // build content
        const endC = createElement('div', {class: 'endContainer'});
        const banner = createElement('div', {class: 'banner'});
        banner.textContent = 'Game Over!'
        const winner = createElement('div', {class: 'winner'});
        winner.textContent = `Winner: ${player.codename}`;
        const playAgain = createElement('button', {class: 'playAgain'});
        playAgain.textContent = `Play Again`;
        mainC.appendChild(endC);
        endC.appendChild(banner);
        endC.appendChild(winner);
        endC.appendChild(playAgain);

        // add listener
        playAgain.addEventListener('click', () => {
            // clear main content
            clearDiv(mainC);
            //
            restartFn();
            //
            makeInitial();
        });
    }
    return { buildComms, updateText, endGame };
})();

export { com };