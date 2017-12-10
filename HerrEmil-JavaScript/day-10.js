sparseHash = (lengths = [], listLength = 256, rounds = 1) => {
  const numberOfLengths = lengths.length;
  const list = [...Array(listLength).keys()]
  let currentPosition = skipSize = 0;

  for (let round = 0; round < rounds; round += 1) {
    for (let i = 0; i < numberOfLengths; i += 1, skipSize += 1) {
      const currentLength = lengths[i];

      // store wrap-around length of selected range
      const overflow = currentPosition + currentLength - listLength;

      // copy range from list
      const range = overflow <= 0
        ? list.slice(currentPosition, currentPosition + currentLength)
        : [...list.slice(currentPosition), ...list.slice(0, overflow)];

      // reverse range
      range.reverse();

      // insert reversed range in place
      if (overflow > 0) {
        // wrapping piece of range first, if needed
        list.splice(0, overflow, ...range.splice(range.length - overflow));
      }
      // always non-wrapping range
      list.splice(currentPosition, currentLength, ...range)

      currentPosition = (currentPosition + currentLength + skipSize) % listLength;
    }
  }

  return list;
}

module.exports.solvePuzzle1 = (input = '', length = 256) => {
  const lengths = input.split(/, |,/).map((string => parseInt(string)));
  const list = sparseHash(lengths, length, 1);

  return list[0] * list[1];
}
module.exports.solvePuzzle2 = (input = '') => {
  const lengths = [...input.split('').map(c => c.charCodeAt(0)), 17, 31, 73, 47, 23];
  const sparse = sparseHash(lengths, 256, 64)

  return [...Array(16).keys()].map(i => sparse.slice(i * 16, (i + 1) * 16)) // split sparse into sections of 16 values
    .map(section => section.reduce((a, b) => a ^ b)) // bitwise XOR 16 sparse hashes into 1 dense hash
    .map(number => number.toString(16)) // hex values
    .map(hex => hex.length === 2 ? hex : `0${hex}`) // add leading zero
    .join('')
}
