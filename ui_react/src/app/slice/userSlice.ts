import { loadUser, updateUser } from "./../api/functionsAPI/userAPI";
import { AppThunk, RootState } from "./../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface UserState {
  image?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  city?: string;
  address?: string;
}

const initialState: UserState = {};

export const updateUserAsync = createAsyncThunk(
  "user/update",
  async (form: FormData) => {
    const response = await updateUser(form);
    return response.data;
  }
);

export const loadUserAsync = createAsyncThunk("user/load", async () => {
  const response = await loadUser();
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCity: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        city: payload,
      };
    },
    setFirstName: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        firstName: payload,
      };
    },
    setLastName: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        lastName: payload,
      };
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        phone: payload,
      };
    },
    setAddress: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        address: payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        return action.payload as UserState;
      })
      .addCase(loadUserAsync.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export const { setAddress, setPhone, setLastName, setFirstName, setUserCity } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

export const updateUserThunk =
  (img: File | null): AppThunk =>
  (dispatch, getState) => {
    const formData = new FormData();
    const state = selectUser(getState());
    if (img) formData.append("image", img);

    for (let key of Object.keys(state)) {
      formData.append(key, (state as any)[key]);
    }

    dispatch(updateUserAsync(formData));
  };
