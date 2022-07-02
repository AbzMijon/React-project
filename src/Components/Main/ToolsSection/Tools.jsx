import React, { useState } from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';

//imports React-Components
import HiddenBlock from './HiddenBlock';

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
                    {props.states.Authors &&
                        <HiddenBlock data={['Все авторы', 'Ханс Христиан Андерсен', 'Леонид Пантеллев', 'Виктор Драгунский', 'Джозеф Джейкобс', 'Дина Непомнящая', 'Эндрю Лэнг', 'Джек Лондон']}/>
                    }                 
                </li>

                <li className='tools__item'>
                    <p className='tools__category' onClick={props.events.genres}>Все жанры</p>
                    <FaAngleRight className='fa-angle-right' />
                    {props.states.Genres &&
                        <HiddenBlock data={['Все жанры', 'Приключение', 'Обучение', 'Колыбельная песня']}/>
                    }
                </li>

                <li className='tools__item'>
                    <p className='tools__category' onClick={props.events.all}>Показать все</p>
                    <FaAngleRight className='fa-angle-right' />
                    {props.states.All &&
                        <HiddenBlock data={['Показать все', 'Показать только с текстом', 'Показать только со звуком']}/>                         
                    }
                </li>

                <li className='tools__item'>
                    <input type='checkbox' className='tools__checkbox' id='tools__check' />
                    <label htmlFor='tools__check' onClick={props.events.checkbox}><p className='tools__available'>Посмотреть доступные</p></label> 
                </li>
                <li className='tools__theme' onClick={setDarkTheme}>
                    {theme ?
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