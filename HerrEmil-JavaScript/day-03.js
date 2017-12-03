getManhattanDistanceFromOrigin = (position = { x: 0, y: 0 }) =>
  Math.abs(position.x) + Math.abs(position.y);

getPositionFromSquareValue = (goalSquare = 1) => {
  let position = { x: 0, y: 0 };
  let turns = 0;
  let sideLength = 0;
  let stepsToNextTurn = 0;

  // Special case for first square so loop always can move a step in given direction
  if (goalSquare < 2) {
    return position;
  }

  // Start in origin, spiral out one step at a time until reaching the goal square
  for (let square = 2; square <= goalSquare; square += 1) {

    switch (turns % 4) { // direction
      case 0: // right
        position.x += 1;
        break;
      case 1: // up
        position.y += 1;
        break;
      case 2: // left
        position.x -= 1;
        break;
      case 3: // down
        position.y -= 1;
        break;
    }

    // Keep track of how many steps until next corner, on each corner increase turn and reset counter.
    // On every second turn, increase sidelength.
    if (stepsToNextTurn <= 0) {
      turns += 1;
      if (!(turns % 2)) {
        sideLength += 1;
      }
      stepsToNextTurn = sideLength;
    } else {
      stepsToNextTurn -= 1;
    }
  }

  return position;
}

module.exports.solvePuzzle1 = (square = 0) => {
  const position = getPositionFromSquareValue(square);
  return getManhattanDistanceFromOrigin(position);
}

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.toString = function () {
  return `x: ${this.x}, y: ${this.y}`;
}

module.exports.solvePuzzle2 = (goalSquare = 0) => {
  let position = new Position(0, 0);
  let turns = 0;
  let sideLength = 0;
  let stepsToNextTurn = 0;
  let squareValue = 1;
  let grid = new Map();
  grid.set(position.toString(), 1);
  let leftValue = leftUpValue = upValue = upRightValue = rightValue = rightDownValue = downValue = downLeftValue = 0;

  // Special case for first square so loop always can move a step in given direction
  if (goalSquare < 2) {
    return grid.get(position.toString());
  }

  // Start in origin, spiral out one step at a time until reaching the goal square
  for (let square = 2; square <= goalSquare; square += 1) {
    switch (turns % 4) { // direction
      case 0: // right
        position.x += 1;
        // Add values to the left and all above
        leftValue = grid.get(`x: ${position.x - 1}, y: ${position.y}`) || 0;
        leftUpValue = grid.get(`x: ${position.x - 1}, y: ${position.y + 1}`) || 0;
        upValue = grid.get(`x: ${position.x}, y: ${position.y + 1}`) || 0;
        upRightValue = grid.get(`x: ${position.x + 1}, y: ${position.y + 1}`) || 0;
        squareValue = (leftValue + leftUpValue + upValue + upRightValue);
        break;
      case 1: // up
        position.y += 1;
        // Add value below and all to the left
        downValue = grid.get(`x: ${position.x}, y: ${position.y - 1}`) || 0;
        downLeftValue = grid.get(`x: ${position.x - 1}, y: ${position.y - 1}`) || 0;
        leftValue = grid.get(`x: ${position.x - 1}, y: ${position.y}`) || 0;
        leftUpValue = grid.get(`x: ${position.x - 1}, y: ${position.y + 1}`) || 0;
        squareValue = (downValue + downLeftValue + leftValue + leftUpValue);
        break;
      case 2: // left
        position.x -= 1;
        // Add value to the right and all below
        rightValue = grid.get(`x: ${position.x + 1}, y: ${position.y}`) || 0;
        rightDownValue = grid.get(`x: ${position.x + 1}, y: ${position.y - 1}`) || 0;
        downValue = grid.get(`x: ${position.x}, y: ${position.y - 1}`) || 0;
        downLeftValue = grid.get(`x: ${position.x - 1}, y: ${position.y - 1}`) || 0;
        squareValue = (rightValue + rightDownValue + downValue + downLeftValue);
        break;
      case 3: // down
        position.y -= 1;
        // Add value above and all to the right
        upValue = grid.get(`x: ${position.x}, y: ${position.y + 1}`) || 0;
        upRightValue = grid.get(`x: ${position.x + 1}, y: ${position.y + 1}`) || 0;
        rightValue = grid.get(`x: ${position.x + 1}, y: ${position.y}`) || 0;
        rightDownValue = grid.get(`x: ${position.x + 1}, y: ${position.y - 1}`) || 0;
        squareValue = (upValue + upRightValue + rightValue + rightDownValue);
        break;
    }

    // Found the answer
    if (squareValue > goalSquare) {
      return squareValue;
    }
    grid.set(position.toString(), squareValue);

    // Keep track of how many steps until next corner, on each corner increase turn and reset counter.
    // On every second turn, increase sidelength.
    if (stepsToNextTurn <= 0) {
      turns += 1;
      if (!(turns % 2)) {
        sideLength += 1;
      }
      stepsToNextTurn = sideLength;
    } else {
      stepsToNextTurn -= 1;
    }
  }

  return grid.get(position.toString());
}