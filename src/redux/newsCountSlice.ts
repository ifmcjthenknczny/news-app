import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { initialState } from "./state";

export const newsCountSlice = createSlice({
  name: "newsCount",
  initialState,
  reducers: {
    setNewsCount(state, action: PayloadAction<number>) {
      state.newsCount = action.payload;
    },
  },
});

export const selectNewsCount = (state: RootState) => state.newsCount.newsCount;

export const { setNewsCount } = newsCountSlice.actions;

export default newsCountSlice.reducer;
