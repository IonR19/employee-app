import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import employeeSlice from "./employees/employee.slice";
import OrdersReducer from "./orders/orders.reducers";
import SettingsReducer from "./settings/settings.reducers";
import VacationReducer from "./vacations/vacation.reducers";
import logger from "redux-logger";
const reducers = combineReducers({
  employees: employeeSlice.reducer,
  vacations: VacationReducer,
  orders: OrdersReducer,
  settings: SettingsReducer,
});

const middlewares = [...getDefaultMiddleware()];

if (process.env.NODE_ENV != "production") {
  middlewares.push(logger);
}

// export const store = createStore(reducers, applyMiddleware(...middlewares));
export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});
export type RootState = ReturnType<typeof reducers>;
export type DefaultRootState = RootState;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
