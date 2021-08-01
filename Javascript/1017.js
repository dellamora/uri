var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const kmPorLitro = 12;
const tempoGasto = lines.shift();
const kmPorHora = lines.shift();
const distancia = tempoGasto * kmPorHora;
const litrosGastos = distancia / kmPorLitro;

console.log(litrosGastos.toFixed(3));
