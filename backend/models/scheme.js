const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const Access =  sequelize.define('Access', {
      id: {
        type: Sequelize.STRING(1),
        primaryKey: true
      }
    },
    {
      timestamps: false
    }
  );

  const Course = sequelize.define('Course', {
      id: {
        type: Sequelize.SMALLINT,
        primaryKey: true
      }
    },
    {
      timestamps: false
    }
  );

  const Department = sequelize.define('Department', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      number: Sequelize.STRING,
      name: Sequelize.STRING,
      shortName: Sequelize.STRING,
    },
    {
      timestamps: false
    }
  );

  const Group = sequelize.define('Group', {
      number: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const Chancery = sequelize.define('Chancery', {
      email: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const User = sequelize.define('User', {
      photo_url: {
        type: Sequelize.STRING,
        defaultValue: '/img/student_icon.png'
      },
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      patronymic: Sequelize.STRING,
      email: Sequelize.STRING,
      login: Sequelize.STRING,
      password: Sequelize.STRING,
      salt: Sequelize.STRING,
      firstPass: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  Department.hasMany(Group);
  Group.belongsTo(Department);

  User.belongsTo(Access);
  User.belongsTo(Course);
  User.belongsTo(Group)

  return {
    Access, User, Course, Department, Group, Chancery
  }
}
