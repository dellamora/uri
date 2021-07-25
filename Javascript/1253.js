var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

const alfaphet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

while (n-- > 0) {
  let sentence = lines.shift().split("");
  let num = parseInt(lines.shift());
  let newSentence = sentence.map((letter) => {
    let index = alfaphet.indexOf(letter);
    index = index - num;
    if (index < 0) index = 26 + index;
    return alfaphet[index];
  });

  console.log(newSentence.join(""));
}
