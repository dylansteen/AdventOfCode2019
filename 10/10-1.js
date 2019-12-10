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

const hasAsteroid = (input, x, y) => input[y][x] === '#'

const countVisible = (x, y) => {
  let visible = 0;
  for (let j = 0; j < input[0].length; j++) {
    for (let i = 0; i < input.length; i++) {
      if (hasAsteroid(input, i, j)) {
        const xdiff = i - x;
        const ydiff = j - y;
        const angle = Math.atan2(ydiff, xdiff);
        const mag = Math.sqrt(ydiff ** 2 + xdiff ** 2);
        let hidden = false;

        for (let h = 0; h < input[0].length; h++) {
          for (let k = 0; k < input.length; k++) {
            const innerxdiff = k - x;
            const innerydiff = h - y;
            const innerAngle = Math.atan2(innerydiff, innerxdiff);
            const innerMag = Math.sqrt(innerydiff ** 2 + innerxdiff ** 2);

            if (hasAsteroid(input, k, h) && innerAngle === angle && innerMag < mag & !(h === y && k === x)) {
              hidden = true;
              break;
            }
          }
        }

        if (!hidden) {
          visible++;
        }

      }
    }
  }
  return visible - 1;
}



const options = [];
for (let j = 0; j < input[0].length; j++) {
  for (let i = 0; i < input.length; i++) {

    if (hasAsteroid(input, i, j)) {
      options.push(countVisible(i, j));
    }

  }
}

console.log(options.reduce((x, y) => x > y ? x : y));
