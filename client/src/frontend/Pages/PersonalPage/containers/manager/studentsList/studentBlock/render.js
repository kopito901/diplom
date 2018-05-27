import React from 'react';
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

  let linkMarks=`/lk/manager/student/marks/${props.student.id}`,
    linkAttendance=`/lk/manager/student/attendance/${props.student.id}`;

  return (
    <div className="container-fluid student-block">
      <div className="row">
        <div className="col-md-1">
          <img src={ props.student.photo_url } alt="logo" className="student-block__avatar"/>
        </div>
        <div className="col">
          <h2 className="student-block__name">{ props.student.name } { props.student.surname } { props.student.patronymic }</h2>
          <p className="student-block__group">Группа: { props.student.Group.number }</p>
          <p className="student-block__email">Email: { props.student.email }</p>
          { getPractic() }
          <p className="student-block__course">Курс: { props.student.CourseId }</p>
        </div>
        <div className="student-block__links">
          <Link to={linkMarks} className="student-block__links_item">Успеваемость</Link>
          { selectPractic(this) }
        </div>
      </div>
    </div>
  );
}
