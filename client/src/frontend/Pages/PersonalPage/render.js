import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../../containers/header/';
import AdminPanel from './containers/admin/adminPanel';
import ManagerPanel from './containers/manager/managerPanel';
import StudentPanel from './containers/student/studentPanel';
import Nav from './containers/nav';


export default function(props, state) {

  return (
    <div className="">
      <Header history={ this.props.history} />
      <main className="page__main">
        <Nav />
        <Switch>
          <Route path='/lk/admin' component={AdminPanel} />
          <Route path='/lk/manager' component={ManagerPanel} />
          <Route path='/lk/student' component={StudentPanel} />
        </Switch>
      </main>
    </div>
  );
}
