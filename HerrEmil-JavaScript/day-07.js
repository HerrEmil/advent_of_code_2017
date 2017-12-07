day07Solve = (input = '', returnWeight = false) => {
  let programs = input
    .split(/\n|\r\n/)
    .map(program => {
      const [name, weight, , ...children] = program.split(' ');
      return {
        name,
        weight: parseInt(weight.substring(1, weight.length)),
        children: children.map(c => c.replace(',', ''))
      };
    });

  let notParents = new Set();

  programs.forEach(p => {
    p.children.forEach(c => {
      notParents.add(c);
    });
    if (p.children.length === 0) {
      notParents.add(p.name);
    }
  });

  let grandparentName = '';
  programs.forEach(p => {
    if (!notParents.has(p.name)) {
      grandparentName = p.name;
    }
  });

  if (!returnWeight) {
    return grandparentName;
  }

  // Save totalWeight on all end nodes
  programs.forEach(p => {
    if (p.children.length === 0) {
      p.totalWeight = p.weight;
    }
  });

  // loop over all programs, when all children of a node have total weights, save total on parent
  // continue until all programs have found their total weight
  while (!programs.every(p => !!p.totalWeight)) {
    programs.forEach(p => {
      if (p.children.every(c => !!programs.find(y => y.name === c).totalWeight)) {
        p.totalWeight = p.weight + programs
          .filter(x => p.children.indexOf(x.name) !== -1)
          .map(p => p.totalWeight)
          .reduce((a, b) => a + b, 0);
      }
    });
  }

  let currentParent = programs.find(p => p.name === grandparentName);
  let weightDiff = 0;
  let currentParentWeightDiff = 0;

  while (!weightDiff) {
    let childWeights = new Map();
    currentParent.children
      .map(c => programs.find(p => p.name === c).totalWeight)
      .forEach(weight => {
        const siblingsWithSameWeight = childWeights.get(weight) || 0;
        childWeights.set(weight, (siblingsWithSameWeight + 1));
      });

    // Children are balanced, current parent's weight diff must be actual weight diff
    if (childWeights.size === 1) {
      weightDiff = currentParentWeightDiff;
      break;
    }

    for (let [weight, count] of childWeights.entries()) {
      if (count === 1) { // if only one child has a certain weight, it is the odd one out
        currentParent = programs.find(p =>
          p.totalWeight === weight &&
          (currentParent.children.find(c => c === p.name) !== -1)
        );
        weHaveToGoDeeper = true;
      } else {
        siblingWeight = weight;
      }
    }
    if (weHaveToGoDeeper) {
      currentParentWeightDiff = Math.abs(currentParent.totalWeight - siblingWeight);
      weHaveToGoDeeper = false;
    }
  }

  return weightDiff;
};

module.exports.solvePuzzle1 = (input = '') => day07Solve(input);
module.exports.solvePuzzle2 = (input = '') => day07Solve(input, true);
