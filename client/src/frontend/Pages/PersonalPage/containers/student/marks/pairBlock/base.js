import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getSchedule
} from '../../../../../../actions/schedule';

export default class PairBlock extends Component {
  constructor(props) {
    super(props);

    let name = (this.props.pair[0])? this.props.pair[0].Discipline.name : '';

    this.state = { name: name };

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getSchedule: getSchedule
    }, dispatch);

    this.handleChangeName = this.handleChangeName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let name = (nextProps.pair[0])? nextProps.pair[0].Discipline.name : '';

    this.pairName.value = name;
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
}
