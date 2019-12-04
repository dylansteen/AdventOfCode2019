const start = 240298;
const end = 784956;

const arr = Array(end - start + 1).fill().map((_, idx) => start + idx).map(num => num.toString().split(''));

const consecutiveMatch = (array) => array.some((char, index) => index < array.length - 1 && char === array[index + 1] && !(char === array[index + 2] || char === array[index - 1]));
const nonDecreasing = (array) => array.map(char => +char).every((num, index) => index === 0 || num >= array[index - 1]);

const result = arr.filter(mapped => consecutiveMatch(mapped) && nonDecreasing(mapped));
console.log(result.length);
