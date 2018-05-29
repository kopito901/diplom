import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalPage from './Pages/PersonalPage';

export default function (props, state) {
  return (
    <div>
      <Route path='/lk' component={PersonalPage} />
    </div>
  )
}
