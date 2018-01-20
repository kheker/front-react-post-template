import axios from "axios";

// Users
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

// Profile
export const FETCH_PROFILE_PENDING = "FETCH_PROFILE_PENDING";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAIL = "FETCH_PROFILE_FAIL";

// Users actions
function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
}

function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    error
  };
}

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersPending());
    return axios
      .get("http://localhost:4000/users")
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUsersFail(error));
      });
  };
}

// Profile actions

function fetchProfilePending() {
  return {
    type: FETCH_PROFILE_PENDING
  };
}

function fetchProfileSuccess(profile) {
  return {
    type: FETCH_PROFILE_SUCCESS,
    profile
  };
}

function fetchProfileFail(error) {
  return {
    type: FETCH_PROFILE_FAIL,
    error
  };
}

export function fetchProfile(id) {
  return dispatch => {
    dispatch(fetchProfilePending());
    return axios
      .get(`http://localhost:4000/users/${id}`)
      .then(response => {
        dispatch(fetchProfileSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProfileFail(error));
      });
  };
}
