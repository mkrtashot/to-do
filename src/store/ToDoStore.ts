import { TaskType } from "../helpers/types";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialStateStore = {
  tasks: [] as TaskType[],
};

export const toDoStoreSlice = createSlice({
  name: "To Do Store",
  initialState: { ...initialStateStore },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.Id === action.payload.Id ? { ...action.payload } : task,
      );
    },
  },
});

export const { addTask, updateTask } = toDoStoreSlice.actions;

export default configureStore({
  reducer: {
    toDo: toDoStoreSlice.reducer,
  },
});

export type StoreType = { toDo: typeof initialStateStore };
