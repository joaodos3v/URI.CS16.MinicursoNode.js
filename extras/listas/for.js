// Incluindo um arquivo (note o 'path' como parâmetro)
const service = require('./service');

async function main() {

    try {
        const heroes = await service.getHerois();

        // For
        console.time('for');
        let names = [];
        for (let index = 0; index < heroes.length; index++) {
            const hero = heroes[index];
            names.push(hero.nome);            
        }
        console.timeEnd('for');
        console.log(names);


        // ForIn
        console.time('forIn');
        let namesIn = [];
        for (const index in heroes) {
            const hero = heroes[index];
            namesIn.push(hero.nome);
        }
        console.timeEnd('forIn');
        console.log(namesIn);


        // ForOf
        console.time('forOf');
        let namesOf = [];
        for (const hero of heroes) {
            namesOf.push(hero.nome);
        }
        console.timeEnd('forOf');
        console.log(namesOf);


        // ForEach
        console.time('forEach');
        let namesEach = [];
        heroes.forEach(function(hero) {
            namesEach.push(hero.nome);
        });
        console.timeEnd('forEach');
        console.log(namesEach);

    } catch (error) {
        console.log('Deu problema', error);
    }
}

main();