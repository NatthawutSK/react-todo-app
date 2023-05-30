import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "store/store";

type Counter1State = {
  counter: number;
  loading: boolean;
  users: Array<any>;
  error: any;
};

const initialValues: Counter1State = {
  counter: 0,
  loading: false,
  users: [],
  error: "",
};

export const setValueAsync = createAsyncThunk(
  "counter1/setValueAsync",
  async () => {
    const fetchdata = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return fetchdata.data;
  }
);

const counter1Slice = createSlice({
  name: "counter1",
  initialState: initialValues,
  reducers: {
    increase: (state: Counter1State, action: PayloadAction<void>) => {
      state.counter = state.counter + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setValueAsync.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    });

    builder.addCase(setValueAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.users = [];
    });

    builder.addCase(setValueAsync.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { increase } = counter1Slice.actions;
export const counter1Selector = (store: RootState) => store.counter1Reducer;
export default counter1Slice.reducer;
