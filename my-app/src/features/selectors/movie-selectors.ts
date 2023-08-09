import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

const selectMovieState = (state: RootState) => state.movies;

export const selectMovies = createSelector(
  selectMovieState,
  movieState => movieState.results.movies
);

export const selectLoading = createSelector(
  selectMovieState,
  movieState => movieState.results.loading
);

export const selectTotalResults = createSelector(
  selectMovieState,
  movieState => movieState.total_results
);

export const selectTotalPages = createSelector(
  selectMovieState,
  movieState => movieState.total_pages
);

export const selectCurrentPage = createSelector(
  (state: RootState) => state.pagination.currentPage,
  currentPage => currentPage
);

