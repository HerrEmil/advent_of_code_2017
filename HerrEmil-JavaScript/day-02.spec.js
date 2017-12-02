let assert = require('assert');
let puzzle = require('./day-02');

describe('Day 02, getRowMinMaxDiff tests', function () {
  it('should return 8 given input "5 1 9 5"', function () {
    assert.equal(puzzle.getRowMinMaxDiff('5 1 9 5'), 8);
  });

  it('should return 4 given input "7 5 3"', function () {
    assert.equal(puzzle.getRowMinMaxDiff('7 5 3'), 4);
  });

  it('should return 6 given input "2 4 6 8"', function () {
    assert.equal(puzzle.getRowMinMaxDiff('2 4 6 8'), 6);
  });
});


describe('Day 02, getRowQuotient tests', function () {
  it('should return 4 given input "5 9 2 8"', function () {
    assert.equal(puzzle.getRowQuotient('5 9 2 8'), 4);
  });

  it('should return 3 given input "9 4 7 3"', function () {
    assert.equal(puzzle.getRowQuotient('9 4 7 3'), 3);
  });

  it('should return 2 given input "3 8 6 5"', function () {
    assert.equal(puzzle.getRowQuotient('3 8 6 5'), 2);
  });
});
