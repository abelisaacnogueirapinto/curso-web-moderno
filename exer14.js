// multiplica o numero sem usar o  operador *
// manda repetir a funçao de acordo com o valor passado em multipicador
// super interessante

function multiplicar(numero, multiplicador) {
  if (numero === 0 || multiplicador === 0) return 0;
  return multiplicador === 1
    ? numero
    : numero + multiplicar(numero, multiplicador - 1);
}
console.log(multiplicar(1253, 1));
