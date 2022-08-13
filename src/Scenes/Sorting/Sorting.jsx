import React, { useState, useEffect } from "react";

import NotAvailableModal from '../../Components/NotAvailableModal/NotAvailableModal';
import { PATH } from "../../constans/routes";
import { fetchBooksList } from "../../api/booksApi";
import { isLoggedIn } from '../../store/selectors/userSelectors';
import { useSelector } from 'react-redux/es/exports';
import Spinner from "../../Components/SpinnerLoading/Spinner";

import Header from "../../Components/Table/Header/Header";
import Tools from "../../Components/Table/Tools/Tools";

//React-Icons
import { FaLock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

//Routing
import { useNavigate, useSearchParams } from 'react-router-dom';

//styles
import './sorting.scss';
import ServerError from "../../Components/ServerError/ServerError";

import { isServerError } from "../../store/selectors/serverErrorSelectors";

function Sorting() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [fetchBooks, setFetchBooks] = useState(null);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState(JSON.parse(localStorage.getItem('selectedBooks')) || []);
    const [searchString, setsearchString] = useState(searchParams.get('searchString') || '');
    const [bookSrc, setBookSrc] = useState('');
    const [allChecked, setAllChecked] = useState(searchParams.get('onlyAvailable') === 'true' ? true : false);
    const [sortingValue, setSortingValue] = useState({});  
    const [valueOfAvailableModal, setValueOfAvailableModal] = useState(false);
    const navigate = useNavigate();
    const userLoggedIn = useSelector(isLoggedIn);
    const isError = useSelector(isServerError);
    console.log(isError);

    
    useEffect(() => {
        fetchBooksList().then(({data}) => {
            setFetchBooks(data);
        });
    }, [])

    const filterBooks = (booksToFilter, sortingValue, handleAvailable, searchString) =>  booksToFilter.filter(book => {
        let isPassed = true;

        if(handleAvailable && !book.isAvailableForGuest) {
            isPassed = false;
        }
        if(searchString && !book.title.toLowerCase().includes(searchString.toLowerCase())) {
            isPassed = false;
        }
        Object.keys(sortingValue).forEach(sortFieldName => {
            switch(sortFieldName) {
                default:
                    if(book[sortFieldName] !== sortingValue[sortFieldName]) {
                        isPassed = false;
                    }
                    if(sortingValue[sortFieldName] === 'Все авторы') {
                        isPassed = true;
                    }
                    if(sortingValue[sortFieldName] === 'Все жанры') {
                        isPassed = true;
                    }
                    if(sortingValue[sortFieldName] === 'Показать все') {
                        isPassed = true;
                    }
            }
        })
        return isPassed;
    });

    useEffect(() => {
        if(fetchBooks !== null) {
            setFilteredBooks(filterBooks(fetchBooks, sortingValue, allChecked, searchString));
            setSearchParams({searchString: searchString, onlyAvailable: allChecked, author: sortingValue.author, genre: sortingValue.genre, onlyText: sortingValue.onlyText});
        }
    }, [fetchBooks, sortingValue, allChecked, searchString]);

    useEffect(() => {
        localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
    }, [selectedBooks]);

    if(fetchBooks === null && !isError) {
        return <Spinner />
    }

    return (
        <React.Fragment>
            {isError && <ServerError />}
            <Header searchString={searchString} setsearchString={setsearchString} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} setValueOfAvailableModal={setValueOfAvailableModal} />
            <main className='main'>
                <div className='container'>  
                    <Tools sortingValue={sortingValue} setSortingValue={setSortingValue} allChecked={allChecked} setAllChecked={setAllChecked} />
                    <section className='books'>
                        <ul className='books__list'>
                            {filteredBooks.map(filteredBook => {
                                return (
                                    <div className="books__wrapper" key={filteredBook.id} onClick={() => setBookSrc(filteredBook.src)}>
                                        <li className='books__item' onClick={(filteredBook.isAvailableForGuest || userLoggedIn)  ? () => {navigate(`${PATH.bookPage(filteredBook.id)}`)} : () => {setValueOfAvailableModal(true)}}>
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
                                                }}><AiFillHeart className={selectedBooks.find(book => +book.id === +filteredBook.id) ? 'fa-add-heart active' : 'fa-add-heart'} /></div>
                                                {(!filteredBook.isAvailableForGuest && !userLoggedIn) &&
                                                    <FaLock className='fa-lock' />
                                                }
                                            </figure>
                                            <figcaption className='books__name'>{filteredBook.title}</figcaption>
                                        </li>
                                        {valueOfAvailableModal &&
                                            <NotAvailableModal bookSrc={bookSrc} valueOfAvailableModal={valueOfAvailableModal} setValueOfAvailableModal={setValueOfAvailableModal}/>
                                        }    
                                    </div>
                                ) 
                            })}
                        </ul>
                    </section>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Sorting;