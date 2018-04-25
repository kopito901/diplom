const { models } = require('../models')
const busboy = require('express-busboy');

module.exports = function(app) {
  busboy.extend(app);

  app.get('/api/getUsers', (req, res) => {
    models.User.findAll()
      .then(users => {
        res.json({
          users: users
        });
      });
  });

  app.post('/api/auth', (req, res) => {
    models.User.findOne({
      where: {
        login: req.body.login,
        password: req.body.pass
      }
    })
      .then(user => {
        res.json({
          status: !!user
        });
      });
  });
}
