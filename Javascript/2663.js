var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift();
var k = lines.shift();
var pontuacao = [];
if (n == 1) return console.log(1);
for (let i = 0; i < n; i++) {
  pontuacao.push(lines.shift());
}
pontuacao.sort((a, b) => {
  a = parseInt(a);
  b = parseInt(b);
  if (b < a) return -1;
  else if (b > a) return 1;
  return 0;
});
while (pontuacao[k - 1] == pontuacao[k]) k++;
console.log(k);
