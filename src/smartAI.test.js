import BoardFactory from "./board";
import { computer } from "./players";
import { target } from "./smartAI";

const value = target.neighborCells(2, 2);
const edge = target.neighborCells(0, 0);
console.log(target.checkCoordsArray(edge));
test('Simple target will return coordinates neighboring hit', () => {
    expect(target.neighborCells([2,2]).length).toBe(4);
    expect(value[0]).toStrictEqual([1, 2]);
    expect(value[1]).toStrictEqual([3, 2]);
    expect(value[2]).toStrictEqual([2, 1]);
    expect(value[3]).toStrictEqual([2, 3]);
})
test('Check if neighboring cells are on gameboard', () => {
    expect(target.checkCoordsArray(value).length).toBe(4);
    expect(target.checkCoordsArray(edge).length).toBe(2)
})