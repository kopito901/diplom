import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getStudentsList
} from '../../../../../actions/managerData';

import {
  getPractics
} from '../../../../../actions/practics';

export default class StudentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: []
    }

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getStudentsList: getStudentsList,
       getPractics: getPractics
    }, dispatch);

    fetch.getManagersStudents(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getStudentsList(data.users);
      });

    fetch.getPracticsList(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getPractics(data);
      });
  }
}
