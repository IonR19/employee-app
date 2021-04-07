import produce from "immer";
import { IVacation } from "../../models";
import { ActionTypes, IVacationActions } from "./vacation.actionTypes";

type VacationsStore = {
  [id: string]: IVacation;
};
export interface IVacationReducer {
  vacations: VacationsStore;
  loading: Boolean;
}

const initialState: IVacationReducer = {
  vacations: {},
  loading: false,
};

const VacationReducer = produce((state: IVacationReducer = initialState, action: IVacationActions) => {
  switch (action.type) {
    case ActionTypes.ADD_VACATION:
    case ActionTypes.FETCH_VACATIONS:
    case ActionTypes.REMOVE_VACATION:
      state.loading = true;
      return state;

    case ActionTypes.ADD_VACATION_SUCCESS:
      state.loading = false;
      state.vacations[action.payload.id] = action.payload;
      return state;

    case ActionTypes.FETCH_VACATIONS_SUCCESS:
      state.loading = false;
      state.vacations = action.payload.reduce((pre: VacationsStore, cur) => {
        pre[cur.id] = cur;
        return pre;
      }, {});
      return state;

    case ActionTypes.REMOVE_VACATION_SUCCESS:
      state.loading = false;
      delete state.vacations[action.payload];
      return state;

    default:
      return state;
  }
});

export default VacationReducer;
