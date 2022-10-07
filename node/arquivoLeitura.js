const fs = require("fs");

const caminho = __dirname + "/arquivo.json";
// leitura sincrono ler o arquivo todo primeiro

const conteudo = fs.readFileSync(caminho, "utf-8"); // não interessante carrega tudo pra memoria

console.log(conteudo);

//assincrono... melhor maneira
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});
// leitura direta
const config = require("./arquivo.json");
console.log(config.db);

console.log(config.db.user, config.db.pass);
// leitura de uma pasta

fs.readdir(__dirname, (err, arquivos) => {
  console.log("conteudo da pasta");
  console.log(arquivos);
});
