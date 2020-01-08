const MongoRepository = require('./MongoRepository');
const teamsSchema = require('../extras/db/teamsSchema');

class TeamsRepository extends MongoRepository {

    constructor() {
        super('teams', teamsSchema);
    }

    addHeroToTeam(teamId, hero) {
        return this.model.updateOne(
            {_id: teamId},
            { $push: {members: hero} }
        );
    }

    removeHeroFromTeam(teamId, heroId) {
        return this.model.updateOne(
            {_id: teamId},
            { $pull: {members: heroId} }
        );
    }

    byHero(heroId) {
        return this.model.find({members: {$in: [heroId]}});
    }

}


module.exports = new TeamsRepository();