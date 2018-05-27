import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import * as fetch from '../../../../../../classes/fetch';

import {
  getSchedule
} from '../../../../../../actions/schedule';


export default class ScheduleControls extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getSchedule: getSchedule
    }, dispatch);

    this.addChange = this.addChange.bind(this);
  }

  addChange(e) {
    e.preventDefault();

    if (validate._validateForm(this.form)) {
      let data = {
        pairCount: this.pairCount.value,
        groupId: this.props.match.params.id,
        pairName: this.pair.value,
        dayId: this.day.value,
        isChange: true
      };

      fetch.addPair(data)
        .then((data) => {
          fetch.getSchedule(this.props.match.params.id)
            .then((data) => {
              this.boundActions.getSchedule(data);
            });
        });
    }
  }
}
