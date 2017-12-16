let assert = require('assert');
let puzzle = require('./day-13');

const exampleInput = '0: 3\n1: 2\n4: 4\n6: 4';

describe('Day 13, solvePuzzle1 tests', () => {
  it('should return 24 given example input', () => {
    assert.equal(puzzle.solvePuzzle1(exampleInput), 24);
  });
});

describe('Day 13, solvePuzzle2 tests', () => {
  it('should return 10 given example input', () => {
    assert.equal(puzzle.solvePuzzle2(exampleInput), 10);
  });
});
