import { combineReducers } from 'redux';

import users from './users';
import adminData from './adminData';
import managerData from './managerData';
import studentData from './studentData';
import schedule from './schedule';
import album from './album';
import practics from './practics';
import mainPage from './mainPage';
import routes from './routes';

export default combineReducers({
  users : users,
  adminData : adminData,
  managerData: managerData,
  studentData: studentData,
  schedule: schedule,
  album: album,
  practics: practics,
  mainPage: mainPage,
  routes: routes
});
