const MongoRepository = require('../db/MongoRepository');
const teamsSchema = require('./teamsSchema');

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

    byHeroAndTeams(heroId, teamId) {
        return this.model.findOne({_id: teamId, members: {$in: [heroId]}})
    }

}


module.exports = new TeamsRepository();