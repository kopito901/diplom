const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER_NAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql',
    logging: false
  }
);
const Op = Sequelize.op;

const scheme = require('./scheme');

scheme(sequelize);
sequelize.sync();

module.exports.sequelize = sequelize;
module.exports.models = sequelize.models;
