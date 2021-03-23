import {
  IAddEmployee,
  IFetchEmployees,
  IFetchEmployeesError,
  IRemoveEmployee,
  ISetFilter,
} from "./employee.actions";

export enum ActionTypes {
  ADD_USER = "ADD_USER",
  REMOVE_USER = "REMOVE_USER",
  FILTER_USER = "FILTER_USER",
  FETCH_EMPLOYEES = "GET_EMPLOYEES",
  SET_FILTER = "SET_FILTER",
  FETCH_EMPLOYEE_ERROR = "GET_EMPLOYEE_ERROR",
}

export type IEmployeeActions =
  | IAddEmployee
  | IRemoveEmployee
  | ISetFilter
  | IFetchEmployees
  | IFetchEmployeesError;
