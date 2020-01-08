const MongoRepository = require('./MongoRepository');
const heroSchema = require('./heroSchema');

class HeroRepository extends MongoRepository {

    constructor() {
        super('heroes', heroSchema);
    }

    findByName(name) {
        return this.read({name: name});
    }

}

module.exports = new HeroRepository();