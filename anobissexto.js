// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
  return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto(2024));
