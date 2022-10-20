import { createElement } from "./utility";

const hover = (element) => {
    // on enter, highlight
    element.addEventListener('mouseenter', () => {
        // could add a class...
        element.style.backgroundColor = "lightgray";
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "white";
    })
}

export { hover };