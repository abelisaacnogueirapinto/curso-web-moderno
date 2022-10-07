function contarPalavras(frase) {
  const palavras = frase.split(" "); //cpmta  espaços entre palavras obs:não conta palavra , deduz que tenha apenas 1 espaço entre as palavras se tiver mais vai dar resultado E R R A D O
  return palavras.length;
}
console.log(contarPalavras("Sou uma frase")); // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")); // retornará 5
