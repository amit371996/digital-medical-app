import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: {
    engagementHistory: [], // Initialize engagementHistory as an empty array
    engagementNote: '',
  },
  searchQuery: '',
  measureTableData: [],
  
};

export const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    updateAppointments: (state, action) => {
      state.appointments = action.payload;
    },
    updateScheduleDashboard: (state, action) => {
      state.scheduledashboard = action.payload;
    },
    updateCriteriaTableData: (state, action) => {
      state.criteriaTableData = action.payload;
    },
    updateCareData: (state, action) => {
      state.caremanagementData = action.payload;
    },
    updateCheckDashboard: (state, action) => {
      state.checkDashboard = action.payload;
    },
    updateLibraryData: (state, action) => {
      state.librarydata = action.payload;
    },
    updateCheckLibrary: (state, action) => {
      state.checkLibrary = action.payload;
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    addRowToMeasureTable: (state, action) => {
      if (state.scheduledashboard) {
        state.scheduledashboard.unshift(action.payload);
      } else {
        state.scheduledashboard = [action.payload]; // Initialize as an array if undefined
      }
    },
    updateEngagementHistory: (state, action) => {
      state.engagementHistory = action.payload;
    },
    updateEngagementNote: (state, action) => {
      state.engagementNote = action.payload;
    },
    addEngagementNote: (state, action) => {
      if (state.engagementHistory) {
        state.engagementHistory.unshift(action.payload);
      } else {
        state.engagementHistory = [action.payload]; // Initialize as an array if undefined
      }
    },
  },
});

export const { updateAppointments } =
  appointmentSlice.actions;

export const { updateScheduleDashboard } =
  appointmentSlice.actions;

export const { updateCriteriaTableData } =
  appointmentSlice.actions;

export const { updateCareData } =
  appointmentSlice.actions;

export const { updateCheckDashboard } =
  appointmentSlice.actions;

export const { updateLibraryData } =
  appointmentSlice.actions;

export const { updateCheckLibrary } =
  appointmentSlice.actions;
export const { updateSearchQuery } =
  appointmentSlice.actions;
export const { addRowToMeasureTable } =
  appointmentSlice.actions;
  export const { updateEngagementHistory } =
  appointmentSlice.actions;
  export const { updateEngagementNote } =
  appointmentSlice.actions;
  export const { addEngagementNote } =
  appointmentSlice.actions;
export default appointmentSlice.reducer;
