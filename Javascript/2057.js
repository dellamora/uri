var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var [s, t, f] = lines[0].split(" ");
var result = parseInt(s) + parseInt(f) + parseInt(t);
if (result > 24) result -= 24;
else if (result < 0) result = 24 + result;
else if (result == 24) result = 0;

console.log(result);
