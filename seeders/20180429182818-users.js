'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        photo_url: '/img/admin_icon.png',
        name: 'admin',
        surname: 'admin',
        patronymic: 'admin',
        email: 'admin@admin.admin',
        login: 'admin',
        password: 'admin',
        AccessId: 'a',
        CourseId: null,
      },
      {
        name: 'student1',
        surname: 'student1',
        patronymic: 'student1',
        email: 'student1@student.student',
        login: 'student1',
        password: 'student1',
        AccessId: 's',
        CourseId: 4,
        GroupId: 45,
      },
      {
        name: 'student2',
        surname: 'student2',
        patronymic: 'student2',
        email: 'student2@student2.student2',
        login: 'student2',
        password: 'student2',
        AccessId: 's',
        CourseId: 2,
        GroupId: 46
      },
      {
        name: 'boss',
        surname: 'boss',
        patronymic: 'boss',
        email: 'boss@boss.boss',
        login: 'boss',
        password: 'boss',
        AccessId: 'z',
        CourseId: null
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
