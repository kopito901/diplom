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

export default class StudentsControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "addStudent"
    }

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getStudentsList: getStudentsList
    }, dispatch);

    this.changeTab = this.changeTab.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.transferStudents = this.transferStudents.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  changeTab(e) {
    let target = e.target,
      tabType = target.getAttribute('data-tab'),
      tabs = document.getElementById('js_tabs');

    tabs.querySelectorAll(`.students__tab_links--item`).forEach((item) => {
      item.classList.remove('students__tab_links--item-active');
    });

    tabs.querySelectorAll(`.students__tab_main--item`).forEach((item) => {
      item.classList.add('hidden');
    });

    target.classList.add('students__tab_links--item-active');

    tabs.querySelectorAll(`.students__tab_main--item[data-tab="${tabType}"]`)[0].classList.remove('hidden');
  }

  deleteStudent(e) {
    e.preventDefault();
    fetch.deleteStudent(this.props.adminData.pickedUsers)
      .then(() => {
        fetch.getStudentsList()
          .then(students => {
            this.boundActions.getStudentsList(students);
          });
      })
  }

  transferStudents(e) {
    e.preventDefault();
    fetch.transferStudents()
      .then(() => {
        fetch.getStudentsList()
          .then(students => {
            this.boundActions.getStudentsList(students);
          });
      });
  }

  updateStudent(e) {
    e.preventDefault();


  }
}
