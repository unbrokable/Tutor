import { removeAnnouncement } from "./../../api/functionsAPI/announcementAPI";
import { RootState } from "./../../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadAnnouncements } from "../../api/functionsAPI/announcementAPI";

export interface AnnouncementState {
  id: number;
  user: string;
  price: number;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface AnnouncementsState {
  announcements?: Array<AnnouncementState>;
}

const initialState: AnnouncementsState = {};

export const loadAnnouncementsAsync = createAsyncThunk(
  "Announcements/load",
  async () => {
    const response = await loadAnnouncements();
    return response.data;
  }
);

export const removeAnnouncementsAsync = createAsyncThunk(
  "Announcements/remove",
  async (id: number) => {
    await removeAnnouncement(id);
    return id;
  }
);

export const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    setAnnouncements: (
      state,
      { payload }: PayloadAction<Array<AnnouncementState>>
    ) => {
      state.announcements = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAnnouncementsAsync.fulfilled, (state, action) => {
        state.announcements = action.payload;
      })
      .addCase(removeAnnouncementsAsync.fulfilled, (state, action) => {
        state.announcements = state.announcements?.filter(
          (i) => +i.id !== +action.payload
        );
      });
  },
});

export const { setAnnouncements } = announcementsSlice.actions;
export const selectAnnouncements = (state: RootState) => state.announcements;
export default announcementsSlice.reducer;
