import { api } from "../../utils";
import { ActionTypes } from "./vacation.types";
import { Dispatch } from "redux";
import { IVacation } from "../../models";
import _ from "lodash";

export interface IAddVacation {
  type: ActionTypes.ADD_VACATION;
}

export interface IAddVacationSuccess {
  type: ActionTypes.ADD_VACATION_SUCCESS;
  payload: IVacation;
}

export interface IAddVacationError {
  type: ActionTypes.ADD_VACATION_ERROR;
  payload?: string;
}

export const addVacation = (vacation: string) => async (dispatch: Dispatch) => {
  dispatch<IAddVacation>({
    type: ActionTypes.ADD_VACATION,
  });

  try {
    const { data } = await api.post("/vacation", vacation);
    dispatch<IAddVacationSuccess>({
      type: ActionTypes.ADD_VACATION_SUCCESS,
      payload: data, //includes id
    });
  } catch (e: any) {
    dispatch<IAddVacationError>({
      type: ActionTypes.ADD_VACATION_ERROR,
      payload: e.message,
    });
  }
};

export interface IRemoveVacation {
  type: ActionTypes.REMOVE_VACATION;
}

export interface IRemoveVacationSuccess {
  type: ActionTypes.REMOVE_VACATION_SUCCESS;
  payload: string;
}

export interface IRemoveVacationError {
  type: ActionTypes.REMOVE_VACATION_ERROR;
  payload?: string;
}

export const removeVacation = (id: string) => async (dispatch: Dispatch) => {
  dispatch<IRemoveVacation>({
    type: ActionTypes.REMOVE_VACATION,
  });
  try {
    await api.delete<IVacation>(`/vacation/${id}`);
    dispatch<IRemoveVacationSuccess>({
      type: ActionTypes.REMOVE_VACATION_SUCCESS,
      payload: id, //includes id
    });
  } catch (e: any) {
    dispatch<IRemoveVacationError>({
      type: ActionTypes.REMOVE_VACATION_ERROR,
      payload: e.message,
    });
  }
};

export interface IFetchVacation {
  type: ActionTypes.FETCH_VACATIONS;
}

export interface IFetchVacationSuccess {
  type: ActionTypes.FETCH_VACATIONS_SUCCESS;
  payload: IVacation[];
}

export interface IFetchVacationError {
  type: ActionTypes.FETCH_VACATIONS_ERROR;
  payload?: string;
}

export const fetchVacations = () => async (dispatch: Dispatch) => {
  dispatch<IFetchVacation>({
    type: ActionTypes.FETCH_VACATIONS,
  });
  try {
    const { data } = await api.get<IVacation[]>("/vacations");
    dispatch<IFetchVacationSuccess>({
      type: ActionTypes.FETCH_VACATIONS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch<IFetchVacationError>({
      type: ActionTypes.FETCH_VACATIONS_ERROR,
      payload: e.message,
    });
  }
};
