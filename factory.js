// factory simples
var tabela = [];

function criarPessoa(prod, preco) {
  tabela.push = {
    produto: prod,
    preco: preco,
  };
}
criarPessoa("Tv", 2000.56);
console.log(tabela);

criarPessoa("Celular", 3999.45);
criarPessoa("Notebook", 4890.69);

console.log(tabela);
criarPessoa("Tablet", 678.9);
console.log(tabela);

criarPessoa("Aparelho de Som", 1299, 99);
console.log(tabela);
