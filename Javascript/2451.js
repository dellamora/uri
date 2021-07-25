var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = lines.shift("");
var foods = 0;
var foods_old = 0;
lines.map((value, index) => {
  if (index % 2 == 0) {
    value.split("").forEach((c) => {
      if (c == "o") foods++;
      else if (c == "A") {
        if (foods > foods_old) foods_old = foods;
        foods = 0;
      }
    });
  } else {
    value
      .split("")
      .reverse()
      .forEach((c) => {
        if (c == "o") foods++;
        else if (c == "A") {
          if (foods > foods_old) foods_old = foods;
          foods = 0;
        }
      });
  }
});

console.log(foods > foods_old ? foods : foods_old);
