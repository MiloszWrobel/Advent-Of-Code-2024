function part1() {
  let rules = [];
  let tempUpdates = [];
  let isRules = true;
  let updates = [];
  const fs = require("fs");
  const input = fs.readFileSync("inputTest.txt", "utf-8");
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());

  // Seperate the rules from the updates
  lines.forEach((line) => {
    if (line === "") {
      isRules = false;
    }
    if (isRules === true) {
      rules.push(line);
    }
    if (isRules === false && line != "") {
      tempUpdates.push(line);
    }
  });

  tempUpdates.forEach((line) => {
    updates.push(line.match(/\d+/g));
  });

  //console.log(updates);

  updates.forEach((line) => {
    let isValid = true;
    for (let i = 0; i < line.length; i++) {
      let ruleArr = checkIfUpdateInRules(line[i], rules);
      if (ruleArr.length > 0) {
        console.log(ruleArr);
      }
    }
  });
}

function checkIfUpdateInRules(currentIndex, rulesArray) {
  let allRules = [];
  for (let i = 0; i < rulesArray.length; i++) {
    let regex = new RegExp(currentIndex, "g");

    if (rulesArray[i].match(regex) != null) {
      allRules.push(rulesArray[i]);
    }
  }
  return allRules;
}

part1();
