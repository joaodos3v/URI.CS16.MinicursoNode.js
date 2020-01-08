// Código assíncrono

console.log('Primeiro log');

function buscarPessoa() {
    setTimeout(function() {
        console.log('Segundo log')
        return 'Asdrubal';
    }, 1000);
}

let pessoa = buscarPessoa();

console.log('Terceiro log', pessoa);
