import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import {
  addPickedUser, removePickedUser, getEditGroupsList
} from '../../../../../../actions/adminData';


export default class UserRow extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       addPickedUser: addPickedUser,
       removePickedUser: removePickedUser,
       getEditGroupsList: getEditGroupsList
     }, dispatch);

    this.pickUser = this.pickUser.bind(this);
  }

  pickUser(e) {
    if(e.target.tagName !== 'INPUT') {
      this.checkBox.checked = !this.checkBox.checked
    }
    if(this.checkBox.checked) {
      this.boundActions.addPickedUser(this.props.student);
      fetch.getGroupsList(this.props.student.Group.DepartmentId)
        .then(groups => {
          this.boundActions.getEditGroupsList(groups);
        });
    } else {
      this.boundActions.removePickedUser(this.props.student);
    }
  }
}
