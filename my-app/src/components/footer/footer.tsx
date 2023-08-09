import React from "react";

import { Container, Image, Name } from "./styles";

const Footer: React.FC = () => {
	const imageSrc = 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg';
	
	return (
    <Container>
      <Image src={imageSrc} loading="lazy" alt="tmdb-image-footer" />
      <Name>Made by Helder</Name>
    </Container>
	);
}

export default Footer;
