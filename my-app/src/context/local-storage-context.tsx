import React, { createContext, useEffect, useState } from "react";
import { getUpdatedMovies } from "./helper";

export type Movie = {
  title: string;
  rating: number;
  imageUrl: string;
  id: number;
};

export type LocalStorageMoviesProvider = {
    children: React.ReactNode;
}

export type MoviesContextType = {
  movies: { favourites: Movie[]; shames: Movie[] };
  setShouldRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  setFavouritesUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  setShamesUpdated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

export const MoviesContextProvider: React.FC<LocalStorageMoviesProvider> = ({ children }) => {
  const [movies, setMovies] = useState<{ favourites: Movie[]; shames: Movie[] }>({
    favourites: [],
    shames: [],
  });
  const [favouritesUpdated, setFavouritesUpdated] = useState(false);
  const [shamesUpdated, setShamesUpdated] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(false);

  useEffect(() => {
    const storedMovies: { [key: string]: Movie } = Object.entries(localStorage)
      .filter(([key, value]) => key.startsWith("favourites-") || key.startsWith("shames-"))
      .reduce((acc, [key, value]) => {
        const parsedValue = JSON.parse(value);
        acc[key] = parsedValue;
        return acc;
      }, {} as { [key: string]: Movie });

    const favourites: Movie[] = [];
    const shames: Movie[] = [];

    for (const key in storedMovies) {
      if (key.startsWith("favourites-")) {
        favourites.push(storedMovies[key]);
      } else if (key.startsWith("shames-")) {
        shames.push(storedMovies[key]);
      }
    }

    setMovies({ favourites, shames });

    if (shouldRefetch) {
      setShouldRefetch(false);
    }
  }, [shouldRefetch]);

  useEffect(() => {
    if (favouritesUpdated || shamesUpdated) {
      setMovies((prevMovies) => ({
        favourites: favouritesUpdated ? getUpdatedMovies('favourites-', prevMovies.favourites) : prevMovies.favourites,
        shames: shamesUpdated ? getUpdatedMovies('shames-', prevMovies.shames) : prevMovies.shames,
      }));
      setFavouritesUpdated(false);
      setShamesUpdated(false);
    }
  }, [favouritesUpdated, shamesUpdated]);

  return (
    <MoviesContext.Provider value={{ movies, setShouldRefetch, setShamesUpdated, setFavouritesUpdated }}>
      {children}
    </MoviesContext.Provider>
  );
};
