import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getStudentsList
} from '../../../../../../actions/managerData';

export default class StudentBlock extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getStudentsList: getStudentsList
    }, dispatch);

    this.changeBase = this.changeBase.bind(this);
  }

  changeBase() {
    let data = {
      studentId: this.props.student.id,
      practicId: this.practic.value
    }

    fetch.updateBasePractic(data)
      .then((data) => {
        fetch.getManagersStudents(this.props.student.Group.DepartmentId)
          .then((data) => {
            this.boundActions.getStudentsList(data.users);
          });
      });
  }
}
