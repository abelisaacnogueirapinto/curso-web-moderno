function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = { nome: "Notebook", preco: 4589, desc: 0.15, getPreco };

global.preco = 100;
global.desc = 0.3;
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 60000, desc: 0.2 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.4, "$")); // passa para dentro da funcao  o contesto de carro (preco e desc) mais o valor do imposto de 0.4 mais a substituiçao do simbolo da moeda
console.log(getPreco.apply(global, [0.18, "$"])); // passa pra dentro da função mas em forma de array como constexto global window
let valor = 3;
let expoe = 2;
let resultado = Math.pow(valor, expoe);
console.log(resultado);
