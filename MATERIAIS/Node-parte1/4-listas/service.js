const axios = require('axios');
const URL = 'https://herois.getsandbox.com/herois';

// Chamada a um serviço REST
async function obterHerois() {
    const herois = await axios.get(URL);
    return herois.data;
}

// Teste do retorno
// obterHerois()
// .then(herois => {
//     console.log(herois);
// }).catch(erro => {
//     console.log('Erro ao buscar os heróis', erro);
// });

// Exportando a função como parte do módulo deste arquivo
module.exports = {
    obterHerois
}