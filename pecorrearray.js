// ler todos indices de uma array

const numbers = [1, 2, 3, 4, 5, 40];
/*for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  } 

 numbers.forEach(function(number) {
    console.log(number);
});*/
let soma = 0;
numbers.forEach((valorDentroIndice) => {
  soma += valorDentroIndice;
  console.log(`valor do array ${valorDentroIndice} soma ${soma}`);
}); //lê o array numbers um a um passando o valor para o parametro valorDentroIndice e envia pra console coloquei também as soma dos elementos do array
