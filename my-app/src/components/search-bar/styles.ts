import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    margin: 10px;
    padding: 10px;

    @media (min-width: 700px) {
        margin: 20px;
    }
`;

export const SearchBarInput= styled.input`
    border: 2px solid rgba(207, 216, 220, .5);
    border-radius: 25px;
    height: 10px;
    margin-bottom: 12px;
    padding: 20px;
    width: 250px;

    &:focus {
        outline: none;
        border: 2px solid #36474f4d;
    }

    @media (min-width: 700px) {
        font-size: 20px;
        width: 400px;

        &::placeholder {
            font-size: 20px;
        }
    }
`;