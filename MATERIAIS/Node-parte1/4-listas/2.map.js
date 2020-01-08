const service = require('./service');

async function main() {
    try {
        const herois = await service.obterHerois();

        const nomes = herois.map(function(heroi, index) {
            return heroi.nome;
        });

        // Implementação usando arrow function :)
        // const nomes = herois.map(heroi => heroi.nome);

        console.log(nomes);

    } catch (erro) {
        console.log('Erro interno', erro);
    }
}

main();