findMaxIndex = (banks = []) => {
  let max = 0;
  let maxIndex = -1;
  const length = banks.length;

  for (let i = 0; i < length; i++) {
    if (banks[i] > max) {
      max = banks[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

spreadOutValueAtIndex = (banks = [], index = 0) => {
  const value = banks[index];
  banks[index] = 0;
  const length = banks.length;

  for (let i = 1; i <= value; i += 1) {
    banks[(index + i) % length] = banks[(index + i) % length] + 1;
  }

  return banks;
}

getStringFromArrayValues = (array = []) => {
  const length = array.length;
  let string = '';

  for (value of array) {
    string += (value + ' ');
  }

  return string;
}

day06Solve = (input = '', returnLoopCount = false) => {
  let banks = input.split(/ |\t/).map(s => parseInt(s));

  let uniqueDistributions = new Map();
  uniqueDistributions.set(getStringFromArrayValues(banks), 0);

  let redistributionCycles;

  for (redistributionCycles = 1; true; redistributionCycles += 1) {
    const maxIndex = findMaxIndex(banks);
    const largestValue = banks[maxIndex];

    banks = spreadOutValueAtIndex(banks, maxIndex);

    currentDistribution = getStringFromArrayValues(banks);
    if (uniqueDistributions.has(currentDistribution)) {
      return returnLoopCount
        ? redistributionCycles - uniqueDistributions.get(currentDistribution)
        : redistributionCycles;
    }

    uniqueDistributions.set(currentDistribution, redistributionCycles);
  }
};

module.exports.solvePuzzle1 = (input = '') => day06Solve(input);
module.exports.solvePuzzle2 = (input = '') => day06Solve(input, true);
