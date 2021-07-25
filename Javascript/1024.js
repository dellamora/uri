var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

while (n-- > 0) {
  let text = lines.shift().split("");
  text = text.map((e) => {
    if (isChar(e)) return String.fromCharCode(e.charCodeAt(0) + 3);
    return e;
  });
  text = text.reverse();
  text = text.map((e, idx) => {
    if (idx + 1 <= text.length / 2) return e;
    return String.fromCharCode(e.charCodeAt(0) - 1);
  });

  console.log(text.join(""));
}

function isChar(c) {
  return c.toUpperCase() != c.toLowerCase();
}
