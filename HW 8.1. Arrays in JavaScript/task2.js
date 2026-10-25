const array = [1, 2, 3, 4, 5];

const multiplyArray = array.map((number) => number * array.indexOf(number));

console.log(multiplyArray);
