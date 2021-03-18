import { createStore, applyMiddleware, combineReducers } from "redux";
import redux_logger from "redux-logger";
import reduxThunk from "redux-thunk";
import { listReducer } from "./employees/reducers";

const reducers = combineReducers({
  todos: listReducer,
});

const middlewares = [redux_logger, reduxThunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof reducers>;
