const mongoose = require('mongoose');

mongoose.connect(

    'mongodb+srv://guardiao:grayskull80@herois-dev-cyj9w.mongodb.net/joao?retryWrites=true&w=majority',
    {useNewUrlParser: true},
    error => {
        if(error) {
            console.log('Não foi possível conectar ao mongo')
        }
    }
)


mongoose.connection.once('open', () => console.log('Banco conectado'));