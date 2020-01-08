const service = require('./service');

async function main() {
    // Sempre usar try catch dentro de uma função com 'async'
    try {
        const herois = await service.obterHerois();

        console.time('for');
        const nomesFor = [];
        for (let index = 0; index < herois.length; index++) {
            const heroi = herois[index];
            nomesFor.push(heroi.nome);
        }
        console.timeEnd('for');

        console.time('forin');
        const nomesForIn = [];
        for (let index in herois) {
            const heroi = herois[index];
            nomesForIn.push(heroi.nome);
        }
        console.timeEnd('forin');

        console.time('forof');
        const nomesForOf = [];
        for (let heroi of herois) {
            nomesForOf.push(heroi.nome);
        }
        console.timeEnd('forof');

        // Você não pode para o loop com return, break ou usar continue
        console.time('foreach');
        const nomesForEach = [];
        herois.forEach(heroi => {
            nomesForEach.push(heroi.nome);
        });
        console.timeEnd('foreach');

    } catch (erro) {
        console.log('Erro interno', erro);
    }
}

main()