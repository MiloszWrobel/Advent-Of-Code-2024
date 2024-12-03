function part1() {
  const fs = require("fs");
  const input = fs.readFileSync("input.txt", "utf-8");

  const resultArr = input.match(/mul\(\d+,\d+\)/g);

  total = processCals(resultArr);

  console.log(total);
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
