var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const data = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      onivoro: "pomba",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};

const atributos = lines;

console.log(data[atributos[0]][atributos[1]][atributos[2]]);
