import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import * as validate from '../../../../../../classes/validate';

import {
  refreshCurrentUser
} from '../../../../../../actions/users';


export default class MainEditAvatar extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       refreshCurrentUser: refreshCurrentUser
    }, dispatch);

    this.uploadAvatar = this.uploadAvatar.bind(this);
  }

  uploadAvatar(e) {
    e.preventDefault();

    if(this.file.files[0]) {
      let format = this.file.files[0].name.split('.')[this.file.files[0].name.split('.').length - 1];

      if(format === 'jpg' || format === 'jpeg' || format === 'png') {
        this.file.classList.remove('is-invalid');
        fetch.uploadImage(this.editAvatarForm, this.props.currentUser.id)
          .then((data) => {
            fetch.refreshCurrentUser(this.props.currentUser.id)
              .then((data) => {
                this.boundActions.refreshCurrentUser(data);
              });
          })
      } else {
        this.file.classList.add('is-invalid');
      }
    } else {
      this.file.classList.add('is-invalid');
    }
  }
}
