import { RootState } from "./../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const announcementsSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAnnouncementsAsync.fulfilled, (state, action) => {
      state.announcements = action.payload;
    });
  },
});

export const selectAnnouncements = (state: RootState) => state.announcements;
export default announcementsSlice.reducer;
