import axios from "axios";
export const ADDTOCART = "ADDTOCART";
export const ADDTOCART_LOADING = "ADDTOCART_LOADING";
export const ADDTOCART_ERROR = "ADDTOCART_ERROR";

export const addToCart = (body) => ({ type: ADDTOCART, payload: body });
export const addToCartLoading = (status) => ({
  type: ADDTOCART_LOADING,
  payload: status,
});
export const addToCartError = (status) => ({
  type: ADDTOCART_ERROR,
  payload: status,
});

export const addToCartFunction = (data, URL) => (dispatch) => {
  dispatch(addToCartLoading(true));
  axios
    .post(URL, data)
    .then(({ data }) => {
      dispatch(addToCart(1));
      dispatch(addToCartLoading(false));
      dispatch(addToCartError(false));
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(addToCartError(true));
      dispatch(addToCartLoading(false));
    });
};
