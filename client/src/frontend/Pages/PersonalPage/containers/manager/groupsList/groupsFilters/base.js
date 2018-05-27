import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  setGroupFilter
} from '../../../../../../actions/managerData';

export default class GroupsFilters extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      setGroupFilter: setGroupFilter
    }, dispatch);

    this.filter = this.filter.bind(this);
  }

  filter(e) {
    let type = '+',
      attr = e.target.getAttribute('data-type');

    if((attr + type) == this.props.managerData.groups.filter) {
      type = '-';
    } else {
      type = '+';
    }

    this.boundActions.setGroupFilter(attr + type);
  }
}
