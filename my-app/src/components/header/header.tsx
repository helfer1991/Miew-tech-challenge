import React from "react";
import { Navbar } from '../navigation-bar/navigation-bar';

import { Container, Logo } from "./styles";

export const Header: React.FC = () => {
  const imageSrc = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
  
	return (
    <Container>
      <Navbar />
      <Logo src={imageSrc} alt="tmdb-logo" />
    </Container>
  )
}