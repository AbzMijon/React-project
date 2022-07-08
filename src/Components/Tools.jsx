import React, { useState, useEffect } from 'react';

//imports React-Components
import HiddenBlock from './HiddenBlock';

function Tools(props) {
    const [theme, setTheme] = useState('light');
    const setDarkTheme = function() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }    

    useEffect(() => {
        const root = document.querySelector(':root');
        const rootsArray = ['backgroundTheme', 'componentsTheme', 'searchBackgroundTheme', 'colorTheme'];
        rootsArray.forEach(component => {
            root.style.setProperty(`--${component}--default`, `var(--${component}--${theme})`)
        })
    }, [theme])

    return (
        <section className='tools'>
            <ul className='tools__list'>

                <li className='tools__item'> <HiddenBlock data={['Все авторы', 'Ханс Христиан Андерсен', 'Леонид Пантеллев', 'Виктор Драгунский', 'Джозеф Джейкобс', 'Дина Непомнящая', 'Эндрю Лэнг', 'Джек Лондон']}/></li>
                <li className='tools__item'> <HiddenBlock data={['Все жанры', 'Приключение', 'Обучение', 'Колыбельная песня']}/></li>
                <li className='tools__item'> <HiddenBlock data={['Показать все', 'Показать только с текстом', 'Показать только со звуком']}/></li>
                <li className='tools__item'>
                    <input type='checkbox' className='tools__checkbox' id='tools__check' />
                    <label htmlFor='tools__check' onClick={props.events.checkbox}><p className='tools__available'>Посмотреть доступные</p></label> 
                </li>
                <li className='tools__theme' onClick={setDarkTheme}>
                    {theme === 'dark' ?
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
            {theme === 'light' ?
                <div className="clouds">
                    <div className="cloud cloud-1"></div>
                    <div className="cloud cloud-2"></div>
                </div>
                :
                    <div className="moon"></div>
            }
    </section>
    )
}

export default Tools;