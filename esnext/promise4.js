

function gerarNumerosEntre(min,max, tempo) {
    if(min>max) [max,min] = [min, max]
    return new Promise(resolver => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() *  fator) + min
            resolver(aleatorio)

        },tempo)
        
    })
}
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60,4000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,2000),
        gerarNumerosEntre(1,60,100),
        gerarNumerosEntre(1,60,500)

    ])
}

console.time('Tempo')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('Tempo')
    })
