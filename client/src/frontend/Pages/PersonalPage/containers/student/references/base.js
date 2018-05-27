import { Component } from 'react';
import * as fetch from '../../../../../classes/fetch';
import * as validate from '../../../../../classes/validate';

export default class References extends Component {
  constructor(props) {
    super(props);

    this.addApplication = this.addApplication.bind(this);
  }

  addApplication(e) {
    e.preventDefault();

    if(validate._validateForm(this.form)) {
      let fullname = this.props.currentUser.name + ' ' + this.props.currentUser.surname + ' ' + this.props.currentUser.patronymic,
        data = {
          name: fullname,
          group: this.props.currentUser.Group.number,
          description: this.description.value
        }

      fetch.sendEmail(data)
        .then((data) => {
          if(data.status === 200) {
            alert('Заявка успешно оставлена');
          }
        });

    }
  }
}
