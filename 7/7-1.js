const originalInput = [3, 8, 1001, 8, 10, 8, 105, 1, 0, 0, 21, 38, 63, 76, 93, 118, 199, 280, 361, 442, 99999, 3, 9, 101, 3, 9, 9, 102, 3, 9, 9, 101, 4, 9, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 101, 5, 9, 9, 1002, 9, 5, 9, 101, 5, 9, 9, 1002, 9, 4, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 102, 3, 9, 9, 4, 9, 99, 3, 9, 101, 2, 9, 9, 102, 5, 9, 9, 1001, 9, 5, 9, 4, 9, 99, 3, 9, 102, 4, 9, 9, 1001, 9, 3, 9, 1002, 9, 5, 9, 101, 2, 9, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 99, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 99, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99, 3, 9, 1001, 9, 1, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 99, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 3, 9, 1001, 9, 2, 9, 4, 9, 3, 9, 102, 2, 9, 9, 4, 9, 3, 9, 101, 1, 9, 9, 4, 9, 3, 9, 101, 2, 9, 9, 4, 9, 3, 9, 1002, 9, 2, 9, 4, 9, 99];
const getIncrement = (opCode) => {
  if (opCode < 3) {
    return 4;
  } if (opCode < 5) {
    return 2;
  } if (opCode < 7) {
    return 0;
  }
  return 4;
};

const getMode = (instruction, offSet) => {
  // Special case: input instructions are always immediate
  if (+(instruction.slice(-2)) === 3) {
    return 1;
  }
  return (!+(instruction.charAt(instruction.length - offSet)) ? 0 : 1);
};

const normalize = num => num.toString().padStart(5, '0');

// /* eslint-disable indent */
const permutations = Array(44444 + 1).fill()
  .map((_, idx) => idx)
  .filter(num => num.toString().split('').every(digit => +digit < 5))
  .filter(num => new Set(normalize(num).split('')).size === 5);
/* eslint-enable indent */

const getPhase = (amp, permutation) => +normalize(permutation).split('')[amp];
let inputCount = 0;
let pointer = 0;
let lastOutput = 0;
const signals = [];
permutations.forEach((permutation) => {
  lastOutput = 0;
  for (let amp = 0; amp < 5; amp++) {
    const input = [...originalInput];
    inputCount = 0;
    pointer = 0;
    while (pointer < input.length) {
      const instruction = input[pointer].toString();
      const opCode = +(instruction.slice(-2));
      const increment = getIncrement(opCode);
      const param1Mode = getMode(instruction, 3);
      const param2Mode = getMode(instruction, 4);
      const firstVal = param1Mode ? input[pointer + 1] : input[input[pointer + 1]];
      const secondVal = param2Mode ? input[pointer + 2] : input[input[pointer + 2]];
      const resultPointer = increment === 2 ? input[pointer + 1] : input[pointer + 3];
      if (opCode === 1) {
        const result = firstVal + secondVal;
        input[resultPointer] = result;
      } else if (opCode === 2) {
        const result = firstVal * secondVal;
        input[resultPointer] = result;
      } else if (opCode === 3) {
        if (inputCount) {
          input[firstVal] = lastOutput;
        } else {
          input[firstVal] = getPhase(amp, permutation);
          inputCount++;
        }
      } else if (opCode === 4) {
        if (amp === 4) {
          signals.push(firstVal);
        } else {
          lastOutput = firstVal;
        }
      } else if (opCode === 5) {
        const shouldJump = firstVal !== 0;
        if (shouldJump) {
          pointer = secondVal;
        } else {
          pointer += 3;
        }
      } else if (opCode === 6) {
        const shouldJump = firstVal === 0;
        if (shouldJump) {
          pointer = secondVal;
        } else {
          pointer += 3;
        }
      } else if (opCode === 7) {
        input[resultPointer] = firstVal < secondVal ? 1 : 0;
      } else if (opCode === 8) {
        input[resultPointer] = firstVal === secondVal ? 1 : 0;
      } else if (opCode === 99) {
        break;
      } else {
        console.error(instruction);
        throw new Error('something went terribly wrong');
      }
      pointer += increment;
    }
  }
});

console.log(signals.reduce((a, b) => (a > b ? a : b)));
