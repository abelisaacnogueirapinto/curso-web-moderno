function removerVogais(frase) {
  //não funcionou l errrrrrooooooo
  const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  vogais.forEach((vogal) => (frase = frase.replace(vogal, "")));
  return frase;
}

console.log(removerVogais2("tEstandoi nternet"));

function removerVogais2(frase) {
  //funcionou plenamente
  return frase.replace(/[aeiou]/gi, "");
}
