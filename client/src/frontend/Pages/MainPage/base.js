import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../classes/fetch';

import {
  getList
} from '../../actions/album';

import {
  getDepartmentInfo
} from '../../actions/mainPage';

export default class MainPage extends Component {
	constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList,
       getDepartmentInfo: getDepartmentInfo
    }, dispatch);

    fetch.getAlbum(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getList(data);
      });

    fetch.getDepartmentInfo(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getDepartmentInfo(data);
      });
  }
}
