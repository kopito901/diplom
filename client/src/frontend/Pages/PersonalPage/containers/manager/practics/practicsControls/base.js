import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getPractics
} from '../../../../../../actions/practics';

export default class PracticsControls extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getPractics: getPractics
    }, dispatch);

    this.addBase = this.addBase.bind(this);
  }

  addBase(e) {
    e.preventDefault();

    fetch.addBase(this.form, this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        fetch.getPracticsList(this.props.currentUser.Group.DepartmentId)
          .then((data) => {
            this.boundActions.getPractics(data);
          });
      });
  }

}
