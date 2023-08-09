import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from '../navigation-bar';

describe('NavigationBar component', () => {
  it('renders NavigationBar component along with the navigation options', () => {
    render(<Router><NavigationBar /></Router>);
    
    const menuButton = screen.getByTestId('navigation-bar-button');
    expect(menuButton).toBeInTheDocument();
  
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Favourites')).toBeInTheDocument();
    expect(screen.getByText('Wall of shame')).toBeInTheDocument();
  });

  it('renders Movies navigation option with its href source', async () => {
    render(<Router><NavigationBar /></Router>);

    const moviesButton = screen.getByRole('link', { name: 'Movies'});
    expect(moviesButton).toHaveAttribute('href', '/movies');
  });

  it('renders Search navigation option with its href source', async () => {
    render(<Router><NavigationBar /></Router>);

    const searchButton = screen.getByRole('link', { name: 'Search'});
    expect(searchButton).toHaveAttribute('href', '/search');
  })
  it('renders Favourites navigation option with its href source', async () => {
    render(<Router><NavigationBar /></Router>);

    const favouritesButton = screen.getByRole('link', { name: 'Favourites'});
    expect(favouritesButton).toHaveAttribute('href', '/favourites');
  });

  it('renders Wall of shame navigation option with its href source', async () => {
    render(<Router><NavigationBar /></Router>);
    
    const wallOfShameButton = screen.getByRole('link', { name: 'Wall of shame'});
    expect(wallOfShameButton).toHaveAttribute('href', '/shames');
  });
});

