function solutionPart2() {
  const leftColumn = [];
  const rightColumn = [];
  let total = 0;

  const fs = require("fs");
  const input = fs.readFileSync("Day_1/input.txt", "utf8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const splitInput = lines.map((line) => line.split(/\s+/).map(Number));
  splitInput.forEach((line) => {
    leftColumn.push(line[0]), rightColumn.push(line[1]);
  });

  let sortedLeft = leftColumn.sort((a, b) => a - b);

  let sortedRight = rightColumn.sort((a, b) => a - b);

  sortedLeft.forEach((leftInput) => {
    let similarity = 0;
    sortedRight.forEach((rightInput) => {
      if (leftInput === rightInput) {
        similarity += 1;
      }
    });
    total += leftInput * similarity;
  });

  console.log(total);
}

solutionPart2();
