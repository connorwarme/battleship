import ShipFactory from "./ship";

const shipTest = ShipFactory(5);
const ship2 = ShipFactory(4);
ship2.hit();
const ship3 = ShipFactory(2);
ship3.hit();
ship3.hit();

test('shipFactory provides length correctly', () => {
    expect(shipTest.length).toBe(5);
    expect(ship2.length).toBe(4);
  });
  test('ship hit function adds to hits counter', () => {
    expect(shipTest.getHits()).toBe(0);
    expect(ship2.getHits()).toBe(1);
  }); 
  test('isSunk properly assesses ship.sunk', () => {
    expect(shipTest.isSunk()).toBe(false);
    expect(ship3.isSunk()).toBe(true);
  });