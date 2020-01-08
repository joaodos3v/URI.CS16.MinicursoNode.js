const mongoose = require('mongoose');

class MongoRepository {

    constructor(collectionName, schema) {
        this.model = mongoose.model(collectionName, schema);
    }

    static connect() {
        mongoose.connect(

            process.env.MONGO_CONNECTION,
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

    readOne(id) {
        return this.model.findOne({_id: id});
    }

    delete(id) {
        return this.model.deleteOne({_id: id});
    }

}


module.exports = MongoRepository;