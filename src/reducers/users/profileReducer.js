import {
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL
} from "../../actions/users";

const initialState = {
  profile: {},
  isLoading: false,
  isLoaded: false,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        profile: action.profile,
        isLoading: false,
        isLoaded: true,
        error: {}
      };
    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.error
      };
    default:
      return state;
  }
};
