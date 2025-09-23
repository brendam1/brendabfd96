class Retangulo {
    constructor (largura, altura) {
        this.largura = largura
        this.altura = altura
    }

area() {
    return `${this.largura * this.altura}`
}

perimetro() {
    return `${2 * (this.largura + this.altura)}`
}

}

const Retangulo1 = new Retangulo (5, 3)

console.log(Retangulo1.area())
console.log(Retangulo1.perimetro())