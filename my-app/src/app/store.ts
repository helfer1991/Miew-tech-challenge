import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import movieReducer from '../features/movie-slice/movie-slice';
import paginationReducer from '../features/pagination-slice/pagination-slice';
import searchReducer from '../features/search-slice/search-slice';

export const rootReducer = combineReducers({
    movies: movieReducer,
    search: searchReducer,
    pagination: paginationReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;