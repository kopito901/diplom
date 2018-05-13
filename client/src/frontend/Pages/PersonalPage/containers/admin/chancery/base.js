import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../classes/validate';
import * as fetch from '../../../../../classes/fetch';

import {
  getChancery
} from '../../../../../actions/adminData';

export default class Chancery extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      getChancery: getChancery
    }, dispatch);

    fetch.getChancery()
      .then((data) => {
        this.boundActions.getChancery(data);
      });

    this.editEmail = this.editEmail.bind(this);
  }

  editEmail(e) {
    e.preventDefault();

    if(validate._validateForm(this.editEmailForm)) {

      fetch.editChanceryEmail(this.email.value)
        .then(() => {
          fetch.getChancery()
            .then((data) => {
              this.boundActions.getChancery(data);
            });
        });
    }
  }
}
