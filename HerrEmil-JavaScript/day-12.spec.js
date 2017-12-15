let assert = require('assert');
let puzzle = require('./day-12');

const exampleInput = '0 <-> 2\n1 <-> 1\n2 <-> 0, 3, 4\n3 <-> 2, 4\n4 <-> 2, 3, 6\n5 <-> 6\n6 <-> 4, 5';

describe('Day 12, solvePuzzle1 tests', () => {
  it('should return 6 given example input', () => {
    assert.equal(puzzle.solvePuzzle1(exampleInput), 6);
  });
});

describe('Day 12, solvePuzzle2 tests', () => {
  it('should return 2 given example input', () => {
    assert.equal(puzzle.solvePuzzle2(exampleInput), 2);
  });
});
