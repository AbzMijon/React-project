import React from "react";

import './pagination.scss';

function Pagingation({wordsPerPage, totalWords, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <React.Fragment>
            <ul className="pagination">
                {
                    pageNumbers.map(number => {
                        return (
                            <li className="pagination__item" key={number} onClick={() => paginate(number)}>
                                <a href="#" className="pagination__link">{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}

export default Pagingation;