import styled from "styled-components";

export const Container = styled.footer`
    border-top: 2px solid rgba(207,216,220,.5);
    height: 200px;
    align-items: center;
    flex-direction: column;
    display: flex;

    @media (min-width: 700px) {
        flex-direction: row;
        margin-top: 32px;
        justify-content: space-between;
    }

    @media (min-width: 1200px) {
        padding: 25px 75px;
    }
`;

export const Image = styled.img`
    height: 100px;
    width: 300px;
`;

export const Name = styled.h1`
    color: rgba(207,216,230);
    font-size: 18px;
    font-weight: 700;
    margin: 0;

    @media (min-width: 700px) {
        font-size: 36px;
    }

    @media (min-width: 1200px) {
        padding: 25px 0;
    }
`;