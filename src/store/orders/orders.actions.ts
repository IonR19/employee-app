import { api } from "../../utils";
import { ActionTypes } from "./orders.types";
import { Dispatch } from "redux";
import { Order } from "../../models";

export interface IFetchOrder {
  type: ActionTypes.FETCH_ORDER;
  payload: { [id: string]: Order };
}

export const fetchOrders = () => async (dispatch: Dispatch) => {
  const { data } = await api.get<any[]>("/orders");
  dispatch<IFetchOrder>({
    type: ActionTypes.FETCH_ORDER,
    payload: data.reduce((pre, cur) => ((pre[cur.id] = cur), pre), {}),
  });
};

export interface IAddOrder {
  type: ActionTypes.ADD_ORDER;
  payload: Order;
}

export const AddOrder = (order: Order) => async (dispatch: Dispatch) => {
  const { data } = await api.post("/orders", order);
  dispatch<IAddOrder>({
    type: ActionTypes.ADD_ORDER,
    payload: data,
  });
};

export interface IRejectOrder {
  type: ActionTypes.REJECT_ORDER;
  payload: string;
}

export const RejectOrder = (id: string) => async (dispatch: Dispatch) => {
  dispatch<IRejectOrder>({
    type: ActionTypes.REJECT_ORDER,
    payload: id,
  });
};
export interface IAcceptOrder {
  type: ActionTypes.ACCEPT_ORDER;
  payload: string;
}

export const AcceptOrder = (id: string) => async (dispatch: Dispatch) => {
  dispatch<IAcceptOrder>({
    type: ActionTypes.ACCEPT_ORDER,
    payload: id,
  });
};
