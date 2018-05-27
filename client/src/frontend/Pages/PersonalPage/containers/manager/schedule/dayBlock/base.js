import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getBuildingsSchedule
} from '../../../../../../actions/schedule';

export default class DayBlock extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getBuildingsSchedule: getBuildingsSchedule
    }, dispatch);

    this.selectBuilding = this.selectBuilding.bind(this);
  }

  selectBuilding() {
    let data = {
      groupId: this.props.match.params.id,
      dayId: this.props.day.id,
      buildingId: this.building.value
    };

    fetch.selectBuildingSchedule(data)
      .then(() => {
        fetch.getBuildingsSchedule({ id: this.props.match.params.id })
          .then((data) => {
            this.boundActions.getBuildingsSchedule(data);
          });
      })
  }
}
