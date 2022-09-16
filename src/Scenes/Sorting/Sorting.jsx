import React, { useState, useEffect, useMemo } from "react";

import { useSearchParams } from 'react-router-dom';
import { fetchBooksList } from "../../api/booksApi";
import { useSelector } from 'react-redux/es/exports';
import Spinner from "../../Components/SpinnerLoading/Spinner";
import Header from "../../Components/Table/Header/Header";
import Tools, { AUTHORS_LIST, GENRE_LIST, TYPE_LIST } from "../../Components/Table/Tools/Tools";
import ServerError from "../../Components/ServerError/ServerError";
import { isServerError } from "../../store/selectors/serverErrorSelectors";
import Books from "../../Components/Table/Books/Books";
import { IdUser, isLoggedIn } from "../../store/selectors/userSelectors";
import axios from "axios";
import './sorting.scss';

const filtersList = {
    author: {
        filterOptions: AUTHORS_LIST,
    },
    genre: {
        filterOptions: GENRE_LIST,
    },
    type: {
        filterOptions: TYPE_LIST,
    },
}

function Sorting() {
    
    const isError = useSelector(isServerError);
    const isLogged = useSelector(isLoggedIn);
    const userId = useSelector(IdUser);

    const [searchParams, setSearchParams] = useSearchParams();
    const [fetchBooks, setFetchBooks] = useState(null);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState(isLogged ? [] : JSON.parse(localStorage.getItem('selectedBooks')) || []); /* Саздаем state с начальным значеним для залогиненного юзера пустой массив а для гостя просто с локалСторейджа */
    const [successResponseServer, setSuccessResponseServer] = useState(false); /* Создали для того что бы понять когда сервер дал ответ (по умочанию false, а когда пришли данные он станет - true) */
    const [searchString, setsearchString] = useState(searchParams.get('searchString') || ''); 
    const [bookSrc, setBookSrc] = useState('');
    const [allChecked, setAllChecked] = useState(searchParams.get('onlyAvailable') === 'true' ? true : false);
    const initialFilter = useMemo(() => {
        const initialFilterState = {};
        Object.keys(filtersList).forEach(filterEntryValue => {
            initialFilterState[filterEntryValue] = 'all';
        })
        return initialFilterState;
    }, []);
    const [sortingValue, setSortingValue] = useState(initialFilter);  
    const [valueOfAvailableModal, setValueOfAvailableModal] = useState(false);
    
    useEffect(() => {
        fetchBooksList().then(({data}) => {
            setFetchBooks(data);
        });
        /* Делаем гет запрос в котором пишем логику если юзер залогиненный то в selectedBooks ложим данные и изменяем наш ответ successResponseServer на true */
        axios.get(`http://localhost:8000/users/${userId}`).then(response => {
            if(isLogged) {
                setSelectedBooks(response.data.likedBooks);
                setSuccessResponseServer(true);
            } 
        })
    }, [])

    useEffect(() => {
        /* Далее если isLogged && successResponseServer, то при изменении selectedBooks делаем patch */
        if(isLogged && successResponseServer) {
            axios.patch(`http://localhost:8000/users/${userId}`, {
                likedBooks: selectedBooks,
            })
        }   else {
            localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
        }
    }, [selectedBooks]);

    const filterBooks = (booksToFilter, sortingValue, handleAvailable, searchString) =>  booksToFilter.filter(book => {
        let isPassed = true;

        if(!isLogged && handleAvailable && !book.isAvailableForGuest) {
            isPassed = false;
        }
        if(searchString && !book.title.toLowerCase().includes(searchString.toLowerCase())) {
            isPassed = false;
        }
        Object.keys(sortingValue).forEach(sortFieldName => {
            const filterSelected = sortingValue[sortFieldName] !== 'all';
            if(filterSelected) {
                const readableName = filtersList[sortFieldName].filterOptions.find(author => author.name === book[sortFieldName]);
                if((readableName && readableName.id != sortingValue[sortFieldName]) || !readableName) {
                    isPassed = false;
                }
            }
        })
        return isPassed;
    });

    useEffect(() => {
        if(fetchBooks !== null) {
            setFilteredBooks(filterBooks(fetchBooks, sortingValue, allChecked, searchString));
            setSearchParams({searchString: searchString, onlyAvailable: allChecked, ...sortingValue});
        }
    }, [fetchBooks, sortingValue, allChecked, searchString]);

    if((fetchBooks === null && !isError) || (isLogged && !successResponseServer)) {
        return <Spinner />
    }

    return (
        <React.Fragment>
            {/* Ну и если все пришло как надо рендерим наш контент */}
            {(successResponseServer || isLogged === false) && 
                <React.Fragment>
                    {isError && <ServerError />}
                    <Header 
                        searchString={searchString} 
                        setsearchString={setsearchString} 
                        selectedBooks={selectedBooks} 
                        setSelectedBooks={setSelectedBooks} 
                        setValueOfAvailableModal={setValueOfAvailableModal} />
                    <main className='main'>
                        <div className='container'>  
                            <Tools
                                filtersList={filtersList} 
                                sortingValue={sortingValue} 
                                setSortingValue={setSortingValue} 
                                allChecked={allChecked} 
                                setAllChecked={setAllChecked} />
                            <Books 
                                filteredBooks={filteredBooks} 
                                bookSrc={bookSrc} 
                                setBookSrc={setBookSrc} 
                                valueOfAvailableModal={valueOfAvailableModal} 
                                setValueOfAvailableModal={setValueOfAvailableModal} 
                                selectedBooks={selectedBooks} 
                                setSelectedBooks={setSelectedBooks} />
                        </div>
                    </main>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Sorting;