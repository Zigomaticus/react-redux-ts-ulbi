import { combineReducers } from "redux";
import { userRedcuer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userRedcuer,
});

export type RootState = ReturnType<typeof rootReducer>;
