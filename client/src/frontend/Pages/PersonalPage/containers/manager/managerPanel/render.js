import React from 'react';
import Main from '../main';
import StudentsList from '../studentsList';
import GroupsList from '../groupsList';
import Schedule from '../schedule';
import StudentsMarks from '../studentsMarks';
import Album from '../album';
import Practics from '../practics';
import MainPage from '../../../../MainPage';
import MainPageEdit from '../mainPageEdit';
import StudentRoutes from '../studentRoutes';
import { Route } from 'react-router-dom';

export default function(props, state) {
  let currentUserAccess = null || this.props.currentUser.AccessId,
    access = false;

  if(currentUserAccess === 'z') {
    access = true;
  } else {
    access = false;
  }

  if(access === true) {
    return (
      <div className="page__main-block">
        <Route path='/lk/manager/mainPage' component={MainPage} />
        <Route path='/lk/manager/personalPage' component={Main} />
        <Route path='/lk/manager/studentsList' component={StudentsList} />
        <Route path='/lk/manager/groupsList' component={GroupsList} />
        <Route path='/lk/manager/group/schedule/:id' component={Schedule} />
        <Route path='/lk/manager/student/marks/:id' component={StudentsMarks} />
        <Route path='/lk/manager/student/route/:id' component={StudentRoutes} />
        <Route path='/lk/manager/photoalbum' component={Album} />
        <Route path='/lk/manager/practics' component={Practics} />
        <Route path='/lk/manager/page/edit' component={MainPageEdit} />
      </div>
    );
  } else {
    return (
      <div className="page__main-block">
        <h1>Пожалуйста, авторизуйтесь</h1>
      </div>
    );
  }
}
