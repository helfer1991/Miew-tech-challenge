import { createSelector } from 'reselect';
import { RootState } from '../../app/store';

const selectSearchState = (state: RootState) => state.search;

export const selectSearchResults = createSelector(
  selectSearchState,
  searchState => searchState.results.movies
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  searchState => searchState.results.loading
);

export const selectSearchTotalPages = createSelector(
  selectSearchState,
  searchState => searchState.total_pages
);
