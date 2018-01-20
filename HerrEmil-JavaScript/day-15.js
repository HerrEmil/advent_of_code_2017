module.exports.solvePuzzle1 = (a = 0, b = 0) => {
  let matches = 0;
  let aBits = bBits = '';

  for (let i = 0; i < 40000000; i += 1) {
    a = a * 16807 % 2147483647;
    b = b * 48271 % 2147483647;
    
    aBits = a.toString(2);
    bBits = b.toString(2);

    if (aBits.substring(aBits.length - 16) === bBits.substring(bBits.length - 16)) {
      matches += 1;
    }
  }

  return matches;
}

module.exports.solvePuzzle2 = (a = 0, b = 0) => {
  let matches = 0;
  let aBits = bBits = '';

  for (let i = 0; i < 5000000; i += 1) {
    a = a * 16807 % 2147483647;
    b = b * 48271 % 2147483647;
    
    aBits = a.toString(2);
    bBits = b.toString(2);

    if (aBits.substring(aBits.length - 16) === bBits.substring(bBits.length - 16)) {
      matches += 1;
    }
  }

  return matches;
}
