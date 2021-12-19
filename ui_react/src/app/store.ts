import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registrationReducer from "./slice/authorize/registrationSlice";
import loginReducer from "./slice/authorize/loginSlice";
import authorizeReducer from "./slice/AuthorizeSlice";
import userReducer from "./slice/userSlice";
import notificationReducer from "./slice/notificationSlice";
import announcementCreateReducer from "../app/slice/tutor/AnnouncementCreateSlice";
import announcementsReducer from "../app/slice/tutor/AnnouncementsSlice";

import { errorMiddleware } from "./middleware/errorMiddleware";
import { authorizeMiddleware } from "./middleware/authorizeMiddleware";

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
    announcementCreate: announcementCreateReducer,
    user: userReducer,
    notification: notificationReducer,
    authorize: authorizeReducer,
    login: loginReducer,
    registration: registrationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware).concat(authorizeMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
