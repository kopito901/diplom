import { Component } from 'react';
import * as fetch from '../../classes/fetch';

export default class Header extends Component {
	constructor(props) {
    super(props);
		this.state = {
			isEnabledForm: false
		}

		this.changeState = this.changeState.bind(this);
		this.exit = this.exit.bind(this);
  }

	changeState(e) {
		if(e) {
			e.preventDefault();
		}
		this.setState({
			isEnabledForm : !this.state.isEnabledForm
		});
	}

	exit(e) {
		e.preventDefault();
		fetch.exit()
			.then(() => {
				window.location.reload();
			});
	}
}
