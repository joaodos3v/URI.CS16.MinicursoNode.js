const util = require('util');

function obterUsuario(callback) {
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

const obterEnderecoAsync = util.promisify(obterEndereco);

// Async na frente faz com que a função retorne uma Promise
async function main() {
    try {
        // Comparar tempo executando em sequencial vs paralelo
        console.time('tempo-promise');
        // Executar operações assíncronas de forma sequencial
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);

        // Executar várias Promises em paralelo
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);

        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
            Usuário: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereço: ${endereco.rua}, ${endereco.numero}
        `);
        console.timeEnd('tempo-promise');

    } catch (erro) {
        console.log('Erro geral', erro);
    }
}

main();