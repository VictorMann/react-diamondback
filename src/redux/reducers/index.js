import { combineReducers } from "redux";

import cat from "./categoryReducer";
import carr from "./carrosselReducer";

export default combineReducers({
  cat,
  carr
});