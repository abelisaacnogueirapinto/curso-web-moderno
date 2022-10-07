function qualtriangulo(l1, l2, l3) {
  console.log("triangulo pode ser exibido");
  console.log(`l1 : ${l1} l2 : ${l2} l3 : ${l3}`);
  if (l1 != l2 && l1 != l3) {
    if (l2 != l3) {
      console.log("Tringulo Escaleno");
    } else {
      console.log("Triangulo Isósceles");
    }
  } else if (l1 == l2 && l1 == l3) {
    console.log("Triangulo Equilátero");
  } else {
    console.log("Triangulo Isósceles");
  }
}

function atendeTriangulo(l1, l2, l3) {
  this.lado1 = l1;
  this.lado2 = l2;
  this.lado3 = l3;
  if (l1 - l2 < l3 && l3 < l1 + l2) {
    console.log(qualtriangulo(this.lado1, this.lado2, this.lado3));
  } else if (l3 - l1 < l2 && l2 < l1 + l3) {
    console.log(qualtriangulo(this.lado1, this.lado2, this.lado3));
  } else if (l2 - l3 < l1 && l1 < l2 + l3) {
    console.log(qualtriangulo(this.lado1, this.lado2, this.lado3));
  } else {
    console.log("parametros não formam um triângulo");
  }
}

atendeTriangulo(7, 7, 7);
