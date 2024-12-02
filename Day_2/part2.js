function part2() {
  let total = 0;
  const fs = require("fs");
  const input = fs.readFileSync("Day_2/input.txt", "utf8");
  const inputArr = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const lines = inputArr.map((line) => line.split(" ").map(Number));

  lines.forEach((line) => {
    if (checkRow(line)) {
      total++;
    } else if (checkRowWithOneRemoved(line)) {
      total++;
    }
  });

  console.log(total);
}

function checkRowWithOneRemoved(line) {
  for (let i = 0; i < line.length; i++) {
    let newRow = [...line];
    newRow = newRow.filter((_, index) => index != i);

    if (checkRow(newRow)) {
      return true;
    }
  }
  return false;
}

function checkRow(line) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] > line[i + 1]) {
      increasing = false;
    }
    if (line[i] < line[i + 1]) {
      decreasing = false;
    }
    if (line[i] === line[i + 1]) {
      increasing = false;
      decreasing = false;
    }

    if (Math.abs(line[i] - line[i + 1]) > 3) {
      increasing = false;
      decreasing = false;
    }
  }
  if (increasing || decreasing) {
    return true;
  } else {
    return false;
  }
}
part2();
