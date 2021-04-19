import { createSelector } from "reselect";
import { RootState } from "../store";

const orders = (state: RootState) => state.orders.orders;

export const selectOrders = createSelector([orders], (ord) => {
  return Object.keys(ord).map((key) => ord[key]);
});

export const selectNewOrders = createSelector([orders], (ord) => {
  return Object.keys(ord)
    .map((key) => ord[key])
    .filter((ord) => ord.state === "new");
});
