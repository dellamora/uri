var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());
while (n-- > 0) {
  var c = parseFloat(lines.shift());
  let dias = 0;
  while (c > 1) {
    c /= 2.0;
    dias++;
  }
  console.log(`${dias} dias`);
}
