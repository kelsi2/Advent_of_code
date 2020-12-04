const fs = require('fs');
const data = fs.readFileSync('./day3_data.txt', 'utf-8').split('\n');

// PART 1
const locateTrees = (across, down) => {
  let index = 0;
  const moveDown = down - 1;
  const moveAcross = across;
  let trees = 0;

  for (let i = 0; i < data.length; i++) {
    const slopeDistance = data[i].length;

    if (data[i][index] === "#") {
      trees++;
    }

    index = (index + moveAcross) % slopeDistance;

    i = i + moveDown;
  }
  return trees;
};

console.log(locateTrees(3, 1));

// PART 2

console.log(locateTrees(1, 1));
console.log(locateTrees(5, 1));
console.log(locateTrees(7, 1));
console.log(locateTrees(1, 2));

console.log(289 * 84 * 89 * 71 * 36);