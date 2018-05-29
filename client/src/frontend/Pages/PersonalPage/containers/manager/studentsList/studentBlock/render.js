import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function(props, state) {
  function getPractics() {
    let practics = props.practics;

    return practics.map((practic) => {
      return (
        <option value={practic.id} key={practic.id}>{practic.title}</option>
      );
    });
  }

  function selectPractic(self) {
    let course = props.student.CourseId;

    if(course == 4) {
      return (
        <div className="input-group form-group">
          <select className="custom-select form-select" name="practic" id="practic" defaultValue={props.student.PracticId} onChange={self.changeBase} ref={(input) => self.practic = input }>
            { getPractics() }
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="practic">База практики</label>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  function getPractic() {
    let practic = props.student.Practic;

    if(practic) {
      return (
        <p className="student-block__practic">База практики: { practic.title }</p>
      );
    }
  }

  function prepareChartData() {
    let marks = state.marks,
      counterObj = {
        'н/б': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
      },
      res = [],
      resKeys = [];

    marks.map((mark) => {
      counterObj[mark.mark] += 1;
    });

    _.forIn(counterObj, (value, key) => {
      res.push(value);
      resKeys.push(key);
    });

    return {
      res: res,
      resKeys: resKeys
    }
  }

  function buildChart() {
    let res = prepareChartData(),
      data = {
        datasets:[{
          data: res.res,
          backgroundColor: ['#f8d7da','#fff3cd','#cce5ff','#d4edda','#d6d8d9']
        }],
        labels: res.resKeys
      };

    return (
      <Doughnut data={data} />
    );
  }

  let linkMarks=`/lk/manager/student/marks/${props.student.id}`,
    linkRoutes=`/lk/manager/student/route/${props.student.id}`;



  return (
    <div className="container-fluid student-block">
      <div className="row">
        <div className="col-md-1">
          <img src={ props.student.photo_url } alt="logo" className="student-block__avatar"/>
        </div>
        <div className="col-md-5">
          <h2 className="student-block__name">{ props.student.name } { props.student.surname } { props.student.patronymic }</h2>
          <p className="student-block__group">Группа: { props.student.Group.number }</p>
          <p className="student-block__email">Email: { props.student.email }</p>
          { getPractic() }
          <p className="student-block__course">Курс: { props.student.CourseId }</p>
        </div>
        <div className="col-md-3">
          { buildChart() }
        </div>
        <div className="student-block__links col-md-3">
          <Link to={linkMarks} className="student-block__links_item">Успеваемость</Link>
          <Link to={linkRoutes} className="student-block__links_item">Направления на пересдачи</Link>
          { selectPractic(this) }
        </div>
      </div>
    </div>
  );
}
