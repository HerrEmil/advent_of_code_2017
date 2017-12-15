solveDay12 = (input = '', puzzle2 = false) => {
  // key is program ID, value is connections array
  const ungroupedPrograms = new Map(
    input.split(/\n|\r\n/)
      .map(input => [
        parseInt(input.slice(0, input.indexOf(' '))),
        input.slice(5 + input.indexOf(' <-> ')).split(', ').map(x => parseInt(x)),
      ])
  );

  const groups = [];
  let connectionsChecklist = new Set([0]);

  while (ungroupedPrograms.size > 0) {
    groups.push(new Set());
    connectionsChecklist = new Set([ungroupedPrograms.keys().next().value]);

    connectionsChecklist.forEach((program) => {
      groups[groups.length - 1].add(program);

      // Get all connections of current program
      // If they have not been checked already, add them to checklist
      ungroupedPrograms.get(program).forEach(connection => {
        if (ungroupedPrograms.has(connection)) {
          connectionsChecklist.add(connection);
        }
      });

      ungroupedPrograms.delete(program);
      connectionsChecklist.delete(program);
    });
  }

  return puzzle2
    ? groups.length
    : groups[0].size;
}

module.exports.solvePuzzle1 = (input = '') => solveDay12(input);
module.exports.solvePuzzle2 = (input = '') => solveDay12(input, true);
