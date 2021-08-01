var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const arrayNumeros = lines.shift().split(" ");
const A = arrayNumeros[0];
const B = arrayNumeros[1];
const C = arrayNumeros[2];
const D = arrayNumeros[3];

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0)
  console.log("Valores aceitos");
else console.log("Valores nao aceitos");
