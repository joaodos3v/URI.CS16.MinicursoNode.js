const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {heroesRoutes} = require('./heroes');
const {teamsRoutes} = require('./teams');
const jwt = require('express-jwt');
const { authRouter } = require('./auth');

// A ordem de execução dos middlewares faz diferenças (de cima para baixo)
app.use(
    jwt({ secret: process.env.JWT_SECRET})
    .unless({path: ['/api/v1/token']}) // essa rota não será verifica (sem autenticação)
);

app.use(bodyParser.json());

app.use('/api/v1/heroes', heroesRoutes);
app.use('/api/v1/teams', teamsRoutes);
app.use('/api/v1/token', authRouter);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({message: 'User is not authenticated'});
    }
});


module.exports = app;