day05Solve = (input = '', max3 = false) => {
  const list = input.split(/\n|\r\n/).map(s => parseInt(s));
  let stepsTaken = 0;

  for (let i = 0; i >= 0 && i < list.length;) {
    const jumpInstruction = list[i];
    max3 && jumpInstruction > 2
      ? list[i] = jumpInstruction - 1
      : list[i] = jumpInstruction + 1;
    i += jumpInstruction;
    stepsTaken += 1;
  }

  return stepsTaken;
};

module.exports.solvePuzzle1 = (input = '') => day05Solve(input, false);
module.exports.solvePuzzle2 = (input = '') => day05Solve(input, true);