import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './frontend/App';
import registerServiceWorker from './registerServiceWorker';

import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';

import * as fetch from './frontend/classes/fetch';

import MainPage from './frontend/Pages/MainPage';
import PersonalPage from './frontend/Pages/PersonalPage';


import reducer from './frontend/reducers';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

fetch.getStudentsList()
  .then(students => {
    store.dispatch({ type : 'GET_STUDENTSLIST', payload : students });
  });

fetch.loginViaCookies()
  .then(user => {
    store.dispatch({ type : 'AUTH_VIA_COOKIES', payload : user });
  });

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/lk' component={PersonalPage} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
