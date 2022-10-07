function Pessoa() {
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade) // self atribui sempre this sem mudar
    }, 1000) // milesimo de segundos
}
new  Pessoa // Ctrl + Alt N pra disparar e ctrl + Alt + M  pra parar