import React, { useState, useEffect } from "react";

import './bookContent.scss';
import { useParams } from 'react-router-dom';

function BookContent() {

    const {bookID} = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/dataBaseBooks/${bookID}`)
        .then(response => response.json())
        .then(books => setBook(books))
    }, [bookID])

    return (
        <React.Fragment>
            {book &&
                <div className="book__wrapper">
                    <h2 className="book__name">{book.title}</h2>
                    <div className="book__this">
                        <div className="book__page"></div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default BookContent;