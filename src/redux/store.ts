import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import displayModeReducer from "./displayModeSlice";
import newsCountReducer from "./newsCountSlice";

const store = configureStore({
  reducer: {
    displayMode: displayModeReducer,
    newsCount: newsCountReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
