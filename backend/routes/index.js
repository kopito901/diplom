const { models } = require('../models')
var http = require('http');
const busboy = require('express-busboy');
const JWT = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authorize = require('../utils/auth');
const Validate = require('../controllers/validate');
const sequelize = require('sequelize');
const crypto = require('../utils/crypto');
const fetchUrl = require("fetch").fetchUrl;
const _ = require('lodash');

module.exports = function(app) {
  busboy.extend(app,
        {
            upload : true,
            path: 'client/public/uploads',
            mimeTypeLimit: ['image/jpeg', 'image/png']
        });
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
    // res.cookie( 'token', 'JWT '+JWT.sign({ id : users[0].id, access : users[0].AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
    // res.json({
    //   status: true,
    //   user: users[0]
    // });
    models.User.findAll({
      where: {
        login: req.body.login
      },
      include: [
        {
          model: models.Group,
          include: [models.Department]
        },
        {
          model: models.Practic
        }
      ]
    })
      .then((users) => {
        if(users[0] !== undefined) {
          if(!!users) {
            res.cookie( 'token', 'JWT '+JWT.sign({ id : users[0].id, access : users[0].AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
            res.json({
              status: true,
              user: users[0]
            });
            // users.map((user, index) => {
            //   let cryptoObj = crypto.saltedEncrypt(req.body.pass, user.dataValues.salt),
            //     data = {
            //       login: req.body.login,
            //       password: cryptoObj
            //     };
            //
            //     if(users[index].dataValues.password === data.password) {
            //       res.cookie( 'token', 'JWT '+JWT.sign({ id : user.id, access : user.AccessId }, process.env.JWT_SECRET, { expiresIn : '2d'}));
            //       res.json({
            //         status: true,
            //         user: user
            //       });
            //     } else {
            //       res.json({
            //         status: false
            //       });
            //     }
            // });
          } else {
            res.json({
              status: false
            });
          }
        } else {
          res.json({
            status: false
          });
        }
      });
  });

  app.get('/api/v1/users/authViaCookies', (req, res) => {
    if(req.user) {
      models.User.findById(req.user.id, {
        include: [
          {
            model: models.Group,
            include: [models.Department]
          },
          {
            model: models.Practic
          }
        ]
      })
        .then(user => {
          res.json({ user: user });
        });
    }
  });

  app.post('/api/v1/users/changePassword', (req, res) => {
    if(req.user) {
      let data = req.body;

      models.User.findById(data.id)
        .then((user) => {
          let hashedOldPass = crypto.saltedEncrypt(data.oldPass, user.dataValues.salt);

          if(user.dataValues.password == hashedOldPass) {
            let cryptoObj = crypto.encrypt(data.newPass);

            user.update({
              salt: cryptoObj.salt,
              password: cryptoObj.hashedPass
            })
              .then(() => {
                res.json({ status: 200 });
              });
          } else {
            res.json({ status: 501 });
          }
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/users/currentUser', (req, res) => {
    if(req.user) {
      let id = req.body;

      models.User.findById(id,{
        include: [
          {
            model: models.Group,
            include: [models.Department]
          },
          {
            model: models.Practic
          }
        ]
      })
        .then((user) => {
          res.json(user);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/users/uploadImage', (req, res) => {
    if(req.user) {
      let id = req.body.id,
        file = req.files.avatar;

      models.User.findById(id)
        .then((user) => {
          user.update({
            photo_url: file.file.replace('client/public', '')
          })
            .then(() => {
              res.json({ status: 200 });
            })
        });
    } else {
      res.json({ status: 403 });
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
        },
        {
          model: models.Practic
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
    if(req.user && req.user.access === 'a') {
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
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/groups/schedule', (req, res) => {
    if(req.user) {
      let id = req.body.id;

      models.Schedule.findAll({
        where: {
          GroupId: id
        },
        include: [models.Discipline, models.Day]
      })
        .then((schedules) => {
          res.json(schedules);
        });
    } else {
      res.json({ status: 403 });
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
      } else {
        res.json({ status: 403 });
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
    } else {
      res.json({ status: 403 });
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
      } else {
        res.json({ status: 403 });
      }
  });

  app.post('/api/v1/students/updateBase', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let data = req.body;

      models.User.findById(data.studentId)
        .then((user) => {
          user.update({
            PracticId: data.practicId
          })
          res.json({ status: 200 });
        });
      } else {
        res.json({ status: 403 });
      }
  });

  app.post('/api/v1/students/add', (req, res) => {
    if(req.user && req.user.access === 'a') {
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
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/students/edit', (req, res) => {
    if(req.user && req.user.access === 'a') {
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
                res.json({ status : 200 });
              });
          });
      }
    } else {
      res.json({ status: 403 });
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
    if(req.user && req.user.access === 'a') {
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
      } else {
        res.json({ status: 403 });
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
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/classNamedentsList', (req, res) => {
    if(req.user) {
      models.User.findAll({
        where: {
          AccessId: 's'
        },
        include: [
          {
            model: models.Group,
            where: {
              DepartmentId: req.body.departmentId
            },
            include: [
              {
                model: models.Department
              }
            ]
          }
        ]
      })
        .then((users) => {
          res.json(users);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/student/setMark', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let data = req.body;
      models.Marks.findAll({
        where: {
          date: data.date,
          UserId: data.studentId,
          DisciplineId: data.disciplineId
        }
      })
        .then((marks) => {
          if(!!marks[0]) {
            marks.map((mark) => {
              mark.destroy();
            });

            models.Marks.create({
              date: data.date,
              mark: data.mark,
              UserId: data.studentId,
              DisciplineId: data.disciplineId
            })
              .then((data) => {
                res.json(data);
              });
          } else {
            models.Marks.create({
              date: data.date,
              mark: data.mark,
              UserId: data.studentId,
              DisciplineId: data.disciplineId
            })
              .then((data) => {
                res.json(data);
              });
          }
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/album/list', (req, res) => {
    if(req.user) {
      let id = req.body;

      models.Album.findAll({
        where: {
          DepartmentId: id
        }
      })
        .then((data) => {
          res.json(data);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/album/add', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let data = req.body,
        file = req.files.photo;

      models.Album.create({
        photo_url: file.file.replace('client/public', ''),
        title: data.title,
        description: data.description,
        DepartmentId: data.id
      })
        .then((data) => {
          res.json({ status: 200 });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/album/delete', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let id = req.body.id;

      models.Album.findById(id)
        .then((album) => {
          album.destroy();
          res.json({ status: 200 });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/student/marksList', (req, res) => {
    if(req.user) {
      let data = req.body;

      models.Marks.findAll({
        where: {
          UserId: data.id
        }
      })
        .then((data) => {
          res.json(data)
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/studentsList', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let data = req.body;
      models.User.findAll({
        where: {
          AccessId: 's'
        },
        include: [
          {
            model: models.Group,
            where: {
              DepartmentId: data.departmentId
            },
            include: [models.Department]
          },
          {
            model: models.Practic
          }
        ]
      })
        .then(users => {
          res.json({
            users: users
          });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/practics/add', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let data = req.body,
        file = (req.files)? req.files.photo: '';

      models.Practic.create({
        title: data.title,
        adress: data.adress,
        phone: data.phone,
        email: data.email,
        site: data.site,
        photo_url: (file)? file.file.replace('client/public', ''): '',
        DepartmentId: data.id
      })
        .then((data) => {
          res.json({ status: 200 });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/practics/delete', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let id = req.body.id;

      models.Practic.findById(id)
        .then((practic) => {
          practic.destroy();
          res.json({ status: 200 });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/practics/list', (req, res) => {
    if(req.user) {
      let id = req.body.departmentId;

      models.Practic.findAll({
        where: {
          DepartmentId: id
        }
      })
        .then((data) => {
          res.json(data);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/groupsList', (req, res) => {
    if(req.user) {
      let id = req.body.departmentId,
        resData = [];

      models.Group.findAll({
        where: {
          DepartmentId: id
        }
      })
        .then((groups) => {
          groups.map((group, index) => {
            let currentGroup = group.dataValues;
            models.User.findAll({
              where: {
                AccessId: 's',
                GroupId: currentGroup.id
              }
            })
              .then((users) => {
                currentGroup.usersCount = users.length;

                resData.push(currentGroup);

                if(resData.length === groups.length) {
                  res.json(resData);
                }
              })
          });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/group/getBuildingSchedule', (req, res) => {
    if(req.user) {
      models.BuildingSchedule.findAll({
        where: {
          GroupId: req.body.id
        },
        include: [
          {
            model: models.Building
          }
        ]
      })
        .then((data) => {
          res.json(data);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/group/buildingSchedule', (req, res) => {
    if(req.user && req.user.access === 'z') {
      models.BuildingSchedule.findOne({
        where: {
          GroupId: req.body.groupId,
          DayId: req.body.dayId
        }
      })
        .then((data) => {
          if(data) {
            data.update({
              BuildingId: req.body.buildingId
            })
              .then(() => {
                res.json({ status: 200 });
              });
          } else {
            models.BuildingSchedule.create({
              GroupId: req.body.groupId,
              DayId: req.body.dayId,
              BuildingId: req.body.buildingId
            })
              .then(() => {
                res.json({ status: 200 });
              });
          }
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/group/addPair', (req, res) => {
    function addPair(discipline, body) {
      let isChange = (body.isChange)? true:false;
      models.Schedule.create({
        pairNumber: body.pairCount,
        GroupId: body.groupId,
        DisciplineId: discipline.id,
        DayId: body.dayId,
        isChange: isChange
      })
      .then(() => {
        res.json({ status: 200 });
      })
    }

    if(req.user && req.user.access === 'z') {
      if(req.body.isChange) {
          models.Schedule.findOne({
            where: {
              pairNumber: req.body.pairCount,
              GroupId: req.body.groupId,
              DayId: req.body.dayId,
              isChange: true
            }
          })
            .then((data) => {
              if(data) {
                data.destroy()
              }
              models.Discipline.findOne({
                where: {
                  name: req.body.pairName
                }
              })
                .then((data) => {
                  if(data) {
                    let discipline = data;
                    addPair(data, req.body);
                  } else {
                    models.Discipline.create({
                      name: req.body.pairName
                    })
                      .then((data) => {
                        addPair(data, req.body);
                      });
                  }
                });
            });
      } else {
        models.Schedule.findOne({
          where: {
            pairNumber: req.body.pairCount,
            GroupId: req.body.groupId,
            DayId: req.body.dayId
          }
        })
          .then((data) => {
            if(data) {
              data.destroy();
              models.Discipline.findOne({
                where: {
                  name: req.body.pairName
                }
              })
                .then((data) => {
                  if(data) {
                    let discipline = data;
                    addPair(data, req.body);
                  } else {
                    models.Discipline.create({
                      name: req.body.pairName
                    })
                      .then((data) => {
                        addPair(data, req.body);
                      });
                  }
                });
            } else {
              models.Discipline.findOne({
                where: {
                  name: req.body.pairName
                }
              })
                .then((data) => {
                  if(data) {
                    let discipline = data;
                    addPair(data, req.body);
                  } else {
                    models.Discipline.create({
                      name: req.body.pairName
                    })
                      .then((data) => {
                        addPair(data, req.body);
                      });
                  }
                });
            }
          })
      }
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/managers/group/deleteChange', (req, res) => {
    if(req.user && req.user.access === 'z') {
      let id = req.body;

      models.Schedule.findById(id)
        .then((data) => {
          data.destroy()
          res.json({ status: 200 });
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/student/boss', (req, res) => {
    if(req.user) {
      models.User.findOne({
        where: {
          AccessId: 'z'
        },
        include: [
          {
            model: models.Group,
            where: {
              DepartmentId: req.body.id
            }
          }
        ]
      })
        .then((data) => {
          res.json(data);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.get('/api/v1/chancery/list', (req, res) => {
    if(req.user) {
      models.Chancery.findAll()
        .then(chancery => {
          res.json(chancery[0]);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/chancery/edit', (req, res) => {
    if(req.user && req.user.access === 'a') {
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
    } else {
      res.json({ status: 403 });
    }
  });

  app.post('/api/v1/chancery/sendEmail', (req, res) => {
    if(req.user) {
      function sendEmail(body) {
        let url = 'https://api.unisender.com/ru/api/sendEmail?format=json&api_key=6uuku7szrq3oq8mtdtp5hpbcp6ama6ccgs8hypie';

        url += '&email= <gkopylov@team.amocrm.com>';
        url += '&sender_name=Kancelyaria';
        url += '&sender_email=kopito901@gmail.com';
        url += '&subject=spravka';
        url += '&body=' + body;
        url += '&list_id=13818777';

        fetchUrl('https://api.unisender.com/ru/api/sendEmail?format=json&api_key=6uuku7szrq3oq8mtdtp5hpbcp6ama6ccgs8hypie&email=Jora <st_g.a.kopilov@mpt.ru>&sender_name=asd&sender_email=kopito901@gmail.com&subject=qwe&body=<h1>aaa</h1>&list_id=13818777',(err, meta, body)=> {
          console.log(body.toString());
          res.json({ status: 200 });
        })
      }

      let data = req.body,
        body = `<p>Группа: ${data.group} <br />Студент: ${data.group} <br />Описание: ${data.description}</p>`

      sendEmail(body);
      // sendEmail('<gkopylov@team.amocrm.com>', 'asd', 'kopito901@gmail.com', 'qwe', '<h1>aaa</h1>', '13818777');
    } else {
      res.json({ status: 403 });
    }
  });

  app.get('/api/v1/days/list', (req, res) => {
    if(req.user) {
      models.Day.findAll()
        .then(days => {
          res.json(days);
        });
    } else {
      res.json({ status: 403 });
    }
  });

  app.get('/api/v1/buildings/list', (req, res) => {
    if(req.user) {
      models.Building.findAll()
        .then(buildings => {
          res.json(buildings);
        });
    } else {
      res.json({ status: 403 });
    }
  });
}
