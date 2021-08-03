var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const line = lines
  .shift()
  .split(" ")
  .map((item) => parseInt(item));

class Tempo {
  constructor(hora, minuto) {
    this.hora = hora;
    this.minuto = minuto;
  }

  timeTo(outroTempo) {
    if (this.hora <= outroTempo.hora && this.minuto < outroTempo.minuto) {
      let totalHoras = outroTempo.hora - this.hora;
      let totalMinutos = outroTempo.minuto - this.minuto;

      if (totalMinutos === 60) {
        totalMinutos = 0;
        totalHoras++;
      }

      let totalTempo = new Tempo(totalHoras, totalMinutos);

      return totalTempo;
    }

    let menorHora = Math.min(this.hora, outroTempo.hora);
    let menorMinuto = Math.min(this.minuto, outroTempo.minuto);

    let tempoInicioRelativo = new Tempo(
      this.hora - menorHora,
      this.minuto - menorMinuto
    );
    let tempoFinalRelativo = new Tempo(
      outroTempo.hora - menorHora,
      outroTempo.minuto - menorMinuto
    );

    if (tempoFinalRelativo.hora === 0) tempoFinalRelativo.hora = 24;

    if (tempoFinalRelativo.minuto === 0) {
      tempoFinalRelativo.minuto = 60;
      tempoFinalRelativo.hora--;
    }

    return tempoInicioRelativo.timeTo(tempoFinalRelativo);
  }
}

let tempoInicio = new Tempo(line[0], line[1]);
let tempoFinal = new Tempo(line[2], line[3]);
let tempoTotal = tempoInicio.timeTo(tempoFinal);
