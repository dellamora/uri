var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift();

var [p, c, q] = lines.shift().split(" ");

n = parseInt(n);
p = parseInt(p);
q = parseInt(q);
var total;
switch (c) {
  case "+":
    total = p + q;
    console.log(total > n ? "OVERFLOW" : "OK");
    break;
  case "*":
    total = p * q;
    console.log(total > n ? "OVERFLOW" : "OK");
    break;
}
