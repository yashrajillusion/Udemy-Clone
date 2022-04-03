import {
  ADDTOWISHLIST,
  ADDTOWISHLIST_ERROR,
  ADDTOWISHLIST_LOADING,
} from "./action";

const initState = {
  wishlist: [],
  wishlistloading: false,
  wishlisterror: false,
};

export const wishlistReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case ADDTOWISHLIST:
      return { ...store, wishlist: payload };
    case ADDTOWISHLIST_LOADING:
      return { ...store, wishlistloading: payload };
    case ADDTOWISHLIST_ERROR:
      return { ...store, wishlisterror: payload };
    default:
      return store;
  }
};
