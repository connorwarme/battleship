import {
    check,
    ship
} from './index';

test('if check provides sum of two arguments', () => {
    expect(check(1,3)).toBe(4);
});
test('shipFactory provides length correctly', () => {
  expect(ship.length).toBe(5);
});
test('ship hit function adds to hitCounter', () => {
  expect(ship.hitCounter).toBe(1);
}); 
test('does isSunk properly assess ship.sunk?', () => {
  expect(ship.isSunk()).toBe(false);
})