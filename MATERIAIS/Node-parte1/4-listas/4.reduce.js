const {obterHerois} = require('./service');

async function main() {
    try {
        const herois = await obterHerois();

        // Somar o poder de todos heróis da Marvel
        const poderMarvel = herois.reduce((anterior, heroi) => {
            if(heroi.editora == 'Marvel') {
                return anterior + heroi.nivelPoder;
            }
            return anterior;
        }, 0);

        console.log('Poder da Marvel', poderMarvel);

        // Listar todos os poderes da DC
        const heroisDC = herois.filter(heroi => heroi.editora == 'DC');
        let poderesDC = heroisDC.reduce((anterior, heroi) => {
            return anterior.concat(heroi.poderes);
        }, [])
        // Eliminar poderes duplicados
        // .reduce((anterior, poder) => {
        //     if (anterior.indexOf(poder) == -1) { // Trocar indeOf por includes ES7
        //         return anterior.concat(poder);
        //     }
        //     return anterior;
        // }, []);

        console.log('Lista de poders da DC', poderesDC);

    } catch (erro) {
        console.log('Erro interno', erro);
    }
}

main();