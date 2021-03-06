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
          if(data.status) {
            this.loginInput.classList.remove('is-invalid');
            this.passInput.classList.remove('is-invalid');
            this.props.changeState();
            this.boundActions.onTryLogin(data);
            switch (data.user.AccessId) {
              case 'a':
                this.props.history.push('/lk/admin/studentsList');
                break;
              case 'z':
                this.props.history.push('/lk/manager/personalPage');
                break;
              case 's':
                this.props.history.push('/lk/student/personalPage');
                break;
              default:

            }
          } else {
            this.loginInput.classList.add('is-invalid');
            this.passInput.classList.add('is-invalid');
          }

        });
    }
  }
}
