const express = require('express');
const router = express.Router();
const teamsController = require('./teamsController');
const { body } = require('express-validator/check');
const middlewareWrapper = require('../helpers/middlewareWrapper');

const teamsValidation = [
    body(['name', 'publisher'], 'Value is required').exists(),
    body('members', 'Members is an array').isArray()
];



router.get('/', middlewareWrapper(teamsController.get));
router.get('/:id', middlewareWrapper(teamsController.getOne));
router.post('/', teamsValidation, middlewareWrapper(teamsController.create));
router.put('/:id', teamsValidation, middlewareWrapper(teamsController.update));
router.delete('/:id', middlewareWrapper(teamsController.delete));


module.exports = router;