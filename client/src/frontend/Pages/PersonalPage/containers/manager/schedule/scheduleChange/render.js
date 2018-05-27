import React from 'react';
import ScheduleControls from '../scheduleControls';
import ChangesList from '../changesList';

export default function(props, state) {
  return (
    <div className="schedule__change">
      <ScheduleControls week={props.week} match={props.match}/>
      <ChangesList pairs={props.pairs} match={props.match}/>
    </div>
  );
}
