// Código sequencial

console.log('Primeiro log');

function buscarPessoa() {
    console.log('Segundo log')
    return 'Asdrubal';
}

let pessoa = buscarPessoa();

console.log('Terceiro log', pessoa);
