function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(3, 7) // vai somar 
imprimirSoma(2) // vai da NaN pois segundo parametro ta vazio
imprimirSoma('3','2') // concatena
// funçao retorno
function soma(a,b=0) {
    return a + b

}
console.log(soma(2,3))// retorna o valor 5
console.log(soma(4)) // retorna 4 pois b está com 0
