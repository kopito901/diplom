import { Component } from 'react';

export default class DepartmentRow extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`department/${this.props.department.id}`);
  }
}
