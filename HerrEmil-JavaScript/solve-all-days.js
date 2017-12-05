const fs = require('fs');

const day01Input = fs.readFileSync('day-01-input.txt').toString();
const day01 = require('./day-01');
console.log(`Day 01, puzzle 1 answer: ${day01.solvePuzzle1(day01Input)}`); // 1029
console.log(`Day 01, puzzle 2 answer: ${day01.solvePuzzle2(day01Input)}`); // 1220

const day02Input = fs.readFileSync('day-02-input.txt').toString();
const day02 = require('./day-02');
console.log(`Day 02, puzzle 1 answer: ${day02.solvePuzzle1(day02Input)}`); // 34925
console.log(`Day 02, puzzle 2 answer: ${day02.solvePuzzle2(day02Input)}`); // 221

const day03 = require('./day-03');
console.log(`Day 03, puzzle 1 answer: ${day03.solvePuzzle1(265149)}`); // 438
console.log(`Day 03, puzzle 1 answer: ${day03.solvePuzzle2(265149)}`); // 266330

const day04Input = fs.readFileSync('day-04-input.txt').toString();
const day04 = require('./day-04');
console.log(`Day 04, puzzle 1 answer: ${day04.solvePuzzle1(day04Input)}`); // 325
console.log(`Day 04, puzzle 2 answer: ${day04.solvePuzzle2(day04Input)}`); // 119

const day05Input = fs.readFileSync('day-05-input.txt').toString();
const day05 = require('./day-05');
console.log(`Day 05, puzzle 1 answer: ${day05.solvePuzzle1(day05Input)}`); // 387096
console.log(`Day 05, puzzle 2 answer: ${day05.solvePuzzle2(day05Input)}`); // 28040648