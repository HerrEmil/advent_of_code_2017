solveDay11 = (input = '', puzzle2 = false) => {
  const instructions = input.split(',');
  let north = west = currentDistance = furthestDistance = 0;

  for (instruction of instructions) {

    switch (instruction) {
      case 'n':
        north += 1;
        break;

      case 'ne':
        north += 0.5;
        west -= 0.5;
        break;

      case 'se':
        north -= 0.5;
        west -= 0.5;
        break;

      case 's':
        north -= 1;
        break;

      case 'sw':
        north -= 0.5;
        west += 0.5;
        break;

      case 'nw':
        north += 0.5;
        west += 0.5;
        break;
    }

    currentDistance = Math.abs(north) + Math.abs(west);

    if (currentDistance > furthestDistance) {
      furthestDistance = currentDistance;
    }
  }

  return puzzle2 ? furthestDistance : currentDistance;
}

module.exports.solvePuzzle1 = (input = '') => solveDay11(input);
module.exports.solvePuzzle2 = (input = '') => solveDay11(input, true);
