const express = require('express');
const teamRepository = require('./TeamsRepository');

class TeamsController {

    /**
     * req - o que o cliente (browser) enviou
     * res - a resposta do servidor
     * next - o express funciona com middlewares e o next é utilizado para passar para o próximo passo do 'pipeline'
     */
    static async get(req, res, next) {
        const result = await teamRepository.read();
        res.json(result);
    }


    static async getOne(req, res, next) {
        const id = req.params.id;
        const hero = await teamRepository.readOne(id);
        if( !hero ) {
            return res.status(404).json({message: 'Team not found'});
        }
        res.json(hero);
    }


    static async create(req, res, next) {
        const hero = req.body;
        const result =  await teamRepository.create(hero);
        res.json(result);
    }


    static async update(req, res, next) {
        const id = req.params.id;
        const hero = req.body;
        hero._id = id;
        const result = await teamRepository.update(hero);

        if( result.ok ) {
            return res.json({success: true, updated: result.nModified});
        }

        return res.status(400).json({
            success: false, 
            message: 'Could not update team'
        });
    }


    static async delete(req, res, next) {
        const id = req.params.id;
        const result = await teamRepository.delete(id);

        if( result.ok ) {
            console.log(result);
            return res.json({success: true, deleted: result.n});
        }

        return res.status(400).json({
            success: false,
            message: 'Could not delete team'
        });
    }


}


module.exports = TeamsController;