import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import employeeSlice from "./employees/employee.slice";
import OrdersReducer from "./orders/orders.reducers";
import SettingsReducer from "./settings/settings.reducers";
import VacationReducer from "./vacations/vacation.reducers";

const reducers = combineReducers({
  employees: employeeSlice.reducer,
  vacations: VacationReducer,
  orders: OrdersReducer,
  settings: SettingsReducer,
});

const middlewares = [...getDefaultMiddleware()];

export const store = createStore(reducers, applyMiddleware(...middlewares));
export type RootState = ReturnType<typeof reducers>;
export type DefaultRootState = RootState;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
