const jwt = require('jsonwebtoken');

const user = {
    id: '123456',
    login: 'teste',
    password: 'teste123'
};

class AuthController {

    static async generateToken(req, res, next) {
        const login = req.body.login;
        const password = req.body.password;

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);

        if( user.login == login && user.password == password ) {
            return res.json({token});
        }

        res.status(401).json({message: 'Invalid credentials'});
    }

}


module.exports = AuthController;