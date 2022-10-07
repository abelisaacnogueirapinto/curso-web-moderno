// modelo 1 valor padrao

function soma1(a,b,c) {
    a = a || 1   // a recebe o valor do parametro ou 1 caso o valor seja 0 ou underfined
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(1))
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))
// modelo 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se parametro a for diferente de underfined a recebe a senao recebe 1
    b = 1 in arguments ? b : 1  // se existe algo dentro de , b recebe b se não recebe 1
    c = isNaN(c) ? 1 : c // o melhor seria este se o argumento c é nulo c recebe 1 ou recebe c mesmo
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(1,1))
console.log(soma2(0,0,0)) // diferente da funçao acima que resultado da 3 nesta da 0

// valor padrão do es2015 a melhorada 

function soma3(a=1,b=1,c=1) { // retorna a soma dos parametros normal porem se nao for passado  
    return a + b + c
}
 const teste = soma4 = (a =1, b =1, c=1) => a + b + c // eu fiz e deu certo 
 console.log(soma4())


