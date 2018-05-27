import React from 'react';
import _ from 'lodash';
import DayBlock from './dayBlock'

export default function(props, state) {
  function buildWeek() {
    let week = props.schedule.days,
        schedule = props.schedule.pairs,
        buildings = props.schedule.buildingsSchedule;

    return week.map(function(day, index) {
      let pairs = _.filter(schedule, _.matches({ DayId: day.id })),
          currBuilding = _.filter(buildings, _.matches({ DayId: day.id }));

      return (
        <DayBlock day={day} pairs={pairs} key={ day.id } match={props.match} buildings={props.schedule.buildings} currBuilding={currBuilding} />
      );
    });
  }

  let changedPairs = [];

  props.schedule.pairs.map((pair) => {
    if(pair.isChange) {
      changedPairs.push(pair);
    }
  });

  return (
    <div className="schedule">
      <h2 className="title">Расписание занятий</h2>
      <div className="schedule__week">
        { buildWeek() }
      </div>
    </div>
  );
}
