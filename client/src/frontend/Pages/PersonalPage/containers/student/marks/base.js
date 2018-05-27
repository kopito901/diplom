import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';
import * as Time from '../../../../../classes/time';


import {
  getDays, getBuildings, getSchedule, getBuildingsSchedule, setCurrentWeek, getMarks
} from '../../../../../actions/schedule';

export default class Marks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeek: ''
    };

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getDays: getDays,
      getSchedule: getSchedule,
      getBuildingsSchedule: getBuildingsSchedule,
      setCurrentWeek: setCurrentWeek,
      getMarks: getMarks,
      getBuildings: getBuildings
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

    fetch.getBuildingsSchedule(this.props.users.currentUser.GroupId)
      .then((data) => {
        this.boundActions.getBuildingsSchedule(data);
      });

    fetch.getSchedule(this.props.users.currentUser.GroupId)
      .then((data) => {
        this.boundActions.getSchedule(data);
      });

    fetch.getMarks(this.props.users.currentUser.id)
      .then((data) => {
        this.boundActions.getMarks(data);
      });

    this.boundActions.setCurrentWeek(Time.getCurrentRange());
    this.changeWeek = this.changeWeek.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let currentWeekRange = (nextProps.schedule.currentWeek)? nextProps.schedule.currentWeek: false,
      val = (currentWeekRange.start)? currentWeekRange.start.format('DD/MM/YY') + ' - ' + currentWeekRange.end.format('DD/MM/YY'): '';

    this.setState({
      currentWeek: val
    });

    this.week.value = val;
  }

  changeWeek(e) {
    let val = this.week.value,
      valArr = val.split(' - ');

    this.boundActions.setCurrentWeek(Time.setRange(valArr));
    this.setState({currentWeek: val})
  }
}
