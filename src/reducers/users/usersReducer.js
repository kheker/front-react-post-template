import {
  FETCH_USERS_FAIL,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS
} from '../../actions/users';

const initialState = {
  users: [],
  isLoading: false,
  isLoaded: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.error
      }
    case FETCH_USERS_SUCCESS:
      return {
        isLoading: false,
        isLoaded_: true,
        error: {},
        users: action.users
      }

    default: return state;
  }
}
