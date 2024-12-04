function part1() {
  const fs = require("fs");
  const input = fs.readFileSync("inputTest.txt", "utf-8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  let counter = 0;
  const singleString = lines.join("");

  //const match = input.match(/XMAS/g);

  for (let i = 0; i < singleString.length - 4; i++) {
    counter = counter + forwardCheck(i, singleString);
  }

  console.log("Forward check " + counter);

  for (let i = 3; i < singleString.length - 1; i++) {
    counter = counter + backwardCheck(i, singleString);
  }

  console.log("Backward check " + counter);

  for (let i = 0; i < singleString.length - 39; i++) {
    counter = counter + topDownCheck(i, singleString);
  }

  console.log("TopDown check " + counter);

  for (let i = 30; i < singleString.length - 1; i++) {
    counter = counter + downTopCheck(i, singleString);
  }
  console.log("DownTop check " + counter);

  for (let i = 0; i < singleString.length - 39; i++) {
    counter = counter + leftToRightDownCheck(i, singleString);
  }

  console.log("LeftToRightDown check " + counter);

  //   console.log(counter)

  //   for (let i = 0; i < singleString.length - 40; i++) {
  //     let lastDigit = i.toString().slice(-1);
  //     let number = Number(lastDigit);
  //     if (number != 0 && number != 1 && number != 2) {
  //       counter = counter + rightToLeftDownCheck(i, singleString);
  //     }
  //   }

  console.log(counter);
}

function forwardCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index + 1] == "M" &&
    input[index + 2] == "A" &&
    input[index + 3] == "S"
  ) {
    counter++;
  }
  return counter;
}

function backwardCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index - 1] == "M" &&
    input[index - 2] == "A" &&
    input[index - 3] == "S"
  ) {
    counter++;
  }
  return counter;
}

function topDownCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index + 10] == "M" &&
    input[index + 20] == "A" &&
    input[index + 30] == "S"
  ) {
    counter++;
  }
  return counter;
}

function downTopCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index - 10] == "M" &&
    input[index - 20] == "A" &&
    input[index - 30] == "S"
  ) {
    counter++;
  }
  return counter;
}

function leftToRightDownCheck(index, input) {
  let counter = 0;
  if (index % 10 < 7) {
    // Ensures we have room for 11, 22, 33 indices
    if (
      input[index] === "X" &&
      input[index + 11] === "M" &&
      input[index + 22] === "A" &&
      input[index + 33] === "S"
    ) {
      counter++;
    }
  }
  return counter;
}

function rightToLeftDownCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index + 9] == "M" &&
    input[index + 18] == "A" &&
    input[index + 27] == "S"
  ) {
    counter++;
  }
  return counter;
}

function leftToRightUpCheck(index, input) {
  let counter = 0;
  if (
    input[index] === "X" &&
    input[index - 11] == "M" &&
    input[index - 22] == "A" &&
    input[index - 33] == "S"
  ) {
    counter++;
  }
  return counter;
}

part1();
