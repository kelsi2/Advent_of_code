const fs = require('fs');
const data = fs.readFileSync('./day2_data.txt', 'utf-8').split('\n');
let validPassCount = 0;

// PART 1

for (const item of data) {
  let [range, letter, password] = item.split(" ");
  letter = letter.replace(/.$/, "");

  const invalidChar = new RegExp(`[^${letter}]`, "g");

  password = password.replace(invalidChar, "");

  const checkLength = new RegExp(`^.{${range.replace("-", ",")}}$`, "g");

  if (password.match(checkLength)) {
    validPassCount++;
  }
}

console.log(validPassCount);

// PART 2

for (const item of data) {
  let [range, letter, password] = item.split(" ");
  letter = letter.replace(/.$/, "");

  [start, end] = range.split("-");

  if ((password[start - 1] === letter) ^ (password[end - 1] === letter)) {
    validPassCount++;
  }
}

console.log(validPassCount);