import { api } from "../../utils";
import { ActionTypes } from "./vacation.actionTypes";
import { Dispatch } from "redux";
import { IEmployee, iFilter } from "../../models";
import _ from "lodash";

export interface IAddVacation {
  type: ActionTypes.ADD_VACATION;
}

export interface IAddVacationSuccess {
  type: ActionTypes.ADD_VACATION_SUCCESS;
  payload: string;
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
    await api.delete<IEmployee>(`/vacation/${id}`);
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
  payload: string;
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
    const { data } = await api.get("/vacations");
    dispatch({
      type: ActionTypes.FETCH_VACATIONS_SUCCESS,
    });
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_VACATIONS_ERROR,
      payload: e.message,
    });
  }
};

// export const fetchEmployees = (filter?: string) => async (dispatch: Dispatch) => {
//   try {
//     const { data } = await api.get("/employees", { params: { _limit: 100 } });
//     dispatch<IFetchEmployees>({
//       type: ActionTypes.FETCH_EMPLOYEES,
//       payload: _.mapKeys(data, "id"),
//     });
//   } catch (err) {
//     dispatch<IFetchEmployeesError>({
//       type: ActionTypes.FETCH_EMPLOYEE_ERROR,
//       payload: err.message,
//     });
//   }
// };
// export const fetchEmployeesById = (id: string) => async (dispatch: Dispatch) => {
//   try {
//     const { data } = await api.get<IEmployee>(`/employees/${id}`);
//     dispatch<IAddEmployee>({
//       type: ActionTypes.ADD_EMPLOYEE,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch<IAddEmployeeError>({
//       type: ActionTypes.ADD_EMPLOYEE_ERR,
//       payload: err.message,
//     });
//   }
// };

// export const updateEmployeeById = (id: string, emp: IEmployee) => async (dispatch: Dispatch) => {
//   try {
//     const { data } = await api.patch<IEmployee>(`/employees/${id}`, emp);
//     console.log(data);

//     dispatch<IUpdateEmployee>({
//       type: ActionTypes.UPDATE_EMPLOYEE,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch<IUpdateEmployeeError>({
//       type: ActionTypes.UPDATE_EMPLOYEE_ERR,
//       payload: err.message,
//     });
//   }
// };

// export const setFilter = (filter: iFilter): ISetFilter => {
//   return {
//     type: ActionTypes.SET_FILTER,
//     payload: filter,
//   };
// };

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
