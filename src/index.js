const papel = 1;
const tesoura = 2;
const pedra = 3;

const resultado = {};

function Jogar(valor1, valor2) {
  if (valor1 == valor2) {
    return valor1;
  }

  if (
    (valor1 == pedra && valor2 == tesoura) ||
    (valor1 == tesoura && valor2 == papel) ||
    (valor1 == papel && valor2 == pedra)
  ) {
    return valor1;
  }

  return valor2;
}

module.exports = {
  papel,
  tesoura,
  pedra,
  Jogar,
};
