let assert = require('assert');
let puzzle = require('./day-07');

const exampleInput = 'pbga (66)\nxhth (57)\nebii (61)\nhavc (66)\nktlj (57)\nfwft (72) -> ktlj, cntj, xhth\nqoyq (66)\npadx (45) -> pbga, havc, qoyq\ntknk (41) -> ugml, padx, fwft\njptl (61)\nugml (68) -> gyxo, ebii, jptl\ngyxo (61)\ncntj (57)';

describe('Day 07, solvePuzzle1 tests', () => {
  it('should return "tknk" given example input', () => {
    assert.equal(puzzle.solvePuzzle1(exampleInput), 'tknk');
  });
});

describe('Day 07, solvePuzzle2 tests', () => {
  it('should return 60 given example input', () => {
    assert.equal(puzzle.solvePuzzle2(exampleInput, true), 60);
  });
});
