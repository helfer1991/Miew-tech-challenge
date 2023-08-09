import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavigationBarContainer, NavigationBarButton, NavigationBarItemsContainer, NavigationBarItems } from './navigation-bar.styles';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigationRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);

    const handleNavigationItemClick = () => {
      setIsMenuOpen(false);
    };

  return (
    <NavigationBarContainer ref={navigationRef}>
        <NavigationBarButton onClick={() => setIsMenuOpen((prev) => !prev)} data-testid="navigation-bar-button">
            <AiOutlineMenu />
        </NavigationBarButton>
        <NavigationBarItemsContainer $isMenuOpen={isMenuOpen}>
            <NavigationBarItems>
                <Link to="/movies" onClick={handleNavigationItemClick}>Movies</Link>
            </NavigationBarItems>
            <NavigationBarItems>
                <Link to="/search" onClick={handleNavigationItemClick}>Search</Link>
            </NavigationBarItems>
            <NavigationBarItems>
                <Link to="/favourites" onClick={handleNavigationItemClick}>Favourites</Link>
            </NavigationBarItems>
            <NavigationBarItems>
                <Link to="/shames" onClick={handleNavigationItemClick}>Wall of shame</Link>
            </NavigationBarItems>
        </NavigationBarItemsContainer>
    </NavigationBarContainer>
  );
};

export default Navbar;
