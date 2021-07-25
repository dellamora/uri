var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift();

while (n-- > 0) {
  let x = parseInt(lines.shift());

  let quantidade = 1;
  for (let i = 0; i < x; i++) {
    quantidade *= 2;
  }
  let totalKg = quantidade / 12 / 1000;
  console.log(totalKg >= 1 ? `${Math.floor(totalKg)} kg` : `0 kg`);
}
