import React from 'react';
import AdminNav from '../../../components/adminNav';
import StudentsList from '../studentsList';
import DepartmentsList from '../departmentsList';
import ManagersList from '../managersList';
import Department from '../department';
import Chancery from '../chancery';
import { Route } from 'react-router-dom';

export default function(props, state) {
  let currentUserAccess = null || this.props.currentUser.AccessId,
    access = false;

  if(currentUserAccess === 'a') {
    access = true;
  } else {
    access = false;
  }

  if(access === true) {
    return (
      <div className="page__main-block">
        <Route path="/lk/admin/studentsList" component={StudentsList} />
        <Route path="/lk/admin/departmentsList" component={DepartmentsList} />
        <Route path="/lk/admin/department/:number" component={Department} />
        <Route path="/lk/admin/managersList" component={ManagersList} />
        <Route path="/lk/admin/chancery" component={Chancery} />
      </div>
    );
  } else {
    return (
      <div className="">
        <h1>Куки</h1>
      </div>
    );
  }
}
