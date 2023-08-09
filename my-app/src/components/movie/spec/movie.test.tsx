import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Movie } from '../movie';
import type { MovieProps } from '../movie';
import { isMovieInFavourites, isMovieInShames } from '../../../utils/helper';
import { MoviesContext } from '../../../context/local-storage-context';

jest.mock('../../../utils/helper');

const mockMoviesContextValue = {
  movies: { 
    favourites: [
      { "title": "Resident Evil: Death Island", "rating": 7.9, "imageUrl": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg", "id": 1 }
    ],
    shames: [
      { "title": "Barbie Dreamtopia", "rating": 6.5, "imageUrl": "/ewsAXj1IbpnAn4bQs3XdsESmm26.jpg", "id": 2 }
    ]
  },
  setShouldRefetch: jest.fn(),
  setFavouritesUpdated: jest.fn(),
  setShamesUpdated: jest.fn(),
};

const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
    length: 0,
  };

global.localStorage = mockLocalStorage;
  
const { getByText, getByAltText } = screen;

describe('Movie', () => {
  const mockedIsMovieInFavourites = isMovieInFavourites as jest.MockedFunction<typeof isMovieInFavourites>;
  const mockedIsMovieInShames = isMovieInShames as jest.MockedFunction<typeof isMovieInShames>;

  describe('renders Movie component when it receives an onClickProps', () => {
    const movie: MovieProps = {
      title: 'Test Movie',
      rating: 8,
      imageUrl: 'test-image.jpg',
      id: 1,
      onClick: jest.fn(),
    };

    beforeEach(() => {
      render(<Movie {...movie} />, { 
        wrapper: ({ children }) => <MoviesContext.Provider value={mockMoviesContextValue}>{children}</MoviesContext.Provider>
      });
    })
  
    it('should render the Movie component correctly', () => {
      expect(getByText('80%')).toBeInTheDocument();
      expect(getByAltText('Test Movie-image')).toBeInTheDocument();
    });
  
    it('should call the onClick function when the remove button is clicked', () => {
      const removeButton = getByText('Remove :(');
      fireEvent.click(removeButton);
  
      expect(movie.onClick).toHaveBeenCalledTimes(1);
      expect(movie.onClick).toHaveBeenCalledWith('Test Movie');
    });
  });

  describe('renders Movie component when it does not receive an onClick Props', () => {
    const movie: MovieProps = {
      title: 'Test Movie',
      rating: 8,
      imageUrl: 'test-image.jpg',
      id: 1,
    };

    beforeEach(() => {
      render(<Movie {...movie} />, { 
        wrapper: ({ children }) => <MoviesContext.Provider value={mockMoviesContextValue}>{children}</MoviesContext.Provider>
      });
      Object.defineProperty(window, 'localStorage', {
        value: mockLocalStorage,
      });
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
    

    it('should add the movie to Movies when the "Favourite!" button is clicked', () => {
      const favouriteButton = getByText('Favourite! :)');
      fireEvent.click(favouriteButton);
  
      expect(mockLocalStorage.setItem).toHaveBeenCalledTimes(1);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
        'favourites-Test Movie',
        JSON.stringify({ title: 'Test Movie', rating: 8, imageUrl: 'test-image.jpg', id: 1 })
      );
    });
  
    it('should add the movie to shames when the "Shame! :(" button is clicked', () => {
      const shameButton = getByText('Shame! :(');
      fireEvent.click(shameButton);
  
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'shames-Test Movie',
        JSON.stringify({ title: 'Test Movie', rating: 8, imageUrl: 'test-image.jpg', id: 1 })
      );
    });
  
    it('should disable the buttons if the movie is already in Favourites', () => {
      mockedIsMovieInFavourites.mockReturnValue(true);
      const favouriteButton = getByText('Favourite! :)');
      const shameButton = getByText('Shame! :(');
      fireEvent.click(favouriteButton);
  
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'favourites-Test Movie',
        JSON.stringify({ title: 'Test Movie', rating: 8, imageUrl: 'test-image.jpg', id: 1 })
      ); 
  
      expect(favouriteButton).toBeDisabled();
      expect(shameButton).toBeDisabled();
    });
  
    it('should disable the buttons if the movie is already in shames', () => {
      mockedIsMovieInShames.mockReturnValue(true);
      const favouriteButton = getByText('Favourite! :)');
      const shameButton = getByText('Shame! :(');
      fireEvent.click(shameButton);
  
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'shames-Test Movie',
        JSON.stringify({ title: 'Test Movie', rating: 8, imageUrl: 'test-image.jpg', id: 1 })
      ); 
  
      expect(favouriteButton).toBeDisabled();
      expect(shameButton).toBeDisabled();
    });
  })
});
