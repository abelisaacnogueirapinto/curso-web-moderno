function menorNumero(numeros) {
  return Math.min(...numeros); // Math.min pega o menor numero de uma  extensao (,,,) de itens digitados
}

console.log(menorNumero([1, 23, 0, 80, -14, 9]));

const valores = [1.3, 7, 9, 17, 55, 2, 0];
console.log(menorNumero(valores));
