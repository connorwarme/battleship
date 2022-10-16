import createElement from "./utility";
import Github from './icons/github.svg';
import LinkedIn from './icons/linkedin.svg';
// build initial page
// pt 1 - header and footer 
// pt 2 - body (title, instructions, user name input, start btn)

const body = createElement('div', {class: 'body'});
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
    let footerBox = createElement('div', {class: "footerBox"});
    let linkContainer = createElement('div', {class: "linkContainer"});
    let gitLink = createElement('a', {href: "https://github.com/connorwarme", "alt": "Github Profile", "target": "_blank"});
    let gitIcon = createElement('img', {class: 'gitIcon'});;
    gitIcon.src = Github;
    gitIcon.alt = "Github Profile";
    let linkLink = createElement('a', {href: "https://www.linkedin.com/in/connor-warme-103a09167", "alt": "LinkedIn Profile", "target": "_blank"});
    let linkIcon = createElement('img', {class: 'linkIcon'});
    linkIcon.src = LinkedIn;
    linkIcon.alt = "LinkedIn Profile";
    let textContainer = createElement('div', {class: "textContainer"});
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
const mainC = createElement('div', {class: 'mainContainer'});

const makeInitial = () => {
    const page = document.querySelector('body');
    page.appendChild(header());
    page.appendChild(footer());
}
export default makeInitial;