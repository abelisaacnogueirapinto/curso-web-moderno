function calcularMedia(numeros) {
  const quantidadeDeNumeros = numeros.length;
  const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB); //reduce pega a seguencia introduzida pelo usuario independete da quantidade itens, passa para varialvel somatotal a soma dos numerosA + numeroB que são todos itens digitados

  return [(somaTotal / quantidadeDeNumeros).toFixed(2), somaTotal.toFixed(2)]; //retorna a media e soma das notas
}
console.log(calcularMedia([8, 10, 5, 7.5, 9, 9.1, 7.6, 6.7, 5.3]));
