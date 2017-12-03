let assert = require('assert');
let puzzle = require('./day-03');

describe('Day 03, puzzle 1 tests', () => {
  it('should return 0 given input 1', () => {
    assert.equal(puzzle.solvePuzzle1(1), 0);
  });

  it('should return 3 given input 12', () => {
    assert.equal(puzzle.solvePuzzle1(12), 3);
  });

  it('should return 2 given input 23', () => {
    assert.equal(puzzle.solvePuzzle1(23), 2);
  });

  it('should return 31 given input 1024', () => {
    assert.equal(puzzle.solvePuzzle1(1024), 31);
  });
});

describe('Day 03, puzzle 2 tests', () => {
  it('should return 1 given input 1', () => {
    assert.equal(puzzle.solvePuzzle2(1), 1);
  })

  it('should return 1 given input 2', () => {
    assert.equal(puzzle.solvePuzzle2(2), 1);
  })

  it('should return 2 given input 3', () => {
    assert.equal(puzzle.solvePuzzle2(3), 2);
  })

  it('should return 4 given input 4', () => {
    assert.equal(puzzle.solvePuzzle2(4), 4);
  })

  it('should return 5 given input 5', () => {
    assert.equal(puzzle.solvePuzzle2(5), 5);
  })
})