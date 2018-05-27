import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  setSearchGroupString
} from '../../../../../../actions/managerData';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      setSearchGroupString: setSearchGroupString
    }, dispatch);

    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter(e) {
    e.preventDefault();
    this.boundActions.setSearchGroupString({ string: this.searchInput.value, type: this.searchType.value });
  }
}
