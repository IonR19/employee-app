import { api } from "../../utils";
import { iEmployee, iFilter } from "../../models";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk("fetchEmployees", async (filter?: string) => {
  const { data } = await api.get("/employees", { params: { _limit: 1e5 } });
  return data as iEmployee[];
});

export const fetchEmployeesById = createAsyncThunk("fetchEmployeesById", async (id: string) => {
  const { data } = await api.get<iEmployee>(`/employees/${id!}`);
  return data;
});

export const updateEmployeeById = createAsyncThunk("updateEmployeeById", async (emp: iEmployee) => {
  const { data } = await api.patch<iEmployee>(`/employees/${emp.id}`, emp);
  return data;
});

interface iDeleteEmployeeById {
  id: string;
  cb?: Function;
}

export const deleteEmployeeById = createAsyncThunk<string, iDeleteEmployeeById>(
  "deleteEmployeeById",
  async ({ id, cb }) => {
    await api.delete(`/employees/${id}`);
    cb && cb();
    return id;
  }
);

//redirect to view ?
//todo: if already started return to avoid double add ???
export const addEmployee = createAsyncThunk("addEmployee", async (employee: iEmployee) => {
  const { data } = await api.post<iEmployee>("/employees", employee);
  return data;
});

/*
let t = 0;
export const setLateFilter = (filter: keyof iFilter, value: string) => (dispatch: Dispatch) => {
  if (t) {
    clearTimeout(t);
  }
  t = setTimeout(() => {
    dispatch<ISetFilter>({
      type: ActionTypes.SET_FILTER,
      payload: {
        filter,
        value,
      },
    });
  }, 1500);
};
*/
