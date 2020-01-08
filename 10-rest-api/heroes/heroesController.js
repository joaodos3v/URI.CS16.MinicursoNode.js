const express = require('express');
const heroRepository = require('./HeroRepository');
const { teamsRepository } = require('../teams');

class HeroesController {

    /**
     * req - o que o cliente (browser) enviou
     * res - a resposta do servidor
     * next - o express funciona com middlewares e o next é utilizado para passar para o próximo passo do 'pipeline'
     */
    static async get(req, res, next) {
        console.log(req.user);
        const result = await heroRepository.read();
        res.json(result);
    }


    static async getOne(req, res, next) {
        const id = req.params.id;
        const hero = await heroRepository.readOne(id);
        if( !hero ) {
            return res.status(404).json({message: 'Hero not found'});
        }
        res.json(hero);
    }


    static async create(req, res, next) {
        const hero = req.body;
        const result =  await heroRepository.create(hero);
        res.json(result);
    }


    static async update(req, res, next) {
        const id = req.params.id;
        const hero = req.body;
        hero._id = id;
        const result = await heroRepository.update(hero);

        if( result.ok ) {
            return res.json({success: true, updated: result.nModified});
        }

        return res.status(400).json({
            success: false, 
            message: 'Could not update hero'
        });
    }


    static async delete(req, res, next) {
        const id = req.params.id;
        const result = await heroRepository.delete(id);

        if( result.ok ) {
            console.log(result);
            return res.json({success: true, deleted: result.n});
        }

        return res.status(400).json({
            success: false,
            message: 'Could not delete hero'
        });
    }


    static async getHeroTeams(req, res, next) {
        const heroId = req.params.id;
        const teams = await teamsRepository.byHero(heroId);
        res.json(teams);
    }


    static async getHeroTeam(req, res, next) {
        const heroId = req.params.id;
        const teamId = req.params.teamId;
        const team = await teamsRepository.byHeroAndTeam(heroId, teamId);

        if( !team ) {
            res.status(404).json({message: 'Team not found for hero'});
        }

        res.json(teams);
    }


}


module.exports = HeroesController;