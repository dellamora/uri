var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift();
while (n-- > 0) {
  [a, b] = lines.shift().split(" ");
  console.log(a.substr(a.length - b.length) == b ? "encaixa" : "nao encaixa");
}
