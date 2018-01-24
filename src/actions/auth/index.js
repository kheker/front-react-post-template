import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// Register Actions
export const registerFail = error => ({
  type: REGISTER_FAIL,
  error
});

export const registerSuccess = newUser => ({
  type: REGISTER_SUCCESS,
  newUser
});

export const register = (payload, setSubmitting, resetForm) => dispatch =>
  axios
    .post("http://localhost:4000/users", payload)
    .then(response => {
      dispatch(registerSuccess(response.data));
      setSubmitting(false);
      resetForm();
    })
    .catch(error => {
      dispatch(registerFail(error));
      setSubmitting(false);
      resetForm();
    });

// Login Actions

export const loginFail = error => ({
  type: LOGIN_FAIL,
  error
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const login = (payload, setSubmitting, resetForm) => dispatch =>
  axios
    .post("http://localhost:4000/user", payload)
    .then(response => {
      dispatch(loginSuccess(response.data));
      setSubmitting(false);
      resetForm();
    })
    .catch(error => {
      dispatch(loginFail(error));
      setSubmitting(false);
      resetForm();
    });
