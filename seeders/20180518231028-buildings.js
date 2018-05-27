'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Buildings', [
      {
        id: 1,
        name: 'Нахимовский пр-т'
      },
      {
        id: 2,
        name: 'Неженская ул.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Buildings', null, {});
  }
};
