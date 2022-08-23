import React from "react";

import { isLoggedIn } from "../../../store/selectors/userSelectors";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constans/routes.js";
import { FaLock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from "react-redux";
import NotAvailableModal from "../../NotAvailableModal/NotAvailableModal";
import './books.scss';

function Books({ filteredBooks, bookSrc, setBookSrc, valueOfAvailableModal, setValueOfAvailableModal, selectedBooks, setSelectedBooks }) {

    const navigate = useNavigate();
    const userLoggedIn = useSelector(isLoggedIn);
    
    return (
        <section className='books'>
            <ul className='books__list'>
                {filteredBooks.map(filteredBook => {
                    return (
                        <div className="books__wrapper" key={filteredBook.id} onClick={() => setBookSrc(filteredBook.src)}>
                            <li className='books__item' onClick={(filteredBook.isAvailableForGuest || userLoggedIn)
                                ? 
                                    () => {navigate(`${PATH.bookPage(filteredBook.id)}`)}
                                : 
                                    () => {setValueOfAvailableModal(true)}}>
                                <figure className='books__figure'>
                                    <img src= {filteredBook.src}  alt='' className='books__img' />
                                    <div className='books__add' onClick={(event) => {
                                        if(!selectedBooks.find(book => +book.id === +filteredBook.id)) {
                                            setSelectedBooks([...selectedBooks, filteredBook]);
                                        }   else {
                                                const findElem = [...selectedBooks].find(elem => +elem.id === +filteredBook.id);
                                                const newSelectedBooks = [...selectedBooks].filter(selectBook => selectBook.id !== findElem.id);
                                                setSelectedBooks(newSelectedBooks);
                                        }
                                        event.stopPropagation();
                                    }}><AiFillHeart className={selectedBooks.find(book => +book.id === +filteredBook.id)
                                        ? 
                                            'fa-add-heart active'
                                        : 
                                            'fa-add-heart'} />
                                    </div>
                                    {(!filteredBook.isAvailableForGuest && !userLoggedIn) &&
                                        <FaLock className='fa-lock' />
                                    }
                                </figure>
                                <figcaption className='books__name'>{filteredBook.title}</figcaption>
                            </li>
                            {valueOfAvailableModal &&
                                <NotAvailableModal
                                    bookSrc={bookSrc} 
                                    valueOfAvailableModal={valueOfAvailableModal} 
                                    setValueOfAvailableModal={setValueOfAvailableModal}/>
                            }    
                        </div>
                    ) 
                })}
            </ul>
        </section>
    )
}

export default Books;