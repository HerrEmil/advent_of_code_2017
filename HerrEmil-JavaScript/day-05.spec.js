let assert = require('assert');
let puzzle = require('./day-05');

describe('Day 05, solvePuzzle1 tests', () => {
  it('should return 5 given example input', () => {
    assert.equal(puzzle.solvePuzzle1('0\n3\n0\n1\n-3'), 5);
  });
});

describe('Day 05, solvePuzzle2 tests', () => {
  it('should return 10 given example input', () => {
    assert.equal(puzzle.solvePuzzle2('0\n3\n0\n1\n-3'), 10);
  });
});
