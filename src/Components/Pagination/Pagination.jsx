import React from "react";

import './pagination.scss';

function Pagination({ wordsPerPage, totalWords, paginate, currentPage, setCurrentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    return (
        <React.Fragment>
            <ul className="pagination">
                <button className="pagination__btn pagination--prev" onClick={() => 
                    currentPage > 1 
                    ? 
                        setCurrentPage(currentPage - 1)
                    : 
                        currentPage}>←</button>
                {
                    pageNumbers.map(number => {
                        return (
                            <li key={number} className={currentPage && currentPage === number
                            ? 
                                "pagination__item--active" 
                            : 
                                "pagination__item"
                            } onClick={() => paginate(number)}>
                                <a href="#" className="pagination__link">{number}</a>
                            </li>
                        )
                    })
                }
                <button className="pagination__btn pagination--next" onClick={() => currentPage > pageNumbers.length - 1
                ? 
                    setCurrentPage(pageNumbers.length)
                : 
                    setCurrentPage(currentPage + 1)
                }>→</button>
            </ul>
        </React.Fragment>
    )
}

export default Pagination;