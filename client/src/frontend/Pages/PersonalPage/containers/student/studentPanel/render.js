import React from 'react';
import Main from '../main';
import Marks from '../marks';
import Schedule from '../schedule';
import BasePractic from '../basePractic';
import References from '../references';
import MainPage from '../../../../MainPage';
import Routes from '../routes';
import { Route } from 'react-router-dom';

export default function(props, state) {
  let currentUserAccess = null || this.props.currentUser.AccessId,
    access = false;

  if(currentUserAccess === 's') {
    access = true;
  } else {
    access = false;
  }

  if(access === true) {
    return (
      <div className="page__main-block">
        <Route path='/lk/student/personalPage' component={Main} />
        <Route path='/lk/student/marks' component={Marks} />
        <Route path='/lk/student/schedule' component={Schedule} />
        <Route path='/lk/student/practics' component={BasePractic} />
        <Route path='/lk/student/references' component={References} />
        <Route path='/lk/student/mainPage' component={MainPage} />
        <Route path='/lk/student/routes' component={Routes} />
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
