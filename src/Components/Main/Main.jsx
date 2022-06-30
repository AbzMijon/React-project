//import React
import React from 'react';

//import React-Icons
import { FaAngleRight } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

class Main extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorsVisible: false,
            isGenresVisible: false,
            isAllVisible: false,
            isCheckboxClicked: false,
    }

        //Binds elements
        this.authorsVisible.bind(this);
        this.genresVisible.bind(this);
        this.allVisible.bind(this);
        this.allChecked.bind(this);
}

    authorsVisible() {
        this.setState({
            isAuthorsVisible: !this.state.isAuthorsVisible,
            isGenresVisible: false,
            isAllVisible: false,
        })
    }
    genresVisible() {
        this.setState({
            isGenresVisible: !this.state.isGenresVisible,
            isAuthorsVisible: false,
            isAllVisible: false,
        });
    }
    allVisible() {
        this.setState({
            isAllVisible: !this.state.isAllVisible,
            isAuthorsVisible: false,
            isGenresVisible: false,
        });
    }

    allChecked() {
        this.setState({
            isCheckboxClicked: !this.state.isCheckboxClicked,
        })
    }
    
    render() {
        return (
            <main className='main'>
                <div className='container'>
                    <div className="box"></div>
                    <section className='tools'>
                        <ul className='tools__list'>
                            <li className='tools__item'>
                                <p className='tools__category'  onClick={this.authorsVisible}> Все авторы<FaAngleRight className='fa-angle-right' /></p>

                                {
                                    this.state.isAuthorsVisible ?
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
                                <p className='tools__category' onClick={this.genresVisible}>Все жанры</p>
                                <FaAngleRight className='fa-angle-right' />

                                {
                                    this.state.isGenresVisible ?
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
                                <p className='tools__category' onClick={this.allVisible}>Показать все</p>
                                <FaAngleRight className='fa-angle-right' />

                                {
                                    this.state.isAllVisible ?
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
                                <label htmlFor="tools__check" onClick={this.allChecked}><p className='tools__available'>Посмотреть доступные</p></label> 
                            </li>
                        </ul>
                    </section>
                    
                    <section className='books'>
                        <ul className='books__list'>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Снежная королева</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Фенька</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Рыцари</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Три маленьких поросенка</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Мамонтенок</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Дракон Севера</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Красная Шапка</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Красавица и чудовище</figcaption>
                            </li>
                            <li className='books__item'>
                                <figure className='books__figure'>
                                <img src='https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg' alt='' className='books__img' />
                                <div className='books__add'><BsHeart className='fa-add-heart' /></div>
                                <FaLock className='fa-lock' />
                                </figure>
                                <figcaption className='books__name'>Король-лягушка</figcaption>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        )
    }
}

export default Main;