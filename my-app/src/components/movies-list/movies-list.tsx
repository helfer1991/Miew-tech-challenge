import React from 'react';
import { Movie } from '../movie/movie';
import { Container } from './styles';
import { ScrollToTopButton } from '../scroll-to-top-button/scroll-to-top-button';

type Movie = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

type Movies = {
    movies: Array<Movie>;
}

export const MoviesList: React.FC<Movies> = ({ movies }) => (
  <Container>
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
  </Container>
);