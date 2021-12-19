import { RootState } from "./../../store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import {
  addAnnouncement,
  loadSubjects,
} from "../../api/functionsAPI/announcementAPI";

export enum Days {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAYS,
}
export interface AnnouncementDateElement {
  day: number;
  startTime: string;
  endTime: string;
}

export interface AnnouncementCreateState {
  subjects?: Array<{
    id: number;
    name: string;
  }>;
  subjectId?: number;
  description?: string;
  location?: string;
  price?: number;
  order: number;
  dates?: Array<AnnouncementDateElement>;
}

const initialState: AnnouncementCreateState = {
  order: 1,
};

export const addAnnouncementAsync = createAsyncThunk(
  "announcement/create",
  async (data: AnnouncementCreateState) => {
    const response = await addAnnouncement({
      ...data,
      dates: data.dates?.map((i) => ({
        ...i,
        startTime: new Date(i.startTime).toJSON(),
        endTime: new Date(i.endTime).toJSON(),
      })),
    });
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
    setDate: (
      state,
      { payload }: PayloadAction<Array<AnnouncementDateElement>>
    ) => {
      state.dates = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadSubjectsAsync.fulfilled, (state, action) => {
      state.subjects = action.payload;
    });
  },
});

export const {
  setPrice,
  setLocation,
  setDescription,
  setSubject,
  setOrder,
  setDate,
} = announcementCreateSlice.actions;

export const selectAnnouncementCreate = (state: RootState) =>
  state.announcementCreate;
export default announcementCreateSlice.reducer;

export const addAnnouncementDate =
  (date: AnnouncementDateElement): AppThunk =>
  (dispatch, getState) => {
    const state = selectAnnouncementCreate(getState()).dates;
    if (state) {
      dispatch(setDate([...state, date]));
    } else {
      dispatch(setDate([date]));
    }
  };

export const updateAnnouncementDate =
  (date: AnnouncementDateElement, id: number): AppThunk =>
  (dispatch, getState) => {
    const state = selectAnnouncementCreate(getState()).dates;
    dispatch(setDate([...state?.filter((_, index) => index !== +id)!, date]));
  };

export const removeAnnouncementDate =
  (id: number): AppThunk =>
  (dispatch, getState) => {
    const state = selectAnnouncementCreate(getState()).dates;
    dispatch(setDate(state?.filter((_, index) => +index !== +id) ?? []));
  };
