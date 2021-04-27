import { createStore, applyMiddleware, combineReducers } from "redux";
import redux_logger from "redux-logger";
import reduxThunk from "redux-thunk";
import employeeReducers from "./employees/employee.reducers";
import OrdersReducer from "./orders/orders.reducers";
import SettingsReducer from "./settings/settings.reducers";
import VacationReducer from "./vacations/vacation.reducers";

const reducers = combineReducers({
  employees: employeeReducers,
  vacations: VacationReducer,
  orders: OrdersReducer,
  settings: SettingsReducer
});

const middlewares = [redux_logger, reduxThunk];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof reducers>;
export type DefaultRootState = RootState;
