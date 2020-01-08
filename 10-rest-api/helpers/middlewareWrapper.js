const { validationResult } = require('express-validator/check');

const middlewareWrapper = function(middleware) {
    return function(req, res, next) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        Promise
            .resolve(middleware(req, res, next))
            .catch(error => {
                console.log(error);
                res.status(500).json({message: 'Server Internal Error'});
            });

    }
}


module.exports = middlewareWrapper;