import produce from "immer";
import { Order } from "../../models";
import { ActionTypes, IOrderActions } from "./orders.types";

export interface IOrderReducer {
  orders: {
    [id: string]: Order;
  };
}

const initialState: IOrderReducer = {
  orders: {},
};

const OrdersReducer = produce((state: IOrderReducer = initialState, action: IOrderActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_ORDER:
      state.orders = action.payload;
      return state;
    case ActionTypes.ACCEPT_ORDER:
      state.orders[action.payload].state = "accepted";
      return state;
    case ActionTypes.REJECT_ORDER:
      state.orders[action.payload].state = "rejected";
      return state;
    case ActionTypes.ADD_ORDER:
      const { id } = action.payload;
      state.orders[id] = action.payload;
    default:
      return state;
  }
});

export default OrdersReducer;
