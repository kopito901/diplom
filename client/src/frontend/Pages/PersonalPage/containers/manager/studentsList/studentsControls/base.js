import { Component } from 'react';

export default class StudentsControls extends Component {
  constructor(props) {
    super(props);

    this.changeTab = this.changeTab.bind(this);
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
}
