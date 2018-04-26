import { Component } from 'react';
import { bindActionCreators } from 'redux';
import Validate from '../../classes/validate';
import { tryLogin } from '../../actions/users';
import * as fetch from '../../classes/fetch';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       onTryLogin : tryLogin
     }, dispatch);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(Validate._validateForm(this.authForm)) {
      fetch.loginViaData(this.loginInput.value, this.passInput.value)
        .then(data => {
          this.props.changeState();
          this.boundActions.onTryLogin(data);
        });
    }
  }
}
