function part1() {
  const fs = require("fs");
  const input = fs.readFileSync("inputTest.txt", "utf-8");

  const resultArr = input.match(/mul\(\d+,\d+\)/g);

  total = processCals(resultArr);

  console.log(total);
}

function processCals(array) {
  array.forEach((numbers) => {
    let numberArr = numbers.match(/\d+/g);
    console.log(numberArr);
  });
}

part1();
