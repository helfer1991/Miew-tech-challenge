import { createSlice } from '@reduxjs/toolkit';

export type PaginationState = {
  currentPage: number;
}

export const initialPaginationState: PaginationState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'paginationReducer',
  initialState: initialPaginationState,
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
  