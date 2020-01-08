// Função comum de soma
function soma(valor1, valor2) {
    return valor1 + valor2;
}
console.log('Soma', soma(8, 3));


// Atribuindo uma função a uma variável
let subtracao = function(valor1, valor2) {
    return valor1 - valor2;
}
console.log('\nSubtração', subtracao(8, 3));


// Função usando o padrão "arrow function" ou "fat arrow"
let multiplicacao = (valor1, valor2) => {
    return valor1 * valor2;
}
console.log('\nMultiplicação', multiplicacao(8, 3));

// Função usando o padrão "arrow function" em uma linha
let elevarAoQuadraro = valor => Math.pow(valor, 2);
console.log('\nElevado ao quadrado', elevarAoQuadraro(5));


// Exemplo de uso da variável arguments
function somaTudo() {
    let result = 0;
    for(let indice = 0; indice < arguments.length; indice++) {
        result += arguments[indice];
    }
    return result;
}
console.log('\nSomar tudo', somaTudo(8, 3, -6, 10));


// Parâmetros são opcionais e podem ter valores por padrão
function somaSeExistir(valor1, valor2, valor3 = 0, valor4) {
    console.log('Terceiro valor', valor3);
    console.log('Quarto valor', valor4);
    let soma = valor1 + valor2 + valor3;
    if(valor4) {
        soma += valor4
    }
    return soma;
}
console.log('\nSe existir 2 valores', somaSeExistir(8, 3));
console.log('\nSe existir 3 valores', somaSeExistir(8, 3, 5));
console.log('\nSe existir 4 valores', somaSeExistir(8, 3, 15, -8));

(function() {
    console.log('\n*Função auto executável')
})();