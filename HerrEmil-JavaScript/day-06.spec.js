let assert = require('assert');
let puzzle = require('./day-06');

describe('Day 06, solvePuzzle1 tests', () => {
  it('should return 5 given input "0 2 7 0"', () => {
    assert.equal(puzzle.solvePuzzle1('0 2 7 0'), 5);
  });
});

describe('Day 06, solvePuzzle2 tests', () => {
  it('should return 4 given input "0 2 7 0"', () => {
    assert.equal(puzzle.solvePuzzle2('0 2 7 0', true), 4);
  });
});
