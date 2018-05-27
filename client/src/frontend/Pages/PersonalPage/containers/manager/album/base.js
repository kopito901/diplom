import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';

import {
  getList
} from '../../../../../actions/album';


export default class Album extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList
    }, dispatch);

    fetch.getAlbum(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getList(data);
      });
  }
}
