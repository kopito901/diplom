import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as fetch from '../../../../../../classes/fetch';


export default class PracticBlock extends Component {
  constructor(props) {
    super(props);

    this.printDoc = this.printDoc.bind(this);
  }

  printDoc(e) {
    e.preventDefault();
    let route = this.props.route,
      data = {
        teacher: route.teacher,
        typeRoute: route.typeRoute,
        dateEnd: route.dateEnd,
        group: route.User.Group.number,
        fullname: route.User.name + ' ' + route.User.surname + ' ' + route.User.patronymic,
        discipline: route.Discipline.name
      };

    fetch.printDoc(data)
      .then((data) => {
        console.log(data);
      });
  }
}
