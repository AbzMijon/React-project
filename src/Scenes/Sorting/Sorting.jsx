import React, { useState, useEffect } from "react";

//Components
import NotAvailableModal from "../../Components/NotAvailableModal/NotAvailableModal";
import HiddenBlock from '../../Components/InitialElems/HiddenBlock';
import SkyLogic from "../../Components/InitialElems/SkyLogic";

//fake server
import { dataBaseBooks } from '/fakeServer/db';

//React-Icons
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

//Routing
import { useNavigate } from 'react-router-dom';

//styles
import './sorting.scss';

    function Sorting({ searchValue }) {

    const [bookSrc, setBookSrc] = useState('');
    const [isCheckboxClicked, setAllChecked] = useState(false);
    const [sortingValue, setSortingValue] = useState('');
    const [theme, setTheme] = useState('light');
    const setDarkTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }    
    const [valueOfAvailableModal, setAvailableModal] = useState(false);
    const navigate = useNavigate();
    console.log(searchValue);
    const filterBooks = () =>  [...dataBaseBooks].filter(e => {
        if(isCheckboxClicked) {
            return e.isAvailable;
        }
        else {
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
    });

    const updateData = (childSelectValue) => {
        setSortingValue(childSelectValue);
    }

    useEffect(() => {
        const root = document.querySelector(':root');
        const rootsArray = ['backgroundTheme', 'componentsTheme', 'searchBackgroundTheme', 'colorTheme'];
        rootsArray.forEach(component => {
            root.style.setProperty(`--${component}--default`, `var(--${component}--${theme})`)
        })
    }, [theme])


    return (
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
                                            <li className='books__item' onClick={e.isAvailable ? () => {navigate(`/bookContent/id?=${e.id}`)} : () => {setAvailableModal(true)}}>
                                                <figure className='books__figure'>
                                                    <img src= {e.src}  alt='' className='books__img' />
                                                    <div className='books__add'><BsHeart className='fa-add-heart' /></div>
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
    )
}

export default Sorting;