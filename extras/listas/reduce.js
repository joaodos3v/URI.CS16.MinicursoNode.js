// Incluindo um arquivo (note o 'path' como parâmetro)
const service = require('./service');

async function main() {

    try {
        const heroes = await service.getHerois();

        const marvelPower = heroes.reduce((anterior, atual) => {
            if(atual.editora == 'Marvel') {
                return anterior + atual.nivelPoder;
            }
            return anterior;
        }, 0);
        console.log('Poder Marvel', marvelPower);


        const dcPowers = heroes.reduce((anterior, atual) => {
            if(atual.editora == 'DC') {
                return anterior.concat(atual.poderes);
            }
            return anterior;
        }, [])

        // removendo poderes duplicados
        .reduce((anterior, atual) => {
            if(!anterior.includes(atual)) { // indexOf(atual) < 0
                return anterior.concat(atual);
            }
            return anterior;
        }, []);
        console.log('Poderes DC', dcPowers);


    } catch (error) {
        console.log('Deu problema', error);
    }
}

main();