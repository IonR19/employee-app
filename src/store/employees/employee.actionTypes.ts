import {
  IAddEmployee,
  IFetchEmployees,
  IFetchEmployeesError,
  IRemoveEmployee,
  ISetFilter,
  IUpdateEmployee,
  IUpdateEmployeeError,
} from "./employee.actions";

export enum ActionTypes {
  ADD_EMPLOYEE = "ADD_EMPLOYEE",
  REMOVE_USER = "REMOVE_USER",
  FILTER_USER = "FILTER_USER",
  FETCH_EMPLOYEES = "GET_EMPLOYEES",
  SET_FILTER = "SET_FILTER",
  FETCH_EMPLOYEE_ERROR = "GET_EMPLOYEE_ERROR",
  START_EMP_ADD = "START_EMP_ADD",
  STOP_EMP_ADD = "STOP_EMP_ADD",
  ADD_EMPLOYEE_ERR = "ADD_EMPLOYEE_ERR",
  UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE",
  UPDATE_EMPLOYEE_ERR = "UPDATE_EMPLOYEE_ERR",
}

export type IEmployeeActions =
  | IAddEmployee
  | IRemoveEmployee
  | ISetFilter
  | IFetchEmployees
  | IFetchEmployeesError
  | IUpdateEmployee
  | IUpdateEmployeeError;
