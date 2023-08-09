import { configureStore } from '@reduxjs/toolkit';
import { fetchMovies, movieSlice } from '../movie-slice';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockApiResponse = {
  data: {
    results: [
      {
        original_title: 'Movie 1',
        id: 1,
        overview: 'Movie 1 Overview',
        poster_path: 'poster_path_1',
        title: 'Movie 1',
        vote_average: 7.5,
      },
    ],
    total_pages: 10,
    total_results: 100,
  },
};

describe('movieSlice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: movieSlice.reducer,
    });

    (jest.fn() as jest.MockedFunction<any>).mockResolvedValue(mockApiResponse);
  });

  it('fetchMovies - loading state', async () => {
    store.dispatch(fetchMovies(1));

    // Test the initial state before the promise is resolved
    expect(store.getState().results.loading).toBe(true);
  });

  // to be fixed
  /*it('fetchMovies - after loading state', async () => {
    // Dispatch the fetchMovies action with a mocked currentPage value
    const fetchMoviesPromise = store.dispatch(fetchMovies(1));

    await fetchMoviesPromise;

    // Test the state after the promise is resolved
    expect(store.getState().results.loading).toBe(false);
    expect(store.getState().results.movies).toEqual(mockApiResponse.data.results);
    expect(store.getState().total_pages).toBe(mockApiResponse.data.total_pages);
    expect(store.getState().total_results).toBe(mockApiResponse.data.total_results);
  });*/
});
