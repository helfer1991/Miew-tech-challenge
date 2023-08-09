import styled from "styled-components";

export const Container = styled.header`
    align-items: center;
    display: flex;
    padding: 12px 24px;
    justify-content: space-between;
    background-color: rgb(3,37,65);
    height: 70px;
    position: sticky;
    margin-bottom: 24px;
    border-bottom: 2px solid #cfd8dc80;
    z-index: 100;
    top: 0;

    @media (min-width: 700px) {
        height: 80px;
        padding: 12px 48px;
    }
`;

export const Logo = styled.img`
    height: 6vh;
    width: 15vh;
`;