var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var nome = lines.shift();
var salary = parseFloat(lines.shift());
var bonus = parseFloat(lines.shift());
var total = salary + bonus * 0.15;

console.log("TOTAL = R$ " + total.toFixed(2));
