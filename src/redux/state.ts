import { DisplayMode } from "./displayModeSlice";

export interface AppState {
  displayMode: DisplayMode;
  newsCount: number;
  isMenuOpen: boolean;
}

export const initialState: AppState = {
  displayMode: "list",
  newsCount: 0,
  isMenuOpen: false,
};
