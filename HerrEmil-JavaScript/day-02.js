module.exports.getRowMinMaxDiff = getRowMinMaxDiff = (row = '') => {
  const values = row.split(/ |\t/).map(stringValue => parseInt(stringValue));
  let min = max = values[0];

  values.forEach(value => {
    min = min < value ? min : value;
    max = max > value ? max : value;
  })

  return max - min;
};

module.exports.getRowQuotient = getRowQuotient = (row = '') => {
  const values = row.split(/ |\t/).map(stringValue => parseInt(stringValue));
  let integerQuotient = 0;

  values.some(dividend => values.some(divisor => {
      const quotient = dividend / divisor;
      if (dividend !== divisor && Number.isInteger(quotient)) {
        return integerQuotient = quotient;
      }
    })
  );

  return integerQuotient;
};

solveWithMethod = (input, method) => {
  const rows = input.split(/\n|\r\n/);
  let sum = 0;

  rows.forEach(row => {
    sum += method(row);
  })

  return sum;
};

module.exports.solvePuzzle1 = (input = '') => solveWithMethod(input, getRowMinMaxDiff);

module.exports.solvePuzzle2 = (input = '') => solveWithMethod(input, getRowQuotient);
