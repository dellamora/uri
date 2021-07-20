var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var linha1 = lines.shift().split(" ");
var code1 = parseInt(linha1.shift());
var units1 = parseInt(linha1.shift());
var price1 = parseFloat(linha1.shift());

var linha2 = lines.shift().split(" ");
var code2 = parseInt(linha2.shift());
var units2 = parseInt(linha2.shift());
var price2 = parseFloat(linha2.shift());

var total = units1 * price1 + units2 * price2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
