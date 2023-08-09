import React from 'react';
import { Container } from './styles';
import { CardSkeleton } from '../card-skeleton/card-skeleton';

export const CardsListSkeleton: React.FC = () => (
    <Container>
        {Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={`Card-Skeletin-${index}`} />
            ))
        }
    </Container>
)