let a = new Promise(function (cumprirPromessa) {
  cumprirPromessa({
    x: 3,
    y: 4,
  });
});

a.then(function (valor) {
  console.log(valor);
  console.log(valor.x);
  console.log(valor.y);
});
// fazendo com  array

let b = new Promise(function (cumprirPromessa) {
  cumprirPromessa(["Ana", "Bia", "Abel", "Matheus"]);
});
b.then((valor) => valor[0]).then((primeiro) => console.log(primeiro));

// exemplo de passar funcoes para o then

const primeiroElemento = (array) => array[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Abel", "Matheus"]);
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)

  .then(console.log); //recebe o ultimo parametro de then
