function part1() {
  const fs = require("fs");
  const input = fs.readFileSync("input.txt", "utf-8");
  const matchMul = /mul\(\d+,\d+\)|don't\(\)|do\(\)/g;
  const resultArr = input.match(matchMul);

  let correctMul = getCorrectMul(resultArr);
  let total = processCals(correctMul);

  console.log(total);
}

function getCorrectMul(array) {
  let process = true;
  let newArray = [];
  array.forEach((line) => {
    if (line === "don't()") {
      process = false;
    }
    if (line === "do()") {
      process = true;
    }
    if (process && line != "do()") {
      newArray.push(line);
    }
  });

  return newArray;
}

function processCals(array) {
  let result = 0;
  array.forEach((numbers) => {
    let numberArr = numbers.match(/\d+/g);
    result += numberArr[0] * numberArr[1];
  });

  return result;
}

part1();
