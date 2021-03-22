import _ from "lodash";
import { ActionTypes } from "./employee.actionTypes";

const initialState = {};

export default (state = initialState, action: any) => {
  console.log(action);
  
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_EMPLOYEES:
    case ActionTypes.ADD_USER:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
