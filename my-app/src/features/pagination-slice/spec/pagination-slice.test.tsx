import paginationReducer, {
    nextPage,
    previousPage,
} from '../pagination-slice';
import type { PaginationState } from '../pagination-slice';

describe('counter reducer', () => {
  const initialState: PaginationState = {
    currentPage: 1,
  };

  it('should handle increase page number', () => {
    const actual = paginationReducer(initialState, nextPage());
    expect(actual.currentPage).toEqual(2);
  });

  it('should handle decrease page number', () => {
    const actual = paginationReducer({ currentPage: 2 }, previousPage());
    expect(actual.currentPage).toEqual(1);
  });
});
  