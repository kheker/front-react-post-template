import axios from 'axios';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';


export function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING
  }
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
}

export function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAIL,
    error
  }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    return axios.get('http://localhost:4000/users')
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchUsersFail(error))
      })
  }
}
