const heroRepository = require('./HeroRepository');
const teamsRepository = require('../extras/db/TeamsRepository');
const MongoRepository = require('./MongoRepository');

async function main() {
    MongoRepository.connect();

    /**
     * Hero Repository
     */
    /*
    const superman = await heroRepository.create({
        name: 'Superman',
        powers: 'Força'
    });
    console.log(await heroRepository.read());

    console.log(await heroRepository.findByName('Superman'));
    */




    /**
     * Teams Repository
     */
    /*
    const justiceLeague = await teamsRepository.create({
        name: 'Liga da Justiça',
        members: ['Superman', 'Lanterna Verde', 'Flash'],
        publisher: 'DC'
    });

    const avengers = await teamsRepository.create({
        name: 'Os Vingadores',
        members: ['Homem de Ferro', 'Thor', 'Hulk'],
        publisher: 'Marvel'
    });

    console.log(await teamsRepository.read());
    */

   // Para deletar o primeiro registro
   // let deleteFirst = await teamsRepository.delete(avengers[0]._id);


   let avengers = await teamsRepository.read({name: 'Os Vingadores'});
    
   // const strangeDoctor = await heroRepository.create({
   //     name: 'Dr Estranho',
   //     powers: 'Inteligência'
   // });
    console.log('Vingadores', avengers);
    // const strangeDoctor = 'Dr Estranho';
    // let newAvengers = await teamsRepository.addHeroToTeam(avengers, strangeDoctor);
    // console.log('Vingadores Estranhamento bom', newAvengers);

    // o segundo parametro é o id do hero
    // const result = await teamsRepository.addHeroToTeam('5cf863816e285125c8ff487f', '');
    // console.log(await teamsRepository.read());

    // novamente, manda o id do time e o id do hero
    // const result = await teamsRepository.removeHeroFromTeam('', '');

    // manda como parametro o id de qualquer heroi e deve trazer os times que ele faz parte
    const teams = await teamsRepository.byHero('');
    console.log('Superman teams', teams);

};

main();