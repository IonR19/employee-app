import { api } from "../../utils";
import { ActionTypes } from "./employee.actionTypes";
import _ from "lodash";
import { Dispatch } from "redux";
import { IEmployee, iFilter } from "../../models";
import { ThunkDispatch } from "redux-thunk";

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
  type: ActionTypes.ADD_EMPLOYEE;
  payload: IEmployee;
}

export interface IRemoveEmployee {
  type: ActionTypes.REMOVE_USER;
  payload: string;
}

export interface ISetFilter {
  type: ActionTypes.SET_FILTER;
  payload: iFilter;
}

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

export const setFilter = (filter: iFilter): ISetFilter => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: filter,
  };
};

export const addEmployee = (employee: IEmployee) => async (dispatch: Dispatch) => {
  //redirect to view ?


  // todo: if already started return to avoid double add ???

  dispatch({
    type: ActionTypes.START_EMP_ADD,
  });
  try {
    const { data } = await api.post<IEmployee>("/employees", employee);
    dispatch<IAddEmployee>({
      type: ActionTypes.ADD_EMPLOYEE,
      payload: data,
    });
  } catch (e: any) {
    alert(`error adding employee!!! ${e.message}`);
  }
  dispatch({
    type: ActionTypes.STOP_EMP_ADD,
  });
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