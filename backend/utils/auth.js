require('dotenv').config();
const JWT = require('jsonwebtoken');

exports.auth = function(req, res, next) {
    if(req.cookies && req.cookies.token && req.cookies.token.split(' ')[0] === 'JWT') {
        JWT.verify(req.cookies.token.split(' ')[1], process.env.JWT_SECRET, function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next()
        });
    } else {
        req.user = undefined;
        next();
    }
};
