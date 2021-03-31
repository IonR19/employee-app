import { ActionTypes } from "./actionTypes";
export const addEmployee = (data: string) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: data,
  };
};

export const removeEmployee = (data: string) => {
  return {
    type: ActionTypes.REMOVE_USER,
    payload: data,
  };
};
