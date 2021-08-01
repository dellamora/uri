var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const numero = parseFloat(lines.shift());

switch (true) {
  case numero >= 0 && numero <= 25:
    console.log("Intervalo [0,25]");
    break;
  case numero > 25 && numero <= 50:
    console.log("Intervalo (25,50]");
    break;
  case numero > 50 && numero <= 75:
    console.log("Intervalo (50,75]");
    break;
  case numero > 75 && numero <= 100:
    console.log("Intervalo (75,100]");
    break;
  default:
    console.log("Fora de intervalo");
}
