import { SomeFunc } from "./mapArr.js";

const arr = [1, 2, 3, 4, 5, 6];
const filterArr = arr.filter(elem => elem % 2 === 0);
const mapArr = filterArr.map((e, i) => `${i + 1}: ${e}`);

console.log(mapArr);
console.log(SomeFunc('Egor'));