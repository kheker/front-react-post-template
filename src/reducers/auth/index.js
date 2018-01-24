import { LOGIN_SUCCESS, LOGIN_FAIL } from "../../actions/auth";

const initialState = {
  user: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.user,
        error: {}
      };
    case LOGIN_FAIL:
      return {
        user: {},
        error: action.error
      };

    default:
      return state;
  }
};
