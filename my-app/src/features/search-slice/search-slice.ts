import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Movie = {
  original_title: string;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
}

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async ({ searchTerm, currentPage }: { searchTerm: string, currentPage: number }, thunkAPI) => {
    const API_URL = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&page=${currentPage}`;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWE2YjM5ODM4NGMyZmE1OWZmMDQzMjY4ZDEzMGY4NSIsInN1YiI6IjY0YmM2ZDEyMGVkMmFiMDExY2E3YWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oGkxwT-FPk5JotCwl52xrGy9CnV3zIn9sU8RNsrnJ_U',
      },
    };

    const response = await axios.get(API_URL, options);
    return response.data;
  }
);

type Response = {
  results: {
    movies: Array<Movie>;
    loading: boolean;
  }
  total_pages: number;
}

const initialState: Response = {
  results: {
    movies: [],
    loading: false,
  },
  total_pages: 0,
};
  

export const searchSlice = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.results.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.results.loading = false;
        state.results.movies = action.payload.results;
        state.total_pages = action.payload.total_pages;
      });
  },
});

export default searchSlice.reducer;
