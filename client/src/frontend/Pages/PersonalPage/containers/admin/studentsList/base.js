import { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  getDepartmentsList, getGroupsList
} from '../../../../../actions/adminData';
import * as fetch from '../../../../../classes/fetch';

export default class StudentsList extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getDepartmentsList: getDepartmentsList,
       getGroupsList: getGroupsList
    }, dispatch);

    fetch.getDepartmentsList()
      .then((departments) => {
        this.boundActions.getDepartmentsList(departments);
      })

      fetch.getGroupsList(1)
        .then(groups => {
          this.boundActions.getGroupsList(groups); 
        })

  }
}
