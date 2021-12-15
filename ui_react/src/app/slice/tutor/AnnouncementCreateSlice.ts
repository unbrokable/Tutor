import { RootState } from "./../../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import {
  addAnnouncement,
  loadSubjects,
} from "../../api/functionsAPI/announcementAPI";
export interface AnnouncementCreateState {
  subjects?: Array<{
    id: number;
    name: string;
  }>;
  subjectId?: number;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  price?: number;
  order: number;
}

const initialState: AnnouncementCreateState = {
  order: 1,
};

export const addAnnouncementAsync = createAsyncThunk(
  "announcement/create",
  async (data: AnnouncementCreateState) => {
    const response = await addAnnouncement(data);
    return response.data;
  }
);

export const loadSubjectsAsync = createAsyncThunk("subject/load", async () => {
  const response = await loadSubjects();
  return response.data;
});

export const announcementCreateSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    setOrder: (state, { payload }: PayloadAction<number>) => {
      state.order = payload;
    },
    setSubject: (state, { payload }: PayloadAction<number>) => {
      state.subjectId = payload;
    },
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.description = payload;
    },
    setLocation: (state, { payload }: PayloadAction<string>) => {
      state.location = payload;
    },
    setPrice: (state, { payload }: PayloadAction<number>) => {
      state.price = payload;
    },
    setStartDate: (state, { payload }: PayloadAction<string>) => {
      state.startDate = payload;
    },
    setEndDate: (state, { payload }: PayloadAction<string>) => {
      state.endDate = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSubjectsAsync.fulfilled, (state, action) => {
      state.subjects = action.payload;
    });
  },
});

export const {
  setEndDate,
  setStartDate,
  setPrice,
  setLocation,
  setDescription,
  setSubject,
  setOrder,
} = announcementCreateSlice.actions;

export const selectAnnouncementCreate = (state: RootState) =>
  state.announcementCreate;
export default announcementCreateSlice.reducer;

export const SetOrderThunk =
  (orderNumber: number): AppThunk =>
  (dispatch, getState) => {
    switch (orderNumber) {
    }
  };
