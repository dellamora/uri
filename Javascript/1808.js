var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var s = lines.shift().split("");
var count = 0;
var soma = s.reduceRight((acc, c) => {
  if (c == "0") return acc + 9;
  else count++;
  return acc + parseInt(c);
}, 0);

console.log((soma / count).toFixed(2));
