import { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
    super(props);
		this.state = {
			isEnabledForm: false
		}

		this.changeState = this.changeState.bind(this);
  }

	changeState() {
		this.setState({
			isEnabledForm : !this.state.isEnabledForm
		});
	}
}
