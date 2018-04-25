import { Component } from 'react';
import Validate from '../../classes/validate';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(Validate._validateForm(this.authForm)) {
      this.props.onTryLogin(this.loginInput.value, this.passInput.value);
    }
  }

  // getData = async () => {
  //   await fetch('/api/auth', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json'
  //     },
  //     body: new FormData(this.refs.form)
  //   })
  //     .then(res => {
  //       res.json()
  //         .then(data => {
  //           if(data.status) {
  //
  //           }
  //         });
  //     });
  // }
}
