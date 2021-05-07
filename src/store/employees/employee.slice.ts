import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iEmployee, iFilter } from "../../models";
import { addEmployee, fetchEmployees, updateEmployeeById } from "./employee.actions";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    byId: {} as { [id: string]: iEmployee },
    order: [] as string[],
    filter: {} as iFilter,
    pagination: {
      currentPage: 1,
      rowsPerPage: 10,
      length: 0,
    },
  },
  reducers: {
    setElementPerPage(state, { payload }: PayloadAction<number>) {
      state.pagination.currentPage = 1;
      state.pagination.rowsPerPage = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.pagination.currentPage = payload;
    },
    setFilter(state, { payload }: PayloadAction<iFilter>) {
      state.filter = payload;
    },
    resetFilter(state) {
      state.filter = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployees.fulfilled, (state, { payload }) => {
        state.byId = payload.reduce((pre, cur) => {
          pre[cur.id!] = cur;
          return pre;
        }, {} as any);
        state.order = payload.map((emp) => emp.id!);
        state.pagination.length = state.order.length;
      })
      .addCase(addEmployee.fulfilled, (state, { payload }) => {
        state.byId[payload.id!] = payload;
        state.order.push(payload.id!);
        state.pagination.length = state.order.length;
      })
      .addCase(updateEmployeeById.fulfilled, (state, { payload }) => {
        state.byId[payload.id!] = payload;
      });
  },
});

export const { setFilter, resetFilter, setElementPerPage, setPage } = employeeSlice.actions;

export default employeeSlice;
