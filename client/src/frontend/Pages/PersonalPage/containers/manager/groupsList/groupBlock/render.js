import React from 'react';
import { Link } from 'react-router-dom';

export default function(props, state) {
  let linkSchedule=`/lk/manager/group/schedule/${props.group.id}`;
  return (
    <div className="container-fluid student-block student-block_group">
      <div className="row">
        <div className="col">
          <h2 className="student-block__name">{ props.group.number }</h2>
          <span className="student-block__count">Количество студентов: { props.group.usersCount }</span>
        </div>
        <div className="student-block__links">
          <Link to={linkSchedule} className="student-block__links_item">Расписание</Link>
        </div>
      </div>
    </div>
  );
}
