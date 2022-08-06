import React, { useState, useEffect, useContext } from "react";

//Components
import { globalThemeContext } from '../../contexts/theme';
import NotAvailableModal from '../../Components/NotAvailableModal/NotAvailableModal';
import HiddenBlock from '../../Components/HiddenBlock';
import SkyLogic from "../../Components/SkyLogic";
import SelectedBooks from "../../Components/SelectedBooks/SelectedBooks";
import { PATH } from "../../constans/routes";
import { fetchBooksList } from "../../api/booksApi";
import { isLogedIN } from '../../store/userSelectors';
import { useDispatch, useSelector } from 'react-redux/es/exports';

//React-Icons
import { FaLock, FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

//Routing
import { useNavigate } from 'react-router-dom';

//styles
import './sorting.scss';

function Sorting() {

    const [fetchBooks, setFetchBooks] = useState(null);
    const {theme, setTheme} = useContext(globalThemeContext);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState(JSON.parse(localStorage.getItem('selectedBooks')) || []);
    const [checkLikedBooks, setCheckLikedBooks] = useState(false);
    const [searchString, setsearchString] = useState('');
    const [bookSrc, setBookSrc] = useState('');
    const [allChecked, setAllChecked] = useState(false);
    const [sortingValue, setSortingValue] = useState({});  
    const [valueOfAvailableModal, setValueOfAvailableModal] = useState(false);
    const navigate = useNavigate();
    const userLoggedIn = useSelector(isLogedIN);
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetchBooksList().then(({data}) => {
            setFetchBooks(data);
        })
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

    const updateData = (sortFieldName) => (childSelectValue) => {
        const newSoringValue = {...sortingValue};
        newSoringValue[sortFieldName] = childSelectValue;
        setSortingValue(newSoringValue);
    }

    useEffect(() => {
        if(fetchBooks !== null) setFilteredBooks(filterBooks(fetchBooks, sortingValue, allChecked, searchString));
    }, [fetchBooks, sortingValue, allChecked, searchString]);

    useEffect(() => {
        localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
    }, [selectedBooks]);

    if(fetchBooks === null) {
        return (
            <div className="spinner">
                <h5 className="spinner__title">Подождите немного</h5>
                <img className="spinner__img" src="https://i.gifer.com/VAyR.gif" alt="" />
            </div>
        )
    }

    return (
        <React.Fragment>
            <header className='header'>
				<div className='container'>
					<div className='header__wrap'>
						<h2 className='header__login' onClick={() => userLoggedIn ? dispatch({type: 'userLogOUT'}) : navigate(PATH.loginPage)}><FaRegUserCircle className='mini-icon-for-ui' />{userLoggedIn ? 'Выйти': 'Войти'}</h2>
						<div className='header__input-wrap'>
							<input
							type='text'
							placeholder='Поиск..'
							className='header__search'
							value={searchString} 
							onChange={e => setsearchString(e.target.value)} />
							
							<button className='header__submit' type='submit'>{<FaSearch className='fa-search'/>}</button>
								{searchString &&
									<p className='header__search-prompt'>{searchString + '?'}</p>
								}
							
						</div>
						<div className='header__liked' onClick={() => setCheckLikedBooks(true)}><AiFillHeart className='fa-heart' />
                            {selectedBooks.length > 0 &&
                                <div className="header__heart-counter">{selectedBooks.length}</div>
                            }
                        </div>
                        {checkLikedBooks &&
                            <SelectedBooks setValueOfAvailableModal={setValueOfAvailableModal} selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} setCheckLikedBooks={setCheckLikedBooks} />
                        }
					</div>
                    
                </div>
			</header>
            <main className='main'>
                <div className='container'>  
                    <section className='tools'>
                        <ul className='tools__list'>
                            <HiddenBlock handleSelect={updateData('author')} dataArray={['Все авторы', 'Ханс Христиан Андерсен', 'Леонид Пантеллев', 'Виктор Драгунский', 'Джозеф Джейкобс', 'Дина Непомнящая', 'Эндрю Лэнг', 'Джек Лондон']}/>
                            <HiddenBlock handleSelect={updateData('genre')} dataArray={['Все жанры', 'Приключение', 'Обучение', 'Колыбельная песня']}/>
                            <HiddenBlock handleSelect={updateData('onlyText')} dataArray={['Показать все', 'Показать только с текстом', 'Показать только со звуком']}/>
                            <div className='tools__item'>
                                <input type='checkbox' className='tools__checkbox' onChange={() => setAllChecked(!allChecked)} id='tools__check' />
                                <label htmlFor='tools__check'><p className='tools__available'>Посмотреть доступные</p></label> 
                            </div>
                            <div className='tools__theme' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                <div className={theme === 'dark' ? "tools__wrap-theme--dark wrap-theme" : "tools__wrap-theme wrap-theme"}>
                                    <div className={theme === 'dark' ? "tools__circle-theme--dark circle" : "tools__circle-theme circle"}></div>
                                </div>
                            </div>
                            
                        </ul>
                        <SkyLogic theme={theme} />
                    </section>
                    <section className='books'>
                        <ul className='books__list'>
                            {filteredBooks.map(filteredBook => {
                                return (
                                    <div className="books__wrapper" key={filteredBook.id} onClick={() => setBookSrc(filteredBook.src)}>
                                        <li className='books__item' onClick={filteredBook.isAvailableForGuest ? () => {navigate(`${PATH.bookPage(filteredBook.id)}`)} : () => {setValueOfAvailableModal(true)}}>
                                            <figure className='books__figure'>
                                                <img src= {filteredBook.src}  alt='' className='books__img' />
                                                <div className='books__add' onClick={(event) => {
                                                    if(!selectedBooks.includes(filteredBook)) {
                                                        setSelectedBooks([...selectedBooks, filteredBook]);
                                                    }   else {
                                                            const findElem = [...selectedBooks].find(elem => +elem.id === +filteredBook.id);
                                                            const newSelectedBooks = [...selectedBooks].filter(selectBook => selectBook.id !== findElem.id);
                                                            setSelectedBooks(newSelectedBooks);
                                                    }
                                                    event.stopPropagation();
                                                }}><AiFillHeart className={selectedBooks.includes(filteredBook) ? 'fa-add-heart active' : 'fa-add-heart'} /></div>
                                                {!filteredBook.isAvailableForGuest &&
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