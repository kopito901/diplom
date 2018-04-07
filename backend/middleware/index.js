module.exports = function(app, express) {
  const path = require('path');
  const busboy = require('express-busboy');
  const bodyParser = require('body-parser');
  const router = require('../routes')(app);
  const cookieParser = require('cookie-parser');
  const { sequelize, models } = require('../models');

  sequelize
    .authenticate()
    .then(
      () => console.log('db connected'),
      () => console.log('db not connected')
    )
    .done();

  models.User.findAll().then(user => {
    if(!user[0]) {
      models.User.create({
        name: 'Jora',
        surname: 'qwe',
        email: 'qwe@awe.qwe',
        login: 'Jora',
        password: 'Jora'
      });
    }
  });

  busboy.extend(app);

  app.use(cookieParser());
};
