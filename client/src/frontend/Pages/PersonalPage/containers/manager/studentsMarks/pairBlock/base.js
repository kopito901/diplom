import { Component } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as fetch from '../../../../../../classes/fetch';

import {
  getSchedule
} from '../../../../../../actions/schedule';

export default class PairBlock extends Component {
  constructor(props) {
    super(props);

    let name = (this.props.pair[0])? this.props.pair[0].Discipline.name : '',
      mark = (this.props.mark[0])? this.props.mark[0].mark : 0;

    if(this.props.pair) {
      let changedPair = _.filter(this.props.pair, _.matches({ isChange: true }));
      if(changedPair[0]) {
        name = changedPair[0].Discipline.name;
      }
    }


    this.state = {
      name : name,
      mark : mark
    };

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getSchedule: getSchedule
    }, dispatch);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMark = this.handleChangeMark.bind(this);
    this.addMark = this.addMark.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let name = (nextProps.pair[0])? nextProps.pair[0].Discipline.name : '',
      mark = (nextProps.mark[0])? nextProps.mark[0].mark : 0;

    if(nextProps.pair) {
      let changedPair = _.filter(nextProps.pair, _.matches({ isChange: true }));
      if(changedPair[0]) {
        name = changedPair[0].Discipline.name;
      }
    }

    if(mark === 'н/б') {
      mark = 1;
    }

    (this.markSelect)? this.markSelect.value = mark: '' ;
    this.pairName.value = name;
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeMark(e) {
    this.setState({ mark: e.target.value });
  }

  addMark(e) {
    e.preventDefault();
    let mark = this.markSelect.value;

    if(mark !== '0') {
      let data = {
        date: this.props.date.format('DD/MM/YY'),
        mark: (mark === "1")? 'н/б':mark,
        studentId: this.props.match.params.id,
        disciplineId: this.props.pair[0].DisciplineId
      }

      fetch.setMark(data)
        .then((data) => {
          
        });
    }


  }
}
