import React, { useEffect, useState } from 'react';

import { fetchMovies } from '../../features/movie-slice/movie-slice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Movie } from '../../components/movie/movie';
import { MoviesContainer, MoviesWrapper } from './styles';
import { CardsListSkeleton } from '../../components/skeletons/cards-list-skeleton/cards-list-skeleton';
import { Pagination } from '../../components/pagination/pagination';
import { ScrollToTopButton } from '../../components/scroll-to-top-button/scroll-to-top-button';
import { SearchBar } from '../../components/search-bar/search-bar';
import { selectMovies, selectLoading, selectTotalPages, selectTotalResults } from '../../features/selectors/movie-selectors';

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
      <MoviesWrapper>
        {movies?.map((movie) =>
          <Movie 
            title={movie.title}
            imageUrl={movie.poster_path}
            rating={movie.vote_average}
            id={movie.id}
            key={movie.id}
          />
        )}
        <ScrollToTopButton />
      </MoviesWrapper>
      <Pagination totalPages={totalPages} />
    </MoviesContainer>
  )
};

export default Movies;
  