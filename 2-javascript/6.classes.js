class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calcularArea();
    }

    calcularArea() {
        return this.altura * this.largura;
    }

    static ehQuadrado(altura, largura) {
        return altura == largura;
    }
}

const retangulo = new Retangulo(10, 10);

console.log('area do retangulo', retangulo.area);
retangulo.largura = 15;
console.log('calcular área', retangulo.calcularArea());
console.log('O retângulo é um quadrado?', Retangulo.ehQuadrado(12, 10));










class Paralelepipedo extends Retangulo {
    constructor(altura, largura, profundidade) {
        // Tem que ser chamado antes de qualquer outra coisa
        super(altura, largura);

        this._profundidade = profundidade;
    }

    calculaVolume() {
        return this.altura + this.largura + this.profundidade;
    }

    set profundidade(valor) {
        if(valor <= 0) {
            throw new Erros('Profundidade deve ser maior que 0');
        }
        this._profundidade = valor;
    }

    get profundidade() {
        return this._profundidade;
    }
}


const paralelepipedo = new Paralelepipedo(5, 6, 7);

console.log('paralelepipedo volume', paralelepipedo.calculaVolume());
console.log('paralelepipedo area', paralelepipedo.area);

paralelepipedo._profundidade = 5
console.log('volume', paralelepipedo.calculaVolume())