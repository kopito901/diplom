import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import * as fetch from '../../../../../../classes/fetch';

import {
  getDepartmentsGroups
} from '../../../../../../actions/adminData';

export default class AddGroupForm extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getDepartmentsGroups: getDepartmentsGroups
    }, dispatch);

    this.addGroup = this.addGroup.bind(this);
  }

  addGroup(e) {
    e.preventDefault();

    if(validate._validateForm(this.addGroupForm)) {
      let data = {
        id: this.props.department,
        name: this.name.value
      };

      fetch.addGroup(data)
        .then(() => {
          fetch.getGroupsList(this.props.department)
            .then((groups) => {
              this.boundActions.getDepartmentsGroups(groups);
            })
        });
    }
  }
}
