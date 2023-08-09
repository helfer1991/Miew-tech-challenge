import styled from 'styled-components';

export const ChartSVG = styled.svg`
    display: block;
    margin: 20px auto;
    position: absolute;
    fill: #000;
    top: 4px;
`;

export const ChartBackground = styled.circle`
    fill: none;
    stroke: #000;
    stroke-width: 5;
`;

export const ChartProgressBar = styled.circle<{ $rating: number}>`
    fill: black;
    stroke: ${({ $rating }) => {
        switch (true) {
        case $rating < 50:
            return 'red';
        case $rating >= 75:
            return 'green';
        default:
            return 'yellow';
        }
    }};
    stroke-width: 3;
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dashoffset 0.5s;
`;

export const ChartText = styled.text`
    font-size: 8px;
    font-weight: 700;
    fill: #fff;
`;
  