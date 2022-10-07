// nao aceita repeticao / nao indexada
const times = new Set();
times.add("vasco").add("cruzeiro").add("flamengo");
times.add("São Paulo");
console.log(times);
console.log(times.size);
console.log(times.has("vasco"));
times.delete("vasco");
console.log(times.has("vasco"));
console.log(times);

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet.size);
console.log(nomesSet);
