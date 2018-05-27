import React from 'react';
import _ from 'lodash';
import * as time from '../../../../../classes/time';
import DayBlock from './dayBlock';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export default function(props, state) {
  function setMarksWeeks() {
    let marks = props.schedule.currentMarks,
        currentWeekRange = props.schedule.currentWeek,
        returnedArr = [];

    marks.map((mark) => {
      let date = moment(mark.date, 'DD/MM/YY'),
        currentWeek = '',
        val = '';

      if(currentWeekRange.contains(date)) {
        currentWeek = currentWeekRange;
        val = currentWeek.start.format('DD/MM/YY') + ' - ' + currentWeek.end.format('DD/MM/YY');
      } else {
        currentWeek = time.getRange(date);
        val = currentWeek.start.format('DD/MM/YY') + ' - ' + currentWeek.end.format('DD/MM/YY');
      }

      if(returnedArr.indexOf(val) == -1) {
        returnedArr.push(val);
      }
    });


    return returnedArr.map((item, index) => {
      if(index === 0) {
        return (
          <option value={item} key={index}>{item}</option>
        );
      } else {
        return (
          <option value={item} key={index}>{item}</option>
        );
      }
    });
  }

  function buildWeek() {
    let week = props.schedule.days,
        schedule = props.schedule.pairs,
        buildings = props.schedule.buildingsSchedule,
        currentWeekRange = props.schedule.currentWeek,
        marks = props.schedule.currentMarks,
        days = [];

    if(!!currentWeekRange.start) {
      for (let day of currentWeekRange.by('day')) {
        days.push(day);
      }
    }

    return week.map(function(day, index) {
      let pairs = _.filter(schedule, _.matches({ DayId: day.id })),
          currBuilding = _.filter(buildings, _.matches({ DayId: day.id })),
          dayMarks = _.filter(marks, _.matches({ date: days[index].format("DD/MM/YY") }));

      return (
        <DayBlock day={day} date={days[index]} pairs={pairs} marks={dayMarks} key={ day.id } match={props.match} buildings={props.schedule.buildings} currBuilding={currBuilding} />
      );
    });
  }

  return (
    <div className="schedule">
      <h2 className="title">Оценки</h2>
      <div className="input-group form-group">
        <select className="custom-select form-select" name="week" id="week" defaultValue={state.currentWeek} onChange={this.changeWeek} ref={(input) => this.week = input }>
        { setMarksWeeks() }
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="week">Неделя</label>
        </div>
      </div>
      <div className="schedule__week">
        { buildWeek() }
      </div>
    </div>
  );
}
