import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import {
  getManagersList
} from '../../../../../../actions/adminData';
import * as fetch from '../../../../../../classes/fetch';

export default class AddManagerForm extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getManagersList: getManagersList
    }, dispatch);

    this.addManager = this.addManager.bind(this);
  }

  addManager(e) {
    e.preventDefault();

    if (validate._validateForm(this.addManagerForm)) {
      let data = {
        name: this.name.value,
        surname: this.surname.value,
        patronymic: this.patronymic.value,
        email: this.email.value,
        department: this.department.value,
      };

      fetch.addManager(data)
        .then(() => {
          fetch.getManagersList()
            .then((data) => {
              this.boundActions.getManagersList({ managers: data.users });
            });
        });
    }
  }
}
