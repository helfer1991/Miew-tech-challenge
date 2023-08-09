import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom'; 
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Pagination } from '../../components/pagination/pagination';
import { SearchBarContainer, SearchResultsContainer} from './styles';
import { searchMovies } from '../../features/search-slice/search-slice';
import { SearchBar } from '../../components/search-bar/search-bar';
import { selectSearchResults, selectSearchLoading, selectSearchTotalPages } from '../../features/selectors/search-selectors';
import { CardsListSkeleton } from '../../components/skeletons/cards-list-skeleton/cards-list-skeleton';
import { MoviesList } from '../../components/movies-list/movies-list';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { currentPage } = useAppSelector((state) => state.pagination);
  const movies = useAppSelector(selectSearchResults);
  const loading = useAppSelector(selectSearchLoading);
  const totalPages = useAppSelector(selectSearchTotalPages);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isResultsAboveZero = movies.length > 0;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTermFromQuery = searchParams.get('search_term') || '';
    setSearchTerm(searchTermFromQuery);
  }, [location.search]);

  useEffect(() => {
    if (currentPage > 1 || searchTerm) {
      handleSearch(); 
    }
  }, [currentPage, searchTerm]);

  const handleSearch = () => {
    dispatch(searchMovies({ searchTerm, currentPage }));
  };

  const title = isResultsAboveZero ? <h1>Your search results for {searchTerm}!</h1> : <h1>No results!</h1>;

  if(loading) {
    return <CardsListSkeleton />;
  }

  return (
    <SearchResultsContainer>
      <SearchBarContainer>
       {searchTerm && title}
        <SearchBar setSearchResult={setSearchTerm} />
      </SearchBarContainer>
      {isResultsAboveZero &&
        <MoviesList movies={movies} />
      }
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </SearchResultsContainer>
  );
};

export default Search;
