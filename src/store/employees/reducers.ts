import { ActionTypes } from "./actionTypes";

const intial_state: string[] = ["sample todo"];

export const listReducer = (state = intial_state, action: any): string[] => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return [...state, action.payload];
    case ActionTypes.REMOVE_USER:
      return state.filter((todo) => todo != action.payload);
    default:
      return state;
  }
};
