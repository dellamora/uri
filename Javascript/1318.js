var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var [n, m] = lines.shift().split(" ");
var bilhetes = new Map();
var total = 0;
while (n != 0 && m != 0) {
  let sequencia = lines.shift().split(" ");
  sequencia.map((e) => {
    bilhetes.set(e, bilhetes.get(e) != undefined ? 1 : 0);
  });
  bilhetes.forEach((valor, key) => (total += valor));
  console.log(total);
  total = 0;
  bilhetes.clear();
  [n, m] = lines.shift().split(" ");
}
