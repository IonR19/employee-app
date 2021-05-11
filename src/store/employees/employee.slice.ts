import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iEmployee, iFilter } from "../../models";
import { SectionOptions } from "../../static/StaticOptions";
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
    site: undefined as string | undefined,
  },
  reducers: {
    setSite(state, { payload }: PayloadAction<string>) {
      state.site = payload;
    },
    setElementPerPage(state, { payload }: PayloadAction<number>) {
      state.pagination.currentPage = 1;
      state.pagination.rowsPerPage = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.pagination.currentPage = payload;
    },
    setFilter(state, { payload }: PayloadAction<iFilter>) {
      state.filter = payload;
      state.pagination.currentPage = 1;
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
        state.loading.creating = false;
      })
      .addCase(addEmployee.pending, (state) => {
        state.loading.creating = true;
      })
      .addCase(addEmployee.rejected, (state) => {
        state.loading.creating = false;
      })
      .addCase(updateEmployeeById.fulfilled, (state, { payload }) => {
        state.byId[payload.id!] = payload;
        state.loading.editing = false;
      })
      .addCase(updateEmployeeById.pending, (state) => {
        state.loading.editing = true;
      })
      .addCase(updateEmployeeById.rejected, (state) => {
        state.loading.editing = false;
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
      })
      .addDefaultCase((state) => {
        state.pagination.currentPage = 1;
      });
  },
});

export const { setFilter, resetFilter, setElementPerPage, setPage, setSite } = employeeSlice.actions;

export default employeeSlice;
