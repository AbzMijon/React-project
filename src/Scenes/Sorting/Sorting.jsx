import React, { useState, useEffect } from "react";

//Components
import NotAvailableModal from "../../Components/NotAvailableModal/NotAvailableModal";
import HiddenBlock from '../../Components/InitialElems/HiddenBlock';
import SkyLogic from "../../Components/InitialElems/SkyLogic";
import SelectedBooks from "../../Components/SelectedBooks/SelectedBooks";

//fake server
import { dataBaseBooks } from '/fakeServer/db';

//React-Icons
import { FaLock } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa'

//Routing
import { useNavigate, Link } from 'react-router-dom';

//styles
import './sorting.scss';

function Sorting() {

    const [selectedBooks, setSelectedBooks] = useState([]);
    const [checkLikedBooks, setCheckLikedBooks] = useState(false);
    const [value, setValue] = useState('');
    const [bookSrc, setBookSrc] = useState('');
    const [isCheckboxClicked, setAllChecked] = useState(false);
    const [sortingValue, setSortingValue] = useState('');
    const [theme, setTheme] = useState('light');
    const setDarkTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }    
    const [valueOfAvailableModal, setAvailableModal] = useState(false);
    const navigate = useNavigate();
    const filterBooks = () =>  [...dataBaseBooks].filter(e => {
        if(isCheckboxClicked) {
            return e.isAvailable;
        }
        if(sortingValue) {
            switch (sortingValue) {
                case 'Ханс Христиан Андерсен':
                    return e.author === 'Ханс Христиан Андерсен';
                case 'Леонид Пантеллев':
                    return e.author === 'Леонид Пантеллев';
                case 'Виктор Драгунский':
                    return e.author === 'Виктор Драгунский';
                case 'Джозеф Джейкобс':
                    return e.author === 'Джозеф Джейкобс';
                case 'Дина Непомнящая':
                    return e.author === 'Дина Непомнящая';
                case 'Эндрю Лэнг':
                    return e.author === 'Эндрю Лэнг';
                case 'Джек Лондон':
                    return e.author === 'Джек Лондон';
                case 'Жанна-Мари Лепренс де Бомон':
                    return e.author === 'Жанна-Мари Лепренс де Бомон';
                case 'Братья Гримм':
                    return e.author === 'Братья Гримм';
                case 'Приключение':
                    return e.genre === 'Приключение';
                case 'Обучение':
                    return e.genre === 'Обучение';
                case 'Колыбельная песня':
                    return e.genre === 'Колыбельная песня';
                case 'Показать только с текстом':
                    return e.onlyText;
                default:
                    return e.author || e.genre || e.isAvailable || e.onlyText;
            }
        }
        if(value) {
            return e.title.toLowerCase().includes(value.toLowerCase());
        }
        return e;
    });

    const updateData = (childSelectValue) => {
        setSortingValue(childSelectValue);
    }

    useEffect(() => {
        const root = document.querySelector(':root');
        const rootsArray = ['backgroundTheme', 'skyTheme', 'componentsTheme', 'searchBackgroundTheme', 'colorTheme'];
        rootsArray.forEach(component => {
            root.style.setProperty(`--${component}--default`, `var(--${component}--${theme})`)
        })
    }, [theme])


    return (
        <React.Fragment>
            <header className='header'>
				<div className='container'>
					<div className='header__wrap'>
							{window.location.href !== 'http://localhost:3000/authorization' ?
								<Link to='/authorization'>
									<h2 className='header__login'><FaRegUserCircle className='mini-icon-for-ui' /> Войти</h2>
									<FaRegUserCircle className='header__icon--mobile' />
								</Link>
								:
								<Link to='/'>
									<h2 className='header__login'>Назад </h2>
									<FaRegUserCircle className='header__icon--mobile' />
								</Link>
							}
						<div className='header__input-wrap'>
							<input
							type='text'
							placeholder='Поиск..'
							className='header__search'
							value={value} 
							onChange={e => setValue(e.target.value)} />
							
							<button className='header__submit' type='submit'>{<FaSearch className='fa-search'/>}</button>

								{value &&
									<p className='header__search-prompt'>{value + '?'}</p>
								}
							
						</div>
						<div className='header__liked' onClick={() => setCheckLikedBooks(true)}><AiFillHeart className='fa-heart' /></div>
                        {checkLikedBooks &&
                            <SelectedBooks selectedBooks={selectedBooks} setSelectedBooks={setSelectedBooks} setCheckLikedBooks={setCheckLikedBooks} />
                        }
					</div>
                    
                </div>
			</header>
        <main className='main'>
            <div className='container'>  
                <section className='tools'>
                    <ul className='tools__list'>

                        <HiddenBlock dataToParent={updateData} dataArray={['Все авторы', 'Ханс Христиан Андерсен', 'Леонид Пантеллев', 'Виктор Драгунский', 'Джозеф Джейкобс', 'Дина Непомнящая', 'Эндрю Лэнг', 'Джек Лондон']}/>
                        <HiddenBlock dataToParent={updateData} dataArray={['Все жанры', 'Приключение', 'Обучение', 'Колыбельная песня']}/>
                        <HiddenBlock dataToParent={updateData} dataArray={['Показать все', 'Показать только с текстом', 'Показать только со звуком']}/>
                        <div className='tools__item'>
                            <input type='checkbox' className='tools__checkbox' id='tools__check' />
                            <label htmlFor='tools__check' onClick={() => setAllChecked(!isCheckboxClicked)}><p className='tools__available'>Посмотреть доступные</p></label> 
                        </div>
                        <div className='tools__theme' onClick={setDarkTheme}>
                            {theme === 'dark' ?
                                <div className="tools__wrap-theme--dark wrap-theme">
                                    <div className="tools__circle-theme--dark circle"></div>
                                </div>
                                :
                                <div className="tools__wrap-theme wrap-theme">
                                    <div className="tools__circle-theme circle"></div>
                                </div>
                            }
                        </div>
                        
                    </ul>
                    <SkyLogic theme={theme}/>
                </section>
                <section className='books'>
                    <ul className='books__list'>
                        {filterBooks().map((e) => {
                            return (
                                <div className="books__wrapper" key={e.id} onClick={() => setBookSrc(e.src)}>
                                            <li className='books__item' onClick={e.isAvailable ? () => {navigate(`/bookContent:id=${e.id}`)} : () => {setAvailableModal(true)}}>
                                                <figure className='books__figure'>
                                                    <img src= {e.src}  alt='' className='books__img' />
                                                    <div className='books__add' onClick={(event) => {
                                                        if(!selectedBooks.includes(e)){
                                                            setSelectedBooks([...selectedBooks, e]);
                                                        }   else {
                                                            const findElem = [...selectedBooks].find(elem => +elem.id === +e.id);
                                                            const newSelectedBooks = [...selectedBooks].filter(book => book.id !== findElem.id);
                                                            setSelectedBooks(newSelectedBooks);
                                                        }
                                                        event.stopPropagation();
                                                    }}><AiFillHeart className={selectedBooks.includes(e) ? 'fa-add-heart active' : 'fa-add-heart'} /></div>
                                                    {!e.isAvailable &&
                                                        <FaLock className='fa-lock' />
                                                    }
                                                </figure>
                                                <figcaption className='books__name'>{e.title}</figcaption>
                                            </li>
                                        {valueOfAvailableModal &&
                                            <NotAvailableModal bookSrc={bookSrc} valueOfAvailableModal={valueOfAvailableModal} setAvailableModal={setAvailableModal}/>
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