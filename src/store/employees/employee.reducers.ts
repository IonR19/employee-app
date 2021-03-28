import produce from "immer";
import { IEmployee, iFilter } from "../../models";
import { ActionTypes, IEmployeeActions } from "./employee.actionTypes";

export interface IEmployeesReducer {
  data: {
    [id: string]: IEmployee;
  };
  filters: iFilter;
}

const initialState: IEmployeesReducer = {
  data: {},

  filters: {
    name: "",
    civil_id: "",
    file_no: "",
    phone: "",
    section: "",
  },
};

const EmployeesReducer = produce((state: IEmployeesReducer = initialState, action: IEmployeeActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_EMPLOYEES:
      action;
      state.data = action.payload;
      return;
    case ActionTypes.ADD_EMPLOYEE:
    case ActionTypes.UPDATE_EMPLOYEE:
      state.data[action.payload.id] = action.payload;
      return;
    case ActionTypes.REMOVE_USER:
      delete state.data[action.payload];
      return;
    case ActionTypes.SET_FILTER:
      state.filters = action.payload;
      return;
    default:
      return state;
  }
});

export default EmployeesReducer;
