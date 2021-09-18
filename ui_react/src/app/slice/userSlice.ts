import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export enum RoleType {
  Student,
  Teacher,
}
export interface UserState {
  isAuthorize: boolean;
  role: string | null;
}

const initialState: UserState = {
  isAuthorize: false,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthorize: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isAuthorize: action.payload,
      };
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      return {
        ...state,
        role: action.payload,
      };
    },
    resertUser: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const { setRole, setAuthorize, resertUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
