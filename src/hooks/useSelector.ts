import { RootState } from "../redux/store";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector as useSelectorReactRedux } from "react-redux";

const useSelector: TypedUseSelectorHook<RootState> = useSelectorReactRedux;

export default useSelector;
