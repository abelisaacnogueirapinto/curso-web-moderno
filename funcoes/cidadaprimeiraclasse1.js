// funçao retorna e contem uma funçao dentro    

function soma (a,b) {
    return function (c) {
        console.log(a + b + c)

    }
}
// chamando a funçao anterior

soma(2,3)(4) //passa para função o valor 2 e 3 para função soma  e valor 4 pra funçao c dentro de soma resultado 9
const cinco = soma(2,3) // vai criar a variavel 5 com resultado de soma com c = 0 ou seja a variavel cinco sempre tera
// constante nela a chamada da funçao soma com os parametros de a e b somente
cinco(4) // desta maneira cinco que tem  a funçao soma com paramento 2 3 respectivamente a e b que são 5, vai 
// acresentar o valor passado de 4 na função c que esta dentro de soma


