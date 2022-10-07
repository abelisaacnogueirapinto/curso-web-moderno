function Carro(velocidadeMaxima = 200, delta = 5) {

    // atributo privado

    let velocidadeAtual = 0

    // metodo publico

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual+=delta
        }else {
            velocidadeAtual=velocidadeMaxima
        }
    }

    // metodo publico

    this.getVelocidadeAtual=function () {
        return velocidadeAtual
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
const fusca= new Carro(30,2)
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()

console.log(fusca.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//console.log(ferrari.getVelocidadeAtual())
const reno = new Carro(3,2)
reno.acelerar()
console.log(reno.getVelocidadeAtual())
reno.acelerar()
console.log(reno.getVelocidadeAtual())
reno.acelerar()
console.log(reno.getVelocidadeAtual())
reno.acelerar()
console.log(reno.getVelocidadeAtual())
