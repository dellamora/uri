var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

mediaRM = (w, r) => w * (1 + r / 30);

calcular = (m) => {
  if (1 <= m && m < 13) return "Nao vai da nao";
  else if (13 <= m && m < 14) return "E 13";
  else if (14 <= m && m < 40) return "Bora, hora do show! BIIR!";
  else if (40 <= m && m <= 60) return "Ta saindo da jaula o monstro!";
  else if (m > 60) return "AQUI E BODYBUILDER!!";
};
var [w1, w2, r] = lines.shift().split(" ");
var media = 0,
  count = 0,
  m,
  w;
while (w1 != 0 && w2 != 0 && r != 0) {
  r = parseFloat(r);
  w1 = parseFloat(w1);
  w2 = parseFloat(w2);
  m = (mediaRM(w1, r) + mediaRM(w2, r)) / 2;
  console.log(calcular(m));
  media += m;
  count++;
  [w1, w2, r] = lines.shift().split(" ");
}
if (media / count > 40) {
  console.log("");
  console.log("Aqui nois constroi fibra rapaz! Nao e agua com musculo!");
}
