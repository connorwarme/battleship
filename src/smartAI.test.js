import BoardFactory from "./board";
import { computer } from "./players";
import { target } from "./smartAI";

console.log(target(2, 2));
const value = target(2, 2);
test.only('Simple target will return coordinates neighboring hit', () => {
    expect(target([2,2]).length).toBe(4);
    expect(value[0]).toStrictEqual([1, 2]);
    expect(value[1]).toStrictEqual([3, 2]);
    expect(value[2]).toStrictEqual([2, 1]);
    expect(value[3]).toStrictEqual([2, 3]);
})