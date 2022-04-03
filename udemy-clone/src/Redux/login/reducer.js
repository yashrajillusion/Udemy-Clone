import { AUTH, AUTH_ERROR, AUTH_LOADING } from "./action";

const initState = {
  user: {},
  loading: false,
  error: false,
};

export const authReducer = (store = initState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case AUTH:
      return { ...store, user: payload };
    case AUTH_LOADING:
      return { ...store, loading: payload };
    case AUTH_ERROR:
      return { ...store, error: payload };
    default:
      return store;
  }
};
