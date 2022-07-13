import React, { useState, useEffect } from 'react';

//Components
import HiddenBlock from './HiddenBlock';

//styles
import '../Tools/Tools.scss';

function Tools({ headerCheckbox }) {

    const [theme, setTheme] = useState('light');
    const setDarkTheme = () => {
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

                <li className='tools__item'> <HiddenBlock dataArray={['Все авторы', 'Ханс Христиан Андерсен', 'Леонид Пантеллев', 'Виктор Драгунский', 'Джозеф Джейкобс', 'Дина Непомнящая', 'Эндрю Лэнг', 'Джек Лондон']}/></li>
                <li className='tools__item'> <HiddenBlock dataArray={['Все жанры', 'Приключение', 'Обучение', 'Колыбельная песня']}/></li>
                <li className='tools__item'> <HiddenBlock dataArray={['Показать все', 'Показать только с текстом', 'Показать только со звуком']}/></li>
                <li className='tools__item'>
                    <input type='checkbox' className='tools__checkbox' id='tools__check' />
                    <label htmlFor='tools__check' onClick={headerCheckbox}><p className='tools__available'>Посмотреть доступные</p></label> 
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