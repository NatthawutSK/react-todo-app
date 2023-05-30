import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { todo } from "node:test";
import { RootState } from "store/store";

type TodoState = {
  todos: Array<{ todo: string; isCompleted: boolean }>;
};

const initialValues: TodoState = {
  todos: [],
};

// export const setValueAsync = createAsyncThunk(
//   "Todo/setValueAsync",
//   async () => {
//     const fetchdata = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     return fetchdata.data;
//   }
// );

const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialValues,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      const newTodoItem = {
        todo: action.payload,
        isCompleted: false,
      };

      state.todos.push(newTodoItem);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((_, i) => i !== action.payload);
    },
    edit: (
      state: TodoState,
      action: PayloadAction<{ index: number; edited: string }>
    ) => {
      state.todos[action.payload.index].todo = action.payload.edited;
    },
    checkTodo: (
      state: TodoState,
      action: PayloadAction<{ index: number; checked: boolean }>
    ) => {
      // console.log(action.payload[0].index, action.payload[0].checked);
      state.todos[action.payload.index].isCompleted = !action.payload.checked;
    },
  },
  extraReducers: (builder) => {},
});

export const { addTodo, deleteTodo, edit, checkTodo } = TodoSlice.actions;
export const TodoSelector = (store: RootState) => store.TodoReducer;
export default TodoSlice.reducer;
