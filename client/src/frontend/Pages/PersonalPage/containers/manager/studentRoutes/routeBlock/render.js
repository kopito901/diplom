import React from 'react';
import { Link } from 'react-router-dom';

export default function(props, state) {
  console.log(props.route);
  return (
    <div className="container-fluid student-block">
      <div className="row">
        <div className="col">
          <p className="student-block__group">Направление на пересдачу: {props.route.typeRoute}</p>
          <p className="student-block__group">Преподаватель: {props.route.teacher}</p>
          <p className="student-block__group">Дата окончания направления: {props.route.dateEnd}</p>
          <p className="student-block__group">Дисциплина: {props.route.Discipline.name}</p>
        </div>
        <div className="student-block__links">
          <button onClick={ this.deleteRoute }
            ref={(button) => this.submit = button }
            className='btn btn-secondary btn-sm'
            >Удалить базу практики</button>
        </div>
      </div>
    </div>
  );
}
