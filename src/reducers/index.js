import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { layout } from './layout';
import projects from './projects';
import users from './users/usersReducer';
import profile from './users/profileReducer';

export default combineReducers({
  layout,
  projects,
  users,
  profile,
  routing: routerReducer
})
