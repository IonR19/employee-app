import { createSelector } from "reselect";
import { iFilter } from "../../models";
import { RootState } from "../store";

const employees = (state: RootState) => state.employees!.data;
const filters = (state: RootState) => state.employees!.filters;

//TODO - FIX TYPESCRIPT OF FIND A BETTER SOLUTION
export const selectAllEmployees = createSelector([employees], (empObject) => {
  const keys = Object.keys(empObject);
  return keys.map((key) => {
    return empObject[key];
  });
});
export const selectFilteredEmployees = createSelector(
  [employees, filters],
  (employees, filters: iFilter) => {
    let ids: string[] = Object.keys(employees);
    let filtersArray = Object.keys(filters);

    // for every id, return ids, filtered that every id passes that filters array
    ids = ids.filter((id) => {
      return filtersArray.every((filter) => {
        //@ts-ignore

        if (filters[filter] && employees[id][filter]) {
          //@ts-ignore
          return employees[id][filter].includes(filters[filter]);
        }
        return true;
      });
    });
    return ids.map((id) => employees[id]);
  }
);

const selectId = (state: RootState, id: string) => id;

export const selectEmployeeById = createSelector([employees, selectId], (employees, id) => {
  return employees[id];
});
