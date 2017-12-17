const day10 = require('./day-10');

const hexBinaryLookup = new Map([
  ['0', [false, false, false, false]],
  ['1', [false, false, false, true]],
  ['2', [false, false, true, false]],
  ['3', [false, false, true, true]],
  ['4', [false, true, false, false]],
  ['5', [false, true, false, true]],
  ['6', [false, true, true, false]],
  ['7', [false, true, true, true]],
  ['8', [true, false, false, false]],
  ['9', [true, false, false, true]],
  ['a', [true, false, true, false]],
  ['b', [true, false, true, true]],
  ['c', [true, true, false, false]],
  ['d', [true, true, false, true]],
  ['e', [true, true, true, false]],
  ['f', [true, true, true, true]],
]);

const hexToBinary = (hexString = '') => Array.from(hexString)
  .map(char => hexBinaryLookup.get(char))
  .reduce((total, nibble) => total.concat(nibble), []);

const deleteGroup = (grid = [], i = 0, j = 0) => {
  const positionsToDelete = [{ i, j }];

  while (positionsToDelete.length !== 0) {
    const { i, j } = positionsToDelete.pop();
    if (grid[i][j]) {
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
      grid[i][j] = false;
    }
  }
}

solveDay14 = (keyString = '', puzzle2 = false) => {
  const grid = [];
  for (let i = 0; i < 128; i += 1) {
    const hash = day10.solvePuzzle2(`${keyString}-${i}`);
    grid.push(hexToBinary(hash));
  }

  if (!puzzle2) {
    return grid.reduce((total, current) => total + current.filter(v => v).length, 0);
  }

  let groups = 0;
  for (let i = 0; i < 128; i += 1) {
    for (let j = 0; j < 128; j += 1) {
      if (grid[i][j]) {
        deleteGroup(grid, i, j);
        groups += 1;
      }
    }
  }
  const afterGrouping = Date.now();

  return groups;
}

module.exports.solvePuzzle1 = (keyString = '') => solveDay14(keyString);
module.exports.solvePuzzle2 = (keyString = '') => solveDay14(keyString, true);
