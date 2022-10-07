function area(largura, altura) {
    const area = largura * altura
    if (area> 20){
        console.log(`valor acima do permitido: ${area}m2`)
    } else {
        return area 

    }
}
area(3.3, 4)
console.log(area(3,9))
