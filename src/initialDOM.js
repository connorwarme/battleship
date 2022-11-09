import { createElement, clearDiv } from "./utility";
import Github from './icons/github.svg';
import LinkedIn from './icons/linkedin.svg';
import { PlayerFactory } from "./players";
import loop from "./gameloop";
import { com } from "./comsDOM";
// build initial page
// pt 1 - header and footer 
// pt 2 - body (title, instructions, user name input, start btn)

//
const header = () => {
    const headC = createElement('div', {class: 'headerContainer'});
    const title = createElement('div', {class: 'headerTitle'});
    title.textContent = 'BATTLESHIP';
    headC.appendChild(title);
    return headC;
}
//
const footer = () => {
    const footC = createElement('div', {class: 'footerContainer'});
    const footerBox = createElement('div', {class: "footerBox"});
    const linkContainer = createElement('div', {class: "linkContainer"});
    const gitLink = createElement('a', {href: "https://github.com/connorwarme", "alt": "Github Profile", "target": "_blank"});
    const gitIcon = createElement('img', {class: 'gitIcon'});;
    gitIcon.src = Github;
    gitIcon.alt = "Github Profile";
    const linkLink = createElement('a', {href: "https://www.linkedin.com/in/connor-warme-103a09167", "alt": "LinkedIn Profile", "target": "_blank"});
    const linkIcon = createElement('img', {class: 'linkIcon'});
    linkIcon.src = LinkedIn;
    linkIcon.alt = "LinkedIn Profile";
    const textContainer = createElement('div', {class: "textContainer"});
    textContainer.textContent = "Peregrinning Productions";

    // append it all together
    footC.appendChild(footerBox);
    footerBox.appendChild(linkContainer);
    linkContainer.appendChild(gitLink);
    gitLink.appendChild(gitIcon);
    linkContainer.appendChild(linkLink);
    linkLink.appendChild(linkIcon);
    footerBox.appendChild(textContainer);

    return footC;
}
// 
const mainContent = () => {
    const mainC = createElement('div', {class: 'mainContainer'});
    const initialC = createElement('div', {class: 'initialContent'});
    const infoC = createElement('div', {class: 'instructionsContainer'});
    const instruct = createElement('div', {class: 'instructions'});
    instruct.textContent = 'Eliminate the enemy fleet!';
    const inputC = createElement('div', {class: 'inputContainer'});
    const input = createElement('input', {type: 'text', id: 'username', class: 'inputField', placeholder: 'Player 1'});
    const inputLabel = createElement('label', {for: 'username'});
    inputLabel.textContent = 'Enter Player Name:';
    const startC = createElement('div', {class: 'startContainer'});
    const start = createElement('button', {class: 'start'});
    start.textContent = 'Start Game!'

    // listener and helpers
    const clearMain = () => clearDiv(mainC);
    
    const startFn = () => {
        // need a check if input is empty !!!
        
        let callsign = 'Aquaman';
        if (input.value) {
            callsign = input.value;
        }
        // clear main container -> prep for board display
        clearMain();
        // initialize game loop?
        // loop.initialTurn(mainC);
        loop.initializeGame(callsign, mainC);
    }
    start.addEventListener('click', () => {
        startFn();
    })

    // append it all together
    mainC.appendChild(initialC);
    initialC.appendChild(infoC);
    infoC.appendChild(instruct);
    initialC.appendChild(inputC);
    inputC.appendChild(inputLabel);
    inputC.appendChild(input);
    initialC.appendChild(startC);
    startC.appendChild(start);

    return mainC;
}

//
const makeInitial = () => {
    const page = document.querySelector('body');
    const body = createElement('div', {class: 'body'});
    body.appendChild(header());
    body.appendChild(com.buildComms());
    body.appendChild(mainContent());
    body.appendChild(footer());
    page.appendChild(body);
}
const makeInitialLite = () => {
    const body = document.querySelector('div.body');
    body.insertBefore(com.buildComms(), body.children[1]);
    body.insertBefore(mainContent(), body.children[2]);
}
export { makeInitial, makeInitialLite };