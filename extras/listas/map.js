// Incluindo um arquivo (note o 'path' como parâmetro)
const service = require('./service');

async function main() {

    try {
        const heroes = await service.getHerois();

        console.time('map');

        const names = heroes.map(hero => hero.nome);
        
        console.timeEnd('map');
        console.log(names);

    } catch (error) {
        console.log('Deu problema', error);
    }
}

main();