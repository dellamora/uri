var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const salario = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item))[0];

let percentual;

switch (true) {
  case salario > 0 && salario <= 400:
    percentual = 15;
    break;
  case salario > 400 && salario <= 800:
    percentual = 12;
    break;
  case salario > 800 && salario <= 1200:
    percentual = 10;
    break;
  case salario > 1200 && salario <= 2000:
    percentual = 7;
    break;
  case salario > 2000:
    percentual = 4;
    break;
}

let reajuste = (salario * percentual) / 100;

console.log("Novo salario: " + (salario + reajuste).toFixed(2));
console.log("Reajuste ganho: " + reajuste.toFixed(2));
console.log("Em percentual: " + percentual + " %");
