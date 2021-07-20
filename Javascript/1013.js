var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var entrada = lines.shift().split(" ");
var a = parseInt(entrada.shift());
var b = parseInt(entrada.shift());
var c = parseInt(entrada.shift());

maiorab = Math.max(a, b, c);

console.log(maiorab + " eh o maior");
