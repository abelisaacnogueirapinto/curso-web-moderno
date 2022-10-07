const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const paises = (f) => f.pais === "Portugal";
const sexo = (f) => (f.genero === "F") | "M";
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};
const maiorSalario = (maior, funcAtual) => {
  return maior.salario < funcAtual.salario ? maior : funcAtual; //seleciona o funcionario de portugal com menor salario
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  //console.log(funcionarios) lista todos funcionarios
  const func = funcionarios.filter(paises).filter(sexo).reduce(menorSalario);
  console.log(func);
  const maior = funcionarios.filter(paises).reduce(maiorSalario);
  console.log(maior);
  //console.log(funcionarios.filter(paises))
});
