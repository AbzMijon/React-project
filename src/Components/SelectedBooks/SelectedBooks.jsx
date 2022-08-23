import React from "react";

import { useNavigate } from "react-router-dom";
import './selectedBooks.scss';
import { PATH } from '../../constans/routes.js';
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../store/selectors/userSelectors";

function SelectedBooks({ selectedBooks, setCheckLikedBooks, setSelectedBooks }) {

    const userLoggedIn = useSelector(isLoggedIn);
    const navigate = useNavigate();
    return (
        <div className="modal__liked" onClick={() => setCheckLikedBooks(false)}>
            <div className="selected__wrap" onClick={e => e.stopPropagation()}>
                <h2 className="selected__title">
                    {selectedBooks.length ?
                        `Избранное (${selectedBooks.length})`
                        :
                        'Вы ничего не выбрали!'
                    }
                </h2>
                <button className="selected__close"
                    onClick={() => setCheckLikedBooks(false)}>
                    x
                </button>
                <ul className="selected__list">
                    {selectedBooks.map(selectedBook => {
                        return (
                            <li className="selected__book" key={selectedBook.id}>
                                <button className="selected__delete-book" type="button"
                                    onClick={() => {
                                        const findElem = [...selectedBooks].find(findElem => +findElem.id === +selectedBook.id);
                                        const newSelectedBooks = selectedBooks.filter(newBook => newBook.id !== findElem.id);
                                        setSelectedBooks(newSelectedBooks);
                                }}>x</button>
                                <img 
                                    className="selected__img"
                                    src={selectedBook.src} alt="selected image"
                                    onClick={(selectedBook.isAvailableForGuest || userLoggedIn) 
                                    ? 
                                        () => navigate(PATH.bookPage(selectedBook.id)) 
                                    : 
                                        () => null} 
                                />
                                <h5 className="selected__name-book">{selectedBook.title}</h5>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
        
    )
}

export default SelectedBooks;