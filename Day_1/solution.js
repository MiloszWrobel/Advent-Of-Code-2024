function solution() {
  const leftColumn = [];
  const rightColumn = [];
  const fs = require("fs");
  const input = fs.readFileSync("Day_1/input.txt", "utf8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const splitInput = lines.map((line) => line.split(/\s+/).map(Number)); //splitINput maps through each line and seperates
  splitInput.forEach((line) => {
    leftColumn.push(line[0]), rightColumn.push(line[1]);
  });
  console.log(leftColumn);
}

solution();
