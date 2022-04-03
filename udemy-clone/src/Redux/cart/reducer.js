import { ADDTOCART, ADDTOCART_ERROR, ADDTOCART_LOADING } from "./action";

const initState = {
  cart: 0,
  loading: false,
  error: false,
};

export const cartReducer = (store = initState, { type, payload }) => {
  console.log(payload, "cart");
  switch (type) {
    case ADDTOCART:
      return { ...store, cart: store.cart + payload };
    case ADDTOCART_LOADING:
      return { ...store, loading: payload };
    case ADDTOCART_ERROR:
      return { ...store, error: payload };
    default:
      return store;
  }
};
