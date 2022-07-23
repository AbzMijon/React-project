import React, { useState, useEffect } from "react";

import './bookContent.scss';
import { useParams } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function BookContent() {

    const [fontSizeType, setFontSizeType] = useState('medium');
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
                    <header className="book__header">
                        <Link to='/'><AiFillHome className="home-icon" /></Link>
                        <h2 className="book__name">{book.author + ` "${book.title}"`}</h2>
                        <select className="book__text-settings" onChange={(e) => setFontSizeType(e.target.value)}>
                            <option value="default_value" disabled selected>Размер шрифта</option>
                            <option value="mini">mini</option>
                            <option value="medium">medium (default)</option>
                            <option value="max">max</option>
                        </select>
                    </header>
                    <main className="book__main">
                    <p className="book__word-amount">{book.text.split(' ').length} слов/а в тексте!</p>
                        <div className="book__page">
                            <div className={'book__text--' + fontSizeType}>{book.text}</div>
                        </div>
                    </main>
                    </div>
            }
        </React.Fragment>
    )
}

export default BookContent;