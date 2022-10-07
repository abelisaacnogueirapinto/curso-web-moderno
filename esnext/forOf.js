for (let letra of "Cod3r") {
  // pecorre letra por letra valores
  console.log(letra);
}
const assuntosEcma = ["Map", "Set", "Promise"];

for (let i in assuntosEcma) {
  // pecorre os indices
  console.log(i);
}

for (let assunto of assuntosEcma) {
  // mostra os conteudo dos indices
  console.log(assunto);
}

const assuntoMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promises", { abordado: false }],
]);

for (let assunto of assuntoMap) {
  // mostra chave e valores
  console.log(assunto);
}
for (let chave of assuntoMap.keys()) {
  console.log(chave);
}
for (let valor of assuntoMap.values()) {
  console.log(valor);
}
for (let [ch, vl] of assuntoMap.entries()) {
  console.log(ch, vl);
}
