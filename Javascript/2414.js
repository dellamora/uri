var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var numbers = lines.shift().split(" ");

console.log(Math.max(...numbers));
