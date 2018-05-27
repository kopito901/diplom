import { Component } from 'react';
import { bindActionCreators } from 'redux';

import {
  getManagersList
} from '../../../../../../actions/adminData';
import * as fetch from '../../../../../../classes/fetch';


export default class ManagersControls extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getManagersList: getManagersList
    }, dispatch);

    this.changeTab = this.changeTab.bind(this);
    this.deleteManager = this.deleteManager.bind(this);
  }

  changeTab(e) {
    let target = e.target,
      tabType = target.getAttribute('data-tab'),
      tabs = document.getElementById('js_tabs');

    tabs.querySelectorAll(`.tabs_links--item`).forEach((item) => {
      item.classList.remove('tabs_links--item-active');
    });

    tabs.querySelectorAll(`.tabs_main--item`).forEach((item) => {
      item.classList.add('hidden');
    });

    target.classList.add('tabs_links--item-active');

    tabs.querySelectorAll(`.tabs_main--item[data-tab="${tabType}"]`)[0].classList.remove('hidden');
  }

  deleteManager(e) {
    e.preventDefault();

    fetch.deleteManager(this.props.adminData.pickedManagers)
      .then(() => {
        fetch.getManagersList()
          .then((data) => {
            this.boundActions.getManagersList({ managers: data.users });
          });
      })
  }
}
