import { createElement } from "./utility";

// build legend to explain emojis, provide detailed instructions
const ship = {
    emoji: " ",
    text: "friendly ship",
    class: "ship"
}
const wave = {
    emoji: "🌊",
    text: "attack miss",
    class: "miss"
}
const hit = {
    emoji: "🔥",
    text: "attack hit",
    class: "hit"
}
const sunk = {
    emoji: "🔱",
    text: "you sunk enemy ship",
    class: "sunk"
}
const enemySunk = {
    emoji: "🏴‍☠️",
    text: "enemy sunk friendly ship",
    class: "sunk"
}
const emojiArray = [ship, wave, hit, sunk, enemySunk];

const createLegend = () => {
    const container = createElement('div', {class: 'legendContainer'});
    const legendBox = createElement('div', {class: 'legendBox'});
    legendBox.textContent = "Legend:";
    const list = createElement('ul', {class: 'legendList'});
    emojiArray.forEach(emoji => {
        const li = createElement('li', {class: 'emojiLi'});
        const box = createElement('div', {class: `emojiBox ${emoji.class}`});
        box.textContent = `${emoji.emoji}`;
        const text = createElement('div', {class: 'emojiText'});
        text.textContent = `- ${emoji.text}`;
        li.appendChild(box);
        li.appendChild(text);
        list.appendChild(li);
    })
    legendBox.appendChild(list);
    container.appendChild(legendBox);
    // const waveLi = createElement('li', {class: 'waveLi'});
    // const waveBox = createElement('div', {class: 'waveBox miss'});
    // waveBox.textContent = "🌊";
    // const waveText = createElement('div', {class: 'waveText'});
    // waveText.textContent = '- attack miss';
    // waveLi.appendChild(waveBox);
    // waveLi.appendChild(waveText);
    // const fireLi = createElement('li', {class: 'fireLi'});
    // const fireBox = createElement('div', {class: 'fireBox hit'});
    // fireBox.textContent = "🔥";
    // const fireText = createElement('div', {class: 'fireText'});
    // fireText.textContent = '- attack hit';
    // fireLi.appendChild(fireBox);
    // fireLi.appendChild(fireText); 
    const instructBox = createElement('div', {class: 'instructBox'});
    instructBox.textContent = "Instructions:";

    return container;
}


export default createLegend;