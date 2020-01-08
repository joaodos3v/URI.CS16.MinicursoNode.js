function obterUsuario() {
    return;
    // return {
    //     id: '123456',
    //     nome: 'Neilor'
    // }
}

function obterTelefone(idUsuario) {
    if(idUsuario) {
        return {
            ddd: '54',
            numero: '789456123'
        }
    }
}

function obterEndereco(idUsuario) {
    if(idUsuario) {
        return {
            rua: 'Pedro Álvares Cabral',
            numero: 54
        }
    }
}

const usuario = obterUsuario() || {};
const telefone = obterTelefone(usuario.id) || {};
const endereco = obterEndereco(usuario.id) || {};

console.log(`O ${usuario.nome} tem o telefone (${telefone.ddd}) ${telefone.numero} e mora na rua ${endereco.rua}`);