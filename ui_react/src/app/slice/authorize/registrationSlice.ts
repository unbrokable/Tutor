import { AppThunk, RootState } from "./../../store";
import { registrate } from "./../../api/functionsAPI/authorizationAPI";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAuthorize, setRole } from "../AuthorizeSlice";

export interface RegistrationState {
  firstName?: string;
  lastName?: string;
  gender?: string;
  phone?: string;
  email?: string;
  role?: number;
  password?: string;
  confirmPassword?: string;
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
    setRegistrationGender: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        gender: action.payload,
      };
    },
    setRegistrationName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        firstName: action.payload,
      };
    },
    setRegistrationLastName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        lastName: action.payload,
      };
    },
    setRegistrationPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        password: action.payload,
      };
    },
    setRegistrationConfirmPassword: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        confirmPassword: action.payload,
      };
    },
    setRegistrationEmail: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setRegistrationPhone: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        phone: action.payload,
      };
    },
  },
});
export const {
  setRegistrationEmail,
  setRegistrationPassword,
  setRegistrationName,
  setRegistrationLastName,
  setRegistrationConfirmPassword,
  setRegistrationPhone,
  setRegistrationRole,
  setRegistrationGender,
} = registrationSlice.actions;

export default registrationSlice.reducer;
export const selectRegistration = (state: RootState) => state.registration;

export const registrateThunk = (): AppThunk => (dispatch, getState) => {
  const formData = new FormData();
  const state = selectRegistration(getState());

  for (let key of Object.keys(state)) {
    formData.append(key, (state as any)[key]);
  }

  dispatch(registrateAsync(formData)).then((a) => {
    if (a.type.endsWith("fulfilled")) {
      dispatch(setAuthorize(true));
      dispatch(setRole(a.payload.role));
    }
  });
};
