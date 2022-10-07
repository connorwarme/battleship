// import './style.css';
// import printme from './sec';

console.log(`hello, world!`);
const check = (i, e) => {
    return i+e;
}
const shipFactory = (length) => {
    let hitCounter = 0;
    let sunk = false;
    const hit = () => {
        return hitCounter += 1;
    }
    const isSunk = () => {
        return length == hitCounter ? sunk = true : sunk = false;
        }
    return { length, hitCounter, sunk, hit, isSunk}
    };
const ship = shipFactory(5);
ship.hit();
console.log(ship.hitCounter);
export { check, ship };