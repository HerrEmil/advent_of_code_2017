populateTotalWeight = (program) => {
  program.totalWeight = program.weight;
  program.children.forEach(child => {
    program.totalWeight += populateTotalWeight(child);
  });

  return program.totalWeight;
}

day07Solve = (input = '', returnWeight = false) => {
  let programs = input
    .split(/\n|\r\n/)
    .map(program => {
      const [name, weight, , ...childNames] = program.split(' ');
      return {
        name,
        weight: parseInt(weight.substring(1, weight.length)),
        childNames: childNames.map(c => c.replace(',', '')),
        children: [],
      };
    });

  // build tree
  programs.forEach(p => {
    p.childNames.forEach(name => {
      p.children.push(programs.find(p => p.name === name));
    });
  });

  // Look for root by ruling out programs without children and programs mentioned in childNames
  let notParentNames = new Set();
  programs.forEach(p => {
    p.childNames.forEach(c => {
      notParentNames.add(c);
    });
    if (p.childNames.length === 0) {
      notParentNames.add(p.name);
    }
  });

  // The name of root is the only name not ruled out
  let rootName = '';
  programs.forEach(p => {
    if (!notParentNames.has(p.name)) {
      rootName = p.name;
    }
  });

  // Puzzle 1 answer
  if (!returnWeight) {
    return rootName;
  }

  const root = programs.find(p => p.name === rootName);
  populateTotalWeight(root);

  let currentProgram = root;
  let correctWeight = 0;
  let siblingTotalWeight = 0;

  while (!correctWeight) {
    // Save the weight of children and the count of each unique weight
    let childWeights = new Map();
    currentProgram.children
      .map(c => c.totalWeight)
      .forEach(weight => {
        childWeights.set(weight, ((childWeights.get(weight) || 0) + 1));
      });

    // If the number of unique weights of children is 1, they are in balance,
    //  and puzzle 2 can be solved with current values
    if (childWeights.size === 1) {
      correctWeight = currentProgram.weight - (currentProgram.totalWeight - siblingTotalWeight);
      break;
    }

    // If a child weight is only used by one child, that program is looked at in the next loop
    for (let [weight, count] of childWeights.entries()) {
      if (count === 1) {
        currentProgram = currentProgram.children.find(c => c.totalWeight === weight);
      } else {
        siblingTotalWeight = weight;
      }
    }
  }

  return correctWeight;
};

module.exports.solvePuzzle1 = (input = '') => day07Solve(input);
module.exports.solvePuzzle2 = (input = '') => day07Solve(input, true);
