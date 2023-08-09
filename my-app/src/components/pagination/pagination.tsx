import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nextPage, previousPage } from '../../features/pagination-slice/pagination-slice';
import { Container, PageCount, StyledButton } from './pagination.styles';

type PaginationProps = {
    totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const dispatch = useAppDispatch();
  const { currentPage } = useAppSelector((state) => state.pagination);

  const handleNextPage = () => {
    dispatch(nextPage());
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
    window.scrollTo(0, 0);
  };

  return (
    <Container>
        <StyledButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous page
        </StyledButton>
        <PageCount>Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong></PageCount>
        <StyledButton onClick={handleNextPage} disabled={currentPage === totalPages}>Next page</StyledButton>
    </Container>
  );
};
