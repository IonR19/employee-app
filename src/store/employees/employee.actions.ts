import { api } from "../../utils";
import { ActionTypes } from "./employee.actionTypes";
import _ from "lodash";
import { Dispatch } from "redux";

export const addEmployee = (formData: any) => {
  //add to server
  //add locally?
  //redirect to view ?
};

export const downloadEmployees = (filter?: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.get("/employees", { params: { _limit: 30 } });
    dispatch({
      type: ActionTypes.GET_EMPLOYEES,
      payload: _.mapKeys(data, "id"),
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: err.message,
    });
  }
};
