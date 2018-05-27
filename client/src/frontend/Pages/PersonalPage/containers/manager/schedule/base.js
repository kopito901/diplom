import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getDays, getBuildings, getSchedule, getBuildingsSchedule
} from '../../../../../actions/schedule';

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getDays: getDays,
      getBuildings: getBuildings,
      getSchedule: getSchedule,
      getBuildingsSchedule: getBuildingsSchedule
    }, dispatch);

    this.boundActions.getSchedule([]);

    fetch.getDays()
      .then((data) => {
        this.boundActions.getDays(data);
      });

    fetch.getBuildings()
      .then((data) => {
        this.boundActions.getBuildings(data);
      });

    fetch.getBuildingsSchedule(this.props.match.params.id)
      .then((data) => {
        this.boundActions.getBuildingsSchedule(data);
      });

    fetch.getSchedule(this.props.match.params.id)
      .then((data) => {
        this.boundActions.getSchedule(data);
      });
    }
}
