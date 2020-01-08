const mongoose = require('mongoose');

class MongoRepository {

    constructor(collectionName, schema) {
        this.model = mongoose.model(collectionName, schema);
    }

    static connect() {
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
    }


    create(document) {
        return this.model.create(document);
    }
    
    update(document) {
        document.updateAt = new Date();
        return this.model.updateOne({_id: document._id}, document);
    }

    read(query) {
        return this.model.find(query);
    }

    delete(id) {
        return this.model.deleteOne({_id: id});
    }

}


module.exports = MongoRepository;