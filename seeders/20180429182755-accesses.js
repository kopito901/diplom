'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Accesses', [
      {
        id: 'a'
      },
      {
        id: 's'
      },
      {
        id: 'r'
      },
      {
        id: 'z'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Accesses', null, {});
  }
};
