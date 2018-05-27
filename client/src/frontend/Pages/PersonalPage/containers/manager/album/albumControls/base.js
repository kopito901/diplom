import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as validate from '../../../../../../classes/validate';
import * as fetch from '../../../../../../classes/fetch';

import {
  getList
} from '../../../../../../actions/album';


export default class AlbumControls extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList
    }, dispatch);

    this.addPhoto = this.addPhoto.bind(this);
  }

  addPhoto(e) {
    e.preventDefault();

    if (validate._validateForm(this.form)) {
      fetch.uploadAlbumItem(this.form, this.props.currentUser.Group.DepartmentId)
        .then((data) => {
          fetch.getAlbum(this.props.currentUser.Group.DepartmentId)
            .then((data) => {
              this.boundActions.getList(data);
            });
        });
    }
  }
}
