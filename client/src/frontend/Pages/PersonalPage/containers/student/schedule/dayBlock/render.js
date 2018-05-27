import React from 'react';
import _ from 'lodash';
import PairBlock from '../pairBlock';

export default function(props, state) {
  function buildPair() {
    let pairsCount = [1,2,3,4,5],
      pairs = props.pairs;

    return pairsCount.map(function(pairCount) {
      let pair = _.filter(pairs, _.matches({ pairNumber: pairCount }));

      if(pair[0]) {
        return (
          <PairBlock key={pairCount} pair={pair} pairCount={pairCount} match={props.match} day={props.day}/>
        );
      }
    });
  }

  function getBuildings() {
    let buildings = props.buildings || [];

    return buildings.map(function(building) {
      return (
        <option value={building.id} key={building.id}>{building.name}</option>
      );
    });
  }

  let day = props.day,
      id = (props.currBuilding[0])? props.currBuilding[0].BuildingId : '',
      buildingName = (props.currBuilding[0])? props.currBuilding[0].Building.name : 'Не выбрано';

  return (
    <div className="schedule__day">
      <div className="schedule__day_title">
        <h2>{ day.name }</h2>
        <h3 className="schedule__day_building">{ buildingName }</h3>
      </div>
      <div className="schedule__day_main">
        { buildPair() }
      </div>
    </div>
  );
}
