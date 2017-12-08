let assert = require('assert');
let puzzle = require('./day-08');

const exampleInput = 'b inc 5 if a > 1\na inc 1 if b < 5\nc dec -10 if a >= 1\nc inc -20 if c == 10';

describe('Day 08, solvePuzzle1 tests', () => {
  it('should return 1 given example input', () => {
    assert.equal(puzzle.solvePuzzle1(exampleInput), 1);
  });
});

describe('Day 08, solvePuzzle2 tests', () => {
  it('should return 10 given example input', () => {
    assert.equal(puzzle.solvePuzzle2(exampleInput, true), 10);
  });
});
