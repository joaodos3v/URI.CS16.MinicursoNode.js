function obterUsuario(callback) {
    setTimeout(function() {
        const usuario = {
            id: '123456',
            nome: 'Neilor'
        };
        // Erro é o primeiro parametro e o dado é o segundo
        return callback(null, usuario);
    }, 1000)
}

// Callback é sempre o último parametro
function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        if(idUsuario) {
            return callback(null, {
                ddd: '54',
                numero: '789456123'
            })
        } else {
            return callback(new Error('Id não informado'), null);
        }
    }, 2000);
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

const processaUsuario = function(erro, usuario) {
    if(erro) {
        console.error('Erro ao obter usuário', erro);
        return;
    }
    obterTelefone(usuario.id, function(erro, telefone) {
        if(erro) {
            console.error('Erro ao obter telefone');
            return;
        }
        obterEndereco(usuario.id, function(erro, endereco) {
            if(erro) {
                console.error('Erro ao obter endereço');
                return;
            }
            console.log(`O ${usuario.nome} tem o telefone (${telefone.ddd}) ${telefone.numero} e mora na rua ${endereco.rua}`);
        })
    })
};

obterUsuario(processaUsuario);

