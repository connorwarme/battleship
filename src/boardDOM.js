import createElement from "./utility";

// render gameboards on page

const buildBoard = (object, parentDOM) => {
    for (let i = 0; i<object.length; i++) {
        const gridCol = createElement('div', {class: `col${i}`});
        parentDOM.appendChild(gridCol);
        for (let j = 0; j < object[i].length; j++) {
            const gridCell = createElement('div', {class: `cell`, id: `${i} ${j}`});
            gridCol.appendChild(gridCell);
        }
    }
}

export default buildBoard;