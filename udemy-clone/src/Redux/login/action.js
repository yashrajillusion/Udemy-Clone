import axios from "axios";
export const AUTH = "AUTH";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";

export const auth = (user) => ({ type: AUTH, payload: user });
export const authLoading = (status) => ({
  type: AUTH_LOADING,
  payload: status,
});
export const autheError = (status) => ({ type: AUTH_ERROR, payload: status });

export const authFunction = (data) => (dispatch) => {
  dispatch(authLoading(true));
  axios
    .post("http://localhost:8080/join/signup-popup", data)
    .then(({ data }) => {
      dispatch(auth(data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(autheError(true));
      dispatch(authLoading(false));
    });
};
