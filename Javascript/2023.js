var input = require("fs").readFileSync("/dev/stdin", "utf8");
var names = input.split("\n");

const index = names
  .map((name, idx) => ({
    name: name.toLowerCase(),
    idx: idx,
  }))
  .sort(compareNames)[names.length - 1].idx;

function compareNames(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

console.log(names[index]);
