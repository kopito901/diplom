import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import {
getDepartmentsGroups
} from '../../../../../../actions/adminData';
import * as fetch from '../../../../../../classes/fetch';

export default class GroupsControl extends Component {
  constructor(props) {
    super(props);


    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getDepartmentsGroups: getDepartmentsGroups
     }, dispatch);

    this.changeTab = this.changeTab.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
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

    fetch.deleteGroup(this.props.adminData.pickedGroups)
      .then((data) => {
        fetch.getGroupsList(this.props.match.params.number)
          .then((groups) => {
            this.boundActions.getDepartmentsGroups(groups);
          })
      });
  }
}
