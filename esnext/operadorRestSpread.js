// usar spread com objeto
const funcionario = { nome: "maria", salario: 12556.55 };
const clone = { ativo: true, lotacao: "loja", ...funcionario }; // atribui ao elemnto os elementos da constante funcionario9
console.log(clone);

// usar spread com array
const teste = ["Abel", "daniela"];
const grupoA = ["Joao", "Pedro", "Gloria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela", ...teste]; // ... spread
console.log(grupoFinal);
