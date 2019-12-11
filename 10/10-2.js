const input = [
  '#...##.####.#.......#.##..##.#.',
  '#.##.#..#..#...##..##.##.#.....',
  '#..#####.#......#..#....#.###.#',
  '...#.#.#...#..#.....#..#..#.#..',
  '.#.....##..#...#..#.#...##.....',
  '##.....#..........##..#......##',
  '.##..##.#.#....##..##.......#..',
  '#.##.##....###..#...##...##....',
  '##.#.#............##..#...##..#',
  '###..##.###.....#.##...####....',
  '...##..#...##...##..#.#..#...#.',
  '..#.#.##.#.#.#####.#....####.#.',
  '#......###.##....#...#...#...##',
  '.....#...#.#.#.#....#...#......',
  '#..#.#.#..#....#..#...#..#..##.',
  '#.....#..##.....#...###..#..#.#',
  '.....####.#..#...##..#..#..#..#',
  '..#.....#.#........#.#.##..####',
  '.#.....##..#.##.....#...###....',
  '###.###....#..#..#.....#####...',
  '#..##.##..##.#.#....#.#......#.',
  '.#....#.##..#.#.#.......##.....',
  '##.##...#...#....###.#....#....',
  '.....#.######.#.#..#..#.#.....#',
  '.#..#.##.#....#.##..#.#...##..#',
  '.##.###..#..#..#.###...#####.#.',
  '#...#...........#.....#.......#',
  '#....##.#.#..##...#..####...#..',
  '#.####......#####.....#.##..#..',
  '.#...#....#...##..##.#.#......#',
  '#..###.....##.#.......#.##...##',
];

// const input = [
// '.#....#####...#..',
// '##...##.#####..##',
// '##...#...#.#####.',
// '..#.....#...###..',
// '..#.#.....#....##',
// ]

// const input = [
// '.#..##.###...#######',
// '##.############..##.',
// '.#.######.########.#',
// '.###.#######.####.#.',
// '#####.##.#.##.###.##',
// '..#####..#.#########',
// '####################',
// '#.####....###.#.#.##',
// '##.#################',
// '#####.##.###..####..',
// '..######..##.#######',
// '####.##.####...##..#',
// '.#####..#.######.###',
// '##...#.##########...',
// '#.##########.#######',
// '.####.#.###.###.#.##',
// '....##.##.###..#####',
// '.#.#.###########.###',
// '#.#.#.#####.####.###',
// '###.##.####.##.#..##',
// ]
const bestStation = [17, 22];

const getDegrees = (radians) => {
  if (radians >= 0) {
    return +(radians*180/Math.PI).toFixed(2)%360;
  }
  return +(radians*180/Math.PI + 360).toFixed(2)%360;
}

const hasAsteroid = (input, x, y) => input[y][x] === '#'
const toRad = (deg) => deg * Math.PI * 180;
const strReplace = (str, index, char) => str.substr(0, index) + char + str.substr(index + 1);
const vaporize = (input, x, y) => input[y] = strReplace(input[y], x, '.');
const angleMap = {}
const buildMap = (x, y) => {
  for (let j = 0; j < input.length; j++) {
    for (let i = 0; i < input[0].length; i++) {
      if (hasAsteroid(input, i, j) && !(i === x && j === y)) {
        const xdiff = i - x;
        const ydiff = j - y;
        const angle = Math.atan2(ydiff, xdiff);
        const mag = Math.sqrt(ydiff ** 2 + xdiff ** 2);
        const angles = angleMap[getDegrees(angle).toString()];
        const magAndLoc = {
          mag,
          location: `${i},${j}`
        }
        if (angles) {
          angles.push(magAndLoc);
        } else {
          angleMap[getDegrees(angle).toString()] = [magAndLoc];
        }
      }
    }
  }
}

const findAsteroid = (laserAngle) => {
  const arr = angleMap[laserAngle] ? angleMap[laserAngle] : [];
  if (arr.length) {
    const closest = arr.reduce((prev, curr) => curr.mag < prev.mag ? curr : prev);
    const location = closest.location.split(',').map(num => +num);
    angleMap[laserAngle] = angleMap[laserAngle].filter(angleObj => angleObj !== closest)
    vaporize(input, location[0], location[1]);
    console.log(`The ${vaporized}th asteroid was at ${location[0]}, ${location[1]}`)
    vaporized++;
  }
}
// I do not understand why this needs to start at 2, but it does.
let vaporized = 2;
let laserAngle = 270;
buildMap(bestStation[0], bestStation[1]);
while (vaporized <= 299) {
  findAsteroid(+(laserAngle.toFixed(2)).toString());
  laserAngle = (laserAngle + 0.01) % 360
}
