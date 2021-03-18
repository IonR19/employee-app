import { ActionTypes } from "./actionTypes";
export const addEmployee = (formData: any) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: formData,
  };
  //add to server
  //add locally?
  //redirect to view ?
};
