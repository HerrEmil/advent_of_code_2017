let assert = require('assert');
let puzzle = require('./day-11');

describe('Day 11, solvePuzzle1 tests', () => {
  it('should return 3 given input "ne,ne,ne" ', () => {
    assert.equal(puzzle.solvePuzzle1('ne,ne,ne'), 3);
  });

  it('should return 0 given input "ne,ne,sw,sw" ', () => {
    assert.equal(puzzle.solvePuzzle1('ne,ne,sw,sw'), 0);
  });

  it('should return 2 given input "ne,ne,s,s" ', () => {
    assert.equal(puzzle.solvePuzzle1('ne,ne,s,s'), 2);
  });

  it('should return 3 given input "se,sw,se,sw,sw" ', () => {
    assert.equal(puzzle.solvePuzzle1('se,sw,se,sw,sw'), 3);
  });
});
