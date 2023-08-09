import type { Movie } from "./local-storage-context";

export const getUpdatedMovies = (prefix: string, existingMovies: Movie[]): Movie[] => {
  const updatedMovies: Movie[] = [];
  for (const key in localStorage) {
    if (key.startsWith(prefix)) {
      const movie = JSON.parse(localStorage[key]);
      updatedMovies.push(movie);
    }
  }
  return updatedMovies;
};