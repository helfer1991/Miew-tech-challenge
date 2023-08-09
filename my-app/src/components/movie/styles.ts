import styled from "styled-components";

export const Card = styled.article`
  border: 0 solid rgba(207, 216, 220, .5);
  border-radius: 8px;
  padding: 24px;
  position: relative;
  width: 250px;
`;

export const Image = styled.img`
  height: 300px;
  width: 250px;
  border-radius: 10px;
  margin-bottom: 12px;
  background-color: rgba(207,216,220);

  @media (min-width: 700px) {
    height: 300px;
    width: 250px;
  }
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button<{ $isfavourite: boolean, $isDisabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? 'rgba(19, 1, 1, 0.4)' : props.$isfavourite ? '#2bbd87' : '#bd342b')};
  border: 0px;
  border-radius: 10px;
  color: ${(props) => props.$isDisabled ? 'rgba(255, 255, 255, 0.4)' : '#fff'};
  font-weight: 700;
  padding: 4px 8px;
`;