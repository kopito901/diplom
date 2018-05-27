'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Days', [
      {
        id: 1,
        name: 'Понедельник'
      },
      {
        id: 2,
        name: 'Вторник'
      },
      {
        id: 3,
        name: 'Среда'
      },
      {
        id: 4,
        name: 'Четверг'
      },
      {
        id: 5,
        name: 'Пятница'
      },
      {
        id: 6,
        name: 'Суббота'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Days', null, {});
  }
};
