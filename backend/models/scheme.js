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

  const Discipline = sequelize.define('Discipline', {
      name: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const Day = sequelize.define('Day', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const Building = sequelize.define('Building', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const BuildingSchedule = sequelize.define('BuildingSchedule', {

    },
    {
      timestamps: false
    }
  );

  const Schedule = sequelize.define('Schedule', {
      pairNumber: Sequelize.INTEGER,
      isChange: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  );

  const Marks = sequelize.define('Marks', {
      date: Sequelize.STRING,
      mark: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  const Practic = sequelize.define('Practic', {
      title: Sequelize.STRING,
      photo_url: Sequelize.STRING,
      adress: Sequelize.STRING,
      phone: Sequelize.STRING,
      email: Sequelize.STRING,
      site: Sequelize.STRING,
    },
    {
      timestamps: false
    }
  );

  const Album = sequelize.define('Album', {
      photo_url: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.STRING
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

  const DepartmentInfo = sequelize.define('DepartmentInfo', {
      title: Sequelize.STRING,
      text: Sequelize.TEXT,
      isAlbumActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: false
    }
  );

  const Route = sequelize.define('Route', {
      teacher: Sequelize.STRING,
      typeRoute: Sequelize.STRING,
      dateEnd: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );

  Department.hasMany(Group);
  Group.belongsTo(Department);

  Schedule.belongsTo(Group);
  Schedule.belongsTo(Discipline);
  Schedule.belongsTo(Day);

  Album.belongsTo(Department);

  BuildingSchedule.belongsTo(Day);
  BuildingSchedule.belongsTo(Group);
  BuildingSchedule.belongsTo(Building, {
    foreignKey: {
      field: 'BuildingId',
      allowNull: false,
      defaultValue: 1
    },
    onDelete: 'cascade'
  });

  Practic.belongsTo(Department);

  Marks.belongsTo(Discipline);
  Marks.belongsTo(User);

  DepartmentInfo.belongsTo(Department);

  Route.belongsTo(User);
  Route.belongsTo(Discipline);

  User.belongsTo(Access);
  User.belongsTo(Course);
  User.belongsTo(Group);
  User.belongsTo(Practic);

  return {
    Access, User, Course, Department, Group, 
    Chancery, Discipline, Marks, Schedule, Day,
    Building, Practic, Album, DepartmentInfo, Route
  }
}
