import React, { useState, memo, useEffect } from 'react';

import { Card, Image, ButtonWrapper, StyledButton } from './styles';
import { CircularChart } from './circular-chart/circular-chart';
import { isMovieInFavourites, isMovieInShames } from '../../utils/helper';
import { useMoviesContext } from '../../hooks/use-local-storage-context';

export type MovieProps = {
  title: string,
  rating: number,
  imageUrl: string,
  id: number,
  onClick?: (title: string) => void,
}

export const Movie: React.FC<MovieProps> = memo(({ title, rating, imageUrl, onClick, id }) => {
  const { movies, setFavouritesUpdated, setShamesUpdated } = useMoviesContext();
  const [imgSrc, setImgSrc] = useState<string | undefined>(`https://www.themoviedb.org/t/p/w150_and_h225_face${imageUrl}`);
  const isFavourite = isMovieInFavourites(title, movies['favourites']);
  const isShame = isMovieInShames(title, movies['shames']);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
      setIsDisabled(isFavourite || isShame);
  }, [isFavourite, isShame]);
  const onError = (): void =>
  setImgSrc(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='110'%3E%3Crect width='400' height='110' style='fill:rgb(233,238,240);stroke-width:3;stroke:rgb(233,238,240)' /%3E%3C/svg%3E"
  );

  const onClickAddToFavourites = () => {
    if(!isFavourite && !isShame) {
      localStorage.setItem(`favourites-${title}`, JSON.stringify({ title, rating, imageUrl, id }));
      setIsDisabled(true);
      setFavouritesUpdated(true);
    }
  }
	
  const onClickAddToWallOfShame = () => {
    if(!isFavourite && !isShame) {
      localStorage.setItem(`shames-${title}`, JSON.stringify({ title, rating, imageUrl, id }));
      setIsDisabled(true);
      setShamesUpdated(true);
    }
  }
  
  return (
    <Card>
      <Image src={imgSrc} onError={onError} alt={`${title}-image`} />
      <CircularChart rating={rating * 10}/>
      {onClick ? 
        <StyledButton $isfavourite onClick={() => onClick(title)}>Remove :(</StyledButton>:
        <ButtonWrapper>
          <StyledButton onClick={onClickAddToFavourites} disabled={isDisabled} $isfavourite $isDisabled={isDisabled}>Favourite! :)</StyledButton>
          <StyledButton onClick={onClickAddToWallOfShame} disabled={isDisabled} $isfavourite={false} $isDisabled={isDisabled}>Shame! :(</StyledButton>
        </ButtonWrapper>
      }
    </Card>
  );
});

Movie.displayName = 'Movie';
