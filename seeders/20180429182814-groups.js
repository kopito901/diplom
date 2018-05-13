'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        number: 'Э-1-17',
        DepartmentId: 1,
      },
      {
        number: 'Э-2-17',
        DepartmentId: 1,
      },
      {
        number: 'Э-3-17',
        DepartmentId: 1,
      },
      {
        number: 'ИС-1-17',
        DepartmentId: 2,
      },
      {
        number: 'ИС-2-17',
        DepartmentId: 2,
      },
      {
        number: 'ИС-3-17',
        DepartmentId: 2,
      },
      {
        number: 'П-1-17',
        DepartmentId: 3,
      },
      {
        number: 'П-2-17',
        DepartmentId: 3,
      },
      {
        number: 'П-3-17',
        DepartmentId: 3,
      },
      {
        number: 'КС-1-17',
        DepartmentId: 4,
      },
      {
        number: 'КС-2-17',
        DepartmentId: 4,
      },
      {
        number: 'КС-3-17',
        DepartmentId: 4,
      },
      {
        number: 'И-1-17',
        DepartmentId: 5,
      },
      {
        number: 'И-2-17',
        DepartmentId: 5,
      },
      {
        number: 'И-3-17',
        DepartmentId: 5,
      },
      {
        number: 'БИ-1-17',
        DepartmentId: 6,
      },
      {
        number: 'БИ-2-17',
        DepartmentId: 6,
      },
      {
        number: 'БИ-3-17',
        DepartmentId: 6,
      },
      {
        number: 'Ю-1-17',
        DepartmentId: 7,
      },
      {
        number: 'Ю-2-17',
        DepartmentId: 7,
      },
      {
        number: 'Ю-3-17',
        DepartmentId: 7,
      },
      {
        number: 'ИС50-1-17',
        DepartmentId: 8,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
