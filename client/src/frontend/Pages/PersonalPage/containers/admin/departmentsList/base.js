import { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  getDepartmentsListWithCount
} from '../../../../../actions/adminData';
import * as fetch from '../../../../../classes/fetch';

export default class DepartmentsList extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getDepartmentsListWithCount: getDepartmentsListWithCount
    }, dispatch);

    fetch.getDepartmentsListWithCount()
      .then((data) => {
        this.boundActions.getDepartmentsListWithCount(data.departments);
      });
  }
}
