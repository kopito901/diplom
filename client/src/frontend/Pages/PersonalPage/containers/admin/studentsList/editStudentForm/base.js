import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import * as fetch from '../../../../../../classes/fetch';
import {
  getStudentsList
} from '../../../../../../actions/users';
import {
  getGroupsList
} from '../../../../../../actions/adminData';

export default class EditStudentForm extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getGroupsList: getGroupsList,
       getStudentsList: getStudentsList
    }, dispatch);

    this.selectDepartment = this.selectDepartment.bind(this);
    this.editStudent = this.editStudent.bind(this);
  }

  selectDepartment() {
    fetch.getGroupsList(this.department.value)
      .then(groups => {
        this.boundActions.getGroupsList(groups);
      })
  }

  editStudent(e) {
    e.preventDefault();

    if(validate._validateForm(this.editUserForm)) {
      let data = {
        id: this.editUserForm.getAttribute('data-user'),
        name: this.name.value,
        surname: this.surname.value,
        patronymic: this.patronymic.value,
        email: this.email.value,
        course: this.course.value,
        department: this.department.value,
        group: this.group.value
      };
      fetch.editStudent(data)
        .then(() => {
          fetch.getStudentsList()
            .then(students => {
              this.boundActions.getStudentsList(students);
            });
        });
    }
  }
}
