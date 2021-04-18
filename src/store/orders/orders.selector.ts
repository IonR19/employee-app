import _ from "lodash";
import { createSelector } from "reselect";
import { RootState } from "../store";

const orders = (state: RootState) => state.orders.orders;

export const selectOrders = createSelector([orders], (ord) => {
  return _.values(ord);
});
