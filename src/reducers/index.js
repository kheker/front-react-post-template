import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { layout } from './layout';
import projects from './projects';

export default combineReducers({
  layout,
  projects,
  routing: routerReducer
})
