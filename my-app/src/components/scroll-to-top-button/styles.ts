import styled from "styled-components";

import { FaAngleUp } from 'react-icons/fa';

export const Wrapper = styled.div`
    display: block;
    opacity: 0.8;
`;

export const Icon = styled(FaAngleUp)`
    bottom: 30px;
    display: block;
    height: 30px;
    position: fixed;
    left: 50%;
    z-index: 10;

    @media (min-width: 700px) {
        bottom: 70px;
        width: 40px;
    }
`;