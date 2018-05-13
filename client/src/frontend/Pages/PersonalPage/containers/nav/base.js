import { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleResize());
  }

  handleResize() {
    let aside = document.getElementById('aside');
    
    if(window.pageYOffset >= 70) {
      document.body.classList.add('body-scrolling');
    } else {
      document.body.classList.remove('body-scrolling');
    }
  }
}
