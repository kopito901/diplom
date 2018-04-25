import { Component } from 'react';
import Validate from '../../../../classes/validate';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }

    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if(Validate._validateForm(this.refs.form)) {
      this.getData();
    }
  }
}
