let assert = require('assert');
let puzzle = require('./day-01');

describe('Day 01, Puzzle 1 tests', function() {
  it('should produce sum 3 given input "1122"', function() {
    assert.equal(puzzle.solvePuzzle1('1122'), 3);
  });

  it('should produce sum 4 given input "1111"', function() {
    assert.equal(puzzle.solvePuzzle1('1111'), 4);
  });

  it('should produce sum 0 given input "1234"', function() {
    assert.equal(puzzle.solvePuzzle1('1234'), 0);
  });

  it('should produce sum 9 given input "91212129"', function() {
    assert.equal(puzzle.solvePuzzle1('91212129'), 9);
  });
});

describe('Day 01, Puzzle 2 tests', function() {
  it('should produce sum 6 given input "1212"', function() {
    assert.equal(puzzle.solvePuzzle2('1212'), 6);
  });

  it('should produce sum 0 given input "1221"', function() {
    assert.equal(puzzle.solvePuzzle2('1221'), 0);
  });

  it('should produce sum 4 given input "123425"', function() {
    assert.equal(puzzle.solvePuzzle2('123425'), 4);
  });

  it('should produce sum 12 given input "123123"', function() {
    assert.equal(puzzle.solvePuzzle2('123123'), 12);
  });

  it('should produce sum 4 given input "12131415"', function() {
    assert.equal(puzzle.solvePuzzle2('12131415'), 4);
  });
});
