import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBarContainer, SearchBarInput } from './styles';

type SearchBarProps = {
  setSearchResult: (searchInput: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResult }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearchInput(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSearchResult(searchInput);
      navigate(`/search?search_term=${encodeURIComponent(searchInput)}`);
  }

  return (
    <SearchBarContainer>
      <form onSubmit={handleSubmit}>
        <SearchBarInput
          type="text"
          name="search"
          placeholder="Please input your search term..."
          value={searchInput}
          onChange={handleChange}
        />
      </form>
    </SearchBarContainer>
  );
};
