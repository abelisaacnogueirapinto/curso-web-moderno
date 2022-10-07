var somaprod = despesasTotais([
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
]);
somaprod += despesasTotais([
  { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.9 },
]);
somaprod += despesasTotais([
  { nome: "Tv", categoria: "Eletrônicos", preco: 1999.25 },
  { nome: "Liquidificador", categoria: "Eletro Doméstico", preco: 150 },
]); // retornará 239.99
somaprod += despesasTotais([
  { nome: "Xaiomi Poco F#", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Iphone 13", categoria: "Eletrônicos", preco: 6999.9 },
]); //
function despesasTotais(itens) {
  var total = 0;

  for (let item of itens) {
    total += item.preco;
  }
  return total;
}
somaprod += despesasTotais([
  { nome: "Xaiomi Poco F#", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Iphone 13", categoria: "Eletrônicos", preco: 6999.9 },
]);

/*function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}*/

console.log(somaprod.toFixed(2)); // retorna 58188,91
console.log(despesasTotais.preco);
