import { createSlice } from '@reduxjs/toolkit';

export type InitialState = {
  currentPage: number;
}

export const initialState: InitialState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'paginationReducer',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});
  
export const { nextPage, previousPage } = paginationSlice.actions;
export default paginationSlice.reducer;
  