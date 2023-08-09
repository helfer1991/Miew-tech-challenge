type Movie = {
    title: string,
    rating: number,
    imageUrl: string,
    id: number,
}

export const isMovieInFavourites = (movieTitle: string, movies: Array<Movie>) =>
    movies.some((movie) => movie.title === movieTitle);

export const isMovieInShames = (movieTitle: string, movies: Array<Movie>) =>
    movies.some((movie) => movie.title === movieTitle);

export const removeFromLocalStorage = (key: string, title: string) => {
    localStorage.removeItem(`${key}-${title}`);
};
      