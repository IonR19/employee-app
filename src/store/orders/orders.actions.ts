import { api } from "../../utils";
import { ActionTypes } from "./orders.types";
import { Dispatch } from "redux";
import { Order } from "../../models";

export interface IAcceptOrder {
  type: ActionTypes.ACCEPT_ORDER;
  payload: string;
}

export interface IRejectOrder {
  type: ActionTypes.REJECT_ORDER;
  payload: string;
}

export interface IAddOrder {
  type: ActionTypes.ADD_ORDER;
  payload: Order;
}

export const AddOrder = () => (dispatch: Dispatch) => {};

export const RejectOrder = (id: string) => async (dispatch: Dispatch) => {};

export const AcceptOrder = (id: string) => async (dispatch: Dispatch) => {};
