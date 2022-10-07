
// armazenando funcao em uma variavel
const imprimirSoma= function (a,b){
    console.log(a+b)
}
imprimirSoma(3,5)

//armazenando um funcao arrow euma variavel
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))
// retorno implícido
const subtracao = (a,b) => a - b 
console.log(subtracao(5,3))