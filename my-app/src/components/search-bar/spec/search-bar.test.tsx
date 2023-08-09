import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../search-bar';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
 
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('SearchBar', () => {
  describe('should render correctly with placeholder text', () => {
    it('should render correctly with placeholder text', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const { getByPlaceholderText } = render(<Router><SearchBar setSearchResult={() => {}} /></Router>);
      const searchInput = getByPlaceholderText('Please input your search term...');
      expect(searchInput).toBeInTheDocument();
    });
  })

  describe('should render correctly when user types in the input field', () => {
    it('should update search input value when user types in the input field', () => {
      const setSearchResult = jest.fn();
      const { getByPlaceholderText } = render(<Router><SearchBar setSearchResult={setSearchResult} /></Router>);
      const searchInput = getByPlaceholderText('Please input your search term...') as HTMLInputElement;
      const inputValue = 'search value';
  
      fireEvent.change(searchInput, { target: { value: inputValue } });
  
      expect(searchInput.value).toBe(inputValue);
    });
  
    it('should update search result when form is submitted', () => {
      const setSearchResult = jest.fn();
      const { getByPlaceholderText, getByRole } = render(<Router><SearchBar setSearchResult={setSearchResult} /></Router>);
      const searchInput = getByPlaceholderText('Please input your search term...');
      const form = getByRole('textbox');
      const inputValue = 'search value';
  
      fireEvent.change(searchInput, { target: { value: inputValue } });
      fireEvent.submit(form);
  
      expect(setSearchResult).toHaveBeenCalledWith(inputValue);
    });


		it('should redirect to the correct search URL when form is submitted', () => {
			const setSearchResult = jest.fn();
			const { getByPlaceholderText, getByRole } = render(
				<MemoryRouter>
					<SearchBar setSearchResult={setSearchResult} />
				</MemoryRouter>
			);
			const searchInput = getByPlaceholderText('Please input your search term...') as HTMLInputElement;
			const form = getByRole('textbox');
			const inputValue = 'barbie';
	
			fireEvent.change(searchInput, { target: { value: inputValue } });
			fireEvent.submit(form);
	
			expect(mockedUsedNavigate).toHaveBeenCalledWith('/search?search_term=barbie')
		});
  });
});