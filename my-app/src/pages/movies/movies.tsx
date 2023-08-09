import React, { useEffect, useState } from 'react';

import { fetchMovies } from '../../features/movie-slice/movie-slice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { MoviesContainer } from './styles';
import { CardsListSkeleton } from '../../components/skeletons/cards-list-skeleton/cards-list-skeleton';
import { Pagination } from '../../components/pagination/pagination';
import { SearchBar } from '../../components/search-bar/search-bar';
import { selectMovies, selectLoading, selectTotalPages, selectTotalResults } from '../../features/selectors/movie-selectors';
import { MoviesList } from '../../components/movies-list/movies-list';

const Movies: React.FC = () => {
  const [ , setSearchTerm] = useState<string>('');
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.pagination);
  const movies = useAppSelector(selectMovies);
  const loading = useAppSelector(selectLoading);
  const totalResults = useAppSelector(selectTotalResults);
  const totalPages = useAppSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [dispatch, currentPage]);

  if (loading) {
    return <CardsListSkeleton />;
  }

  return (
    <MoviesContainer>
      <h1>There are currently {totalResults} movies in our database</h1>
      <SearchBar setSearchResult={setSearchTerm} />
      <MoviesList movies={movies} />
      <Pagination totalPages={totalPages} />
    </MoviesContainer>
  )
};

export default Movies;
  