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

  busboy.extend(app);

  app.use(cookieParser());
};
