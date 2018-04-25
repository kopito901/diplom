import { Component } from 'react';

export default class Base extends Component {
	constructor(props) {
    super(props);

		this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.props.onAdd('qwe');
	}
}
