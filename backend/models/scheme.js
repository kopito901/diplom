const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Access =  sequelize.define('Access', {
    id: {
      type: Sequelize.STRING(1),
      primaryKey: true
    },
  });

  const User = sequelize.define('User', {
    photo_url: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    patronymic: Sequelize.STRING,
    email: Sequelize.STRING,
    login: Sequelize.STRING,
    password: Sequelize.STRING
  });

  User.belongsTo(Access);

  return {
    Access, User
  }
}
