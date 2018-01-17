import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { layout } from './layout';
import projects from './projects';
import users from './users';

export default combineReducers({
  layout,
  projects,
  users,
  routing: routerReducer
})
