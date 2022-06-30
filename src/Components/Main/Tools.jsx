import React from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';

function Tools(props) {
    return (
        <section className='tools'>
            <ul className='tools__list'>
                <li className='tools__item'>
                    <p className='tools__category'  onClick={props.events.authors}> Все авторы<FaAngleRight className='fa-angle-right' /></p>

                    {
                        props.states.authors ?
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
                    <p className='tools__category' onClick={props.events.genres}>Все жанры</p>
                    <FaAngleRight className='fa-angle-right' />

                    {
                        props.states.Genres ?
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
                    <p className='tools__category' onClick={props.events.all}>Показать все</p>
                    <FaAngleRight className='fa-angle-right' />

                    {
                        props.states.All ?
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
                    <label htmlFor="tools__check" onClick={props.events.checkbox}><p className='tools__available'>Посмотреть доступные</p></label> 
                </li>
            </ul>
    </section>
    )
}

export default Tools;