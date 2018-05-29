import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../classes/fetch';
import * as validate from '../../../../../classes/validate';

import {
  getDepartmentInfo
} from '../../../../../actions/mainPage';

export default class MainPageEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      text: '',
      isAlbum: '',
    };

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getDepartmentInfo: getDepartmentInfo
    }, dispatch);

    fetch.getDepartmentInfo(this.props.currentUser.Group.DepartmentId)
      .then((data) => {
        this.boundActions.getDepartmentInfo(data);
      });

    this.addInfo = this.addInfo.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputText = this.inputText.bind(this);
    this.checkAlbum = this.checkAlbum.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let title = (nextProps.mainPage.info[0])? nextProps.mainPage.info[0].title : '',
      text = (nextProps.mainPage.info[0])? nextProps.mainPage.info[0].text : '',
      isAlbum = (nextProps.mainPage.info[0])? nextProps.mainPage.info[0].isAlbumActive : 0;

    this.setState({
      title: title,
      text: text,
      isAlbum: isAlbum,
    });

    this.title.value = title;
    this.description.value = text;
    this.isAlbum.checked = isAlbum;
  }

  inputTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  inputText(e) {
    this.setState({
      text: e.target.value
    });
  }

  checkAlbum(e) {
    this.setState({
      isAlbum: e.target.checked
    });
  }

  addInfo(e) {
    e.preventDefault();

    if(validate._validateForm(this.form)) {
      let data = {
        DepartmentId: this.props.currentUser.Group.DepartmentId,
        title: this.title.value,
        text: this.description.value,
        isAlbum: this.isAlbum.checked
      }

      fetch.setDepartmentInfo(data)
        .then((data) => {
          fetch.getDepartmentInfo(this.props.currentUser.Group.DepartmentId)
            .then((data) => {
              this.boundActions.getDepartmentInfo(data);
            });
        });
    }
  }
}
