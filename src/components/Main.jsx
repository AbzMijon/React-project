import React from 'react';

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <main className="main">
                <div className="container">
                    <section className='tools'>
                        <ul className="tools__list">
                            <li className="tools__item">
                                <p className="tools__category">Автор<i className ="fa-solid fa-angle-right"></i></p>
                                <div className="tools__hidden-block">
                                    <ul className="tools__hidden-list">
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="tools__item">
                                <p className="tools__category">Жанр</p>
                                <i className ="fa-solid fa-angle-right"></i>
                                <div className="tools__hidden-block">
                                    <ul className="tools__hidden-list">
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="tools__item">
                                <p className="tools__category">Показать все</p>
                                <i className ="fa-solid fa-angle-right"></i>
                                <div className="tools__hidden-block">
                                    <ul className="tools__hidden-list">
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                        <li className="tools__hidden-item"></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="tools__item">
                                <input type="checkbox" className="tools__checkbox" />
                                <p className="tools__available">Посмотреть доступные</p>
                            </li>
                        </ul>
                    </section>
                    
                    <section className='books'>
                        <ul className="books__list">
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618645584328.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>The Snow Queen</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620741041368.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>Fenka</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620808141774.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>Knights</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1619356519779.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>The three little pigs</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1620807600838.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>Baby Mammoth</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618671042924.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>The Dragon of the North</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618247886403.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>Red Hat</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618673467128.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>Beauty and the Beast</figcaption>
                            </li>
                            <li className="books__item">
                                <figure className='books__figure'>
                                <img src="https://s3.eu-west-1.amazonaws.com/fairytalesbucket/img/1618649820912.jpeg" alt="" className="books__img" />
                                <i class="fa-solid fa-circle-heart"></i>
                                <i class="fa-solid fa-lock"></i>
                                </figure>
                                <figcaption className='books__name'>The Frog-King</figcaption>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        )
    }
}

export default Main;