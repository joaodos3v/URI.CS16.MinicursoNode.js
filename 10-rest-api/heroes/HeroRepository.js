const MongoRepository = require('../db/MongoRepository');
const heroSchema = require('../heroes/heroSchema');

class HeroRepository extends MongoRepository {

    constructor() {
        super('heroes', heroSchema);
    }

    findByName(name) {
        return this.read({name: name});
    }

}

module.exports = new HeroRepository();