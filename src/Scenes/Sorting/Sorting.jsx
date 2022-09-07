import React, { useState, useEffect } from "react";

import { useSearchParams } from 'react-router-dom';

import { fetchBooksList } from "../../api/booksApi";
import { useSelector } from 'react-redux/es/exports';
import Spinner from "../../Components/SpinnerLoading/Spinner";
import Header from "../../Components/Table/Header/Header";
import Tools from "../../Components/Table/Tools/Tools";
import ServerError from "../../Components/ServerError/ServerError";
import { isServerError } from "../../store/selectors/serverErrorSelectors";
import Books from "../../Components/Table/Books/Books";
import { isLoggedIn } from "../../store/selectors/userSelectors";
import './sorting.scss';


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
    const isError = useSelector(isServerError);
    const isLogged = useSelector(isLoggedIn);
    
    useEffect(() => {
        fetchBooksList().then(({data}) => {
            setFetchBooks(data);
        });
    }, [])

    const filterBooks = (booksToFilter, sortingValue, handleAvailable, searchString) =>  booksToFilter.filter(book => {
        let isPassed = true;

        if(!isLogged && handleAvailable && !book.isAvailableForGuest) {
            isPassed = false;
        }
        if(searchString && !book.title.toLowerCase().includes(searchString.toLowerCase())) {
            isPassed = false;
        }

        Object.keys(sortingValue).forEach(sortFieldName => {
            switch(sortFieldName) {
                default:
                    if(sortingValue[sortFieldName] && book[sortFieldName] !== sortingValue[sortFieldName]) {
                        isPassed = false;
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
            <Header 
                searchString={searchString} 
                setsearchString={setsearchString} 
                selectedBooks={selectedBooks} 
                setSelectedBooks={setSelectedBooks} 
                setValueOfAvailableModal={setValueOfAvailableModal} />
            <main className='main'>
                <div className='container'>  
                    <Tools 
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
    )
}

export default Sorting;