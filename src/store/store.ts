import { createStore, applyMiddleware, combineReducers } from "redux";
import redux_logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { listReducer } from "./employees/reducers";

const vodo = (state = ["test"], action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((it: typeof action.payload) => it != action.payload);
    default:
      return state;
  }
};

const reducers = combineReducers({
  todos: listReducer,
  vodo,
});

const middlewares = [redux_logger, reduxThunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof reducers>;
