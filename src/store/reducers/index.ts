import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userRedcuer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userRedcuer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
