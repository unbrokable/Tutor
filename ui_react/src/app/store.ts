import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationReducer from "./slice/authorize/registrationSlice";
import loginReducer from "./slice/authorize/loginSlice";
import authorizeReducer from "./slice/AuthorizeSlice";
import notificationReducer from "./slice/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    authorize: authorizeReducer,
    login: loginReducer,
    registration: registrationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
