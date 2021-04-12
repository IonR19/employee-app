import {
  IAddVacation,
  IAddVacationError,
  IAddVacationSuccess,
  IFetchVacation,
  IFetchVacationError,
  IFetchVacationSuccess,
  IRemoveVacation,
  IRemoveVacationError,
  IRemoveVacationSuccess,
} from "./transfers.actions";

export enum ActionTypes {
  FETCH_VACATIONS = "FETCH_VACATIONS",
  FETCH_VACATIONS_SUCCESS = "FETCH_VACATIONS_SUCCESS",
  FETCH_VACATIONS_ERROR = "FETCH_VACATIONS_ERROR",
  ADD_VACATION = "ADD_VACATION",
  ADD_VACATION_SUCCESS = "ADD_VACATION_SUCCESS",
  ADD_VACATION_ERROR = "ADD_VACATION_ERROR",
  REMOVE_VACATION = "REMOVE_VACATION",
  REMOVE_VACATION_SUCCESS = "REMOVE_VACATION_SUCCESS",
  REMOVE_VACATION_ERROR = "REMOVE_VACATION_ERROR",
}

export type IVacationActions =
  | IAddVacation
  | IAddVacationSuccess
  | IAddVacationError
  | IRemoveVacation
  | IRemoveVacationSuccess
  | IRemoveVacationError
  | IFetchVacation
  | IFetchVacationSuccess
  | IFetchVacationError;
