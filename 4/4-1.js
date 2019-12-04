const start = 240298;
const end = 784956;

const arr = Array(end - start + 1).fill().map((_, idx) => start + idx)

const consecutiveMatch = (array) => array.some((char, index) => index < array.length - 1 && char === array[index + 1]);
const nonDecreasing = (array) => array.map(char => +char).every((num, index) => index === 0 || num >= array[index - 1]);
const parseArray = (array) => array.map(num => num.toString().split(''));

const result = parseArray(arr).filter(parsed => consecutiveMatch(parsed) && nonDecreasing(parsed));
console.log(result.length);
