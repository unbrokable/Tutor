import { AppThunk, RootState } from "./../../store";
import { registrate } from "./../../api/functionsAPI/authorizationAPI";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAuthorize } from "../userSlice";

export interface RegistrationState {
  name?: string;
  email?: string;
  role?: number;
  password?: string;
}

const initialState: RegistrationState = {};

export const registrateAsync = createAsyncThunk(
  "registration/registrate",
  async (data: FormData) => {
    const response = await registrate(data);
    return response.data;
  }
);

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setRegistrationRole: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        role: action.payload,
      };
    },
    setRegistrationName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        name: action.payload,
      };
    },
    setRegistrationPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setRegistrationEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
  },
});
export const {
  setRegistrationEmail,
  setRegistrationPassword,
  setRegistrationName,
  setRegistrationRole,
} = registrationSlice.actions;

export default registrationSlice.reducer;
export const selectRegistration = (state: RootState) => state.registration;

export const registrateThunk =
  (img: any): AppThunk =>
  (dispatch, getState) => {
    const formData = new FormData();
    formData.append("img", img);

    const state = selectRegistration(getState());

    for (let key of Object.keys(state)) {
      formData.append(key, (state as any)[key]);
    }

    dispatch(registrateAsync(formData)).then((a) => {
      if (a.type.endsWith("fulfilled")) {
        dispatch(setAuthorize(true));
        //add role?
      }
    });
  };
