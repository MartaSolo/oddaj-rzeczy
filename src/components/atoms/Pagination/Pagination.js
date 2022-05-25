import { useState, useEffect } from "react";
import "./Pagination.scss";

const Pagination = ({
  totalPages,
  currentPage,
  organizations,
  handlePageChange,
}) => {
  const [pageNumbers, setPageNumbers] = useState(1);

  useEffect(() => {
    const pages = [...Array(totalPages).keys()].map((number) => number + 1);
    setPageNumbers(pages);
  }, [totalPages, organizations]);

  if (pageNumbers.length > 1) {
    return (
      <div className="organizations__list-pagination">
        {pageNumbers.map((number) => {
          return (
            <button
              className={
                number === currentPage
                  ? "organizations__list-button active"
                  : "organizations__list-button"
              }
              key={number}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
