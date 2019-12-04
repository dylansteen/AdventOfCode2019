const start = 240298;
const end = 784956;

let count = 0;
for (i of range(start, end)) {

  const parsedArray = i.toString().split('');
  const consecutiveMatch = parsedArray.some((char, index) => index < parsedArray.length - 1 && char === parsedArray[index + 1]);
  const nonDecreasing = parsedArray.map(char => +char).every((num, index) => index === 0 || num >= parsedArray[index - 1])

  if (consecutiveMatch && nonDecreasing) {
    count++;
  }
}

console.log(count);

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
