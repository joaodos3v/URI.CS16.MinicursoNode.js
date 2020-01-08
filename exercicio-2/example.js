const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const heroSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    powers: {
        type: [String]
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const heroModel = mongoose.model('heroes', heroSchema);

async function main() {
    const result = await heroModel.create({
        name: 'Batman',
        powers: ['Dinheiro']
    });

    console.log(result);

    const heroes = await heroModel.find();
    console.log(heroes);
}


main();