const fs = require('fs');

const day01Input = fs.readFileSync('day-01-input.txt').toString();
const day01 = require('./day-01');
console.log(`Day 01, puzzle 1 answer: ${day01.solvePuzzle1(day01Input)}`);
console.log(`Day 01, puzzle 2 answer: ${day01.solvePuzzle2(day01Input)}`);