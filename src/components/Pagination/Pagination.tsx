import React from 'react';
import './Pagination.scss';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from 'redux/store';
import { setCurrentPage } from 'redux/slice';

export const Pagination = () => {
  const { currentPage } = useSelector((state: RootState) => state.mainReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handlePageClick = (event: Record<string, number>) => {
    dispatch(setCurrentPage(event.selected + 1));
  };
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      initialPage={currentPage - 1}
      onPageChange={handlePageClick}
      pageRangeDisplayed={10}
      pageCount={10}
      previousLabel="<"
    />
  );
};
