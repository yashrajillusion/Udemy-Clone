import axios from "axios";
export const ADDTOWISHLIST = "ADDTOWISHLIST";
export const ADDTOWISHLIST_LOADING = "ADDTOWISHLIST_LOADING";
export const ADDTOWISHLIST_ERROR = "ADDTOWISHLIST_ERROR";

export const addToWishlist = (body) => ({ type: ADDTOWISHLIST, payload: body });

export const addToWishlishtLoading = (status) => ({
  type: ADDTOWISHLIST_LOADING,
  payload: status,
});
export const addToWishlistError = (status) => ({
  type: ADDTOWISHLIST_ERROR,
  payload: status,
});

export const addToWishlistFunction = (data, URL) => (dispatch) => {
  dispatch(addToWishlishtLoading(true));
  axios
    .post(URL, data)
    .then(({ data }) => {
      dispatch(addToWishlist(data));
      dispatch(addToWishlishtLoading(false));
      dispatch(addToWishlistError(false));
      console.log(data);
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(addToWishlistError(true));
      dispatch(addToWishlishtLoading(false));
    });
};
