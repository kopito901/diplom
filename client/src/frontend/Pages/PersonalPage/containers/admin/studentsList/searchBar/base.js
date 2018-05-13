import { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  setSearchString
} from '../../../../../../actions/adminData';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      setSearchString: setSearchString
    }, dispatch);

    this.setSearchFilter = this.setSearchFilter.bind(this);
  }

  setSearchFilter(e) {
    e.preventDefault();
    this.boundActions.setSearchString({ string: this.searchInput.value, type: this.searchType.value });
  }
}
