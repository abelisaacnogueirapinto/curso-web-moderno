function somar(numeros) {
  let soma = 0;
  let resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    resultado.push(numeros[i]);
  }
  return `soma = ${soma} e os valores somados são ${resultado}`;
}
console.log(somar([2, 3, 4, 10, 22, 45]));
function somarNumeros(numeros) {
  let soma = 0;
  numeros.forEach((numero) => (soma += numero));
  return soma;
}
console.log(somarNumeros([2, 3, 4, 10, 22, 45]));
