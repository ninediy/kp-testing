import React, { useState } from 'react';

export default function PaginationComponent({
  total = 0,
  limit = 3,
  onSelectPage
}) {
  const page_counter = Math.ceil(total / limit);
  const [page, setPage] = useState(1);

  const doPrev = () => {
    if (page > 1) {
      const pageNumber = page - 1;
      onSelectPage(pageNumber);
      setPage(pageNumber);
    }
  };

  const doNext = () => {
    if (page < page_counter) {
      const pageNumber = page + 1;
      onSelectPage(pageNumber);
      setPage(pageNumber);
    }
  };

  const renderPagination = () => {
    const arr = [];
    for (let index = 0; index < page_counter; index++) {
      arr.push(index);
    }
    return arr.map((resp, key) => {
      return (
        <li
          className={'page-item ' + (page === key + 1 ? 'active' : '')}
          key={key}
        >
          <button
            className="page-link"
            onClick={() => {
              const pageNumber = key + 1;
              setPage(pageNumber);
              onSelectPage(pageNumber);
            }}
          >
            {key + 1}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="float-right">
      <nav aria-label="Page navigation float-right">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={() => doPrev()}>
              Previous
            </button>
          </li>
          {renderPagination()}
          <li className="page-item">
            <button className="page-link" onClick={() => doNext()}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
