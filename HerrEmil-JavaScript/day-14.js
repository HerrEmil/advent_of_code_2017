const day10 = require('./day-10');

const hexBinaryLookup = new Map([
  ['0', '0000'],
  ['1', '0001'],
  ['2', '0010'],
  ['3', '0011'],
  ['4', '0100'],
  ['5', '0101'],
  ['6', '0110'],
  ['7', '0111'],
  ['8', '1000'],
  ['9', '1001'],
  ['a', '1010'],
  ['b', '1011'],
  ['c', '1100'],
  ['d', '1101'],
  ['e', '1110'],
  ['f', '1111'],
]);

module.exports.hexToBinary = hexToBinary = (hexString = '') => Array
  .from(hexString)
  .map(char => hexBinaryLookup.get(char))
  .join('');

const deleteGroup = (grid = [], i = 0, j = 0) => {
  const positionsToDelete = [{ i, j }];

  while (positionsToDelete.length !== 0) {
    const { i, j } = positionsToDelete.pop();
    if (grid[i][j] === '1') {
      if (i !== 0) {
        positionsToDelete.push({ i: i - 1, j });
      }
      if (i !== 127) {
        positionsToDelete.push({ i: i + 1, j });
      }
      if (j !== 0) {
        positionsToDelete.push({ i, j: j - 1 });
      }
      if (j !== 127) {
        positionsToDelete.push({ i, j: j + 1 });
      }
      grid[i][j] = '0';
    }
  }
}

solveDay14 = (keyString = '', puzzle2 = false) => {
  const grid = [];
  for (let i = 0; i < 128; i += 1) {
    const hash = day10.solvePuzzle2(`${keyString}-${i}`);
    grid.push(hexToBinary(hash).split(''));
  }

  if (!puzzle2) {
    return grid.reduce((total, current) => total + current.filter(v => v === '1').length, 0);
  }

  let groups = 0;
  for (let i = 0; i < 128; i += 1) {
    for (let j = 0; j < 128; j += 1) {
      if (grid[i][j] === '1') {
        deleteGroup(grid, i, j);
        groups += 1;
      }
    }
  }

  return groups;
}

module.exports.solvePuzzle1 = (keyString = '') => solveDay14(keyString);
module.exports.solvePuzzle2 = (keyString = '') => solveDay14(keyString, true);
