class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calculaArea()
    }
    
    calculaArea() {
        return this.altura * this.largura;
    }

    static ehQuadrado(altura, largura) {
        return altura == largura;
    }
}

const retangulo = new Retangulo(10, 10);

// console.log('area do retangulo', retangulo.area);
// retangulo.largura = 15;
// console.log('calcular area', retangulo.calculaArea());
// console.log('O retângulo é um quadrado?', Retangulo.ehQuadrado(10, 10))


class Paralelepipedo extends Retangulo {

    constructor(altura, largura, profundidade) {
        super(altura, largura);
        this.profundidade = profundidade;
    }

    calculaVolume() {
        return this.altura * this.largura * this.profundidade;
    }

    set profundidade(valor) {
        if(valor <= 0) {
            throw new Error('Profundidade deve ser maior que 0')
        }
        this._profundidade = valor
    }

    get profundidade() {
        return this._profundidade;
    }

}

const paralelepipedo = new Paralelepipedo(5, 6, 0)

console.log('paralelepipedo volume', paralelepipedo.calculaVolume());
console.log('paralelepipedo area', paralelepipedo.area);
console.log(paralelepipedo._profundidade = 5)
console.log('paralelepipedo volume', paralelepipedo.calculaVolume());