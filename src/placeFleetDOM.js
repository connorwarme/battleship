import { createElement } from "./utility";


const highlightLength = (element, length) => {
    const coord = Array.from(element.id);
    for (let i = 1; i < length; i++) {
        const newId = `${Number(coord[0])+i}${coord[1]}`;
        const cell = document.getElementById(newId);
        cell.style.backgroundColor = "lightgray";
    }


}
const hover = (element) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        element.style.backgroundColor = "lightgray";
        highlightLength(element, 5);
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "white";
        const grid = Array.from(document.querySelectorAll('div.cell'));
        grid.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}

export { hover };