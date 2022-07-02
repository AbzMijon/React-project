import React, { useState } from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';

function Tools(props) {

    const [theme, setTheme] = useState(false);
    const setDarkTheme = function() {
        setTheme(!theme);
    }

    return (
        <section className='tools'>
            <ul className='tools__list'>
                <li className='tools__item'>
                    <p className='tools__category'  onClick={props.events.authors}> Все авторы<FaAngleRight className='fa-angle-right' /></p>

                    {
                        props.states.Authors &&
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
                    }
                    
                </li>
                <li className='tools__item'>
                    <p className='tools__category' onClick={props.events.genres}>Все жанры</p>
                    <FaAngleRight className='fa-angle-right' />

                    {
                        props.states.Genres &&
                        <div className='tools__hidden-block genres'>
                            <ul className='tools__hidden-list'>
                                <li className='tools__hidden-item'>Все жанры</li>
                                <li className='tools__hidden-item'>Приключение</li>
                                <li className='tools__hidden-item'>Обучение</li>
                                <li className='tools__hidden-item'>Колыбельная песня</li>
                            </ul>
                    </div>
                    }

                </li>
                <li className='tools__item'>
                    <p className='tools__category' onClick={props.events.all}>Показать все</p>
                    <FaAngleRight className='fa-angle-right' />
                    
                    {
                        props.states.All &&
                        <div className='tools__hidden-block'>
                            <ul className='tools__hidden-list all'>
                                <li className='tools__hidden-item'>Показать все</li>
                                <li className='tools__hidden-item'>Показать только с текстом</li>
                                <li className='tools__hidden-item'>Показать только со звуком</li>
                            </ul>
                        </div>                         
                    }
                    
                </li>
                <li className='tools__item'>
                    <input type='checkbox' className='tools__checkbox' id='tools__check' />
                    <label htmlFor='tools__check' onClick={props.events.checkbox}><p className='tools__available'>Посмотреть доступные</p></label> 
                </li>
                <li className='tools__theme' onClick={setDarkTheme}>
                    {
                        theme ?
                        <div className="tools__wrap-theme--dark wrap-theme">
                            <div className="tools__circle-theme--dark circle"></div>
                        </div>
                        :
                        <div className="tools__wrap-theme wrap-theme">
                            <div className="tools__circle-theme circle"></div>
                        </div>
                    }
                </li>
            </ul>
    </section>
    )
}

export default Tools;