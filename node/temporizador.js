const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 1', function () {
    console.log('executando Tarefa 1!', new Date().getSeconds())
})

// */5 significa que vai ser excutado de 5 em 5 segundos
// * em qualquer minuto
// 13 horas
// * qualquer dia do mês
// * qualquer mes 
// 1 dia da semana no caso 1 é segunda feira  0 seria domingo

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1')
    
}, 20000);  // cancela a tarefa de acordo com a hora em 20 segurndos e executar tarefa 2 em 30

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('executando tarefa 2', new Date().getSeconds())
})