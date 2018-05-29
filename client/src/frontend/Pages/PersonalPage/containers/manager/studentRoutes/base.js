import { Component } from 'react';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as fetch from '../../../../../classes/fetch';

import {
  getList, getDisciplines
} from '../../../../../actions/routes';

import {
  setCurrentUser
} from '../../../../../actions/managerData';

export default class StudentRoutes extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList,
       getDisciplines: getDisciplines,
       setCurrentUser: setCurrentUser
    }, dispatch);

    fetch.refreshCurrentUser(this.props.match.params.id)
      .then((data) => {
        this.boundActions.setCurrentUser(data);
        let groupId = this.props.managerData.students.current.GroupId || 0,
          userId = this.props.managerData.students.current.id || 0;

        fetch.getRoutes(userId)
          .then((data) => {
            this.boundActions.getList(data);
          });

        fetch.getSchedule(groupId)
          .then((data) => {
            let disciplines = [];

            data.map((item) => {
              if(!_.filter(disciplines, _.matches({ id: item.Discipline.id }))[0]) {
                disciplines.push(item.Discipline);
              }
            });

            this.boundActions.getDisciplines(disciplines);
          });

      });
  }
}
