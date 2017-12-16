solveDay13 = (input = '', puzzle2 = false) => {
  const firewall = new Map(
    input.split(/\n|\r\n/)
      .map(scanner => scanner.split(': ').map(x => parseInt(x)))
      .map(([layer, range]) => [layer, { range, possibleMoves: (range - 2) * 2 + 2 }])
  );

  let delay = scannerPosition = severity = 0;
  let walkedIntoScanner = foundDelay = false;

  while (!foundDelay) {
    for ([layer, { range, possibleMoves }] of firewall.entries()) {
      const scannerMove = (delay + layer) % possibleMoves;

      scannerPosition = (scannerMove > possibleMoves / 2)
        ? possibleMoves - scannerMove
        : scannerMove;

      if (scannerPosition === 0) {
        if (puzzle2) {
          walkedIntoScanner = true;
          break;
        }
        severity += layer * range;
      }
    }

    if (!walkedIntoScanner) {
      foundDelay = true;
    } else {
      delay += 1;
      walkedIntoScanner = false;
    }

    if (!puzzle2) {
      return severity;
    }
  }

  return delay;
}

module.exports.solvePuzzle1 = (input = '') => solveDay13(input);
module.exports.solvePuzzle2 = (input = '') => solveDay13(input, true);
