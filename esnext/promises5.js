//tratando de mensagem de erro no promise


function funcionarOuNao(valor,chanceErro) {
    return new Promise((resolve,reject) => {
        if(Math.random() < chanceErro) {
            reject('ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando ...',0.1)
        .then(v => `Valor: ${v}`) 
        .then(
            v=> consol.log(v),
            err => console.log(`Erro Espec.: ${err}`)
            )
        .then(() => console.log (`quase fim!`))
        .catch(err => console.log(`Erro: ${err}`))
        .then(() => console.log('Fim!!'))
