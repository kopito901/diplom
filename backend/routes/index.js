const { models } = require('../models')
const busboy = require('express-busboy');
const JWT = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authorize = require('../utils/auth');
const Validate = require('../controllers/validate');
const sequelize = require('sequelize');
const crypto = require('../utils/crypto');


module.exports = function(app) {
  busboy.extend(app);
  app.use(cookieParser());
  app.use(authorize.auth);

  app.post('/api/v1/exit', (req, res) => {
    res.clearCookie('token');
    res.json({ status: 200 });
  });

  app.get('/api/v1/users/list', (req, res) => {
    models.User.findAll()
      .then(users => {
        res.json({
          users: users
        });
      });
  });

  app.post('/api/v1/users/auth', (req, res) => {
    console.log(req.body);
    models.User.findAll({
      where: {
        login: req.body.login
      }
    })
      .then((users) => {
        if(!!users) {
          users.map((user, index) => {
            let cryptoObj = crypto.saltedEncrypt(req.body.pass, user.dataValues.salt),
              data = {
                login: req.body.login,
                password: cryptoObj
              };

              if(users[index].dataValues.password === data.password) {
                res.cookie( 'token', 'JWT '+JWT.sign({ id : user.id, access : user.AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
                res.json({
                  status: !!user,
                  user: user
                });
              }
          });
        } else {
          res.json({
            status: !!user,
          });
        }
      });
    // models.User.findOne({
    //   where: {
    //     login: req.body.login,
    //     password: req.body.pass
    //   }
    // })
    //   .then(user => {
    //     if(!!user) {
    //       res.cookie( 'token', 'JWT '+JWT.sign({ id : user.id, access : user.AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
    //       res.json({
    //         status: !!user,
    //         user: user
    //       });
    //     } else {
    //       res.json({
    //         status: !!user,
    //       });
    //     }
    //   });
  });

  app.get('/api/v1/users/authViaCookies', (req, res) => {
    if(req.user) {
      models.User.findById(req.user.id)
        .then(user => {
          res.json({ user: user });
        });
    }
  });

  app.get('/api/v1/departments/list', (req, res) => {
    models.Department.findAll()
      .then(departments => {
        res.json({
          departments: departments
        })
      });
  });

  app.get('/api/v1/departments/listWithCount', (req, res) => {
    let result = [];

    models.Department.findAll()
      .then(departments => {
        departments.forEach((department, index) => {
          models.Group.findAll({
            where: {
              DepartmentId: department.id
            }
          })
            .then((groups) => {
              departments[index].dataValues.groupCount = groups.length;

              models.User.findAll({
                where: {
                  AccessId: 'z'
                },
                include: [
                  {
                    model: models.Group,
                    where: {
                      DepartmentId: department.id
                    }
                  }
                ]
              })
                .then((users) => {
                  if (users[0]) {
                    departments[index].dataValues.manager = users[0];
                  }

                  if((index + 1) >= departments.length) {

                    res.json({
                      departments: departments
                    })
                  }
                });
            })
        });
      });
  });

  app.get('/api/v1/students/list', (req, res) => {
    models.User.findAll({
      where: {
        AccessId: 's'
      },
      include: [
        {
          model: models.Group,
          include: [models.Department]
        }
      ]
    })
      .then(users => {
        res.json({
          users: users
        });
      });
  });

  app.post('/api/v1/groups/list', (req, res) => {
    models.Group.findAll({
      where: {
        DepartmentId: req.body.departmentId
      }
    })
      .then(groups => {
        res.json({
          groups: groups
        });
      });
  });

  app.post('/api/v1/groups/add', (req, res) => {
    let data = req.body;

    if(Validate._validateData(data)) {
      models.Group.create({
        number: data.name,
        DepartmentId: data.id
      })
        .then(() => {
          res.json({ status: 200 });
        });
    }
  });

  app.delete('/api/v1/groups/delete', (req, res) => {
    if(req.user && req.user.access === 'a') {
      let ids = [];

      req.body.data.map((group) => {
        ids.push(group.id);
      });
      models.Group.findAll({
        where : { id : ids }
      })
        .then(groups => {
          groups.map((group) => {
            group.destroy();
          });
        })
        .then((data) => {
          res.json({status:200});
        })
    }
  });

  app.post('/api/v1/students/transfer', (req, res) => {
    if(req.user && req.user.access === 'a') {
      models.User.update({
        CourseId : sequelize.literal('CourseId + 1')
      }, {
        where : {
          AccessId : 's',
          CourseId : {
            $lt : 4
          }
        }
      })
        .then(() => {
          models.User.update({
            AccessId : 'r'
          }, {
            where : {
              CourseId : 4
            }
          })
            .then(() => {
              res.json({ status: 200 });
            })
        })
    }
  });

  app.delete('/api/v1/students/delete', (req, res) => {
    if(req.user && req.user.access === 'a') {
      let ids = [];
      req.body.data.map((user) => {
        ids.push(user.id);
      });
      models.User.findAll({
        where : { id : ids }
      })
        .then(users => {
          users.map((user) => {
            user.destroy();
          });
        })
        .then((data) => {
          res.json({status:200});
        })
    }
  });

  app.post('/api/v1/students/add', (req, res) => {
    let data = req.body,
      firstPass = new Date().getTime().toString(),
      cryptoObj = crypto.encrypt(firstPass);

    if(Validate._validateData(data)) {
      models.User.create({
        name: data.name,
        surname: data.surname,
        patronymic: data.patronymic,
        email: data.email,
        login: data.email.split('@')[0],
        password: cryptoObj.hashedPass,
        salt: cryptoObj.salt,
        firstPass: firstPass,
        AccessId: 's',
        CourseId: data.course,
        GroupId: data.group
      })
        .then(() => {
          res.json({ status: 200 });
        });
    }
  });

  app.post('/api/v1/students/edit', (req, res) => {
    let data = req.body,
      firstPass = new Date().getTime().toString(),
      cryptoObj = crypto.encrypt(firstPass);

    if(Validate._validateData(data)) {
      models.User.findById(data.id)
        .then(user => {
          user.update({
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
            email: data.email,
            login: data.email.split('@')[0],
            password: cryptoObj.hashedPass,
            salt: cryptoObj.salt,
            firstPass: firstPass,
            AccessId: 's',
            CourseId: data.course,
            GroupId: data.group
          })
            .then(() => {
              console.log(123);
              res.json({ status : 200 });
            });
        });
    }
  });

  app.get('/api/v1/managers/list', (req, res) => {
    models.User.findAll({
      where: {
        AccessId: 'z'
      },
      include: [
        {
          model: models.Group,
          include: [models.Department]
        }
      ]
    })
      .then(users => {
        res.json({
          users: users
        });
      });
  });

  app.post('/api/v1/managers/add', (req, res) => {
    let data = req.body,
      firstPass = new Date().getTime().toString(),
      cryptoObj = crypto.encrypt(firstPass);

    if(Validate._validateData(data)) {
      models.Group.findAll({
        where: {
          DepartmentId: data.department
        }
      })
        .then((groups) => {
          let groupId = groups[0].id;

          models.User.create({
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
            email: data.email,
            login: data.email.split('@')[0],
            password: cryptoObj.hashedPass,
            salt: cryptoObj.salt,
            firstPass: firstPass,
            AccessId: 'z',
            CourseId: data.course,
            GroupId: groupId
          })
            .then(() => {
              res.json({ status: 200 });
            });
        });
    }
  });

  app.delete('/api/v1/managers/delete', (req, res) => {
    if(req.user && req.user.access === 'a') {
      let ids = [];

      req.body.data.map((manager) => {
        ids.push(manager.id);
      });

      models.User.findAll({
        where : { id : ids }
      })
        .then((managers) => {
          managers.map((manager) => {
            manager.destroy();
          });
        })
        .then((data) => {
          res.json({status:200});
        })
    }
  });

  app.get('/api/v1/chancery/list', (req, res) => {
    models.Chancery.findAll()
      .then(chancery => {
        res.json(chancery[0]);
      });
  });

  app.post('/api/v1/chancery/edit', (req, res) => {
    let email = req.body.data;
    if(Validate._validateData(email)) {
      models.Chancery.findAll()
        .then((chancery) => {
          chancery[0].update({ email: email })
            .then(() => {
              res.json({status:200});
            });
        });
    }
  });
}
