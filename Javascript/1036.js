var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let impossivel = () => {
  console.log("Impossivel calcular");
  process.exit();
};

const arrayNumeros = lines.shift().split(" ");
const A = parseFloat(arrayNumeros[0]);
const B = parseFloat(arrayNumeros[1]);
const C = parseFloat(arrayNumeros[2]);

const delta = B * B - 4 * A * C;

if (delta < 0 || A === 0) impossivel();

const r1 = (-B + Math.sqrt(delta)) / (2 * A);
const r2 = (-B - Math.sqrt(delta)) / (2 * A);

console.log("R1 = " + r1.toFixed(5));
console.log("R2 = " + r2.toFixed(5));
