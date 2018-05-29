import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';
import * as validate from '../../../../../../classes/validate';
import moment from 'moment';

import {
  getList
} from '../../../../../../actions/routes';

export default class PracticsControls extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = props;
    this.boundActions = bindActionCreators({
       getList: getList
    }, dispatch);

    this.addRoute = this.addRoute.bind(this);
  }

  addRoute(e) {
    e.preventDefault();

    if(validate._validateForm(this.form)) {
      let data = {
        teacher: this.teacher.value,
        typeRoute: this.typeSelect.value,
        dateEnd: moment().add(2,'w').format('DD/MM/YY'),
        DisciplineId: this.disciplineSelect.value,
        UserId: this.props.student.id,
      }

      fetch.addRoute(data)
        .then((data) => {
          fetch.getRoutes(this.props.student.id)
            .then((data) => {
              this.boundActions.getList(data);
            });
        });
    }
  }

}
