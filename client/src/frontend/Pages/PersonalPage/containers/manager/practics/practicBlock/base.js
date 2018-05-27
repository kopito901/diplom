import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getPractics
} from '../../../../../../actions/practics';

export default class PracticBlock extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getPractics: getPractics
    }, dispatch);

    this.deletePractic = this.deletePractic.bind(this);
  }

  deletePractic(e) {
    e.preventDefault();

    fetch.deleteBase(this.props.practic.id)
      .then((data) => {
        fetch.getPracticsList(this.props.currentUser.Group.DepartmentId)
          .then((data) => {
            this.boundActions.getPractics(data);
          });
      });
  }
}
