'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Departments', [
      {
        id: 1,
        number: '09.02.01',
        name: 'Компьютерные системы и комплексы',
        shortName: 'Э'
      },
      {
        id: 2,
        number: '09.02.02',
        name: 'Компьютерные сети',
        shortName: 'КС'
      },
      {
        id: 3,
        number: '09.02.03',
        name: 'Программирование в компьютерных системах',
        shortName: 'П'
      },
      {
        id: 4,
        number: '09.02.04',
        name: 'Информационные системы (по отраслям)',
        shortName: 'ИС'
      },
      {
        id: 5,
        number: '09.02.05',
        name: 'Прикладная информатика (по отраслям)',
        shortName: 'И'
      },
      {
        id: 6,
        number: '10.02.03',
        name: 'Информационная безопасность автоматизированных систем',
        shortName: 'БИ'
      },
      {
        id: 7,
        number: '40.02.01',
        name: 'Право и организация социального обеспечения',
        shortName: 'Ю'
      },
      {
        id: 8,
        number: 'Первый курс',
        name: 'Отделение первого курса',
        shortName: 'Первый курс'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Departments', null, {});
  }
};
