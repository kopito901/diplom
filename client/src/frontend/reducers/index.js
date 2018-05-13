import { combineReducers } from 'redux';

import users from './users';
import adminData from './adminData';

export default combineReducers({
  users : users,
  adminData : adminData
});
