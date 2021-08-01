var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
const tipoDeNotas = [100, 50, 20, 10, 5, 2, 1];

let totalDinheiro = lines.shift();

console.log(totalDinheiro);

tipoDeNotas.map((item, index) => {
  console.log(
    parseInt(totalDinheiro / item) +
      " nota(s) de R$ " +
      tipoDeNotas[index] +
      ",00"
  );
  totalDinheiro = totalDinheiro % item;
});
