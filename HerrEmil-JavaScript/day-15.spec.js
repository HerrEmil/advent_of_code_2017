const assert = require('assert');
const puzzle = require('./day-15');

const exampleInput = '0: 3\n1: 2\n4: 4\n6: 4';

describe('Day 15, solvePuzzle1 tests', function() {
  this.timeout(360000);
  it('should return 588 matches after 40 million comparisons', () => {
    assert.equal(puzzle.solvePuzzle1(65, 8921), 588);
  });
});

// describe('Day 15, solvePuzzle2 tests', () => {
//   it('should return 1242 given input "flqrgnkx"', () => {
//     assert.equal(puzzle.solvePuzzle2('flqrgnkx'), 1242);
//   });
// });
