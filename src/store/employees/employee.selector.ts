import { createSelector } from "reselect";
import { IEmployee, iFilter } from "../../models";
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

  ids.filter((id) => {
    
    console.log(employees[id].civil_id.includes(filters.civil_id));
    return employees[id].civil_id.includes(filters.civil_id);
  });
  // let keys = Object.keys(employees).filter((key) =>
  //   filtersArray.every((filter) => employees[key][filter].includes(filter))
  // );

  // return keys.map((key: string) => employees[key]);
  return ids.map((id) => employees[id]);
});
