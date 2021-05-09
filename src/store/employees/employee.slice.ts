import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iEmployee, iFilter } from "../../models";
import { addEmployee, deleteEmployeeById, fetchEmployees, updateEmployeeById } from "./employee.actions";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    byId: {} as { [id: string]: iEmployee },
    order: [] as string[],
    filter: {} as iFilter,
    loading: {
      getting: false,
      deleting: false,
      creating: false,
      editing: false,
    },
    pagination: {
      currentPage: 1,
      rowsPerPage: 10,
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
      })
      .addCase(addEmployee.fulfilled, (state, { payload }) => {
        state.byId[payload.id!] = payload;
        state.order.push(payload.id!);
      })
      .addCase(updateEmployeeById.fulfilled, (state, { payload }) => {
        state.byId[payload.id!] = payload;
      })
      .addCase(deleteEmployeeById.pending, (state) => {
        state.loading.deleting = true;
      })
      .addCase(deleteEmployeeById.rejected, (state) => {
        state.loading.deleting = false;
        //display notification
      })
      .addCase(deleteEmployeeById.fulfilled, (state, { payload }) => {
        delete state.byId[payload];

        let index = state.order.indexOf(payload);
        state.order.splice(index, 1);

        state.loading.deleting = false;
        const { currentPage, rowsPerPage } = state.pagination;
        const { length } = state.order;
        state.pagination.currentPage = Math.min(currentPage, Math.ceil(length / rowsPerPage));
      });
  },
});

export const { setFilter, resetFilter, setElementPerPage, setPage } = employeeSlice.actions;

export default employeeSlice;
