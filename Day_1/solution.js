function solution() {
  const fs = require("fs");
  const input = fs.readFileSync("Day_1/input.txt", "utf8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  console.log(lines[0]);
}

solution();
