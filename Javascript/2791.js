var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n")[0].split(" ");

if (lines[0] == "1") console.log(1);
else if (lines[1] == "1") console.log(2);
else if (lines[2] == "1") console.log(3);
else if (lines[3] == "1") console.log(4);
