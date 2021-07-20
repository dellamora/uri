var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var MEDIA = parseFloat((A * 3.5 + B * 7.5) / 11).toFixed(5);
console.log("MEDIA = " + MEDIA);
