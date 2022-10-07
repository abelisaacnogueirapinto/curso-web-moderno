// ler numeros diversos para criação de um array com numeros pares de indices pares

function numerosIndicesPares(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 2) {
    const numeroPar = numeros[i] % 2 === 0;
    if (numeroPar) resultado.push(numeros[i]);
  }
  return resultado;
}

function IndicesPares(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  });
}

console.log(numerosIndicesPares([10, 3, 22, 12, 6, 8, 7, 22]));
console.log(IndicesPares([10, 3, 22, 12, 6, 8, 7, 22, 60, 40, 25, 66, 58]));
