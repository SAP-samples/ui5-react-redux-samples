import { createSlice } from '@reduxjs/toolkit';

// SLICE
export const AppSlice = createSlice({
  name: 'app',

  initialState: {
    mainContent: 'Personal Information',
  },

  reducers: {
    setMainContent: (state, action) => {
      state.mainContent = action.payload;
    },
  },
});

// ACTIONS
export const { setMainContent } = AppSlice.actions;

// SELECTORS
export const selectMainContent = (state) => {
  return state.app.mainContent;
};

export default AppSlice.reducer;
