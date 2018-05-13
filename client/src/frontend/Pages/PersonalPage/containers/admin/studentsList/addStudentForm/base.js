import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import {
  getStudentsList
} from '../../../../../../actions/users';
import {
  getGroupsList
} from '../../../../../../actions/adminData';
import * as fetch from '../../../../../../classes/fetch';

export default class addStudentForm extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getStudentsList: getStudentsList,
       getGroupsList: getGroupsList
     }, dispatch);

     this.addStudent = this.addStudent.bind(this);
     this.selectDepartment = this.selectDepartment.bind(this);
  }

  addStudent(e) {
    e.preventDefault();

    if(validate._validateForm(this.addUserForm)) {
      let data = {
        name: this.name.value,
        surname: this.surname.value,
        patronymic: this.patronymic.value,
        email: this.email.value,
        course: this.course.value,
        department: this.department.value,
        group: this.group.value
      };
      fetch.addStudent(data)
        .then(() => {
          fetch.getStudentsList()
            .then(students => {
              this.boundActions.getStudentsList(students);
            });
        });
    }
  }

  selectDepartment() {
    fetch.getGroupsList(this.department.value)
      .then(groups => {
        this.boundActions.getGroupsList(groups);
      })
  }
}
