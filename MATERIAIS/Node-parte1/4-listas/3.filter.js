const {obterHerois} = require('./service');

async function main() {
    try {
        const herois = await obterHerois();

        const result = herois.filter(function(heroi) {
            return heroi.nome.toLowerCase() == "batman";
        })

        console.log(result)

        if (result.length) {
            const batman = result[0];
            console.log('poderes', batman.poderes);
        }

        // Usando destructors
        // const [batman] = herois.filter(function(heroi) {
        //     return heroi.nome.toLowerCase() == "batman";
        // })

        // E se não retornar um valor?
        // const [{poderes}] = herois.filter(function(heroi) {
        //     return heroi.nome.toLowerCase() == "batman";
        // })

    } catch (erro) {
        console.log('Erro interno', erro);
    }
}

main();