var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var l = parseInt(lines[0]);
var c = parseInt(lines[1]);

if (l % 2 == 0)
  if (c % 2 == 0) console.log(1);
  else console.log(0);
else if (c % 2 == 0) console.log(0);
else console.log(1);
