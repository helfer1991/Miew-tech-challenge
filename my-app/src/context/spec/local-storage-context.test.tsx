import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MoviesContextProvider, MoviesContext } from "../local-storage-context";
import type { MoviesContextType } from "../local-storage-context";

const TestComponent = () => {
  const moviesContext = useContext(MoviesContext);
  if (!moviesContext) {
    throw new Error("MoviesContext not provided.");
  }

  const { movies } = moviesContext;

  const moviesFromLocalStorage = {
    'favourites': [{
      title: 'Barbie',
      rating: 7.5,
      imageUrl: 'coisas.jpg',
      id: 1,
    }]
  };

  return (
    <div>
      {movies['favourites'].map((movie) => <p key={movie.title}>{movie.title}</p>)}
      <p role="list">{moviesFromLocalStorage['favourites'].map((movie) => movie.title).join(', ')}</p>
    </div>
  );
};

describe('MoviesContextProvider', () => {
  it('should render the children components', () => {
    render(
      <MoviesContextProvider>
        <div>Test Component</div>
      </MoviesContextProvider>
    );

    const element = screen.getByText('Test Component');
    expect(element).toBeInTheDocument();
  });

  it('should render the movies that are favourites', () => {
    render(
      <MoviesContextProvider>
        <TestComponent />
      </MoviesContextProvider>
    );

    expect(screen.getByText('Barbie')).toBeInTheDocument();
  });
});

