import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import {
  pickManager, removePickedManager
} from '../../../../../../actions/adminData';

export default class ManagerRow extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
      pickManager: pickManager,
      removePickedManager: removePickedManager
    }, dispatch);

    this.pickManager = this.pickManager.bind(this);
  }

  pickManager(e) {
    if(e.target.tagName !== 'INPUT') {
      this.checkBox.checked = !this.checkBox.checked
    }
    if(this.checkBox.checked) {
      this.boundActions.pickManager(this.props.manager);;
    } else {
      this.boundActions.removePickedManager(this.props.manager);
    }
  }
}
