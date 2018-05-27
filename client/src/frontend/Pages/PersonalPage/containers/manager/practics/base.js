import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getPractics
} from '../../../../../actions/practics';

export default class Practics extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getPractics: getPractics
    }, dispatch);

    fetch.getPracticsList(this.props.users.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getPractics(data);
      });
  }
}
