import { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  getDepartmentsGroups
} from '../../../../../actions/adminData';
import * as fetch from '../../../../../classes/fetch';

export default class Department extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getDepartmentsGroups: getDepartmentsGroups
    }, dispatch);

    fetch.getGroupsList(this.props.match.params.number)
      .then((groups) => {
        this.boundActions.getDepartmentsGroups(groups);
      })
  }
}
