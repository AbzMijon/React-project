//import React
import React, { useState } from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

//import Components
import BooksItem from './BooksItem';
//import helpers

const Main = function(props) {
    const [isAuthorsVisible, setAuthorsVisible] = useState(false);
    const [isGenresVisible, setGenresVisible] = useState(false);
    const [isAllVisible, setAllVisible] = useState(false);
    const [isCheckboxClicked, setAllChecked] = useState(false);

    const authorsVisible = function() {
        setAuthorsVisible(!isAuthorsVisible);
        setGenresVisible(false), setAllVisible(false);
    }
    const genresVisible = function() {
        setGenresVisible(!isGenresVisible);
        setAllVisible(false), setAuthorsVisible(false);
    }
    const allVisible = function() {
        setAllVisible(!isAllVisible);
        setGenresVisible(false), setAuthorsVisible(false);
    }

    const allChecked = function() {
        setAllChecked(!isCheckboxClicked);
    }
    
        return (
            <main className='main'>
                <div className='container'>
                    <section className='tools'>
                        <ul className='tools__list'>
                            <li className='tools__item'>
                                <p className='tools__category'  onClick={authorsVisible}> Все авторы<FaAngleRight className='fa-angle-right' /></p>

                                {
                                    isAuthorsVisible ?
                                    <div className='tools__hidden-block'>
                                        <ul className='tools__hidden-list authors'>
                                            <li className='tools__hidden-item'>Все авторы</li>
                                            <li className='tools__hidden-item'>Ханс Христиан Андерсен</li>
                                            <li className='tools__hidden-item'>Леонид Пантеллев</li>
                                            <li className='tools__hidden-item'>Виктор Драгунский</li>
                                            <li className='tools__hidden-item'>Джозеф Джейкобс</li>
                                            <li className='tools__hidden-item'>Дина Непомнящая</li>
                                            <li className='tools__hidden-item'>Эндрю Лэнг</li>
                                            <li className='tools__hidden-item'>Джек Лондон</li>
                                        </ul>
                                    </div>
                                    :
                                    <div></div>
                                }
                                
                            </li>
                            <li className='tools__item'>
                                <p className='tools__category' onClick={genresVisible}>Все жанры</p>
                                <FaAngleRight className='fa-angle-right' />

                                {
                                    isGenresVisible ?
                                    <div className='tools__hidden-block genres'>
                                        <ul className='tools__hidden-list'>
                                            <li className='tools__hidden-item'>Все жанры</li>
                                            <li className='tools__hidden-item'>Приключение</li>
                                            <li className='tools__hidden-item'>Обучение</li>
                                            <li className='tools__hidden-item'>Колыбельная песня</li>
                                        </ul>
                                </div>
                                    :
                                    <div></div>
                                }

                            </li>
                            <li className='tools__item'>
                                <p className='tools__category' onClick={allVisible}>Показать все</p>
                                <FaAngleRight className='fa-angle-right' />

                                {
                                    isAllVisible ?
                                    <div className='tools__hidden-block'>
                                        <ul className='tools__hidden-list all'>
                                            <li className='tools__hidden-item'>Показать все</li>
                                            <li className='tools__hidden-item'>Показать только с текстом</li>
                                            <li className='tools__hidden-item'>Показать только со звуком</li>
                                        </ul>
                                    </div>                         
                                    :
                                    <div></div>
                                }
                                

                            </li>
                            <li className='tools__item'>
                                <input type='checkbox' className='tools__checkbox' id='tools__check' />
                                <label htmlFor="tools__check" onClick={allChecked}><p className='tools__available'>Посмотреть доступные</p></label> 
                            </li>
                        </ul>
                    </section>
                    
                    <section className='books'>
                        <ul className='books__list'>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Снежная королева', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Фенька', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Рыцари', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Три маленьких поросенка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Мамонтенок', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Дракон Севера', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Красная Шапка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Красавица и чудовище', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg'}}/>
                                <BooksItem post={{id:Math.round(Math.random() * 1000), title:'Король-лягушка', src: 'https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg'}}/>
                        </ul>
                    </section>
                </div>
            </main>
        )
    }

export default Main;