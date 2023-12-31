import styled from 'styled-components';

export const SearchResultsContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchBarContainer = styled.div`
  margin: 10px;
  padding: 10px;

  @media (min-width: 700px) {
    margin: 20px;
  }
`;
