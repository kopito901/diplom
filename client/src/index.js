import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './frontend/App';
import registerServiceWorker from './registerServiceWorker';

import { composeWithDevTools } from 'redux-devtools-extension';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';

import MainPage from './frontend/Pages/MainPage';
import PersonalPage from './frontend/Pages/PersonalPage';


import reducer from './frontend/reducers';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

async function getData() {
  const response = await fetch('/api/getUsers', {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });
  const json = await response.json();

  return json;
};

getData()
  .then(data => {
    store.dispatch({ type : 'INIT_USER', payload : data });
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
