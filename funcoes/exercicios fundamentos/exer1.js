function nascimento(vano) {
    let dataatual = new Date()
    let ano = dataatual.getFullYear()
    
    if (vano > ano) {
       console.log(`você não pode ter nascido após neste ano: ${ano}`)
    } else {
        ano -= vano
        let dias = 360 * ano
        console.log(`sua idade é  ${ano} e já viveu ${dias}`)
    }
}
nascimento(2000)