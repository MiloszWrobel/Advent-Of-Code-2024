function part1() {
  let counter = 0;

  const fs = require("fs");
  const input = fs.readFileSync("input.txt", "utf-8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  // Check for how many XMAS there are
  lines.forEach((line) => {
    counter += line.match(/XMAS/g).length;
  });

  // Check for how many backwards XMAS there are
  lines.forEach((line) => {
    counter += line.match(/SAMX/g).length;
  });

  // Check for top to down XMAS
  for (let i = 0; i < lines.length - 3; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      counter += calculateValues(i, j, i + 1, j, i + 2, j, i + 3, j, lines);
    }
  }

  // Check for down to top XMAS
  for (let i = lines.length - 1; i >= 3; i--) {
    for (let j = 0; j < lines[i].length; j++) {
      counter += calculateValues(i, j, i - 1, j, i - 2, j, i - 3, j, lines);
    }
  }

  // Check for diagonal top left to right XMAS
  for (let i = 0; i < lines.length - 3; i++) {
    for (let j = 0; j < lines[i].length - 3; j++) {
      counter += calculateValues(
        i,
        j,
        i + 1,
        j + 1,
        i + 2,
        j + 2,
        i + 3,
        j + 3,
        lines
      );
    }
  }

  // Check for diagonal top right to left XMAS
  for (let i = 0; i < lines.length - 3; i++) {
    for (let j = 3; j < lines[i].length; j++) {
      counter += calculateValues(
        i,
        j,
        i + 1,
        j - 1,
        i + 2,
        j - 2,
        i + 3,
        j - 3,
        lines
      );
    }
  }

  // Check for diagonal bottom left to right XMAS
  for (let i = lines.length - 1; i >= 3; i--) {
    for (let j = 0; j < lines[i].length - 3; j++) {
      counter += calculateValues(
        i,
        j,
        i - 1,
        j + 1,
        i - 2,
        j + 2,
        i - 3,
        j + 3,
        lines
      );
    }
  }

  // Check for diagonal bottom right to left XMAS
  for (let i = lines.length - 1; i >= 3; i--) {
    for (let j = lines[i].length - 1; j >= 3; j--) {
      counter += calculateValues(
        i,
        j,
        i - 1,
        j - 1,
        i - 2,
        j - 2,
        i - 3,
        j - 3,
        lines
      );
    }
  }

  console.log(counter);
}

function calculateValues(
  aRow,
  aIndex,
  bRow,
  bIndex,
  cRow,
  cIndex,
  dRow,
  dIndex,
  lines
) {
  let counter = 0;
  if (
    lines[aRow][aIndex] === "X" &&
    lines[bRow][bIndex] === "M" &&
    lines[cRow][cIndex] === "A" &&
    lines[dRow][dIndex] === "S"
  ) {
    counter++;
  }
  return counter;
}

part1();
