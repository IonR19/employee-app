import { ActionTypes } from "./vodos.actionTypes";

const intial_state: string[] = ["sample todo"];

export const vodoReducer = (state = intial_state, action: any): string[] => {
  switch (action.type) {
    case ActionTypes.ADD_USER_2:
      return [...state, action.payload];
    case ActionTypes.REMOVE_USER_2:
      return state.filter((todo) => todo != action.payload);
    default:
      return state;
  }
};
