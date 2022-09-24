import React from 'react';

import { isLoggedIn } from '@src/store/selectors/userSelectors';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@src/constans/routes.ts';
import { FaLock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NotAvailableModal from '@src/Components/NotAvailableModal/NotAvailableModal';
import './books.scss';

function Books({ filteredBooks, bookSrc, setBookSrc, valueOfAvailableModal, setValueOfAvailableModal, selectedBooks, setSelectedBooks }) {

    const navigate = useNavigate();
    const userLoggedIn = useSelector(isLoggedIn);
    
    return (
        <section className='books'>
            <ul className='books__list'>
                {filteredBooks.map(filteredBook => {
                    return (
                        <div className='books__wrapper' key={filteredBook.id} onClick={() => setBookSrc(filteredBook.src)}>
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

Books.propTypes = {
    filteredBooks: PropTypes.arrayOf(PropTypes.object), 
    bookSrc: PropTypes.string, 
    setBookSrc: PropTypes.func.isRequired, 
    valueOfAvailableModal: PropTypes.bool.isRequired, 
    setValueOfAvailableModal: PropTypes.func.isRequired, 
    selectedBooks: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        genre: PropTypes.string,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        isAvailableForGuest: PropTypes.bool,
        onlyText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
        ]),
        src: PropTypes.string,
        text: PropTypes.string,
        title: PropTypes.string,
    })), 
    setSelectedBooks: PropTypes.func.isRequired,
}

export default Books;