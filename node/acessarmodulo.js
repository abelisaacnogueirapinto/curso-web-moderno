const saudacao = require("saudacao"); // ja encontra o caminho relativo automatico dentro de node_modules
console.log(saudacao.ola);
const http = require("http");

http
  .createServer((reg, res) => {
    res.write("bom dia galera!!");
    res.end();
  })
  .listen(8080);
console.log(http);
