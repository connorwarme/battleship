import createElement from "./utility";

// build communication div - for displaying updates / prompts
const com = (() => {
    const commC = createElement('div', {class: 'commContainer'});

    const buildComms = () => {
        const comms = createElement('div', {class: 'comms'});
        comms.textContent = `comms go here`;
        commC.appendChild(comms);
        return commC;
    }
    const updateText = (player, boolean) => {
        if (boolean) {
            commC.firstChild.textContent = `Attention ${player.codename}: Error! Must select new coordinates.`
        }

    }
    return { buildComms, updateText };
})();

export { com };