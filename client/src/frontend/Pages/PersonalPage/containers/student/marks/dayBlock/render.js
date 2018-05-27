import React from 'react';
import _ from 'lodash';
import PairBlock from '../pairBlock';

export default function(props, state) {
  function buildPair() {
    let pairsCount = [1,2,3,4,5],
      pairs = props.pairs,
      marks = props.marks;

    return pairsCount.map(function(pairCount) {
      let pair = _.filter(pairs, _.matches({ pairNumber: pairCount })),
          currentMark = (pair[0])? _.filter(marks, _.matches({ DisciplineId: pair[0].DisciplineId })): '';

      return (
        <PairBlock key={pairCount} pair={pair} date={props.date} mark={currentMark} pairCount={pairCount} match={props.match} day={props.day}/>
      );
    });
  }

  let day = props.day,
      buildingName = (props.currBuilding[0])? props.currBuilding[0].Building.name : 'Не выбрано',
      currentDate = props.date.format('DD/MM/YY');

  return (
    <div className="schedule__day">
      <div className="schedule__day_title">
        <h2>{ day.name }</h2>
        <h3 className="schedule__day_date">{ currentDate }</h3>
        <h3 className="schedule__day_building">{ buildingName }</h3>
      </div>
      <div className="schedule__day_main">
        { buildPair() }
      </div>
    </div>
  );
}
