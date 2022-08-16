import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { fetchBooksList } from "../../api/booksApi";
import { PATH } from "../../constans/routes";
import Spinner from "../../Components/SpinnerLoading/Spinner";
import { useSelector } from "react-redux";
import { isServerError } from "../../store/selectors/serverErrorSelectors";
import ServerError from '../../Components/ServerError/ServerError';
import './bookContent.scss';

function BookContent() {

    const [fontSizeType, setFontSizeType] = useState('medium');
    const {bookID} = useParams();
    const [book, setBook] = useState(null);
    const isError = useSelector(isServerError);

    useEffect(() => {   
        fetchBooksList().then(({data}) => {
            const findBook = data.find(bookApi => bookApi.id === bookID);
            setBook(findBook);
        })    
    }, [bookID])

    if(book === null && !isError) {
        return <Spinner />
    }

    return (
        <React.Fragment>
            {isError && <ServerError />}
            {book &&
                <div className="book__wrapper">
                    <header className="book__header">
                        <Link to={PATH.initialPage}><AiFillHome className="home-icon" /></Link>
                        <h2 className="book__name">{book.author + ` "${book.title}"`}</h2>
                        <select className="book__text-settings" defaultValue={"default_value"} onChange={(e) => setFontSizeType(e.target.value)}>
                            <option value="default_value" disabled>Размер шрифта</option>
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