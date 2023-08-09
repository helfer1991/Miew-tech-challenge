import React from 'react';
import { Movie } from '../../components/movie/movie';
import { Container } from './styles';
import { removeFromLocalStorage } from '../../utils/helper';
import { useMoviesContext } from '../../hooks/use-local-storage-context';

const Favourites: React.FC = () => {
  const { movies, setShouldRefetch } = useMoviesContext();
  const handleRemoveFromLocalStorage = (title: string) => {
    removeFromLocalStorage('favourites', title);
    setShouldRefetch(true);
  };

	const title = movies['favourites'].length === 1 ? 
		`Currently you have ${movies['favourites'].length} movie in your favourites!` : 
		`Currently you have ${movies['favourites'].length} movies in your favourites!`

  return (
		<>
			<h1>{title}</h1>
      <Container>
        {movies['favourites'].map((movie) => <Movie {...movie} key={movie.id} onClick={handleRemoveFromLocalStorage} />)}
      </Container>
		</>
  )
};

export default Favourites;
