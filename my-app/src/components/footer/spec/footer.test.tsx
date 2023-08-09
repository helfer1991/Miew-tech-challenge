import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("Footer component", () => {
  it("renders 'Made by Helder' text", () => {
    render(<Footer />);
    const textElement = screen.getByText("Made by Helder");
    expect(textElement).toBeInTheDocument();
  });

  it('renders an image with an alt attribute', async () => {
    render(<Footer />);
    const expectedSrc = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg';
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expectedSrc);
    expect(image).toHaveAttribute('alt', 'tmdb-image-footer');
  });
});