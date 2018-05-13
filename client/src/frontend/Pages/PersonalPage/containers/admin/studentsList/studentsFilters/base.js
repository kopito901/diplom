import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  setStudentFilter
} from '../../../../../../actions/adminData';

export default class StudentsFilters extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      setStudentFilter: setStudentFilter
    }, dispatch);
    this.filter = this.filter.bind(this);
  }

  filter(e) {
    let type = '+',
      attr = e.target.getAttribute('data-type');

    if((attr + type) == this.props.adminData.filter) {
      type = '-';
    } else {
      type = '+';
    }

    this.boundActions.setStudentFilter(attr + type);
  }
}
