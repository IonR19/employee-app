import { api } from "../../utils";
import { ActionTypes } from "./transfers.types";
import { Dispatch } from "redux";
import { ITRANSFER } from "../../models";
import _ from "lodash";

export interface IAddTRANSFER {
  type: ActionTypes.ADD_TRANSFER;
}

export interface IAddTRANSFERSuccess {
  type: ActionTypes.ADD_TRANSFER_SUCCESS;
  payload: ITRANSFER;
}

export interface IAddTRANSFERError {
  type: ActionTypes.ADD_TRANSFER_ERROR;
  payload?: string;
}

export const addTRANSFER = (TRANSFER: string) => async (dispatch: Dispatch) => {
  dispatch<IAddTRANSFER>({
    type: ActionTypes.ADD_TRANSFER,
  });

  try {
    const { data } = await api.post("/TRANSFERs", { name: TRANSFER });
    dispatch<IAddTRANSFERSuccess>({
      type: ActionTypes.ADD_TRANSFER_SUCCESS,
      payload: data, //includes id
    });
  } catch (e: any) {
    dispatch<IAddTRANSFERError>({
      type: ActionTypes.ADD_TRANSFER_ERROR,
      payload: e.message,
    });
  }
};

export interface IRemoveTRANSFER {
  type: ActionTypes.REMOVE_TRANSFER;
}

export interface IRemoveTRANSFERSuccess {
  type: ActionTypes.REMOVE_TRANSFER_SUCCESS;
  payload: string;
}

export interface IRemoveTRANSFERError {
  type: ActionTypes.REMOVE_TRANSFER_ERROR;
  payload?: string;
}

export const removeTRANSFER = (id: string) => async (dispatch: Dispatch) => {
  dispatch<IRemoveTRANSFER>({
    type: ActionTypes.REMOVE_TRANSFER,
  });
  try {
    await api.delete<ITRANSFER>(`/TRANSFERs/${id}`);
    dispatch<IRemoveTRANSFERSuccess>({
      type: ActionTypes.REMOVE_TRANSFER_SUCCESS,
      payload: id, //includes id
    });
  } catch (e: any) {
    dispatch<IRemoveTRANSFERError>({
      type: ActionTypes.REMOVE_TRANSFER_ERROR,
      payload: e.message,
    });
  }
};

export interface IFetchTRANSFER {
  type: ActionTypes.FETCH_TRANSFERS;
}

export interface IFetchTRANSFERSuccess {
  type: ActionTypes.FETCH_TRANSFERS_SUCCESS;
  payload: ITRANSFER[];
}

export interface IFetchTRANSFERError {
  type: ActionTypes.FETCH_TRANSFERS_ERROR;
  payload?: string;
}

export const fetchTRANSFERs = () => async (dispatch: Dispatch) => {
  dispatch<IFetchTRANSFER>({
    type: ActionTypes.FETCH_TRANSFERS,
  });
  try {
    const { data } = await api.get<ITRANSFER[]>("/TRANSFERs");
    dispatch<IFetchTRANSFERSuccess>({
      type: ActionTypes.FETCH_TRANSFERS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch<IFetchTRANSFERError>({
      type: ActionTypes.FETCH_TRANSFERS_ERROR,
      payload: e.message,
    });
  }
};
