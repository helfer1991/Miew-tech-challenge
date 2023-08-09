import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../header";
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar: React.FC = () => <div data-testid="mock-navbar">Mock Navbar</div>;

jest.mock("../../navigation-bar/navigation-bar", () => ({
  Navbar
}));

describe("Header component", () => {
	it('should render the Header component with the Navbar', async () => {
    render(<Router><Header /></Router>);

    const mockNavbar = screen.getByTestId('mock-navbar');
    expect(mockNavbar).toBeInTheDocument();
    expect(screen.getByText('Mock Navbar')).toBeInTheDocument();
  });
	
  it('renders an image with an alt attribute', async () => {
    render(<Router><Header /></Router>);
    const expectedSrc = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expectedSrc);
    expect(image).toHaveAttribute('alt', 'tmdb-logo');
  });
});