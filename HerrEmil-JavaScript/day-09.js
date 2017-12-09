day09Solve = (stream = '', puzzle2 = false) => {
  let garbage = false;
  let score = depth = garbageCount = 0;

  const length = stream.length;
  for (let index = 0; index < length; index += 1) {
    let char = stream[index];

    if (char === '!') {
      index += 1;
    }
    else if (garbage && char !== '>') {
      garbageCount += 1;
    }
    else if (char === '<') {
      garbage = true;
    }
    else if (char === '>') {
      garbage = false;
    }
    else if (char === '{') {
      depth += 1;
      score += depth;
    }
    else if (char === '}') {
      depth -= 1;
    }
  }

  return puzzle2
    ? garbageCount
    : score;
}

module.exports.solvePuzzle1 = (input = '') => day09Solve(input);
module.exports.solvePuzzle2 = (input = '') => day09Solve(input, true);
