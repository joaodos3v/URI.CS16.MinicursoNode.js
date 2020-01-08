// Módulo de um pacote externo sendo incluído
const axios = require('axios');

async function getHerois() {
    const response = await axios.get('https://herois.getsandbox.com/herois');
    return response.data;
}

module.exports = {
    // Se o nome do atributo for igual ao nome da variável, basta passar o nome da variável
    getHerois
};