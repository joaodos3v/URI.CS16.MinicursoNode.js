// Incluindo um arquivo (note o 'path' como parâmetro)
const service = require('./service');

async function main() {

    try {
        const heroes = await service.getHerois();

        const names = heroes.filter(hero => {
            return hero.nivelPoder > 1100;
        }).map(hero => hero.nome);
        console.log(names);

        // Utilizando desestruturação
        // Se quisesse pegar 2 heróis, poderia ser [shazam, thor]
        const [shazam] = heroes.filter(hero => hero.nome == 'Shazam');
        console.log(shazam);

        // Forma abreviada para 2 desestruturações
        const [{nome}] = heroes.filter(hero => hero.nome == 'Shazam');
        console.log(nome);   

        

    } catch (error) {
        console.log('Deu problema', error);
    }
}

main();