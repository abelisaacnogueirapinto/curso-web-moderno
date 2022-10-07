const soma = function ( x, y) {
    return x + y 
}

const imprimirResultado = function (a, b, operacao = soma) { // opracao recebe soma os parametros a b são passados para x e y de soma
    console.log(operacao(a,b))


}
imprimirResultado(3,4)
imprimirResultado(3,4, function(x,y){ // passa usar a funçao anonima
    return x-y
})
imprimirResultado(3,4, (x,y)=>x *y)
