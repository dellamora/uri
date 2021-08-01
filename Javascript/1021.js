var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const tipoDeNotas = [100.0, 50.0, 20.0, 10.0, 5.0, 2.0];

const tipoDeMoedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

let totalDinheiro = lines.shift();

console.log("NOTAS:");

tipoDeNotas.map((item, index) => {
  console.log(
    parseInt(totalDinheiro / item) +
      " nota(s) de R$ " +
      tipoDeNotas[index].toFixed(2)
  );
  totalDinheiro = (totalDinheiro % item).toFixed(2);
});

console.log("MOEDAS:");

tipoDeMoedas.map((item, index) => {
  console.log(
    parseInt(totalDinheiro / item) +
      " moeda(s) de R$ " +
      tipoDeMoedas[index].toFixed(2)
  );
  totalDinheiro = (totalDinheiro % item).toFixed(2);
});
