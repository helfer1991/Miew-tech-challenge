import styled from 'styled-components';

export const MoviesContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MoviesWrapper = styled.div`
  @media (min-width: 1200px) {
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr;
     grid-gap: 16px;
     margin: 24px;
     align-items: stretch;
	}
`;