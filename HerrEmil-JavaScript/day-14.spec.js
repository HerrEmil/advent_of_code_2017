const assert = require('assert');
const puzzle = require('./day-14');

const exampleInput = '0: 3\n1: 2\n4: 4\n6: 4';

describe('Day 14, solvePuzzle1 tests', () => {
  it('should return 8108 given input "flqrgnkx"', () => {
    assert.equal(puzzle.solvePuzzle1('flqrgnkx'), 8108);
  });
});

describe('Day 14, solvePuzzle2 tests', () => {
  it('should return 1242 given input "flqrgnkx"', () => {
    assert.equal(puzzle.solvePuzzle2('flqrgnkx'), 1242);
  });
});
