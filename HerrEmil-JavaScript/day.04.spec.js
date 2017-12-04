let assert = require('assert');
let puzzle = require('./day-04');

describe('Day 03, isValidPassPhrase tests', () => {
  it('should return true given input "aa bb cc dd ee"', () => {
    assert.equal(puzzle.isValidPassPhrase('aa bb cc dd ee'), true);
  });

  it('should return false given input "aa bb cc dd aa"', () => {
    assert.equal(puzzle.isValidPassPhrase('aa bb cc dd aa'), false);
  });

  it('should return true given input "aa bb cc dd aaa"', () => {
    assert.equal(puzzle.isValidPassPhrase('aa bb cc dd aaa'), true);
  });
});

describe('Day 03, isValidPassPhrase tests', () => {
  it('should return true given input "abcde fghij"', () => {
    assert.equal(puzzle.isValidPassPhrase('abcde fghij', true), true);
  });

  it('should return false given input "abcde xyz ecdab"', () => {
    assert.equal(puzzle.isValidPassPhrase('abcde xyz ecdab', true), false);
  });

  it('should return true given input "a ab abc abd abf abj"', () => {
    assert.equal(puzzle.isValidPassPhrase('a ab abc abd abf abj', true), true);
  });

  it('should return true given input "iiii oiii ooii oooi oooo"', () => {
    assert.equal(puzzle.isValidPassPhrase('iiii oiii ooii oooi oooo', true), true);
  });

  it('should return false given input "oiii ioii iioi iiio"', () => {
    assert.equal(puzzle.isValidPassPhrase('oiii ioii iioi iiio', true), false);
  });
});
