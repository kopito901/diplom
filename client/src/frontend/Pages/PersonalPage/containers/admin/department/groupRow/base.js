import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import {
  addPickedGroup, removePickedGroup
} from '../../../../../../actions/adminData';

export default class GroupRow extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      addPickedGroup: addPickedGroup,
      removePickedGroup: removePickedGroup
    }, dispatch);

    this.pickGroup = this.pickGroup.bind(this);
  }

  pickGroup(e) {
    if(e.target.tagName !== 'INPUT') {
      this.checkBox.checked = !this.checkBox.checked
    }
    if(this.checkBox.checked) {
      this.boundActions.addPickedGroup(this.props.group);
    } else {
      this.boundActions.removePickedGroup(this.props.group);
    }
  }
}
