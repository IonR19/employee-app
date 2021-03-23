import { api } from "../../utils";
import { ActionTypes } from "./employee.actionTypes";
import _ from "lodash";
import { Dispatch } from "redux";
import { IEmployee, iFilter } from "../../models";

export interface IFetchEmployees {
  type: ActionTypes.FETCH_EMPLOYEES;
  payload: {
    [id: string]: IEmployee;
  };
}

export interface IFetchEmployeesError {
  type: ActionTypes.FETCH_EMPLOYEE_ERROR;
  payload: string;
}

export interface IAddEmployee {
  type: ActionTypes.ADD_USER;
  payload: IEmployee;
}

export interface IRemoveEmployee {
  type: ActionTypes.REMOVE_USER;
  payload: string;
}

export interface ISetFilter {
  type: ActionTypes.SET_FILTER;
  payload: {
    filter: keyof iFilter;
    value: string;
  };
}

export const addEmployee = (formData: any) => {
  //add to server
  //add locally?
  //redirect to view ?
};

export const fetchEmployees = (filter?: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get("/employees", { params: { _limit: 30 } });
    dispatch<IFetchEmployees>({
      type: ActionTypes.FETCH_EMPLOYEES,
      payload: _.mapKeys(data, "id"),
    });
  } catch (err) {
    dispatch<IFetchEmployeesError>({
      type: ActionTypes.FETCH_EMPLOYEE_ERROR,
      payload: err.message,
    });
  }
};

export const setFilter = (filter: keyof iFilter, value: string): ISetFilter => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: {
      filter,
      value,
    },
  };
};
/*
let t = 0;
export const setLateFilter = (filter: keyof iFilter, value: string) => (dispatch: Dispatch) => {
  if (t) {
    clearTimeout(t);
  }
  t = setTimeout(() => {
    dispatch<ISetFilter>({
      type: ActionTypes.SET_FILTER,
      payload: {
        filter,
        value,
      },
    });
  }, 1500);
};
*/