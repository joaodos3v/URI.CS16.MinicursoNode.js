const express = require('express');
const router = express.Router();
const heroesController = require('./heroesController');
const { body } = require('express-validator/check');
const middlewareWrapper = require('../helpers/middlewareWrapper');

const heroesValidation = [
    body('name', 'Name is required').exists(),
    body('powers', 'Powers is an array').isArray().optional()
];



router.get('/', middlewareWrapper(heroesController.get));
router.get('/:id', middlewareWrapper(heroesController.getOne));
router.post('/', heroesValidation, middlewareWrapper(heroesController.create));
router.put('/:id', heroesValidation, middlewareWrapper(heroesController.update));
router.delete('/:id', middlewareWrapper(heroesController.delete));

router.get('/:id/teams', middlewareWrapper(heroesController.getHeroTeams));
router.get('/:id/teams/:teamId', middlewareWrapper(heroesController.getHeroTeam));


module.exports = router;