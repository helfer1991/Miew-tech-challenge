import React from 'react';
import { render, screen } from '@testing-library/react';
import Shames from '../shames';
import { MoviesContext } from '../../../context/local-storage-context';

jest.mock('../../../utils/helper');

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0,
};

global.localStorage = mockLocalStorage;
  
const { getByText } = screen;

describe('Shames', () => {
  describe('renders Shames component with 1 shames', () => {
		const mockMoviesContextValue = {
			movies: { 
				favourites: [
				],
				shames: [
          { "title": "Resident Evil: Death Island", "rating": 7.9, "imageUrl": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg", "id": 1 }
				]
			},
			setShouldRefetch: jest.fn(),
      setFavouritesUpdated: jest.fn(),
      setShamesUpdated: jest.fn(),
		};

    beforeEach(() => {
      render(<Shames />, { 
        wrapper: ({ children }) => <MoviesContext.Provider value={mockMoviesContextValue}>{children}</MoviesContext.Provider>
      });
    })
  
    it('should render a title', () => {
      expect(getByText('Currently you have 1 movie in your wall of shame!')).toBeInTheDocument();
    });
  
    it('should render the movie in your wall of shame', () => {
      const image = screen.getByRole('img');
			expect(getByText('79%')).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://www.themoviedb.org/t/p/w150_and_h225_face/qayga07ICNDswm0cMJ8P3VwklFZ.jpg');
      expect(image).toHaveAttribute('alt', 'Resident Evil: Death Island-image');
    });
  });

	describe('renders Shames component with 1 favourite', () => {
		const mockMoviesContextValue = {
			movies: { 
				favourites: [
				],
				shames: [
          { "title": "Resident Evil: Death Island", "rating": 7.9, "imageUrl": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg", "id": 1 },
					{ "title": "Barbie Dreamtopia", "rating": 6.5, "imageUrl": "/ewsAXj1IbpnAn4bQs3XdsESmm26.jpg", "id": 2 }
				]
			},
			setShouldRefetch: jest.fn(),
      setFavouritesUpdated: jest.fn(),
      setShamesUpdated: jest.fn(),
		};

    beforeEach(() => {
      render(<Shames />, { 
        wrapper: ({ children }) => <MoviesContext.Provider value={mockMoviesContextValue}>{children}</MoviesContext.Provider>
      });
    })
  
    it('should render a title', () => {
      expect(getByText('Currently you have 2 movies in your wall of shame!')).toBeInTheDocument();
    });
  
    it('should render the movies in your wall of shame', () => {
      const [imageFirstMovie, imageSecondMovie] = screen.getAllByRole('img',);

			expect(getByText('79%')).toBeInTheDocument();
      expect(imageFirstMovie).toHaveAttribute('src', 'https://www.themoviedb.org/t/p/w150_and_h225_face/qayga07ICNDswm0cMJ8P3VwklFZ.jpg');
      expect(imageFirstMovie).toHaveAttribute('alt', 'Resident Evil: Death Island-image');

			expect(getByText('65%')).toBeInTheDocument();
      expect(imageSecondMovie).toHaveAttribute('src', 'https://www.themoviedb.org/t/p/w150_and_h225_face/ewsAXj1IbpnAn4bQs3XdsESmm26.jpg');
      expect(imageSecondMovie).toHaveAttribute('alt', 'Barbie Dreamtopia-image');
    });
  });
});
