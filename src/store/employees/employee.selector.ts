import { createSelector } from "reselect";
import { RootState } from "../store";

const employees = (state: RootState) => state.employees!.data;
const filters = (state: RootState) => state.employees!.filters;

export const selectAllEmployees = createSelector([employees], (empObject) => {
  const keys = Object.keys(empObject);
  return keys.map((key) => {
    return empObject[key];
  });
});

export const selectFilteredEmployees = createSelector([employees, filters], (employees, filters) => {
  let ids: string[] = Object.keys(employees);

  ids = ids.filter((id) => {
    return employees[id].civil_id.includes(filters.civil_id);
  });
  return ids.map((id) => employees[id]);
});

const selectId = (state: RootState, id: string) => id;

export const selectEmployeeById = createSelector([employees, selectId], (employees, id) => {
  return employees[id];
});
