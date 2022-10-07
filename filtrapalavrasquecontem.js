function buscarPalavrasSemelhantes(inicio, palavras) {
  const resultado = [];
  for (let palavra of palavras)
    if (palavra.includes(inicio)) resultado.push(palavra);
  return resultado;
}

console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
); // retornará ["programação", "profissional"]
