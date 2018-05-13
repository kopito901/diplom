import { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  getManagersList, getDepartmentsList
} from '../../../../../actions/adminData';
import * as fetch from '../../../../../classes/fetch';


export default class ManagersList extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getManagersList: getManagersList,
      getDepartmentsList: getDepartmentsList
    }, dispatch);

    fetch.getManagersList()
      .then((data) => {
        this.boundActions.getManagersList({ managers: data.users });
      });

    fetch.getDepartmentsList()
      .then((data) => {
        this.boundActions.getDepartmentsList(data);
      });
  }
}
