import axios from 'axios';

export const FETCH_PROJECTS_PENDING = 'FETCH_PROJECTS_PENDING';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAIL = 'FETCH_PROJECTS_FAIL';

export function fetchPending() {
  return {
    type: FETCH_PROJECTS_PENDING
  }
}

export function fetchSuccess(projects) {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    projects
  }
}

export function fetchFail(error) {
  return {
    type: FETCH_PROJECTS_FAIL,
    error
  }
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch(fetchPending());
    return axios.get('http://localhost:4000/projects')
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error))
      })
  }
}
