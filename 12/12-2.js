const originalPositions = [
  [-1, -4, 0],
  [4, 7, -1],
  [-14, -10, 9],
  [1, 2, 17]
];

const positions = originalPositions.map(innerArr => [...innerArr])

const originalVelocities = [
  [0, 0 ,0],
  [0, 0 ,0],
  [0, 0 ,0],
  [0, 0 ,0],
]

const velocities = originalVelocities.map(innerArr => [...innerArr])

const gcd = (a, b) => {
  let newA = Math.abs(a);
  let newB = Math.abs(b);
  while(newB !== 0) {
    const temp = newB;
    newB = newA % newB;
    newA = temp;
  }
  return newA;
}


const lcm = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs((a * b) / gcd(a, b));
}

const getDirection = (arr, direction) => arr.map(innerArr => innerArr[direction]);
const equals = (arr1, arr2) => arr1.every((element, index) => element === arr2[index]);
const directionEquals = (arr1, arr2, direction) => equals(getDirection(arr1, direction), getDirection(arr2, direction));

const simulateGravity = (i) => {

    for (let j = 0; j < positions.length; j++) {
      let innerIncrement = 1;

      while(innerIncrement + j < positions.length) {
        const firstVal = positions[j][i];
        const secondVal = positions[j + innerIncrement][i];

        if (firstVal < secondVal) {
          velocities[j][i] = velocities[j][i] + 1;
          velocities[j + innerIncrement][i] = velocities[j + innerIncrement][i] - 1;
        } else if (firstVal > secondVal) {
          velocities[j][i] = velocities[j][i] - 1;
          velocities[j + innerIncrement][i] = velocities[j + innerIncrement][i] + 1;
        }
        innerIncrement++;
      }
    }
  simulateMotion(i);
  return directionEquals(originalPositions, positions, i) && directionEquals(originalVelocities, velocities, i);
};

const simulateMotion = (i) => {
  for (let j = 0; j < positions.length; j++) {
    positions[j][i] = positions[j][i] + velocities[j][i];
  }
};

let iter = 0;
let matchFound = false;
let totals = [];
for (let i = 0; i < positions[0].length; i++) {
  while(!matchFound) {
    iter++;
    matchFound = simulateGravity(i);
  }
  totals.push(iter);
  iter = 0;
  matchFound = false;
}

console.log(totals.reduce((acc, curr) => lcm(acc, curr)));
