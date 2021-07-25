var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift();
var livros = [];
do {
  for (let i = 0; i < n; i++) {
    livros.push(lines.shift());
  }

  livros.sort().forEach((e) => console.log(e));
  livros = [];
} while ((n = lines.shift()) != undefined); // ignore the warning
