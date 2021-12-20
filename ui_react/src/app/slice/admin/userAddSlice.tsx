import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addUser } from "../../api/functionsAPI/adminAPI";
import { AppThunk, RootState } from "../../store";
import { selectUsers, setUsers } from "./usersSlice";

export interface UserAddState {
  firstName: string;
  email: string;
  password: string;
  role: number;
}

const initialState: UserAddState = {
  firstName: "",
  email: "",
  password: "",
  role: 0,
};

export const addUserAsync = createAsyncThunk(
  "user/add",
  async (user: UserAddState) => {
    const response = await addUser(user);
    return response.data;
  }
);

export const userAddSlice = createSlice({
  name: "useradd",
  initialState,
  reducers: {
    setUserAddName: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        firstName: payload,
      };
    },
    setUserAddEmail: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        email: payload,
      };
    },
    setUserAddPassword: (state, { payload }: PayloadAction<string>) => {
      return {
        ...state,
        password: payload,
      };
    },
    setUserAddRole: (state, { payload }: PayloadAction<number>) => {
      return {
        ...state,
        role: payload,
      };
    },
  },
});

export const {
  setUserAddRole,
  setUserAddPassword,
  setUserAddEmail,
  setUserAddName,
} = userAddSlice.actions;

export default userAddSlice.reducer;

export const selectUserAdd = (state: RootState) => state.userAdd;

export const addUserThunk = (): AppThunk => (dispatch, getState) => {
  const userAdd = selectUserAdd(getState());
  const state = selectUsers(getState());
  dispatch(addUserAsync(userAdd)).then((act) => {
    if (act.type.endsWith("fulfilled")) {
      dispatch(setUsers([...state.users!, act.payload]));
    }
  });
};
