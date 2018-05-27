import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getSchedule
} from '../../../../../../actions/schedule';


export default class ChangedPair extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getSchedule: getSchedule
    }, dispatch);

    this.deleteChange = this.deleteChange.bind(this);
  }

  deleteChange(e) {
    e.preventDefault();

    fetch.deleteChange(this.props.pair.id)
      .then((data) => {
        fetch.getSchedule(this.props.match.params.id)
          .then((data) => {
            this.boundActions.getSchedule(data);
          });
      });
  }
}
