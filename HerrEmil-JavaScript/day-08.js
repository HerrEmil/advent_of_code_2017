evaluate = (condition, registers) => {
  a = registers.get(condition.register) || 0;
  b = condition.value;

  switch (condition.operator) {
    case '>':
      return a > b;
    case '<':
      return a < b;
    case '>=':
      return a >= b;
    case '==':
      return a == b;
    case '!=':
      return a != b;
    case '<=':
      return a <= b;
    default:
      console.log(`Did not recognize operator '${condition.operator}'`);
  }
}

day08Solve = (input = '', puzzle2 = false) => {
  let instructions = input
    .split(/\n|\r\n/)
    .map(instruction => {
      const [target, increase, amount, , ...[register, operator, value]] = instruction.split(' ');
      return {
        register: target,
        change: increase === 'inc' ? parseInt(amount) : -parseInt(amount),
        condition: {
          register,
          operator,
          value: parseInt(value),
        }
      };
    });

  let registers = new Map();
  let registerHighest = new Map();

  for (instruction of instructions) {
    if (evaluate(instruction.condition, registers)) {
      const newValue = (registers.get(instruction.register) || 0) + instruction.change;
      registers.set(instruction.register, newValue);

      if (newValue > (registerHighest.get(instruction.register) || 0)) {
        registerHighest.set(instruction.register, newValue);
      }
    }
  }

  let currentHighest = 0;
  registers.forEach(value =>
    currentHighest = currentHighest > value ? currentHighest : value);

  let historicalHighest = 0;
  registerHighest.forEach(value => historicalHighest = historicalHighest > value ? historicalHighest : value);

  return puzzle2 ? historicalHighest : currentHighest;
};

module.exports.solvePuzzle1 = (input = '') => day08Solve(input);
module.exports.solvePuzzle2 = (input = '') => day08Solve(input, true);
