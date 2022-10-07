// exemplo de funcao minimo e maximo 

function gerarNumerosEntre(min,max) {
    if(min>max) [max,min] = [min, max]
    return new Promise(resolver => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() *  fator) + min
        resolver(aleatorio)
    })
}
gerarNumerosEntre(1,60)
    .then(num => num * 10)
    .then(numX10 => `O número gera foi ${numX10}`)
    .then(console.log)