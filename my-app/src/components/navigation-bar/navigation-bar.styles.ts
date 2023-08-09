import styled, { css } from 'styled-components';

export const NavigationBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    color: #fff;

    @media (min-width: 700px) {
        padding: 10px;
        margin: 10px;
    }
`;

export const NavigationBarButton = styled.button`
    font-size: 32px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 5px;
`;

export const NavigationBarItemsContainer = styled.ul<{ $isMenuOpen: boolean }>`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgb(3,37,65, 0.9);
    width: 200px;
    display: none;

    ${({ $isMenuOpen }) =>
        $isMenuOpen &&
        css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
            height: 170px;
            border-radius: 0 0 12px 0;
    `}
`;

export const NavigationBarItems = styled.li`
  list-style: none;
  margin: 10px 0;
    a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;

        &:hover {
            background-color: #444;
        }

        @media (min-width: 700px) {
            padding: 10px;
        }
    }
`;