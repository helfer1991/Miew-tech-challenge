import React from 'react';
import { Movie } from '../../components/movie/movie';
import { Container } from './styles';
import { removeFromLocalStorage } from '../../utils/helper';
import { useMoviesContext } from '../../hooks/use-local-storage-context';

const Shames: React.FC = () => {
  const { movies, setShouldRefetch } = useMoviesContext();
  const handleRemoveFromLocalStorage = (title: string) => {
    removeFromLocalStorage('shames', title);
    setShouldRefetch(true);
  };

  const title = movies['shames'].length === 1 ? 
  `Currently you have ${movies['shames'].length} movie in your wall of shame!` : 
  `Currently you have ${movies['shames'].length} movies in your wall of shame!`
  
  return (
      <>
        <h1>{title}</h1>
        <Container>
          {movies['shames'].map((movie) => <Movie {...movie} key={movie.id} onClick={handleRemoveFromLocalStorage} />)}
        </Container>
      </>
  );
};

export default Shames;
