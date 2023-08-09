import React, { useContext } from 'react';
import { MoviesContext } from '../context/local-storage-context';

export const useMoviesContext = () => {
    const context = useContext(MoviesContext);
    if (!context) {
      throw new Error("useMoviesContext must be used within a MoviesProvider");
    }
    return context;
};