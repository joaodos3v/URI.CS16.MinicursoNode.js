const express = require('express');
const router = express.Router();
const middlewareWrapper = require('../helpers/middlewareWrapper');
const authController = require('./authController');


router.post('/', middlewareWrapper(authController.generateToken));


module.exports = router;