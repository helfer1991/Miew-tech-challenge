import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Pagination } from '../../components/pagination/pagination';
import { SearchResultsWrapper, SearchBarContainer, SearchResultsContainer} from './styles';
import { Movie } from '../../components/movie/movie';
import { searchMovies } from '../../features/search-slice/search-slice';
import { SearchBar } from '../../components/search-bar/search-bar';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { currentPage } = useAppSelector((state) => state.pagination);
  const { results, total_pages: totalPages } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isResultsAboveZero = results.movies.length > 0;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTermFromQuery = searchParams.get('search_term') || '';
    setSearchTerm(searchTermFromQuery);
  }, [location.search]);

  const handleSearch = () => {
    dispatch(searchMovies({ searchTerm, currentPage }));
  };

  useEffect(() => {
    if (currentPage > 1 || searchTerm) {
      handleSearch(); 
    }
  }, [currentPage, searchTerm]);

  const title = isResultsAboveZero ? <h1>Your search results for {searchTerm}!</h1> : <h1>No results!</h1>;

  return (
    <SearchResultsContainer>
      <SearchBarContainer>
       {searchTerm && title}
        <SearchBar setSearchResult={setSearchTerm} />
      </SearchBarContainer>
      {isResultsAboveZero &&
        <SearchResultsWrapper>
          {results.movies?.map((movie) => (
            <Movie
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </SearchResultsWrapper>
      }
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </SearchResultsContainer>
  );
};

export default Search;
