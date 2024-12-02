function part1() {
  let total = 0;
  const fs = require("fs");
  const input = fs.readFileSync("Day_2/input.txt", "utf8");
  const inputArr = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  const lines = inputArr.map((line) => line.split(" ").map(Number));

  lines.forEach((line) => {
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
      total += 1;
      console.log(line, "Row Valid");
    } else {
      console.log(line, "Row Invalid");
    }
  });
  console.log(total);
}
part1();
