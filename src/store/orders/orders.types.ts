import { IAcceptOrder, IAddOrder, IRejectOrder } from "./orders.actions";

export enum ActionTypes {
  ADD_ORDER,
  REJECT_ORDER,
  ACCEPT_ORDER,
}

export type IOrderActions = IAddOrder | IRejectOrder | IAcceptOrder;
