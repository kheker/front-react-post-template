import {
  FETCH_PROJECTS_PENDING,
  FETCH_PROJECTS_FAIL,
  FETCH_PROJECTS_SUCCESS
} from '../../actions/projects';

const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PROJECTS_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.error
      };
    case FETCH_PROJECTS_SUCCESS:
      return {
        isLoading: false,
        isLoaded: true,
        error: {},
        projects: action.projects
      };
    default: return state;
  }
}
