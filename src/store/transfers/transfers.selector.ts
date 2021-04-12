import _ from "lodash";
import { createSelector } from "reselect";
import { RootState } from "../store";

export const vacations = (state: RootState) => state.vacations.vacations;
export const vacationsLoading = (state: RootState) => state.vacations.loading;

export const selectVacations = createSelector([vacations], (vac) => {
  return _.values(vac);
});
