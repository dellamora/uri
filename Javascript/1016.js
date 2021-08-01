var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const kmPorMinuto = 2;

console.log(lines.shift() * kmPorMinuto + " minutos");
