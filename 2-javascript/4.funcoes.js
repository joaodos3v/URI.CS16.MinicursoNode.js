// Função comum de soma
function soma(a, b) {
    return a + b;
}
console.log('Soma', soma(8,3));

// Atribuindo uma função à uma variável
let subtracao = function(a, b) {
    return a - b;
}
console.log("\nSubtração: ", subtracao(8, 3));

// Exemplo de uso da variável arguments
function somaTudo() {
    let result = 0;
    for(let indice = 0; indice < arguments.length; indice++) {
        result += arguments[indice];
    }
    return result;
}
console.log('\nSomar tudo: ', somaTudo(8, 3, -6, 10));