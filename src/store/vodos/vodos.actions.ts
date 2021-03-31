import { ActionTypes } from "./vodos.actionTypes";

export const addVodo = (data: string) => {
  return {
    type: ActionTypes.ADD_USER_2,
    payload: data,
  };
  //add to server
  //add locally?
  //redirect to view ?
};

export const removeVodo = (data: string) => {
  return {
    type: ActionTypes.REMOVE_USER_2,
    payload: data,
  };
};
