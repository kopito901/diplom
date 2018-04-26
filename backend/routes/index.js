const { models } = require('../models')
const busboy = require('express-busboy');
const JWT = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authorize = require('../utils/auth');


module.exports = function(app) {
  busboy.extend(app);
  app.use(cookieParser());
  app.use(authorize.auth);

  app.get('/clearCookies', (req, res) => {
    res.clearCookies('token');
    res.send('qwe');
  });

  app.get('/api/v1/users/list', (req, res) => {
    models.User.findAll()
      .then(users => {
        res.json({
          users: users
        });
      });
  });

  app.post('/api/v1/users/auth', (req, res) => {
    models.User.findOne({
      where: {
        login: req.body.login,
        password: req.body.pass
      }
    })
      .then(user => {
        if(!!user) {
          res.cookie( 'token', 'JWT '+JWT.sign({ id : user.id, access : user.AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
          res.json({
            status: !!user,
            user: user
          });
        } else {
          res.json({
            status: !!user,
          });
        }
      });
  });

  app.get('/api/v1/users/auth', (req, res) => {
    if(req.user) {
      models.User.findById(req.user.id)
        .then(user => {
          res.json({ user: user });
        });
    }
  });
}
