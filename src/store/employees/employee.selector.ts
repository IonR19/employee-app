import { createSelector } from "reselect";

export const employees = (state: any) => state.employees;

export const selectAllEmployees = createSelector([employees], (empObject) => {
  const keys = Object.keys(empObject);
  return keys.map((key) => {
    return empObject[key];
  });
});
