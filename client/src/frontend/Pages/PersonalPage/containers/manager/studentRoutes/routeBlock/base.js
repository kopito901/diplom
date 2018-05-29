import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';

import {
  getList
} from '../../../../../../actions/routes';

export default class PracticBlock extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList
    }, dispatch);

    this.deleteRoute = this.deleteRoute.bind(this);
  }

  deleteRoute(e) {
    e.preventDefault();

    fetch.deleteRoute(this.props.route.id)
      .then((data) => {
        fetch.getRoutes(this.props.match.params.id)
          .then((data) => {
            this.boundActions.getList(data);
          });
      });
  }
}
