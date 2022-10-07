function jurosSimples(cap, juros, ano) {
  capital = cap * (juros / 100) * ano;
  console.log(capital);
}

function jurosCompostos(cap, juros, tempo) {
  let jurosacumulado = cap * (juros / 100);
  for (let i = 0; i < tempo; i++) {
    jurosacumulado = jurosacumulado + cap * (juros / 100);
  }
  console.log(jurosacumulado);
}
jurosSimples(18000, 6, 3);
jurosCompostos(18000, 6, 3);
