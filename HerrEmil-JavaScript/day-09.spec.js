let assert = require('assert');
let puzzle = require('./day-09');

describe('Day 09, solvePuzzle1 tests', () => {
  it('should return 1 given input "{}"', () => {
    assert.equal(puzzle.solvePuzzle1('{}'), 1);
  });

  it('should return 6 given input "{{{}}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{{}}}'), 6);
  });

  it('should return 5 given input "{{},{}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{},{}}'), 5);
  });

  it('should return 16 given input "{{{},{},{{}}}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{{},{},{{}}}}'), 16);
  });

  it('should return 1 given input "{<a>,<a>,<a>,<a>}"', () => {
    assert.equal(puzzle.solvePuzzle1('{<a>,<a>,<a>,<a>}'), 1);
  });

  it('should return 9 given input "{{<ab>},{<ab>},{<ab>},{<ab>}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{<ab>},{<ab>},{<ab>},{<ab>}}'), 9);
  });

  it('should return 9 given input "{{<!!>},{<!!>},{<!!>},{<!!>}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{<!!>},{<!!>},{<!!>},{<!!>}}'), 9);
  });

  it('should return 3 given input "{{<a!>},{<a!>},{<a!>},{<ab>}}"', () => {
    assert.equal(puzzle.solvePuzzle1('{{<a!>},{<a!>},{<a!>},{<ab>}}'), 3);
  });
});

// describe('Day 09, solvePuzzle2 tests', () => {
//   it('should return 10 given example input', () => {
//     assert.equal(puzzle.solvePuzzle2(exampleInput, true), 10);
//   });
// });
