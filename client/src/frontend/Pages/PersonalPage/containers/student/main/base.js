import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getBoss
} from '../../../../../actions/studentData';

export default class Main extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getBoss: getBoss
    }, dispatch);

    fetch.getBoss({ id: this.props.currentUser.Group.DepartmentId })
      .then((data) => {
        this.boundActions.getBoss(data);
      });
  }
}
