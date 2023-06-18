import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { authReducer } from "./login/reducer";
import { wishlistReducer } from "./wishlist/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action);
};

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
