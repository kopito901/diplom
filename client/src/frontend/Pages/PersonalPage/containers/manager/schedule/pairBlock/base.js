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
    
    this.state = { name : name };

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getSchedule: getSchedule
    }, dispatch);

    this.handleChange = this.handleChange.bind(this);
    this.addPair = this.addPair.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let name = (nextProps.pair[0])? nextProps.pair[0].Discipline.name : '';
    this.setState({
      name: name
    });
    this.pairName.value = name;
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  addPair(e) {
    e.preventDefault();

    if(this.pairName.value !== '') {
      let data = {
        pairCount: this.pairCount.value,
        pairName: this.pairName.value,
        groupId: this.props.match.params.id,
        dayId: this.props.day.id
      };
      this.pairName.classList.remove('is-invalid');

      fetch.addPair(data)
        .then((data) => {
          fetch.getSchedule(this.props.match.params.id)
            .then((data) => {
              this.boundActions.getSchedule(data);
            });
        });
    } else {
      this.pairName.classList.add('is-invalid');
    }
  }
}
