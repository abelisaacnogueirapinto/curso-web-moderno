const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())

        })
   })
}

const caminho = path.join('../esnext/dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // no caso o n não funcionou na versao nova
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)