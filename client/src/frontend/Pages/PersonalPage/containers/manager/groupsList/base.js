import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getGroupsList
} from '../../../../../actions/managerData';

export default class GroupsList extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getGroupsList: getGroupsList
    }, dispatch);

    fetch.getManagersGroups(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getGroupsList(data);
      });
  }
}
