module.exports = function(app, express) {
  const path = require('path');
  const busboy = require('express-busboy');
  const router = require('../routes')(app);
  const cookieParser = require('cookie-parser');


  busboy.extend(app, {
    upload : true,
    path: 'uploads',
    mimeTypeLimit: ['image/jpeg', 'image/png']
  });

  app.use(cookieParser());
};