var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());
var max = Infinity;
var planet = "";
while (n != 0) {
  for (let i = 0; i < n; i++) {
    var info = lines.shift().split(" ");
    var namePlanet = info[0];
    var a = info[1];
    var t = info[2];
    var dist = a - t;
    if (dist < max) {
      planet = namePlanet;
      max = dist;
    }
  }
  console.log(planet);
  max = Infinity;
  n = lines.shift();
}
