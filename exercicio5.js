function convertevalor(valor) {
  const val = valor;
  this.result = val.toFixed(2);
  return console.log(
    Number(this.result).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  );
}

//var resultado = convertevalor(2344.265454);
//var a = Number(resultado).toLocaleString('pt-BR',{style:'currency', currency: 'BRL'})
//convertevalor(22554.6235888);

let a = 2555.666333;
convertevalor(a);
let b = 22.5666 * a;
console.log(b);
console.log(convertevalor(b));
