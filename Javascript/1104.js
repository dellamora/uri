var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

[a, b] = lines.shift().split(" ");
while (a != 0 && b != 0) {
  //ignore the warning
  let cards_alice = new Set();
  lines
    .shift()
    .split(" ")
    .forEach((e) => (e != "" ? cards_alice.add(e) : "")); //ignore the warning
  let cards_beatriz = new Set();
  lines
    .shift()
    .split(" ")
    .forEach((e) => cards_beatriz.add(e));

  let qnt_alice = 0;
  cards_alice.forEach((e) => (!cards_beatriz.has(e) ? qnt_alice++ : ""));
  let qnt_beatriz = 0;
  cards_beatriz.forEach((e) => (!cards_alice.has(e) ? qnt_beatriz++ : ""));

  console.log(Math.min(qnt_alice, qnt_beatriz));
  [a, b] = lines.shift().split(" ");
}
