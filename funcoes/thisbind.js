const pessoa= {
    saudacao: 'bom dia meu brother!',
    falar() {
        console.log(this.saudacao)

    }
}

pessoa.falar()
const falar = pessoa.falar // gera conflito funcional e OO orientado objeto
falar()// fica indefinido
const falarDePessoa = pessoa.falar.bind(pessoa) // o bind tranfere o objeto de forma correta.
falarDePessoa()

const falar2 = pessoa.falar() //amarzena em falar2 o resultado da funcao falar que esta dentro da funçao pessoa
falar2

function Pessoa() {
    this.idade = 0
    const self=this
    setInterval(function(){ // setInterval é uma funçao interna de temporizador
        self.idade++
        console.log(self.idade) // self atribui sempre this sem mudar
    }/*.bind(this)*/, 1000) // milesimo de segundos
}
new  Pessoa // Ctrl + Alt N pra disparar e ctrl + Alt + M  pra parar



