import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import PersonalPage from './Pages/PersonalPage';

export default function (props, state) {
  return (
    <div>
      <Route exact path='/' component={MainPage} />
      <Route path='/lk' component={PersonalPage} />
    </div>
  )
}
