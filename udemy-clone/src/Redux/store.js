import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./login/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
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
