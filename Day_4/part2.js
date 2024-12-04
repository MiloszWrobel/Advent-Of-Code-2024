function part2() {
  let counter = 0;

  const fs = require("fs");
  const input = fs.readFileSync("input.txt", "utf-8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  for (let i = 1; i < lines.length - 1; i++) {
    for (let j = 0; j < lines[i].length - 1; j++) {
      if (lines[i][j] === "A") {
        counter += checkForXMAS(i, j, lines);
      }
    }
  }

  console.log(counter);
}

function checkForXMAS(indexRow, indexCol, array) {
  let counter = 0;
  if (
    array[indexRow - 1][indexCol - 1] === "M" &&
    array[indexRow - 1][indexCol + 1] === "M" &&
    array[indexRow + 1][indexCol - 1] === "S" &&
    array[indexRow + 1][indexCol + 1] === "S"
  ) {
    counter++;
  } else if (
    array[indexRow - 1][indexCol - 1] === "S" &&
    array[indexRow - 1][indexCol + 1] === "S" &&
    array[indexRow + 1][indexCol - 1] === "M" &&
    array[indexRow + 1][indexCol + 1] === "M"
  ) {
    counter++;
  } else if (
    array[indexRow - 1][indexCol - 1] === "M" &&
    array[indexRow - 1][indexCol + 1] === "S" &&
    array[indexRow + 1][indexCol - 1] === "M" &&
    array[indexRow + 1][indexCol + 1] === "S"
  ) {
    counter++;
  } else if (
    array[indexRow - 1][indexCol - 1] === "S" &&
    array[indexRow - 1][indexCol + 1] === "M" &&
    array[indexRow + 1][indexCol - 1] === "S" &&
    array[indexRow + 1][indexCol + 1] === "M"
  ) {
    counter++;
  }
  return counter;
}
part2();
