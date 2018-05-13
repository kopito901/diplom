var crypto = require('crypto');

module.exports = {

    encrypt : function(pass) {
        let salt = Math.random() + '',
            hashedPass;
        hashedPass = crypto.createHmac('sha1', salt).update(pass).digest('hex');

        return {
            salt : salt,
            hashedPass : hashedPass
        }
    },

    saltedEncrypt : function(pass, salt) {
        let hashedPass;

        hashedPass = crypto.createHmac('sha1',salt).update(pass).digest('hex');

        return hashedPass;
    }
};
