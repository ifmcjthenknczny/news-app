import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const displayModeSlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {
    toggleDisplayMode: (state) => {
      state.displayMode = state.displayMode === "list" ? "tiles" : "list";
    },
    toggleMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export type DisplayMode = typeof DISPLAY_MODES[number];

export const DISPLAY_MODES = ["list", "tiles"] as const;

export const selectDisplayMode = (state: RootState) =>
  state.displayMode.displayMode;

export const selectIsMenuOpen = (state: RootState) =>
  state.displayMode.isMenuOpen;

export const { toggleDisplayMode, toggleMenuOpen, closeMenu } = displayModeSlice.actions;

export default displayModeSlice.reducer;
