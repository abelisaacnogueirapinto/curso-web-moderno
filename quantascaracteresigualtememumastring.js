function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter((caractere) => caractere === caractereBuscado)
    .length;
}

var a = contarCaractere(
  "f",
  "estou fazento exercicios de programaçao funçoes "
);
console.log(a); // retorna o numero de caracteres que escolheu dentro de uma string
