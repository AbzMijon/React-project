import React from "react";

//routing
import { Link } from "react-router-dom";

//styles
import './SelectedBooks.scss';

function SelectedBooks({ selectedBooks, setCheckLikedBooks, setSelectedBooks }) {
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
                <button className="selected__close" onClick={() => setCheckLikedBooks(false)}>x</button>
                <ul className="selected__list">
                    {selectedBooks.map(e => {
                        return (
                            <li className="selected__book" key={e.id}>
                                <button className="selected__delete-book" type="button" onClick={() => {
                                    const findElem = [...selectedBooks].find(elem => +elem.id === +e.id);
                                    const newSelectedBooks = [...selectedBooks].filter(book => book.id !== findElem.id);
                                    setSelectedBooks(newSelectedBooks);
                                }}>x</button>
                                <Link to={`/bookContent:id=${e.id}`}>
                                    <img className="selected__img" src={e.src} alt="selected image" />
                                </Link>
                                <h5 className="selected__name-book">{e.title}</h5>
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