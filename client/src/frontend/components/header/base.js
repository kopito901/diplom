import { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
    super(props);

		this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		console.log(1);
	}
}
