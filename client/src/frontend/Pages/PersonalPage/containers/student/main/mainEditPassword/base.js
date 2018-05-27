import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import * as validate from '../../../../../../classes/validate';

import {
  refreshCurrentUser
} from '../../../../../../actions/users';

export default class MainEditPassword extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       refreshCurrentUser: refreshCurrentUser
    }, dispatch);

    this.changePassword = this.changePassword.bind(this);
  }

  changePassword(e) {
    e.preventDefault();

    if(validate._validateForm(this.editPassForm)) {
      if(this.newPass.value === this.repeatNewPass.value) {
        let data = {
          id: this.props.currentUser.id,
          oldPass: this.oldPass.value,
          newPass: this.newPass.value
        }

        this.newPass.classList.remove('is-invalid');
        this.repeatNewPass.classList.remove('is-invalid');

        fetch.changePassword(data)
          .then((data) => {
            this.newPass.classList.remove('is-invalid');
            this.repeatNewPass.classList.remove('is-invalid');
            this.oldPass.classList.remove('is-invalid');

            if(data.status && data.status == 200) {
              this.oldPass.value = '';
              this.newPass.value = '';
              this.repeatNewPass.value = '';
            } else {
              this.oldPass.classList.add('is-invalid');
            }
          });
      } else {
        this.newPass.classList.add('is-invalid');
        this.repeatNewPass.classList.add('is-invalid');
      }
    }
  }
}
