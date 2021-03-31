import { RootState } from "../store";
import { createSelector } from "reselect";
const todos = (state: RootState) => state.todos;

export const selectValidTodos = createSelector([todos], (todos) => {
  return todos.filter((td) => td.length);
});
