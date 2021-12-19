import { GoogleLoginResponse } from "react-google-login";
import { AppThunk, RootState } from "./../../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  login,
  loginWithGoogle,
} from "../../api/functionsAPI/authorizationAPI";
import { setAuthorize, setRole } from "../AuthorizeSlice";
export interface LoginState {
  email?: string;
  password?: string;
}

const initialState: LoginState = {};

export const loginAsync = createAsyncThunk(
  "loginSlice/login",
  async (data: LoginState) => {
    const response = await login(data);
    return response.data;
  }
);

export const loginWithGoogleAsync = createAsyncThunk(
  "loginform/loginGoogle",
  async (data: GoogleLoginResponse) => {
    const token = data.getAuthResponse().id_token;
    const response = await loginWithGoogle(token);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      return {
        ...initialState,
      };
    });
  },
});

export const { setPassword, setEmail } = loginSlice.actions;
export default loginSlice.reducer;

export const selectLogin = (state: RootState) => state.login;

export const loginThunk = (): AppThunk => (dispatch, getState) => {
  const state = selectLogin(getState());
  dispatch(loginAsync(state)).then((a) => {
    if (a.type.endsWith("fulfilled")) {
      debugger;
      dispatch(setAuthorize(true));
      dispatch(setRole(a.payload.role));
    }
    throw a;
  });
};
