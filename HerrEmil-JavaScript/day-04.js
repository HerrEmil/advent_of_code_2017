module.exports.isValidPassPhrase = isValidPassPhrase = (passphrase = '', anagramCheck = false) => {
  const words = passphrase.split(' ');
  let previoiusWords = new Set();

  for(word of words) {
    if (anagramCheck) {
      word = word.split('').sort().join('');
    }
    if (previoiusWords.has(word.toString())) {
      return false;
    } else {
      previoiusWords.add(word.toString());
    }
  }

  return true;
}

solve = (input = '', anagramCheck = false) => {
  const passphraseList = input.split(/\n|\r\n/);
  let validCount = 0;

  for (passphrase of passphraseList) {
    if(isValidPassPhrase(passphrase, anagramCheck)) {
      validCount += 1;
    }
  }

  return validCount;
}

module.exports.solvePuzzle1 = (input = '') => solve(input, false);
module.exports.solvePuzzle2 = (input = '') => solve(input, true);
