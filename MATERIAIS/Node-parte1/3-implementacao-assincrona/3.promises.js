const util = require('util');

function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const usuario = {
                id: '123456',
                nome: 'Neilor'
            };
            resolve(usuario);
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(idUsuario) {
                resolve({
                    ddd: '54',
                    numero: '789456123'
                })
            } else {
               reject(new Error('Id não informado'));
            }
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        if(idUsuario) {
            return callback(null, {
                rua: 'Pedro Álvares Cabral',
                numero: 54
            })
        } else {
            return callback(new Error('Id não informado'), null);
        }
    }, 1000);
}
// Função nativa do node para transformar callbacks em Promises
const obterEnderecoAsync = util.promisify(obterEndereco);

const usuarioPromise = obterUsuario()
usuarioPromise
.then(function(usuario) {
    console.log('usuario', usuario);
    return obterTelefone(usuario.id).then(function(telefone) {
        // É possível retornar um valor para a função callback vinda do then
        return {
            usuario: usuario,
            telefone: telefone
        };
    });
})
.then(resultado => {
    console.log('resultado com telefone', resultado);

    return obterEnderecoAsync(resultado.usuario.id)
        .then(endereco => {
            resultado.endereco = endereco;
            return resultado;
        }, error => {
            // É possível tratar o erro no segundo param impedindo 
            // sua propagação e continuando o encademento
            console.warn('Problema ao obter endereço', error);
            return resultado
        });

})
.then(resultado => {
    resultado.endereco = resultado.endereco || {};
    console.log(`
        Usuário: ${resultado.usuario.nome}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}
        Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    `);
}).catch(error => {
    console.error('Erro geral', error);
}).then(() => {
    console.log('Execução acabou, com erro ou sucesso');
})
