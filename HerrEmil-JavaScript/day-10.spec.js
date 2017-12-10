let assert = require('assert');
let puzzle = require('./day-10');

describe('Day 10, solvePuzzle1 tests', () => {
  it('should return 12 given input "3, 4, 1, 5" on a list with length 5', () => {
    assert.equal(puzzle.solvePuzzle1('3, 4, 1, 5', 5), 12);
  });
});

describe('Day 10, solvePuzzle2 tests', () => {
  it('should return "a2582a3a0e66e6e86e3812dcb672a272" given empty string', () => {
    assert.equal(puzzle.solvePuzzle2(''), 'a2582a3a0e66e6e86e3812dcb672a272');
  });

  it('should return "33efeb34ea91902bb2f59c9920caa6cd" given input "AoC 2017', () => {
    assert.equal(puzzle.solvePuzzle2('AoC 2017'), '33efeb34ea91902bb2f59c9920caa6cd');
  });

  it('should return "3efbe78a8d82f29979031a4aa0b16a9d" given input 1,2,3', () => {
    assert.equal(puzzle.solvePuzzle2('1,2,3'), '3efbe78a8d82f29979031a4aa0b16a9d');
  });

  it('should return "63960835bcdc130f0b66d7ff4f6a5a8e" given input "1,2,4', () => {
    assert.equal(puzzle.solvePuzzle2('1,2,4'), '63960835bcdc130f0b66d7ff4f6a5a8e');
  });
});
