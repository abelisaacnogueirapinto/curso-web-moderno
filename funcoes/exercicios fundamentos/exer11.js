function receberPrimeiroEUltimoElemento(elementos) {
    this.elementos2 = [elementos]
    console.log(elementos2)
    const primeiroElemento= elementos.shift() //acessa/extrai do array o primeiro valor todos arrays irao ficar sem o valor
    const ultimoElemento = elementos.pop() // acessa/extrai do array o ultimo valor o valor sumira de todos array
  
   
    return [primeiroElemento, ultimoElemento]
   
    }
console.log(receberPrimeiroEUltimoElemento(['abel',2,3,-100,23,"b"]))
console.log(elementos2)
