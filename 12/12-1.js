const positions = [
  [-1, -4, 0],
  [4, 7, -1],
  [-14, -10, 9],
  [1, 2, 17]
];

const velocities = [
  [0, 0 ,0],
  [0, 0 ,0],
  [0, 0 ,0],
  [0, 0 ,0],
]

const arrSum = arr => arr.reduce((a,b) => a + Math.abs(b), 0)

const energy = (pos, vel) => {
  let total = 0;
  pos.forEach((innerArr, index) => {
    total += arrSum(innerArr) * arrSum(vel[index]);
  });
  return total;
}
const simulateGravity = () => {
  for (let j = 0; j < positions.length; j++) {
    for (let i = 0; i < positions[0].length; i++) {
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
  }
  simulateMotion();
};

const simulateMotion = () => {
  for (let j = 0; j < positions.length; j++) {
    for (let i = 0; i < positions[0].length; i++) {
      positions[j][i] = positions[j][i] + velocities[j][i];
    }
  }
};

let counter = 0;

while(counter < 1000) {
  simulateGravity();
  counter++
}

console.log(energy(positions, velocities));
