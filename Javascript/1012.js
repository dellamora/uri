var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
var entrada = lines.shift().split(" ");
var a = parseFloat(entrada.shift());
var b = parseFloat(entrada.shift());
var c = parseFloat(entrada.shift());

console.log("TRIANGULO: " + ((a * c) / 2).toFixed(3));
console.log("CIRCULO: " + (pi * Math.pow(c, 2)).toFixed(3));
console.log("TRAPEZIO: " + (((a + b) * c) / 2).toFixed(3));
console.log("QUADRADO: " + Math.pow(b, 2).toFixed(3));
console.log("RETANGULO: " + (a * b).toFixed(3));
