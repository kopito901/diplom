import React from 'react';
import _ from 'lodash';
import PairBlock from '../pairBlock';

export default function(props, state) {
  function buildPair() {
    let pairsCount = [1,2,3,4,5],
      pairs = props.pairs;

    return pairsCount.map(function(pairCount) {
      let pair = _.filter(pairs, _.matches({ pairNumber: pairCount }));

      return (
        <PairBlock key={pairCount} pair={pair} pairCount={pairCount} match={props.match} day={props.day}/>
      );
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
      id = (props.currBuilding[0])? props.currBuilding[0].BuildingId : '';

  return (
    <div className="schedule__day">
      <div className="schedule__day_title">
        <h2>{ day.name }</h2>
        <div className="input-group form-group">
          <select className="custom-select form-select" name="dayBuilding" id="dayBuilding" value={id} placeholder="Выберите здание" onChange={ this.selectBuilding } ref={(input) => this.building = input }>
            <option value="" disabled hidden>Выберите здание</option>
            { getBuildings() }
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="studentDepartment">Список</label>
          </div>
        </div>
      </div>
      <div className="schedule__day_main">
        { buildPair() }
      </div>
    </div>
  );
}
