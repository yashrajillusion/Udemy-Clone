import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AUTH = "AUTH";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";

export const auth = (user) => ({ type: AUTH, payload: user });
export const authLoading = (status) => ({
  type: AUTH_LOADING,
  payload: status,
});
export const autheError = (status) => ({ type: AUTH_ERROR, payload: status });

export const authFunction = (data, URL) => (dispatch) => {
  dispatch(authLoading(true));
  axios
    .post(URL, data)
    .then(({ data }) => {
      dispatch(auth(data));
      dispatch(authLoading(false));
      dispatch(autheError(false));
      console.log(data);
      document.cookie = `Bearer=${data.token}`;
      localStorage.setItem("token", JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(autheError(true));
      dispatch(authLoading(false));
    });
};
