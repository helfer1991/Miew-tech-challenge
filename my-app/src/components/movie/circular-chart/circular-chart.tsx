import React from 'react';
import { ChartSVG, ChartBackground, ChartProgressBar, ChartText } from './circular-chart.styles';

type CircularChartProps = {
    rating: number;
}

export const CircularChart: React.FC<CircularChartProps> = ({ rating }) => {
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const roundedRating = Math.round(rating);
  const offset = circumference - (roundedRating / 100) * circumference;

  return (
    <ChartSVG width="40" height="40">
      <ChartBackground
        cx="20"
        cy="20"
        r={radius}
      />
      <ChartProgressBar
        cx="20"
        cy="20"
        r={radius}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        $rating={roundedRating}
      />
      <ChartText
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {roundedRating}%
      </ChartText>
    </ChartSVG>
  );
};

