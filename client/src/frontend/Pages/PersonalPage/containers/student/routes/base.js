import { Component } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as fetch from '../../../../../classes/fetch';

import {
  getList
} from '../../../../../actions/routes';

export default class StudentRoutes extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList
    }, dispatch);

    fetch.getRoutes(this.props.currentUser.id)
      .then((data) => {
        this.boundActions.getList(data);
      });
  }
}
