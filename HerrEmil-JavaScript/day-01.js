getCharAtOffsetFromIndex = (i, offset, digits) => {
  charIndex = (i + offset > digits.length - 1)
    ? i + offset - digits.length
    : i + offset;

  return digits[charIndex];
}

solve = (digits, offset) => {
  let sum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    const current = digits[i];
    const next = getCharAtOffsetFromIndex(i, offset, digits);

    if (current === next) {
      sum += parseInt(current);
    }
  }

  return sum;
}

module.exports.solvePuzzle1 = solvePuzzle1 = (digits) => {
  return solve(digits, 1);
}

module.exports.solvePuzzle2 = solvePuzzle2 = (digits) => {
  return solve(digits, (digits.length / 2));
}
